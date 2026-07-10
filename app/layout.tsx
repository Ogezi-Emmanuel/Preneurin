import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CursorProvider from "./CursorProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://preneurin.org'),
  title: "PRENUERIN DESIGNERS DEVELOPMENT INITIATIVE | Initiative & Accelerator Portal",
  description: "A safe space and business development community for fashion designers to face real truths, solve operational struggles, and find clarity. Real stories. Real struggles. Real growth.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://preneurin.org",
    title: "PRENUERIN DESIGNERS DEVELOPMENT INITIATIVE | Initiative & Accelerator Portal",
    description: "A safe space and business development community for fashion designers",
    siteName: "PRENUERIN DESIGNERS DEVELOPMENT INITIATIVE",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRENUERIN DESIGNERS DEVELOPMENT INITIATIVE | Initiative & Accelerator Portal",
    description: "A safe space and business development community for fashion designers",
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
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#0A0A0A] text-white`}
        suppressHydrationWarning
      >
        <CursorProvider>
          <Header />
          {children}
          <Footer />
        </CursorProvider>
      </body>
    </html>
  );
}
