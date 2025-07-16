'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FloatingContactButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block">
        <div className="px-3 py-2 text-sm bg-gray-800 text-white rounded shadow-lg">
          Contáctame
        </div>
      </div>

      {/* Botón principal */}
      <Link
        href="mailto:vicogespinoza@gmail.com"
        className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl transition transform hover:scale-105 focus:outline-none"
        aria-label="Contáctame"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"
          />
        </svg>
      </Link>
    </motion.div>
  );
}
