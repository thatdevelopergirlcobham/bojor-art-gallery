"use client";

import React from "react";
import Image from "next/image";

export default function CuratorSection() {
  return (
    <section
      id="artist"
      className="relative w-full py-20 sm:py-28 md:py-32 px-6 sm:px-10 md:px-16 lg:px-24 transition-colors duration-300"
    >
      {/* SVG ClipPath definition for the elegant Concave Left Flank */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="curator-concave-left" clipPathUnits="objectBoundingBox">
            {/* Concave left edge scooping inward towards the center */}
            <path d="M 0,0 L 0.94,0 C 0.97,0 1,0.03 1,0.06 L 1,0.94 C 1,0.97 0.97,1 0.94,1 L 0,1 C 0.16,0.72 0.16,0.28 0,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-20">
          <span className="text-[11px] sm:text-[12.5px] font-semibold tracking-[0.28em] text-neutral-500 dark:text-neutral-400 uppercase mb-3 transition-colors">
            CURATOR PROFILE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-[-0.015em] text-neutral-950 dark:text-white uppercase leading-[1.1] inline-flex items-center gap-3 transition-colors">
            <span>PROFESSOR BOJOR ENAMHE</span>
           
          </h2>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Biography & Social Media Handles */}
          <div className="lg:col-span-6 flex flex-col justify-center select-text">
            <p className="text-[14.5px] sm:text-[16px] md:text-[16.5px] leading-[1.8] text-neutral-600 dark:text-neutral-300 font-normal mb-6 transition-colors">
              Professor Bojor Enamhe is a Professor of Art History and Art
              Management at Cross River University of Technology (CRUTECH),
              Calabar, and a practicing curator and research artist. Her work
              spans academic research and hands-on exhibition-making, with a
              consistent focus on art enterprise, artistic mobility, and support
              for young and established artists alike. She is the founder of Art
              Incubator Calabar, established in 2017, through which she has
              curated numerous exhibitions and helped bring emerging artists to
              wider audiences.
            </p>

            <p className="text-[14.5px] sm:text-[16px] md:text-[16.5px] leading-[1.8] text-neutral-600 dark:text-neutral-300 font-normal mb-8 transition-colors">
              Her scholarship &mdash; including work on myth, media, and
              culture, and on the rise of digital tools in contemporary practice
              &mdash; consistently argues that no tradition of art-making should
              be treated as lesser than another. That conviction shapes Bojor
              Art Gallery: a space built to hold traditional, contemporary, and
              digital art side by side, curated with the same rigor she brings to
              her academic and curatorial work.
            </p>

            {/* Subtle Divider Line */}
            <div className="w-full h-[1px] bg-neutral-200 dark:bg-neutral-800 my-2 mb-8 transition-colors" />

            {/* Social Media Section */}
            <div>
              <h3 className="text-xs sm:text-[13px] font-bold tracking-[0.18em] uppercase text-neutral-900 dark:text-white mb-5 transition-colors">
                CONNECT WITH THE CURATOR :
              </h3>

              {/* Verified LinkedIn and Instagram handles */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                {/* LinkedIn Pill */}
                <a
                  href="https://ng.linkedin.com/in/bojor-enamhe-0360bb139"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 pl-2 pr-5 py-2.5 rounded-full bg-neutral-100 dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 text-xs sm:text-[13.5px] font-medium tracking-wide hover:bg-neutral-200/80 dark:hover:bg-neutral-800 hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-xs"
                >
                  <span className="w-8 h-8 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center transition-colors">
                    {/* LinkedIn SVG */}
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </span>
                  <span>Bojor Enamhe</span>
                </a>

                {/* Instagram Pill */}
                <a
                  href="https://www.instagram.com/bojorenamhe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 pl-2 pr-5 py-2.5 rounded-full bg-neutral-100 dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 text-xs sm:text-[13.5px] font-medium tracking-wide hover:bg-neutral-200/80 dark:hover:bg-neutral-800 hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-xs"
                >
                  <span className="w-8 h-8 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center transition-colors">
                    {/* Instagram SVG */}
                    <svg
                      className="w-4 h-4 fill-none stroke-current"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </span>
                  <span>@bojorenamhe</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Curator Portrait with Concave Inward Curve on the Left Side */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
            <div className="relative group w-full max-w-[460px] aspect-[3/4] sm:aspect-[4/5] [filter:drop-shadow(0_20px_35px_rgba(0,0,0,0.1))] dark:[filter:drop-shadow(0_24px_45px_rgba(0,0,0,0.65))]">
              {/* Concave Cropped Image Container */}
              <div
                className="relative w-full h-full bg-neutral-100 dark:bg-neutral-900 overflow-hidden"
                style={{ clipPath: "url(#curator-concave-left)" }}
              >
                {/* Subtle atmospheric sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/10 z-10 pointer-events-none opacity-50 group-hover:opacity-30 transition-opacity duration-500" />

                <Image
                  src="/mrs_enamhe.jpg"
                  alt="Professor Bojor Enamhe - Art Curator & Professor of Art History"
                  fill
                  priority={false}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 460px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Exact Matching Concave Border Outline */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-20"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M 0,0 L 94,0 C 97,0 100,3 100,6 L 100,94 C 100,97 97,100 94,100 L 0,100 C 16,72 16,28 0,0 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  className="text-neutral-200/80 dark:text-neutral-800/90"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
