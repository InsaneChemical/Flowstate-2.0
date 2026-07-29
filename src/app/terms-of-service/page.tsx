import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — Flowstate Media",
  description:
    "The terms and conditions that govern your use of Flowstate Media's website and services.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

const sections = [
  {
    heading: "Acceptance of Terms",
    body: (
      <p>
        By accessing this website or engaging Flowstate Media (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;, or &ldquo;our&rdquo;) for any service, you agree to be bound
        by these Terms of Service. If you do not agree with any part of these
        terms, please do not use our website or services. These terms apply to
        all visitors, clients, and others who access or use our services.
      </p>
    ),
  },
  {
    heading: "Services",
    body: (
      <>
        <p style={{ marginBottom: 16 }}>
          Flowstate Media provides digital growth services including, but not
          limited to:
        </p>
        <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
          <li>Website design and development</li>
          <li>Social media management and content creation</li>
          <li>Web3 and blockchain community management</li>
        </ul>
        <p style={{ marginTop: 16 }}>
          We are based in South Africa and serve clients locally and
          internationally. The specific scope, deliverables, timeline, and fees
          for any engagement are agreed upon in a separate written proposal or
          service agreement between Flowstate Media and the client. These Terms
          of Service supplement and do not replace any such agreement.
        </p>
      </>
    ),
  },
  {
    heading: "Fees and Payment",
    body: (
      <p>
        Fees are outlined in your project proposal or service agreement. Unless
        otherwise agreed, invoices are due within the timeframe specified on each
        invoice. We reserve the right to pause or suspend work on any project
        where an invoice remains unpaid beyond its due date. All fees are
        exclusive of applicable taxes unless stated otherwise.
      </p>
    ),
  },
  {
    heading: "Intellectual Property",
    body: (
      <p>
        Upon receipt of full payment, all custom creative work, code, and content
        produced specifically for your project transfers to you as the client.
        Flowstate Media retains the right to display completed work in our
        portfolio unless explicitly agreed otherwise in writing. Any third-party
        assets, fonts, plugins, or software included in a project are subject to
        their own respective licences, which the client is responsible for
        maintaining beyond the project scope.
      </p>
    ),
  },
  {
    heading: "Client Responsibilities",
    body: (
      <>
        <p style={{ marginBottom: 16 }}>
          To enable us to deliver your project on time and to a high standard,
          you agree to:
        </p>
        <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
          <li>Provide accurate, complete, and timely information and materials.</li>
          <li>Designate a single point of contact with authority to approve decisions.</li>
          <li>Review and provide feedback within agreed timeframes.</li>
          <li>Ensure any content you provide does not infringe third-party rights.</li>
        </ul>
        <p style={{ marginTop: 16 }}>
          Delays caused by late provision of content, approvals, or feedback may
          affect project timelines. Flowstate Media is not liable for delays
          attributable to the client.
        </p>
      </>
    ),
  },
  {
    heading: "Revisions and Scope Changes",
    body: (
      <p>
        Each project proposal specifies the number of revision rounds included.
        Requests that fall outside the agreed scope — including significant
        changes to direction, additional features, or work beyond the original
        brief — will be treated as a scope change and quoted separately. We will
        always communicate this clearly before proceeding.
      </p>
    ),
  },
  {
    heading: "Limitation of Liability",
    body: (
      <p>
        To the fullest extent permitted by applicable law, Flowstate Media
        shall not be liable for any indirect, incidental, consequential, or
        punitive damages arising from your use of our services or website,
        including but not limited to loss of profits, loss of data, or business
        interruption. Our total liability in connection with any engagement shall
        not exceed the total fees paid by you for the specific service giving rise
        to the claim.
      </p>
    ),
  },
  {
    heading: "Confidentiality",
    body: (
      <p>
        Both parties agree to keep confidential any proprietary or sensitive
        information shared during the course of an engagement and not to disclose
        it to third parties without prior written consent. This obligation
        continues for a period of two years after the conclusion of any
        engagement.
      </p>
    ),
  },
  {
    heading: "Termination",
    body: (
      <p>
        Either party may terminate a service engagement with written notice as
        specified in the relevant service agreement. Upon termination, the client
        is responsible for payment of all work completed up to the date of
        termination. Flowstate Media will deliver all completed work for which
        full payment has been received.
      </p>
    ),
  },
  {
    heading: "Website Use",
    body: (
      <p>
        You may not use this website for any unlawful purpose or in a way that
        could damage, disable, or impair our services. You may not attempt to
        gain unauthorised access to any part of the website or its related
        systems. We reserve the right to restrict access to this website at our
        discretion without notice.
      </p>
    ),
  },
  {
    heading: "Changes to These Terms",
    body: (
      <p>
        We reserve the right to update these Terms of Service at any time. The
        most current version will always be available on this page, identified
        by the &ldquo;Last updated&rdquo; date. Continued use of our website or services
        after changes are posted constitutes your acceptance of the revised terms.
      </p>
    ),
  },
  {
    heading: "Governing Law",
    body: (
      <>
        <p style={{ marginBottom: 16 }}>
          These Terms of Service are governed by and construed in accordance with
          the laws of South Africa. Any disputes arising from or relating to these
          terms shall be subject to the exclusive jurisdiction of the South African
          courts.
        </p>
        <p>
          International clients acknowledge that by engaging our services they
          agree to South African law as the governing law for the engagement.
          Where mandatory consumer protection or data privacy laws in your
          jurisdiction impose obligations that cannot be contractually excluded,
          those obligations will continue to apply to the extent required by law.
          If you have questions about how this affects you, please contact us
          before engaging our services.
        </p>
      </>
    ),
  },
  {
    heading: "Contact Us",
    body: (
      <p>
        Questions about these Terms of Service? Reach us through our{" "}
        <Link
          href="/#contact"
          style={{ color: "#06b6d4", textDecoration: "none" }}
        >
          contact form
        </Link>{" "}
        or email{" "}
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

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      badge="Legal"
      title="Terms of Service"
      subtitle="Plain-language terms covering how we work together, what you can expect from us, and what we need from you."
      lastUpdated="June 2025"
      sections={sections}
    />
  );
}
