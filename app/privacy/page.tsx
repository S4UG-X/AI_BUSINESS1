import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How ANZO AI’s website handles information and sample demos.",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page container">
      <Link href="/">← Back to {siteConfig.name}</Link>
      <p className="legal-kicker">Your information</p>
      <h1>Privacy policy</h1>
      <div className="legal-page__body">
        <p>
          This policy explains information handling on the {siteConfig.name}{" "}
          marketing website. It does not describe data handling for a future
          client automation project.
        </p>

        <h2>Information on this website</h2>
        <p>
          This website has no contact submission form, user accounts, or
          customer database. We do not install analytics or advertising trackers
          in this version of the site.
        </p>

        <h2>Sample demos</h2>
        <p>
          Appointment and follow-up demos run locally in your browser. They do
          not make bookings, send messages, or submit demo selections to ANZO
          AI. Please use sample information only.
        </p>

        <h2>Hosting and technical information</h2>
        <p>
          Our hosting provider may process technical information, such as IP
          addresses, request details, and diagnostic logs, to deliver and
          protect the website. Its processing is governed by the provider’s
          policies and our hosting configuration.
        </p>

        <h2>Contact and future projects</h2>
        <p>
          If you contact us by phone, we use the information you choose to share
          to respond to your inquiry. For client projects, we separately agree
          on access, providers, retention, and any required consent before
          handling customer information.
        </p>

        <h2>Questions and updates</h2>
        <p>
          Contact details are available in our{" "}
          <Link href="/#contact">contact section</Link>.{" "}
          {siteConfig.phone.isPlaceholder &&
            "This preview currently displays a fictional phone number that will be replaced before launch. "}
          We will update this policy when the website’s functionality or
          information handling changes.
        </p>
      </div>
    </main>
  );
}
