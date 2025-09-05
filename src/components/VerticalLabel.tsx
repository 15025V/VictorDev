import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SocialLinksVertical() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    // ¡Aquí está el cambio! Usamos 'flex' en lugar de 'hidden lg:flex'
    <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="show"
    className="flex fixed bottom-0 left-4 z-50 items-center justify-center flex-col gap-6"
    >
      <motion.a
        variants={itemVariants}
        href="https://github.com/15025V"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:-translate-y-1"
      >
        <FaGithub size={24} />
      </motion.a>
      <motion.a
        variants={itemVariants}
        href="https://www.linkedin.com/in/victor-gonzalez-espinoza-42709a276"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:-translate-y-1"
      >
        <FaLinkedin size={24} />
      </motion.a>

      {/* Línea decorativa */}
      <motion.div
        variants={itemVariants}
        className="w-px h-24 bg-gray-400"
        aria-hidden="true"
      />
     
    </motion.div>
  );
}