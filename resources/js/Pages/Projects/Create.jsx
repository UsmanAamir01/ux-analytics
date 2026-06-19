import { useForm } from "@inertiajs/react";
import AppLayout from "../../Layouts/AppLayout";

export default function CreateProject() {
  const form = useForm({
    name: "",
    website_url: "",
  });

  function submit(event) {
    event.preventDefault();
    form.post("/projects");
  }

  return (
    <AppLayout title="Create project">
      <form onSubmit={submit} className="max-w-xl rounded-lg border border-slate-200 bg-white p-6">
        <Field label="Project name" error={form.errors.name}>
          <input
            value={form.data.name}
            onChange={(event) => form.setData("name", event.target.value)}
            className="input"
            placeholder="Marketing site"
          />
        </Field>
        <Field label="Website URL" error={form.errors.website_url}>
          <input
            value={form.data.website_url}
            onChange={(event) => form.setData("website_url", event.target.value)}
            className="input"
            placeholder="https://example.com"
          />
        </Field>
        <button disabled={form.processing} className="button-primary mt-5">
          Create project
        </button>
      </form>
    </AppLayout>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="mb-4 block">
      <span className="mb-1 block text-sm font-medium text-slate-700">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-red-600">{error}</span> : null}
    </label>
  );
}
