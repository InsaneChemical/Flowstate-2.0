import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const siteUrl = "https://flowstatemedia.co.za";
const title = "Flowstate Media — Smarter media. Smoother growth.";
const description =
  "Flowstate Media helps businesses launch conversion-focused websites, create better social content, and grow engaged Web3 communities.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "website design",
    "social media management",
    "Web3 community management",
    "digital agency South Africa",
  ],
  authors: [{ name: "Flowstate Media" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Flowstate Media",
    title,
    description,
    locale: "en_ZA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Flowstate Media — Smarter media. Smoother growth.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Flowstate Media",
  url: siteUrl,
  logo: `${siteUrl}/logo-transparent.png`,
  description,
  email: "nuno@flowstatemedia.co.za",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ZA",
  },
  areaServed: ["ZA", "EU"],
  sameAs: [
    "https://www.instagram.com/flowstate.builds",
    "https://x.com/flowstatebuilds",
  ],
  serviceType: [
    "Website Design",
    "Social Media Management",
    "Web3 Community Support",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a href="#main-content" className="skip-link">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
