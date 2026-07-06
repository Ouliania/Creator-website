import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { useLanguage } from '../context/LanguageContext';

const isVideoUrl = (url: string) => {
  return url.endsWith('.mp4') || url.endsWith('.webm') || url.includes('/videos/');
};

interface Project {
  num: string;
  name: string;
  category: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
  link: string;
}

const projectsData: Project[] = [
  {
    num: '01',
    name: 'Elysian',
    category: 'Промо продукта',
    col1Img1: '/images/case05/front.jpeg',
    col1Img2: '/images/case05/closeup.jpeg',
    col2Img: '/videos/case5_main.mp4',
    link: '#',
  },
  {
    num: '02',
    name: 'Nextlevel Studio',
    category: 'Рекламная кампания',
    col1Img1: '/images/case01/zoom-out.jpeg',
    col1Img2: '/images/case01/close-up.jpeg',
    col2Img: '/videos/case1_main.mp4',
    link: '#',
  },
  {
    num: '03',
    name: 'Aura Brand Identity',
    category: 'Бренд колясок',
    col1Img1: '/images/case02/front.jpeg',
    col1Img2: '/images/case02/closeup.jpeg',
    col2Img: '/videos/case2_main.mp4',
    link: '#',
  },
  {
    num: '04',
    name: 'Solaris Digital',
    category: 'Бренд сумок',
    col1Img1: '/images/case03/front.jpeg',
    col1Img2: '/images/case03/closeup.jpeg',
    col2Img: '/videos/case3_main.mp4',
    link: '#',
  },
  {
    num: '05',
    name: 'Zenith Accessories',
    category: '3D Видеопрезентация',
    col1Img1: '/images/case04/front.jpeg',
    col1Img2: '/images/case04/closeup.jpeg',
    col2Img: '/videos/case4_main.mp4',
    link: '#',
  },
  {
    num: '06',
    name: 'Праздник в коробке',
    category: 'Оформление праздников',
    col1Img1: '/images/case06/front.jpeg',
    col1Img2: '/images/case06/closeup.jpeg',
    col2Img: '/videos/case6_main.mp4',
    link: '#',
  },
  {
    num: '07',
    name: 'Lipstick Design',
    category: 'Реклама помады',
    col1Img1: '/images/case07/closeup.jpeg',
    col1Img2: '/images/case07/main.jpeg',
    col2Img: '/videos/lip_gloss_08.mp4',
    link: '#',
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  // Tracks the scroll progress of this specific card container to trigger scale down
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const translatedCategory = t.projects[index]?.category || project.category;
  const translatedName = t.projects[index]?.name || project.name;

  return (
    <div
      ref={containerRef}
      style={{ zIndex: index * 10 }}
      className="h-[100vh] sticky top-0 w-full flex justify-center items-start pt-[10vh] pointer-events-none"
    >
      <motion.div
        style={{
          scale,
          marginTop: `${index * 14}px`,
        }}
        className="w-full max-w-[1260px] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-2xl h-[85vh] sm:h-[85vh] pointer-events-auto"
      >
        {/* Top Row */}
        <div className="flex justify-between items-center w-full border-b border-[#D7E2EA]/15 pb-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            {/* Number */}
            <div className="font-black text-[#D7E2EA] text-[clamp(2.5rem,6vw,80px)] leading-none select-none">
              {project.num}
            </div>
            {/* Category + Name */}
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-light uppercase tracking-wider text-[#D7E2EA]/60">
                {translatedCategory}
              </span>
              <h3 className="text-base sm:text-xl md:text-3xl font-black uppercase text-[#D7E2EA] leading-tight">
                {translatedName}
              </h3>
            </div>
          </div>

          {/* Action Button */}
          <div>
            <LiveProjectButton onClick={() => window.open('https://t.me/ulyanakirp', '_blank')} label={t.projectButton} />
          </div>
        </div>

        {/* Bottom Row - Two Column Image Grid */}
        <div className="flex gap-3 sm:gap-4 md:gap-6 flex-1 w-full min-h-0">
          {/* Left Column (33%) — two stacked images with fixed clamp heights */}
          <div className="w-[33%] flex flex-col gap-3 sm:gap-4">
            {/* Top image */}
            <div
              className="w-full rounded-[30px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden flex-shrink-0"
              style={{ height: 'clamp(110px, 13vw, 190px)' }}
            >
              {isVideoUrl(project.col1Img1) ? (
                <video
                  src={project.col1Img1}
                  className="w-full h-full object-cover select-none transition-transform duration-500 ease-out hover:scale-105"
                  autoPlay
                  loop
                  muted
                  playsInline
                  draggable={false}
                />
              ) : (
                <img
                  src={project.col1Img1}
                  alt={`${translatedName} Details 1`}
                  className="w-full h-full object-cover select-none transition-transform duration-500 ease-out hover:scale-105"
                  loading="lazy"
                  draggable={false}
                />
              )}
            </div>
            {/* Bottom image */}
            <div
              className="w-full rounded-[30px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden flex-shrink-0"
              style={{ height: 'clamp(140px, 18vw, 280px)' }}
            >
              <img
                src={project.col1Img2}
                alt={`${translatedName} Details 2`}
                className="w-full h-full object-cover select-none transition-transform duration-500 ease-out hover:scale-105"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>

          {/* Right Column (67%) — single tall image */}
          <div className="w-[67%] h-full rounded-[30px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden relative">
            {isVideoUrl(project.col2Img) ? (
              <video
                src={project.col2Img}
                className="w-full h-full object-cover rounded-[30px] sm:rounded-[50px] md:rounded-[60px] select-none transition-transform duration-500 ease-out hover:scale-105"
                autoPlay
                loop
                muted
                playsInline
                draggable={false}
              />
            ) : (
              <img
                src={project.col2Img}
                alt={`${translatedName} Showcase`}
                className="w-full h-full object-cover select-none transition-transform duration-500 ease-out hover:scale-105"
                loading="lazy"
                draggable={false}
              />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 -mt-10 sm:-mt-12 md:-mt-14 relative z-30 w-full"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)] text-center">
            {t.projectsTitle}
          </h2>
        </FadeIn>

        {/* Cards Stack */}
        <div className="w-full flex flex-col">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.num}
              project={project}
              index={index}
              totalCards={projectsData.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
