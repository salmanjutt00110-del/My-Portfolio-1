"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useThemeEngine } from "@/context/ThemeContext";

/* ─────────────────────────────────────────────
   Video Asset Configuration Mapping
   ───────────────────────────────────────────── */

interface VideoSource {
  src: string;
  id: string;
}

const ALL_VIDEOS: VideoSource[] = [
  { id: "profile", src: "/videos/profile.mp4" },
  { id: "grapic", src: "/videos/grapic.mp4" },
  { id: "videoEditing", src: "/videos/video editing.mp4" },
  { id: "web", src: "/videos/web.mp4" },
  { id: "fb", src: "/videos/fb.mp4" },
];

/* ─────────────────────────────────────────────
   Single Background Video Component
   ───────────────────────────────────────────── */

interface SingleVideoProps {
  video: VideoSource;
  isActive: boolean;
  isVisibleGlobal: boolean;
}

function SingleVideo({ video, isActive, isVisibleGlobal }: SingleVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (isActive && isVisibleGlobal) {
      videoEl.play().catch(() => {
        /* Autoplay block fallback */
      });
    }
  }, [isActive, isVisibleGlobal]);

  return (
    <motion.div
      className="absolute inset-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive && isVisibleGlobal ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ zIndex: isActive && isVisibleGlobal ? 1 : 0 }}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        style={{ pointerEvents: "none" }}
      >
        <source src={video.src} type="video/mp4" />
      </video>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Background Video Engine Component
   ───────────────────────────────────────────── */

export default function BackgroundVideo() {
  const { activeIndex, activeServiceIndex } = useThemeEngine();

  /* Home Section 0 must leave a pure elegant black void canvas */
  const isVisibleGlobal = activeIndex > 0;

  /* Determine which video id should be active */
  const activeVideoId = React.useMemo(() => {
    if (!isVisibleGlobal) return "";

    if (activeIndex === 1) {
      // Services Sub-Videos
      if (activeServiceIndex === 0) return "grapic";
      if (activeServiceIndex === 1) return "videoEditing";
      if (activeServiceIndex === 2) return "web";
      return "fb";
    }

    if (activeIndex === 2) return "profile"; // About Me
    if (activeIndex === 3) return "web";     // My Work
    if (activeIndex === 4) return "fb";      // Contact

    return "";
  }, [activeIndex, activeServiceIndex, isVisibleGlobal]);

  return (
    <div
      className="fixed inset-0 w-full h-full overflow-hidden bg-[#09090b]"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* ── Video Layers ── */}
      {ALL_VIDEOS.map((video) => (
        <SingleVideo
          key={video.id}
          video={video}
          isActive={activeVideoId === video.id}
          isVisibleGlobal={isVisibleGlobal}
        />
      ))}

      {/* ── Premium Dot Matrix Grid Overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 6,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* ── Cinematic Radial Vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 7,
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      {/* ── Bottom Edge Gradient Fade ── */}
      <div
        className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
        style={{
          zIndex: 8,
          background:
            "linear-gradient(to top, rgba(9,9,11,1) 0%, transparent 100%)",
        }}
      />

      {/* ── Top Edge Subtle Gradient ── */}
      <div
        className="absolute inset-x-0 top-0 h-32 pointer-events-none"
        style={{
          zIndex: 8,
          background:
            "linear-gradient(to bottom, rgba(9,9,11,0.65) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
