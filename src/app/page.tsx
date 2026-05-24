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

  // Name animation letters mapping
  const nameText = "MUHAMMAD SALMAN";
  const nameLetters = Array.from(nameText);

  // Floating particles helper
  const particles = Array.from({ length: 15 });

  return (
    <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-20 lg:px-32 w-full max-w-5xl text-left select-none overflow-hidden">
      {/* Floating particles background */}
      {particles.map((_, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full pointer-events-none opacity-20"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            backgroundColor: activeTheme.accentColor,
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            y: [0, Math.random() * -50 - 20, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Overline brand tag */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-5"
      >
        <span
          className="inline-block w-8 h-[1px]"
          style={{ backgroundColor: activeTheme.accentColor }}
        />
        <span
          className="text-[10px] tracking-[0.35em] uppercase font-bold text-zinc-500 font-mono"
        >
          Creative Portfolio
        </span>
      </motion.div>

      {/* Main Headline with letter stagger */}
      <div className="mb-4">
        <h1
          className="text-[clamp(2.2rem,6.5vw,5.5rem)] font-black leading-[0.92] tracking-tight text-white mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {nameLetters.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.05 + 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
              style={{ display: "inline-block", marginRight: char === " " ? "0.4em" : "0" }}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: nameLetters.length * 0.05 + 0.3, duration: 0.6 }}
          className="text-[clamp(1.8rem,5.5vw,4.5rem)] font-black leading-[0.95] tracking-tight bg-gradient-to-r bg-clip-text text-transparent"
          style={{
            fontFamily: "var(--font-heading)",
            backgroundImage: `linear-gradient(135deg, ${activeTheme.gradientFrom} 0%, #FFFFFF 50%, ${activeTheme.gradientTo} 100%)`,
            textShadow: activeTheme.glowShadow,
          }}
        >
          (SHANI)
        </motion.h1>
      </div>

      {/* Typewriter-style Subtitle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mb-5"
      >
        <h2 className="text-xs md:text-sm tracking-[0.3em] font-extrabold uppercase font-mono text-zinc-400 overflow-hidden whitespace-nowrap border-r-2 border-white/80 animate-pulse">
          Creative Digital Specialist
        </h2>
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        viewport={{ once: true }}
        className="max-w-md text-sm md:text-base leading-relaxed text-zinc-500 mb-8 font-medium"
        style={{ fontFamily: "var(--font-body)" }}
      >
        Crafting High-End Immersive Experiences For Modern Brands.
      </motion.p>

      {/* CTA Trigger */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        viewport={{ once: true }}
        className="flex items-center gap-4"
      >
        <a
          href="#graphic-design"
          className="inline-flex items-center gap-2 px-7 py-3 text-xs font-bold tracking-widest uppercase rounded-full transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: activeTheme.accentColor,
            color: "#09090B",
            fontFamily: "var(--font-body)",
            boxShadow: activeTheme.glowShadow,
          }}
        >
          View Services
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.0"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </motion.div>

      {/* Minimalist Metrics Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.7 }}
        className="flex flex-wrap items-center gap-6 md:gap-12 mt-12 border-t border-white/5 pt-8 text-[10px] font-mono tracking-widest text-zinc-500 w-full"
      >
        <div>
          <span className="text-white font-bold block text-xs md:text-sm font-heading">4+ YEARS</span>
          EXPERIENCE
        </div>
        <div className="w-[1px] h-6 bg-white/5 hidden md:block" />
        <div>
          <span className="text-white font-bold block text-xs md:text-sm font-heading">50+ PROJECTS</span>
          COMPLETED
        </div>
        <div className="w-[1px] h-6 bg-white/5 hidden md:block" />
        <div>
          <span className="text-white font-bold block text-xs md:text-sm font-heading">100%</span>
          CLIENT SATISFACTION
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Page Inner (Context Consumer)
   ───────────────────────────────────────────── */

function PageInner() {
  const { activeIndex, setActiveIndex } = useThemeEngine();
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const touchStartY = useRef<number>(0);
  const swipeCooldown = useRef<boolean>(false);

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
        { threshold: isMobile ? 0.25 : 0.55 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [setActiveIndex]);

  /* Touch Swiping Handlers */
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (swipeCooldown.current) return;

    const touchEndY = e.changedTouches[0].clientY;
    const diffY = touchStartY.current - touchEndY;

    if (Math.abs(diffY) > 50) {
      let targetIndex = activeIndex;

      if (diffY > 0) {
        // Swipe Up (Scroll Down)
        targetIndex = Math.min(activeIndex + 1, SECTIONS.length - 1);
      } else {
        // Swipe Down (Scroll Up)
        targetIndex = Math.max(activeIndex - 1, 0);
      }

      if (targetIndex !== activeIndex) {
        swipeCooldown.current = true;
        setActiveIndex(targetIndex);

        const targetId = SECTIONS[targetIndex].id;
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }

        setTimeout(() => {
          swipeCooldown.current = false;
        }, 850);
      }
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-screen overflow-hidden"
    >
      <BackgroundVideo />
      <CustomCursor />
      <Navbar />
      <SectionIndicator />

      {/* ── Scroll-Snap Page Container ── */}
      <main className="relative z-10 h-screen overflow-y-auto snap-none lg:snap-y lg:snap-mandatory scroll-smooth">
        {SECTIONS.map((section) => (
          <section
            key={section.id}
            id={section.id}
            ref={(el) => {
              sectionRefs.current[section.index] = el;
            }}
            className="relative h-screen w-full lg:snap-start lg:snap-always flex items-center overflow-hidden"
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
