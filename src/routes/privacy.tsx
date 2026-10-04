import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ThoondilGuard" },
      {
        name: "description",
        content:
          "How ThoondilGuard processes information submitted for scam and phishing analysis.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:py-16">
      <article className="space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            ThoondilGuard Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">Last updated: October 4, 2026</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. What ThoondilGuard Does</h2>
          <p>
            ThoondilGuard helps users identify potential phishing, fraud, and scam warning signs in
            suspicious messages, URLs, and screenshots.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Information We Process</h2>
          <p>ThoondilGuard may process:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Text or messages submitted for analysis</li>
            <li>URLs or links submitted for analysis</li>
            <li>Screenshots or images submitted for analysis</li>
            <li>Text extracted from screenshots using OCR</li>
            <li>Information voluntarily submitted when reporting a suspected scam</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. WhatsApp</h2>
          <p>
            When users interact with the ThoondilGuard WhatsApp service, messages and supported
            media may be processed to provide scam and phishing analysis and responses through the
            WhatsApp service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Scam Reports</h2>
          <p>
            Users may voluntarily submit suspicious content as scam reports. Reports may receive a
            reference ID for tracking and may be used for threat intelligence, correlation,
            investigation support, and reviewed scam alerts.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Data Minimization</h2>
          <p>
            ThoondilGuard aims to minimize unnecessary personal information and may redact or
            minimize sensitive values where appropriate.
          </p>
          <p>Users should not submit:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Passwords</li>
            <li>OTPs</li>
            <li>Payment credentials</li>
            <li>API keys</li>
            <li>Authentication tokens</li>
            <li>Other confidential secrets</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Automated Analysis</h2>
          <p>
            ThoondilGuard uses automated analysis to identify potential warning signs. Results are
            informational and may be incorrect. ThoondilGuard does not guarantee that a message,
            URL, sender, or website is safe. Users should independently verify important requests.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">7. Security</h2>
          <p>
            ThoondilGuard uses reasonable technical and organizational safeguards designed to
            protect information processed by the service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">8. Data Retention</h2>
          <p>
            Information may be retained as necessary for analysis, reporting, security, threat
            intelligence, and service operation. Specific retention periods may depend on the
            purpose and system requirements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">9. Privacy Requests</h2>
          <p>
            For privacy-related questions or requests, contact the ThoondilGuard project team
            through the contact information provided by the project.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">10. Updates</h2>
          <p>This Privacy Policy may be updated as ThoondilGuard evolves.</p>
        </section>
      </article>
    </main>
  );
}
