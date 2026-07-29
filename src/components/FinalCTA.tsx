"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { CalendlyButton } from "./CalendlyButton";

type FormState = "idle" | "submitting" | "success" | "error";

export function FinalCTA() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    need: "",
    message: "",
  });
  const [formState, setFormState] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  return (
    <section
      id="contact"
      className="section-pad"
      style={{
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(6,182,212,0.08)",
      }}
    >
      {/* Background photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1800&q=80"
        alt=""
        aria-hidden="true"
        loading="lazy"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 40%",
          opacity: 0.08,
          pointerEvents: "none",
        }}
      />
      {/* Gradient overlay on top of photo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, #050a14 0%, rgba(5,10,20,0.7) 40%, rgba(5,10,20,0.7) 60%, #050a14 100%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-inner" style={{ position: "relative" }}>
        {/* Header */}
        <motion.div
          className="cta-header"
          style={{ textAlign: "center", marginBottom: 56 }}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={reduce ? { duration: 0.15 } : {
            opacity: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
            y:       { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 12,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#06b6d4",
              marginBottom: 16,
              fontWeight: 500,
            }}
          >
            Get Started
          </p>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(32px, 4.5vw, 54px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#f8fafc",
              marginBottom: 16,
            }}
          >
            Ready to grow your{" "}
            <span className="gradient-text">business?</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 17,
              lineHeight: 1.75,
              color: "#94a3b8",
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            Tell us where you are and where you want to go. We&apos;ll get back to you and take it from there.
          </p>
        </motion.div>

        {/* Trust pillars — reduce friction before the form */}
        <motion.div
          className="cta-trust-pillars"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 40,
            marginBottom: 36,
            flexWrap: "wrap",
          }}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={reduce ? { duration: 0.15 } : {
            opacity: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
            y:       { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          {([
            {
              icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>,
              text: "No lock-in contracts",
            },
            {
              icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
              text: "Reply within 24 hours",
            },
            {
              icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
              text: "First delivery in 2 weeks",
            },
          ] as { icon: React.ReactNode; text: string }[]).map((item) => (
            <div
              key={item.text}
              className="cta-trust-pillar"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
              }}
            >
              {item.icon}
              <span style={{
                fontFamily: "var(--font-dm)",
                fontSize: 13,
                color: "#6b7d99",
                fontWeight: 500,
              }}>
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Form card */}
        <motion.div
          className="glass"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={reduce ? { duration: 0.15 } : {
            opacity: { duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
            y:       { duration: 0.8,  delay: 0.1, ease: [0.16, 1, 0.3, 1] },
          }}
          style={{
            maxWidth: 640,
            margin: "0 auto",
            padding: "48px 48px",
            borderColor: "rgba(6,182,212,0.15)",
          }}
        >
          {/* Screen reader live region for form status */}
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            {formState === "success" ? "Enquiry received. We'll be in touch soon." : ""}
            {formState === "submitting" ? "Sending your enquiry..." : ""}
          </div>

          {formState === "success" ? (
            <div style={{ textAlign: "center", padding: "32px 0" }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "rgba(6,182,212,0.12)",
                  border: "2px solid rgba(6,182,212,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: 24,
                  fontWeight: 800,
                  color: "#f8fafc",
                  marginBottom: 12,
                  letterSpacing: "-0.03em",
                }}
              >
                Enquiry received.
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 15,
                  color: "#94a3b8",
                  lineHeight: 1.7,
                }}
              >
                Thanks — your enquiry has been received. We&apos;ll be in touch
                soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
                <label style={labelStyle}>
                  <span style={labelTextStyle}>Your name <span style={{ color: "#06b6d4" }} aria-hidden="true">*</span></span>
                  <input
                    className="input-glass"
                    type="text"
                    name="name"
                    placeholder="Alex Chen"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </label>
                <label style={labelStyle}>
                  <span style={labelTextStyle}>Business name <span style={{ color: "#06b6d4" }} aria-hidden="true">*</span></span>
                  <input
                    className="input-glass"
                    type="text"
                    name="business"
                    placeholder="Acme Co."
                    required
                    autoComplete="organization"
                    value={form.business}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <label style={labelStyle}>
                <span style={labelTextStyle}>Email address <span style={{ color: "#06b6d4" }} aria-hidden="true">*</span></span>
                <input
                  className="input-glass"
                  type="email"
                  name="email"
                  placeholder="alex@company.com"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </label>

              <label style={labelStyle}>
                <span style={labelTextStyle}>What do you need most? <span style={{ color: "#06b6d4" }} aria-hidden="true">*</span></span>
                <select
                  className="input-glass"
                  name="need"
                  required
                  value={form.need}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="website">Website design</option>
                  <option value="social">Social media management</option>
                  <option value="community">Web3 community management</option>
                  <option value="unsure">Not sure — help me figure it out</option>
                </select>
              </label>

              <label style={labelStyle}>
                <span style={labelTextStyle}>Tell us a bit more</span>
                <textarea
                  className="input-glass"
                  name="message"
                  rows={4}
                  placeholder="Where are you now, where do you want to go, and what's stopping you?"
                  autoComplete="off"
                  value={form.message}
                  onChange={handleChange}
                  style={{ resize: "vertical", minHeight: 110 }}
                />
              </label>

              <button
                type="submit"
                className="btn-primary"
                disabled={formState === "submitting"}
                style={{
                  justifyContent: "center",
                  padding: "15px 32px",
                  fontSize: 15,
                  marginTop: 4,
                  opacity: formState === "submitting" ? 0.7 : 1,
                  cursor: formState === "submitting" ? "wait" : "pointer",
                }}
              >
                {formState === "submitting" ? (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ animation: "spin 0.8s linear infinite" }}
                    >
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Enquiry
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>

              {formState === "error" && (
                <p style={{ fontFamily: "var(--font-dm)", fontSize: 13, color: "#f87171", textAlign: "center" }}>
                  Something went wrong — please try again or email us directly.
                </p>
              )}

              <p
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 13,
                  color: "#6b7d99",
                  textAlign: "center",
                }}
              >
                Prefer to talk now?{" "}
                <a
                  href="https://wa.me/27690390431?text=Hi!%20I%27d%20like%20to%20find%20out%20more%20about%20working%20with%20Flowstate%20Media."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#06b6d4", fontFamily: "var(--font-dm)", fontSize: 13, textDecoration: "underline" }}
                >
                  Message us on WhatsApp
                </a>{" "}
                or{" "}
                <CalendlyButton
                  style={{ background: "none", border: "none", padding: "12px 4px", margin: "-12px 0", color: "#06b6d4", fontSize: 13, fontFamily: "var(--font-dm)", cursor: "pointer", textDecoration: "underline" }}
                >
                  book a call directly
                </CalendlyButton>
              </p>
            </form>
          )}
        </motion.div>
      </div>
      <style>{`
        @media(max-width:768px){
          .cta-trust-pillars { gap: 20px !important; flex-direction: column; align-items: center; }
          .cta-trust-pillar { justify-content: center; }
        }
        @media(max-width:600px){
          .form-row { grid-template-columns: 1fr !important; }
          #contact .glass { padding: 28px 16px !important; }
          .cta-header { margin-bottom: 28px !important; }
        }
        @keyframes spin { to { transform: rotate(360deg) } }
      `}</style>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
};

const labelTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm)",
  fontSize: 14,
  fontWeight: 500,
  color: "#b0bfcf",
  letterSpacing: "0.01em",
};
