"use client";
import { SectionHeader } from "./ui/SectionHeader";
import { RevealWrapper } from "./ui/RevealWrapper";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    color: "#06b6d4",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Website Design",
    text: "Modern, conversion-focused websites built to turn attention into leads and visitors into customers.",
  },
  {
    color: "#06b6d4",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    title: "Social Media Management",
    text: "Strategic content creation, scheduling, and community management that keeps brands visible and consistent.",
  },
  {
    color: "#818cf8",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Web3 Community Support",
    text: "Telegram and Discord moderation, engagement, and member support for fast-moving Web3 communities.",
  },
];

export function ServicesSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="services" className="section-pad">
      <div className="section-inner">
        <SectionHeader
          label="What We Do"
          title="Everything your digital presence needs to flow."
        />
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {services.map((s, i) => (
            <RevealWrapper key={s.title} visible={visible} delay={i * 80}>
              <div
                className="service-item"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 24,
                  padding: "18px 0",
                  borderBottom: i < services.length - 1
                    ? "1px solid rgba(255,255,255,0.05)"
                    : "none",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: `rgba(${s.color === "#06b6d4" ? "6,182,212" : "129,140,248"},0.08)`,
                    border: `1px solid rgba(${s.color === "#06b6d4" ? "6,182,212" : "129,140,248"},0.18)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: s.color,
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  {s.icon}
                </div>

                {/* Content */}
                <div className="service-item-content" style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: 17,
                      fontWeight: 700,
                      color: "#f8fafc",
                      marginBottom: 6,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-dm)",
                      fontSize: 15,
                      lineHeight: 1.75,
                      color: "#8899b0",
                      margin: 0,
                    }}
                  >
                    {s.text}
                  </p>
                </div>

              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .service-item { gap: 16px !important; padding: 14px 0 !important; }
        }
      `}</style>
    </section>
  );
}
