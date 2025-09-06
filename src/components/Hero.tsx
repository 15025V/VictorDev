'use client';

import { motion, Variants } from 'framer-motion';
import { FaCode, FaEnvelopeOpenText, FaFileDownload } from 'react-icons/fa';
import VerticalLabel from '@/components/VerticalLabel';

const basePath: string = process.env.NODE_ENV === 'production' ? '/VictorDev' : '';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, type: 'spring', stiffness: 120 },
  },
  hover: { scale: 1.05, y: -2, transition: { type: 'spring', stiffness: 300 } },
};

export default function Hero() {
  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={containerVariants}
      role="banner"
      aria-label="Hero cinemático"
      className="relative min-h-screen flex items-center justify-center px-6 text-white overflow-hidden bg-slate-950"
    >
      {/* Fondo animado tipo neblina */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-cyan-900 via-slate-900 to-black opacity-10 animate-pulse-slow" />
      <div className="absolute inset-0 z-10 [mask-image:radial-gradient(transparent,black)]" />

      <VerticalLabel />

      {/* Contenido principal */}
      <motion.div variants={containerVariants} className="relative z-20 text-center max-w-4xl">
        {/* Nombre */}
        <motion.h1
          variants={itemVariants}
          initial={{ opacity: 0, y: -40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white drop-shadow-lg"
        >
          Víctor González Espinoza
        </motion.h1>

        {/* Descripción */}
        <motion.p
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }}
          className="text-xl md:text-2xl text-slate-300 font-light mb-6"
        >
          Frontend Engineer que diseña con intención y escala con lógica.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            variants={buttonVariants}
            whileHover="hover"
            href="#projects"
            aria-label="Ver proyectos"
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg shadow-cyan-500/40"
          >
            <FaCode /> Ver proyectos
          </motion.a>

          <motion.a
            variants={buttonVariants}
            whileHover="hover"
            href="#contact"
            aria-label="Contáctame"
            className="flex items-center gap-2 border border-cyan-500 text-cyan-500 px-6 py-3 rounded-full font-semibold hover:bg-cyan-500/10 hover:text-white transition-all duration-300"
          >
            <FaEnvelopeOpenText /> Contáctame
          </motion.a>

          <motion.a
            variants={buttonVariants}
            whileHover="hover"
            href={`${basePath}/cv_VictorGonzalezEspinoza.pdf`}
            download
            aria-label="Descargar CV"
            className="flex items-center gap-2 text-slate-400 px-4 py-2 font-light hover:text-white transition-all duration-300"
          >
            <FaFileDownload /> Descargar CV
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
