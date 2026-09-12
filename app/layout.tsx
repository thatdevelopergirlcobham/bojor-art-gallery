import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bojorartgallery.com"),
  title: {
    default: "Bojor Art Gallery | Home for Every Artist & Tradition",
    template: "%s | Bojor Art Gallery",
  },
  description:
    "Curated with an art historian's eye by Professor Bojor Enamhe. Bojor Art Gallery is a premier sanctuary celebrating African contemporary fine art, traditional cultural heritage, and vanguard digital mastery.",
  keywords: [
    "Bojor Art Gallery",
    "Professor Bojor Enamhe",
    "African contemporary art",
    "Nigerian art curator",
    "Calabar art gallery",
    "Art Incubator Calabar",
    "Suspended Dreams",
    "fine art gallery",
    "contemporary African artists",
    "digital art Africa",
  ],
  authors: [
    {
      name: "Professor Bojor Enamhe",
      url: "https://ng.linkedin.com/in/bojor-enamhe-0360bb139",
    },
  ],
  creator: "Professor Bojor Enamhe",
  publisher: "Bojor Art Gallery",
  formatDetection: {
    email: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://bojorartgallery.com",
    siteName: "Bojor Art Gallery",
    title: "Bojor Art Gallery | Curated by Prof. Bojor Enamhe",
    description:
      "Curated with an art historian's eye. A home for every kind of artist and tradition — African contemporary masterworks, permanent collections, exhibitions, and curatorial dialogues.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bojor Art Gallery - Curated by Prof. Bojor Enamhe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bojor Art Gallery | Curated by Prof. Bojor Enamhe",
    description:
      "Curated with an art historian's eye. Discover contemporary African masterworks, exhibitions, and digital expressions.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('bojor_theme_preference');
                  var supportDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && supportDark) || (saved === 'system' && supportDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#FCFCFC] dark:bg-[#09090B] text-neutral-900 dark:text-neutral-100 font-sans selection:bg-neutral-900 selection:text-white dark:selection:bg-neutral-100 dark:selection:text-neutral-950 transition-colors duration-300"
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
