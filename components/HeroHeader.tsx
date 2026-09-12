"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroHeader() {
  const fullText = "BOJOR ART GALLERY";
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    // Initial delay before typing begins
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsTypingComplete(true);
        }
      }, 75); // 75ms typing cadence

      return () => clearInterval(interval);
    }, 250);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto px-6 pt-10 pb-4 flex flex-col items-center justify-center text-center select-text">
      {/* Category / Welcome Subheader - Subtle Fade In */}
      <h2 className="text-[11px] sm:text-[12.5px] md:text-[13.5px] font-medium tracking-[0.3em] text-neutral-500 dark:text-neutral-400 uppercase mb-4 transition-all duration-700 animate-in fade-in slide-in-from-top-3">
        WELCOME TO THE
      </h2>

      {/* Main Title - Typewriter Animation */}
      <div className="min-h-[50px] sm:min-h-[64px] md:min-h-[76px] lg:min-h-[84px] xl:min-h-[92px] flex items-center justify-center mb-6">
        <h1 className="text-4xl sm:text-5xl md:text-[64px] lg:text-[72px] xl:text-[78px] font-bold tracking-[-0.02em] text-neutral-950 dark:text-white uppercase leading-[1.04] transition-colors inline-flex items-center justify-center">
          <span>{displayedText}</span>
          {/* Animated Cursor Beam */}
          <span
            aria-hidden="true"
            className={`inline-block w-[3px] sm:w-[4px] md:w-[5px] h-[0.8em] ml-1 sm:ml-2 align-middle bg-neutral-950 dark:bg-white rounded-full ${
              isTypingComplete ? "animate-pulse opacity-75" : "animate-cursor-blink"
            }`}
          />
        </h1>
      </div>

      {/* Description Paragraph - Smooth Fade and Slide In */}
      <p className="max-w-[740px] text-neutral-600 dark:text-neutral-300 text-[14px] sm:text-[16px] md:text-[17px] leading-[1.7] text-center font-normal px-2 transition-all duration-700 animate-in fade-in slide-in-from-bottom-2">
        Curated with an art historian&apos;s eye, Bojor Art Gallery is a home for
        every kind of artist and every tradition of art-making.
      </p>

      {/* Hero CTA Button Pair: Filled ("View Gallery") & Outline ("Visit Events") */}
      <div className="mt-8 sm:mt-9 flex flex-wrap items-center justify-center gap-3.5 sm:gap-5 transition-all duration-700 animate-in fade-in slide-in-from-bottom-3">
        {/* Filled CTA Button */}
        <Link
          href="/gallery"
          className="group inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-xs sm:text-[13.5px] font-semibold tracking-wider uppercase shadow-[0_4px_20px_rgba(0,0,0,0.16)] dark:shadow-[0_4px_22px_rgba(255,255,255,0.15)] hover:bg-neutral-800 dark:hover:bg-neutral-100 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
        >
          <span>View Gallery</span>
          <svg
            className="w-4 h-4 text-white/90 dark:text-neutral-900 group-hover:text-white dark:group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </Link>

        {/* Outline CTA Button */}
        <Link
          href="/events"
          className="group inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-transparent hover:bg-neutral-100/70 dark:hover:bg-neutral-900/60 text-neutral-900 dark:text-neutral-100 text-xs sm:text-[13.5px] font-semibold tracking-wider uppercase border border-neutral-300 dark:border-neutral-700/80 hover:border-neutral-400 dark:hover:border-neutral-600 backdrop-blur-sm hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
        >
          <span>Visit Events</span>
          <svg
            className="w-4 h-4 text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white group-hover:translate-x-0.5 transition-transform duration-200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
