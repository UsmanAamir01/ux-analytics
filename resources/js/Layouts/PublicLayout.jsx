import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

const navItems = [
  { label: "Product", href: "/#product" },
  { label: "Use cases", href: "/#use-cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "Install", href: "/#install" },
  { label: "Demo", href: "/demo" },
  { label: "Privacy", href: "/#privacy" },
];

export default function PublicLayout({ children }) {
  const { auth } = usePage().props;
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-[#111827]">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="UX Analytics" className="h-12 w-40 rounded-md object-cover object-center" />
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

          <div className="hidden items-center gap-2 sm:flex">
            <Link
              href="/login"
              className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
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

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 lg:hidden"
            aria-label="Toggle navigation"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>
        </div>

        {open ? (
          <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-[#eef4ff] hover:text-[#1f3f8f]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2 sm:hidden">
                <Link href="/login" className="rounded-md border border-slate-200 px-3 py-2 text-center text-sm font-semibold text-slate-700">
                  Login
                </Link>
                <Link href={auth.user ? "/dashboard" : "/register"} className="rounded-md bg-[#243ee8] px-3 py-2 text-center text-sm font-semibold text-white">
                  {auth.user ? "Dashboard" : "Start free"}
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      {children}

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="UX Analytics" className="h-12 w-40 rounded-md object-cover object-center" />
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
              Session replay and website UX analytics built with Laravel, React, MySQL, rrweb, and rrweb-player.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-950">Product</h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-600">
              <a href="/#product" className="hover:text-slate-950">Features</a>
              <a href="/#install" className="hover:text-slate-950">Install script</a>
              <a href="/pricing" className="hover:text-slate-950">Pricing</a>
              <a href="/demo" className="hover:text-slate-950">Demo guide</a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-950">App</h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-600">
              <Link href="/login" className="hover:text-slate-950">Login</Link>
              <Link href={auth.user ? "/dashboard" : "/register"} className="hover:text-slate-950">
                {auth.user ? "Dashboard" : "Create account"}
              </Link>
              <Link href={auth.user ? "/billing/plans" : "/register"} className="hover:text-slate-950">Plans</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between">
            <span>Copyright 2026 UX Analytics. Built for the $15 MVP milestone.</span>
            <span>Masked session replay for websites.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

