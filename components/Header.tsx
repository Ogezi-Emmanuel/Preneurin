'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/Preneurin Logo.jpeg" alt="Preneurin Logo" className="h-10 w-auto" />
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          {navigationLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button 
            className="text-[var(--foreground)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--card)] border-t border-[var(--border)]">
          <div className="px-6 py-4 space-y-3">
            {navigationLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="block py-2 hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
