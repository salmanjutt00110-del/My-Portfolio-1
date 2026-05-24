"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeEngine } from "@/context/ThemeContext";

/* ─────────────────────────────────────────────
   Navigation Links
   ───────────────────────────────────────────── */

interface NavLink {
  label: string;
  href: string;
  sectionIndex: number;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home", sectionIndex: 0 },
  { label: "Services", href: "#services", sectionIndex: 1 },
  { label: "Work", href: "#work", sectionIndex: 2 },
  { label: "About", href: "#about", sectionIndex: 3 },
  { label: "Contact", href: "#contact", sectionIndex: 4 },
];

/* ─────────────────────────────────────────────
   Animation Variants
   ───────────────────────────────────────────── */

const mobileMenuVariants = {
  closed: {
    x: "100%",
    transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] as const },
  },
  open: {
    x: "0%",
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] as const },
  },
} as const;

const linkStagger = {
  closed: { opacity: 0, x: 40 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.15 + i * 0.07,
      duration: 0.4,
      ease: [0.25, 1, 0.5, 1] as const,
    },
  }),
} satisfies Record<string, unknown>;

/* ─────────────────────────────────────────────
   Navbar Component
   ───────────────────────────────────────────── */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const { activeTheme, activeIndex, setActiveIndex } = useThemeEngine();

  const handleNavClick = (link: NavLink) => {
    setActiveIndex(link.sectionIndex);
    setMobileOpen(false);

    /* Smooth scroll to the target section */
    const el = document.getElementById(link.href.replace("#", ""));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ── Fixed Glassmorphic Header Bar ── */}
      <header
        className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 md:px-10 h-[72px]"
        style={{
          zIndex: 50,
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(9, 9, 11, 0.4)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* ── Logo ── */}
        <a
          href="#home"
          onClick={() => setActiveIndex(0)}
          className="relative group"
        >
          <span
            className="text-[22px] font-bold tracking-[0.3em] uppercase"
            style={{ color: "#FAFAFA", fontFamily: "var(--font-heading)" }}
          >
            SHANI
          </span>
          {/* Subtle accent underline on hover */}
          <motion.span
            className="absolute -bottom-1 left-0 h-[2px] rounded-full"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ backgroundColor: activeTheme.accentColor }}
          />
        </a>

        {/* ── Desktop Navigation Links ── */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeIndex === link.sectionIndex;
            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className="relative group py-2 transition-colors duration-300"
                style={{
                  color: isActive
                    ? activeTheme.accentColor
                    : "rgba(250, 250, 250, 0.6)",
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {link.label}
                {/* Animated underline indicator */}
                <motion.span
                  className="absolute -bottom-0.5 left-0 h-[1.5px] rounded-full"
                  animate={{ width: isActive ? "100%" : "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ backgroundColor: activeTheme.accentColor }}
                />
              </button>
            );
          })}
        </nav>

        {/* ── Mobile Hamburger Icon ── */}
        <button
          className="md:hidden flex flex-col items-center justify-center gap-[5px] w-10 h-10"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <motion.span
            className="block w-6 h-[1.5px] rounded-full"
            animate={{
              rotate: mobileOpen ? 45 : 0,
              y: mobileOpen ? 6.5 : 0,
              backgroundColor: activeTheme.accentColor,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-[1.5px] rounded-full"
            animate={{
              opacity: mobileOpen ? 0 : 1,
              backgroundColor: activeTheme.accentColor,
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-[1.5px] rounded-full"
            animate={{
              rotate: mobileOpen ? -45 : 0,
              y: mobileOpen ? -6.5 : 0,
              backgroundColor: activeTheme.accentColor,
            }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </header>

      {/* ── Mobile Slide-Out Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              className="fixed inset-0 md:hidden"
              style={{ zIndex: 40, backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer panel */}
            <motion.nav
              className="fixed top-0 right-0 bottom-0 w-[280px] md:hidden flex flex-col justify-center px-10"
              style={{
                zIndex: 45,
                backdropFilter: "blur(24px) saturate(180%)",
                WebkitBackdropFilter: "blur(24px) saturate(180%)",
                backgroundColor: "rgba(9, 9, 11, 0.85)",
                borderLeft: "1px solid rgba(255, 255, 255, 0.05)",
              }}
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col gap-6">
                {NAV_LINKS.map((link, i) => {
                  const isActive = activeIndex === link.sectionIndex;
                  return (
                    <motion.button
                      key={link.label}
                      custom={i}
                      variants={linkStagger}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      onClick={() => handleNavClick(link)}
                      className="text-left"
                      style={{
                        color: isActive
                          ? activeTheme.accentColor
                          : "rgba(250, 250, 250, 0.7)",
                        fontFamily: "var(--font-heading)",
                        fontSize: "28px",
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      {link.label}
                    </motion.button>
                  );
                })}
              </div>

              {/* Contact info at bottom */}
              <motion.div
                className="absolute bottom-10 left-10 right-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <div
                  className="text-xs tracking-wider uppercase mb-2"
                  style={{
                    color: "rgba(250, 250, 250, 0.35)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Get in Touch
                </div>
                <a
                  href="mailto:contact@amirads.pro"
                  className="block text-sm mb-1 transition-colors duration-300 hover:opacity-80"
                  style={{
                    color: activeTheme.accentColor,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  contact@amirads.pro
                </a>
                <a
                  href="tel:+923071952648"
                  className="block text-sm transition-colors duration-300"
                  style={{
                    color: "rgba(250, 250, 250, 0.5)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  +92 307 1952648
                </a>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
