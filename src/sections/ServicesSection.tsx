import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { useLanguage } from '../context/LanguageContext';

interface ServiceItem {
  num: string;
  name: string;
  desc: string;
}

interface ServiceRowProps {
  service: ServiceItem;
  index: number;
  total: number;
}

const ServiceRow: React.FC<ServiceRowProps> = ({ service, index, total }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of this specific row from screen entry to center-bottom viewport
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ['start end', 'center 60%'],
  });

  // Calculate paper curling/twisting scroll transforms
  const x = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 0]);
  const skewY = useTransform(scrollYProgress, [0, 1], [-4, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  return (
    <motion.div
      ref={rowRef}
      style={{
        x,
        rotate,
        skewY,
        scale,
        opacity,
        originX: 0, // origin-left
      }}
      className={`w-full py-8 sm:py-10 md:py-12 border-t border-[#0C0C0C]/15 ${
        index === total - 1 ? 'border-b' : ''
      }`}
    >
      <div className="flex gap-6 sm:gap-10 md:gap-16 items-center">
        {/* Left: Number */}
        <div className="font-black text-[#0C0C0C] text-[clamp(3rem,10vw,140px)] leading-none select-none min-w-[70px] sm:min-w-[120px] md:min-w-[170px] text-left">
          {service.num}
        </div>

        {/* Right: Stacked Name + Description */}
        <div className="flex flex-col text-left justify-center">
          <h3 className="font-medium text-[#0C0C0C] uppercase text-[clamp(1rem,2.2vw,2.1rem)] leading-tight mb-2">
            {service.name}
          </h3>
          <p className="font-light text-[#0C0C0C]/60 leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)]">
            {service.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] rounded-b-[40px] sm:rounded-b-[50px] md:rounded-b-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20 w-full"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28">
            {t.servicesTitle}
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="w-full flex flex-col">
          {t.services.map((service, index) => (
            <ServiceRow
              key={service.num}
              service={service}
              index={index}
              total={t.services.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
