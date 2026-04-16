import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://www.feanpaytechnologies.com.ng";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "FeanPay Technologies | Innovative Digital Solutions",
    template: "%s | FeanPay Technologies",
  },
  description:
    "FeanPay Technologies is a service-based technology company in Lagos, Nigeria specialising in custom software development, AI integration, fintech solutions, mobile & web applications, and cloud services.",
  keywords: [
    "FeanPay Technologies",
    "software development Nigeria",
    "fintech solutions Lagos",
    "custom software development",
    "AI integration",
    "mobile app development",
    "web application development",
    "cloud solutions",
    "WhatsApp payment",
    "FeanPay",
    "FeanSolar",
    "digital solutions Nigeria",
    "tech company Lagos",
  ],
  authors: [{ name: "FeanPay Technologies", url: BASE_URL }],
  creator: "FeanPay Technologies",
  publisher: "FeanPay Technologies",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: BASE_URL,
    siteName: "FeanPay Technologies",
    title: "FeanPay Technologies | Innovative Digital Solutions",
    description:
      "Building innovative digital products — custom software, AI integration, fintech, and cloud solutions. Based in Lagos, Nigeria.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FeanPay Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FeanPay Technologies | Innovative Digital Solutions",
    description:
      "Building innovative digital products — custom software, AI integration, fintech, and cloud solutions. Based in Lagos, Nigeria.",
    images: ["/og-image.png"],
  },
  other: {
    "facebook-domain-verification": "mucg4035e963k59wl2tpxu39lbu7fo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
