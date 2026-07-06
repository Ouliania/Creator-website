import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Top-Left (Moon): moves down, rotates right
  const moonY = useTransform(scrollYProgress, [0, 1], [-70, 70]);
  const moonRotate = useTransform(scrollYProgress, [0, 1], [0, 110]);

  // Top-Right (Lego): moves down, rotates left
  const legoY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const legoRotate = useTransform(scrollYProgress, [0, 1], [0, -90]);

  // Bottom-Left (Object): moves up, rotates right
  const objectY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const objectRotate = useTransform(scrollYProgress, [0, 1], [0, 80]);

  // Bottom-Right (Group): moves up, rotates left
  const groupY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const groupRotate = useTransform(scrollYProgress, [0, 1], [0, -130]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen relative z-10 flex flex-col justify-center items-center overflow-hidden px-5 sm:px-8 md:px-10 py-20"
    >
      {/* Decorative 3D Corner Images */}
      {/* Top-Left: Moon Icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none z-0"
      >
        <motion.div style={{ y: moonY, rotate: moonRotate }} className="w-full h-full">
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Moon Decor"
            className="w-full h-auto select-none"
            draggable={false}
            loading="lazy"
          />
        </motion.div>
      </FadeIn>

      {/* Bottom-Left: 3D Object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none z-0"
      >
        <motion.div style={{ y: objectY, rotate: objectRotate }} className="w-full h-full">
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Object Decor"
            className="w-full h-auto select-none"
            draggable={false}
            loading="lazy"
          />
        </motion.div>
      </FadeIn>

      {/* Top-Right: Lego Icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none z-0"
      >
        <motion.div style={{ y: legoY, rotate: legoRotate }} className="w-full h-full">
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego Decor"
            className="w-full h-auto select-none"
            draggable={false}
            loading="lazy"
          />
        </motion.div>
      </FadeIn>

      {/* Bottom-Right: 3D Group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none z-0"
      >
        <motion.div style={{ y: groupY, rotate: groupRotate }} className="w-full h-full">
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Group Decor"
            className="w-full h-auto select-none"
            draggable={false}
            loading="lazy"
          />
        </motion.div>
      </FadeIn>

      {/* Main Content Area */}
      <div className="flex flex-col items-center justify-center text-center z-10 w-full max-w-4xl">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)] text-center">
            {t.aboutTitle}
          </h2>
        </FadeIn>

        {/* Gap spacer: gap-10 sm:gap-14 md:gap-16 */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated Paragraph text block */}
        <AnimatedText
          key={t.aboutText}
          text={t.aboutText}
          className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)] text-center px-4"
        />

        {/* Gap spacer: gap-16 sm:gap-20 md:gap-24 */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact button wrapper with ID for smooth scrolling target */}
        <div id="contact-section">
          <FadeIn delay={0} y={30}>
            <ContactButton onClick={() => window.open('https://t.me/ulyanakirp', '_blank')} label={t.heroCTA} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
