import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text' | 'gold';
  withIcon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  withIcon = false,
  className = '',
  ...props 
}) => {
  const baseStyle = "inline-flex items-center justify-center transition-all duration-500 font-sans uppercase tracking-[0.2em] text-xs py-4 px-8 border";
  
  const variants = {
    // Primary: Dark BG -> Hover Gold BG with DARK text (High Contrast)
    primary: "bg-estate-900 text-white border-estate-900 hover:bg-gold-400 hover:border-gold-400 hover:text-estate-900",
    
    // Outline: Transparent BG -> Hover Dark BG with White text
    outline: "bg-transparent text-estate-900 border-estate-900 hover:bg-estate-900 hover:text-white",
    
    // Gold: Gold BG with Dark Text -> Hover Dark BG with White text
    gold: "bg-gold-400 text-estate-900 border-gold-400 hover:bg-estate-900 hover:border-estate-900 hover:text-white",

    // Text: Simple link style
    text: "bg-transparent text-estate-900 border-transparent hover:text-gold-600 px-0"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
      {withIcon && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};