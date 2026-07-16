'use client';

import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-white/10 dark:hover:bg-black/10 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-primary" />
      ) : (
        <Sun className="w-5 h-5 text-cream" />
      )}
    </button>
  );
}
