"use client";
import Image from "next/image";

const cards = [
  {
    id: "social",
    label: "Social Content",
    tagline: "Plan • Create • Engage",
    metric: "3× reach",
    color: "#06b6d4",
    // position: top-center
    style: { top: "0%", left: "50%", transform: "translate(-50%, 0)" },
    cx: 250, cy: 68,   // connector endpoint (SVG coords, viewBox 500×520)
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    id: "website",
    label: "Website",
    tagline: "Convert • Capture • Grow",
    metric: "↑ 2.4× CVR",
    color: "#06b6d4",
    // position: bottom-left
    style: { bottom: "2%", left: "4%", transform: "translate(0, 0)" },
    cx: 120, cy: 440,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: "community",
    label: "Community",
    tagline: "Support • Moderate • Engage",
    metric: "5k+ members",
    color: "#818cf8",
    // position: bottom-right
    style: { bottom: "2%", right: "4%", transform: "translate(0, 0)" },
    cx: 380, cy: 440,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

// Center of the visual in SVG coords
const CX = 250;
const CY = 262;

export function HeroVisual() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 500,
        height: 520,
        margin: "0 auto",
      }}
    >
      {/* ── SVG layer: rings + connectors ── */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "visible" }}
        viewBox="0 0 500 520"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="glow-c" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="glow-strong" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          {/* Gradient for rings */}
          <radialGradient id="ring-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.08" />
          </radialGradient>

          {/* Defs for travelling nodes on each connector */}
          {cards.map((card, i) => (
            <path
              key={`path-def-${i}`}
              id={`conn-${i}`}
              d={`M${CX},${CY} Q${(CX + card.cx) / 2 + (i % 2 === 0 ? 20 : -20)},${(CY + card.cy) / 2 - 30} ${card.cx},${card.cy}`}
              fill="none"
            />
          ))}
        </defs>

        {/* Outer ambient ring */}
        <circle cx={CX} cy={CY} r="185" fill="none" stroke="rgba(6,182,212,0.04)" strokeWidth="1" />
        <circle cx={CX} cy={CY} r="145" fill="none" stroke="rgba(6,182,212,0.06)" strokeWidth="1" />
        <circle cx={CX} cy={CY} r="108" fill="none" stroke="rgba(129,140,248,0.1)" strokeWidth="1" />

        {/* Pulsing rings (CSS animation) */}
        <circle
          cx={CX} cy={CY} r="70"
          fill="none"
          stroke="rgba(6,182,212,0.2)"
          strokeWidth="1.5"
          style={{ animation: "pulse-ring-svg 3s ease-out infinite" }}
        />
        <circle
          cx={CX} cy={CY} r="70"
          fill="none"
          stroke="rgba(129,140,248,0.12)"
          strokeWidth="1"
          style={{ animation: "pulse-ring-svg 3s ease-out infinite", animationDelay: "1.5s" }}
        />

        {/* Connector lines */}
        {cards.map((card, i) => (
          <g key={`conn-${i}`}>
            {/* Ghost track */}
            <path
              d={`M${CX},${CY} Q${(CX + card.cx) / 2 + (i % 2 === 0 ? 20 : -20)},${(CY + card.cy) / 2 - 30} ${card.cx},${card.cy}`}
              stroke={card.color}
              strokeWidth="1"
              strokeOpacity="0.15"
              strokeDasharray="5 5"
              fill="none"
            />
            {/* Animated dash */}
            <path
              d={`M${CX},${CY} Q${(CX + card.cx) / 2 + (i % 2 === 0 ? 20 : -20)},${(CY + card.cy) / 2 - 30} ${card.cx},${card.cy}`}
              stroke={card.color}
              strokeWidth="1.5"
              strokeOpacity="0.6"
              strokeDasharray="4 18"
              fill="none"
              filter="url(#glow-c)"
              style={{
                animation: `dash-flow ${2.8 + i * 0.25}s linear infinite`,
                animationDelay: `${i * 0.55}s`,
              }}
            />
            {/* Travelling dot */}
            <circle r="2.5" fill={card.color} filter="url(#glow-c)" opacity="0.95">
              <animateMotion
                dur={`${3 + i * 0.3}s`}
                repeatCount="indefinite"
                begin={`${i * 0.7}s`}
              >
                <mpath xlinkHref={`#conn-${i}`} />
              </animateMotion>
            </circle>

            {/* Node dot at card endpoint */}
            <circle
              cx={card.cx} cy={card.cy} r="4"
              fill={card.color}
              fillOpacity="0.15"
              stroke={card.color}
              strokeWidth="1"
              strokeOpacity="0.5"
              filter="url(#glow-c)"
            />
          </g>
        ))}

        {/* Central glow */}
        <circle cx={CX} cy={CY} r="56" fill="url(#ring-grad)" filter="url(#glow-strong)" />
      </svg>

      {/* ── Center logo node ── */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: `translate(-50%, calc(-50% + ${CY - 260}px))`,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Ring 1 */}
        <div className="animate-pulse-ring" style={{
          position: "absolute",
          inset: -18,
          borderRadius: "50%",
          border: "1.5px solid rgba(6,182,212,0.3)",
          boxShadow: "0 0 20px rgba(6,182,212,0.15)",
        }} />
        {/* Ring 2 */}
        <div className="animate-pulse-ring" style={{
          position: "absolute",
          inset: -32,
          borderRadius: "50%",
          border: "1px solid rgba(129,140,248,0.18)",
          animationDelay: "1s",
        }} />
        {/* Ring 3 */}
        <div className="animate-pulse-ring" style={{
          position: "absolute",
          inset: -46,
          borderRadius: "50%",
          border: "1px solid rgba(6,182,212,0.08)",
          animationDelay: "2s",
        }} />

        {/* Core circle */}
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: "50%",
            background: "radial-gradient(circle at 40% 35%, rgba(6,182,212,0.2) 0%, rgba(129,140,248,0.15) 60%, rgba(5,10,20,0.9) 100%)",
            border: "1.5px solid rgba(6,182,212,0.45)",
            boxShadow: "0 0 40px rgba(6,182,212,0.3), 0 0 80px rgba(6,182,212,0.1), inset 0 1px 0 rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(12px)",
            position: "relative",
          }}
        >
          <Image
            src="/logo-icon-clear.png"
            alt="Flowstate"
            width={58}
            height={58}
            style={{
              objectFit: "contain",
              filter: "drop-shadow(0 0 8px rgba(6,182,212,0.55)) drop-shadow(0 0 16px rgba(99,102,241,0.3))",
            }}
          />
        </div>
      </div>

      {/* ── Service cards ── */}
      {cards.map((card, i) => (
        <div
          key={card.id}
          style={{
            position: "absolute",
            ...card.style,
            zIndex: 5,
            animation: `float-y ${3.5 + i * 0.4}s ease-in-out infinite`,
            animationDelay: `${i * 0.6}s`,
          }}
        >
          <div
            className="glass"
            style={{
              width: 172,
              padding: "16px 18px",
              borderRadius: 16,
              border: `1px solid rgba(${card.color === "#06b6d4" ? "6,182,212" : "129,140,248"},0.2)`,
              background: `rgba(${card.color === "#06b6d4" ? "6,182,212" : "129,140,248"},0.04)`,
              backdropFilter: "blur(16px)",
              boxShadow: `0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.04)`,
            }}
          >
            {/* Icon + label row */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: `rgba(${card.color === "#06b6d4" ? "6,182,212" : "129,140,248"},0.12)`,
                  border: `1px solid rgba(${card.color === "#06b6d4" ? "6,182,212" : "129,140,248"},0.25)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {card.icon}
              </div>
              <span
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#e2e8f0",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                }}
              >
                {card.label}
              </span>
            </div>

            {/* Tagline */}
            <p
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 11,
                color: "#94a3b8",
                letterSpacing: "0.02em",
                lineHeight: 1.5,
                marginBottom: 10,
              }}
            >
              {card.tagline}
            </p>

            {/* Metric badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                padding: "4px 10px",
                borderRadius: 100,
                background: `rgba(${card.color === "#06b6d4" ? "6,182,212" : "129,140,248"},0.1)`,
                border: `1px solid rgba(${card.color === "#06b6d4" ? "6,182,212" : "129,140,248"},0.2)`,
              }}
            >
              <div
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: card.color,
                  boxShadow: `0 0 4px ${card.color}`,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 10.5,
                  fontWeight: 600,
                  color: card.color,
                  letterSpacing: "0.02em",
                }}
              >
                {card.metric}
              </span>
            </div>
          </div>
        </div>
      ))}

      <style>{`
        @keyframes pulse-ring-svg {
          0% { r: 68; opacity: 0.6; }
          100% { r: 90; opacity: 0; }
        }
        @keyframes float-y {
          0%, 100% { translate: 0 0px; }
          50% { translate: 0 -7px; }
        }
      `}</style>
    </div>
  );
}
