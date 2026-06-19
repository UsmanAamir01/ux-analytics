import AppLayout from "../../Layouts/AppLayout";

export default function Plans({ plans }) {
  return (
    <AppLayout title="Billing">
      <div className="grid gap-4 md:grid-cols-2">
        {plans.map((plan) => (
          <div key={plan.name} className="rounded-lg border border-slate-200 bg-white p-6">
            <div className="flex items-baseline justify-between">
              <h2 className="text-lg font-semibold text-slate-950">{plan.name}</h2>
              <div className="text-2xl font-semibold text-slate-950">{plan.price}</div>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-slate-600">
              {plan.features.map((feature) => (
                <li key={feature}>- {feature}</li>
              ))}
            </ul>
            <button className="button-primary mt-6 w-full">Current milestone</button>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}
