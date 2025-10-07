'use client';

import { motion } from 'framer-motion';
import { FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiVercel,  SiAngular, SiDocker, SiCss3, SiHtml5, SiGithub, SiAstro, SiJavascript, SiExpo, SiReact } from 'react-icons/si';

const technologies = [
  { name: 'React', icon:SiReact, color: 'text-cyan-400' },
  { name: 'React Native ', icon: SiReact , color: 'text-black' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-blue-400' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
  { name: 'Git', icon: FaGitAlt, color: 'text-red-500' },
  { name: 'Vercel', icon: SiVercel, color: 'text-white' },
  { name: 'Angular', icon: SiAngular, color: 'text-red-500' },
  { name: 'CSS', icon: SiCss3, color: 'text-blue-400' },
  { name: 'HTML', icon: SiHtml5, color: 'text-red-500' },
  { name: 'GitHub ', icon: SiGithub, color: 'text-white' },
  { name: 'Astro ', icon: SiAstro, color: 'text-white' },
  { name: 'JavaScript ', icon: SiJavascript, color: 'text-yellow-300' },
  { name: 'Expo ', icon: SiExpo, color: 'text-black' },
];

export default function Particles() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="technologies" className="bg-slate-950 text-white py-28 px-6 sm:px-10 lg:px-36 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-20"
        >
          Tecnologías & Herramientas
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-12"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="flex flex-col items-center space-y-4 p-4 rounded-lg bg-slate-900/50 shadow-lg border border-slate-800 transition-transform transform hover:scale-110 hover:shadow-cyan-500/20"
            >
              <div className="text-5xl sm:text-6xl lg:text-7xl">
                <tech.icon className={tech.color} />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-gray-300">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
