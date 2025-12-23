import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BodyText } from '../ui/Typography';
import { OptimizedImage } from '../ui/OptimizedImage';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
  onClick: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, index, onClick }) => {
  return (
    <div 
        className="group relative w-full h-[500px] overflow-hidden cursor-pointer border border-estate-200 bg-estate-100"
        onClick={onClick}
    >
      <div className="absolute inset-0 w-full h-full">
        <OptimizedImage 
            src={image} 
            alt={title}
            className="w-full h-full transition-transform duration-[1.5s] ease-out group-hover:scale-110 will-change-transform"
        />
      </div>
      
      <div className="absolute inset-0 bg-estate-900/40 group-hover:bg-estate-900/60 transition-colors duration-500 z-10" />
      
      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-20">
        <div className="flex justify-between items-start">
          <span className="text-white/80 font-serif text-xl italic">0{index + 1}</span>
          <ArrowUpRight className="text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 will-change-transform">
          <h3 className="font-serif text-3xl text-white mb-4">{title}</h3>
          <div className="h-[1px] w-0 group-hover:w-full bg-gold-400 transition-all duration-700 mb-6" />
          <BodyText className="text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
            {description}
          </BodyText>
          <span className="mt-4 inline-block text-[10px] text-gold-300 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200 transform translate-y-2 group-hover:translate-y-0">
            Ver Detalhes
          </span>
        </div>
      </div>
    </div>
  );
};