"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Artwork {
  id: string;
  title: string;
  artist: string;
  description: string;
  category?: string;
  image: string;
  colSpan?: string;
  heightClass?: string;
  aspectClass?: string;
}

interface ColumnGroup {
  type: "single" | "stacked";
  width: string; // Tailwind width class e.g. w-[240px] md:w-[280px]
  items: Artwork[];
}

const curatorArtworks: ColumnGroup[] = [
  {
    type: "single",
    width: "w-[240px] sm:w-[260px] md:w-[290px]",
    items: [
      {
        id: "c-1",
        title: "Symphony of the Elders",
        artist: "Prof. Bojor Enamhe",
        description:
          "A celebration of cultural heritage and ceremonial royalty, exploring timeless African iconography through rich ochre and indigo pigments.",
        category: "African Contemporary",
        image: "/artworks/curator-1.jpg",
        heightClass: "h-[440px] sm:h-[480px] md:h-[540px]",
      },
    ],
  },
  {
    type: "stacked",
    width: "w-[250px] sm:w-[270px] md:w-[300px]",
    items: [
      {
        id: "c-2",
        title: "Ancestral Geometries",
        artist: "Prof. Bojor Enamhe",
        description:
          "Intricate textured forms interwoven with gold leaf, reflecting sacred masks and ancient African architectural patterns.",
        category: "Mixed Media",
        image: "/artworks/curator-2.jpg",
        heightClass: "h-[212px] sm:h-[232px] md:h-[262px]",
      },
      {
        id: "c-3",
        title: "Moonlit Rituals",
        artist: "Prof. Bojor Enamhe",
        description:
          "Dynamic impasto strokes portraying the energy of communal night dances beneath the radiant full moon.",
        category: "Oil on Canvas",
        image: "/artworks/curator-3.jpg",
        heightClass: "h-[212px] sm:h-[232px] md:h-[262px]",
      },
    ],
  },
  {
    type: "single",
    width: "w-[260px] sm:w-[280px] md:w-[320px]",
    items: [
      {
        id: "c-4",
        title: "The Queen Mother",
        artist: "Prof. Bojor Enamhe",
        description:
          "A regal portrait honoring matriarchal dignity, adorned with a sculpted golden crown set against deep lapis lazuli.",
        category: "Portraiture",
        image: "/artworks/curator-4.jpg",
        heightClass: "h-[440px] sm:h-[480px] md:h-[540px]",
      },
    ],
  },
  {
    type: "single",
    width: "w-[300px] sm:w-[340px] md:w-[380px]",
    items: [
      {
        id: "c-5",
        title: "Cosmic Ancestors",
        artist: "Prof. Bojor Enamhe",
        description:
          "Celestial bronze figures ascending into a nebula of myth and starlight, embodying the bridge between ancestral roots and eternity.",
        category: "Research Artistry",
        image: "/artworks/curator-5.jpg",
        heightClass: "h-[440px] sm:h-[480px] md:h-[540px]",
      },
    ],
  },
  {
    type: "single",
    width: "w-[240px] sm:w-[260px] md:w-[290px]",
    items: [
      {
        id: "c-6",
        title: "Echoes of Calabar",
        artist: "Prof. Bojor Enamhe",
        description:
          "A lyrical homage to Cross River artistic traditions, blending sculptural memory with modern research artistry.",
        category: "Cultural Heritage",
        image: "/artworks/curator-1.jpg",
        heightClass: "h-[440px] sm:h-[480px] md:h-[540px]",
      },
    ],
  },
];

const otherArtworks: ColumnGroup[] = [
  {
    type: "single",
    width: "w-[240px] sm:w-[260px] md:w-[290px]",
    items: [
      {
        id: "o-1",
        title: "The Astral Wanderer",
        artist: "Elena Vance",
        description:
          "A solitary traveler standing atop alpine peaks beneath a sweeping purple-and-cyan cosmic nebula and meteor showers.",
        category: "Digital Concept Art",
        image: "/artworks/other-1.jpg",
        heightClass: "h-[440px] sm:h-[480px] md:h-[540px]",
      },
    ],
  },
  {
    type: "stacked",
    width: "w-[250px] sm:w-[270px] md:w-[300px]",
    items: [
      {
        id: "o-2",
        title: "Canopy of Starlight",
        artist: "Kenji Sato",
        description:
          "A quiet soul watching shooting stars and glowing lanterns through a dense mystical woodland canopy.",
        category: "Whimsical Illustration",
        image: "/artworks/other-2.jpg",
        heightClass: "h-[212px] sm:h-[232px] md:h-[262px]",
      },
      {
        id: "o-3",
        title: "Inverted Reverie",
        artist: "Maya Lin",
        description:
          "An upside-down floating citadel suspended among glowing sunset clouds, with a lone swing hanging over eternity.",
        category: "Surrealism",
        image: "/artworks/other-3.jpg",
        heightClass: "h-[212px] sm:h-[232px] md:h-[262px]",
      },
    ],
  },
  {
    type: "single",
    width: "w-[260px] sm:w-[280px] md:w-[320px]",
    items: [
      {
        id: "o-4",
        title: "Twilight Blossom",
        artist: "Amara Ndiaye",
        description:
          "A girl surrounded by radiant bioluminescent flora, admiring the crescent moon across a tranquil sunset gradient.",
        category: "Contemporary Digital",
        image: "/artworks/other-4.jpg",
        heightClass: "h-[440px] sm:h-[480px] md:h-[540px]",
      },
    ],
  },
  {
    type: "single",
    width: "w-[300px] sm:w-[340px] md:w-[380px]",
    items: [
      {
        id: "o-5",
        title: "Cat Cloud Fantasy",
        artist: "Sora Takahashi",
        description:
          "A colossal, fluffy pink feline spirit slumbering gently above mountain valleys and winding rivers in the twilight sky.",
        category: "Fantasy Dreamscape",
        image: "/artworks/other-5.jpg",
        heightClass: "h-[440px] sm:h-[480px] md:h-[540px]",
      },
    ],
  },
  {
    type: "single",
    width: "w-[240px] sm:w-[260px] md:w-[290px]",
    items: [
      {
        id: "o-6",
        title: "Horizon of Glass",
        artist: "Lucia Morales",
        description:
          "A quiet journey across an endless mirror sea reflecting pastel pink clouds and twinkling constellations.",
        category: "Atmospheric Impressionism",
        image: "/artworks/other-6.jpg",
        heightClass: "h-[440px] sm:h-[480px] md:h-[540px]",
      },
    ],
  },
];

export default function OtherArtworkSection() {
  const [activeTab, setActiveTab] = useState<"curator" | "others">("curator");
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const activeColumns = activeTab === "curator" ? curatorArtworks : otherArtworks;

  // Auto-motion on mobile & desktop with pause on interaction
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 0.55; // Smooth slow drift pixels per frame

    const autoScroll = () => {
      if (!isPaused && container) {
        // If we reach near the end of scrollable area, seamlessly loop back
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (maxScroll > 10) {
          if (container.scrollLeft >= maxScroll - 2) {
            container.scrollLeft = 0;
          } else {
            container.scrollLeft += speed;
          }
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused, activeTab]);

  const handleManualScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 360;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleTouchCard = (id: string) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="other-artworks"
      className="relative w-full py-20 md:py-28 bg-[#FAFAFA] dark:bg-[#070709] border-t border-neutral-200/70 dark:border-neutral-800/80 transition-colors duration-300 overflow-hidden"
    >
      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 md:mb-14">
        <p className="text-xs uppercase tracking-[0.28em] font-semibold text-neutral-500 dark:text-neutral-400 mb-2.5">
          RELATED ARTWORKS
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight text-neutral-900 dark:text-neutral-50 uppercase mb-4">
          OTHER ARTWORK
        </h2>

        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-8">
          Bojor Gallery is here to guide you on your journey of art discovery. Explore
          distinguished masterworks curated across contemporary, traditional, and visionary
          expressions.
        </p>

        {/* Segmented Pill Filter Controls */}
        <div className="inline-flex items-center p-1.5 rounded-full bg-neutral-200/70 dark:bg-neutral-900 border border-neutral-300/60 dark:border-neutral-800/80 shadow-inner">
          <button
            onClick={() => {
              setActiveTab("curator");
              setActiveCardId(null);
            }}
            className={`px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm tracking-wide transition-all duration-300 ${
              activeTab === "curator"
                ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 font-medium shadow-sm"
                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
            }`}
          >
            By the Curator
          </button>

          <button
            onClick={() => {
              setActiveTab("others");
              setActiveCardId(null);
            }}
            className={`px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm tracking-wide transition-all duration-300 ${
              activeTab === "others"
                ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 font-medium shadow-sm"
                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
            }`}
          >
            Others
          </button>
        </div>
      </div>

      {/* Interactive Carousel & Collage Gallery Container */}
      <div
        className="relative w-full px-2 sm:px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => {
          // Resume slow motion after a brief delay
          setTimeout(() => setIsPaused(false), 2000);
        }}
      >
        {/* Navigation Arrows for Quick Scrolling */}
        <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-4 z-20">
          <button
            onClick={() => handleManualScroll("left")}
            aria-label="Previous artworks"
            className="w-11 h-11 rounded-full bg-white/90 dark:bg-neutral-900/90 text-neutral-800 dark:text-neutral-200 shadow-lg backdrop-blur-md flex items-center justify-center border border-neutral-200/80 dark:border-neutral-800 hover:scale-105 active:scale-95 transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-4 z-20">
          <button
            onClick={() => handleManualScroll("right")}
            aria-label="Next artworks"
            className="w-11 h-11 rounded-full bg-white/90 dark:bg-neutral-900/90 text-neutral-800 dark:text-neutral-200 shadow-lg backdrop-blur-md flex items-center justify-center border border-neutral-200/80 dark:border-neutral-800 hover:scale-105 active:scale-95 transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Horizontally Moving Collage Track */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-3 sm:gap-4 md:gap-5 overflow-x-auto scrollbar-none py-4 px-3 sm:px-6 cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Main set of columns */}
          {activeColumns.map((col, colIdx) => (
            <div
              key={`col-${activeTab}-${colIdx}`}
              className={`flex-shrink-0 ${col.width}`}
            >
              {col.type === "single" ? (
                // Single Tall Card
                col.items.map((art) => (
                  <ArtworkCard
                    key={art.id}
                    artwork={art}
                    isActive={activeCardId === art.id}
                    onCardClick={() => handleTouchCard(art.id)}
                  />
                ))
              ) : (
                // Stacked Pair of Cards
                <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                  {col.items.map((art) => (
                    <ArtworkCard
                      key={art.id}
                      artwork={art}
                      isActive={activeCardId === art.id}
                      onCardClick={() => handleTouchCard(art.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Seamless duplicate set to allow infinite fluid drifting on wide screens and mobile */}
          {activeColumns.map((col, colIdx) => (
            <div
              key={`col-dup-${activeTab}-${colIdx}`}
              className={`flex-shrink-0 ${col.width}`}
              aria-hidden="true"
            >
              {col.type === "single" ? (
                col.items.map((art) => (
                  <ArtworkCard
                    key={`dup-${art.id}`}
                    artwork={art}
                    isActive={activeCardId === `dup-${art.id}`}
                    onCardClick={() => handleTouchCard(`dup-${art.id}`)}
                  />
                ))
              ) : (
                <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                  {col.items.map((art) => (
                    <ArtworkCard
                      key={`dup-${art.id}`}
                      artwork={art}
                      isActive={activeCardId === `dup-${art.id}`}
                      onCardClick={() => handleTouchCard(`dup-${art.id}`)}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile helper indicator */}
        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-neutral-400 dark:text-neutral-500 sm:hidden">
          <svg
            className="w-4 h-4 animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
          <span>Swipe or tap to view details • Continuously moving</span>
        </div>
      </div>
    </section>
  );
}

function ArtworkCard({
  artwork,
  isActive,
  onCardClick,
}: {
  artwork: Artwork;
  isActive: boolean;
  onCardClick: () => void;
}) {
  return (
    <div
      onClick={onCardClick}
      className={`group relative w-full ${
        artwork.heightClass || "h-[440px]"
      } rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-md transition-all duration-300 hover:shadow-xl`}
    >
      {/* Art Image with subtle zoom on hover */}
      <Image
        src={artwork.image}
        alt={artwork.title}
        fill
        sizes="(max-width: 768px) 80vw, 400px"
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        priority={artwork.id === "c-1" || artwork.id === "o-5"}
      />

      {/* Subtle Always-Present Gradient for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-40 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />

      {/* Interactive Reveal Overlay (Title + Description on Hover & Touch Active) */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-transparent flex flex-col justify-end p-5 sm:p-6 text-white transition-all duration-300 ${
          isActive
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
        }`}
      >
        <div className="transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
          {artwork.category && (
            <span className="inline-block text-[10px] sm:text-xs uppercase tracking-widest text-neutral-300 font-medium mb-1.5 bg-white/15 backdrop-blur-md px-2.5 py-0.5 rounded-full">
              {artwork.category}
            </span>
          )}

          <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-medium leading-snug text-white drop-shadow-sm">
            {artwork.title}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-200/90 leading-relaxed line-clamp-3 mt-1.5 drop-shadow">
            {artwork.description}
          </p>

          <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/20 text-[11px] sm:text-xs text-neutral-300">
            <span className="truncate">{artwork.artist}</span>
            <span className="inline-flex items-center gap-1 text-white font-medium hover:underline">
              View Piece
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Floating Hover Pointer Indicator Icon (matching the hand cursor in user's reference image!) */}
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
          />
        </svg>
      </div>
    </div>
  );
}
