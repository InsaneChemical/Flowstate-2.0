import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGoogleFont(family: string, weight: number) {
  const css = await (
    await fetch(
      `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}`
    )
  ).text();
  const match = css.match(/src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/);
  if (match) {
    const res = await fetch(match[1]);
    if (res.ok) return res.arrayBuffer();
  }
  throw new Error(`Failed to load font: ${family} ${weight}`);
}

const badges = ["Website Design", "Social Media", "Web3 Communities"];

const sideCards = [
  {
    label: "Website",
    tagline: "Convert • Capture • Grow",
    metric: "↑ 2.4× CVR",
    color: "#06b6d4",
    colorRgb: "6,182,212",
    side: "left" as const,
    top: 96,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    label: "Community",
    tagline: "Support • Moderate • Engage",
    metric: "5k+ members",
    color: "#818cf8",
    colorRgb: "129,140,248",
    side: "right" as const,
    top: 96,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

export default async function OpengraphImage() {
  const [syneExtraBold, dmSansMedium, logoBuffer] = await Promise.all([
    loadGoogleFont("Syne", 800),
    loadGoogleFont("DM Sans", 500),
    readFile(join(process.cwd(), "public", "logo-transparent.png")),
  ]);
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050a14",
          backgroundImage:
            "linear-gradient(rgba(6,182,212,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.12) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(ellipse 60% 60% at 50% 45%, transparent 0%, #050a14 75%)",
          }}
        />

        {/* Floating service cards, echoing the hero visual */}
        {sideCards.map((card) => (
          <div
            key={card.label}
            style={{
              position: "absolute",
              [card.side]: 50,
              top: card.top,
              display: "flex",
              flexDirection: "column",
              width: 168,
              padding: 14,
              borderRadius: 14,
              background: `rgba(${card.colorRgb},0.05)`,
              border: `1px solid rgba(${card.colorRgb},0.22)`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <div
                style={{
                  display: "flex",
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  background: `rgba(${card.colorRgb},0.12)`,
                  border: `1px solid rgba(${card.colorRgb},0.25)`,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {card.icon}
              </div>
              <div
                style={{
                  display: "flex",
                  fontFamily: "Syne",
                  fontSize: 15,
                  color: "#e2e8f0",
                  letterSpacing: "-0.01em",
                }}
              >
                {card.label}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "DM Sans",
                fontSize: 12,
                color: "#94a3b8",
                marginBottom: 10,
              }}
            >
              {card.tagline}
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "DM Sans",
                fontSize: 12,
                fontWeight: 500,
                color: card.color,
                padding: "3px 10px",
                borderRadius: 100,
                background: `rgba(${card.colorRgb},0.12)`,
                alignSelf: "flex-start",
              }}
            >
              {card.metric}
            </div>
          </div>
        ))}

        {/* Badge row */}
        <div style={{ display: "flex", gap: 10, marginBottom: 32 }}>
          {badges.map((b) => (
            <div
              key={b}
              style={{
                display: "flex",
                fontFamily: "DM Sans",
                fontSize: 18,
                fontWeight: 500,
                color: "#67e8f9",
                padding: "8px 18px",
                borderRadius: 100,
                background: "rgba(6,182,212,0.08)",
                border: "1.5px solid rgba(6,182,212,0.3)",
                letterSpacing: "0.02em",
              }}
            >
              {b}
            </div>
          ))}
        </div>

        {/* Logo (icon + wordmark, complete) */}
        <div style={{ display: "flex", marginBottom: 28 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={216} height={55} style={{ display: "flex" }} alt="" />
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            fontFamily: "Syne",
            fontSize: 66,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#f8fafc",
            lineHeight: 1.05,
          }}
        >
          Smarter media.
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Syne",
            fontSize: 66,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            backgroundImage: "linear-gradient(135deg, #06b6d4 0%, #818cf8 100%)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1.05,
          }}
        >
          Smoother growth.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Syne", data: syneExtraBold, weight: 800, style: "normal" },
        { name: "DM Sans", data: dmSansMedium, weight: 500, style: "normal" },
      ],
    }
  );
}
