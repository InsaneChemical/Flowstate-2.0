import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
              "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 0%, #050a14 75%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, #06b6d4 0%, #818cf8 100%)",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 40,
              fontWeight: 700,
              color: "#f8fafc",
              letterSpacing: "-0.02em",
            }}
          >
            FLOWSTATE MEDIA
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#f8fafc",
          }}
        >
          Smarter media.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            backgroundImage: "linear-gradient(135deg, #06b6d4 0%, #818cf8 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Smoother growth.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#94a3b8",
            marginTop: 28,
          }}
        >
          Websites · Social Media · Web3 Communities
        </div>
      </div>
    ),
    { ...size }
  );
}
