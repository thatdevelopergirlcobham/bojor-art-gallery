"use client";

import React, { useState, useRef } from "react";
import { ArrowDown, Rotate3d } from "lucide-react";

interface CurvedGalleryHeroProps {
  onScrollDown?: () => void;
}

export default function CurvedGalleryHero({ onScrollDown }: CurvedGalleryHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [interactiveMode, setInteractiveMode] = useState(false);

  // Mouse parallax / tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const multiplier = interactiveMode ? 12 : 5;
    setTilt({
      x: -y * multiplier, // tilt around X axis
      y: x * multiplier,  // tilt around Y axis
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div className="relative w-full mt-4 mb-20 select-none overflow-hidden">
      {/* 3D Curved Panorama Triptych Container - Full Bleed Screen Edge to Screen Edge */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-full cursor-pointer"
        style={{ perspective: "1500px" }}
      >
        <div
          className="relative w-full h-[360px] sm:h-[460px] md:h-[560px] lg:h-[640px] xl:h-[700px] flex items-stretch justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-5 transition-transform duration-300 ease-out px-0"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          {/* =========================================
              LEFT PANEL (Extends to absolute left edge)
             ========================================= */}
          <div
            className="relative w-[28.5%] h-full overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.14)] bg-neutral-900 group transition-all duration-300"
            style={{
              // Symmetrical concave cyclorama: top dips 0% to 11%, bottom arches opposite 100% to 89%
              clipPath: "polygon(0% 0%, 100% 11%, 100% 89%, 0% 100%)",
              transform: "rotateY(13deg) translateZ(-8px)",
              transformOrigin: "right center",
            }}
          >
            <div
              className="absolute inset-0 w-full h-full bg-cover transition-transform duration-700 ease-out group-hover:scale-105"
              style={{
                backgroundImage: "url('/suspended-dreams.jpg')",
                backgroundSize: "335% 100%",
                backgroundPosition: "0% 45%",
              }}
            />
            {/* Subtle atmospheric sheen */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/15 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* =========================================
              CENTER PANEL (Symmetrical Concave Lens Cyclorama)
             ========================================= */}
          <div
            className="relative w-[43%] h-full overflow-hidden shadow-[0_20px_48px_rgba(0,0,0,0.2)] bg-neutral-900 group transition-all duration-300"
            style={{
              // Symmetrical opposite curve on bottom: top dips to 13.5%, bottom arches up to 86.5%
              clipPath:
                "polygon(0% 11%, 15% 12.2%, 35% 13.2%, 50% 13.5%, 65% 13.2%, 85% 12.2%, 100% 11%, 100% 89%, 85% 87.8%, 65% 86.8%, 50% 86.5%, 35% 86.8%, 15% 87.8%, 0% 89%)",
              transform: "translateZ(-16px) scale(0.995)",
            }}
          >
            <div
              className="absolute inset-0 w-full h-full bg-cover transition-transform duration-700 ease-out group-hover:scale-105"
              style={{
                backgroundImage: "url('/suspended-dreams.jpg')",
                backgroundSize: "235% 100%",
                backgroundPosition: "68% 45%",
              }}
            />
            {/* Central glowing light overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
          </div>

          {/* =========================================
              RIGHT PANEL (Extends to absolute right edge)
             ========================================= */}
          <div
            className="relative w-[28.5%] h-full overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.14)] bg-neutral-900 group transition-all duration-300"
            style={{
              // Symmetrical concave cyclorama: top curves 11% to 0%, bottom arches opposite 89% to 100%
              clipPath: "polygon(0% 11%, 100% 0%, 100% 100%, 0% 89%)",
              transform: "rotateY(-13deg) translateZ(-8px)",
              transformOrigin: "left center",
            }}
          >
            <div
              className="absolute inset-0 w-full h-full bg-cover transition-transform duration-700 ease-out group-hover:scale-105"
              style={{
                backgroundImage: "url('/suspended-dreams.jpg')",
                backgroundSize: "370% 100%",
                backgroundPosition: "100% 45%",
              }}
            />
            {/* Subtle atmospheric sheen */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-transparent to-black/15 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Down Arrow Button: nestled right at the bottom center curved apex */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[13.5%] translate-y-1/2 z-30">
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onScrollDown) {
                onScrollDown();
              }
            }}
            className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#121214] dark:bg-neutral-900 text-white shadow-[0_10px_28px_rgba(0,0,0,0.4)] dark:shadow-[0_10px_28px_rgba(0,0,0,0.8)] hover:bg-black dark:hover:bg-neutral-800 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border border-neutral-700/40 dark:border-neutral-800"
            aria-label="Explore exhibition"
          >
            <ArrowDown
              size={20}
              className="text-white group-hover:translate-y-0.5 transition-transform duration-200"
              strokeWidth={2.4}
            />
            {/* Subtle pulse ring */}
            <span className="absolute inset-0 rounded-full border border-white/25 scale-100 group-hover:scale-130 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
          </button>
        </div>
      </div>
    </div>
  );
}
