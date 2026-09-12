"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user has scrolled down past initial header
      setIsVisible(window.scrollY > 160);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-7 sm:bottom-9 right-6 sm:right-9 z-40 pointer-events-auto select-none">
      <button
        type="button"
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Scroll back to top"
        title="Move to top"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-13.5 sm:h-13.5 rounded-full bg-white/85 dark:bg-neutral-900/85 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800/80 text-neutral-900 dark:text-white shadow-[0_8px_28px_rgba(0,0,0,0.12)] dark:shadow-[0_10px_32px_rgba(0,0,0,0.65)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer animate-floating-arrow"
      >
        {/* Subtle glowing halo ring on hover */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-neutral-400/20 dark:bg-white/10 blur-sm scale-90 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
        />

        {/* Upward Arrow Icon with hover elevation animation */}
        <ArrowUp
          size={20}
          strokeWidth={2.4}
          className="relative z-10 transition-transform duration-300 ease-out group-hover:-translate-y-1"
        />

        {/* Floating tooltip label */}
        <span
          className={`absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase whitespace-nowrap bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 shadow-md pointer-events-none transition-all duration-200 ${
            isHovered
              ? "opacity-100 -translate-y-1 scale-100"
              : "opacity-0 translate-y-0 scale-90"
          }`}
        >
          Top
        </span>
      </button>
    </div>
  );
}
