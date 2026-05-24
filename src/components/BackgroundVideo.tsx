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
  { id: "videoEditing", src: "/videos/video-editing.mp4" },
  { id: "web", src: "/videos/web.mp4" },
  { id: "fb", src: "/videos/fb.mp4" },
];

/* ─────────────────────────────────────────────
   Single Background Video Component
   ───────────────────────────────────────────── */

interface SingleVideoProps {
  video: VideoSource;
  isActive: boolean;
}

function SingleVideo({ video, isActive }: SingleVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (isActive) {
      // Ensure the video plays and loops smoothly
      videoEl.play().catch(() => {
        /* Autoplay block fallback */
      });
    } else {
      // Pause inactive videos to save CPU/GPU resource
      videoEl.pause();
    }
  }, [isActive]);

  return (
    <motion.div
      className="absolute inset-0 w-full h-full transform-gpu backface-visibility-hidden translate-z-0 will-change-[opacity,transform]"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 1.0, ease: "easeInOut" }}
      style={{ zIndex: isActive ? 1 : 0 }}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted={true}
        loop={true}
        playsInline={true}
        autoPlay={true}
        controls={false}
        preload="auto"
        style={{
          pointerEvents: "none",
          filter: "brightness(0.75) contrast(1.20) saturate(1.15)",
          transform: "translate3d(0, 0, 0)",
          WebkitTransform: "translate3d(0, 0, 0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          willChange: "opacity, transform"
        }}
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
  const { activeIndex } = useThemeEngine();

  /* Map each section index directly to its video */
  const activeVideoId = React.useMemo(() => {
    switch (activeIndex) {
      case 0:
        return "profile"; // HOME (Hero)
      case 1:
        return "grapic"; // Graphic Design & Branding
      case 2:
        return "videoEditing"; // Video Production & Editing
      case 3:
        return "web"; // Web Development
      case 4:
        return "fb"; // Meta Ads & FB Management
      case 5:
        return "web"; // My Work
      case 6:
        return "profile"; // About Me
      case 7:
        return "fb"; // Contact & Assistant
      default:
        return "profile";
    }
  }, [activeIndex]);

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
        />
      ))}

      {/* ── Dark Overlay for Hero and content readability ── */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700"
        style={{
          zIndex: 5,
          backgroundColor: activeIndex === 0 ? "rgba(9, 9, 11, 0.75)" : "rgba(9, 9, 11, 0.65)",
        }}
      />

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
            "radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.92) 100%)",
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
