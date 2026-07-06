import React, { useRef, useState, useEffect } from 'react';

const isVideoUrl = (url: string) => {
  return url.endsWith('.mp4') || url.endsWith('.webm') || url.includes('/videos/');
};

const row1Images = [
  '/videos/case2_main.mp4',
  '/videos/case1_main.mp4',
  '/videos/case3_main.mp4',
  '/videos/tech_product.mp4',
];

const row2Images = [
  '/videos/case4_main.mp4',
  '/videos/case5_main.mp4',
  '/videos/case6_main.mp4',
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculatedOffset);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const row1Tripled = [...row1Images, ...row1Images, ...row1Images];
  const row2Tripled = [...row2Images, ...row2Images, ...row2Images];

  return (
    <div
      ref={sectionRef}
      className="relative z-10 pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1: Moves RIGHT on scroll */}
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-3 flex-nowrap"
            style={{
              transform: `translateX(calc(-33.3333% + ${offset - 200}px))`,
              willChange: 'transform',
            }}
          >
            {row1Tripled.map((url, index) => (
              <div
                key={`row1-${index}`}
                className="w-[280px] h-[180px] sm:w-[350px] sm:h-[225px] md:w-[420px] md:h-[270px] flex-shrink-0 rounded-2xl overflow-hidden"
              >
                {isVideoUrl(url) ? (
                  <video
                    src={url}
                    className="w-full h-full object-cover rounded-2xl select-none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    draggable={false}
                  />
                ) : (
                  <img
                    src={url}
                    alt={`Marquee 1-${index}`}
                    className="w-full h-full object-cover rounded-2xl select-none"
                    loading="lazy"
                    draggable={false}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-3 flex-nowrap"
            style={{
              transform: `translateX(calc(-33.3333% - ${offset - 200}px))`,
              willChange: 'transform',
            }}
          >
            {row2Tripled.map((url, index) => (
              <div
                key={`row2-${index}`}
                className="w-[280px] h-[180px] sm:w-[350px] sm:h-[225px] md:w-[420px] md:h-[270px] flex-shrink-0 rounded-2xl overflow-hidden"
              >
                {isVideoUrl(url) ? (
                  <video
                    src={url}
                    className="w-full h-full object-cover rounded-2xl select-none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    draggable={false}
                  />
                ) : (
                  <img
                    src={url}
                    alt={`Marquee 2-${index}`}
                    className="w-full h-full object-cover rounded-2xl select-none"
                    loading="lazy"
                    draggable={false}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
