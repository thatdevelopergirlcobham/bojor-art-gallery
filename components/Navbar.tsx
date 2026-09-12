"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";

interface NavbarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function Navbar({ activeTab = "HOME", onTabChange }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "EVENTS", href: "/events" },
    { label: "GALLERY", href: "/gallery" }
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full px-6 sm:px-10 md:px-14 lg:px-16 transition-all duration-300 border-none ${
        isScrolled
          ? "py-3.5 sm:py-4 bg-white/70 dark:bg-[#09090B]/70 backdrop-blur-md shadow-xs dark:shadow-none"
          : "py-6 sm:py-7 bg-transparent"
      }`}
    >
      <div className="relative w-full flex items-center justify-between">
        {/* Brand Logo: Bojor Gallery */}
        <Link href="/" className="group flex flex-col items-start select-none min-w-[140px] z-10">
          <span className="font-serif text-[26px] sm:text-[28px] md:text-[32px] leading-[1.02] tracking-[-0.015em] text-neutral-950 dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors font-medium">
            Bojor
          </span>
          <span className="font-serif text-[26px] sm:text-[28px] md:text-[32px] leading-[1.02] tracking-[-0.015em] text-neutral-950 dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors font-medium">
            Gallery
          </span>
        </Link>

        {/* Pill-shaped Navigation Center - Positioned on the exact screen center axis */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-auto">
          <nav
            aria-label="Main Navigation"
            className="flex items-center gap-8 md:gap-9 lg:gap-11 px-9 md:px-11 lg:px-13 py-3.5 md:py-4 rounded-full backdrop-blur-2xl bg-white/70 dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-neutral-800/80 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] transition-colors duration-200"
          >
            {navLinks.map((item) => {
              const isActive = activeTab === item.label;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    if (onTabChange) onTabChange(item.label);
                  }}
                  className={`px-1.5 py-1 text-xs lg:text-[13px] font-medium tracking-[0.2em] uppercase transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-neutral-950 dark:text-white font-semibold"
                      : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right side: Theme Switcher & Enlarged CTA Button */}
        <div className="hidden md:flex items-center justify-end gap-3.5 min-w-[140px] z-10">
          <ThemeSwitcher />

          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2.5 px-6 lg:px-7 py-3 lg:py-3.5 rounded-full bg-neutral-950 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 active:scale-95 text-white dark:text-neutral-950 text-xs lg:text-[13px] font-semibold tracking-wider uppercase shadow-[0_4px_18px_rgba(0,0,0,0.18)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.12)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition-all duration-200 cursor-pointer"
          >
            <span>View gallery</span>
            <svg
              className="w-4 h-4 text-white/90 dark:text-neutral-950/90 group-hover:text-white dark:group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
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
        </div>

        {/* Mobile menu trigger and compact switcher */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeSwitcher compact />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu - Zero white borders in dark theme */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 p-6 bg-white/95 dark:bg-[#121215]/95 backdrop-blur-2xl rounded-2xl border border-neutral-200/70 dark:border-neutral-800/80 shadow-[0_12px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.7)] flex flex-col gap-4 z-50 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => {
                if (onTabChange) onTabChange(item.label);
                setMobileMenuOpen(false);
              }}
              className="text-left text-sm font-semibold tracking-widest uppercase text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white py-3 border-b border-neutral-100 dark:border-neutral-800/80 last:border-0 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-2 pb-1 flex items-center justify-between border-t border-neutral-100 dark:border-neutral-800/80">
            <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
              Appearance
            </span>
            <ThemeSwitcher />
          </div>

          <Link
            href="/gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full py-3.5 rounded-xl bg-neutral-950 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 text-white dark:text-neutral-950 text-xs font-semibold tracking-wider uppercase inline-flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <span>View gallery</span>
            <svg
              className="w-4 h-4 text-white dark:text-neutral-950"
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
        </div>
      )}
    </header>
  );
}
