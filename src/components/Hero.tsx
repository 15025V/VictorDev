'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import VerticalLabel from './VerticalLabel';


export default function Hero() {
  const basePath = process.env.NODE_ENV === 'production' ? '/Victor.dev' : '';
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center px-6 relative z-10 bg-[#0c0c0c] bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.1),_transparent)]"
    >
      <div className="text-center max-w-5xl">
        <VerticalLabel />

        {/* Título principal */}
        <motion.h1
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-500 text-transparent bg-clip-text drop-shadow-[0_5px_15px_rgba(59,130,246,0.4)]"
        >
          Hola, soy <span className="text-white animate-pulse">Victor</span>
        </motion.h1>

        {/* Typing dinámico */}
        <TypeAnimation
          sequence={[
            'Desarrollador Frontend', 2000,
            'Especialista en React + Next.js', 2000,
            'Diseñador de experiencias digitales', 2000,
          ]}
          speed={60}
          repeat={Infinity}
          className="text-xl sm:text-2xl text-slate-300 mb-6 tracking-widest uppercase"
        />

        {/* Subtítulo emocional */}
        <p className="text-slate-400 text-base sm:text-lg italic max-w-2xl mx-auto mb-10">
          Me apasiona transformar ideas en interfaces funcionales y memorables. Diseño para emocionar, desarrollo para escalar.
        </p>

        {/* Botones principales */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="bg-blue-600/90 hover:bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold tracking-wide shadow-[0_4px_15px_rgba(59,130,246,0.3)] transition-all duration-300"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="bg-white/10 backdrop-blur-sm border border-blue-400 text-blue-300 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-400/10 hover:text-white transition-all duration-300"
          >
            Contáctame
          </a>
          <a
            href={`${basePath}/CV_Victor.pdf`} 
            
            download
            
            className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-gray-600 hover:to-gray-800 transition-all duration-300"
          >
            Descargar CV
          </a>
        </div>

        {/* Indicador de scroll */}
        <div className="mt-14 flex justify-center animate-bounce text-gray-500 text-xs tracking-wide">
          <span className="border border-gray-600 px-3 py-1 rounded-full">
            ↓ Desliza para explorar ↓
          </span>
        </div>
      </div>
      
    </motion.section>
  );
}
