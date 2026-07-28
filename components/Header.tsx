'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, Users } from 'lucide-react';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Initiatives', href: '/initiatives' },
  { name: 'First Session', href: '/success-stories' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`premium-panel mx-auto max-w-7xl rounded-full transition-all duration-500 ${
          scrolled
            ? 'border-white/60 bg-white/85 shadow-[0_22px_70px_rgba(74,32,41,0.1)] backdrop-blur-2xl'
            : 'bg-white/60 backdrop-blur-xl'
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-3.5 md:px-8 md:py-4">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-lg transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
              <Image
                src="/Preneurin Logo.jpeg"
                alt="Preneurin Logo"
                width={40}
                height={40}
                sizes="40px"
                className="relative h-9 w-9 rounded-full premium-outline shadow-[0_10px_30px_rgba(74,32,41,0.18)] transition-transform duration-500 group-hover:scale-105 md:h-10 md:w-10"
              />
            </div>
            <div className="hidden sm:block leading-tight">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
                Fashion Designer Community
              </p>
              <p className="font-serif text-lg font-semibold leading-none mt-0.5">
                Preneurin
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:gap-2 xl:gap-3 text-sm font-medium tracking-wide md:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group/nav relative rounded-full px-3.5 py-2 text-[var(--foreground)]/75 transition-all duration-300 hover:text-[var(--foreground)] hover:bg-accent/10"
              >
                {link.name}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-6 rounded-full bg-gradient-to-r from-accent via-primary to-accent origin-center"
                />
              </Link>
            ))}
            <div className="ml-2 flex items-center gap-2 pl-3 lg:pl-4 border-l border-[var(--border)]">
              <Link
                href="/#join-inner-circle"
                className="group/cta relative overflow-hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-cream shadow-[0_14px_40px_rgba(74,32,41,0.28)] transition-all duration-300 hover:bg-[#5a2833] hover:shadow-[0_20px_55px_rgba(74,32,41,0.36)]"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  <Users className="h-3.5 w-3.5" strokeWidth={2.2} />
                  Join The Inner Circle
                </span>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-gradient-to-br from-white/90 to-white/60 text-[var(--foreground)] backdrop-blur-xl transition-all duration-300 hover:border-accent/50 hover:text-accent active:scale-95"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" strokeWidth={2.2} /> : <Menu className="h-5 w-5" strokeWidth={2.2} />}
            </button>
          </div>
        </div>
      </motion.div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -12, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-3 max-w-7xl md:hidden"
        >
          <div className="premium-panel rounded-[1.75rem] p-4 shadow-[0_30px_80px_rgba(74,32,41,0.12)] backdrop-blur-2xl">
            <div className="space-y-1.5">
              {navigationLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.4, ease: 'easeOut' }}
                >
                  <Link
                    key={link.name}
                    href={link.href}
                    className="group flex items-center justify-between rounded-2xl px-4 py-3.5 text-[var(--foreground)]/85 transition-all duration-300 hover:bg-gradient-to-br hover:from-accent/12 hover:to-white/70 hover:text-[var(--foreground)]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="inline-flex items-center gap-3">
                      <span className="font-serif text-sm text-accent/60 group-hover:text-accent transition-colors">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-medium">{link.name}</span>
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-accent/0 transition-all duration-300 group-hover:bg-accent/60" />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 6, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.4, ease: 'easeOut' }}
                className="pt-2"
              >
                <Link
                  href="/#join-inner-circle"
                  className="group relative mt-1 flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-primary px-5 py-4 font-semibold text-cream shadow-[0_18px_50px_rgba(74,32,41,0.28)] transition-all duration-300 hover:bg-[#5a2833]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Users className="h-4 w-4" strokeWidth={2.2} />
                  Join The Inner Circle
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
