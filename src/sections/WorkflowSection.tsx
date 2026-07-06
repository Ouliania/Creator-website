import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { useLanguage } from '../context/LanguageContext';

export const WorkflowSection: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Left side (Smiley): drifts rightwards, dips down, spins, scales on a curved (S-curve) path
  const smileyX = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [-50, 140, -20, 200]);
  const smileyY = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ['-10vh', '10vh', '35vh', '60vh']);
  const smileyRotate = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 120, 180, 320]);
  const smileyScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.15, 0.85]);

  // Right side (Arrow): mirrors the left — drifts leftwards, dips down, spins opposite, scales on a curved path
  const arrowX = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [50, -140, 20, -200]);
  const arrowY = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ['-10vh', '10vh', '35vh', '60vh']);
  const arrowRotate = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, -120, -180, -320]);
  const arrowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.15, 0.85]);

  return (
    <section
      ref={sectionRef}
      id="workflow"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] rounded-b-[40px] sm:rounded-b-[50px] md:rounded-b-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 -mt-10 sm:-mt-12 md:-mt-14 relative z-40 w-full overflow-hidden"
    >
      {/* Decorative 3D Corner Images */}
      {/* Left side: 3D Object */}
      <FadeIn
        delay={0.1}
        x={-50}
        y={0}
        duration={0.9}
        className="absolute top-[20%] left-[-2%] sm:left-[1%] md:left-[3%] w-[100px] sm:w-[130px] md:w-[160px] pointer-events-none z-0 opacity-20 md:opacity-80"
      >
        <motion.div style={{ x: smileyX, y: smileyY, rotate: smileyRotate, scale: smileyScale }} className="w-full h-full">
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Object Decor"
            className="w-full h-auto select-none"
            draggable={false}
            loading="lazy"
          />
        </motion.div>
      </FadeIn>

      {/* Right side: 3D Group — symmetric to left */}
      <FadeIn
        delay={0.2}
        x={50}
        y={0}
        duration={0.9}
        className="absolute top-[20%] right-[-2%] sm:right-[1%] md:right-[3%] w-[100px] sm:w-[130px] md:w-[160px] pointer-events-none z-0 opacity-20 md:opacity-80"
      >
        <motion.div style={{ x: arrowX, y: arrowY, rotate: arrowRotate, scale: arrowScale }} className="w-full h-full">
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Group Decor"
            className="w-full h-auto select-none"
            draggable={false}
            loading="lazy"
          />
        </motion.div>
      </FadeIn>

      <div className="max-w-[1400px] mx-auto flex flex-col items-center relative z-10">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20">
            {t.workflowTitle}
          </h2>
        </FadeIn>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 w-full">
          {t.workflow.map((step, index) => (
            <FadeIn
              key={step.num}
              delay={index * 0.15}
              y={30}
              className="bg-[#0C0C0C]/5 border border-[#0C0C0C]/10 rounded-[30px] p-6 sm:p-8 flex flex-col justify-between hover:border-[#0C0C0C]/20 hover:bg-[#0C0C0C]/8 transition-all duration-300 shadow-md"
            >
              <div>
                {/* Step Number */}
                <div className="text-[clamp(2rem,4vw,3.5rem)] font-black text-[#0C0C0C]/25 leading-none mb-4 select-none">
                  {step.num}
                </div>
                {/* Step Title */}
                <h3 className="text-lg sm:text-xl font-bold uppercase text-[#0C0C0C] mb-3">
                  {step.title}
                </h3>
              </div>
              {/* Step Description */}
              <p className="text-sm sm:text-base font-light text-[#0C0C0C]/65 leading-relaxed">
                {step.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
