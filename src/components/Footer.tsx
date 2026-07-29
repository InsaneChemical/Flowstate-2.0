"use client";
import Image from "next/image";
import Link from "next/link";

const services = [
  "Website Design",
  "Social Media Management",
  "Web3 Community Support",
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/#contact" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/pricing" },
];

export function Footer() {
  return (
    <footer
      className="footer-root"
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(3,6,12,0.9)",
        padding: "64px 24px 32px",
      }}
    >
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr",
            gap: 48,
            marginBottom: 56,
          }}
          className="footer-grid footer-main-grid"
        >
          {/* Brand col */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <Image
                src="/logo-transparent.png"
                alt="Flowstate Media"
                width={142}
                height={36}
                style={{ height: "36px", width: "auto", objectFit: "contain", objectPosition: "left" }}
              />
            </div>
            <p
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 14,
                lineHeight: 1.8,
                color: "#6b7d99",
                maxWidth: 300,
                marginBottom: 24,
              }}
            >
              Smarter media. Smoother growth. We build connected digital systems
              that turn attention into revenue.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: 10 }}>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/flowstate.builds?igsh=MTFic3VubzNpczNubA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Flowstate Media on Instagram"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#6b7d99",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(6,182,212,0.3)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#06b6d4";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#6b7d99";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a
                href="https://x.com/flowstatebuilds"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Flowstate Media on X (Twitter)"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#6b7d99",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(6,182,212,0.3)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#06b6d4";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#6b7d99";
                }}
              >
                {/* X logo */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/27690390431"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Flowstate Media on WhatsApp"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#6b7d99",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(6,182,212,0.3)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#06b6d4";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#6b7d99";
                }}
              >
                {/* WhatsApp logo */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12.017 2.003c-5.505 0-9.977 4.472-9.977 9.977 0 1.76.462 3.48 1.34 4.997L2 22l5.146-1.35a9.955 9.955 0 0 0 4.871 1.24h.004c5.505 0 9.977-4.472 9.977-9.977 0-2.665-1.038-5.171-2.923-7.056a9.913 9.913 0 0 0-7.058-2.854zm0 18.084h-.003a8.28 8.28 0 0 1-4.229-1.16l-.303-.18-3.055.801.815-2.978-.198-.306a8.264 8.264 0 0 1-1.269-4.404c0-4.566 3.716-8.281 8.286-8.281a8.24 8.24 0 0 1 5.858 2.428 8.227 8.227 0 0 1 2.425 5.856c-.002 4.566-3.718 8.224-8.327 8.224z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services col */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#6b7d99",
                marginBottom: 20,
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {services.map((s) => (
                <li
                  key={s}
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: 14,
                    color: "#6b7d99",
                  }}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation col */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#6b7d99",
                marginBottom: 20,
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-dm)",
                      fontSize: 14,
                      color: "#6b7d99",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#6b7d99")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.05)", marginBottom: 28 }} />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 12,
              color: "#6b7d99",
            }}
          >
            © {new Date().getFullYear()} Flowstate Media. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 12,
                  color: "#6b7d99",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#6b7d99")}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-main-grid { gap: 32px !important; margin-bottom: 36px !important; }
        }
        @media(max-width:600px){
          .footer-root { padding: 40px 20px 24px !important; }
          .footer-main-grid { gap: 28px !important; margin-bottom: 28px !important; }
        }
      `}</style>
    </footer>
  );
}
