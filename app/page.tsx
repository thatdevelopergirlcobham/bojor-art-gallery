"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroHeader from "@/components/HeroHeader";
import CurvedGalleryHero from "@/components/CurvedGalleryHero";
import HeroSvgPattern from "@/components/HeroSvgPattern";
import CuratorSection from "@/components/CuratorSection";
import FeaturedArtworkSection from "@/components/FeaturedArtworkSection";
import OtherArtworkSection from "@/components/OtherArtworkSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const [activeTab, setActiveTab] = useState("HOME");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleScrollToCurator = () => {
    const el = document.getElementById("artist");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FCFCFC] dark:bg-[#09090B] flex flex-col text-neutral-900 dark:text-neutral-100 selection:bg-neutral-900 selection:text-white dark:selection:bg-neutral-100 dark:selection:text-neutral-950 transition-colors duration-300 overflow-x-hidden">
      {/* Constantly Moving Fluid SVG Pattern Background filling Navbar and Hero */}
      <HeroSvgPattern />

      {/* Glassmorphic Navbar layered cleanly above the moving pattern */}
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Hero Section */}
      <main
        id="home"
        className="relative z-10 w-full flex-1 flex flex-col items-center justify-between pb-12 overflow-hidden"
      >
        {/* Foreground Content */}
        <div className="relative z-10 w-full flex flex-col items-center">
          {/* Hero Header Typography with Typewriter & Entrance Animations */}
          <HeroHeader />

          {/* 3D Curved Cylindrical Panorama Triptych with Symmetrical Mirror Curves */}
          <CurvedGalleryHero onScrollDown={handleScrollToCurator} />
        </div>
      </main>

      {/* Curator Profile Section: Professor Bojor Enamhe */}
      <CuratorSection />

      {/* Featured Artwork Section: Suspended Dreams */}
      <FeaturedArtworkSection />

      {/* Other Artwork Section: By Curator & Others with Interactive Collage & Mobile Auto-Motion */}
      <OtherArtworkSection />

      {/* Artistic Newsletter Sign-Up Section */}
      <NewsletterSection />

      {/* Gallery Footer with Social & Contact Details */}
      <Footer />

      {/* Floating Animated Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
