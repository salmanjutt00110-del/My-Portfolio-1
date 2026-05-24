"use client";

import React from "react";
import { motion } from "framer-motion";
import { useThemeEngine } from "@/context/ThemeContext";

/* ─────────────────────────────────────────────
   Section 2: About Me Component
   ───────────────────────────────────────────── */

export default function VideoProductionSection() {
  const { activeTheme } = useThemeEngine();

  return (
    <div className="relative w-full h-full flex flex-col justify-center py-20 lg:py-0 px-6 md:px-16 lg:px-24">
      {/* Outer Aesthetic Border */}
      <div 
        className="absolute inset-0 pointer-events-none rounded-[32px] border border-white/5 m-4 lg:m-8"
        style={{
          boxShadow: "inset 0 0 30px rgba(255, 255, 255, 0.01)",
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
          className="text-[10px] tracking-[0.4em] uppercase mb-3 block text-zinc-500 font-mono"
        >
          Identity & Focus
        </span>
        <h2
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
          style={{ fontFamily: "var(--font-heading)", color: "#FAFAFA" }}
        >
          About <span style={{ color: activeTheme.accentColor }}>Me</span>
        </h2>
      </div>

      {/* ── Glassmorphic Bio Container ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full z-20 max-w-5xl">
        
        {/* Biography Block (lg:col-span-8) */}
        <div 
          className="col-span-1 lg:col-span-8 p-8 md:p-10 rounded-3xl border bg-zinc-950/45 backdrop-blur-xl border-white/5 text-left"
          style={{
            boxShadow: "0 20px 40px -15px rgba(0,0,0,0.7)",
          }}
        >
          <span className="text-[9px] tracking-[0.3em] font-semibold text-zinc-500 uppercase mb-4 block font-mono">
            CORE PROFESSIONAL STATEMENT
          </span>
          
          <p
            className="text-lg md:text-xl leading-relaxed font-medium text-zinc-100"
            style={{
              fontFamily: "var(--font-body)",
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
            }}
          >
            I help brands grow with premium digital solutions including graphic design, video editing, website development, social media marketing, branding, and advertising.
          </p>
        </div>

        {/* Side Details (lg:col-span-4) */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-4 text-left">
          <div className="p-6 rounded-2xl border border-white/5 bg-zinc-950/20 backdrop-blur-md">
            <span className="block text-[8px] tracking-widest text-zinc-500 uppercase mb-1 font-mono">
              ROLE / DESIGNATION
            </span>
            <span className="block text-sm font-bold text-white font-heading">
              Creative Digital Specialist
            </span>
          </div>

          <div className="p-6 rounded-2xl border border-white/5 bg-zinc-950/20 backdrop-blur-md">
            <span className="block text-[8px] tracking-widest text-zinc-500 uppercase mb-1 font-mono">
              BRAND FRAMEWORK
            </span>
            <span className="block text-sm font-bold text-white font-heading">
              Shani Creative
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
