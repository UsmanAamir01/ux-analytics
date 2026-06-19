import { Link, usePage } from "@inertiajs/react";
import PublicLayout from "../Layouts/PublicLayout";

const installSteps = [
  {
    title: "Create a website project",
    copy: "Open Projects, add the website URL, and copy the generated tracking key.",
  },
  {
    title: "Paste the tracker snippet",
    copy: "Place the script before the closing body tag on the website you want to record.",
  },
  {
    title: "Visit the tracked site",
    copy: "The script creates a session ID, loads rrweb, masks inputs, and batches events.",
  },
  {
    title: "Replay from your dashboard",
    copy: "Open Sessions, choose a visit, and watch the saved rrweb events in the replay player.",
  },
];

const payloadRows = [
  ["tracking_key", "Connects the event batch to one project."],
  ["session_id", "Keeps browser activity grouped into one visit."],
  ["url", "Stores the page being recorded."],
  ["user_agent", "Provides browser/device context."],
  ["events", "Contains the batched rrweb events."],
];

const checks = [
  "Inputs are masked by default.",
  "Events post to /api/track.",
  "Sessions are scoped to the project owner.",
  "Replay works through rrweb-player.",
];

export default function Demo({ trackerBaseUrl }) {
  const { auth } = usePage().props;
  const snippet = `<script src="${trackerBaseUrl}/tracker.js"></script>
<script>
  Analytics.init("PROJECT_TRACKING_KEY");
</script>`;

  const example = `<body>
  <main>
    Your website content...
  </main>

  ${snippet}
</body>`;

  return (
    <PublicLayout>
      <main>
        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase text-[#264de4]">Tracker demo</p>
              <h1 className="mt-4 text-5xl font-extrabold leading-tight text-slate-950">
                Install the script, record a visit, replay the session.
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                This page explains exactly how a customer website loads your tracker and how the Laravel app receives the replay data.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={auth.user ? "/projects" : "/register"}
                  className="inline-flex h-12 items-center rounded-md bg-[#243ee8] px-5 text-sm font-bold text-white shadow-sm shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-[#1f35bd]"
                >
                  {auth.user ? "Open projects" : "Create account"}
                </Link>
                <a
                  href="#snippet"
                  className="inline-flex h-12 items-center rounded-md border border-slate-300 bg-white px-5 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400"
                >
                  Copy snippet format
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-[#0b1220] shadow-2xl shadow-slate-950/20">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <span className="text-xs font-bold uppercase text-slate-300">Install preview</span>
                <span className="rounded bg-emerald-400/15 px-2 py-1 text-xs font-bold text-emerald-200">HTML</span>
              </div>
              <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-100">
                <code>{example}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-5 md:grid-cols-4">
            {installSteps.map((step, index) => (
              <article key={step.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/[0.03]">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#eef4ff] text-sm font-bold text-[#264de4]">
                  {index + 1}
                </span>
                <h2 className="mt-5 text-lg font-bold text-slate-950">{step.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="snippet" className="border-y border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-bold uppercase text-[#264de4]">The injected script</p>
              <h2 className="mt-3 text-4xl font-extrabold leading-tight text-slate-950">
                Paste this before the closing body tag.
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Replace the placeholder with the real project tracking key shown in your Projects page. On production, use the deployed app domain.
              </p>
              <div className="mt-6 grid gap-3">
                {checks.map((check) => (
                  <div key={check} className="rounded-md border border-slate-200 bg-[#f8fafc] px-4 py-3 text-sm font-semibold text-slate-700">
                    {check}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-slate-800 bg-[#0b1220] shadow-2xl shadow-slate-950/20">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <span className="text-xs font-bold uppercase text-slate-300">Snippet</span>
                <span className="rounded bg-blue-400/15 px-2 py-1 text-xs font-bold text-blue-200">tracker.js</span>
              </div>
              <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-100">
                <code>{snippet}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/[0.03]">
            <p className="text-sm font-bold uppercase text-[#264de4]">What gets sent</p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-950">The batch posted to /api/track</h2>
            <div className="mt-6 overflow-hidden rounded-lg border border-slate-200">
              {payloadRows.map(([field, purpose]) => (
                <div key={field} className="grid gap-2 border-b border-slate-200 p-4 last:border-b-0 sm:grid-cols-[160px_1fr]">
                  <div className="font-mono text-sm font-bold text-slate-950">{field}</div>
                  <div className="text-sm leading-6 text-slate-600">{purpose}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/[0.03]">
            <p className="text-sm font-bold uppercase text-[#264de4]">Test flow</p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-950">Use the built-in test page</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              After creating a project, open its test page link. Interact with the form and buttons, then go to Sessions to replay the visit.
            </p>
            <div className="mt-6 rounded-lg border border-[#cfe0ff] bg-[#eef4ff] p-5">
              <div className="font-mono text-sm font-bold text-[#1f3f8f]">
                /test/PROJECT_TRACKING_KEY
              </div>
              <p className="mt-3 text-sm leading-6 text-[#1f3f8f]">
                This public test page loads the same tracker script and is useful before installing it on a real website.
              </p>
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
