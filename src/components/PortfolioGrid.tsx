'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import Link from 'next/link';

export default function PortfolioMagazineStyle() {
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
      className="relative py-28 px-6 sm:px-10 lg:px-32 text-white overflow-hidden bg-gray-950"
    >
      {/* Fondo parallax */}
      <div
        className="absolute inset-0 -z-20 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${basePath}/images/tech-grid-bg.jpg)`,
        }}
        aria-hidden="true"
      />

      {/* Capa de oscurecimiento */}
      <div className="absolute inset-0 -z-10 bg-[#0c0c0c]/80 backdrop-blur-sm" />

      {/* Título */}
      <motion.h2
        id="projects-title"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold text-center mb-20 text-blue-400 tracking-tight"
      >
        Mis Proyectos
      </motion.h2>

      {/* Lista de proyectos */}
      <div className="flex flex-col gap-20" role="list">
        {projects.map((project, index) => (
          <motion.div
            key={`${project.title}-${index}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            role="listitem"
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              } items-center gap-8 md:gap-14`}
          >
            {/* Imagen del proyecto */}
            <div className="relative w-full md:w-1/2 h-60 md:h-72 rounded-xl overflow-hidden shadow-md">
              <Image
                src={`${basePath}${project.image}`}
                alt={`Imagen del proyecto ${project.title}`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority={index < 2}
              />
            </div>

            {/* Contenido del proyecto */}
            <div className="w-full md:w-1/2 space-y-4 text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold text-blue-200">
                {project.title}
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
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

              {/* Botones de acción */}
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`Ver más detalles del proyecto ${project.title}`}
                >
                  <span className="text-sm text-blue-400 hover:underline hover:text-blue-300 transition">
                    ➜ Ver más detalles
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
