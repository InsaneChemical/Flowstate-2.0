"use client";
import { motion, useReducedMotion } from "motion/react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { RevealWrapper } from "./ui/RevealWrapper";

const WHATSAPP_NUMBER = "27690390431";
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to find out more about working with Flowstate Media.")}`;

interface Step {
  num: string;
  title: string;
  text: string;
  color: string;
  colorRgb: string;
  icon: React.ReactNode;
  link?: string;
  linkLabel?: string;
}

const steps: Step[] = [
  {
    num: "01",
    title: "Message us on WhatsApp",
    text: "Tell us what you need and we'll reply personally — usually within a few hours. No forms, no waiting on hold.",
    color: "#06b6d4",
    colorRgb: "6,182,212",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12.017 2.003c-5.505 0-9.977 4.472-9.977 9.977 0 1.76.462 3.48 1.34 4.997L2 22l5.146-1.35a9.955 9.955 0 0 0 4.871 1.24h.004c5.505 0 9.977-4.472 9.977-9.977 0-2.665-1.038-5.171-2.923-7.056a9.913 9.913 0 0 0-7.058-2.854zm0 18.084h-.003a8.28 8.28 0 0 1-4.229-1.16l-.303-.18-3.055.801.815-2.978-.198-.306a8.264 8.264 0 0 1-1.269-4.404c0-4.566 3.716-8.281 8.286-8.281a8.24 8.24 0 0 1 5.858 2.428 8.227 8.227 0 0 1 2.425 5.856c-.002 4.566-3.718 8.224-8.327 8.224z" />
      </svg>
    ),
    link: whatsappHref,
    linkLabel: "Chat now",
  },
  {
    num: "02",
    title: "Get your proposal",
    text: "Within 48 hours we'll send a clear plan — what we'll build, how it works, and what to expect.",
    color: "#818cf8",
    colorRgb: "129,140,248",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "We get to work",
    text: "Onboarding to first deliverables in under 2 weeks. No long ramp-up, no agency runaround.",
    color: "#06b6d4",
    colorRgb: "6,182,212",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

export function NextSteps() {
  const reduce = useReducedMotion();
  const { ref, visible } = useScrollReveal();

  return (
    <section
      className="section-pad next-steps-section"
      style={{ paddingTop: 80, paddingBottom: 80 }}
    >
      <div className="section-inner">

        {/* Header */}
        <motion.div
          className="nextsteps-header"
          style={{ marginBottom: 0 }}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={reduce ? { duration: 0.15 } : {
            opacity: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
            y:       { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          <p style={{
            fontFamily: "var(--font-dm)",
            fontSize: 12,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#06b6d4",
            fontWeight: 500,
            marginBottom: 14,
          }}>
            What happens next
          </p>
          <h2 style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(26px, 3vw, 38px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#f8fafc",
            lineHeight: 1.15,
            margin: 0,
          }}>
            Three steps.{" "}
            <span style={{ color: "#6b7d99" }}>Zero runaround.</span>
          </h2>
        </motion.div>

        {/* Steps — editorial grid, no card backgrounds */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="steps-editorial-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            marginTop: 48,
          }}
        >
          {steps.map((s, i) => (
            <RevealWrapper key={s.num} visible={visible} delay={i * 100}>
              <div
                className={`step-editorial${i > 0 ? " step-editorial-bordered" : ""} step-item`}
                style={{
                  padding: "48px 0",
                  paddingRight: i < steps.length - 1 ? 48 : 0,
                  paddingLeft: i > 0 ? 48 : 0,
                }}
              >
                {/* Huge faded step number — decorative, not a box */}
                <div
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "clamp(56px, 5.5vw, 80px)",
                    fontWeight: 800,
                    letterSpacing: "-0.05em",
                    lineHeight: 0.9,
                    marginBottom: 24,
                    background: `linear-gradient(135deg, rgba(${s.colorRgb},0.28) 0%, rgba(${s.colorRgb},0.06) 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    userSelect: "none",
                  }}
                >
                  {s.num}
                </div>

                {/* Icon + title */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <div style={{ color: s.color, flexShrink: 0 }}>{s.icon}</div>
                  <h3 style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#f8fafc",
                    letterSpacing: "-0.02em",
                    margin: 0,
                  }}>
                    {s.title}
                  </h3>
                </div>

                {/* Description */}
                <p style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: "#8899b0",
                  margin: 0,
                }}>
                  {s.text}
                </p>

                {s.link && (
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      marginTop: 16,
                      fontFamily: "var(--font-dm)",
                      fontSize: 14,
                      fontWeight: 600,
                      color: s.color,
                      textDecoration: "none",
                    }}
                  >
                    {s.linkLabel}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                )}
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>

      <style>{`
        .step-editorial-bordered {
          border-left: 1px solid rgba(255,255,255,0.05);
        }
        @media (max-width: 768px) {
          .nextsteps-header { text-align: center; }
          .steps-editorial-grid {
            grid-template-columns: 1fr !important;
          }
          .step-editorial {
            padding-left: 0 !important;
            padding-right: 0 !important;
            padding-top: 32px !important;
            padding-bottom: 32px !important;
            border-left: none !important;
            border-top: 1px solid rgba(255,255,255,0.06);
          }
          .steps-editorial-grid > div:first-child .step-editorial {
            border-top: none !important;
            padding-top: 36px !important;
          }
          .step-item { text-align: center; }
          .step-item > div:first-child { text-align: center; }
          .step-item > div[style*="flex"] { justify-content: center; }
          .next-steps-section { padding-top: 52px !important; padding-bottom: 52px !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .step-editorial { transition: none !important; }
        }
      `}</style>
    </section>
  );
}
