"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface ServiceSectionProps {
  index: number;
  label: string;
  headline: string;
  description: string;
  specs: string[];
  metrics: string;
  stats: string;
  statsLabel: string;
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
  glowColor: string;
  glowShadow: string;
}

export default function ServiceSection({
  index,
  label,
  headline,
  description,
  specs,
  metrics,
  stats,
  statsLabel,
  accentColor,
  gradientFrom,
  gradientTo,
  glowColor,
  glowShadow,
}: ServiceSectionProps) {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div className="relative w-full h-full flex flex-col justify-center py-20 lg:py-0 px-6 md:px-16 lg:px-24">
      {/* Background Glow Sphere */}
      <div
        className="absolute -right-24 top-1/4 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-20 transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          transform: hovered ? "scale(1.1) translateY(-20px)" : "scale(1) translateY(0)",
        }}
      />

      {/* Cybernetic corners */}
      <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 pointer-events-none z-10 transition-colors duration-500" style={{ borderColor: `${accentColor}25` }} />
      <div className="absolute top-8 right-8 w-4 h-4 border-t-2 border-r-2 pointer-events-none z-10 transition-colors duration-500" style={{ borderColor: `${accentColor}25` }} />
      <div className="absolute bottom-8 left-8 w-4 h-4 border-b-2 border-l-2 pointer-events-none z-10 transition-colors duration-500" style={{ borderColor: `${accentColor}25` }} />
      <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 pointer-events-none z-10 transition-colors duration-500" style={{ borderColor: `${accentColor}25` }} />

      {/* Outer border highlight */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[32px] border m-4 lg:m-8 transition-all duration-500"
        style={{
          borderColor: hovered ? `${accentColor}20` : `${accentColor}10`,
          boxShadow: hovered ? `inset 0 0 50px ${accentColor}05` : `inset 0 0 30px ${accentColor}02`,
          zIndex: 1,
        }}
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(${accentColor} 1px, transparent 1px), linear-gradient(90deg, ${accentColor} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          zIndex: 1,
        }}
      />

      {/* Header Bar */}
      <div className="mb-8 lg:mb-12 text-left max-w-xl z-20">
        <span
          className="text-[10px] tracking-[0.40em] uppercase mb-3 block font-mono font-bold transition-colors duration-500"
          style={{ color: accentColor }}
        >
          {label}
        </span>
        <h2
          className="text-4xl md:text-5xl font-black tracking-tight text-white leading-none"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Service Slot{" "}
          <span
            className="transition-all duration-500"
            style={{
              color: accentColor,
              textShadow: hovered ? glowShadow : "none",
            }}
          >
            0{index}
          </span>
        </h2>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full z-20 max-w-6xl text-left">
        
        {/* Left Column: Headline and Specs */}
        <div
          className="col-span-1 lg:col-span-7 flex flex-col justify-between p-5 md:p-10 rounded-2xl backdrop-blur-md bg-black/40 border border-white/10 transition-all duration-500"
          style={{ borderColor: hovered ? `${accentColor}25` : undefined }}
        >
          <div className="flex flex-col h-full justify-between gap-8">
            <div>
              <span
                className="text-[9px] tracking-[0.25em] font-semibold uppercase mb-3 block font-mono transition-colors duration-500 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
                style={{ color: accentColor }}
              >
                Operational Objective
              </span>
              
              <h3
                className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 leading-tight bg-gradient-to-r bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
                style={{
                  fontFamily: "var(--font-heading)",
                  backgroundImage: `linear-gradient(135deg, ${gradientFrom} 0%, #FFFFFF 60%, ${gradientTo} 100%)`,
                }}
              >
                {headline}
              </h3>
              
              <p
                className="text-sm md:text-base leading-relaxed text-zinc-300 font-medium drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {description}
              </p>
            </div>

            {/* Operational Parameters / Specs */}
            <div className="border-t border-white/5 pt-6 mt-4">
              <span className="text-[9px] tracking-widest text-zinc-500 uppercase mb-4 block font-mono drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                System Specifications
              </span>
              
              <div className="flex flex-wrap gap-3 md:gap-4">
                {specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 py-1.5 px-3.5 rounded-full border bg-zinc-950/40 text-xs font-semibold text-zinc-300 transition-all duration-300 hover:text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
                    style={{
                      borderColor: "rgba(255,255,255,0.05)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full transition-colors duration-500"
                      style={{ backgroundColor: accentColor }}
                    />
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Card */}
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="col-span-1 lg:col-span-5 flex flex-col justify-between p-5 md:p-8 rounded-2xl backdrop-blur-md bg-black/40 border border-white/10 transition-all duration-500 relative overflow-hidden group"
          style={{
            borderColor: hovered ? accentColor : "rgba(255, 255, 255, 0.10)",
            boxShadow: hovered ? glowShadow : "none",
          }}
        >
          {/* Accent border bar on top */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500"
            style={{
              background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
              opacity: hovered ? 1 : 0.3,
            }}
          />

          <div className="flex flex-col h-full justify-between gap-8">
            {/* Status Indicator */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: accentColor }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: accentColor }} />
                </span>
                <span className="text-[9px] font-mono text-zinc-500 tracking-wider drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                  TELEMETRY LIVE
                </span>
              </div>
              
              <span
                className="text-[10px] font-mono font-bold transition-colors duration-500 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
                style={{ color: accentColor }}
              >
                {metrics}
              </span>
            </div>

            {/* Metric Counter Big */}
            <div className="py-6 flex flex-col items-start">
              <h4
                className="text-5xl md:text-6xl font-black tracking-tighter mb-2 bg-gradient-to-r bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
                style={{
                  fontFamily: "var(--font-heading)",
                  backgroundImage: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
                }}
              >
                {stats}
              </h4>
              <span className="text-[10px] tracking-[0.2em] text-zinc-500 uppercase font-mono drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                {statsLabel}
              </span>
            </div>

            {/* Console Output Footer */}
            <div className="rounded-lg bg-zinc-950/80 border border-white/5 p-3 font-mono text-[9px] text-zinc-400 space-y-1">
              <div className="flex justify-between">
                <span className="text-zinc-600">ENGINE:</span>
                <span>OCTANE-V4.6</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-600">STABILITY:</span>
                <span className="text-emerald-500">99.99% SECURE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-600">OVERLAY:</span>
                <span style={{ color: accentColor }}>ACTIVE GRIDS</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
