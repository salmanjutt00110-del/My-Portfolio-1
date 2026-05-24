"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeEngine } from "@/context/ThemeContext";

/* ─────────────────────────────────────────────
   Services Definition
   ───────────────────────────────────────────── */

interface ServiceItem {
  id: number;
  label: string;
  headline: string;
  description: string;
  specs: string[];
  metrics: string;
  glowColor: string;
}

const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 0,
    label: "Graphic Designing & Branding",
    headline: "Visual Identities That Command Attention",
    description: "High-end corporate branding, luxury watch boutique layouts, and modern vectors designed for global target conversions.",
    specs: ["Swiss Luxury Layouts", "3D Brand Assets", "High-Contrast Typography"],
    metrics: "Design Systems: 100% Custom",
    glowColor: "rgba(0, 255, 102, 0.2)",
  },
  {
    id: 1,
    label: "Video Production & Editing",
    headline: "Cinematic Storytelling Sequence",
    description: "Tactical post-production suite including cinematic grading, Ray-Traced 3D logo overlays, and immersive soundscapes.",
    specs: ["60.00 FPS Telemetry", "Emerald Rec.709 Space", "4D Octane Engine Lighting"],
    metrics: "Render Engine: Octane 4D",
    glowColor: "rgba(228, 228, 231, 0.15)",
  },
  {
    id: 2,
    label: "Web Development",
    headline: "Robust High-Performance Systems",
    description: "Pixel-perfect Next.js frameworks and strict type-safe TypeScript architectures engineered for maximum speed.",
    specs: ["Next.js & Server Components", "Tailwind CSS Layouts", "GSAP Scroll Timelines"],
    metrics: "Deployment Speed: 100/100 LCP",
    glowColor: "rgba(0, 240, 255, 0.2)",
  },
  {
    id: 3,
    label: "Meta Ads & FB Page Management",
    headline: "Data-Driven Marketing Funnels",
    description: "Advanced ROAS optimization matrices, international ad scale strategies, and high-intent targeting setups.",
    specs: ["4-5 Years Meta Scale", "USA/UK Demographics", "ROAS Optimization"],
    metrics: "Performance Yield: +380% ROAS",
    glowColor: "rgba(245, 158, 11, 0.2)",
  },
];

/* ─────────────────────────────────────────────
   Section 1: Total Services Showcase Component
   ───────────────────────────────────────────── */

export default function GraphicDesignSection() {
  const { activeTheme, activeServiceIndex, setActiveServiceIndex } = useThemeEngine();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const activeService = SERVICE_ITEMS[activeServiceIndex];

  return (
    <div className="relative w-full h-full flex flex-col justify-center py-20 lg:py-0 px-6 md:px-16 lg:px-24">
      {/* Dynamic Keyframes Injection for active tabs */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes subtlePulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.45; }
        }
        .animate-tab-pulse {
          animation: subtlePulse 2s ease-in-out infinite;
        }
      `}} />

      {/* Outer border highlighting Section 1 */}
      <div 
        className="absolute inset-0 pointer-events-none rounded-[32px] border m-4 lg:m-8 transition-colors duration-500"
        style={{
          borderColor: `${activeTheme.accentColor}15`,
          boxShadow: `inset 0 0 40px ${activeTheme.accentColor}02`,
          zIndex: 1,
        }}
      />
      
      {/* ── Section Title Header ── */}
      <div className="mb-10 text-left max-w-xl z-20">
        <span
          className="text-[10px] tracking-[0.4em] uppercase mb-3 block font-mono transition-colors duration-500"
          style={{ color: activeTheme.accentColor }}
        >
          Dynamic Capabilities
        </span>
        <h2
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
          style={{ fontFamily: "var(--font-heading)", color: "#FAFAFA" }}
        >
          Total Services <span className="transition-colors duration-500" style={{ color: activeTheme.accentColor }}>Showcase</span>
        </h2>
      </div>

      {/* ── Two-Column Interactive Widget ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full z-20 max-w-6xl text-left">
        
        {/* ── Left Column: Active Service Specifications (lg:col-span-6) ── */}
        <div 
          className="col-span-1 lg:col-span-6 flex flex-col justify-between p-7 rounded-2xl bg-zinc-950/20 backdrop-blur-md border transition-all duration-500"
          style={{ borderColor: `${activeTheme.accentColor}10` }}
        >
          <div className="h-full flex flex-col justify-between">
            <div>
              <span 
                className="text-[10px] tracking-[0.25em] font-semibold uppercase mb-2 block font-mono transition-colors duration-500"
                style={{ color: activeTheme.accentColor }}
              >
                0{activeService.id + 1} / SEQUENCE DATA
              </span>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <h3
                    className="text-3xl font-extrabold tracking-tight mb-4"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "#FAFAFA",
                      textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                    }}
                  >
                    {activeService.headline}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6 text-zinc-400"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {activeService.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Specs list mapping */}
            <div className="border-t border-white/5 pt-6 mt-6">
              <span className="text-[9px] tracking-widest text-zinc-500 uppercase mb-3.5 block font-mono">
                OPERATIONAL PARAMETERS
              </span>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.08 }
                    }
                  }}
                  className="flex flex-col gap-3"
                >
                  {activeService.specs.map((spec, idx) => (
                    <motion.div
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      className="flex items-center gap-3 text-xs font-semibold text-zinc-300"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <span 
                        className="w-1.5 h-1.5 rounded-full transition-colors duration-500" 
                        style={{ backgroundColor: activeTheme.accentColor }}
                      />
                      {spec}
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ── Right Column: Interactive Tab Buttons Selector Grid (lg:col-span-6) ── */}
        <div 
          className="col-span-1 lg:col-span-6 flex flex-col justify-between gap-6 p-7 rounded-2xl bg-zinc-950/45 backdrop-blur-xl border transition-all duration-500 shadow-[0_0_50px_rgba(255,255,255,0.01)]"
          style={{ borderColor: `${activeTheme.accentColor}10` }}
        >
          {/* Tab Button Selector */}
          <div className="flex flex-col gap-3">
            {SERVICE_ITEMS.map((service) => {
              const isActive = activeServiceIndex === service.id;
              const isHovered = hoveredIndex === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceIndex(service.id)}
                  onMouseEnter={() => setHoveredIndex(service.id)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="w-full py-4 px-5 rounded-xl border text-left text-xs font-bold tracking-widest uppercase transition-all duration-300 relative overflow-hidden flex items-center justify-between"
                  style={{
                    backgroundColor: isActive ? `${activeTheme.accentColor}08` : "rgba(9, 9, 11, 0.3)",
                    borderColor: isActive 
                      ? activeTheme.accentColor 
                      : isHovered 
                        ? `${activeTheme.accentColor}50` 
                        : "rgba(255, 255, 255, 0.05)",
                    color: isActive ? activeTheme.accentColor : "rgba(250, 250, 250, 0.6)",
                    cursor: "pointer",
                  }}
                >
                  <span className="relative z-10 font-heading">{service.label}</span>
                  <span className="relative z-10 text-[10px] font-mono opacity-50">
                    SLOT 0{service.id + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Sub-Service Status Frame */}
          <div className="relative rounded-xl border border-white/5 bg-zinc-950/60 p-4 flex flex-col justify-between overflow-hidden">
            <div 
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "20px 20px"
              }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                  <span className="text-[8px] font-mono text-zinc-500 tracking-widest">
                    SYSTEM STATUS: ACTIVE
                  </span>
                  <span 
                    className="text-[9px] font-mono font-bold transition-colors duration-500"
                    style={{ color: activeTheme.accentColor }}
                  >
                    {activeService.metrics}
                  </span>
                </div>
                <div className="py-4 text-center">
                  <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
                    DYNAMIC CONSOLE LOOP PLAYBACK DIRECTED BY SUB-INDEX
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
