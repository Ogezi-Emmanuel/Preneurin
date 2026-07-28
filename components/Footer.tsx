'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, MapPin, Instagram, Users, Quote } from 'lucide-react';

const CONTACT_EMAIL = 'secretariat@preneurin.org';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Initiatives', href: '/initiatives' },
  { name: 'First Session', href: '/success-stories' },
  { name: 'Contact', href: '/contact' },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 pb-10 pt-24">
      <div className="absolute -top-10 left-1/2 h-[420px] w-[80vw] max-w-[900px] -translate-x-1/2 rounded-full bg-primary/7 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-10 h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="premium-panel relative overflow-hidden rounded-[2.25rem] p-8 md:p-12 xl:p-14 shadow-[0_40px_120px_rgba(74,32,41,0.1)]"
        >
          <Quote className="absolute -top-4 right-8 h-28 w-28 text-accent/10 md:h-36 md:w-36" />
          <div className="grid gap-12 md:gap-10 lg:gap-14 md:grid-cols-[1.1fr_0.95fr_1fr]">
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-accent/25 blur-md animate-pulse-slow" />
                  <Image
                    src="/Preneurin Logo.jpeg"
                    alt="Preneurin Logo"
                    width={64}
                    height={64}
                    sizes="64px"
                    className="relative h-14 w-14 rounded-full premium-outline shadow-[0_16px_50px_rgba(74,32,41,0.18)] md:h-16 md:w-16"
                  />
                </div>
                <div className="leading-tight">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
                    Founded · Lagos
                  </p>
                  <p className="font-serif text-2xl font-semibold leading-none mt-0.5 md:text-3xl">
                    Preneurin
                  </p>
                </div>
              </div>
              <p className="max-w-sm text-base leading-relaxed text-gray-600 md:text-lg md:leading-relaxed">
                A community built for fashion designers who want to learn honestly, share openly,
                build real connections, and grow both personally and professionally — in a room
                that actually gets them.
              </p>
              <motion.a
                whileHover={{ y: -3, x: 2 }}
                transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-7 inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-gradient-to-br from-white/85 to-white/55 px-5 py-3.5 text-sm font-semibold backdrop-blur-xl transition-all hover:border-accent/60 hover:text-accent hover:shadow-[0_14px_40px_rgba(74,32,41,0.08)]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <Mail className="h-4 w-4" strokeWidth={1.9} />
                </span>
                {CONTACT_EMAIL}
              </motion.a>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-1 w-8 rounded-full bg-gradient-to-r from-accent to-primary" />
                <h4 className="font-serif text-xl font-semibold md:text-2xl">Explore</h4>
              </div>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {navigationLinks.map((link, i) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="group flex items-center gap-2.5"
                  >
                    <span className="font-serif text-xs text-accent/50 transition-colors group-hover:text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-medium text-gray-600 transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 md:text-base">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-1 w-8 rounded-full bg-gradient-to-r from-primary to-accent" />
                <h4 className="font-serif text-xl font-semibold md:text-2xl">Community Desk</h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-gradient-to-br from-white/80 to-white/50 px-5 py-4.5 backdrop-blur-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" strokeWidth={1.9} />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                      Based In
                    </p>
                    <p className="mt-1 text-sm font-medium leading-snug text-gray-700 md:text-base">
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-gradient-to-br from-white/80 to-white/50 px-5 py-4.5 backdrop-blur-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                    <Instagram className="h-5 w-5" strokeWidth={1.9} />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                      Follow The Journey
                    </p>
                    <p className="mt-1 text-sm font-medium leading-snug text-gray-700 md:text-base">
                      Community stories · Session highlights
                    </p>
                  </div>
                </div>
              </div>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                href={`mailto:${CONTACT_EMAIL}`}
                className="group relative mt-7 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary via-[#5a2833] to-primary bg-[length:200%_100%] px-6 py-4 font-semibold text-cream shadow-[0_20px_55px_rgba(74,32,41,0.28)] transition-all hover:bg-[position:100%_0] hover:shadow-[0_26px_75px_rgba(74,32,41,0.36)]"
              >
                <Users className="h-4 w-4" strokeWidth={2.2} />
                <span className="relative z-10">Reach The Secretariat</span>
              </motion.a>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-5 border-t border-[var(--border)] pt-8 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500 md:text-base">
              <span className="font-medium">© {currentYear} Preneurin.</span>
              <span className="hidden md:inline text-gray-300">·</span>
              <span>Built for fashion designers, by fashion founders.</span>
            </div>
            <motion.a
              whileHover={{ y: -2, x: 1 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              href="https://emmanuelogezi.cv"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 transition-colors hover:text-accent md:text-sm"
            >
              <span className="h-1 w-1 rounded-full bg-accent transition-all group-hover:h-1.5 group-hover:w-1.5" />
              Engineered by Emmanuel Ogezi
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
