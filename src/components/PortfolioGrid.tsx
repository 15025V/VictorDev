'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import Link from 'next/link';

export default function PortfolioGrid() {
  const basePath = process.env.NODE_ENV === 'production' ? '/VictorDev' : '';

  return (
    <motion.section
      id="projects"
      aria-labelledby="projects-title"
      role="region"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative py-28 px-6 sm:px-10 lg:px-32 text-white overflow-hidden bg-slate-950"
    >
      {/* Fondo dinámico animado */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-black animate-pulse-slow-reverse" />
      <div className="absolute inset-0 -z-10 bg-slate-950/80 backdrop-blur-[2px]" />

      {/* Título */}
      <motion.h2
        id="projects-title"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold text-center mb-20 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white"
      >
        Proyectos
      </motion.h2>

      {/* Lista de proyectos */}
      <div className="flex flex-col gap-24" role="list">
        {projects.map((project, index) => (
          <motion.div
            key={`${project.title}-${index}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
            role="listitem"
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              } items-center gap-8 md:gap-16`}
          >
            {/* Imagen del proyecto */}
            <div className="group relative w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.01] ">
              <div className="relative w-full h-110 sm:h-96 md:h-[48rem]">
                <Image
                  src={`${basePath}${project.image}`}
                  alt={`Imagen del proyecto ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={index < 2}
                />
                
              </div>
            </div>

            {/* Contenido del proyecto */}
            <div className="w-full md:w-1/2  space-y-4 text-left">
              <h3 className="text-3xl ml-6 sm:text-4xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400">
                {project.title}
              </h3>
              <p className="ml-8 text-gray-300 text-base leading-relaxed">
                {project.description}
              </p>

              <div className="ml-15 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-slate-800 text-cyan-400 rounded-full uppercase tracking-wide border border-cyan-400/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Botones de acción */}
              <div className=" mt-6 flex flex-col sm:flex-row gap-4 items-center">
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`Ver más detalles del proyecto ${project.title}`}
                  className="inline-flex items-center text-sm font-semibold text-cyan-400 group-hover:underline transition-colors"
                >
                  <span className="relative">
                    Ver más detalles
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform -rotate-45" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}