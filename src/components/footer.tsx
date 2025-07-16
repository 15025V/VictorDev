'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-[#0b0b0b] text-gray-300 pt-16 pb-10 px-6 sm:px-10 lg:px-36 font-sans border-t border-gray-800 overflow-hidden"
    >
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
        {/* Firma */}
        <p className="text-sm sm:text-base tracking-wide">
          Diseñado y desarrollado por el {' '}
          <span className="text-cyan-400 font-bold hover:underline transition duration-300">
            Ing. Victor Gonzalez Espinoza
          </span>
        </p>

        {/* Redes sociales */}
        <div className="flex justify-center md:justify-end space-x-6 text-2xl">
          <a
            href="https://github.com/15025V"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/victor-gonzalez-espinoza-42709a276"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:vicogespinoza@gmail.com"
            className="text-gray-400 hover:text-cyan-400 transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Línea decorativa inferior */}
      <div className="mt-10 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      {/* Créditos */}
      <p className="text-center text-sm mt-6 text-gray-500 tracking-wider">
        © {new Date().getFullYear()}{' '}
        <span className="text-white font-semibold">VICTOR.dev</span> — Todos los derechos reservados.
      </p>
    </motion.footer>
  );
}
