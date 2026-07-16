import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CursorProvider from "./CursorProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

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
  title: "Preneurin | Founder-Led Growth Platform For Fashion Designers",
  description: "Preneurin is a founder-led platform for fashion designers, built from its first live session in April to help studios navigate pricing, production, clients, and growth with practical clarity.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://preneurin.org",
    title: "Preneurin | Founder-Led Growth Platform For Fashion Designers",
    description: "A founder-led platform helping fashion designers navigate pricing, production, clients, and growth with practical clarity.",
    siteName: "Preneurin",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preneurin | Founder-Led Growth Platform For Fashion Designers",
    description: "A founder-led platform helping fashion designers navigate pricing, production, clients, and growth with practical clarity.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme) {
                    document.documentElement.classList.add(theme);
                  } else {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    document.documentElement.classList.add(prefersDark ? 'dark' : 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body 
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <CursorProvider>
            <Header />
            {children}
            <Footer />
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
