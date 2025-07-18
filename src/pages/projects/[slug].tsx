'use client';

import { useRouter } from 'next/router';
import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ProjectPage() {
  const { query } = useRouter();
  const slug = query.slug as string;

  const [current, setCurrent] = useState(0);

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

  if (!project || !project.mockups) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-xl font-semibold">Proyecto no encontrado 😢</h1>
          <Link href="/">
            <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md text-sm">
              ← Volver al portfolio
            </button>
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
    <section className="min-h-screen bg-[#0c0c0c] text-white py-24 px-6 sm:px-10 lg:px-32">
      {/* Botón de regreso */}
      <Link href="/" aria-label="Volver al portfolio">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mb-8 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md shadow-sm text-sm font-medium"
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
          <h1 className="text-4xl font-extrabold text-blue-400">
            {project.title}
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-[#1f2937] text-blue-200 rounded-full uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Botones carrusel */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={prevMockup}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-lg transition"
            >
              ← Anterior
            </button>
            <button
              onClick={nextMockup}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-lg transition"
            >
              Siguiente →
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
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white rounded-full shadow-lg transition-all duration-300 text-base font-semibold hover:scale-105"
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
          className="mx-auto w-[320px] h-[640px] rounded-[2.5rem] border-[12px] border-gray-800 bg-black shadow-[0_10px_40px_rgba(0,0,0,0.6)] overflow-hidden relative"
        >
          <Image
            src={`${basePath}${project.mockups[current]}`}
            alt={`Mockup ${current + 1}`}
            fill
            className="object-contain object-top"
            priority
          />
          {/* Simulación de notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-gray-900 rounded-b-xl z-10" />
        </motion.div>
      </div>
    </section>
  );
}
