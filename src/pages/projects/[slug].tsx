import { useRouter } from 'next/router';
import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';


export default function ProjectPage() {

   const basePath = process.env.NODE_ENV === 'production' ? '/VictorDev' : '';

  const { slug } = useRouter().query;
  const project = projects.find((p) => p.slug === slug);
  const [current, setCurrent] = useState(0);

  if (!project || !project.mockups) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        <h1 className="text-xl">Proyecto no encontrado 😢</h1>
      </div>
    );
  }

  const nextMockup = () =>
    setCurrent((prev) => (prev + 1) % project.mockups.length);
  const prevMockup = () =>
    setCurrent((prev) => (prev === 0 ? project.mockups.length - 1 : prev - 1));

  return (
    <section className="min-h-screen bg-gray-950 text-white py-24 px-6 sm:px-10 lg:px-32">
      {/* Botón Portfolio con animación lateral */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mb-8 flex  md:justify-start"
      >
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md shadow-sm transition duration-300 text-sm font-medium"
          >
            {/* Icono Arrow-back */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor" 
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7 7-7" />
            </svg>
            
          </motion.button>
        </Link>
      </motion.div>

      {/* Título principal */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-blue-400 mb-8 text-center"
      >
        {project.title}
      </motion.h1>

      {/* Descripción técnica */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 text-center max-w-3xl mx-auto"
      >
        {project.description}
      </motion.p>

      {/* Tecnologías */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 bg-[#1f2937] text-blue-200 rounded-full uppercase tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Carrusel con mockup */}
      <motion.div
        key={project.mockups[current]}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="border-[12px] rounded-[2.5rem] border-gray-800 bg-black shadow-2xl w-[320px] h-[640px] overflow-hidden relative mx-auto mb-8"
      >
        <Image
          src={`${basePath}${(project.mockups[current])}`}
          alt={`Mockup ${current + 1}`}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Botones carrusel */}
      <div className="flex justify-center gap-4 mb-12">
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

      <hr className="border-gray-800 my-10" />

      {/* Navegación final */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
        {project.link && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white rounded-full shadow-lg transition-all duration-300 text-base font-semibold"
          >
            🚀 Ver proyecto en vivo
          </motion.a>
        )}
      </div>
    </section>
  );
}
