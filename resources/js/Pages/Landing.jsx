import { Link, usePage } from "@inertiajs/react";

const navItems = [
  { label: "Product", href: "#product" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Install", href: "#install" },
  { label: "Privacy", href: "#privacy" },
];

const heroChips = ["Session replay", "Masked inputs", "Project dashboards", "Replay timeline"];

const trustItems = ["Laravel API", "React + Inertia", "MySQL storage", "rrweb replay", "Masked capture"];

const heroMetrics = [
  { label: "Replay setup", value: "2 min" },
  { label: "Input masking", value: "Default" },
  { label: "Event upload", value: "Batched" },
];

const problems = [
  {
    title: "Analytics show what happened",
    copy: "Counts and charts rarely explain the exact user journey that created the number.",
  },
  {
    title: "Recordings get scattered",
    copy: "Without a project key and session list, replay data becomes hard to connect to a website.",
  },
  {
    title: "Privacy needs to be default",
    copy: "Product teams need replay context without collecting sensitive form input values.",
  },
];

const productCards = [
  {
    eyebrow: "Capture",
    title: "Install once and collect masked rrweb events",
    copy: "The public tracker creates a browser session, batches events, and posts them to your Laravel API.",
    points: ["Unique tracking key", "Batched event upload", "Form input masking"],
  },
  {
    eyebrow: "Review",
    title: "Replay sessions from the dashboard",
    copy: "Authenticated users can view only sessions that belong to their own projects and open replay pages.",
    points: ["Project ownership checks", "Session list", "rrweb-player replay"],
  },
  {
    eyebrow: "Act",
    title: "Find friction without adding heavy tooling",
    copy: "Use page URL, browser details, replay events, and created date to understand where visits struggled.",
    points: ["Browser metadata", "Page URL history", "Timeline controls"],
  },
];

const featureGrid = [
  {
    title: "Session replay",
    copy: "Watch captured visits with rrweb-player and review what happened before a user left.",
    accent: "bg-[#264de4]",
  },
  {
    title: "Website projects",
    copy: "Create projects for client sites or products and separate sessions by tracking key.",
    accent: "bg-[#10b981]",
  },
  {
    title: "Secure ownership",
    copy: "Authenticated users can only view sessions attached to their own projects.",
    accent: "bg-[#f59e0b]",
  },
  {
    title: "Developer install",
    copy: "A small public tracker script loads rrweb, batches events, and posts to your API.",
    accent: "bg-[#0ea5e9]",
  },
];

const useCases = [
  "Validate checkout and signup flows",
  "Watch onboarding confusion",
  "Review bugs with real session context",
  "Compare behavior across websites",
];

const setupSteps = [
  "Create a project",
  "Copy the generated tracking key",
  "Paste the snippet on your website",
  "Open sessions and replay visits",
];

const privacyItems = [
  {
    title: "Masked by default",
    copy: "The tracker records with maskAllInputs enabled so form values are not captured in replay data.",
  },
  {
    title: "Scoped by project",
    copy: "Every session is attached to a project tracking key and replay access is checked against the logged-in user.",
  },
  {
    title: "Lightweight MVP",
    copy: "The frontend ships as a Laravel/Inertia app and the tracker batches events instead of posting every tick alone.",
  },
];

export default function Landing({ trackerBaseUrl }) {
  const { auth } = usePage().props;
  const snippet = `<script src="${trackerBaseUrl}/tracker.js"></script>
<script>
  Analytics.init("PROJECT_TRACKING_KEY");
</script>`;

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-[#111827]">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#243ee8] text-sm font-bold text-white shadow-sm shadow-blue-900/20">
              UX
            </span>
            <span className="text-base font-bold tracking-tight text-slate-950">UX Analytics</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-[#eef4ff] hover:text-[#1f3f8f]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="hidden rounded-md px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 sm:inline-flex"
            >
              Login
            </Link>
            <Link
              href={auth.user ? "/dashboard" : "/register"}
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#243ee8] px-4 text-sm font-semibold text-white shadow-sm shadow-blue-900/10 transition hover:-translate-y-0.5 hover:bg-[#1f35bd]"
            >
              {auth.user ? "Dashboard" : "Start free"}
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-x-0 top-0 h-64 bg-[#eef4ff]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:py-20">
            <div>
              <div className="inline-flex rounded-full border border-[#cfe0ff] bg-[#eef4ff] px-3 py-1 text-xs font-semibold uppercase text-[#264de4]">
                Product analytics without the noise
              </div>
              <h1 className="mt-6 max-w-2xl text-5xl font-extrabold leading-tight text-slate-950 sm:text-6xl">
                See why users drop off, not just where.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                A professional session replay platform for websites: install one tracker, capture masked rrweb sessions, and replay real visits from your Laravel dashboard.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={auth.user ? "/projects" : "/register"}
                  className="inline-flex h-12 items-center rounded-md bg-[#243ee8] px-5 text-sm font-bold text-white shadow-sm shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-[#1f35bd]"
                >
                  {auth.user ? "Open projects" : "Create account"}
                </Link>
                <a
                  href="#install"
                  className="inline-flex h-12 items-center rounded-md border border-slate-300 bg-white px-5 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400"
                >
                  View install script
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {heroChips.map((chip) => (
                  <span key={chip} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid max-w-lg grid-cols-3 gap-3">
                {heroMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-lg font-extrabold text-slate-950">{metric.value}</div>
                    <div className="mt-1 text-xs font-semibold uppercase text-slate-500">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:pl-4">
              <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl shadow-slate-950/10">
                <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#f87171]" />
                    <span className="h-3 w-3 rounded-full bg-[#fbbf24]" />
                    <span className="h-3 w-3 rounded-full bg-[#34d399]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-500">Live replay workspace</span>
                </div>
                <img
                  src="/images/landing-hero.png"
                  alt="UX analytics session replay dashboard"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 left-4 right-4 rounded-lg border border-slate-200 bg-white p-4 shadow-xl shadow-slate-950/10 sm:left-10 sm:right-10">
                <DashboardMini />
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-white pt-8 lg:pt-10">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-5 sm:px-8">
              {trustItems.map((item) => (
                <span key={item} className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8" id="product">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-bold uppercase text-[#264de4]">Problem</p>
              <h2 className="mt-3 text-4xl font-extrabold leading-tight text-slate-950">
                Your numbers need replay context.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {problems.map((problem) => (
                <article key={problem.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/[0.03]">
                  <h3 className="text-base font-bold text-slate-950">{problem.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{problem.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase text-[#264de4]">Platform</p>
              <h2 className="mt-3 text-4xl font-extrabold leading-tight text-slate-950">
                Everything needed for the first replay workflow.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Built with React and Tailwind on the frontend, Laravel on the backend, and rrweb for the replay data.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {featureGrid.map((feature) => (
                <article key={feature.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/[0.03]">
                  <span className={`block h-2 w-12 rounded-full ${feature.accent}`} />
                  <h3 className="mt-5 text-lg font-bold text-slate-950">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{feature.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#111827] text-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase text-[#7dd3fc]">Solution</p>
              <h2 className="mt-3 text-4xl font-extrabold leading-tight">
                Walk into each product conversation with a replay, not a guess.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                This MVP keeps the scope controlled and useful: track websites, list sessions, and replay what actually happened.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {productCards.map((card) => (
                <article key={card.title} className="rounded-lg border border-white/10 bg-white/[0.06] p-6">
                  <p className="text-xs font-bold uppercase text-[#7dd3fc]">{card.eyebrow}</p>
                  <h3 className="mt-3 text-xl font-bold">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{card.copy}</p>
                  <ul className="mt-5 space-y-2">
                    {card.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm text-slate-200">
                        <span className="h-2 w-2 rounded-full bg-[#fbbf24]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.9fr]" id="use-cases">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/[0.03] md:p-8">
            <p className="text-sm font-bold uppercase text-[#264de4]">Use cases</p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-950">Replay the moments that matter.</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {useCases.map((item) => (
                <div key={item} className="rounded-lg border border-slate-200 bg-[#f8fafc] p-4 text-sm font-semibold text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/[0.03] md:p-8">
            <p className="text-sm font-bold uppercase text-[#264de4]">How it starts</p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-950">Four steps from blank account to first replay.</h2>
            <div className="mt-8 space-y-3">
              {setupSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-3 rounded-lg border border-slate-200 p-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#eef4ff] text-sm font-bold text-[#264de4]">
                    {index + 1}
                  </span>
                  <span className="text-sm font-semibold text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="install" className="border-y border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase text-[#264de4]">Install script</p>
              <h2 className="mt-3 text-4xl font-extrabold leading-tight text-slate-950">
                Paste two scripts into the website you want to track.
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Put this before the closing body tag. Replace the placeholder with the tracking key generated on your project page.
              </p>
              <div className="mt-6 rounded-lg border border-[#cfe0ff] bg-[#eef4ff] p-4 text-sm leading-6 text-[#1f3f8f]">
                The injected tracker records with <span className="font-bold">maskAllInputs: true</span>, creates a session ID, batches rrweb events, and posts them to <span className="font-mono font-bold">/api/track</span>.
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-slate-800 bg-[#0b1220] shadow-2xl shadow-slate-950/20">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <span className="text-xs font-bold uppercase text-slate-300">Customer website snippet</span>
                <span className="rounded bg-emerald-400/15 px-2 py-1 text-xs font-bold text-emerald-200">Ready</span>
              </div>
              <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-100">
                <code>{snippet}</code>
              </pre>
            </div>
          </div>
        </section>

        <section id="privacy" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase text-[#264de4]">Privacy and performance</p>
              <h2 className="mt-3 text-4xl font-extrabold text-slate-950">Designed to keep the MVP controlled.</h2>
            </div>
            <Link
              href={auth.user ? "/sessions" : "/register"}
              className="inline-flex h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400"
            >
              {auth.user ? "View sessions" : "Create free account"}
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
              {privacyItems.map((item) => (
              <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/[0.03]">
                <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#264de4] text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold leading-tight">Start with the session replay workflow that already works.</h2>
              <p className="mt-4 text-sm leading-6 text-blue-50">
                Create a project, copy the script, open the test page, and watch the first replay from your dashboard.
              </p>
            </div>
            <Link
              href={auth.user ? "/projects" : "/register"}
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 text-sm font-bold text-[#1f3f8f] transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              {auth.user ? "Go to projects" : "Start free"}
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="font-bold text-slate-950">UX Analytics</div>
          <div className="flex flex-wrap gap-4">
            <a href="#product" className="hover:text-slate-950">Product</a>
            <a href="#install" className="hover:text-slate-950">Install</a>
            <Link href="/login" className="hover:text-slate-950">Login</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function DashboardMini() {
  return (
    <div className="grid gap-3 sm:grid-cols-[1fr_1.2fr]">
      <div className="rounded-md bg-[#eef4ff] p-3">
        <div className="text-xs font-bold uppercase text-[#264de4]">Replay quality</div>
        <div className="mt-2 text-2xl font-extrabold text-slate-950">96%</div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-white">
          <div className="h-full w-[78%] rounded-full bg-[#264de4]" />
        </div>
      </div>
      <div className="rounded-md border border-slate-200 p-3">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
          <span>Session timeline</span>
          <span>Masked</span>
        </div>
        <div className="mt-3 grid grid-cols-12 gap-1">
          {["h-6", "h-4", "h-8", "h-3", "h-7", "h-5", "h-9", "h-4", "h-6", "h-5", "h-8", "h-3"].map((height, index) => (
            <span key={`${height}-${index}`} className={`${height} rounded bg-[#dbeafe]`} />
          ))}
        </div>
      </div>
    </div>
  );
}
