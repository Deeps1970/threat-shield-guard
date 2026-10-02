import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Flag, RotateCcw } from "lucide-react";
import { loadResult, type AnalysisResult } from "@/lib/mock-analysis";
import { RiskScore } from "@/components/RiskScore";
import { ThreatIndicators } from "@/components/ThreatIndicators";
import { RecommendationCard } from "@/components/RecommendationCard";

export const Route = createFileRoute("/result")({
  head: () => ({
    meta: [
      { title: "Analysis Result — ThoondilGuard" },
      { name: "description", content: "Threat analysis result with risk score, detected indicators and recommended action." },
      { property: "og:title", content: "Analysis Result — ThoondilGuard" },
      { property: "og:description", content: "Threat analysis result with risk score, detected indicators and recommended action." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ResultPage,
});

function ResultPage() {
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loaded = loadResult();
    if (!loaded) {
      navigate({ to: "/" });
      return;
    }
    setResult(loaded);
  }, [navigate]);

  if (!result) return null;

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-xl font-bold tracking-tight">Analysis Result</h1>
      <div className="mt-5 space-y-4">
        <RiskScore score={result.score} level={result.level} />

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold">Threat Type</h3>
          <p className="mt-1 text-sm text-muted-foreground">{result.threatType}</p>
          {result.domain && (
            <>
              <h3 className="mt-4 text-sm font-semibold">Domain</h3>
              <p className="mt-1 break-all font-mono text-sm text-muted-foreground">{result.domain}</p>
            </>
          )}
        </div>

        <ThreatIndicators indicators={result.indicators} />
        <RecommendationCard explanation={result.explanation} recommendation={result.recommendation} />

        <div className="flex flex-col gap-2 pt-2 sm:flex-row">
          <Link
            to="/report"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Flag className="h-4 w-4" />
            Report Scam
          </Link>
          <Link
            to="/"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-input bg-background px-4 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
          >
            <RotateCcw className="h-4 w-4" />
            Analyze Another
          </Link>
        </div>
      </div>
    </main>
  );
}
