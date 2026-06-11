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
    <section className="relative min-h-screen bg-slate-950 py-24 px-6 text-white sm:px-10 lg:px-32">
      {/* Fondo con gradientes y blur coherente con el resto del portfolio */}
      <div className="pointer-events-none absolute inset-0 -z-30 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_0%_0%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(129,140,248,0.22),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-slate-950/70 backdrop-blur-2xl" />

      {/* Botón de regreso */}
      <Link href="/" aria-label="Volver al portfolio">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-950/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300 shadow-[0_14px_30px_rgba(15,23,42,0.9)] transition-colors hover:bg-slate-900/80"
        >
          <span>←</span>
          <span>Volver</span>
        </motion.button>
      </Link>

      {/* Layout dividido */}
      <div className="grid items-start gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        {/* Panel izquierdo: contenido técnico */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative space-y-8 rounded-3xl border border-cyan-400/15 bg-slate-950/80 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.95)] backdrop-blur-2xl"
        >
          <div className="pointer-events-none absolute inset-px -z-10 rounded-[1.4rem] bg-[radial-gradient(circle_at_0_0,#22d3ee33,transparent_55%),radial-gradient(circle_at_100%_100%,#4f46e533,transparent_55%)] opacity-80 blur-md" />

          <div className="space-y-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-sky-300 sm:text-4xl">
              {project.title}
            </h1>
            <p className="text-sm leading-relaxed text-slate-200/90 sm:text-[0.98rem]">
              {project.description}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Tecnologías usadas
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-cyan-400/30 bg-slate-950/80 px-3 py-1 text-[0.7rem] uppercase tracking-[0.14em] text-cyan-200/90 shadow-[0_0_18px_rgba(8,47,73,0.6)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Botones carrusel */}
          <div className="mt-4 flex items-center gap-4">
            <button
              onClick={prevMockup}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950/80 text-cyan-300 shadow-[0_12px_28px_rgba(8,47,73,0.9)] transition hover:bg-slate-900/80"
            >
              ←
            </button>
            <button
              onClick={nextMockup}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950/80 text-cyan-300 shadow-[0_12px_28px_rgba(8,47,73,0.9)] transition hover:bg-slate-900/80"
            >
              →
            </button>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              {current + 1} / {project.mockups.length}
            </span>
          </div>

          {/* Enlace al proyecto */}
          {project.link && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/50 bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[0_22px_50px_rgba(6,182,212,0.9)] transition hover:translate-y-0.5"
              >
                <span>🚀</span>
                <span>Ver proyecto en vivo</span>
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
          className="relative mx-auto flex items-center justify-center"
        >
          <div className="relative h-[600px] w-[300px] rounded-[2.5rem] border-[10px] border-slate-900 bg-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.4)]">
            <Image
              src={`${basePath}${project.mockups[current]}`}
              alt={`Mockup ${current + 1}`}
              fill
              className="object-cover object-top"
              priority
            />
            {/* Simulación de notch */}
            <div className="absolute left-1/2 top-0 z-10 h-4 w-28 -translate-x-1/2 rounded-b-xl bg-slate-900" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}