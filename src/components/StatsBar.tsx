"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

type StatDef = {
  target: number | null;
  suffix: string;
  text: string;
  label: string;
  sublabel?: string;
};

const stats: StatDef[] = [
  { target: 20,   suffix: "+", text: "20+",  label: "Clients Served",    sublabel: "across SA & EU"     },
  { target: 4,    suffix: "+", text: "4+",   label: "Years Experience",  sublabel: "in digital growth"  },
  { target: null, suffix: "",  text: "Web3", label: "Community Native",  sublabel: "Telegram & Discord" },
  { target: 100,  suffix: "%", text: "100%", label: "Growth Focused",    sublabel: "on every project"   },
];

function useCountUpTrigger() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.25, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, triggered };
}

function AnimatedNumber({
  target, suffix, text, triggered, delay = 0,
}: { target: number | null; suffix: string; text: string; triggered: boolean; delay?: number }) {
  const [display, setDisplay] = useState<string>("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!triggered || target === null || hasAnimated.current) return;

    const run = () => {
      hasAnimated.current = true;
      const duration = Math.min(1600, target * 50 + 600);
      const startTime = performance.now();
      function tick(now: number) {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(String(Math.round(eased * target!)));
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    };

    if (delay > 0) { const id = setTimeout(run, delay); return () => clearTimeout(id); }
    run();
  }, [triggered, target, delay]);

  if (target === null) return <>{text}</>;
  return <>{display}{suffix}</>;
}

export function StatsBar() {
  const { ref, triggered } = useCountUpTrigger();

  return (
    <div
      ref={ref}
      className="stats-bar-outer"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "0 24px 0",
        marginBottom: 0,
      }}
    >
      <div
        className="stats-editorial-grid"
        style={{ maxWidth: 1060, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={triggered ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`stat-editorial stat-editorial-${i}`}
            style={{
              padding: "44px 0",
              textAlign: "center",
              minWidth: 0,
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
            }}
          >
            {/* Big number */}
            <div
              className="gradient-text stat-number"
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(34px, 3vw, 44px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                marginBottom: 10,
              }}
            >
              <AnimatedNumber
                target={stat.target}
                suffix={stat.suffix}
                text={stat.text}
                triggered={triggered}
                delay={i * 80}
              />
            </div>

            {/* Label */}
            <div
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: 13,
                fontWeight: 600,
                color: "#94a3b8",
                letterSpacing: "0.04em",
                marginBottom: 4,
              }}
            >
              {stat.label}
            </div>

            {/* Sublabel */}
            {stat.sublabel && (
              <div
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 12,
                  color: "#6b7d99",
                  letterSpacing: "0.01em",
                }}
              >
                {stat.sublabel}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-bar-outer { padding: 0 16px !important; }
          .stat-editorial { padding: 28px 8px !important; }
        }
        @media (max-width: 600px) {
          .stats-editorial-grid {
            grid-template-columns: repeat(2,1fr) !important;
          }
          .stat-editorial {
            padding: 20px 8px !important;
          }
          .stat-number {
            font-size: 32px !important;
          }
          .stat-editorial-0, .stat-editorial-2 {
            border-right: 1px solid rgba(255,255,255,0.05) !important;
          }
          .stat-editorial-1, .stat-editorial-3 {
            border-right: none !important;
          }
          .stat-editorial-0, .stat-editorial-1 {
            border-bottom: 1px solid rgba(255,255,255,0.05);
          }
        }
      `}</style>
    </div>
  );
}
