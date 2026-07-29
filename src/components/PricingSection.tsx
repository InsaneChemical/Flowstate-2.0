"use client";
import { RevealWrapper } from "./ui/RevealWrapper";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CalendlyButton } from "./CalendlyButton";

const WHATSAPP_NUMBER = "27690390431";

function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

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
  fineprint?: string;
}

interface PricingCategory {
  id: string;
  num: string;
  label: string;
  title: string;
  subtitle: string;
  color: "#06b6d4" | "#818cf8";
  tiers: Tier[];
  preNote?: string;
  note?: string;
}

const categories: PricingCategory[] = [
  {
    id: "website",
    num: "01",
    label: "Website Design",
    title: "Sites built to convert, not just look good.",
    subtitle: "One-time project fee, with an optional monthly care plan.",
    color: "#06b6d4",
    preNote:
      "Hosting, domain registration, and platform fees (Shopify, WooCommerce, etc.) are paid directly by the client and are separate from our project and care plan fees.",
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
        features: ["3-5 pages", "Speed-optimized", "Contact & lead capture", "Easy content updates"],
      },
      {
        name: "E-Commerce",
        priceZAR: "R35,000+",
        priceEUR: "€2,200+",
        priceLabel: "project",
        secondaryZAR: "R2,500",
        secondaryEUR: "€150",
        secondaryLabel: "/mo care",
        features: ["Full online store", "Payment integration", "Product setup", "30 days post-launch support"],
        fineprint: "Client pays e-commerce platform fees, payment gateway costs, and domain registration separately.",
      },
    ],
    note: "Care plans cover hosting oversight, security updates, small content changes, and uptime monitoring. Hosting, domain, and platform subscription fees are billed directly to the client.",
  },
  {
    id: "social",
    num: "02",
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
        features: ["4+ platforms", "High-volume content", "Paid ads management", "Full community management"],
      },
    ],
    note: "Paid ad spend billed at client budget + 15% management fee.",
  },
  {
    id: "web3",
    num: "03",
    label: "Web3 Community Support",
    title: "Moderation and growth for fast-moving communities.",
    subtitle: "Monthly retainer, scoped to your community size.",
    color: "#818cf8",
    tiers: [
      {
        name: "Seed",
        priceZAR: "R8,000",
        priceEUR: "€500",
        priceLabel: "/mo",
        features: ["< 2,000 members", "Moderation & onboarding bot", "6 days/week coverage"],
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

function TierCard({ tier, color, categoryLabel }: { tier: Tier; color: string; categoryLabel: string }) {
  const rgb = color === "#06b6d4" ? "6,182,212" : "129,140,248";

  const message = `Hi! I'm interested in the ${tier.name} plan (${tier.priceZAR} ${tier.priceLabel}) for ${categoryLabel}. Can we chat?`;

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
      <a
        href={whatsappHref(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={tier.recommended ? "btn-primary pricing-cta" : "btn-secondary pricing-cta"}
        style={{
          marginTop: 24,
          padding: "12px 20px",
          fontSize: 14,
          justifyContent: "center",
          width: "100%",
        }}
      >
        Get Started
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
      {tier.fineprint && (
        <p
          style={{
            fontFamily: "var(--font-dm)",
            fontSize: 12,
            fontStyle: "italic",
            lineHeight: 1.5,
            color: "#6b7d99",
            marginTop: 14,
            marginBottom: 0,
          }}
        >
          {tier.fineprint}
        </p>
      )}
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
        <p style={{ fontFamily: "var(--font-dm)", fontSize: 15, color: "#94a3b8", marginBottom: category.preNote ? 12 : 32 }}>
          {category.subtitle}
        </p>

        {category.preNote && (
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 13,
              fontStyle: "italic",
              lineHeight: 1.6,
              color: "#6b7d99",
              marginBottom: 32,
              maxWidth: 700,
            }}
          >
            {category.preNote}
          </p>
        )}

        <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {category.tiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} color={category.color} categoryLabel={category.label} />
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
            Message us on WhatsApp and we&apos;ll recommend a starting point based on your goals and budget.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
            <a
              href={whatsappHref("Hi! I'm not sure which pricing tier fits my business. Can we chat?")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary pricing-cta"
              style={{ padding: "14px 28px", fontSize: 15 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.017 2.003c-5.505 0-9.977 4.472-9.977 9.977 0 1.76.462 3.48 1.34 4.997L2 22l5.146-1.35a9.955 9.955 0 0 0 4.871 1.24h.004c5.505 0 9.977-4.472 9.977-9.977 0-2.665-1.038-5.171-2.923-7.056a9.913 9.913 0 0 0-7.058-2.854zm0 18.084h-.003a8.28 8.28 0 0 1-4.229-1.16l-.303-.18-3.055.801.815-2.978-.198-.306a8.264 8.264 0 0 1-1.269-4.404c0-4.566 3.716-8.281 8.286-8.281a8.24 8.24 0 0 1 5.858 2.428 8.227 8.227 0 0 1 2.425 5.856c-.002 4.566-3.718 8.224-8.327 8.224z" />
              </svg>
              Chat on WhatsApp
            </a>
            <CalendlyButton className="btn-secondary pricing-cta" style={{ padding: "14px 28px", fontSize: 15 }}>
              Book a Call Instead
            </CalendlyButton>
          </div>
        </div>
      </div>

      <style>{`
        .pricing-cta:hover { box-shadow: none !important; }
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
