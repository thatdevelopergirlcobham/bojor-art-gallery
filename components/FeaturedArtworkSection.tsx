"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function FeaturedArtworkSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!titleRef.current) return;
      const rect = titleRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress of title scrolling through the upper middle of the viewport
      // 0 when at bottom of screen, 1 when scrolled into prime view
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.45;

      if (rect.top > start) {
        setScrollProgress(0);
      } else if (rect.top < end) {
        setScrollProgress(1);
      } else {
        const p = (start - rect.top) / (start - end);
        setScrollProgress(Math.min(Math.max(p, 0), 1));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="gallery"
      className="relative w-full py-20 sm:py-28 md:py-32 px-6 sm:px-10 md:px-16 lg:px-24 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Scroll-Revealed Second Line */}
        <div ref={titleRef} className="flex flex-col mb-12 sm:mb-16 md:mb-20">
          <span className="text-[11px] sm:text-[12.5px] font-semibold tracking-[0.28em] text-neutral-500 dark:text-neutral-400 uppercase mb-3 transition-colors">
            ARTWORK DETAILS
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight uppercase leading-[1.12]">
            {/* First Line: Always full contrast dark / light */}
            <span className="text-neutral-950 dark:text-white inline-flex items-center flex-wrap gap-2.5 transition-colors">
              <span>MESMERIZING EXPLORATION OF MEMORY</span>
              
              <span>AND</span>
            </span>

            {/* Second Line: Darkens and reveals fully as user scrolls */}
            <span
              className="block mt-1 sm:mt-2 transition-all duration-300 ease-out"
              style={{
                color:
                  scrollProgress > 0.85
                    ? "var(--foreground)"
                    : scrollProgress < 0.15
                    ? "rgba(156, 163, 175, 0.45)"
                    : `color-mix(in srgb, var(--foreground) ${Math.round(
                        scrollProgress * 100
                      )}%, rgb(156, 163, 175) ${Math.round(
                        (1 - scrollProgress) * 100
                      )}%)`,
                opacity: 0.35 + scrollProgress * 0.65,
                transform: `translateY(${(1 - scrollProgress) * 6}px)`,
              }}
            >
              THE TRANSIENT NATURE OF EXPERIENCE.
            </span>
          </h2>
        </div>

        {/* Main 2-Column Content Grid matching the Template */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Primary Artwork Image */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="group relative w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-3xl sm:rounded-[36px] border border-neutral-200/70 dark:border-neutral-800/80 shadow-[0_24px_64px_rgba(0,0,0,0.12)] dark:shadow-[0_28px_70px_rgba(0,0,0,0.7)] bg-neutral-900 transition-all duration-500">
              {/* Subtle glass reflection highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 z-10 pointer-events-none opacity-50 group-hover:opacity-30 transition-opacity duration-500" />

              {/* Artwork Primary Image */}
              <Image
                src="/suspended-dreams.jpg"
                alt="Suspended Dreams by Ekaterina Petrova - Featured Artwork"
                fill
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Tag / Category Badge Overlay */}
              <div className="absolute top-5 left-5 z-20 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-black/60 dark:bg-neutral-900/80 text-white backdrop-blur-md border border-white/15">
                  Featured Masterpiece
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Statement, Metadata Grid, Price, and Purchase Action */}
          <div className="lg:col-span-6 flex flex-col justify-start select-text">
            {/* Artist Attribution Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
                Artist
              </span>
              <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                Ekaterina Petrova
              </span>
            </div>

            {/* Description / Artist Statement */}
            <p className="text-[14px] sm:text-[15px] md:text-[15.5px] leading-[1.8] text-neutral-600 dark:text-neutral-300 font-normal mb-8 transition-colors">
              &ldquo;Suspended Dreams&rdquo; is a mesmerizing exploration of
              memory and the transient nature of experience. Petrova utilizes a
              captivating combination of acrylics, charcoal, and textured elements
              to create a layered dreamscape. Wispy figures emerge from a background
              of swirling blues and grays, their forms fragmented yet evocative.
              The artist&apos;s skillful use of light and shadow imbues the scene
              with a sense of mystery and introspection.
            </p>

            {/* 2x2 Metadata Cards Grid matching Reference Image */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
              {/* Card 1: Medium */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs transition-colors">
                <span className="block text-[11px] font-medium tracking-wider uppercase text-neutral-400 dark:text-neutral-500 mb-1.5">
                  Medium
                </span>
                <span className="block text-sm sm:text-[15px] font-semibold text-neutral-900 dark:text-neutral-100">
                  Media on Canvas
                </span>
              </div>

              {/* Card 2: Dimensions */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs transition-colors">
                <span className="block text-[11px] font-medium tracking-wider uppercase text-neutral-400 dark:text-neutral-500 mb-1.5">
                  Dimensions
                </span>
                <span className="block text-sm sm:text-[15px] font-semibold text-neutral-900 dark:text-neutral-100">
                  152.4 x 121.9 cm
                </span>
              </div>

              {/* Card 3: Year Created */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs transition-colors">
                <span className="block text-[11px] font-medium tracking-wider uppercase text-neutral-400 dark:text-neutral-500 mb-1.5">
                  Year Created
                </span>
                <span className="block text-sm sm:text-[15px] font-semibold text-neutral-900 dark:text-neutral-100">
                  2023
                </span>
              </div>

              {/* Card 4: Edition */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs transition-colors">
                <span className="block text-[11px] font-medium tracking-wider uppercase text-neutral-400 dark:text-neutral-500 mb-1.5">
                  Edition
                </span>
                <span className="block text-sm sm:text-[15px] font-semibold text-neutral-900 dark:text-neutral-100">
                  N/A (one-of-a-kind)
                </span>
              </div>
            </div>

            {/* Divider Line */}
            <div className="w-full h-[1px] bg-neutral-200 dark:bg-neutral-800 my-2 mb-6 transition-colors" />

            {/* Artwork Price & Availability Pill */}
            <div>
              <span className="block text-[11px] font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-2">
                ARTWORK PRICE
              </span>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white transition-colors">
                  ₦18,500,000
                </span>

                {/* Availability Badge */}
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700/80 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for Purchase
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
