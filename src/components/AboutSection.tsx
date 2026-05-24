"use client";

import React from "react";
import { motion } from "framer-motion";
import { useThemeEngine } from "@/context/ThemeContext";

interface SkillItem {
  name: string;
  percentage: number;
}

const SKILLS: SkillItem[] = [
  { name: "Graphic Design & Branding", percentage: 95 },
  { name: "Video Production & Cinematic Editing", percentage: 90 },
  { name: "Web Development (Next.js / TypeScript)", percentage: 85 },
  { name: "Meta Ads & ROAS Optimization", percentage: 92 },
];

export default function AboutSection() {
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
      <div className="mb-8 lg:mb-12 text-left max-w-xl z-20">
        <span
          className="text-[10px] tracking-[0.4em] uppercase mb-3 block text-zinc-500 font-mono font-bold"
        >
          Identity & Focus
        </span>
        <h2
          className="text-4xl md:text-5xl font-black tracking-tight"
          style={{ fontFamily: "var(--font-heading)", color: "#FAFAFA" }}
        >
          About <span style={{ color: activeTheme.accentColor }} className="transition-colors duration-500">Me</span>
        </h2>
      </div>

      {/* ── Grid Layout ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full z-20 max-w-6xl text-left">
        
        {/* Left Column: Biography & Experience Timeline */}
        <div
          className="col-span-1 lg:col-span-6 p-8 rounded-2xl border bg-zinc-950/45 backdrop-blur-xl border-white/5 flex flex-col justify-between"
          style={{ boxShadow: "0 20px 40px -15px rgba(0,0,0,0.7)" }}
        >
          <div>
            <span className="text-[9px] tracking-[0.3em] font-bold text-zinc-500 uppercase mb-4 block font-mono">
              Core Professional Statement
            </span>
            
            <p
              className="text-base md:text-lg leading-relaxed font-semibold text-zinc-200 mb-8"
              style={{
                fontFamily: "var(--font-body)",
                textShadow: "0 2px 10px rgba(0,0,0,0.5)",
              }}
            >
              I help brands grow with premium digital solutions including graphic design, video editing, website development, social media marketing, branding, and advertising.
            </p>
          </div>

          {/* Timeline / Highlights */}
          <div className="border-t border-white/5 pt-6 space-y-4">
            <span className="text-[9px] tracking-[0.35em] font-bold text-zinc-500 uppercase block font-mono">
              Milestone Telemetry
            </span>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-white/5 bg-zinc-950/30">
                <h4 className="text-2xl font-black text-white leading-none mb-1 font-heading">4+ Years</h4>
                <p className="text-[9px] tracking-wider text-zinc-500 uppercase font-mono">Industry Experience</p>
              </div>
              <div className="p-4 rounded-xl border border-white/5 bg-zinc-950/30">
                <h4 className="text-2xl font-black text-white leading-none mb-1 font-heading">50+ Brands</h4>
                <p className="text-[9px] tracking-wider text-zinc-500 uppercase font-mono">Served Globally</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Skill Bars */}
        <div
          className="col-span-1 lg:col-span-6 p-8 rounded-2xl border bg-zinc-950/45 backdrop-blur-xl border-white/5 flex flex-col justify-between gap-6"
          style={{ boxShadow: "0 20px 40px -15px rgba(0,0,0,0.7)" }}
        >
          <div>
            <span className="text-[9px] tracking-[0.3em] font-bold text-zinc-500 uppercase mb-5 block font-mono">
              Technical Capabilities
            </span>

            <div className="space-y-5">
              {SKILLS.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold text-zinc-300">
                    <span style={{ fontFamily: "var(--font-body)" }}>{skill.name}</span>
                    <span className="font-mono text-[10px]" style={{ color: activeTheme.accentColor }}>{skill.percentage}%</span>
                  </div>
                  
                  {/* Skill Bar Container */}
                  <div className="h-[3px] w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full transition-colors duration-500"
                      style={{
                        backgroundColor: activeTheme.accentColor,
                        boxShadow: activeTheme.glowShadow,
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1.0, ease: "easeOut", delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/5 pt-4 text-[9.5px] font-mono text-zinc-500 leading-relaxed">
            SYSTEM ENGINE STATUS: EXCELLENT // STABLE BRAND SCALING MATRIX CHANNELS ACTIVATED
          </div>
        </div>

      </div>
    </div>
  );
}
