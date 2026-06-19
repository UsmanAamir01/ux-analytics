import { Link } from "@inertiajs/react";
import AppLayout from "../Layouts/AppLayout";

export default function Dashboard({ stats, recentSessions }) {
  return (
    <AppLayout title="Dashboard">
      <div className="grid gap-4 md:grid-cols-3">
        <Stat label="Projects" value={stats.projects} />
        <Stat label="Sessions" value={stats.sessions} />
        <Stat label="rrweb events" value={stats.events} />
      </div>

      <section className="mt-8 rounded-lg border border-slate-200 bg-white">
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
          <h2 className="font-medium text-slate-950">Recent sessions</h2>
          <Link href="/sessions" className="text-sm font-medium text-slate-700 underline">
            View all
          </Link>
        </div>
        <div className="divide-y divide-slate-100">
          {recentSessions.length ? (
            recentSessions.map((session) => (
              <Link
                key={session.id}
                href={`/sessions/${session.id}/replay`}
                className="block px-4 py-3 text-sm hover:bg-slate-50"
              >
                <div className="font-medium text-slate-950">{session.session_id}</div>
                <div className="mt-1 truncate text-slate-500">{session.page_url}</div>
              </Link>
            ))
          ) : (
            <div className="px-4 py-8 text-center text-sm text-slate-500">
              No sessions yet. Create a project and install the snippet.
            </div>
          )}
        </div>
      </section>
    </AppLayout>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-slate-950">{value}</p>
    </div>
  );
}
