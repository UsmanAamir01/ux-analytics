import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import AppLayout from "../../Layouts/AppLayout";
import PublicLayout from "../../Layouts/PublicLayout";

export default function Plans({ plans, publicPage = false }) {
  const content = <PricingContent plans={plans} publicPage={publicPage} />;

  if (publicPage) {
    return <PublicLayout>{content}</PublicLayout>;
  }

  return <AppLayout title="Billing">{content}</AppLayout>;
}

function PricingContent({ plans, publicPage }) {
  const { auth } = usePage().props;
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <main className={publicPage ? "bg-[#f4f7fb]" : ""}>
      <section className={publicPage ? "mx-auto max-w-7xl px-5 py-16 sm:px-8" : ""}>
        <div className={publicPage ? "" : "rounded-lg border border-slate-200 bg-white p-6"}>
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-[#264de4]">Pricing</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
              Choose the UX Analytics plan that fits your traffic.
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Start free, upgrade when session volume grows, or choose an agency plan for multiple clients and advanced reporting.
            </p>
          </div>

          <div className="mt-8 inline-flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`h-11 rounded-lg px-5 text-sm font-bold transition ${
                billingCycle === "monthly"
                  ? "bg-[#243ee8] text-white shadow-sm shadow-blue-900/20"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("yearly")}
              className={`h-11 rounded-lg px-5 text-sm font-bold transition ${
                billingCycle === "yearly"
                  ? "bg-[#243ee8] text-white shadow-sm shadow-blue-900/20"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              Yearly Billing
              <span
                className={`ml-2 rounded-full px-2 py-0.5 text-xs ${
                  billingCycle === "yearly"
                    ? "bg-white/15 text-white"
                    : "bg-[#eef4ff] text-[#264de4]"
                }`}
              >
                Save 2 months
              </span>
            </button>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingCard
                key={plan.name}
                plan={plan}
                href={auth.user ? "/projects" : "/register"}
                publicPage={publicPage}
                billingCycle={billingCycle}
              />
            ))}
          </div>
        </div>
      </section>

      {publicPage ? (
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-5 px-5 py-12 sm:px-8 md:grid-cols-3">
            <ValueCard title="Masked replay" copy="Every plan records with input masking enabled in the tracker." />
            <ValueCard title="Laravel ownership" copy="Sessions stay attached to your projects and authenticated account." />
            <ValueCard title="Simple upgrade path" copy="Start with Free and move to Professional when traffic grows." />
          </div>
        </section>
      ) : null}
    </main>
  );
}

function PricingCard({ plan, href, billingCycle }) {
  const price = billingCycle === "yearly" ? plan.yearlyPrice : plan.price;
  const period = billingCycle === "yearly" ? plan.yearlyPeriod : plan.period;
  const billingNote = billingCycle === "yearly" ? plan.yearlyNote : "Billed monthly";

  return (
    <article
      className={`relative flex min-h-full flex-col rounded-lg border p-6 shadow-sm transition hover:-translate-y-1 ${
        plan.highlighted
          ? "border-[#f97316] bg-[#fff7ed] shadow-orange-900/10 ring-2 ring-[#fb923c]"
          : "border-slate-200 bg-white shadow-slate-950/[0.03]"
      }`}
    >
      {plan.badge ? (
        <div className="absolute right-5 top-5 rounded-full bg-[#f97316] px-3 py-1 text-xs font-bold text-white">
          {plan.badge}
        </div>
      ) : null}

      <div className="pr-24">
        <h2 className="text-2xl font-extrabold text-slate-950">{plan.name}</h2>
        <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-600">{plan.description}</p>
      </div>

      <div className="mt-6 flex items-end gap-1">
        <span className="text-5xl font-extrabold tracking-tight text-slate-950">{price}</span>
        <span className="pb-2 text-sm font-semibold text-slate-500">{period}</span>
      </div>
      <p className="mt-2 min-h-5 text-sm font-semibold text-[#264de4]">{billingNote}</p>

      <Link
        href={href}
        className={`mt-6 inline-flex h-12 w-full items-center justify-center rounded-xl text-sm font-bold transition ${
          plan.highlighted
            ? "bg-gradient-to-t from-[#f97316] to-[#fb923c] text-white shadow-lg shadow-orange-500/25 hover:from-[#ea580c] hover:to-[#f97316]"
            : "bg-gradient-to-t from-slate-950 to-slate-700 text-white shadow-lg shadow-slate-900/15 hover:from-slate-900 hover:to-slate-700"
        }`}
      >
        {plan.button}
      </Link>

      <div className="mt-6 border-t border-slate-200 pt-6">
        <h3 className="text-sm font-extrabold uppercase text-slate-950">Features</h3>
        <ul className="mt-4 space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex gap-3 text-sm font-medium leading-6 text-slate-700">
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border border-[#f97316] bg-white text-[#f97316]">
                <CheckIcon />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function ValueCard({ title, copy }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/[0.03]">
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
    </article>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
      <path d="M5 10.5L8.2 13.7L15.2 6.3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
