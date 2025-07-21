

import Hero from '@/components/Hero';
import Particles from '@/components/Particles';
import Navbar from '@/components/Navbar';
import PortfolioGrid from '@/components/PortfolioGrid';

import Footer from '@/components/footer';
import ContactCTA from '@/components/ContactCTA';
import FloatingContactButton from '@/components/FloatingContactButton';
import AboutSection from '@/components/About';



export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Particles />
      <Navbar />
      <Hero />
      <AboutSection />
      <PortfolioGrid />
     

   

      <ContactCTA />
      
      <FloatingContactButton />
      {/* <Footer /> */}
    </div>
  );
}