(function () {
  const RRWEB_URL = "https://cdn.jsdelivr.net/npm/rrweb@2.0.0-alpha.18/dist/rrweb.min.js";
  const QUEUE_LIMIT = 25;
  const FLUSH_MS = 3000;
  const SCRIPT_SRC = document.currentScript && document.currentScript.src;
  const API_URL = SCRIPT_SRC ? new URL("/api/track", SCRIPT_SRC).toString() : "/api/track";

  let trackingKey = null;
  let sessionId = null;
  let queue = [];
  let flushing = false;

  function getSessionId(key) {
    const storageKey = "analytics_session_id_" + key;
    const existing = sessionStorage.getItem(storageKey);
    if (existing) return existing;

    const id =
      window.crypto && crypto.randomUUID
        ? crypto.randomUUID()
        : "sess_" + Math.random().toString(36).slice(2) + Date.now().toString(36);

    sessionStorage.setItem(storageKey, id);
    return id;
  }

  function loadRrweb() {
    if (window.rrweb && window.rrweb.record) return Promise.resolve();

    return new Promise(function (resolve, reject) {
      const script = document.createElement("script");
      script.src = RRWEB_URL;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  function flush() {
    if (flushing || !queue.length || !trackingKey || !sessionId) return;
    flushing = true;

    const events = queue.splice(0, QUEUE_LIMIT);
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        tracking_key: trackingKey,
        session_id: sessionId,
        url: window.location.href,
        user_agent: navigator.userAgent,
        events: events,
      }),
    })
      .catch(function () {
        queue = events.concat(queue).slice(0, 500);
      })
      .finally(function () {
        flushing = false;
      });
  }

  window.Analytics = {
    init: function (key) {
      if (!key || typeof key !== "string") return;

      trackingKey = key;
      sessionId = getSessionId(key);

      loadRrweb().then(function () {
        window.rrweb.record({
          emit: function (event) {
            queue.push(event);
            if (queue.length >= QUEUE_LIMIT) flush();
          },
          maskAllInputs: true,
          maskTextSelector: "[data-private]",
          blockClass: "analytics-block",
        });

        setInterval(flush, FLUSH_MS);
        window.addEventListener("visibilitychange", function () {
          if (document.visibilityState === "hidden") flush();
        });
        window.addEventListener("pagehide", flush);
      });
    },
  };
})();
