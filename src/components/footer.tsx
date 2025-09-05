'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-slate-950 border-t border-gray-800 h-12 sm:h-16"
      aria-hidden="true"
    >
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />

      {/* Espacio reservado para coherencia visual */}
      <div className="h-full w-full" />
    </motion.footer>
  );
}
