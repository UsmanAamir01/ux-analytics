import { useEffect, useRef } from "react";
import { Link } from "@inertiajs/react";
import rrwebPlayer from "rrweb-player";
import "rrweb-player/dist/style.css";
import AppLayout from "../../Layouts/AppLayout";

export default function Replay({ session, events }) {
  const playerRef = useRef(null);
  const hasEvents = Array.isArray(events) && events.length > 0;

  useEffect(() => {
    if (!playerRef.current || !hasEvents) return undefined;

    playerRef.current.innerHTML = "";

    new rrwebPlayer({
      target: playerRef.current,
      props: {
        events,
        width: Math.min(window.innerWidth - 64, 1024),
        height: 576,
        autoPlay: false,
      },
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.innerHTML = "";
      }
    };
  }, [events, hasEvents]);

  return (
    <AppLayout title="Replay">
      <div className="mb-4">
        <Link href="/sessions" className="text-sm font-medium text-slate-700 underline">
          Back to sessions
        </Link>
      </div>

      <div className="mb-4 rounded-lg border border-slate-200 bg-white p-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-slate-950">
              {session.project || "Session replay"}
            </div>
            <div className="mt-1 font-mono text-xs text-slate-500">{session.session_id}</div>
          </div>
          <div className="text-right text-xs text-slate-500">
            <div>{session.created_at}</div>
            <div>{session.browser || "Unknown browser"}</div>
          </div>
        </div>

        <div className="mt-3 truncate text-sm text-slate-700" title={session.page_url || ""}>
          {session.page_url || "No URL captured"}
        </div>
        <div className="mt-1 truncate text-xs text-slate-500" title={session.user_agent || ""}>
          {session.user_agent || "No user agent captured"}
        </div>
      </div>

      {hasEvents ? (
        <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
          <div ref={playerRef} />
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
          <div className="text-sm font-medium text-slate-900">No replay events yet</div>
          <div className="mt-2 text-sm text-slate-500">
            This session exists, but no rrweb events were saved for it.
          </div>
        </div>
      )}
    </AppLayout>
  );
}
