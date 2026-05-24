"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useThemeEngine } from "@/context/ThemeContext";

/* ─────────────────────────────────────────────
   Work Showcase Items Definition
   ───────────────────────────────────────────── */

interface WorkProject {
  id: number;
  title: string;
  category: string;
  description: string;
  url: string;
  metrics: string;
  techTags: string[];
}

const WORK_PROJECTS: WorkProject[] = [
  {
    id: 0,
    title: "Amir Ads Enterprise Portal",
    category: "DIGITAL ADVERTISING PLATFORM",
    description: "Premium digital advertising platform built with absolute pixel-perfect layout systems.",
    url: "https://www.amirads.pro/",
    metrics: "Speed Score: 100/100 LCP",
    techTags: ["Next.js", "Tailwind CSS", "Systems Dev"],
  },
  {
    id: 1,
    title: "TemuEarn Web Architecture",
    category: "CLOUD REWARDS TELEMETRY",
    description: "Automated tracking hub and repository layout optimized for cloud integration.",
    url: "https://github.com/salmanjutt00110-del/TemuEarn",
    metrics: "GitHub: Active Repository",
    techTags: ["React", "Automation", "Git Pipeline"],
  },
];

/* ─────────────────────────────────────────────
   Section 3: My Work Portfolio Showcase
   ───────────────────────────────────────────── */

export default function WebDevSection() {
  const { activeTheme } = useThemeEngine();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

      {/* ── Section Title Header ── */}
      <div className="mb-10 text-left max-w-xl z-20">
        <span
          className="text-[10px] tracking-[0.4em] uppercase mb-3 block text-zinc-500 font-mono"
        >
          Project Catalog
        </span>
        <h2
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
          style={{ fontFamily: "var(--font-heading)", color: "#FAFAFA" }}
        >
          My <span style={{ color: activeTheme.accentColor }}>Work</span>
        </h2>
      </div>

      {/* ── Interactive Case Study Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-20 w-full max-w-5xl text-left">
        {WORK_PROJECTS.map((project) => {
          const isHovered = hoveredCard === project.id;
          return (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              data-cursor-text="LAUNCH SITE ↗"
              className="relative rounded-2xl p-8 flex flex-col justify-between min-h-[280px] border transition-all duration-500 bg-zinc-950/45 border-white/5 block overflow-hidden group select-none"
              style={{
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow: isHovered
                  ? "0 0 50px -10px rgba(0, 240, 255, 0.2)"
                  : "0 15px 30px -15px rgba(0,0,0,0.6)",
                borderColor: isHovered ? activeTheme.accentColor : "rgba(255, 255, 255, 0.05)",
                cursor: "none",
              }}
            >
              {/* Dynamic card hover glow overlay */}
              <motion.div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${activeTheme.glowColor} 0%, transparent 75%)`
                }}
              />

              <div>
                {/* Header Category and Status tag */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[9px] font-mono tracking-widest transition-colors duration-500"
                    style={{ color: activeTheme.accentColor }}
                  >
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[8px] font-mono text-zinc-500">LIVE</span>
                  </div>
                </div>

                {/* Card Main Title */}
                <h3
                  className="text-2xl font-bold tracking-tight mb-3 transition-colors duration-300 group-hover:text-white font-heading"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: isHovered ? activeTheme.accentColor : "#FAFAFA",
                    textShadow: "0 2px 8px rgba(0,0,0,0.5)"
                  }}
                >
                  {project.title}
                </h3>

                {/* Subtext description */}
                <p
                  className="text-xs leading-relaxed text-zinc-400"
                  style={{
                    fontFamily: "var(--font-body)",
                    textShadow: "0 1px 6px rgba(0,0,0,0.4)"
                  }}
                >
                  {project.description}
                </p>
              </div>

              {/* Technologies used & Performance specs */}
              <div className="flex flex-col gap-4 border-t border-white/5 pt-6 mt-6">
                {/* Mini Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[8px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Performance stats row */}
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                    {project.metrics}
                  </span>
                  
                  {/* Floating CTA redirect visual row */}
                  <span
                    className="inline-flex items-center gap-1.5 text-[9px] font-black tracking-widest text-zinc-400 transition-colors duration-300"
                    style={{
                      color: isHovered ? activeTheme.accentColor : "rgba(250,250,250,0.6)"
                    }}
                  >
                    LAUNCH PORTAL
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.0"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
