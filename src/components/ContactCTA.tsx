'use client';

import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-black via-[#0f172a] to-black text-white py-28 px-6 sm:px-10 lg:px-36 font-sans"
    >
      <div className="max-w-3xl mx-auto text-center space-y-10">
        {/* Título Principal */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-extrabold leading-tight text-white"
        >
          ¿Hablamos?
        </motion.h2>

        {/* Descripción breve */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 text-base sm:text-lg leading-relaxed"
        >
          Si estás buscando a alguien apasionado por la creación de interfaces limpias, eficientes y visualmente atractivas, estás en el lugar correcto. ¡Estoy listo para nuevos retos!
        </motion.p>

        {/* Tarjeta de contacto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-[#1e293b] border border-[#334155] rounded-2xl p-6 sm:p-10 text-left"
        >
          <ul className="space-y-4 text-sm sm:text-base text-gray-300">
            <li>
              <strong className="text-white">👤 Nombre:</strong> Victor Gonzalez Espinoza
            </li>
            <li>
              <strong className="text-white">💼 Rol:</strong> Frontend Developer / UI Engineer
            </li>
            <li>
              <strong className="text-white">🧰 Stack:</strong> React, Next.js, Tailwind, Framer Motion, GSAP
            </li>
            <li>
              <strong className="text-white">🚀 Disponibilidad:</strong> Proyectos freelance, colaboraciones, retos visuales
            </li>
          </ul>
        </motion.div>

        {/* Botón de contacto */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <a
            href="mailto:vicogespinoza@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition"
          >
            <FaPaperPlane />
            <span>Contáctame</span>
          </a>
          
        </motion.div>
      </div>
    </section>
  );
}
