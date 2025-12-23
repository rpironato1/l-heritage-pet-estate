import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean; // If true, eager load (for Hero)
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      handleLoad();
    }
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    // Refresh ScrollTrigger once image dimensions are known to prevent layout shifts/jumps
    ScrollTrigger.refresh();
    
    // Animate in
    if (imgRef.current) {
        gsap.to(imgRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out"
        });
    }
  };

  return (
    <div 
        ref={wrapperRef} 
        className={`overflow-hidden bg-estate-800/20 relative ${className}`}
    >
        {/* Placeholder / Skeleton */}
        <div 
            className={`absolute inset-0 bg-estate-200 animate-pulse transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`} 
            style={{ zIndex: 1 }}
        />

        <img
            ref={imgRef}
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async" // Critical: Offloads image decoding from main thread
            onLoad={handleLoad}
            className={`w-full h-full object-cover transition-transform duration-700 will-change-transform opacity-0 scale-105 ${className}`}
            {...props}
        />
    </div>
  );
};