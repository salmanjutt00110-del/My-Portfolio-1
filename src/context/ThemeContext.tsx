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
  /** Custom gradient start color */
  gradientFrom: string;
  /** Custom gradient end color */
  gradientTo: string;
}

export interface ThemeEngineState {
  activeIndex: number;
  activeTheme: SectionTheme;
  sections: SectionTheme[];
  setActiveIndex: (index: number) => void;
}

/* ─────────────────────────────────────────────
   Theme Map – 8 Sequential Sections
   ───────────────────────────────────────────── */

const SECTION_THEMES: SectionTheme[] = [
  {
    title: "Home",
    accentColor: "#00FF66",
    glowColor: "rgba(0, 255, 102, 0.15)",
    glowShadow: "0 0 60px 15px rgba(0, 255, 102, 0.08)",
    bgColor: "#09090B",
    videoPaths: ["/videos/profile.mp4"],
    gradientFrom: "#00FF66",
    gradientTo: "#00F0FF",
  },
  {
    title: "Graphic Design & Branding",
    accentColor: "#00FF66",
    glowColor: "rgba(0, 255, 102, 0.2)",
    glowShadow: "0 0 60px 15px rgba(0, 255, 102, 0.12)",
    bgColor: "#042F1A",
    videoPaths: ["/videos/grapic.mp4"],
    gradientFrom: "#00FF66",
    gradientTo: "#00FFCC",
  },
  {
    title: "Video Production & Editing",
    accentColor: "#E4E4E7",
    glowColor: "rgba(228, 228, 231, 0.15)",
    glowShadow: "0 0 60px 15px rgba(228, 228, 231, 0.08)",
    bgColor: "#18181B",
    videoPaths: ["/videos/video-editing.mp4"],
    gradientFrom: "#E4E4E7",
    gradientTo: "#A1A1AA",
  },
  {
    title: "Web Development",
    accentColor: "#00F0FF",
    glowColor: "rgba(0, 240, 255, 0.2)",
    glowShadow: "0 0 60px 15px rgba(0, 240, 255, 0.12)",
    bgColor: "#0C0C0E",
    videoPaths: ["/videos/web.mp4"],
    gradientFrom: "#00F0FF",
    gradientTo: "#0070F3",
  },
  {
    title: "Meta Ads & FB Management",
    accentColor: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.2)",
    glowShadow: "0 0 60px 15px rgba(245, 158, 11, 0.12)",
    bgColor: "#0F0F11",
    videoPaths: ["/videos/fb.mp4"],
    gradientFrom: "#F59E0B",
    gradientTo: "#EF4444",
  },
  {
    title: "My Work",
    accentColor: "#00F0FF",
    glowColor: "rgba(0, 240, 255, 0.2)",
    glowShadow: "0 0 60px 15px rgba(0, 240, 255, 0.12)",
    bgColor: "#0C0C0E",
    videoPaths: ["/videos/web.mp4"],
    gradientFrom: "#00F0FF",
    gradientTo: "#0070F3",
  },
  {
    title: "About Me",
    accentColor: "#E4E4E7",
    glowColor: "rgba(228, 228, 231, 0.15)",
    glowShadow: "0 0 60px 15px rgba(228, 228, 231, 0.08)",
    bgColor: "#18181B",
    videoPaths: ["/videos/profile.mp4"],
    gradientFrom: "#E4E4E7",
    gradientTo: "#A1A1AA",
  },
  {
    title: "Contact & Assistant",
    accentColor: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.2)",
    glowShadow: "0 0 60px 15px rgba(245, 158, 11, 0.12)",
    bgColor: "#0F0F11",
    videoPaths: ["/videos/fb.mp4"],
    gradientFrom: "#F59E0B",
    gradientTo: "#EF4444",
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

  const currentTheme = useMemo<SectionTheme>(() => {
    return SECTION_THEMES[activeIndex] || SECTION_THEMES[0];
  }, [activeIndex]);

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
    }),
    [activeIndex, currentTheme]
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
