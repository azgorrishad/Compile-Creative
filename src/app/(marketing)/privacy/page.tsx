import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Compile Creative",
  description: "How Compile Creative collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)] pt-32 pb-20">
      <div className="narrow-container">
        <span className="chapter-label block mb-4 text-[var(--sage)]">Legal</span>
        <h1 className="editorial-headline mb-8">Privacy Policy</h1>
        <p className="text-[var(--text-muted)] mb-12 text-sm">
          Last updated: June 2025
        </p>

        <div className="space-y-10 text-[var(--text-primary)] leading-relaxed text-[0.95rem]">
          <section>
            <h2 className="font-heading text-2xl mb-4">1. Information We Collect</h2>
            <p className="text-[var(--text-muted)]">
              When you use our website or services, we may collect the following information:
            </p>
            <ul className="list-disc list-inside mt-3 text-[var(--text-muted)] space-y-2">
              <li>Name, email address, and company name provided via our booking form</li>
              <li>Information about the challenges you share with us during intake</li>
              <li>Usage data and cookies for website analytics and performance</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-4">2. How We Use Your Information</h2>
            <p className="text-[var(--text-muted)]">
              We use collected information to respond to inquiries, prepare for strategy sessions,
              improve our services, and communicate relevant updates. We never sell your personal
              data to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-4">3. Data Protection</h2>
            <p className="text-[var(--text-muted)]">
              We implement appropriate technical and organisational measures to protect your personal
              data against unauthorised access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-4">4. Third-Party Services</h2>
            <p className="text-[var(--text-muted)]">
              We may use third-party services (such as Formspree for form handling and Cal.com for
              scheduling) that have their own privacy policies. We encourage you to review their
              policies as well.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-4">5. Your Rights</h2>
            <p className="text-[var(--text-muted)]">
              You have the right to access, correct, or delete your personal data at any time.
              Contact us at{" "}
              <a href="mailto:compilecreative@gmail.com" className="text-[var(--sage)] hover:underline">
                compilecreative@gmail.com
              </a>{" "}
              to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-4">6. Contact</h2>
            <p className="text-[var(--text-muted)]">
              For any privacy-related questions, contact us at{" "}
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