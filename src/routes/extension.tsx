import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ExternalLink, ShieldCheck } from "lucide-react";
export const Route = createFileRoute("/extension")({ component: ExtensionPage });
function ExtensionPage() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-sky-800">
          Companion concept · Demo
        </p>
        <h1 className="mt-2 text-3xl font-bold">Browser extension preview</h1>
        <p className="mt-2 text-slate-600">
          A user-initiated page check concept. No monitoring or automatic page reading is
          implemented.
        </p>
        <section className="mx-auto mt-8 max-w-md rounded-xl border bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="rounded-lg bg-sky-50 p-2 text-sky-900">
              <ShieldCheck />
            </span>
            <div>
              <h2 className="font-semibold">Check this page with ThoondilGuard</h2>
              <p className="text-xs text-slate-500">Prototype extension panel</p>
            </div>
          </div>
          <label htmlFor="page-url" className="mt-5 block text-sm font-medium">
            Current page URL
          </label>
          <input
            id="page-url"
            readOnly
            value="https://example.test/account"
            className="mt-1 w-full rounded-md border bg-slate-50 px-3 py-2 text-sm"
          />
          <button
            onClick={() => setChecked(true)}
            className="mt-4 w-full rounded-lg bg-sky-900 px-4 py-3 font-semibold text-white"
          >
            Check page
          </button>
          {checked && (
            <div role="status" className="mt-4 rounded-lg border border-amber-300 bg-amber-50 p-4">
              <p className="font-semibold">Needs verification</p>
              <p className="mt-1 text-sm text-slate-700">
                This is a mock result. The page URL was not sent to a reputation service.
              </p>
              <div className="mt-3 flex gap-4 text-sm">
                <Link to="/result" className="font-medium underline">
                  Open detailed analysis
                </Link>
                <Link to="/report" className="font-medium underline">
                  Report
                </Link>
              </div>
            </div>
          )}
          <p className="mt-4 flex items-center gap-1 text-xs text-slate-500">
            <ExternalLink className="h-3.5 w-3.5" />
            No automatic browsing or scraping.
          </p>
        </section>
      </main>
    </>
  );
}
