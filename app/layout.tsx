import type { Metadata } from "next";
import localFont from "next/font/local";
import { siteConfig } from "@/lib/site-config";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const inter = localFont({
  src: "../public/fonts/inter-latin-variable.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "400 700",
});

const baskerville = localFont({
  src: [
    {
      path: "../public/fonts/libre-baskerville-latin-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/libre-baskerville-latin-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-serif",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl ?? new URL("http://localhost:3000"),
  title: {
    default: `${siteConfig.name} | Practical AI for HVAC Businesses`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Less busywork. More room to grow.`,
    description: siteConfig.description,
    ...(siteUrl ? { url: siteUrl } : {}),
    images: [
      {
        url: siteConfig.images.hero,
        width: 1760,
        height: 894,
        alt: "Local business professionals at work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Practical AI for HVAC Businesses`,
    description: siteConfig.description,
    images: [siteConfig.images.hero],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${baskerville.variable}`}>
      <body>{children}</body>
    </html>
  );
}
