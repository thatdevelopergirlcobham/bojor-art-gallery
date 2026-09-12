"use client";

import React, { useState } from "react";

export default function NewsletterSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.surname || !formData.email) return;

    setIsLoading(true);
    // Simulate brief network submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="newsletter"
      className="relative w-full py-20 sm:py-24 md:py-28 bg-[#FAFAFA] dark:bg-[#070709] transition-colors duration-300 overflow-hidden"
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-neutral-200/50 dark:bg-neutral-900/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center z-10">
        {/* Section Kicker */}
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] font-semibold text-neutral-500 dark:text-neutral-400 mb-3 inline-block">
          EXQUISITE DISPATCHES
        </span>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight text-neutral-950 dark:text-neutral-50 uppercase mb-4 leading-tight">
          SIGN UP FOR OUR ARTISTIC NEWSLETTER
        </h2>

        {/* Caption */}
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10 md:mb-12">
          Join our intimate circle of collectors and art enthusiasts. Receive seasonal
          exhibition invites, private curatorial essays by Prof. Bojor Enamhe, and exclusive
          previews of newly acquired masterworks directly to your inbox.
        </p>

        {/* Newsletter Form */}
        {isSubmitted ? (
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 shadow-lg text-center max-w-xl mx-auto transition-all animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mx-auto mb-4 text-emerald-600 dark:text-emerald-400 border border-neutral-200 dark:border-neutral-700">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-medium text-neutral-900 dark:text-white mb-2">
              Welcome to the Circle, {formData.firstName}!
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
              A confirmation email has been dispatched to{" "}
              <span className="font-semibold text-neutral-900 dark:text-neutral-200">
                {formData.email}
              </span>
              . We look forward to sharing our latest curatorial journeys with you.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ firstName: "", surname: "", email: "" });
              }}
              className="text-xs uppercase tracking-widest font-semibold text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors underline underline-offset-4"
            >
              Register another email
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl mx-auto flex flex-col gap-4 sm:gap-5 select-text"
          >
            {/* Name Fields: First Name & Surname */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="flex flex-col text-left">
                <label
                  htmlFor="firstName"
                  className="text-xs font-semibold tracking-wider uppercase text-neutral-500 dark:text-neutral-400 mb-1.5 ml-1"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  required
                  placeholder="e.g. Enobong"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="w-full px-5 py-3.5 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-300/80 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 text-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-400 transition-all shadow-xs"
                />
              </div>

              <div className="flex flex-col text-left">
                <label
                  htmlFor="surname"
                  className="text-xs font-semibold tracking-wider uppercase text-neutral-500 dark:text-neutral-400 mb-1.5 ml-1"
                >
                  Surname
                </label>
                <input
                  id="surname"
                  type="text"
                  required
                  placeholder="e.g. Asuquo"
                  value={formData.surname}
                  onChange={(e) =>
                    setFormData({ ...formData, surname: e.target.value })
                  }
                  className="w-full px-5 py-3.5 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-300/80 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 text-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-400 transition-all shadow-xs"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-col text-left">
              <label
                htmlFor="newsletterEmail"
                className="text-xs font-semibold tracking-wider uppercase text-neutral-500 dark:text-neutral-400 mb-1.5 ml-1"
              >
                Email Address
              </label>
              <input
                id="newsletterEmail"
                type="email"
                required
                placeholder="e.g. you@domain.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-5 py-3.5 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-300/80 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 text-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-400 transition-all shadow-xs"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto sm:min-w-[240px] px-8 py-4 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-xs sm:text-sm font-semibold tracking-widest uppercase shadow-[0_4px_20px_rgba(0,0,0,0.14)] dark:shadow-[0_4px_22px_rgba(255,255,255,0.12)] hover:bg-neutral-800 dark:hover:bg-neutral-100 active:scale-[0.98] transition-all duration-200 cursor-pointer disabled:opacity-50"
              >
                {isLoading ? "Subscribing..." : "Join the Newsletter"}
              </button>
            </div>

            {/* Privacy note */}
            <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-1">
              We respect your privacy. Unsubscribe anytime with a single click.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
