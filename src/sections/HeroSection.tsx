import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/ContactButton';
import { useLanguage } from '../context/LanguageContext';

const headFrames: Record<string, string> = {
  'normal-far-left': '/images/head/far-left.png',
  'normal-slight-left': '/images/head/slight-left.png',
  'normal-straight': '/images/head/straight.png',
  'normal-slight-right': '/images/head/slight-right.png',
  'normal-far-right': '/images/head/far-right.png',
  'up-far-left': '/images/head/up-far-left.png',
  'up-straight': '/images/head/up-straight.png',
  'up-far-right': '/images/head/up-far-right.png',
};

export const HeroSection: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [activeFrameKey, setActiveFrameKey] = React.useState('normal-straight');

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const xPercent = e.clientX / window.innerWidth;
      const yPercent = e.clientY / window.innerHeight;
      
      // Look up if cursor is in the top 45% of the screen
      const isUp = yPercent < 0.45;
      
      let frameX = Math.floor(xPercent * 5);
      if (frameX < 0) frameX = 0;
      if (frameX > 4) frameX = 4;
      
      if (isUp) {
        if (frameX <= 1) {
          setActiveFrameKey('up-far-left');
        } else if (frameX === 2) {
          setActiveFrameKey('up-straight');
        } else {
          setActiveFrameKey('up-far-right');
        }
      } else {
        if (frameX === 0) {
          setActiveFrameKey('normal-far-left');
        } else if (frameX === 1) {
          setActiveFrameKey('normal-slight-left');
        } else if (frameX === 2) {
          setActiveFrameKey('normal-straight');
        } else if (frameX === 3) {
          setActiveFrameKey('normal-slight-right');
        } else {
          setActiveFrameKey('normal-far-right');
        }
      }

    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen flex flex-col justify-between overflow-hidden relative z-10 w-full">

      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full px-6 md:px-10 pt-6 md:pt-8 z-20">
        <nav className="flex justify-between items-center w-full gap-4">
          <button
            onClick={() => handleScroll('about')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-base md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 focus:outline-none"
          >
            {t.navAbout}
          </button>
          <button
            onClick={() => handleScroll('services')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-base md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 focus:outline-none"
          >
            {t.navServices}
          </button>
          <button
            onClick={() => handleScroll('projects')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-base md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 focus:outline-none"
          >
            {t.navProjects}
          </button>
          <button
            onClick={() => handleScroll('contact-section')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-base md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 focus:outline-none"
          >
            {t.navContact}
          </button>

          {/* Language Switcher Toggle */}
          <div className="flex items-center gap-1.5 border border-[#D7E2EA]/20 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider bg-black/20 select-none">
            <button
              onClick={() => setLanguage('en')}
              className={`hover:text-[#D7E2EA] transition-colors focus:outline-none ${language === 'en' ? 'text-[#D7E2EA] underline underline-offset-4' : 'text-[#D7E2EA]/40'}`}
            >
              EN
            </button>
            <span className="text-[#D7E2EA]/20 font-light select-none">|</span>
            <button
              onClick={() => setLanguage('ru')}
              className={`hover:text-[#D7E2EA] transition-colors focus:outline-none ${language === 'ru' ? 'text-[#D7E2EA] underline underline-offset-4' : 'text-[#D7E2EA]/40'}`}
            >
              RU
            </button>
          </div>
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5 w-full z-20 pointer-events-none">
        <FadeIn delay={0.15} y={40} className="w-full flex justify-center">
          <h1 className="hero-heading w-full text-center font-black uppercase leading-none whitespace-nowrap text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]" style={{ letterSpacing: '-0.06em' }}>
            Hi, i&apos;m olga
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait Image wrapped in Magnet */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:bottom-0 sm:translate-y-0 w-[364px] sm:w-[468px] md:w-[572px] lg:w-[676px]">
        <FadeIn delay={0.6} y={30} className="w-full">
          <div className="w-full flex justify-center items-end relative">
            {/* Fallback & Straight Frame (Relative, sets dimensions) */}
            <img
              src="/images/head/straight.png"
              alt="Olga Portrait Fallback"
              className="w-full h-auto object-contain select-none pointer-events-auto"
              draggable={false}
              loading="eager"
            />

            {/* Interactive Turn Frames (Absolute, overlays fallback) */}
            {Object.entries(headFrames).map(([key, url]) => {
              if (key === 'normal-straight') return null; // Fallback handles straight frame
              return (
                <img
                  key={key}
                  src={url}
                  alt={`Olga Head Frame ${key}`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                  className="w-full h-auto object-contain select-none pointer-events-none absolute bottom-0 left-0 transition-opacity duration-75"
                  style={{
                    opacity: activeFrameKey === key ? 1 : 0,
                  }}
                  draggable={false}
                />
              );
            })}
          </div>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 mt-auto z-20">
        <FadeIn delay={0.35} y={20} className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-left">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)]">
            {t.heroTagline}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={() => handleScroll('contact-section')} label={t.heroCTA} />
        </FadeIn>
      </div>
    </section>
  );
};
