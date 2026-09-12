"use client";

import React, { useEffect, useState, useRef } from "react";
import { Sun, Moon, Laptop, ChevronDown, Check } from "lucide-react";
import { useTheme, type Theme } from "@/components/ThemeProvider";

interface ThemeSwitcherProps {
  compact?: boolean;
}

export default function ThemeSwitcher({ compact = false }: ThemeSwitcherProps) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!mounted) {
    return (
      <div
        className={`inline-flex items-center rounded-full bg-neutral-100/70 dark:bg-neutral-900/60 border border-neutral-200/50 dark:border-neutral-800/80 ${
          compact ? "w-8.5 h-8.5" : "w-24 h-9.5"
        }`}
      />
    );
  }

  const options: { value: Theme; label: string; icon: React.ReactNode }[] = [
    {
      value: "light",
      label: "Light",
      icon: <Sun size={15} strokeWidth={2.2} />,
    },
    {
      value: "dark",
      label: "Dark",
      icon: <Moon size={15} strokeWidth={2.2} />,
    },
    {
      value: "system",
      label: "System",
      icon: <Laptop size={15} strokeWidth={2.2} />,
    },
  ];

  const currentIcon =
    theme === "dark" ? (
      <Moon size={15} strokeWidth={2.2} />
    ) : theme === "light" ? (
      <Sun size={15} strokeWidth={2.2} />
    ) : (
      <Laptop size={15} strokeWidth={2.2} />
    );

  const currentLabel =
    theme === "dark" ? "Dark" : theme === "light" ? "Light" : "System";

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Change theme"
        title={`Current theme: ${currentLabel}`}
        className={`group inline-flex items-center justify-center rounded-full backdrop-blur-md transition-all duration-200 cursor-pointer ${
          compact
            ? "w-8.5 h-8.5 bg-white/70 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/80 text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white"
            : "px-3.5 py-2 gap-2 bg-white/70 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/80 text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 shadow-xs"
        }`}
      >
        <span className="flex items-center justify-center text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors">
          {currentIcon}
        </span>

        {!compact && (
          <>
            <span className="text-xs font-medium tracking-wider uppercase select-none">
              {currentLabel}
            </span>
            <ChevronDown
              size={12}
              className={`text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="absolute right-0 top-full mt-2 w-36 sm:w-40 p-1.5 rounded-2xl bg-white/95 dark:bg-[#121215]/95 backdrop-blur-2xl border border-neutral-200/70 dark:border-neutral-800/80 shadow-[0_12px_36px_rgba(0,0,0,0.12)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.7)] z-50 animate-in fade-in zoom-in-95 duration-150 origin-top-right"
        >
          {options.map((opt) => {
            const isSelected = theme === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                role="menuitem"
                onClick={() => {
                  setTheme(opt.value);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium tracking-wide transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? "bg-neutral-100/90 dark:bg-neutral-800/70 text-neutral-950 dark:text-white font-semibold"
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/50 hover:text-neutral-950 dark:hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={
                      isSelected
                        ? "text-neutral-950 dark:text-white"
                        : "text-neutral-500 dark:text-neutral-400"
                    }
                  >
                    {opt.icon}
                  </span>
                  <span>{opt.label}</span>
                </div>

                {isSelected && (
                  <Check
                    size={14}
                    strokeWidth={2.5}
                    className="text-neutral-950 dark:text-white"
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
