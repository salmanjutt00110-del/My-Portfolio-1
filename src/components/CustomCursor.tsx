"use client";

import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { useThemeEngine } from "@/context/ThemeContext";

/* ─────────────────────────────────────────────
   Spring Configuration
   ───────────────────────────────────────────── */

const SPRING_CONFIG = { stiffness: 150, damping: 20, mass: 0.5 };

/* ─────────────────────────────────────────────
   Custom Cursor Component
   ───────────────────────────────────────────── */

export default function CustomCursor() {
  const { activeTheme } = useThemeEngine();
  const [isTouch, setIsTouch] = useState<boolean>(true); // Default hidden until detected
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [cursorText, setCursorText] = useState<string>("");

  /* Raw mouse position values */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  /* Spring-lagged positions for outer aura */
  const springX = useSpring(mouseX, SPRING_CONFIG);
  const springY = useSpring(mouseY, SPRING_CONFIG);

  /* Detect touch vs. pointer device */
  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    setIsTouch(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  /* Track mouse movement and element hover attributes */
  useEffect(() => {
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      /* Find if hovering over an element with custom cursor text */
      const target = e.target as HTMLElement | null;
      if (target) {
        const customTextEl = target.closest("[data-cursor-text]");
        if (customTextEl) {
          const text = customTextEl.getAttribute("data-cursor-text") || "";
          setCursorText(text);
        } else {
          setCursorText("");
        }
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    /* Show cursor once we start tracking */
    setIsVisible(true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isTouch, mouseX, mouseY]);

  /* Don't render anything on touch devices */
  if (isTouch) return null;

  const hasText = !!cursorText;

  return (
    <>
      {/* ── Inner Dot (precise position) ── */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          width: hasText ? 0 : 8,
          height: hasText ? 0 : 8,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "#FAFAFA",
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ opacity: { duration: 0.2 }, width: { duration: 0.25 }, height: { duration: 0.25 } }}
      />

      {/* ── Outer Aura Halo (spring-lagged) ── */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none flex items-center justify-center"
        animate={{
          width: hasText ? 90 : 44,
          height: hasText ? 90 : 44,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 9998,
          opacity: isVisible ? 1 : 0,
        }}
      >
        {/* Glowing border ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            borderColor: activeTheme.accentColor,
            boxShadow: activeTheme.glowShadow,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            border: "1.5px solid",
            borderColor: activeTheme.accentColor,
          }}
        />

        {/* Soft radial glow backdrop */}
        <motion.div
          className="absolute rounded-full"
          animate={{
            background: `radial-gradient(circle, ${activeTheme.glowColor} 0%, transparent 70%)`,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            inset: "-12px",
          }}
        />

        {/* Floating Typography Badge */}
        {hasText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-[9px] font-black tracking-widest text-center whitespace-nowrap z-10"
            style={{
              color: "#FAFAFA",
              fontFamily: "var(--font-body)",
            }}
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
