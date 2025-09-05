'use client';

import { useRouter } from 'next/router';
import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ProjectPageRedesign() {
  const router = useRouter();
  const slug = router.query.slug as string;

  const [current, setCurrent] = useState(0);

  // Fallback si la página es accedida directamente sin un slug
  if (!slug) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-xl font-semibold">Cargando proyecto...</h1>
        </motion.div>
      </div>
    );
  }

  const project = projects.find((p) => p.slug === slug);

  // Fallback si el proyecto no se encuentra
  if (!project || !project.mockups) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-xl font-semibold">Proyecto no encontrado 😢</h1>
          <Link href="/">
            <motion.button 
              className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-md text-sm transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Volver al portfolio
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  const nextMockup = () =>
    setCurrent((prev) => (prev + 1) % project.mockups.length);
  const prevMockup = () =>
    setCurrent((prev) =>
      prev === 0 ? project.mockups.length - 1 : prev - 1
    );

  const basePath = process.env.NODE_ENV === 'production' ? '/VictorDev' : '';

  return (
    <section className="min-h-screen bg-slate-950 text-white py-24 px-6 sm:px-10 lg:px-32">
      {/* Botón de regreso */}
      <Link href="/" aria-label="Volver al portfolio">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mb-8 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-cyan-400 rounded-lg shadow-sm text-sm font-medium border border-slate-700 transition-colors"
        >
          ← Volver
        </motion.button>
      </Link>

      {/* Layout dividido */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Panel izquierdo: contenido técnico */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400">
            {project.title}
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-slate-800 text-cyan-400 rounded-full uppercase tracking-wide border border-cyan-400/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Botones carrusel */}
          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={prevMockup}
              className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-cyan-400 rounded-full shadow-md transition-colors border border-slate-700"
            >
              ←
            </button>
            <button
              onClick={nextMockup}
              className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-cyan-400 rounded-full shadow-md transition-colors border border-slate-700"
            >
              →
            </button>
          </div>

          {/* Enlace al proyecto */}
          {project.link && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-gray-900 rounded-full shadow-lg transition-all duration-300 text-base font-semibold hover:scale-105"
              >
                🚀 Ver proyecto en vivo
              </a>
            </motion.div>
          )}
        </motion.div>

        {/* Panel derecho: mockup móvil */}
        <motion.div
          key={project.mockups[current]}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-[320px] h-[640px] rounded-[2.5rem] border-[12px] border-slate-800 bg-black shadow-[0_0_20px_rgba(0,255,255,0.2)] overflow-hidden relative"
        >
          <Image
            src={`${basePath}${project.mockups[current]}`}
            alt={`Mockup ${current + 1}`}
            fill
            className="object-cover object-top" // Usar object-cover para evitar barras negras
            priority
          />
          {/* Simulación de notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-slate-900 rounded-b-xl z-10" />
        </motion.div>
      </div>
    </section>
  );
}