import { Link, usePage } from "@inertiajs/react";

const metrics = [
  { label: "Setup", value: "2 scripts" },
  { label: "Input masking", value: "On" },
  { label: "Replay", value: "rrweb" },
];

const steps = [
  {
    title: "Create a project",
    copy: "Add a website, copy its tracking key, and keep each client site separate.",
  },
  {
    title: "Install the snippet",
    copy: "Paste the tracker before the closing body tag on the site you want to observe.",
  },
  {
    title: "Replay visits",
    copy: "Open captured sessions, watch the rrweb replay, and review the page path and browser.",
  },
];

export default function Landing({ trackerBaseUrl }) {
  const { auth } = usePage().props;
  const snippet = `<script src="${trackerBaseUrl}/tracker.js"></script>
<script>
  Analytics.init("PROJECT_TRACKING_KEY");
</script>`;

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="text-base font-semibold text-slate-950">
            UX Analytics
          </Link>
          <nav className="flex items-center gap-2 text-sm">
            <Link
              href="/login"
              className="rounded-md px-3 py-2 font-medium text-slate-700 hover:bg-white/70 hover:text-slate-950"
            >
              Login
            </Link>
            <Link
              href={auth.user ? "/dashboard" : "/register"}
              className="rounded-md bg-slate-950 px-4 py-2 font-medium text-white shadow-sm hover:bg-slate-800"
            >
              {auth.user ? "Dashboard" : "Start free"}
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative min-h-[86vh] overflow-hidden">
        <img
          src="/images/landing-hero.png"
          alt="UX analytics dashboard preview"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/55" />

        <div className="relative z-10 mx-auto flex min-h-[86vh] max-w-7xl items-center px-5 pb-16 pt-24 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-emerald-700">Session replay for small teams</p>
            <h1 className="mt-4 max-w-xl text-5xl font-semibold leading-tight text-slate-950 sm:text-6xl">
              UX Analytics
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700">
              Record masked visitor sessions, replay real journeys, and spot where users hesitate before the next release.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={auth.user ? "/dashboard" : "/register"}
                className="inline-flex h-11 items-center rounded-md bg-slate-950 px-5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                {auth.user ? "Open dashboard" : "Create account"}
              </Link>
              <a
                href="#install"
                className="inline-flex h-11 items-center rounded-md border border-slate-300 bg-white/80 px-5 text-sm font-semibold text-slate-800 hover:bg-white"
              >
                View snippet
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="border-l border-slate-300 pl-4">
                  <div className="text-xl font-semibold text-slate-950">{metric.value}</div>
                  <div className="mt-1 text-xs uppercase text-slate-500">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main>
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-5 px-5 py-12 sm:px-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-lg border border-slate-200 bg-white p-5">
                <div className="text-xs font-semibold text-emerald-700">0{index + 1}</div>
                <h2 className="mt-3 text-lg font-semibold text-slate-950">{step.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="install" className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase text-emerald-700">Website install</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">The script your customer site loads</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Each project gets its own tracking key. The script below loads the public tracker from this Laravel app,
                creates a browser session, records masked rrweb events, batches them, and posts them back to
                <span className="font-mono text-slate-800"> /api/track</span>.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-950 p-5 shadow-sm">
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-slate-200">Paste before closing body tag</span>
                <span className="rounded bg-emerald-400/15 px-2 py-1 text-xs font-medium text-emerald-200">
                  Masked inputs
                </span>
              </div>
              <pre className="overflow-x-auto text-sm leading-6 text-slate-100">
                <code>{snippet}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Ready to capture your first replay?</h2>
              <p className="mt-2 text-sm text-slate-300">
                Create a project, copy the snippet, and open the built-in test page to confirm events are flowing.
              </p>
            </div>
            <Link
              href={auth.user ? "/projects" : "/register"}
              className="inline-flex h-11 items-center justify-center rounded-md bg-white px-5 text-sm font-semibold text-slate-950 hover:bg-slate-100"
            >
              {auth.user ? "Go to projects" : "Start now"}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
