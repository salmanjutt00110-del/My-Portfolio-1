"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeEngine } from "@/context/ThemeContext";

/* ─────────────────────────────────────────────
   Section 4: Contact & Assistant Component
   ───────────────────────────────────────────── */

export default function AboutContactSection() {
  const { activeTheme } = useThemeEngine();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("contact@amirads.pro");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  /* WhatsApp Link with Pre-filled Client Message */
  const whatsappUrl = "https://wa.me/923071952648?text=Hello%20Salman,%20I%20would%20like%20to%20discuss%20a%20premium%20creative%20project%20with%20you.";

  return (
    <div className="relative w-full h-full flex flex-col justify-center py-20 lg:py-0 px-6 md:px-16 lg:px-24">
      {/* Outer Aesthetic Border */}
      <div 
        className="absolute inset-0 pointer-events-none rounded-[32px] border m-4 lg:m-8 transition-colors duration-500"
        style={{
          borderColor: `${activeTheme.accentColor}15`,
          boxShadow: `inset 0 0 30px ${activeTheme.accentColor}02`,
          zIndex: 1,
        }}
      />

      {/* Cybernetic corners */}
      <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-white/10 pointer-events-none z-10" />
      <div className="absolute top-8 right-8 w-4 h-4 border-t-2 border-r-2 border-white/10 pointer-events-none z-10" />
      <div className="absolute bottom-8 left-8 w-4 h-4 border-b-2 border-l-2 border-white/10 pointer-events-none z-10" />
      <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-white/10 pointer-events-none z-10" />

      {/* ── Heading Header ── */}
      <div className="mb-10 text-left max-w-xl z-20">
        <span
          className="text-[10px] tracking-[0.4em] uppercase mb-3 block font-mono transition-colors duration-500"
          style={{ color: activeTheme.accentColor }}
        >
          Let's Collaborate
        </span>
        <h2
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
          style={{ fontFamily: "var(--font-heading)", color: "#FAFAFA" }}
        >
          Contact <span className="transition-colors duration-500" style={{ color: activeTheme.accentColor }}>& Assistant</span>
        </h2>
      </div>

      {/* ── Ultra-Luxury Glassmorphic Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch w-full z-20 max-w-5xl text-left">
        
        {/* Direct Email Card (md:col-span-6) */}
        <button
          onClick={handleCopyEmail}
          onMouseEnter={() => setHoveredCard("email")}
          onMouseLeave={() => setHoveredCard(null)}
          className="col-span-1 md:col-span-6 flex items-center justify-between p-6 rounded-2xl border transition-all duration-500 bg-zinc-950/45 text-left relative overflow-hidden"
          style={{
            borderColor: hoveredCard === "email" ? activeTheme.accentColor : "rgba(255,255,255,0.05)",
            boxShadow: hoveredCard === "email" ? activeTheme.glowShadow : "none",
            cursor: "pointer",
          }}
        >
          {/* Dynamic hover glow overlay */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle at center, ${activeTheme.glowColor} 0%, transparent 70%)`
            }}
          />

          <div className="flex items-center gap-4 relative z-10">
            <div
              className="w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300"
              style={{
                borderColor: hoveredCard === "email" ? activeTheme.accentColor : "rgba(255, 255, 255, 0.1)",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke={hoveredCard === "email" ? activeTheme.accentColor : "rgba(250,250,250,0.6)"}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div>
              <span className="block text-[8px] tracking-widest text-zinc-500 uppercase font-mono mb-0.5">
                BUSINESS EMAIL
              </span>
              <span
                className="block text-base font-semibold tracking-tight transition-colors duration-300"
                style={{
                  color: hoveredCard === "email" ? activeTheme.accentColor : "#FAFAFA",
                  fontFamily: "var(--font-body)",
                }}
              >
                contact@amirads.pro
              </span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-[9px] font-bold font-mono border px-3 py-1 rounded bg-zinc-950 relative z-10 transition-colors duration-500"
                style={{
                  borderColor: `${activeTheme.accentColor}30`,
                  color: activeTheme.accentColor,
                }}
              >
                COPIED!
              </motion.span>
            ) : (
              <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase relative z-10 pr-2">
                COPY
              </span>
            )}
          </AnimatePresence>
        </button>

        {/* WhatsApp Assistant Connection (md:col-span-6) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredCard("whatsapp")}
          onMouseLeave={() => setHoveredCard(null)}
          className="col-span-1 md:col-span-6 flex items-center justify-between p-6 rounded-2xl border transition-all duration-500 bg-zinc-950/45 text-left relative overflow-hidden group select-none block"
          style={{
            borderColor: hoveredCard === "whatsapp" ? activeTheme.accentColor : "rgba(255,255,255,0.05)",
            boxShadow: hoveredCard === "whatsapp" ? activeTheme.glowShadow : "none",
            cursor: "pointer",
          }}
        >
          <div className="flex items-center gap-4 relative z-10">
            <div
              className="w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300"
              style={{
                borderColor: hoveredCard === "whatsapp" ? activeTheme.accentColor : "rgba(255, 255, 255, 0.1)",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke={hoveredCard === "whatsapp" ? activeTheme.accentColor : "rgba(250,250,250,0.6)"}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <span className="block text-[8px] tracking-widest text-zinc-500 uppercase font-mono mb-0.5">
                WHATSAPP ASSISTANT
              </span>
              <span
                className="block text-base font-semibold tracking-tight transition-colors duration-300"
                style={{
                  color: hoveredCard === "whatsapp" ? activeTheme.accentColor : "#FAFAFA",
                  fontFamily: "var(--font-body)",
                }}
              >
                +92 307 1952648
              </span>
            </div>
          </div>

          <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase relative z-10 pr-2 group-hover:text-white transition-colors duration-300">
            CONNECT
          </span>
        </a>

        {/* Social Rings Row (md:col-span-12) */}
        <div className="col-span-1 md:col-span-12 border border-white/5 rounded-2xl p-6 bg-zinc-950/20 backdrop-blur-md flex flex-col justify-center">
          <span className="block text-[9px] tracking-widest text-zinc-500 uppercase mb-4 font-mono text-center">
            DIRECT SOCIAL CHANNELS
          </span>
          <div className="flex flex-wrap md:flex-nowrap items-center gap-4 w-full">
            {[
              { name: "Instagram", url: "https://instagram.com" },
              { name: "Facebook", url: "https://facebook.com" },
              { name: "TikTok", url: "https://tiktok.com" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 text-center rounded-xl border text-xs font-bold font-mono tracking-widest transition-all duration-300 uppercase hover:text-black"
                style={{
                  backgroundColor: "rgba(9, 9, 11, 0.4)",
                  borderColor: "rgba(255, 255, 255, 0.05)",
                  color: "rgba(250, 250, 250, 0.7)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = activeTheme.accentColor;
                  e.currentTarget.style.color = "#09090B";
                  e.currentTarget.style.backgroundColor = activeTheme.accentColor;
                  e.currentTarget.style.boxShadow = activeTheme.glowShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.color = "rgba(250, 250, 250, 0.7)";
                  e.currentTarget.style.backgroundColor = "rgba(9, 9, 11, 0.4)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
