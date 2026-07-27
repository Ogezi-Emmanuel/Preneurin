'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

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

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div className="premium-panel mx-auto max-w-7xl rounded-full">
        <div className="flex items-center justify-between gap-4 px-5 py-4 md:px-7">
          <Link href="/" className="flex items-center gap-3">
            <img src="/Preneurin Logo.jpeg" alt="Preneurin Logo" className="h-10 w-auto rounded-full premium-outline" />
            <div className="hidden sm:block">
              <p className="text-xs uppercase tracking-[0.24em] text-accent">Fashion Designer Community</p>
              <p className="text-sm font-medium">Preneurin</p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 text-sm tracking-wide md:flex">
            {navigationLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="relative text-[var(--foreground)]/80 transition-colors hover:text-[var(--foreground)]"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#5a2833]"
            >
              Join The Community
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button 
              className="rounded-full border border-[var(--border)] bg-white/70 p-2 text-[var(--foreground)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mx-auto mt-3 max-w-7xl md:hidden">
          <div className="premium-panel rounded-[2rem] px-6 py-5">
            <div className="space-y-3">
              {navigationLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="block rounded-2xl px-4 py-3 text-[var(--foreground)]/80 transition-colors hover:bg-white/70 hover:text-[var(--foreground)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 block rounded-2xl bg-primary px-4 py-3 text-center font-semibold text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join The Community
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
