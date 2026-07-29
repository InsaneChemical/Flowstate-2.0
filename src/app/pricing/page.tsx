import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PricingSection } from "@/components/PricingSection";

export const metadata: Metadata = {
  title: "Pricing — Flowstate Media",
  description:
    "Straightforward, outcome-first pricing for social media management, website design, AI automation, AI voice agents, and Web3 community support.",
  alternates: {
    canonical: "/pricing",
  },
};

const trustPoints = [
  "No lock-in contracts",
  "ZAR & EUR pricing",
  "Outcome-first, not hourly",
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        style={{
          minHeight: "100svh",
          background: "#050a14",
          backgroundImage:
            "linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      >
        {/* Radial fade over grid */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, transparent 20%, #050a14 80%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Hero strip */}
        <div
          className="legal-hero"
          style={{
            position: "relative",
            zIndex: 1,
            paddingTop: 140,
            paddingBottom: 64,
            paddingLeft: 24,
            paddingRight: 24,
            textAlign: "center",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "5px 14px",
              borderRadius: 100,
              background: "rgba(6,182,212,0.08)",
              border: "1px solid rgba(6,182,212,0.2)",
              marginBottom: 24,
            }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <span
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#67e8f9",
              }}
            >
              Pricing
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
              color: "#f8fafc",
              marginBottom: 20,
            }}
          >
            Pricing built around{" "}
            <span className="gradient-text">outcomes, not hours.</span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 17,
              lineHeight: 1.75,
              color: "#8899b0",
              maxWidth: 620,
              margin: "0 auto 32px",
            }}
          >
            Every tier below reflects real results — 3× reach, 2.4× conversion, 12h/week saved.
            Pick a starting point, or book a call and we&apos;ll recommend one for you.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 10,
            }}
          >
            {trustPoints.map((point) => (
              <div
                key={point}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 16px",
                  borderRadius: 100,
                  background: "rgba(129,140,248,0.08)",
                  border: "1px solid rgba(129,140,248,0.2)",
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span style={{ fontFamily: "var(--font-dm)", fontSize: 13, color: "#a5b4fc", fontWeight: 500 }}>
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <PricingSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
