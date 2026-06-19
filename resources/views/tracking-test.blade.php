<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Tracking Test - {{ $project->name }}</title>
    <script src="{{ $trackerUrl }}"></script>
    <script>
      window.Analytics?.init(@json($project->tracking_key));
    </script>
    <style>
      body {
        margin: 0;
        background: #f8fafc;
        color: #0f172a;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }

      main {
        max-width: 760px;
        margin: 0 auto;
        padding: 48px 24px;
      }

      .panel {
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        background: #fff;
        padding: 24px;
        box-shadow: 0 1px 2px rgb(15 23 42 / 0.04);
      }

      h1 {
        margin: 0;
        font-size: 28px;
        letter-spacing: -0.02em;
      }

      p {
        color: #475569;
        line-height: 1.6;
      }

      .grid {
        display: grid;
        gap: 12px;
        margin-top: 24px;
      }

      label {
        display: grid;
        gap: 6px;
        color: #334155;
        font-size: 14px;
        font-weight: 600;
      }

      input,
      textarea,
      select {
        border: 1px solid #cbd5e1;
        border-radius: 8px;
        padding: 10px 12px;
        font: inherit;
      }

      textarea {
        min-height: 90px;
      }

      button {
        width: fit-content;
        border: 0;
        border-radius: 8px;
        background: #020617;
        color: #fff;
        cursor: pointer;
        font: inherit;
        font-weight: 700;
        padding: 10px 16px;
      }

      code {
        border-radius: 6px;
        background: #f1f5f9;
        padding: 2px 6px;
      }
    </style>
  </head>
  <body>
    <main>
      <section class="panel">
        <h1>Tracking test page</h1>
        <p>
          This public page is recording rrweb events for <strong>{{ $project->name }}</strong>.
          Click, type, scroll, and submit the sample form, then return to
          <code>/sessions</code> to replay the captured visit.
        </p>

        <form class="grid" onsubmit="event.preventDefault(); document.getElementById('status').textContent = 'Sample form submitted at ' + new Date().toLocaleTimeString();">
          <label>
            Sample name
            <input name="name" placeholder="Type here to verify input masking">
          </label>
          <label>
            Sample plan
            <select name="plan">
              <option>Free</option>
              <option>Individual</option>
              <option>Agency</option>
            </select>
          </label>
          <label>
            Notes
            <textarea name="notes" placeholder="This text should be masked by rrweb."></textarea>
          </label>
          <button type="submit">Generate interaction</button>
        </form>

        <p id="status"></p>
      </section>
    </main>
  </body>
</html>
