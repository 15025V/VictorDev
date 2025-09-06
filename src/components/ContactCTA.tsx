'use client';

import { motion } from 'framer-motion';
import { FaHandshake, FaPaperPlane } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-32 px-6 sm:px-10 lg:px-36 text-center font-sans"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <FaHandshake className="mx-auto text-6xl text-blue-500" />

        <h2 className="text-4xl sm:text-5xl font-extrabold">
          Construyamos juntos
        </h2>

        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
         Me encanta colaborar en proyectos que desafían la creatividad y la técnica
        </p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          href="mailto:vicogespinoza@gmail.com"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-bold hover:scale-105 hover:shadow-lg transition"
        >
          <FaPaperPlane />
          <span>Escríbeme</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
