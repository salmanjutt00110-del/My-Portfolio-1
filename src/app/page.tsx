"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ThemeContextProvider, useThemeEngine } from "@/context/ThemeContext";
import BackgroundVideo from "@/components/BackgroundVideo";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import GraphicDesignSection from "@/components/GraphicDesignSection";
import VideoProductionSection from "@/components/VideoProductionSection";
import WebDevSection from "@/components/WebDevSection";
import AboutContactSection from "@/components/AboutContactSection";

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
    id: "services",
    index: 1,
    label: "Total Services",
    subtitle: "Business Graphic Designing, Video Production, Web Dev, and Meta Ads Management.",
  },
  {
    id: "about",
    index: 2,
    label: "About Me",
    subtitle: "Official professional biography and design frameworks.",
  },
  {
    id: "work",
    index: 3,
    label: "My Work",
    subtitle: "Interactive case studies and operational repository architectures.",
  },
  {
    id: "contact",
    index: 4,
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

  return (
    <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-20 lg:px-32 w-full max-w-5xl text-left select-none">
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

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-[clamp(2.0rem,6.5vw,5.0rem)] font-black leading-[0.95] tracking-tight mb-4 text-white"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        MUHAMMAD SALMAN
        <br />
        <span style={{ color: activeTheme.accentColor }} className="transition-colors duration-500">
          (SHANI)
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        viewport={{ once: true }}
        className="text-xs md:text-sm tracking-[0.3em] font-extrabold uppercase font-mono mb-4 text-zinc-400"
      >
        CREATIVE DIGITAL SPECIALIST
      </motion.h2>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
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
        transition={{ duration: 0.6, delay: 0.55 }}
        viewport={{ once: true }}
        className="flex items-center gap-4"
      >
        <a
          href="#services"
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

      {/* Minimalist "Scroll Down to Explore" mouse animation */}
      <motion.div
        className="absolute bottom-10 left-8 md:left-20 lg:left-32 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        <div
          className="w-5 h-8 rounded-full border-2 border-white/10 flex justify-center py-1.5"
          style={{ width: "22px", height: "36px" }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-white"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span
          className="text-[9px] tracking-[0.25em] text-zinc-500 uppercase font-mono"
        >
          Scroll Down to Explore
        </span>
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

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index);
            }
          });
        },
        { threshold: 0.55 }
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
              <GraphicDesignSection />
            ) : section.index === 2 ? (
              <VideoProductionSection />
            ) : section.index === 3 ? (
              <WebDevSection />
            ) : (
              <AboutContactSection />
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
