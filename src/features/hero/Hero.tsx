import React, { useRef, useLayoutEffect } from 'react';
import { IMAGES } from '../../constants';
import { DisplayHeading, BodyText } from '../ui/Typography';
import { Button } from '../ui/Button';
import { OptimizedImage } from '../ui/OptimizedImage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Parallax Background
      // We animate the div containing the image, not the image directly via CSS
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // 2. Entrance Animation Timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      const elements = contentRef.current?.children;
      
      if (elements) {
        tl.fromTo(elements, 
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.5, stagger: 0.15, delay: 0.2 }
        );
      }
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center justify-center bg-estate-900">
      {/* Background with Parallax GSAP */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform"
      >
        <OptimizedImage 
            src={IMAGES.hero} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-80"
            priority={true} // Load this immediately
        />
      </div>
      
      {/* Luxury Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-0 pointer-events-none" />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 text-center max-w-4xl px-6">
        <div className="block mb-6">
            <span className="text-gold-300 font-sans text-xs md:text-sm uppercase tracking-[0.4em]">
            Est. MMXXIV &bull; Rio de Janeiro &bull; Paris
            </span>
        </div>
        
        <div className="mb-8 drop-shadow-2xl">
            <DisplayHeading className="text-white">
            Curadoria de Vida <br />
            <span className="italic font-light text-gold-100 block mt-2">Para o Extraordinário</span>
            </DisplayHeading>
        </div>

        <div className="mb-12">
            <BodyText className="text-white/90 max-w-lg mx-auto text-lg">
            O primeiro Private Members Club dedicado inteiramente ao bem-estar, 
            estética e longevidade do seu animal de estimação.
            </BodyText>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Button 
            className="border-white text-white hover:bg-gold-400 hover:border-gold-400 hover:text-estate-900 min-w-[200px]"
            onClick={() => onNavigate('request-invitation')}
          >
            Solicitar Convite
          </Button>
          
          <Button 
            variant="text" 
            className="text-white hover:text-gold-300 min-w-[200px]"
            withIcon
            onClick={() => onNavigate('explore-estate')}
          >
            Explorar o Estate
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.3em] vertical-rl">Scroll</span>
        <div className="h-12 w-[1px] bg-white/30 mx-auto mt-4"></div>
      </div>
    </div>
  );
};