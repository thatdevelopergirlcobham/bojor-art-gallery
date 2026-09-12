"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSvgPattern from "@/components/HeroSvgPattern";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

interface GalleryArtwork {
  id: string;
  title: string;
  artist: string;
  category: "Curator's Works" | "Contemporary African" | "Surreal & Dreamscapes" | "Digital Mastery";
  description: string;
  medium: string;
  dimensions: string;
  year: string;
  edition: string;
  price: string;
  priceAmount: number;
  status: "Available for Purchase" | "In Private Collection" | "Exhibition Only";
  image: string;
  featured?: boolean;
}

const galleryArtworks: GalleryArtwork[] = [
  {
    id: "gal-1",
    title: "Suspended Dreams",
    artist: "Ekaterina Petrova",
    category: "Contemporary African",
    description:
      "A mesmerizing exploration of memory and the transient nature of experience. Petrova utilizes a captivating combination of acrylics, charcoal, and textured elements to create a layered dreamscape.",
    medium: "Media on Canvas",
    dimensions: "152.4 x 121.9 cm",
    year: "2023",
    edition: "One-of-a-kind",
    price: "₦18,500,000",
    priceAmount: 18500000,
    status: "Available for Purchase",
    image: "/suspended-dreams.jpg",
    featured: true,
  },
  {
    id: "gal-2",
    title: "Symphony of the Elders",
    artist: "Prof. Bojor Enamhe",
    category: "Curator's Works",
    description:
      "A celebration of cultural heritage and ceremonial royalty, exploring timeless African iconography through rich ochre, emerald, and indigo pigments with gold accents.",
    medium: "Oil & Acrylic on Canvas",
    dimensions: "180.0 x 110.0 cm",
    year: "2024",
    edition: "Original Masterpiece",
    price: "₦24,000,000",
    priceAmount: 24000000,
    status: "Available for Purchase",
    image: "/artworks/curator-1.jpg",
    featured: true,
  },
  {
    id: "gal-3",
    title: "Cosmic Ancestors",
    artist: "Prof. Bojor Enamhe",
    category: "Curator's Works",
    description:
      "Celestial bronze figures ascending into a glowing constellation of myth and starlight, embodying the metaphysical bridge between indigenous roots and infinity.",
    medium: "Research Mixed Media on Board",
    dimensions: "195.0 x 105.0 cm",
    year: "2024",
    edition: "One-of-a-kind",
    price: "₦28,500,000",
    priceAmount: 28500000,
    status: "Available for Purchase",
    image: "/artworks/curator-5.jpg",
    featured: true,
  },
  {
    id: "gal-4",
    title: "The Queen Mother",
    artist: "Prof. Bojor Enamhe",
    category: "Curator's Works",
    description:
      "A regal portrait honoring matriarchal dignity, adorned with a sculpted golden crown set against deep lapis lazuli impasto textures.",
    medium: "Impasto Oil on Linen",
    dimensions: "140.0 x 105.0 cm",
    year: "2023",
    edition: "Original Masterwork",
    price: "₦19,800,000",
    priceAmount: 19800000,
    status: "In Private Collection",
    image: "/artworks/curator-4.jpg",
  },
  {
    id: "gal-5",
    title: "Ancestral Geometries",
    artist: "Prof. Bojor Enamhe",
    category: "Curator's Works",
    description:
      "Intricate textured relief forms interwoven with genuine 24k gold leaf, reflecting sacred masks and ancient Cross River architectural iconography.",
    medium: "Gold Leaf & Mixed Media Relief",
    dimensions: "120.0 x 120.0 cm",
    year: "2022",
    edition: "One-of-a-kind",
    price: "₦16,200,000",
    priceAmount: 16200000,
    status: "Available for Purchase",
    image: "/artworks/curator-2.jpg",
  },
  {
    id: "gal-6",
    title: "Moonlit Rituals",
    artist: "Prof. Bojor Enamhe",
    category: "Curator's Works",
    description:
      "Dynamic impasto strokes portraying the sacred kinetic energy of communal dances beneath a radiant full moon in rural Calabar.",
    medium: "Textured Oil on Canvas",
    dimensions: "115.0 x 115.0 cm",
    year: "2023",
    edition: "Original Painting",
    price: "₦15,000,000",
    priceAmount: 15000000,
    status: "Available for Purchase",
    image: "/artworks/curator-3.jpg",
  },
  {
    id: "gal-7",
    title: "Cat Cloud Fantasy",
    artist: "Sora Takahashi",
    category: "Surreal & Dreamscapes",
    description:
      "A colossal, fluffy pink feline spirit slumbering gently above mountain valleys and winding rivers in the pastel twilight sky.",
    medium: "Digital Painting on Archival Canvas",
    dimensions: "160.0 x 120.0 cm",
    year: "2024",
    edition: "Limited Edition (3 of 5)",
    price: "₦9,500,000",
    priceAmount: 9500000,
    status: "Available for Purchase",
    image: "/artworks/other-5.jpg",
    featured: true,
  },
  {
    id: "gal-8",
    title: "The Astral Wanderer",
    artist: "Elena Vance",
    category: "Digital Mastery",
    description:
      "A solitary traveler standing atop alpine peaks beneath a sweeping purple-and-cyan cosmic nebula and meteor showers.",
    medium: "Giclée Fine Art Print",
    dimensions: "175.0 x 98.0 cm",
    year: "2023",
    edition: "Limited Edition (2 of 7)",
    price: "₦8,200,000",
    priceAmount: 8200000,
    status: "Available for Purchase",
    image: "/artworks/other-1.jpg",
  },
  {
    id: "gal-9",
    title: "Inverted Reverie",
    artist: "Maya Lin",
    category: "Surreal & Dreamscapes",
    description:
      "An upside-down floating citadel suspended among golden sunset clouds, with a lone swing hanging over eternity.",
    medium: "Digital Oil on Museum Paper",
    dimensions: "110.0 x 110.0 cm",
    year: "2024",
    edition: "Limited Edition (1 of 3)",
    price: "₦7,800,000",
    priceAmount: 7800000,
    status: "Available for Purchase",
    image: "/artworks/other-3.jpg",
  },
  {
    id: "gal-10",
    title: "Twilight Blossom",
    artist: "Amara Ndiaye",
    category: "Contemporary African",
    description:
      "A young girl surrounded by radiant bioluminescent flora, admiring the crescent moon across a tranquil sunset gradient.",
    medium: "Digital Mixed Media",
    dimensions: "140.0 x 105.0 cm",
    year: "2024",
    edition: "One-of-a-kind",
    price: "₦11,000,000",
    priceAmount: 11000000,
    status: "In Private Collection",
    image: "/artworks/other-4.jpg",
  },
  {
    id: "gal-11",
    title: "Canopy of Starlight",
    artist: "Kenji Sato",
    category: "Surreal & Dreamscapes",
    description:
      "A quiet soul watching shooting stars and glowing lanterns through a dense mystical woodland canopy in deep emerald and amber.",
    medium: "Digital Illustration on Linen",
    dimensions: "120.0 x 120.0 cm",
    year: "2023",
    edition: "Limited Edition (4 of 10)",
    price: "₦6,900,000",
    priceAmount: 6900000,
    status: "Available for Purchase",
    image: "/artworks/other-2.jpg",
  },
  {
    id: "gal-12",
    title: "Horizon of Glass",
    artist: "Lucia Morales",
    category: "Digital Mastery",
    description:
      "A reflective journey across an endless mirror sea mirroring pastel pink clouds and twinkling celestial constellations.",
    medium: "Archival Pigment Print",
    dimensions: "170.0 x 95.0 cm",
    year: "2024",
    edition: "Limited Edition (1 of 5)",
    price: "₦8,500,000",
    priceAmount: 8500000,
    status: "Available for Purchase",
    image: "/artworks/other-6.jpg",
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeArtwork, setActiveArtwork] = useState<GalleryArtwork | null>(null);

  const categories = [
    "All",
    "Curator's Works",
    "Contemporary African",
    "Surreal & Dreamscapes",
    "Digital Mastery",
  ];

  const filteredArtworks = useMemo(() => {
    return galleryArtworks.filter((art) => {
      const matchesCategory =
        selectedCategory === "All" || art.category === selectedCategory;
      const matchesStatus =
        selectedStatus === "All" || art.status === selectedStatus;
      const matchesSearch =
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.medium.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesStatus && matchesSearch;
    });
  }, [selectedCategory, selectedStatus, searchQuery]);

  return (
    <div className="relative min-h-screen bg-[#FCFCFC] dark:bg-[#09090B] flex flex-col text-neutral-900 dark:text-neutral-100 selection:bg-neutral-900 selection:text-white dark:selection:bg-neutral-100 dark:selection:text-neutral-950 transition-colors duration-300 overflow-x-hidden">
      {/* Background Fluid Topography Pattern */}
      <HeroSvgPattern />

      {/* Navbar with activeTab set to GALLERY */}
      <Navbar activeTab="GALLERY" />

      {/* ======================================================== */}
      {/* GALLERY HERO SECTION (With Cylindrical Showcase)         */}
      {/* ======================================================== */}
      <header className="relative z-10 w-full pt-10 sm:pt-14 pb-8 flex flex-col items-center text-center max-w-5xl mx-auto px-6">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-neutral-500 dark:text-neutral-400 mb-3 inline-block">
          PERMANENT & CURATED COLLECTIONS
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight uppercase text-neutral-950 dark:text-white mb-5 leading-tight">
          THE BOJOR ART COLLECTION
        </h1>

        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Curated with an art historian&apos;s eye by Professor Bojor Enamhe. Discover our
          permanent catalog featuring traditional African heritage, contemporary fine art, and
          ethereal digital realms, documented with rigorous museum specifications.
        </p>

        {/* Hero Cylindrical Panorama Triptych for Gallery */}
        <div className="relative w-full max-w-5xl h-[260px] sm:h-[340px] md:h-[400px] mb-12 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/80 dark:border-neutral-800">
          {/* Curved cyclorama mask */}
          <div className="absolute inset-0 grid grid-cols-3 gap-2 p-2 bg-neutral-900">
            <div className="relative h-full rounded-2xl overflow-hidden">
              <Image
                src="/artworks/curator-1.jpg"
                alt="Symphony of the Elders"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-serif text-white font-medium">Symphony of the Elders</span>
              </div>
            </div>
            <div className="relative h-full rounded-2xl overflow-hidden">
              <Image
                src="/artworks/curator-5.jpg"
                alt="Cosmic Ancestors"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-serif text-white font-medium">Cosmic Ancestors</span>
              </div>
            </div>
            <div className="relative h-full rounded-2xl overflow-hidden">
              <Image
                src="/suspended-dreams.jpg"
                alt="Suspended Dreams"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-serif text-white font-medium">Suspended Dreams</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="w-full flex flex-col items-center gap-5">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-neutral-200/80 dark:bg-neutral-900 border border-neutral-300/60 dark:border-neutral-800/80 shadow-inner">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm tracking-wide transition-all ${
                  selectedCategory === cat
                    ? "bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white font-semibold shadow-xs"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Secondary Controls: Search & Status Filter */}
          <div className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full flex-1">
              <input
                type="text"
                placeholder="Search by title, artist, or medium..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 rounded-full bg-white dark:bg-neutral-900 border border-neutral-300/80 dark:border-neutral-800 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 shadow-xs focus:outline-hidden focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-3 rounded-full bg-white dark:bg-neutral-900 border border-neutral-300/80 dark:border-neutral-800 text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200 shadow-xs focus:outline-hidden"
            >
              <option value="All">All Statuses</option>
              <option value="Available for Purchase">Available</option>
              <option value="In Private Collection">Private Collection</option>
            </select>
          </div>

          <span className="text-xs text-neutral-400 dark:text-neutral-500">
            Showing {filteredArtworks.length} of {galleryArtworks.length} artworks
          </span>
        </div>
      </header>

      {/* ======================================================== */}
      {/* ARTWORKS CATALOG GRID - 2-Column Spec Layout Cards       */}
      {/* ======================================================== */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 pb-28 flex flex-col gap-16 sm:gap-20">
        {filteredArtworks.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-xl font-serif font-bold text-neutral-400 mb-2">No artworks found</h3>
            <p className="text-sm text-neutral-500 mb-6">
              Try adjusting your search query or switching the category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedStatus("All");
                setSearchQuery("");
              }}
              className="px-6 py-2.5 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-xs font-semibold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-start">
            {filteredArtworks.map((art) => (
              <article
                key={art.id}
                className="group flex flex-col rounded-3xl sm:rounded-[32px] overflow-hidden bg-white dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-neutral-800/80 shadow-md hover:shadow-2xl transition-all duration-300 p-6 sm:p-8"
              >
                {/* Artwork Primary Image with Hover Zoom */}
                <div
                  onClick={() => setActiveArtwork(art)}
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-950 cursor-zoom-in mb-6 border border-neutral-200/60 dark:border-neutral-800"
                >
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-black/60 text-white backdrop-blur-md border border-white/15">
                      {art.category}
                    </span>
                  </div>

                  {/* High-res View button indicator on hover */}
                  <div className="absolute bottom-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-medium bg-black/60 text-white backdrop-blur-md border border-white/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                    <span>Inspect</span>
                  </div>
                </div>

                {/* Artist and Title */}
                <div className="flex flex-col mb-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-1">
                    <span>Artist</span>
                    <span>•</span>
                    <span className="text-neutral-900 dark:text-neutral-200 font-bold">
                      {art.artist}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-950 dark:text-white leading-tight">
                    {art.title}
                  </h3>
                </div>

                {/* Description / Statement */}
                <p className="text-xs sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 font-normal mb-6 line-clamp-3">
                  {art.description}
                </p>

                {/* 2x2 Specs Grid Matching Featured Artwork */}
                <div className="grid grid-cols-2 gap-3 mb-6 select-text">
                  {/* Medium */}
                  <div className="p-3.5 rounded-xl bg-neutral-100/70 dark:bg-neutral-800/50 border border-neutral-200/60 dark:border-neutral-800 text-xs">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1">
                      Medium
                    </span>
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100 truncate block">
                      {art.medium}
                    </span>
                  </div>

                  {/* Dimensions */}
                  <div className="p-3.5 rounded-xl bg-neutral-100/70 dark:bg-neutral-800/50 border border-neutral-200/60 dark:border-neutral-800 text-xs">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1">
                      Dimensions
                    </span>
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100 truncate block">
                      {art.dimensions}
                    </span>
                  </div>

                  {/* Year */}
                  <div className="p-3.5 rounded-xl bg-neutral-100/70 dark:bg-neutral-800/50 border border-neutral-200/60 dark:border-neutral-800 text-xs">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1">
                      Year Created
                    </span>
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100 truncate block">
                      {art.year}
                    </span>
                  </div>

                  {/* Edition */}
                  <div className="p-3.5 rounded-xl bg-neutral-100/70 dark:bg-neutral-800/50 border border-neutral-200/60 dark:border-neutral-800 text-xs">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1">
                      Edition
                    </span>
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100 truncate block">
                      {art.edition}
                    </span>
                  </div>
                </div>

                {/* Price and Availability Row */}
                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                      Artwork Price
                    </span>
                    <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-white">
                      {art.price}
                    </span>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold ${
                      art.status === "Available for Purchase"
                        ? "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30"
                        : "bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                    }`}
                  >
                    {art.status === "Available for Purchase" && (
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    )}
                    {art.status}
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* ======================================================== */}
      {/* FULL HIGH-RES LIGHTBOX MODAL                             */}
      {/* ======================================================== */}
      {activeArtwork && (
        <div
          onClick={() => setActiveArtwork(null)}
          className="fixed inset-0 z-60 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-lg animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-neutral-950 text-white border border-neutral-800 shadow-2xl p-6 sm:p-8 flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveArtwork(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-colors z-20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black mb-6">
              <Image
                src={activeArtwork.image}
                alt={activeArtwork.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="flex flex-col select-text">
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-1">
                {activeArtwork.artist}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                {activeArtwork.title}
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                {activeArtwork.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs mb-6">
                <div>
                  <span className="text-neutral-400 block font-semibold uppercase text-[10px]">Medium</span>
                  <span className="font-medium text-white">{activeArtwork.medium}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block font-semibold uppercase text-[10px]">Dimensions</span>
                  <span className="font-medium text-white">{activeArtwork.dimensions}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block font-semibold uppercase text-[10px]">Year</span>
                  <span className="font-medium text-white">{activeArtwork.year}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block font-semibold uppercase text-[10px]">Price</span>
                  <span className="font-bold text-white text-sm">{activeArtwork.price}</span>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setActiveArtwork(null)}
                  className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}
