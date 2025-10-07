'use client';

import { motion } from 'framer-motion';
import AboutSection from "@/components/About";
import ContactSection from "@/components/ContactCTA";
// import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";
import PortfolioGrid from "@/components/PortfolioGrid";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero - Fade + Slide desde abajo */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        <Hero />
      </motion.div>

      {/* About - Slide desde izquierda */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <AboutSection />
      </motion.div>

      {/* Portfolio - Zoom in */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <PortfolioGrid />
      </motion.div>

      {/* Particles - Fade lento */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.2 } }}
      >
        <Particles />
      </motion.div>

      {/* Contact - Slide desde derecha + fade */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ContactSection />
      </motion.div>

      {/* Footer - Rotación sutil + fade */}
      <motion.div
        initial={{ opacity: 0, rotate: -2 }}
        whileInView={{ opacity: 1, rotate: 0, transition: { duration: 0.8 } }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* <Footer /> */}
      </motion.div>
    </div>
  );
}
