import { Link, useForm } from "@inertiajs/react";

export default function Register() {
  const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  function submit(event) {
    event.preventDefault();
    form.post("/register");
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-300/60 lg:grid-cols-2">
          {/* Left Side */}
          <div className="relative hidden min-h-[720px] overflow-hidden bg-slate-950 p-10 text-white lg:block">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.45),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(139,92,246,0.42),transparent_34%),linear-gradient(135deg,#020617,#0f172a_48%,#111827)]" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="mb-12 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                    <LogoIcon />
                  </div>

                  <div>
                    <h1 className="text-xl font-bold">UX Analytics</h1>
                    <p className="text-sm text-slate-300">
                      User behavior analytics
                    </p>
                  </div>
                </div>

                <div className="max-w-md">
                  <span className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-blue-100 ring-1 ring-white/15">
                    Start tracking in minutes
                  </span>

                  <h2 className="text-5xl font-bold leading-tight tracking-tight">
                    Create your workspace and start analyzing sessions.
                  </h2>

                  <p className="mt-6 text-base leading-7 text-slate-300">
                    Add your first project, install the tracking script, and
                    view real user behavior through clean session replays.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <Stat value="3" label="Free projects" />
                <Stat value="500+" label="Sessions/mo" />
                <Stat value="Live" label="Replay data" />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex min-h-[720px] items-center justify-center overflow-hidden p-6 sm:p-10">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative w-full max-w-md">
              <div className="mb-8 text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 shadow-lg shadow-blue-500/25">
                  <LogoIcon />
                </div>

                <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                  Create account
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Start with your first UX Analytics project.
                </p>
              </div>

              <form onSubmit={submit} className="space-y-5">
                <Field label="Full name" error={form.errors.name}>
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                      <UserIcon />
                    </span>

                    <input
                      value={form.data.name}
                      onChange={(event) =>
                        form.setData("name", event.target.value)
                      }
                      type="text"
                      placeholder="Enter your name"
                      autoComplete="name"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </Field>

                <Field label="Email address" error={form.errors.email}>
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                      <EmailIcon />
                    </span>

                    <input
                      value={form.data.email}
                      onChange={(event) =>
                        form.setData("email", event.target.value)
                      }
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </Field>

                <Field label="Password" error={form.errors.password}>
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                      <LockIcon />
                    </span>

                    <input
                      value={form.data.password}
                      onChange={(event) =>
                        form.setData("password", event.target.value)
                      }
                      type="password"
                      placeholder="Create a password"
                      autoComplete="new-password"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </Field>

                <Field
                  label="Confirm password"
                  error={form.errors.password_confirmation}
                >
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                      <LockIcon />
                    </span>

                    <input
                      value={form.data.password_confirmation}
                      onChange={(event) =>
                        form.setData(
                          "password_confirmation",
                          event.target.value,
                        )
                      }
                      type="password"
                      placeholder="Confirm your password"
                      autoComplete="new-password"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </Field>

                <button
                  disabled={form.processing}
                  className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:shadow-xl hover:shadow-blue-500/30 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {form.processing ? "Creating account..." : "Create account"}
                </button>

                <p className="pt-2 text-center text-sm text-slate-500">
                  Have an account?{" "}
                  <Link
                    href="/login"
                    className="font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 hover:text-blue-600 hover:decoration-blue-500"
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </span>

      {children}

      {error ? (
        <span className="mt-2 block text-xs font-medium text-red-600">
          {error}
        </span>
      ) : null}
    </label>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur">
      <p className="text-lg font-bold text-white">{value}</p>
      <p className="mt-1 text-xs text-slate-300">{label}</p>
    </div>
  );
}

function LogoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6 text-white"
      aria-hidden="true"
    >
      <path
        d="M4 17V7.8C4 6.81 4.81 6 5.8 6h12.4c.99 0 1.8.81 1.8 1.8V17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7 15l3-3 2.2 2.2L17 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 19h10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M4.5 20a7.5 7.5 0 0 1 15 0"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M4 7.75A2.75 2.75 0 0 1 6.75 5h10.5A2.75 2.75 0 0 1 20 7.75v8.5A2.75 2.75 0 0 1 17.25 19H6.75A2.75 2.75 0 0 1 4 16.25v-8.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m6.5 8 4.04 3.2a2.35 2.35 0 0 0 2.92 0L17.5 8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M7 10V8a5 5 0 0 1 10 0v2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M6.75 10h10.5A2.75 2.75 0 0 1 20 12.75v4.5A2.75 2.75 0 0 1 17.25 20H6.75A2.75 2.75 0 0 1 4 17.25v-4.5A2.75 2.75 0 0 1 6.75 10Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M12 14v2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
