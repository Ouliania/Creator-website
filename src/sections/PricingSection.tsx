import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { Calendar, Sparkles, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const PricingSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="price"
      className="px-5 sm:px-8 md:px-16 lg:px-24 py-20 sm:py-28 md:py-36 relative z-30 w-full"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(2rem,8vw,107px)] leading-none mb-16 sm:mb-20">
            {t.pricingTitle}
          </h2>
        </FadeIn>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 w-full">
          {/* Card 1: Сроки (Timeline) */}
          <FadeIn
            delay={0.15}
            y={30}
            className="bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-[36px] p-8 sm:p-12 md:p-16 flex flex-col justify-between hover:border-[#D7E2EA]/20 hover:bg-[#D7E2EA]/8 transition-all duration-300 shadow-xl h-full"
          >
            <div>
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs sm:text-sm font-light uppercase tracking-wider text-[#D7E2EA]/50 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#B600A8]" />
                  {t.pricingTimelineTitle}
                </span>
              </div>

              <div className="mb-8 text-left">
                <h3 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-[#D7E2EA] leading-none uppercase mb-4">
                  {t.pricingTimelineSub}
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-light text-[#D7E2EA]/60 leading-relaxed">
                  {t.pricingTimelineDesc}
                </p>
              </div>
            </div>

            {/* Motion Timeline Graphic */}
            <div className="mt-10 bg-black/40 rounded-2xl p-5 border border-[#D7E2EA]/5">
              <div className="flex justify-between text-xs text-[#D7E2EA]/40 mb-3 font-mono">
                <span>{t.pricingTimelineDays1}</span>
                <span className="text-[#B600A8] font-bold">{t.pricingTimelineOptimal}</span>
                <span>{t.pricingTimelineDays10}</span>
              </div>
              {/* Timeline Track */}
              <div className="h-2 w-full bg-[#D7E2EA]/10 rounded-full relative overflow-hidden">
                {/* Background active track indicator */}
                <motion.div
                  initial={{ left: '0%', width: '0%' }}
                  whileInView={{ left: '20%', width: '50%' }}
                  transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-[#7621B0] to-[#B600A8] rounded-full absolute"
                  style={{ boxShadow: '0 0 10px rgba(182, 0, 168, 0.5)' }}
                />
              </div>
              <div className="flex items-center gap-2 mt-4 text-xs sm:text-sm text-[#D7E2EA]/40 font-light text-left">
                <AlertCircle className="w-4 h-4 text-[#B600A8] flex-shrink-0" />
                <span>{t.pricingTimelineConceptNote}</span>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Стоимость (Pricing) */}
          <FadeIn
            delay={0.3}
            y={30}
            className="bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-[36px] p-8 sm:p-12 md:p-16 flex flex-col justify-between hover:border-[#D7E2EA]/20 hover:bg-[#D7E2EA]/8 transition-all duration-300 shadow-xl h-full"
          >
            <div>
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs sm:text-sm font-light uppercase tracking-wider text-[#D7E2EA]/50 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#BE4C00]" />
                  {t.pricingCostTitle}
                </span>
              </div>

              <div className="mb-8 text-left">
                <h3 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-[#D7E2EA] leading-none uppercase mb-4">
                  {t.pricingCostSub}
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-light text-[#D7E2EA]/60 leading-relaxed">
                  {t.pricingCostDesc}
                </p>
              </div>
            </div>

            {/* Interactive Pricing Tiers list */}
            <div className="mt-10 flex flex-col gap-3">
              <div className="flex justify-between items-center bg-black/30 hover:bg-black/50 border border-[#D7E2EA]/5 hover:border-[#D7E2EA]/15 p-4 sm:p-5 rounded-2xl transition-all duration-300 select-none">
                <span className="text-sm sm:text-base font-medium text-[#D7E2EA]/80">{t.pricingTierStatic}</span>
                <span className="text-sm sm:text-base font-mono font-bold text-[#D7E2EA]">{t.pricingStaticPrice}</span>
              </div>
              <div className="flex justify-between items-center bg-black/30 hover:bg-black/50 border border-[#D7E2EA]/5 hover:border-[#D7E2EA]/15 p-4 sm:p-5 rounded-2xl transition-all duration-300 select-none">
                <span className="text-sm sm:text-base font-medium text-[#D7E2EA]/80">{t.pricingTierAnimated}</span>
                <span className="text-sm sm:text-base font-mono font-bold text-[#D7E2EA]">{t.pricingAnimatedPrice}</span>
              </div>
              <div className="flex justify-between items-center bg-black/30 hover:bg-black/50 border border-[#D7E2EA]/5 hover:border-[#D7E2EA]/15 p-4 sm:p-5 rounded-2xl transition-all duration-300 select-none">
                <span className="text-sm sm:text-base font-medium text-[#D7E2EA]/80">{t.pricingTierBulk}</span>
                <span className="text-xs sm:text-sm font-mono font-bold px-3 py-1.5 rounded-full bg-[#BE4C00]/25 text-[#BE4C00] uppercase tracking-wider">{t.pricingBulkDiscount}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
