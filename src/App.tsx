import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { PricingSection } from './sections/PricingSection';
import { WorkflowSection } from './sections/WorkflowSection';
import { CTASection } from './sections/CTASection';
import { useLanguage } from './context/LanguageContext';

function App() {
  const { t } = useLanguage();

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  // Smooth springs for cursor follow lag
  const glowX = useSpring(mouseX, { stiffness: 70, damping: 22, mass: 0.4 });
  const glowY = useSpring(mouseY, { stiffness: 70, damping: 22, mass: 0.4 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-sans overflow-x-clip selection:bg-[#B600A8]/30 selection:text-white relative">
      {/* Global Mouse Glow Aura */}
      <motion.div
        className="pointer-events-none fixed w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#B600A8]/30 via-[#BE4C00]/22 to-[#B600A8]/10 blur-[90px] z-[1]"
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <PricingSection />
      <WorkflowSection />
      <CTASection />

      {/* Simple Premium Footer */}
      <footer className="border-t border-[#D7E2EA]/10 py-12 px-6 md:px-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#D7E2EA]/60 select-none relative z-30">
        <div>© {new Date().getFullYear()} Ольга. {t.footerRights}</div>
        <div className="flex gap-6 font-medium uppercase tracking-wider text-xs">
          <a href="#about" className="hover:text-[#D7E2EA] transition-colors">{t.navAbout}</a>
          <a href="#services" className="hover:text-[#D7E2EA] transition-colors">{t.navServices}</a>
          <a href="#projects" className="hover:text-[#D7E2EA] transition-colors">{t.navProjects}</a>
          <a href="https://t.me/ulyanakirp" target="_blank" rel="noopener noreferrer" className="hover:text-[#D7E2EA] transition-colors">{t.navContact}</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
