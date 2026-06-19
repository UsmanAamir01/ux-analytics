import { Link, useForm } from "@inertiajs/react";
import AuthLayout from "../../Layouts/AuthLayout";

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
    <AuthLayout title="Create account" subtitle="Start with one tracked project.">
      <form onSubmit={submit} className="space-y-4">
        <Field label="Name" error={form.errors.name}>
          <input
            value={form.data.name}
            onChange={(event) => form.setData("name", event.target.value)}
            className="input"
            autoComplete="name"
          />
        </Field>
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
            autoComplete="new-password"
          />
        </Field>
        <Field label="Confirm password" error={form.errors.password_confirmation}>
          <input
            value={form.data.password_confirmation}
            onChange={(event) => form.setData("password_confirmation", event.target.value)}
            type="password"
            className="input"
            autoComplete="new-password"
          />
        </Field>
        <button disabled={form.processing} className="button-primary w-full">
          Register
        </button>
        <p className="text-center text-sm text-slate-500">
          Have an account?{" "}
          <Link href="/login" className="font-medium text-slate-950 underline">
            Sign in
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
