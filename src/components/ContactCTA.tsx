



'use client';

import { motion } from 'framer-motion';

function CodeIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="12" width="40" height="32" rx="8" fill="#fff" />
      <rect x="8" y="12" width="40" height="32" rx="8" stroke="#38bdf8" strokeWidth="3" />
      <text x="28" y="34" textAnchor="middle" fontSize="22" fontFamily="monospace" fill="#0ea5e9">{'</>'}</text>
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex items-center justify-center min-h-[60vh] py-24 px-4  bg-slate-950 animate-gradient-move"
      style={{ position: 'relative' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 max-w-xl w-full text-center border border-blue-200"
      >
        <motion.div
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 10 }}
          className="mx-auto mb-8 w-fit"
        >
          <span className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 shadow-lg border-4 border-white">
            <CodeIcon />
          </span>
        </motion.div>
        <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600">
          ¡Frontend Lovers!
        </h2>
        <p className="text-gray-700 text-lg mb-10">
          ¿Buscas colaboración en proyectos web modernos? <br />
          Conecta conmigo y llevemos tu UI al siguiente nivel.
        </p>
        <motion.a
          href="mailto:vicogespinoza@gmail.com"
          whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #38bdf8' }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white shadow-neumorph text-blue-600 text-lg font-bold border border-blue-200 hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          aria-label="Enviar correo a Victor"
          style={{ boxShadow: '8px 8px 24px #38bdf8, -8px -8px 24px #fff' }}
        >
          <span className="text-2xl">💻</span>
          <span>¡Colabora ahora!</span>
        </motion.a>
      </motion.div>
      {/* Fondo animado decorativo */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="650" cy="80" r="60" fill="#38bdf8" fillOpacity="0.18" />
          <circle cx="120" cy="320" r="80" fill="#6366f1" fillOpacity="0.13" />
        </svg>
      </div>
      <style>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 8s ease-in-out infinite;
        }
        .shadow-neumorph {
          box-shadow: 8px 8px 24px #38bdf8, -8px -8px 24px #fff;
        }
      `}</style>
    </section>
  );
}
