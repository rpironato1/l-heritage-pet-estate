import React from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const DisplayHeading: React.FC<TextProps> = ({ children, className = '' }) => (
  <h1 className={`font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-estate-900 ${className}`}>
    {children}
  </h1>
);

export const SectionHeading: React.FC<TextProps & { align?: 'left' | 'center' | 'right' }> = ({ 
  children, 
  className = '', 
  align = 'center' 
}) => {
  const alignmentClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';
  
  return (
    <div className={`mb-12 ${alignmentClass}`}>
      <span className="text-gold-600 font-sans text-xs uppercase tracking-[0.3em] mb-4 block">
        Exclusividade L'Héritage
      </span>
      <h2 className={`font-serif text-4xl md:text-5xl text-estate-900 ${className}`}>
        {children}
      </h2>
      <div className={`h-[1px] w-24 bg-gold-400 mt-6 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};

export const BodyText: React.FC<TextProps> = ({ children, className = '' }) => (
  <p className={`font-sans text-estate-800/70 leading-relaxed text-sm md:text-base font-light tracking-wide ${className}`}>
    {children}
  </p>
);