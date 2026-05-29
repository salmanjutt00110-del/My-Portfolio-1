"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ThemeContextProvider, useThemeEngine } from "@/context/ThemeContext";
import BackgroundVideo from "@/components/BackgroundVideo";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import ServiceSection from "@/components/ServiceSection";
import WebDevSection from "@/components/WebDevSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

/* ─────────────────────────────────────────────
   Section Metadata Definition
   ───────────────────────────────────────────── */

interface SectionData {
  id: string;
  index: number;
  label: string;
  subtitle: string;
}

const SECTIONS: SectionData[] = [
  {
    id: "home",
    index: 0,
    label: "Home",
    subtitle: "Muhammad Salman (Shani) | Creative Digital Specialist",
  },
  {
    id: "graphic-design",
    index: 1,
    label: "Graphic Design",
    subtitle: "Swiss Luxury Layouts, 3D Brand Assets, High-Contrast Typography.",
  },
  {
    id: "video-production",
    index: 2,
    label: "Video Production",
    subtitle: "60.00 FPS Telemetry, Emerald Rec.709 Space, cinematic grading.",
  },
  {
    id: "web-dev-service",
    index: 3,
    label: "Web Development",
    subtitle: "Robust high-performance Next.js systems & type-safe architectures.",
  },
  {
    id: "meta-ads",
    index: 4,
    label: "Meta Ads & FB Management",
    subtitle: "Data-driven marketing funnels, USA/UK targeting setups, and ROAS optimization.",
  },
  {
    id: "work",
    index: 5,
    label: "My Work",
    subtitle: "Interactive case studies and operational repository architectures.",
  },
  {
    id: "about",
    index: 6,
    label: "About Me",
    subtitle: "Official professional biography and design frameworks.",
  },
  {
    id: "contact",
    index: 7,
    label: "Contact & Assistant",
    subtitle: "Direct conversion grids, client connection, and direct communication hubs.",
  },
];

/* ─────────────────────────────────────────────
   Right-Side Section Dot Indicator
   ───────────────────────────────────────────── */

function SectionIndicator() {
  const { activeIndex, setActiveIndex, activeTheme } = useThemeEngine();

  return (
    <div
      className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3.5 z-40 hidden md:flex"
      aria-label="Section navigation"
    >
      {SECTIONS.map((section) => (
        <button
          key={section.id}
          onClick={() => {
            setActiveIndex(section.index);
            const el = document.getElementById(section.id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="group relative flex items-center justify-end"
          aria-label={`Navigate to ${section.label}`}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          {/* Tooltip on hover */}
          <span
            className="absolute right-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] tracking-widest uppercase whitespace-nowrap pr-1 select-none font-medium"
            style={{
              color: "rgba(250, 250, 250, 0.45)",
              fontFamily: "var(--font-body)",
            }}
          >
            {section.label}
          </span>

          {/* Dot */}
          <motion.div
            animate={{
              width: activeIndex === section.index ? 24 : 8,
              backgroundColor:
                activeIndex === section.index
                  ? activeTheme.accentColor
                  : "rgba(250, 250, 250, 0.2)",
              boxShadow:
                activeIndex === section.index
                  ? activeTheme.glowShadow
                  : "none",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-2 rounded-full"
          />
        </button>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Section 0: Home / Hero (No Background Video)
   ───────────────────────────────────────────── */

function HeroContent() {
  const { activeTheme } = useThemeEngine();
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Compute 3D rotations based on mouse coordinates (with auto-floating fallback for mobile)
  const rotateX = mousePos.y * -18;
  const rotateY = mousePos.x * 18;

  // Floating orbs — bigger, glowing, 3D-like
  const orbs = Array.from({ length: 8 });

  return (
    <div
      className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-20 lg:px-32 w-full max-w-6xl text-left select-none overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* ── 3D Floating Glowing Orbs ── */}
      {orbs.map((_, idx) => {
        const size = 30 + Math.random() * 80;
        return (
          <motion.div
            key={idx}
            className="absolute rounded-full pointer-events-none blur-2xl"
            style={{
              width: size,
              height: size,
              background: `radial-gradient(circle, ${idx % 2 === 0 ? "rgba(0,255,102,0.25)" : "rgba(0,240,255,0.2)"} 0%, transparent 70%)`,
              top: `${15 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 70}%`,
            }}
            animate={{
              y: [0, -(30 + Math.random() * 40), 0],
              x: [0, (Math.random() - 0.5) * 30, 0],
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* ── Overline Brand Tag ── */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="flex items-center gap-3 mb-6"
      >
        <span
          className="inline-block w-12 h-[2px] rounded-full"
          style={{ background: `linear-gradient(to right, ${activeTheme.gradientFrom}, ${activeTheme.gradientTo})` }}
        />
        <span
          className="text-[11px] tracking-[0.4em] uppercase font-bold bg-gradient-to-r bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(to right, ${activeTheme.gradientFrom}, rgba(255,255,255,0.7))`,
            fontFamily: "var(--font-mono)",
          }}
        >
          Creative Portfolio — 2024
        </span>
      </motion.div>

      {/* ── 3D Perspective Main Headline ── */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, rotateX: 25, y: 60 }}
        animate={{ 
          opacity: 1, 
          rotateX: rotateX, 
          rotateY: rotateY, 
          y: 0 
        }}
        transition={{ 
          type: "spring", 
          stiffness: 85, 
          damping: 20, 
          mass: 0.5 
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <h1
          className="text-[clamp(2.8rem,8vw,7rem)] font-black leading-[0.88] tracking-[-0.03em] text-transparent bg-clip-text"
          style={{
            fontFamily: "var(--font-heading)",
            backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0.55) 100%)",
            filter: "drop-shadow(0 6px 25px rgba(0,0,0,0.8))",
            transform: "translateZ(50px)",
          }}
        >
          MUHAMMAD
        </h1>
        <h1
          className="text-[clamp(2.8rem,8vw,7rem)] font-black leading-[0.88] tracking-[-0.03em] text-transparent bg-clip-text"
          style={{
            fontFamily: "var(--font-heading)",
            backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0.55) 100%)",
            filter: "drop-shadow(0 6px 25px rgba(0,0,0,0.8))",
            transform: "translateZ(50px)",
          }}
        >
          SALMAN
        </h1>
      </motion.div>

      {/* ── Gradient "(SHANI)" with 3D Pop ── */}
      <motion.h2
        initial={{ opacity: 0, rotateX: 20, scale: 0.85 }}
        animate={{ 
          opacity: 1, 
          rotateX: rotateX * 0.7, 
          rotateY: rotateY * 0.7, 
          scale: 1 
        }}
        transition={{ 
          type: "spring", 
          stiffness: 85, 
          damping: 20, 
          mass: 0.6 
        }}
        className="text-[clamp(2.2rem,6vw,5.5rem)] font-black leading-[0.9] tracking-[-0.02em] mb-6 bg-clip-text text-transparent"
        style={{
          fontFamily: "var(--font-heading)",
          backgroundImage: `linear-gradient(135deg, ${activeTheme.gradientFrom} 0%, #FFFFFF 35%, ${activeTheme.gradientTo} 70%, #A855F7 100%)`,
          filter: `drop-shadow(0 0 40px ${activeTheme.glowColor}) drop-shadow(0 4px 20px rgba(0,0,0,0.8))`,
          transformStyle: "preserve-3d",
          transform: "translateZ(30px)",
        }}
      >
        (SHANI)
      </motion.h2>

      {/* ── Animated Subtitle with Gradient Line ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="flex items-center gap-4 mb-6"
      >
        <div
          className="h-[1px] w-16"
          style={{ background: `linear-gradient(to right, ${activeTheme.gradientFrom}, transparent)` }}
        />
        <h3
          className="text-sm md:text-base tracking-[0.25em] font-bold uppercase bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0.5))",
            fontFamily: "var(--font-mono)",
          }}
        >
          Creative Digital Specialist
        </h3>
      </motion.div>

      {/* ── Tagline ── */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="max-w-lg text-sm md:text-lg leading-relaxed font-medium mb-10"
        style={{
          fontFamily: "var(--font-body)",
          color: "rgba(255,255,255,0.6)",
          textShadow: "0 2px 12px rgba(0,0,0,0.7)",
        }}
      >
        Crafting High-End Immersive Experiences For Modern Brands — 
        Design, Video, Web, & Marketing.
      </motion.p>

      {/* ── Dual CTA Buttons ── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.7 }}
        className="flex flex-wrap items-center gap-4 mb-12"
      >
        <a
          href="#graphic-design"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 text-xs font-black tracking-widest uppercase rounded-full transition-all duration-300 hover:scale-105 hover:brightness-110"
          style={{
            background: `linear-gradient(135deg, ${activeTheme.gradientFrom}, ${activeTheme.gradientTo})`,
            color: "#09090B",
            fontFamily: "var(--font-body)",
            boxShadow: `0 0 30px ${activeTheme.glowColor}, 0 4px 15px rgba(0,0,0,0.4)`,
          }}
        >
          View Services
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold tracking-widest uppercase rounded-full border transition-all duration-300 hover:scale-105"
          style={{
            borderColor: "rgba(255,255,255,0.15)",
            color: "rgba(255,255,255,0.8)",
            fontFamily: "var(--font-body)",
            backdropFilter: "blur(8px)",
            background: "rgba(255,255,255,0.05)",
          }}
        >
          Get in Touch
        </a>
      </motion.div>

      {/* ── Premium Metrics Stats Bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0, duration: 0.7 }}
        className="flex flex-wrap items-center gap-8 md:gap-14 border-t border-white/10 pt-8 w-full"
      >
        {[
          { value: "4+", label: "Years Experience" },
          { value: "50+", label: "Projects Delivered" },
          { value: "100%", label: "Client Satisfaction" },
        ].map((stat, idx) => (
          <div key={idx} className="flex flex-col">
            <span
              className="text-2xl md:text-3xl font-black bg-clip-text text-transparent leading-none mb-1"
              style={{
                fontFamily: "var(--font-heading)",
                backgroundImage: `linear-gradient(135deg, ${activeTheme.gradientFrom}, #FFFFFF)`,
              }}
            >
              {stat.value}
            </span>
            <span
              className="text-[9px] md:text-[10px] tracking-[0.25em] uppercase font-bold"
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-mono)" }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function PageInner() {
  const { activeIndex, setActiveIndex } = useThemeEngine();
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  /* IntersectionObserver to auto-update active index on scroll */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((el, index) => {
      if (!el) return;

      const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index);
            }
          });
        },
        { threshold: isMobile ? 0.3 : 0.5 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [setActiveIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <BackgroundVideo />
      <CustomCursor />
      <Navbar />
      <SectionIndicator />

      {/* ── Scroll-Snap Page Container (Buttery-Smooth Native Snapping) ── */}
      <main className="relative z-10 h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
        {SECTIONS.map((section) => (
          <section
            key={section.id}
            id={section.id}
            ref={(el) => {
              sectionRefs.current[section.index] = el;
            }}
            className="relative h-screen w-full snap-start snap-always flex items-center overflow-hidden"
          >
            {section.index === 0 ? (
              <HeroContent />
            ) : section.index === 1 ? (
              <ServiceSection
                index={1}
                label="Graphic Design & Branding"
                headline="Visual Identities That Command Attention"
                description="High-end corporate branding, luxury watch boutique layouts, and modern vectors designed for global target conversions."
                specs={["Swiss Luxury Layouts", "3D Brand Assets", "High-Contrast Typography"]}
                metrics="Design Systems: 100% Custom"
                stats="50+ Brands"
                statsLabel="Visual Identities Created"
                accentColor="#00FF66"
                gradientFrom="#00FF66"
                gradientTo="#00FFCC"
                glowColor="rgba(0, 255, 102, 0.2)"
                glowShadow="0 0 60px 15px rgba(0, 255, 102, 0.12)"
              />
            ) : section.index === 2 ? (
              <ServiceSection
                index={2}
                label="Video Production & Editing"
                headline="Cinematic Storytelling Sequence"
                description="Tactical post-production suite including cinematic grading, Ray-Traced 3D logo overlays, and immersive soundscapes."
                specs={["60.00 FPS Telemetry", "Emerald Rec.709 Space", "4D Octane Engine Lighting"]}
                metrics="Render Engine: Octane 4D"
                stats="100+ Commercials"
                statsLabel="Edited & Delivered"
                accentColor="#E4E4E7"
                gradientFrom="#E4E4E7"
                gradientTo="#A1A1AA"
                glowColor="rgba(228, 228, 231, 0.15)"
                glowShadow="0 0 60px 15px rgba(228, 228, 231, 0.08)"
              />
            ) : section.index === 3 ? (
              <ServiceSection
                index={3}
                label="Web Development"
                headline="Robust High-Performance Systems"
                description="Pixel-perfect Next.js frameworks and strict type-safe TypeScript architectures engineered for maximum speed."
                specs={["Next.js & Server Components", "Tailwind CSS Layouts", "GSAP Scroll Timelines"]}
                metrics="Deployment Speed: 100/100 LCP"
                stats="30+ Apps"
                statsLabel="High-Performance Workspaces"
                accentColor="#00F0FF"
                gradientFrom="#00F0FF"
                gradientTo="#0070F3"
                glowColor="rgba(0, 240, 255, 0.2)"
                glowShadow="0 0 60px 15px rgba(0, 240, 255, 0.12)"
              />
            ) : section.index === 4 ? (
              <ServiceSection
                index={4}
                label="Meta Ads & FB Management"
                headline="Data-Driven Marketing Funnels"
                description="Advanced ROAS optimization matrices, international ad scale strategies, and high-intent targeting setups."
                specs={["4-5 Years Meta Scale", "USA/UK Demographics", "ROAS Optimization"]}
                metrics="Performance Yield: +380% ROAS"
                stats="$150k+ Spend"
                statsLabel="Managed Ad Budgets"
                accentColor="#F59E0B"
                gradientFrom="#F59E0B"
                gradientTo="#EF4444"
                glowColor="rgba(245, 158, 11, 0.2)"
                glowShadow="0 0 60px 15px rgba(245, 158, 11, 0.12)"
              />
            ) : section.index === 5 ? (
              <WebDevSection />
            ) : section.index === 6 ? (
              <AboutSection />
            ) : (
              <ContactSection />
            )}
          </section>
        ))}
      </main>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Page Main Export
   ───────────────────────────────────────────── */

export default function Home() {
  return (
    <ThemeContextProvider>
      <PageInner />
    </ThemeContextProvider>
  );
}
