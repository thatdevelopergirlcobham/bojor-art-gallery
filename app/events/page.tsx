"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import HeroSvgPattern from "@/components/HeroSvgPattern";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  type: "Physical" | "Online" | "Hybrid";
  shortDescription: string;
  fullDescription: string;
  speaker: {
    name: string;
    role: string;
    avatar?: string;
  };
  price: string;
  priceAmount: number; // 0 for free
  spotsRemaining: number;
  totalCapacity: number;
  coverImage: string;
  whatIsIncluded?: string;
}

interface PastEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  shortTheme: string;
  fullRecap: string;
  attendance: string;
  featuredSpeakers: string[];
  relatedExhibition?: string;
  coverImage: string;
  photoGallery: string[];
}

const upcomingEventsData: UpcomingEvent[] = [
  {
    id: "evt-1",
    title: "Calabar Contemporary: Curatorial Walkthrough & Dialogues",
    date: "October 18, 2026",
    time: "4:00 PM – 6:30 PM WAT",
    duration: "2.5 hours",
    location: "Main Atrium, Bojor Art Gallery, Calabar",
    type: "Physical",
    shortDescription:
      "An intimate in-person gallery walkthrough and critical dialogue exploring myth, media, and regional artistic mobility.",
    fullDescription:
      "Join Professor Bojor Enamhe for a comprehensive private tour through Bojor Gallery's new autumn installations. The walkthrough dissects how contemporary Cross River and southern Nigerian artists engage ancient folklore through experimental mixed media, acrylic impasto, and bronze casting. Attendees will have direct dialogue opportunities with the curator and exhibiting artists.",
    speaker: {
      name: "Prof. Bojor Enamhe",
      role: "Professor of Art History & Curator",
    },
    price: "Free",
    priceAmount: 0,
    spotsRemaining: 14,
    totalCapacity: 45,
    coverImage: "/artworks/curator-1.jpg",
    whatIsIncluded: "Complimentary exhibition brochure and curator-guided tour.",
  },
  {
    id: "evt-2",
    title: "Symposium on Digital Art Traditions in Contemporary Africa",
    date: "November 5, 2026",
    time: "2:00 PM – 5:30 PM WAT",
    duration: "3.5 hours",
    location: "Auditorium & Zoom Global Livestream",
    type: "Hybrid",
    shortDescription:
      "Examining the rise of digital tools and generative mediums alongside classical African material traditions.",
    fullDescription:
      "A flagship scholarly symposium convened by Bojor Art Gallery bringing together digital art practitioners, art historians, and cultural theorists. Panels explore blockchain provenance, virtual reality curation, and how West African aesthetics are reimagined in the metaverse without severing ancestral spiritual lineage.",
    speaker: {
      name: "Prof. Bojor Enamhe & Guest Panelists",
      role: "Keynote Speakers & Curators",
    },
    price: "₦5,000",
    priceAmount: 5000,
    spotsRemaining: 28,
    totalCapacity: 120,
    coverImage: "/artworks/curator-5.jpg",
    whatIsIncluded: "Symposium digital access, proceedings monograph, and post-session Q&A recording.",
  },
  {
    id: "evt-3",
    title: "Pigments & Ancestral Memory: Masterclass on Acrylic Impasto",
    date: "November 22, 2026",
    time: "11:00 AM – 3:00 PM WAT",
    duration: "4 hours",
    location: "Studio 3, Bojor Art Gallery, Calabar",
    type: "Physical",
    shortDescription:
      "Hands-on studio masterclass uncovering textured acrylic layering, dynamic light-shadow contrast, and dreamscape composition.",
    fullDescription:
      "An immersive technical workshop led by featured artist Ekaterina Petrova. Participants will learn multi-layered brushwork, charcoal integration, impasto sculpting, and color harmony techniques inspired by the masterpiece 'Suspended Dreams'. Suitable for intermediate to practicing fine artists.",
    speaker: {
      name: "Ekaterina Petrova",
      role: "Featured Master Artist",
    },
    price: "₦15,000",
    priceAmount: 15000,
    spotsRemaining: 6,
    totalCapacity: 16,
    coverImage: "/suspended-dreams.jpg",
    whatIsIncluded: "All art materials (easel, canvas, professional pigments, brushes) plus afternoon wine and refreshments.",
  },
  {
    id: "evt-4",
    title: "Art Incubator Calabar: Emerging Voices Collector Vernissage",
    date: "December 12, 2026",
    time: "6:00 PM – 9:00 PM WAT",
    duration: "3 hours",
    location: "Bojor Art Gallery Sculpture Courtyard",
    type: "Physical",
    shortDescription:
      "Exclusive private collector preview unveiling debut acquisitions and mixed-media sculptures from emerging southern Nigerian artists.",
    fullDescription:
      "Organized by Art Incubator Calabar (founded by Prof. Bojor Enamhe in 2017), this evening highlights the next generation of Nigerian sculptors, painters, and fiber artists. Collectors and patrons enjoy early acquisition rights prior to public opening.",
    speaker: {
      name: "Art Incubator Curatorial Board",
      role: "Curators & Mentors",
    },
    price: "Free",
    priceAmount: 0,
    spotsRemaining: 8,
    totalCapacity: 60,
    coverImage: "/artworks/curator-4.jpg",
    whatIsIncluded: "Champagne reception, collector preview catalog, and priority acquisition access.",
  },
];

const pastEventsData: PastEvent[] = [
  {
    id: "past-1",
    title: "Inaugural Curatorial Vernissage: Foundations of Bojor Art",
    date: "August 14, 2025",
    location: "Bojor Art Gallery, Calabar",
    shortTheme: "Celebrating cross-generational traditions of African fine art.",
    fullRecap:
      "The landmark formal opening of Bojor Art Gallery brought together over 280 scholars, museum directors, collectors, and artists from across Nigeria and abroad. Professor Bojor Enamhe delivered the opening address outlining the gallery's founding charter: maintaining parity between classical indigenous heritage and vanguard digital forms.",
    attendance: "284 attendees",
    featuredSpeakers: ["Prof. Bojor Enamhe", "Dr. Bassey Henshaw", "Chief Emmanuel Efiom"],
    relatedExhibition: "Foundational Traditions: A Calabar Retrospective",
    coverImage: "/artworks/curator-2.jpg",
    photoGallery: [
      "/artworks/curator-1.jpg",
      "/artworks/curator-2.jpg",
      "/artworks/curator-3.jpg",
      "/artworks/curator-4.jpg",
    ],
  },
  {
    id: "past-2",
    title: "Cross River Art Incubator 2024 Showcase",
    date: "December 6, 2024",
    location: "Art Incubator Calabar Hall",
    shortTheme: "Eighteen emerging artists presenting groundbreaking ceramic, digital, and textile works.",
    fullRecap:
      "A vibrant 3-day showcase displaying 54 original artworks by young talents mentored through the Art Incubator initiative. Over 18 artworks found permanent homes in private and university collections, establishing vital career mobility for participants.",
    attendance: "195 attendees",
    featuredSpeakers: ["Prof. Bojor Enamhe", "Ngozi Obi", "Tariq Adeleke"],
    relatedExhibition: "Incubator Series: Volume VII",
    coverImage: "/artworks/curator-3.jpg",
    photoGallery: [
      "/artworks/curator-3.jpg",
      "/artworks/curator-5.jpg",
      "/artworks/other-4.jpg",
      "/artworks/other-2.jpg",
    ],
  },
  {
    id: "past-3",
    title: "Celestial Visions: International Dreamscapes Exhibition",
    date: "April 20, 2025",
    location: "Main Gallery Pavilion & Online Virtual Tour",
    shortTheme: "A collaborative showcase uniting atmospheric fantasy illustrations and ethereal digital canvases.",
    fullRecap:
      "Exploring cosmic allegories and surrealism, this exhibition drew record digital visitation and enthusiastic local patronage. Visitors experienced expansive panoramic sky murals and twilight installations in immersive gallery lighting.",
    attendance: "320 physical attendees • 1,400+ online viewers",
    featuredSpeakers: ["Sora Takahashi (Virtual)", "Ekaterina Petrova", "Prof. Bojor Enamhe"],
    relatedExhibition: "Atmospheric Realms: Sky, Myth & Starlight",
    coverImage: "/artworks/other-5.jpg",
    photoGallery: [
      "/artworks/other-5.jpg",
      "/artworks/other-1.jpg",
      "/artworks/other-3.jpg",
      "/artworks/other-6.jpg",
    ],
  },
];

export default function EventsPage() {
  const [activeSection, setActiveSection] = useState<"all" | "upcoming" | "past">("all");

  // State for upcoming event registration modal
  const [selectedUpcomingEvent, setSelectedUpcomingEvent] = useState<UpcomingEvent | null>(null);
  const [regStep, setRegStep] = useState<"details" | "checkout" | "confirmed">("details");
  const [regForm, setRegForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cardNumber: "5399 8210 4492 1109",
    expiry: "09/28",
    cvv: "821",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketRef, setTicketRef] = useState("");

  // State for past event detail & photo lightbox modal
  const [selectedPastEvent, setSelectedPastEvent] = useState<PastEvent | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const openUpcomingModal = (evt: UpcomingEvent) => {
    setSelectedUpcomingEvent(evt);
    setRegStep("details");
    setIsSubmitting(false);
  };

  const handleStartRegistration = () => {
    if (!selectedUpcomingEvent) return;
    if (selectedUpcomingEvent.priceAmount > 0) {
      setRegStep("checkout");
    } else {
      // Free event
      submitRegistration();
    }
  };

  const submitRegistration = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedTicket = `BAG-EVT-${Math.floor(1000 + Math.random() * 9000)}-${
        selectedUpcomingEvent?.type === "Online" ? "ONL" : "CAL"
      }`;
      setTicketRef(generatedTicket);
      setRegStep("confirmed");
    }, 700);
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FCFCFC] dark:bg-[#09090B] flex flex-col text-neutral-900 dark:text-neutral-100 selection:bg-neutral-900 selection:text-white dark:selection:bg-neutral-100 dark:selection:text-neutral-950 transition-colors duration-300 overflow-x-hidden">
      {/* Background Fluid Topography Pattern */}
      <HeroSvgPattern />

      {/* Navbar with activeTab set to EVENTS */}
      <Navbar activeTab="EVENTS" />

      {/* Hero Header for Events */}
      <header className="relative z-10 w-full pt-12 sm:pt-16 pb-12 text-center max-w-5xl mx-auto px-6">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-neutral-500 dark:text-neutral-400 mb-3 inline-block">
          EXHIBITIONS & GATHERINGS
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight uppercase text-neutral-950 dark:text-white mb-5 leading-tight">
          BOJOR GALLERY EVENTS
        </h1>

        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-8">
          Participate in curated gallery walkthroughs, academic symposiums by Prof. Bojor
          Enamhe, hands-on masterclasses, and private vernissages bridging classical African heritage
          with vanguard contemporary practices.
        </p>

        {/* Section Filter Pill Switcher */}
        <div className="inline-flex items-center p-1.5 rounded-full bg-neutral-200/80 dark:bg-neutral-900 border border-neutral-300/60 dark:border-neutral-800/80 shadow-inner">
          <button
            onClick={() => setActiveSection("all")}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm tracking-wide transition-all ${
              activeSection === "all"
                ? "bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white font-semibold shadow-xs"
                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
            }`}
          >
            All Events
          </button>
          <button
            onClick={() => setActiveSection("upcoming")}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm tracking-wide transition-all ${
              activeSection === "upcoming"
                ? "bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white font-semibold shadow-xs"
                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
            }`}
          >
            Upcoming Events
          </button>
          <button
            onClick={() => setActiveSection("past")}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm tracking-wide transition-all ${
              activeSection === "past"
                ? "bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white font-semibold shadow-xs"
                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
            }`}
          >
            Our Events (Archive)
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-24 flex flex-col gap-24">
        {/* ======================================================== */}
        {/* SECTION 1: UPCOMING EVENTS (Future with Direct Registration) */}
        {/* ======================================================== */}
        {(activeSection === "all" || activeSection === "upcoming") && (
          <section id="upcoming" className="flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-neutral-200 dark:border-neutral-800/80 gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-neutral-400 dark:text-neutral-500 block mb-1">
                  FUTURE EXHIBITIONS & WORKSHOPS
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold uppercase tracking-tight text-neutral-950 dark:text-white">
                  UPCOMING EVENTS
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-md">
                Reserve your spot early. Direct online registration is available for all scheduled
                public, private, and hybrid gallery events.
              </p>
            </div>

            {/* Upcoming Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {upcomingEventsData.map((evt) => (
                <article
                  key={evt.id}
                  className="group flex flex-col rounded-3xl overflow-hidden bg-white dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Event Cover Image with Tags */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-neutral-900">
                    <Image
                      src={evt.coverImage}
                      alt={evt.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                    {/* Price Tag & Location Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/90 dark:bg-neutral-950/90 text-neutral-950 dark:text-white backdrop-blur-md shadow-xs">
                        {evt.price}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-black/50 text-white backdrop-blur-md border border-white/15">
                        {evt.type}
                      </span>
                    </div>

                    {/* Spots Remaining Counter (Urgency) */}
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        {evt.spotsRemaining} spots left
                      </span>
                    </div>
                  </div>

                  {/* Event Content Details */}
                  <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Date & Time */}
                      <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-2.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.75}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{evt.date}</span>
                        <span>•</span>
                        <span>{evt.time}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-neutral-950 dark:text-white leading-snug mb-2.5 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
                        {evt.title}
                      </h3>

                      {/* Location */}
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.75}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="truncate">{evt.location}</span>
                      </p>

                      {/* Short Description */}
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-2 mb-6">
                        {evt.shortDescription}
                      </p>
                    </div>

                    {/* Footer Row: Speaker & Register Button */}
                    <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-4">
                      <div className="flex flex-col min-w-0">
                        <span className="text-[10px] uppercase font-semibold text-neutral-400 dark:text-neutral-500 tracking-wider">
                          Host / Speaker
                        </span>
                        <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-200 truncate">
                          {evt.speaker.name}
                        </span>
                      </div>

                      <button
                        onClick={() => openUpcomingModal(evt)}
                        className="px-6 py-2.5 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-xs font-semibold tracking-wider uppercase hover:bg-neutral-800 dark:hover:bg-neutral-100 active:scale-95 transition-all shadow-xs"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* SECTION 2: OUR EVENTS (Past Events Archive & Detail View) */}
        {/* ======================================================== */}
        {(activeSection === "all" || activeSection === "past") && (
          <section id="past-events" className="flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-neutral-200 dark:border-neutral-800/80 gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-neutral-400 dark:text-neutral-500 block mb-1">
                  HISTORICAL ARCHIVE & RECAPS
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold uppercase tracking-tight text-neutral-950 dark:text-white">
                  OUR EVENTS
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-md">
                Relive past gallery milestones, scholar symposia, and Art Incubator Calabar
                gatherings through exhibition recaps and photo galleries.
              </p>
            </div>

            {/* Past Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pastEventsData.map((evt) => (
                <article
                  key={evt.id}
                  className="group flex flex-col rounded-3xl overflow-hidden bg-white dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-900">
                    <Image
                      src={evt.coverImage}
                      alt={evt.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-black/60 text-white backdrop-blur-md border border-white/15">
                      {evt.date}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-neutral-950 dark:text-white leading-snug mb-2">
                        {evt.title}
                      </h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">
                        {evt.location}
                      </p>
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3 leading-relaxed mb-6">
                        {evt.shortTheme}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedPastEvent(evt)}
                      className="w-full py-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2"
                    >
                      <span>View Details</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* ======================================================== */}
      {/* MODAL 1: UPCOMING EVENT DETAIL & REGISTRATION FLOW       */}
      {/* ======================================================== */}
      {selectedUpcomingEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in">
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#101014] text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedUpcomingEvent(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* STEP 1: EVENT DETAILS */}
            {regStep === "details" && (
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                    {selectedUpcomingEvent.type}
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {selectedUpcomingEvent.spotsRemaining} spots left of {selectedUpcomingEvent.totalCapacity}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-950 dark:text-white mb-4">
                  {selectedUpcomingEvent.title}
                </h2>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/80 mb-6 text-xs">
                  <div>
                    <span className="text-neutral-400 dark:text-neutral-500 block uppercase tracking-wider font-semibold">
                      Date & Time
                    </span>
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                      {selectedUpcomingEvent.date}
                    </span>
                    <span className="text-neutral-500 block">{selectedUpcomingEvent.time}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 dark:text-neutral-500 block uppercase tracking-wider font-semibold">
                      Venue / Access
                    </span>
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                      {selectedUpcomingEvent.location}
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-400 dark:text-neutral-500 block uppercase tracking-wider font-semibold">
                      Admission
                    </span>
                    <span className="font-bold text-neutral-900 dark:text-white text-sm">
                      {selectedUpcomingEvent.price}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
                    About This Event
                  </h4>
                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                    {selectedUpcomingEvent.fullDescription}
                  </p>
                </div>

                {selectedUpcomingEvent.whatIsIncluded && (
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 text-xs mb-6">
                    <span className="font-bold block mb-1">What&apos;s Included:</span>
                    {selectedUpcomingEvent.whatIsIncluded}
                  </div>
                )}

                {/* Registration Form Inputs */}
                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-col gap-4">
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
                    Attendee Registration
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      value={regForm.firstName}
                      onChange={(e) => setRegForm({ ...regForm, firstName: e.target.value })}
                      className="px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      value={regForm.lastName}
                      onChange={(e) => setRegForm({ ...regForm, lastName: e.target.value })}
                      className="px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={regForm.email}
                      onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                      className="px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-sm"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number (Optional)"
                      value={regForm.phone}
                      onChange={(e) => setRegForm({ ...regForm, phone: e.target.value })}
                      className="px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-sm"
                    />
                  </div>

                  <button
                    onClick={handleStartRegistration}
                    disabled={isSubmitting || !regForm.firstName || !regForm.email}
                    className="mt-3 w-full py-3.5 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-neutral-800 dark:hover:bg-neutral-100 active:scale-95 transition-all shadow-md disabled:opacity-50"
                  >
                    {selectedUpcomingEvent.priceAmount > 0
                      ? `Proceed to Payment (${selectedUpcomingEvent.price})`
                      : "Confirm Free RSVP"}
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: CHECKOUT (FOR PAID EVENTS) */}
            {regStep === "checkout" && (
              <div className="flex flex-col">
                <button
                  onClick={() => setRegStep("details")}
                  className="text-xs font-semibold text-neutral-500 hover:text-neutral-900 dark:hover:text-white mb-4 flex items-center gap-1"
                >
                  &larr; Back to Details
                </button>

                <h3 className="text-xl sm:text-2xl font-serif font-bold mb-1">
                  Secure Checkout
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">
                  {selectedUpcomingEvent.title} • {selectedUpcomingEvent.date}
                </p>

                <div className="p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900 mb-6 flex items-center justify-between">
                  <span className="text-sm font-semibold">Total Amount Due</span>
                  <span className="text-xl font-bold text-neutral-950 dark:text-white">
                    {selectedUpcomingEvent.price}
                  </span>
                </div>

                <div className="flex flex-col gap-3 mb-6">
                  <label className="text-xs font-semibold uppercase text-neutral-400">Card Information</label>
                  <input
                    type="text"
                    value={regForm.cardNumber}
                    onChange={(e) => setRegForm({ ...regForm, cardNumber: e.target.value })}
                    className="px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-sm font-mono"
                    placeholder="Card Number"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={regForm.expiry}
                      onChange={(e) => setRegForm({ ...regForm, expiry: e.target.value })}
                      className="px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-sm font-mono"
                      placeholder="MM/YY"
                    />
                    <input
                      type="text"
                      value={regForm.cvv}
                      onChange={(e) => setRegForm({ ...regForm, cvv: e.target.value })}
                      className="px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-sm font-mono"
                      placeholder="CVV"
                    />
                  </div>
                </div>

                {/* Refund & Cancellation Policy */}
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
                  <strong>Cancellation Policy:</strong> Full refund available up to 48 hours prior to
                  event start. Event transfers can be processed by contacting curator@bojorartgallery.com.
                </p>

                <button
                  onClick={submitRegistration}
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-neutral-800 dark:hover:bg-neutral-100 active:scale-95 transition-all shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? "Processing Payment..." : `Pay ${selectedUpcomingEvent.price} & Complete`}
                </button>
              </div>
            )}

            {/* STEP 3: CONFIRMED & TICKET VIEW */}
            {regStep === "confirmed" && (
              <div className="flex flex-col text-center items-center py-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/20">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h3 className="text-2xl font-serif font-bold text-neutral-950 dark:text-white mb-2">
                  Registration Confirmed!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-md mb-6">
                  Thank you, <span className="font-semibold text-neutral-900 dark:text-white">{regForm.firstName}</span>.
                  Your spot has been reserved. A confirmation email and digital entry pass have been sent to{" "}
                  <span className="font-semibold text-neutral-900 dark:text-white">{regForm.email || "your email"}</span>.
                </p>

                {/* Digital Ticket Card */}
                <div className="w-full max-w-md p-5 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-left mb-6">
                  <div className="flex justify-between items-start border-b border-neutral-200 dark:border-neutral-800 pb-3 mb-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider block">
                        Ticket Reference
                      </span>
                      <span className="font-mono font-bold text-neutral-900 dark:text-white text-sm">
                        {ticketRef}
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                      Confirmed
                    </span>
                  </div>

                  <p className="font-serif font-bold text-sm text-neutral-900 dark:text-white mb-1">
                    {selectedUpcomingEvent.title}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {selectedUpcomingEvent.date} • {selectedUpcomingEvent.time}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    Venue: {selectedUpcomingEvent.location}
                  </p>
                </div>

                {/* Calendar Add Links */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                  <button
                    onClick={() => {
                      const title = encodeURIComponent(selectedUpcomingEvent.title);
                      const loc = encodeURIComponent(selectedUpcomingEvent.location);
                      const details = encodeURIComponent(selectedUpcomingEvent.fullDescription);
                      window.open(
                        `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${loc}`,
                        "_blank"
                      );
                    }}
                    className="px-4 py-2 rounded-full bg-neutral-200 dark:bg-neutral-800 text-xs font-semibold hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
                  >
                    + Google Calendar
                  </button>
                  <button
                    onClick={() => {
                      alert("Calendar event (.ics) downloaded for Apple & Outlook calendars.");
                    }}
                    className="px-4 py-2 rounded-full bg-neutral-200 dark:bg-neutral-800 text-xs font-semibold hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
                  >
                    + Apple / Outlook (.ics)
                  </button>
                </div>

                <button
                  onClick={() => setSelectedUpcomingEvent(null)}
                  className="text-xs font-semibold uppercase tracking-wider text-neutral-500 hover:text-neutral-900 dark:hover:text-white underline underline-offset-4"
                >
                  Close & Return to Events
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 2: PAST EVENT DETAILS & PHOTO GALLERY LIGHTBOX     */}
      {/* ======================================================== */}
      {selectedPastEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in">
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#101014] text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPastEvent(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-1">
              Event Archive & Recap
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-950 dark:text-white mb-2">
              {selectedPastEvent.title}
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">
              {selectedPastEvent.date} • {selectedPastEvent.location}
            </p>

            {/* Highlights Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-neutral-100/70 dark:bg-neutral-900/80 mb-6 text-xs">
              <div>
                <span className="text-neutral-400 block uppercase font-semibold">Attendance</span>
                <span className="font-bold text-neutral-900 dark:text-white text-sm">
                  {selectedPastEvent.attendance}
                </span>
              </div>
              <div>
                <span className="text-neutral-400 block uppercase font-semibold">Featured Speakers</span>
                <span className="font-medium text-neutral-800 dark:text-neutral-200">
                  {selectedPastEvent.featuredSpeakers.join(", ")}
                </span>
              </div>
              {selectedPastEvent.relatedExhibition && (
                <div>
                  <span className="text-neutral-400 block uppercase font-semibold">Exhibition Series</span>
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">
                    {selectedPastEvent.relatedExhibition}
                  </span>
                </div>
              )}
            </div>

            {/* Full Recap */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
                Event Retrospective
              </h4>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                {selectedPastEvent.fullRecap}
              </p>
            </div>

            {/* Photo Gallery Grid */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
                Event Photo Gallery (Click to Enlarge)
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {selectedPastEvent.photoGallery.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setLightboxImage(img)}
                    className="relative aspect-square rounded-xl overflow-hidden bg-neutral-900 cursor-pointer group border border-neutral-200 dark:border-neutral-800"
                  >
                    <Image
                      src={img}
                      alt={`Gallery recap photo ${idx + 1}`}
                      fill
                      sizes="200px"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-semibold text-neutral-400">Share this event recap:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  className="px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                >
                  {copySuccess ? "Link Copied!" : "Copy Link"}
                </button>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    selectedPastEvent.title + " at Bojor Art Gallery"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                >
                  X / Twitter
                </a>
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    selectedPastEvent.title + " at Bojor Art Gallery - " + selectedPastEvent.shortTheme
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox for Enlarged Photo */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg cursor-zoom-out animate-in fade-in"
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full">
            <Image src={lightboxImage} alt="Enlarged photo" fill className="object-contain" />
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
