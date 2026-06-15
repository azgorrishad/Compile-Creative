import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Compile Creative",
  description: "Terms and conditions governing the use of Compile Creative's services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)] pt-32 pb-20">
      <div className="narrow-container">
        <span className="chapter-label block mb-4 text-[var(--sage)]">Legal</span>
        <h1 className="editorial-headline mb-8">Terms of Service</h1>
        <p className="text-[var(--text-muted)] mb-12 text-sm">
          Last updated: June 2025
        </p>

        <div className="space-y-10 text-[var(--text-primary)] leading-relaxed text-[0.95rem]">
          <section>
            <h2 className="font-heading text-2xl mb-4">1. Services</h2>
            <p className="text-[var(--text-muted)]">
              Compile Creative provides brand strategy, visual identity design, creative direction,
              and related consulting services. Specific deliverables and timelines are agreed upon
              in individual project proposals.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-4">2. Intellectual Property</h2>
            <p className="text-[var(--text-muted)]">
              Upon full payment, all final deliverables and design assets created for the client
              become the client&apos;s intellectual property. Compile Creative retains the right to
              showcase completed work in our portfolio unless otherwise agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-4">3. Payment Terms</h2>
            <p className="text-[var(--text-muted)]">
              Payment terms are outlined in each project proposal. A deposit is required to
              commence work. Outstanding balances are due upon delivery of final files.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-4">4. Limitation of Liability</h2>
            <p className="text-[var(--text-muted)]">
              Compile Creative shall not be liable for any indirect, incidental, or consequential
              damages arising from the use of our services or deliverables. Our total liability
              shall not exceed the fees paid for the specific project in question.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-4">5. Confidentiality</h2>
            <p className="text-[var(--text-muted)]">
              Both parties agree to keep confidential any proprietary information shared during the
              engagement. This obligation survives the termination of the business relationship.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-4">6. Modifications</h2>
            <p className="text-[var(--text-muted)]">
              We reserve the right to update these terms at any time. Changes will be posted on
              this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-4">7. Contact</h2>
            <p className="text-[var(--text-muted)]">
              For questions about these terms, contact us at{" "}
              <a href="mailto:compilecreative@gmail.com" className="text-[var(--sage)] hover:underline">
                compilecreative@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}