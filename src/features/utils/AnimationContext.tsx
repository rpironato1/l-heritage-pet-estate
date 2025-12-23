import React, { useEffect, useLayoutEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Enterprise Grade Settings for Smoothness
gsap.config({
  autoSleep: 60, // Sleep GSAP when tab is hidden to save battery
  force3D: true, // Force GPU acceleration
});

// --- Smooth Scroll Provider ---
export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useLayoutEffect(() => {
    // Singleton pattern for StrictMode safety
    if (!lenisRef.current) {
        lenisRef.current = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        lenisRef.current.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenisRef.current?.raf(time * 1000);
        });
        
        // Critical for smooth animations without jumps during heavy loads
        gsap.ticker.lagSmoothing(1000, 16); 
    }

    return () => {
      if (lenisRef.current) {
         lenisRef.current.destroy();
         lenisRef.current = null;
      }
    };
  }, []);

  return <>{children}</>;
};

// --- Optimized Reveal Component ---
interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    className?: string;
    y?: number;
}

export const Reveal: React.FC<RevealProps> = ({ children, width = "fit-content", delay = 0, className = "", y = 50 }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        // Set initial state to avoid FOUC
        gsap.set(ref.current, { y: y, opacity: 0, willChange: "transform, opacity" });

        const anim = gsap.to(ref.current, {
            y: 0,
            opacity: 1,
            duration: 1.0,
            delay: delay,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ref.current,
                start: "top 90%", // Trigger slightly earlier for smoother feel
                toggleActions: "play none none reverse" 
            },
            onComplete: () => {
                // Cleanup will-change to free up GPU memory after animation
                if(ref.current) gsap.set(ref.current, { willChange: "auto" });
            }
        });

        return () => {
            anim.kill();
        };
    }, [delay, y]);

    return (
        <div className={`${className}`} style={{ width }} ref={ref}>
            {children}
        </div>
    );
};

// --- High Performance Parallax Image Component ---
import { OptimizedImage } from '../ui/OptimizedImage';

export const ParallaxImage: React.FC<{ src: string, alt: string, className?: string, speed?: number }> = ({ src, alt, className = "", speed = 0.5 }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imgWrapperRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!containerRef.current || !imgWrapperRef.current) return;

        const anim = gsap.fromTo(imgWrapperRef.current,
            { yPercent: -15 }, // Smaller range for smoother, less jerky movement
            {
                yPercent: 15,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom", 
                    end: "bottom top", 
                    scrub: 0.5, // Add a small scrub delay (smoothing) to the parallax itself
                }
            }
        );
        
        return () => {
            anim.kill();
        };
    }, []);

    return (
        <div ref={containerRef} className={`overflow-hidden relative ${className}`}>
            <div ref={imgWrapperRef} className="w-full h-[130%] absolute top-[-15%] left-0 will-change-transform">
                <OptimizedImage 
                    src={src} 
                    alt={alt} 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};