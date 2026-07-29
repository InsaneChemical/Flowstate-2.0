"use client";
import { RevealWrapper } from "./ui/RevealWrapper";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CalendlyButton } from "./CalendlyButton";

interface Tier {
  name: string;
  priceZAR: string;
  priceEUR: string;
  priceLabel: string;
  secondaryZAR?: string;
  secondaryEUR?: string;
  secondaryLabel?: string;
  features: string[];
  recommended?: boolean;
}

interface PricingCategory {
  id: string;
  num: string;
  label: string;
  title: string;
  subtitle: string;
  color: "#06b6d4" | "#818cf8";
  tiers: Tier[];
  note?: string;
}

const categories: PricingCategory[] = [
  {
    id: "social",
    num: "01",
    label: "Social Media Management",
    title: "Consistent content that keeps brands visible.",
    subtitle: "Monthly retainer. Cancel any time — no lock-in contracts.",
    color: "#06b6d4",
    tiers: [
      {
        name: "Flow",
        priceZAR: "R6,500",
        priceEUR: "€400",
        priceLabel: "/mo",
        features: ["1 platform", "12 posts/month", "Basic scheduling", "Monthly report"],
      },
      {
        name: "Grow",
        priceZAR: "R12,000",
        priceEUR: "€750",
        priceLabel: "/mo",
        recommended: true,
        features: ["2-3 platforms", "20 posts + Stories/Reels", "Community engagement", "Monthly strategy call"],
      },
      {
        name: "Scale",
        priceZAR: "R22,000",
        priceEUR: "€1,400",
        priceLabel: "/mo",
        features: ["4+ platforms", "Unlimited content", "Paid ads management", "Full community management", "Weekly calls"],
      },
    ],
    note: "Paid ad spend billed at client budget + 15% management fee. Influencer outreach quoted per campaign.",
  },
  {
    id: "website",
    num: "02",
    label: "Website Design",
    title: "Sites built to convert, not just look good.",
    subtitle: "One-time project fee, with an optional monthly care plan.",
    color: "#06b6d4",
    tiers: [
      {
        name: "Landing Page",
        priceZAR: "R8,500",
        priceEUR: "€500",
        priceLabel: "project",
        secondaryZAR: "R850",
        secondaryEUR: "€50",
        secondaryLabel: "/mo care",
        features: ["Single high-conversion page", "Mobile-optimized", "Basic SEO"],
      },
      {
        name: "Business Site",
        priceZAR: "R18,000",
        priceEUR: "€1,100",
        priceLabel: "project",
        secondaryZAR: "R1,500",
        secondaryEUR: "€90",
        secondaryLabel: "/mo care",
        recommended: true,
        features: ["3-5 pages", "CMS included", "Speed-optimized", "Contact & lead capture"],
      },
      {
        name: "E-Commerce",
        priceZAR: "R35,000+",
        priceEUR: "€2,200+",
        priceLabel: "project",
        secondaryZAR: "R2,500",
        secondaryEUR: "€150",
        secondaryLabel: "/mo care",
        features: ["Full online store", "Payment integration", "Product setup", "Team training"],
      },
    ],
    note: "Care plans cover hosting oversight, security updates, small content changes, and uptime monitoring.",
  },
  {
    id: "automation",
    num: "03",
    label: "AI Automation",
    title: "Systems that pay for themselves in time saved.",
    subtitle: "Setup fee to build the system, monthly to keep it running.",
    color: "#818cf8",
    tiers: [
      {
        name: "Basic Flows",
        priceZAR: "R10,000",
        priceEUR: "€600",
        priceLabel: "setup",
        secondaryZAR: "R2,500",
        secondaryEUR: "€150",
        secondaryLabel: "/mo",
        features: ["3-5 n8n automations", "Data sync & notifications", "Reporting"],
      },
      {
        name: "Business Systems",
        priceZAR: "R22,000",
        priceEUR: "€1,400",
        priceLabel: "setup",
        secondaryZAR: "R5,500",
        secondaryEUR: "€350",
        secondaryLabel: "/mo",
        recommended: true,
        features: ["CRM integration", "Lead routing", "Email sequences", "AI summarization"],
      },
      {
        name: "Enterprise Stack",
        priceZAR: "Custom",
        priceEUR: "Custom",
        priceLabel: "setup",
        secondaryZAR: "Custom",
        secondaryEUR: "Custom",
        secondaryLabel: "/mo",
        features: ["Custom AI agents", "Multi-platform integrations", "API development", "Ongoing optimization"],
      },
    ],
    note: "Monthly fee covers maintenance, error handling, and 2-4 hours of tweaks. Usage costs (OpenAI tokens, n8n cloud, etc.) are marked up 20% or passed through at cost + management fee.",
  },
  {
    id: "voice",
    num: "04",
    label: "AI Voice Agents",
    title: "Answer, qualify, and convert — around the clock.",
    subtitle: "Choose the billing model that fits your call volume.",
    color: "#818cf8",
    tiers: [
      {
        name: "Per-Minute",
        priceZAR: "R1,500",
        priceEUR: "€90",
        priceLabel: "setup",
        secondaryZAR: "R1.20",
        secondaryEUR: "€0.07",
        secondaryLabel: "/min",
        features: ["Best for variable call volume", "Pay only for what you use"],
      },
      {
        name: "Flat Retainer",
        priceZAR: "R4,500",
        priceEUR: "€280",
        priceLabel: "/mo",
        recommended: true,
        features: ["Predictable monthly cost", "Up to 2,000 minutes included", "R0.80 / €0.05 per-minute overage"],
      },
      {
        name: "Custom Build",
        priceZAR: "R15,000+",
        priceEUR: "€900+",
        priceLabel: "setup",
        secondaryLabel: "+ monthly retainer",
        features: ["Complex phone trees", "CRM integrations", "Multi-language support"],
      },
    ],
  },
  {
    id: "web3",
    num: "05",
    label: "Web3 Community Support",
    title: "Moderation and growth for fast-moving communities.",
    subtitle: "Monthly retainer, scoped to your community size.",
    color: "#06b6d4",
    tiers: [
      {
        name: "Seed",
        priceZAR: "R8,000",
        priceEUR: "€500",
        priceLabel: "/mo",
        features: ["< 2,000 members", "Moderation & basic onboarding bot", "6 days/week coverage"],
      },
      {
        name: "Growth",
        priceZAR: "R16,000",
        priceEUR: "€1,000",
        priceLabel: "/mo",
        recommended: true,
        features: ["2,000-10,000 members", "Full moderation & custom bots", "Engagement campaigns & scam filtering", "Weekly reports"],
      },
      {
        name: "Protocol",
        priceZAR: "R30,000+",
        priceEUR: "€1,900+",
        priceLabel: "/mo",
        features: ["10,000+ members", "24/7 coverage & dedicated mod team", "Crisis management & governance support", "Analytics dashboard"],
      },
    ],
    note: "Crypto payment accepted (USDC/USDT) at a 3-5% premium to cover volatility and conversion.",
  },
];

function TierCard({ tier, color }: { tier: Tier; color: string }) {
  const rgb = color === "#06b6d4" ? "6,182,212" : "129,140,248";
  return (
    <div
      className={tier.recommended ? "pricing-card pricing-card-recommended" : "pricing-card"}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        background: tier.recommended
          ? "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)"
          : "rgba(255,255,255,0.03)",
        border: tier.recommended ? `1px solid rgba(${rgb},0.4)` : "1px solid rgba(255,255,255,0.07)",
        boxShadow: tier.recommended ? `0 0 0 1px rgba(${rgb},0.15), 0 24px 56px rgba(0,0,0,0.35)` : "none",
        borderRadius: 20,
        padding: "32px 28px",
        height: "100%",
      }}
    >
      {tier.recommended && (
        <span
          style={{
            position: "absolute",
            top: -13,
            left: 28,
            fontFamily: "var(--font-dm)",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#050a14",
            background: "linear-gradient(135deg, #06b6d4 0%, #818cf8 100%)",
            padding: "4px 12px",
            borderRadius: 100,
          }}
        >
          Recommended
        </span>
      )}
      <h3
        style={{
          fontFamily: "var(--font-syne)",
          fontSize: 19,
          fontWeight: 700,
          color: "#f8fafc",
          marginBottom: 16,
          letterSpacing: "-0.01em",
        }}
      >
        {tier.name}
      </h3>
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
          <span
            className="gradient-text"
            style={{ fontFamily: "var(--font-syne)", fontSize: 30, fontWeight: 800, letterSpacing: "-0.02em" }}
          >
            {tier.priceZAR}
          </span>
          <span style={{ fontFamily: "var(--font-dm)", fontSize: 13, color: "#6b7d99" }}>
            {tier.priceLabel}
          </span>
        </div>
        <div style={{ fontFamily: "var(--font-dm)", fontSize: 13, color: "#6b7d99", marginTop: 2 }}>
          {tier.priceEUR} {tier.priceLabel}
        </div>
        {tier.secondaryZAR && (
          <div
            style={{
              marginTop: 10,
              paddingTop: 10,
              borderTop: "1px solid rgba(255,255,255,0.06)",
              fontFamily: "var(--font-dm)",
              fontSize: 13,
              color: "#94a3b8",
            }}
          >
            + {tier.secondaryZAR} / {tier.secondaryEUR} {tier.secondaryLabel}
          </div>
        )}
        {!tier.secondaryZAR && tier.secondaryLabel && (
          <div
            style={{
              marginTop: 10,
              paddingTop: 10,
              borderTop: "1px solid rgba(255,255,255,0.06)",
              fontFamily: "var(--font-dm)",
              fontSize: 13,
              color: "#94a3b8",
            }}
          >
            {tier.secondaryLabel}
          </div>
        )}
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        {tier.features.map((f) => (
          <li
            key={f}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              fontFamily: "var(--font-dm)",
              fontSize: 14,
              lineHeight: 1.6,
              color: "#94a3b8",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 3 }}>
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CategoryBlock({ category }: { category: PricingCategory }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: 56,
        marginTop: 56,
      }}
    >
      <RevealWrapper visible={visible}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <span
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 12,
              fontWeight: 600,
              color: category.color,
              background: `rgba(${category.color === "#06b6d4" ? "6,182,212" : "129,140,248"},0.08)`,
              border: `1px solid rgba(${category.color === "#06b6d4" ? "6,182,212" : "129,140,248"},0.15)`,
              borderRadius: 6,
              padding: "2px 8px",
              letterSpacing: "0.05em",
            }}
          >
            {category.num}
          </span>
          <span
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#6b7d99",
              fontWeight: 500,
            }}
          >
            {category.label}
          </span>
        </div>
        <h3
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(24px, 2.6vw, 32px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#f8fafc",
            marginBottom: 8,
            maxWidth: 640,
          }}
        >
          {category.title}
        </h3>
        <p style={{ fontFamily: "var(--font-dm)", fontSize: 15, color: "#94a3b8", marginBottom: 32 }}>
          {category.subtitle}
        </p>

        <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {category.tiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} color={category.color} />
          ))}
        </div>

        {category.note && (
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 13,
              lineHeight: 1.7,
              color: "#6b7d99",
              marginTop: 24,
              maxWidth: 760,
            }}
          >
            {category.note}
          </p>
        )}
      </RevealWrapper>
    </div>
  );
}

export function PricingSection() {
  return (
    <section id="pricing-details" className="section-pad" style={{ paddingTop: 0 }}>
      <div className="section-inner">
        {categories.map((category) => (
          <CategoryBlock key={category.id} category={category} />
        ))}

        {/* Closing CTA */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            marginTop: 56,
            paddingTop: 56,
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(24px, 2.6vw, 32px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#f8fafc",
              marginBottom: 12,
            }}
          >
            Not sure which tier fits?
          </h3>
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 16,
              color: "#94a3b8",
              maxWidth: 480,
              margin: "0 auto 28px",
              lineHeight: 1.7,
            }}
          >
            Book a free 15-minute call and we&apos;ll recommend a starting point based on your goals and budget.
          </p>
          <CalendlyButton className="btn-primary" style={{ padding: "14px 28px", fontSize: 15 }}>
            Book a Call
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </CalendlyButton>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
