'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-8xl md:text-9xl text-accent mb-6">404</h1>
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Page Not Found</h2>
          <p className="text-gray-400 text-lg mb-10">
            Looks like you've wandered off the runway. Let's get you back to the main show.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-cream font-semibold rounded-full hover:bg-[#5a2833] transition-all"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
