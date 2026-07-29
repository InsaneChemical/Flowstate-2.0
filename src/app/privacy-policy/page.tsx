import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Flowstate Media",
  description:
    "How Flowstate Media collects, uses, and protects the information you share with us.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const sections = [
  {
    heading: "Who We Are",
    body: (
      <p>
        Flowstate Media (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a digital media
        and growth agency providing website design, social media management,
        and Web3 community services. We are based in South Africa and
        work with clients both locally and internationally. This Privacy Policy
        explains how we collect, use, disclose, and protect personal information
        when you visit our website or engage our services, regardless of where you
        are located.
      </p>
    ),
  },
  {
    heading: "Information We Collect",
    body: (
      <>
        <p style={{ marginBottom: 16 }}>
          We collect information only when you voluntarily provide it to us —
          primarily through our contact form. This may include:
        </p>
        <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
          <li><strong style={{ color: "#cbd5e1" }}>Name</strong> — to address you personally in our reply.</li>
          <li><strong style={{ color: "#cbd5e1" }}>Email address</strong> — to respond to your enquiry.</li>
          <li><strong style={{ color: "#cbd5e1" }}>Message content</strong> — the details of your enquiry or project brief.</li>
        </ul>
        <p style={{ marginTop: 16 }}>
          We do not collect payment information directly. Any payments are
          processed through secure third-party platforms and are governed by their
          own privacy policies.
        </p>
      </>
    ),
  },
  {
    heading: "How We Use Your Information",
    body: (
      <>
        <p style={{ marginBottom: 16 }}>
          The information you provide is used solely to:
        </p>
        <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
          <li>Respond to your enquiry or service request.</li>
          <li>Understand your project needs and provide an accurate proposal.</li>
          <li>Communicate with you throughout the course of an engagement.</li>
        </ul>
        <p style={{ marginTop: 16 }}>
          We will never sell, rent, or trade your personal information to third
          parties. We do not use your data for unsolicited marketing without your
          explicit consent.
        </p>
      </>
    ),
  },
  {
    heading: "Third-Party Services",
    body: (
      <p>
        Our contact form uses{" "}
        <a
          href="https://resend.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#06b6d4", textDecoration: "none" }}
        >
          Resend
        </a>{" "}
        to deliver your message to our inbox. Messages you submit are processed
        through Resend&rsquo;s servers in accordance with their{" "}
        <a
          href="https://resend.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#06b6d4", textDecoration: "none" }}
        >
          Privacy Policy
        </a>
        . We may also use analytics tools (such as Vercel Analytics) to understand
        aggregate site performance. These tools do not track individual users
        across other websites and do not store personally identifiable information.
      </p>
    ),
  },
  {
    heading: "Cookies",
    body: (
      <p>
        Our website uses minimal, functional cookies necessary for the site to
        operate correctly (for example, to remember preferences). We do not use
        advertising or cross-site tracking cookies. By continuing to use our site,
        you consent to this limited use of cookies.
      </p>
    ),
  },
  {
    heading: "Data Retention",
    body: (
      <p>
        We retain enquiry data only as long as necessary to fulfil the purpose
        for which it was collected — typically for the duration of our
        correspondence and any resulting engagement. Once a project is complete
        and there is no ongoing business relationship, we delete personal data
        within a reasonable period unless required by law to retain it.
      </p>
    ),
  },
  {
    heading: "Your Rights",
    body: (
      <>
        <p style={{ marginBottom: 16 }}>
          You have the right to:
        </p>
        <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
          <li>Request access to the personal information we hold about you.</li>
          <li>Request correction of any inaccurate information.</li>
          <li>Request deletion of your personal data, subject to any legal obligations.</li>
          <li>Withdraw consent to marketing communications at any time.</li>
        </ul>
        <p style={{ marginTop: 16 }}>
          If you are located in the European Union or United Kingdom, you may also
          have rights under the GDPR or UK GDPR — including the right to data
          portability and the right to lodge a complaint with your local supervisory
          authority. Clients in other jurisdictions may have equivalent rights under
          their applicable local privacy laws. We respect and honour all such
          requests regardless of where you are based.
        </p>
        <p style={{ marginTop: 16 }}>
          To exercise any of these rights, contact us at the email address below.
          We will respond within a reasonable timeframe.
        </p>
      </>
    ),
  },
  {
    heading: "Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes in
        our practices or applicable law. The &ldquo;Last updated&rdquo; date at the top of
        this page will always reflect the most recent revision. We encourage you
        to review this page periodically.
      </p>
    ),
  },
  {
    heading: "Contact Us",
    body: (
      <p>
        If you have any questions or concerns about this Privacy Policy or how we
        handle your data, please reach out via our{" "}
        <Link
          href="/#contact"
          style={{ color: "#06b6d4", textDecoration: "none" }}
        >
          contact form
        </Link>{" "}
        or email us directly at{" "}
        <a
          href="mailto:nuno@flowstatemedia.co.za"
          style={{ color: "#06b6d4", textDecoration: "none" }}
        >
          nuno@flowstatemedia.co.za
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      badge="Legal"
      title="Privacy Policy"
      subtitle="We keep it simple — your information is used only to help us work with you, never shared or sold."
      lastUpdated="June 2025"
      sections={sections}
    />
  );
}
