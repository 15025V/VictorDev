'use client';

import { motion } from 'framer-motion';

export default function AboutSectionClassic() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 sm:px-10 lg:px-24  text-white overflow-hidden"
      // bg-[#0b0b0c]
    >
      {/* Fondo decorativo sutil tipo luz */}
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-blue-900/20 via-transparent to-black" />
  
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400"
        >
          Sobre mí
        </motion.h2>

        {/* Línea decorativa animada */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className="h-1 w-24 bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent mb-12 origin-left"
        />

        {/* Cuerpo del texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8 text-gray-300 text-lg leading-relaxed "
        >
          <p>
            Soy un desarrollador frontend enfocado en construir interfaces que se sientan <span className="text-white font-semibold">elegantes, rápidas</span> y cargadas de intención. Me especializo en <span className="text-blue-400 font-semibold">React</span>, <span className="text-blue-400 font-semibold">Next.js</span> y <span className="text-blue-400 font-semibold">Tailwind CSS</span>, con un enfoque muy marcado hacia la experiencia visual.
          </p>

          <p>
            Me inspiro en el diseño editorial, la interacción limpia y el detalle que transforma lo común en algo memorable. Cada componente que creo busca no solo lucir bien, sino contar una historia visual clara y funcional.
          </p>

          <p>
            Aplico lógica y estética en igual medida. Desde integrar <span className="text-white font-medium">Framer Motion</span> para animaciones, hasta optimizar estructuras modulares para escalar. Me gusta colaborar, iterar y elevar el estándar.
          </p>
        </motion.div>

        {/* Firma final */}
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-sm text-right italic tracking-wide text-gray-500"
        >
          — Con visión, diseño y propósito,&nbsp;
          <span className="text-blue-400 font-semibold not-italic">Victor</span>
        </motion.p>
      </div>
    </section>
  );
}
