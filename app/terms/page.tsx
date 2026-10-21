import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, trialPolicy } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using ANZO AI’s website and illustrative demos.",
};

export default function TermsPage() {
  return (
    <main className="legal-page container">
      <Link href="/">← Back to {siteConfig.name}</Link>
      <p className="legal-kicker">Website terms</p>
      <h1>A few things to know.</h1>
      <div className="legal-page__body">
        <p>
          These terms apply to your use of the {siteConfig.name} marketing
          website. Any paid work is covered by a separate written agreement.
        </p>

        <h2>Information and demos</h2>
        <p>
          Service descriptions are an overview of what we can discuss with you.
          Interactive demos are illustrative and run in your browser; they do
          not book appointments, send messages, or connect to your business
          tools.
        </p>

        <h2>Quotes and services</h2>
        <p>
          Scope, pricing, timing, integrations, support, and data handling are
          agreed before a project begins. For automation systems, we build and
          test your system, then provide a {trialPolicy.days}-day trial. Payment
          for our automation work is due only after you approve the system.
          Marketing services are quoted separately, and third-party platform
          costs are discussed upfront.
        </p>
        <p>
          The website does not process payments or manage trials. Your written
          agreement sets the project’s trial arrangements and payment terms.
          Website examples are not a promise of specific savings, rankings,
          revenue, or other business results.
        </p>

        <h2>Responsible use</h2>
        <p>
          Use this website lawfully. Do not attempt to disrupt the site, gain
          unauthorized access, or misuse its content. Use sample information in
          the demos and avoid entering sensitive or customer information.
        </p>

        <h2>An independent business</h2>
        <p>
          ANZO AI operates independently and is not sponsored or endorsed by
          the University of Southern Mississippi.
        </p>

        <h2>Contact and changes</h2>
        <p>
          Visit our <Link href="/#contact">contact section</Link> for contact
          details.{" "}
          {siteConfig.phone.isPlaceholder &&
            "The phone number in this preview is fictional and must be replaced before launch. "}
          We may update website information and these terms as our services
          develop. Our <Link href="/privacy">privacy policy</Link> explains this
          website’s information handling.
        </p>
      </div>
    </main>
  );
}
