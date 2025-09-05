'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      role="region"
      className="py-32 px-6 sm:px-10 lg:px-24 bg-slate-950 text-white"
    >
      <div className="max-w-4xl mx-auto p-8 rounded-lg border border-slate-700 bg-slate-900 shadow-xl">
        {/* Barra de título de la terminal */}
        <div className="flex items-center gap-2 mb-8 p-3 -mt-3 -mx-3 rounded-t-lg bg-slate-800 border-b border-slate-700">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500" aria-label="Cerrar ventana" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" aria-label="Minimizar ventana" />
            <span className="w-3 h-3 rounded-full bg-green-500" aria-label="Maximizar ventana" />
          </div>
          <p className="flex-1 text-center text-sm font-mono text-slate-500 tracking-wide">
            terminal: ~
          </p>
        </div>

        {/* Contenido de la terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg leading-relaxed font-mono"
        >
          {/* Título */}
          <motion.h2
            id="about-title"
            className="text-3xl sm:text-4xl font-semibold mb-6 text-cyan-400"
          >
            &gt; sobre-mi
          </motion.h2>

          {/* Cuerpo del texto */}
          <div className="space-y-6">
            <p>
              Soy un desarrollador frontend enfocado en construir interfaces que se sientan <span className="text-white font-semibold">elegantes, rápidas</span> y cargadas de intención. Me especializo en <span className="text-cyan-400 font-semibold">React</span>, <span className="text-cyan-400 font-semibold">Next.js</span> y <span className="text-cyan-400 font-semibold">Tailwind CSS</span>, con un enfoque muy marcado hacia la experiencia visual.
            </p>
            <p>
              Me inspiro en el diseño editorial, la interacción limpia y el detalle que transforma lo común en algo memorable. Cada componente que creo busca no solo lucir bien, sino contar una historia visual clara y funcional.
            </p>
            <p>
              Aplico lógica y estética en igual medida. Desde integrar <span className="text-white font-medium">Framer Motion</span> para animaciones, hasta optimizar estructuras modulares para escalar. Me gusta colaborar, iterar y elevar el estándar.
            </p>
          </div>
        </motion.div>

        {/* Firma con cursor parpadeante */}
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 text-sm text-right italic tracking-wide text-gray-400 font-mono"
        >
          — Con visión, diseño y propósito,&nbsp;
          <span className="text-cyan-400 not-italic">Victor</span>
          <span className="inline-block animate-pulse text-cyan-400 font-bold ml-1">|</span>
        </motion.p>
      </div>
    </section>
  );
}