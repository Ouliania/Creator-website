import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { useLanguage } from '../context/LanguageContext';

export const WorkflowSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="workflow"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] rounded-b-[40px] sm:rounded-b-[50px] md:rounded-b-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 -mt-10 sm:-mt-12 md:-mt-14 relative z-40 w-full overflow-hidden"
    >

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
