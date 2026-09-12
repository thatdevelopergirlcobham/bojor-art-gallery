"use client";

import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#F0F0F2] dark:bg-[#040406] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 pt-16 sm:pt-20 pb-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Upper Footer: Brand Overview & Contact/Social */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start pb-12">
          {/* Brand & Curator Ethos */}
          <div className="md:col-span-7 flex flex-col items-start">
            <span className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-neutral-950 dark:text-white uppercase mb-3.5">
              BOJOR ART GALLERY
            </span>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-lg leading-relaxed mb-6 font-normal">
              Curated with an art historian&apos;s eye by Professor Bojor Enamhe. A premier sanctuary
              celebrating traditional African heritage, contemporary fine art, and digital mastery
              in harmonious resonance.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-200/80 dark:bg-neutral-900/90 text-xs text-neutral-700 dark:text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Cross River University of Technology, Calabar, Nigeria</span>
            </div>
          </div>

          {/* Contact & Social (Email, Facebook, Phone Number) */}
          <div className="md:col-span-5 flex flex-col gap-3.5">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-1">
              Connect & Reach Us
            </span>

            {/* Email Address */}
            <a
              href="mailto:info@bojorartgallery.com"
              className="group flex items-center gap-3.5 p-3 rounded-2xl bg-white/70 dark:bg-neutral-900/70 hover:bg-white dark:hover:bg-neutral-900 transition-all text-sm text-neutral-700 dark:text-neutral-300 shadow-xs"
            >
              <div className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white shadow-xs group-hover:scale-105 transition-transform flex-shrink-0">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.75}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] uppercase font-semibold text-neutral-400 dark:text-neutral-500 tracking-wider">
                  Email
                </span>
                <span className="text-xs sm:text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate">
                  info@bojorartgallery.com
                </span>
              </div>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/bojorartgallery"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3.5 p-3 rounded-2xl bg-white/70 dark:bg-neutral-900/70 hover:bg-white dark:hover:bg-neutral-900 transition-all text-sm text-neutral-700 dark:text-neutral-300 shadow-xs"
            >
              <div className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white shadow-xs group-hover:scale-105 transition-transform flex-shrink-0">
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] uppercase font-semibold text-neutral-400 dark:text-neutral-500 tracking-wider">
                  Facebook
                </span>
                <span className="text-xs sm:text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate">
                  Bojor Art Gallery
                </span>
              </div>
            </a>

            {/* Phone Number */}
            <a
              href="tel:+2348031234567"
              className="group flex items-center gap-3.5 p-3 rounded-2xl bg-white/70 dark:bg-neutral-900/70 hover:bg-white dark:hover:bg-neutral-900 transition-all text-sm text-neutral-700 dark:text-neutral-300 shadow-xs"
            >
              <div className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white shadow-xs group-hover:scale-105 transition-transform flex-shrink-0">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.75}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] uppercase font-semibold text-neutral-400 dark:text-neutral-500 tracking-wider">
                  Phone
                </span>
                <span className="text-xs sm:text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate">
                  +234 803 123 4567
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Massive Almost-Faded Watermark Typography */}
        <div className="w-full py-8 sm:py-12 flex items-center justify-center overflow-hidden select-none pointer-events-none">
          <span className="text-[11vw] md:text-[10.5vw] font-serif font-black uppercase tracking-tight text-neutral-950/[0.06] dark:text-white/[0.05] leading-none whitespace-nowrap text-center">
            BOJOR ART GALLERY
          </span>
        </div>

        {/* Sub-Footer Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <p>© 2026 Bojor Art Gallery. All rights reserved.</p>
          <p className="text-neutral-400 dark:text-neutral-500">
            Curated by Prof. Bojor Enamhe • Calabar, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
