import { Link } from "@inertiajs/react";
import AppLayout from "../../Layouts/AppLayout";

export default function SessionsIndex({ sessions }) {
  return (
    <AppLayout title="Sessions">
      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-100 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Project</th>
              <th className="px-4 py-3">Session ID</th>
              <th className="px-4 py-3">URL</th>
              <th className="px-4 py-3">Browser / User agent</th>
              <th className="px-4 py-3">Created</th>
              <th className="px-4 py-3 text-right">Replay</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {sessions.data.length ? (
              sessions.data.map((session) => (
                <tr key={session.id} className="align-top">
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-900">
                    {session.project || "Untitled project"}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-slate-700">
                    {session.session_id}
                  </td>
                  <td className="max-w-xs px-4 py-3 text-slate-600">
                    <div className="truncate" title={session.page_url || ""}>
                      {session.page_url || "No URL captured"}
                    </div>
                  </td>
                  <td className="max-w-sm px-4 py-3 text-slate-600">
                    <div className="whitespace-nowrap font-medium text-slate-800">
                      {session.browser || "Unknown browser"}
                    </div>
                    <div className="mt-1 truncate text-xs text-slate-500" title={session.user_agent || ""}>
                      {session.user_agent || "No user agent captured"}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-500">
                    {session.created_at}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link
                      href={`/sessions/${session.id}/replay`}
                      className="rounded-md border border-slate-300 px-3 py-1.5 text-slate-700 hover:bg-slate-50"
                    >
                      Replay
                      {session.events_count ? ` (${session.events_count})` : ""}
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-4 py-10 text-center text-slate-500">
                  No sessions captured yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {sessions.links?.length > 3 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {sessions.links.map((link) => (
            <Link
              key={`${link.label}-${link.url}`}
              href={link.url || "#"}
              preserveScroll
              className={`rounded-md border px-3 py-1.5 text-sm ${
                link.active
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-300 text-slate-700 hover:bg-slate-100"
              } ${link.url ? "" : "pointer-events-none opacity-50"}`}
              dangerouslySetInnerHTML={{ __html: link.label }}
            />
          ))}
        </div>
      ) : null}
    </AppLayout>
  );
}
