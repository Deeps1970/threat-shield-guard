import { useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Send, ImageUp, X, CheckCircle2 } from "lucide-react";

const CATEGORIES = [
  "Bank Impersonation",
  "UPI Fraud",
  "KYC Scam",
  "Job Scam",
  "Delivery Scam",
  "Investment Scam",
  "Refund Scam",
  "Other",
];

export function ReportForm({ initialMessage = "", initialUrl = "" }: { initialMessage?: string; initialUrl?: string }) {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [message, setMessage] = useState(initialMessage);
  const [url, setUrl] = useState(initialUrl);
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      setError("Please paste the suspicious message.");
      return;
    }
    // Prototype: report is not sent to a backend yet.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" />
        <h2 className="mt-3 text-lg font-semibold">Report submitted</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Thank you. Your report helps warn others about this scam.
        </p>
        <button
          onClick={() => navigate({ to: "/" })}
          className="mt-5 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Back to Analyze
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-border bg-card p-4 sm:p-6">
      <div>
        <label htmlFor="category" className="text-sm font-medium">
          Scam category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
        >
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Suspicious message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setError("");
          }}
          rows={5}
          placeholder="Paste the message you received..."
          className="mt-1.5 w-full resize-y rounded-lg border border-input bg-background p-3 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
        />
        {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
      </div>

      <div>
        <label htmlFor="url" className="text-sm font-medium">
          URL <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <input
          id="url"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://..."
          className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
        />
      </div>

      <div>
        <label className="text-sm font-medium">
          Screenshot <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
        />
        {fileName ? (
          <div className="mt-1.5 flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2 text-sm">
            <span className="truncate text-muted-foreground">{fileName}</span>
            <button
              type="button"
              onClick={() => {
                setFileName("");
                if (inputRef.current) inputRef.current.value = "";
              }}
              className="ml-2 text-muted-foreground hover:text-foreground"
              aria-label="Remove screenshot"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="mt-1.5 inline-flex items-center gap-2 rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
          >
            <ImageUp className="h-4 w-4" />
            Attach screenshot
          </button>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <Send className="h-4 w-4" />
        Submit Report
      </button>
    </form>
  );
}
