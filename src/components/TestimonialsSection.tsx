"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Star } from "lucide-react";

/* ── Logo badge ─────────────────────────────────────────────────────────── */
function LogoBadge({
  src,
  name,
  size,
  radius,
  borderColor,
  logoBg = "rgba(255,255,255,0.06)",
  logoPadding = 5,
}: {
  src: string | null | undefined;
  name: string;
  size: number;
  radius: number;
  borderColor: string;
  logoBg?: string;
  logoPadding?: number;
}) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        border: `2px solid ${borderColor}`,
        background: logoBg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        flexShrink: 0,
        transition: "border-color 0.3s",
      }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={name}
          width={size}
          height={size}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            padding: logoPadding,
          }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      ) : (
        <span
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: size * 0.3,
            fontWeight: 700,
            color: borderColor,
            letterSpacing: "-0.02em",
            userSelect: "none",
          }}
        >
          {initials}
        </span>
      )}
    </div>
  );
}

const testimonials = [
  {
    id: 1,
    name: "Statter Network",
    role: "Community Management",
    content:
      "Flowstate managed our Telegram and Discord communities for around a year, and the impact was clear. Community engagement was strong, and they also built us a custom onboarding bot that helped streamline the process for new members. Their spam and scammer filtering systems were highly effective and gave us much better control over the community.",
    rating: 5,
    logo: "/clients/statter-network.png",
    logoBg: "#000000",
    logoPadding: 0,
    url: "https://statter.io/#/home",
    variant: "cyan" as const,
  },
  {
    id: 2,
    name: "Nature Express",
    role: "Website Design",
    content:
      "Flowstate built our website from scratch and delivered exactly what we had envisioned. The site looks professional, works smoothly, and has become a strong landing page for our clients. It not only represents our brand well but also helps convert visitors into real enquiries.",
    rating: 5,
    logo: "/clients/nature-express.png",
    logoBg: "#0a1a0e",
    logoPadding: 6,
    url: "https://naturexpressmadeira.pt/",
    variant: "purple" as const,
  },
  {
    id: 3,
    name: "Eclectic Tree",
    role: "Website & E-commerce",
    content:
      "We needed an online storefront to sell our custom, locally sourced crafts, and Flowstate went above and beyond. They assisted with everything from product photos to the full website build, creating a unique storefront that truly reflects our brand and products.",
    rating: 5,
    logo: "/clients/eclectic-tree.png",
    logoBg: "#ffffff",
    logoPadding: 4,
    url: "https://eclectictree.co.za/",
    variant: "cyan" as const,
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduce = useReducedMotion();

  /* Auto-rotate every 6 s — disabled when user prefers reduced motion */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(
      () => setActiveIndex((i) => (i + 1) % testimonials.length),
      6000,
    );
    return () => clearInterval(t);
  }, []);

  const active = testimonials[activeIndex];
  const accent = active.variant === "cyan" ? "#06b6d4" : "#818cf8";
  const borderColor =
    active.variant === "cyan"
      ? "rgba(6,182,212,0.2)"
      : "rgba(129,140,248,0.2)";

  return (
    <section
      id="testimonials"
      className="section-pad"
      style={{
        borderTop: "1px solid rgba(6,182,212,0.06)",
        background:
          "linear-gradient(180deg, rgba(129,140,248,0.03) 0%, transparent 100%)",
      }}
    >
      <div
        className="section-inner testimonials-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* ── Left: heading + nav ─────────────────────────────── */}
        <motion.div
          className="testimonials-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", flexDirection: "column", gap: 24 }}
        >
          {/* Label */}
          <div
            className="testimonials-label"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "5px 14px",
              borderRadius: 100,
              background: "rgba(6,182,212,0.08)",
              border: "1px solid rgba(6,182,212,0.2)",
              width: "fit-content",
            }}
          >
            <Star
              size={12}
              style={{ fill: "#06b6d4", color: "#06b6d4" }}
            />
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
              Client Results
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(32px, 3.5vw, 52px)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#f8fafc",
              margin: 0,
            }}
          >
            What our{" "}
            <span className="gradient-text">clients say.</span>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 16,
              lineHeight: 1.75,
              color: "#8899b0",
              maxWidth: 420,
              margin: 0,
            }}
          >
            Every project here reflects a problem solved, a brand improved,
            or a better digital experience created for a real business.
          </p>

          {/* Dot nav */}
          <div className="testimonials-dots" style={{ display: "flex", gap: 4, alignItems: "center", paddingTop: 8 }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`View testimonial ${i + 1}`}
                style={{
                  /* Invisible padding expands touch target to 44px tall */
                  padding: "18px 4px",
                  margin: 0,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  WebkitTapHighlightColor: "transparent",
                  touchAction: "manipulation",
                }}
              >
                <span
                  style={{
                    display: "block",
                    height: 8,
                    width: i === activeIndex ? 28 : 8,
                    borderRadius: 4,
                    background:
                      i === activeIndex
                        ? "linear-gradient(90deg,#06b6d4,#818cf8)"
                        : "rgba(255,255,255,0.12)",
                    transition: "width 0.35s cubic-bezier(0.16,1,0.3,1), background 0.35s",
                  }}
                />
              </button>
            ))}
          </div>

          {/* Who's speaking */}
          <div
            className="testimonials-who"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              paddingTop: 8,
              borderTop: "1px solid rgba(255,255,255,0.05)",
              marginTop: 4,
            }}
          >
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActiveIndex(i)}
                aria-label={`Select ${t.name}`}
                style={{
                  background: "none",
                  border: "none",
                  padding: 2,
                  cursor: "pointer",
                  opacity: i === activeIndex ? 1 : 0.35,
                  transition: "opacity 0.3s, transform 0.3s",
                  transform: i === activeIndex ? "scale(1.08)" : "scale(1)",
                  WebkitTapHighlightColor: "transparent",
                  touchAction: "manipulation",
                  minWidth: 44,
                  minHeight: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LogoBadge
                  src={t.logo}
                  name={t.name}
                  size={38}
                  radius={9}
                  borderColor={i === activeIndex ? accent : "rgba(255,255,255,0.1)"}
                  logoBg={t.logoBg}
                  logoPadding={t.logoPadding}
                />
              </button>
            ))}
            <div style={{ marginLeft: 4 }}>
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: reduce ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduce ? 0.1 : 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#f1f5f9",
                  }}
                >
                  {active.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: 11,
                    color: "#6b7d99",
                    marginTop: 2,
                  }}
                >
                  {active.role}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ── Right: animated card ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative" }}
        >
          {/* CSS grid overlay — all cards in same cell, natural height, no stretching */}
          <div style={{ display: "grid" }}>
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: reduce ? 0 : 16, scale: 0.98 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                y: activeIndex === index ? 0 : (reduce ? 0 : -8),
                scale: activeIndex === index ? 1 : 0.98,
              }}
              transition={
                reduce
                  ? { duration: 0.1 }
                  : activeIndex === index
                    ? {
                        opacity: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                        y:       { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
                        scale:   { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
                      }
                    : {
                        opacity: { duration: 0.22, ease: [0.4, 0, 1, 1] },
                        y:       { duration: 0.22, ease: [0.4, 0, 1, 1] },
                        scale:   { duration: 0.22, ease: [0.4, 0, 1, 1] },
                      }
              }
              style={{
                gridRow: 1,
                gridColumn: 1,
                zIndex: activeIndex === index ? 10 : 0,
                pointerEvents: activeIndex === index ? "auto" : "none",
              }}
            >
              <div
                className="testimonial-card"
                style={{
                  background:
                    activeIndex === index
                      ? "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)"
                      : "transparent",
                  border: activeIndex === index ? `1px solid ${borderColor}` : "1px solid transparent",
                  borderRadius: 20,
                  padding: "40px 44px",
                  backdropFilter: activeIndex === index ? "blur(16px)" : "none",
                  WebkitBackdropFilter: activeIndex === index ? "blur(16px)" : "none",
                  boxShadow:
                    activeIndex === index
                      ? `0 24px 56px rgba(0,0,0,0.45), 0 0 0 1px ${borderColor}, inset 0 1px 0 rgba(255,255,255,0.06)`
                      : "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Accent glow */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: -60,
                    right: -60,
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    background:
                      t.variant === "cyan"
                        ? "rgba(6,182,212,0.07)"
                        : "rgba(129,140,248,0.07)",
                    filter: "blur(48px)",
                    pointerEvents: "none",
                  }}
                />

                {/* Stars */}
                <div style={{ display: "flex", gap: 4, marginBottom: 24 }}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      style={{ fill: "#eab308", color: "#eab308" }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <div style={{ position: "relative", marginBottom: 0 }}>
                  {/* Large decorative quote */}
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: -10,
                      left: -8,
                      fontFamily: "Georgia, serif",
                      fontSize: 80,
                      lineHeight: 1,
                      color: accent,
                      opacity: 0.15,
                      userSelect: "none",
                    }}
                  >
                    &ldquo;
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-dm)",
                      fontSize: 17,
                      lineHeight: 1.8,
                      color: "#cbd5e1",
                      margin: 0,
                      paddingLeft: 4,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {t.content}
                  </p>
                </div>

                {/* Flex spacer — absorbs height difference so author always sits at bottom */}
                <div style={{ flex: 1, minHeight: 8 }} />

                {/* Divider */}
                <div
                  style={{
                    height: 1,
                    background: "rgba(255,255,255,0.06)",
                    marginBottom: 24,
                  }}
                />

                {/* Author row */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <LogoBadge
                    src={t.logo}
                    name={t.name}
                    size={48}
                    radius={10}
                    borderColor={borderColor}
                    logoBg={t.logoBg}
                    logoPadding={t.logoPadding}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span
                        style={{
                          fontFamily: "var(--font-syne)",
                          fontSize: 15,
                          fontWeight: 700,
                          color: "#f8fafc",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {t.name}
                      </span>
                      {t.url && (
                        <a
                          href={t.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${t.name} website`}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#6b7d99",
                            transition: "color 0.2s",
                            flexShrink: 0,
                            padding: "16px 8px",
                            margin: "-16px -8px",
                          }}
                          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#06b6d4")}
                          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#6b7d99")}
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      )}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-dm)",
                        fontSize: 12.5,
                        color: "#6b7d99",
                        marginTop: 2,
                      }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          </div>{/* end grid overlay */}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .testimonials-left { text-align: center; align-items: center !important; }
          .testimonials-label { margin: 0 auto; }
          .testimonials-dots { justify-content: center !important; }
          .testimonials-who { justify-content: center !important; flex-wrap: wrap; }
        }
        @media (max-width: 600px) {
          .testimonial-card { padding: 28px 20px !important; }
        }
      `}</style>
    </section>
  );
}
