"use client";

import React from "react";

export default function HeroSvgPattern() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-[1150px] pointer-events-none overflow-hidden select-none z-0"
    >
      {/* Dynamic ambient radial gradient glow spanning from top down */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] sm:w-[1200px] h-[550px] sm:h-[700px] bg-gradient-to-tr from-amber-500/5 via-purple-500/4 to-blue-500/5 dark:from-amber-400/7 dark:via-purple-500/6 dark:to-cyan-400/6 rounded-full blur-[130px] animate-pattern-float" />

      {/* Seamless Moving SVG Pattern Container extending across the navbar and hero */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          maskImage:
            "linear-gradient(to bottom, black 0%, black 75%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 75%, transparent 100%)",
        }}
      >
        {/* Constantly moving SVG canvas with 160px seamless repeat */}
        <svg
          className="absolute -top-[320px] -left-[320px] w-[calc(100%+640px)] h-[calc(100%+640px)] animate-pattern-drift"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Fluid Luxury Curvilinear & Geometric Art Topography Pattern (160x160 tile) */}
            <pattern
              id="bojor-fluid-contour-pattern"
              width="160"
              height="160"
              patternUnits="userSpaceOnUse"
            >
              {/* Primary flowing sinusoidal contour waves */}
              <path
                d="M 0 35 Q 40 10 80 35 T 160 35"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="text-neutral-900/[0.07] dark:text-white/[0.08]"
              />
              <path
                d="M 0 80 Q 40 55 80 80 T 160 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="text-neutral-900/[0.07] dark:text-white/[0.08]"
              />
              <path
                d="M 0 125 Q 40 100 80 125 T 160 125"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="text-neutral-900/[0.07] dark:text-white/[0.08]"
              />

              {/* Interlocking counter-harmonic flowing curves */}
              <path
                d="M 0 35 Q 40 60 80 35 T 160 35"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeDasharray="3 4"
                className="text-neutral-900/[0.05] dark:text-white/[0.06]"
              />
              <path
                d="M 0 80 Q 40 105 80 80 T 160 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeDasharray="3 4"
                className="text-neutral-900/[0.05] dark:text-white/[0.06]"
              />
              <path
                d="M 0 125 Q 40 150 80 125 T 160 125"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeDasharray="3 4"
                className="text-neutral-900/[0.05] dark:text-white/[0.06]"
              />

              {/* Vertical undulating wave lines */}
              <path
                d="M 40 0 Q 15 40 40 80 T 40 160"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.9"
                className="text-neutral-900/[0.06] dark:text-white/[0.07]"
              />
              <path
                d="M 120 0 Q 95 40 120 80 T 120 160"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.9"
                className="text-neutral-900/[0.06] dark:text-white/[0.07]"
              />

              {/* Harmonic concentric rippling arcs at intersections */}
              <circle
                cx="80"
                cy="80"
                r="36"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                className="text-neutral-900/[0.05] dark:text-white/[0.06]"
              />
              <circle
                cx="80"
                cy="80"
                r="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-neutral-900/[0.07] dark:text-white/[0.08]"
              />
              <circle
                cx="80"
                cy="80"
                r="3"
                fill="currentColor"
                className="text-neutral-900/[0.14] dark:text-white/[0.16]"
              />

              {/* Corner harmonic rings (seamless quadrant tiling) */}
              <circle
                cx="0"
                cy="0"
                r="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                className="text-neutral-900/[0.05] dark:text-white/[0.06]"
              />
              <circle
                cx="160"
                cy="0"
                r="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                className="text-neutral-900/[0.05] dark:text-white/[0.06]"
              />
              <circle
                cx="0"
                cy="160"
                r="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                className="text-neutral-900/[0.05] dark:text-white/[0.06]"
              />
              <circle
                cx="160"
                cy="160"
                r="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                className="text-neutral-900/[0.05] dark:text-white/[0.06]"
              />

              {/* Delicate diagonal micro-crosses at key intersection nodes */}
              <path
                d="M 76 76 L 84 84 M 84 76 L 76 84"
                stroke="currentColor"
                strokeWidth="1"
                className="text-neutral-900/[0.12] dark:text-white/[0.14]"
              />
              <path
                d="M -4 -4 L 4 4 M 4 -4 L -4 4"
                stroke="currentColor"
                strokeWidth="1"
                className="text-neutral-900/[0.12] dark:text-white/[0.14]"
              />
              <path
                d="M 156 -4 L 164 4 M 164 -4 L 156 4"
                stroke="currentColor"
                strokeWidth="1"
                className="text-neutral-900/[0.12] dark:text-white/[0.14]"
              />
              <path
                d="M -4 156 L 4 164 M 4 156 L -4 164"
                stroke="currentColor"
                strokeWidth="1"
                className="text-neutral-900/[0.12] dark:text-white/[0.14]"
              />
              <path
                d="M 156 156 L 164 164 M 164 156 L 156 164"
                stroke="currentColor"
                strokeWidth="1"
                className="text-neutral-900/[0.12] dark:text-white/[0.14]"
              />
            </pattern>
          </defs>

          {/* Render the infinite fluid art contour pattern */}
          <rect width="100%" height="100%" fill="url(#bojor-fluid-contour-pattern)" />
        </svg>
      </div>
    </div>
  );
}
