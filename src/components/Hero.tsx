"use client";
import { useEffect, useState } from "react";
import { HeroVisual } from "./HeroVisual";
import { CalendlyButton } from "./CalendlyButton";

const badges = ["Websites", "Social Media", "Web3 Communities"];


function reveal(mounted: boolean, delay: number, direction: "up" | "right" = "up") {
  const initial = direction === "right" ? "translateX(28px)" : "translateY(20px)";
  return {
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translate(0,0)" : initial,
    transition: `opacity 0.7s ease ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  };
}

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="hero-section"
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        paddingTop: 100,
        paddingBottom: 80,
        overflow: "hidden",
        backgroundImage: "linear-gradient(rgba(6,182,212,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.07) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    >
      {/* Radial fade — darkens grid toward centre so headline stays readable */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 10%, #050a14 75%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="section-inner hero-grid"
        style={{
          width: "100%",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1.15fr 1fr",
          gap: 60,
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left: Copy */}
        <div>
          {/* Badge row */}
          <div className="hero-badge-row" style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28, ...reveal(mounted, 0) }}>
            {badges.map((b) => (
              <span
                key={b}
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 12,
                  fontWeight: 500,
                  padding: "5px 12px",
                  borderRadius: 100,
                  background: "rgba(6,182,212,0.08)",
                  border: "1px solid rgba(6,182,212,0.2)",
                  color: "#67e8f9",
                  letterSpacing: "0.05em",
                }}
              >
                {b}
              </span>
            ))}
          </div>

          {/* Headline */}
          <h1
            className="hero-headline"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              color: "#f8fafc",
              marginBottom: 24,
              ...reveal(mounted, 100),
            }}
          >
            Smarter media.
            <br />
            <span className="gradient-text">Smoother growth.</span>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 17,
              lineHeight: 1.75,
              color: "#94a3b8",
              maxWidth: 480,
              marginBottom: 28,
              ...reveal(mounted, 200),
            }}
          >
            Flowstate Media helps businesses launch conversion-focused
            websites, create better social content, and grow engaged Web3
            communities.
          </p>

          {/* CTAs */}
          <div className="hero-cta-row" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 28, ...reveal(mounted, 320) }}>
            <CalendlyButton className="btn-primary" style={{ padding: "14px 28px", fontSize: 15 }}>
              Book a Call
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </CalendlyButton>
            <a href="#services" className="btn-secondary" style={{ padding: "14px 28px", fontSize: 15 }}>
              Explore Services
            </a>
          </div>

          {/* Trust badge */}
          <div
            className="hero-trust-row"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              borderRadius: 100,
              background: "rgba(129,140,248,0.08)",
              border: "1px solid rgba(129,140,248,0.2)",
              ...reveal(mounted, 420),
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span style={{ fontFamily: "var(--font-dm)", fontSize: 13, color: "#a5b4fc", fontWeight: 500 }}>
              4+ years Web3 community experience
            </span>
          </div>
        </div>

        {/* Right: Hero Visual */}
        <div
          className="hero-visual-col"
          style={{
            display: "flex",
            justifyContent: "center",
            ...reveal(mounted, 250, "right"),
          }}
        >
          <HeroVisual />
        </div>
      </div>

      <style>{`
        .hero-section { min-height: min(100svh, 880px); }
        .hero-headline { font-size: clamp(34px, 3vw, 50px); }
        @media (max-width: 900px) {
          .hero-section { min-height: auto; }
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-visual-col { display: none !important; }
          .hero-badge-row { justify-content: center !important; }
          .hero-cta-row  { justify-content: center !important; flex-direction: column; align-items: center; }
          .hero-trust-row { margin: 0 auto !important; }
          .hero-headline { font-size: clamp(44px, 8vw, 72px); }
        }
        @media (max-width: 600px) {
          #home { padding-top: 88px !important; padding-bottom: 52px !important; }
          .hero-grid { gap: 0 !important; padding: 0 20px !important; }
          #home p[style] { font-size: 16px !important; }
        }
      `}</style>
    </section>
  );
}
