"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { CalendlyButton } from "./CalendlyButton";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const p = pathname === "/" ? "" : "/";

  return (
    <>
      <nav
        className="navbar-root"
        style={{
          position: "fixed",
          top: 16,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 20px",
        }}
      >
        <div
          className="navbar-pill"
          style={{
            maxWidth: 1060,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 60,
            padding: "0 20px",
            borderRadius: 100,
            background: "rgba(5,10,20,0.96)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          {/* Logo */}
          <a href={`${p}#home`} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <Image src="/logo-transparent.png" alt="Flowstate Media" width={142} height={36} priority className="navbar-logo" style={{ height: "36px", width: "auto" }} />
          </a>

          {/* Desktop links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              flex: 1,
              justifyContent: "center",
            }}
            className="hidden-mobile"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={`${p}${l.href}`}
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.6)",
                  padding: "8px 14px",
                  borderRadius: 100,
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#f8fafc";
                  (e.target as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                  (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="navbar-cta-row" style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <CalendlyButton
              className="btn-primary hidden-mobile"
              style={{ padding: "9px 20px", fontSize: 13 }}
            >
              Book a Call
            </CalendlyButton>
            <button
              onClick={() => setOpen(true)}
              style={{
                background: "none",
                border: "none",
                color: "#f8fafc",
                cursor: "pointer",
                padding: 11,
                display: "none",
              }}
              className="show-mobile"
              aria-label="Open menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "rgba(5,10,20,0.97)",
            backdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
          }}
        >
          <button
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              background: "none",
              border: "none",
              color: "#f8fafc",
              cursor: "pointer",
              opacity: 0.6,
              padding: 8,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {links.map((l) => (
            <a
              key={l.href}
              href={`${p}${l.href}`}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: 28,
                fontWeight: 700,
                color: "#e2e8f0",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
          <CalendlyButton className="btn-primary" style={{ padding: "12px 28px" }}>
            Book a Call
          </CalendlyButton>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .navbar-root { padding: 0 12px !important; }
          .navbar-pill { padding: 0 8px 0 14px !important; }
          .navbar-logo { height: 30px !important; width: auto !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
