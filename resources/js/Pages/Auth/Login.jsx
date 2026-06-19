import { Link, useForm } from "@inertiajs/react";
import AuthLayout from "../../Layouts/AuthLayout";

export default function Login() {
  const form = useForm({
    email: "",
    password: "",
    remember: false,
  });

  function submit(event) {
    event.preventDefault();
    form.post("/login");
  }

  return (
    <AuthLayout title="Sign in" subtitle="Open your session replay dashboard.">
      <form onSubmit={submit} className="space-y-4">
        <Field label="Email" error={form.errors.email}>
          <input
            value={form.data.email}
            onChange={(event) => form.setData("email", event.target.value)}
            type="email"
            className="input"
            autoComplete="email"
          />
        </Field>
        <Field label="Password" error={form.errors.password}>
          <input
            value={form.data.password}
            onChange={(event) => form.setData("password", event.target.value)}
            type="password"
            className="input"
            autoComplete="current-password"
          />
        </Field>
        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input
            checked={form.data.remember}
            onChange={(event) => form.setData("remember", event.target.checked)}
            type="checkbox"
          />
          Remember me
        </label>
        <button disabled={form.processing} className="button-primary w-full">
          Sign in
        </button>
        <p className="text-center text-sm text-slate-500">
          No account?{" "}
          <Link href="/register" className="font-medium text-slate-950 underline">
            Register
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-slate-700">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-red-600">{error}</span> : null}
    </label>
  );
}
