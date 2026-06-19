import { Link } from "@inertiajs/react";

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="text-xl font-semibold text-slate-950">
            UX Analytics
          </Link>
          <h1 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">{title}</h1>
          <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">{children}</div>
      </div>
    </div>
  );
}
