import { Link } from "@inertiajs/react";
import AppLayout from "../../Layouts/AppLayout";

export default function ProjectIndex({ projects, trackerBaseUrl, testBaseUrl }) {
  return (
    <AppLayout title="Projects">
      <div className="mb-4 flex justify-end">
        <Link href="/projects/create" className="button-primary">
          New project
        </Link>
      </div>

      <div className="space-y-4">
        {projects.length ? (
          projects.map((project) => (
            <article key={project.id} className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-slate-950">{project.name}</h2>
                  <p className="mt-1 text-sm text-slate-500">{project.website_url}</p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-xs text-slate-700">
                  {project.tracking_key}
                </span>
              </div>

              <div className="mt-5">
                <h3 className="text-sm font-medium text-slate-700">Tracking snippet</h3>
                <pre className="mt-2 overflow-x-auto rounded-md bg-slate-950 p-4 text-xs text-slate-50">
                  {`<script src="${trackerBaseUrl}/tracker.js"></script>
<script>
  Analytics.init("${project.tracking_key}");
</script>`}
                </pre>
              </div>

              <div className="mt-4 rounded-md border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-sm font-medium text-slate-700">Test page</h3>
                <a
                  href={`${testBaseUrl}/${project.tracking_key}`}
                  target="_blank"
                  className="mt-2 inline-flex text-sm font-medium text-slate-950 underline"
                >
                  Open tracking test page
                </a>
              </div>
            </article>
          ))
        ) : (
          <div className="rounded-lg border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            <h2 className="font-medium text-slate-950">No project yet</h2>
            <p className="mt-1 text-sm text-slate-500">
              Create a website/app to get a tracking key and install snippet.
            </p>
            <Link href="/projects/create" className="button-primary mt-4 inline-flex">
              Create project
            </Link>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
