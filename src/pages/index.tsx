import AboutSection from "@/components/About";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";
import PortfolioGrid from "@/components/PortfolioGrid";







export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
     
      <Navbar />
      <Hero/>
      <AboutSection />
      <PortfolioGrid />
      <Particles />
      {/* <ContactCTA /> */}
      {/* <FloatingContactButton /> */}
      <Footer />
    </div>
  );
}