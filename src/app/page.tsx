import HeroSection from "../components/sections/HeroSection";
import SelectedWorks from "../components/sections/SelectedWorks";
import CaseStudy from "../components/sections/CaseStudy";
import Services from "../components/sections/Services";
import GrowthBlueprint from "../components/sections/GrowthBlueprint";
import About from "../components/sections/About";
import Footer from "../components/sections/Footer";
import Navbar from "../components/ui/Navbar";
import CustomCursor from "../components/ui/CustomCursor";

export default function Home() {
  return (
    <main className="relative">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <section id="work">
        <SelectedWorks />
        <CaseStudy />
      </section>
      <section id="services">
        <Services />
        <GrowthBlueprint />
      </section>
      <section id="about">
        <About />
      </section>
      <Footer />
    </main>
  );
}
