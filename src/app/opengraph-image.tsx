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
              "radial-gradient(ellipse 70% 70% at 50% 45%, transparent 0%, #050a14 75%)",
          }}
        />

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
            fontSize: 76,
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
            fontSize: 76,
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
