import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/ContactButton';
import { useLanguage } from '../context/LanguageContext';

export const CTASection: React.FC = () => {
  const { t } = useLanguage();

  const handleContact = () => {
    window.open('https://t.me/ulyanakirp', '_blank');
  };

  return (
    <section
      id="contact-section"
      className="relative z-30 w-full py-24 sm:py-32 md:py-40 flex flex-col items-center justify-center text-center px-5 sm:px-8 md:px-10 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col items-center justify-center relative z-10">
        {/* Sub-headline / Category */}
        <FadeIn delay={0} y={20}>
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#B600A8] mb-4 sm:mb-6 block">
            Get in touch
          </span>
        </FadeIn>

        {/* Main Headline */}
        <FadeIn delay={0.1} y={30}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.2rem,7vw,100px)] leading-[1.05] mb-8 sm:mb-10 max-w-4xl">
            {t.ctaTitle}
          </h2>
        </FadeIn>

        {/* Description Text */}
        <FadeIn delay={0.2} y={30} className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-[#D7E2EA]/60 font-light leading-relaxed text-[clamp(0.95rem,1.8vw,1.35rem)]">
            {t.ctaDesc}
          </p>
        </FadeIn>

        {/* Action Button */}
        <FadeIn delay={0.3} y={20}>
          <ContactButton onClick={handleContact} label={t.ctaButton} />
        </FadeIn>
      </div>
    </section>
  );
};
