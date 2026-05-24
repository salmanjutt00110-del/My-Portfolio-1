"use client";

import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  type ReactNode,
} from "react";

/* ─────────────────────────────────────────────
   Type Definitions
   ───────────────────────────────────────────── */

export interface SectionTheme {
  /** Display title for the section */
  title: string;
  /** Primary accent hex color */
  accentColor: string;
  /** Translucent RGBA glow for radial effects */
  glowColor: string;
  /** CSS box-shadow string for ambient glow halos */
  glowShadow: string;
  /** Background dominant hex */
  bgColor: string;
  /** Array of video source paths (first = primary, rest = fallbacks) */
  videoPaths: string[];
}

export interface ThemeEngineState {
  activeIndex: number;
  activeTheme: SectionTheme;
  sections: SectionTheme[];
  setActiveIndex: (index: number) => void;
  /* Sub-index for dynamic services within Section 1 */
  activeServiceIndex: number;
  setActiveServiceIndex: (index: number) => void;
}

/* ─────────────────────────────────────────────
   Theme Map – 5 Main Sequential Sections
   ───────────────────────────────────────────── */

const SECTION_THEMES: SectionTheme[] = [
  {
    title: "Home",
    accentColor: "#FAFAFA",
    glowColor: "rgba(250, 250, 250, 0.15)",
    glowShadow: "0 0 60px 15px rgba(250, 250, 250, 0.08)",
    bgColor: "#09090B",
    videoPaths: [], // Void canvas - no video background
  },
  {
    title: "Total Services Showcase",
    accentColor: "#00FF66", // Defaults to Graphic Design emerald green
    glowColor: "rgba(0, 255, 102, 0.2)",
    glowShadow: "0 0 60px 15px rgba(0, 255, 102, 0.12)",
    bgColor: "#042F1A",
    videoPaths: [
      "/videos/grapic.mp4",
      "/videos/video editing.mp4",
      "/videos/web.mp4",
      "/videos/fb.mp4",
    ],
  },
  {
    title: "About Me",
    accentColor: "#E4E4E7",
    glowColor: "rgba(228, 228, 231, 0.15)",
    glowShadow: "0 0 60px 15px rgba(228, 228, 231, 0.08)",
    bgColor: "#18181B",
    videoPaths: ["/videos/profile.mp4"],
  },
  {
    title: "My Work",
    accentColor: "#00F0FF",
    glowColor: "rgba(0, 240, 255, 0.2)",
    glowShadow: "0 0 60px 15px rgba(0, 240, 255, 0.12)",
    bgColor: "#0C0C0E",
    videoPaths: ["/videos/web.mp4"],
  },
  {
    title: "Contact & Assistant",
    accentColor: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.2)",
    glowShadow: "0 0 60px 15px rgba(245, 158, 11, 0.12)",
    bgColor: "#0F0F11",
    videoPaths: [
      "/videos/fb.mp4",
      "/videos/meta ads.mp4",
      "/videos/page man.mp4",
    ],
  },
];

/* ─────────────────────────────────────────────
   Context & Provider
   ───────────────────────────────────────────── */

const ThemeContext = createContext<ThemeEngineState | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeContextProvider({ children }: ThemeProviderProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeServiceIndex, setActiveServiceIndex] = useState<number>(0);

  /* Dynamically override Section 1 settings based on activeServiceIndex */
  const currentTheme = useMemo<SectionTheme>(() => {
    const base = SECTION_THEMES[activeIndex];
    if (activeIndex === 1) {
      if (activeServiceIndex === 0) {
        return {
          ...base,
          accentColor: "#00FF66",
          glowColor: "rgba(0, 255, 102, 0.2)",
          glowShadow: "0 0 60px 15px rgba(0, 255, 102, 0.12)",
        };
      } else if (activeServiceIndex === 1) {
        return {
          ...base,
          accentColor: "#E4E4E7",
          glowColor: "rgba(228, 228, 231, 0.15)",
          glowShadow: "0 0 60px 15px rgba(228, 228, 231, 0.08)",
        };
      } else if (activeServiceIndex === 2) {
        return {
          ...base,
          accentColor: "#00F0FF",
          glowColor: "rgba(0, 240, 255, 0.2)",
          glowShadow: "0 0 60px 15px rgba(0, 240, 255, 0.12)",
        };
      } else {
        return {
          ...base,
          accentColor: "#F59E0B",
          glowColor: "rgba(245, 158, 11, 0.2)",
          glowShadow: "0 0 60px 15px rgba(245, 158, 11, 0.12)",
        };
      }
    }
    return base;
  }, [activeIndex, activeServiceIndex]);

  const value = useMemo<ThemeEngineState>(
    () => ({
      activeIndex,
      activeTheme: currentTheme,
      sections: SECTION_THEMES,
      setActiveIndex: (index: number) => {
        if (index >= 0 && index < SECTION_THEMES.length) {
          setActiveIndex(index);
        }
      },
      activeServiceIndex,
      setActiveServiceIndex: (index: number) => {
        if (index >= 0 && index < 4) {
          setActiveServiceIndex(index);
        }
      },
    }),
    [activeIndex, currentTheme, activeServiceIndex]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

/* ─────────────────────────────────────────────
   Custom Hook
   ───────────────────────────────────────────── */

export function useThemeEngine(): ThemeEngineState {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeEngine must be used within a <ThemeContextProvider />"
    );
  }
  return context;
}
