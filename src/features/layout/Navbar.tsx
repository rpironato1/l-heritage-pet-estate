import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND } from '../../constants';

interface NavbarProps {
    onNavigate: (page: string) => void;
    activePage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    
    // Logic: If linking to a section hash (#), go to home then scroll. 
    // If linking to a page key, switch page.
    if (target.startsWith('#')) {
        onNavigate('home');
        // Allow time for render before scrolling
        setTimeout(() => {
            const element = document.querySelector(target);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        onNavigate(target);
        window.scrollTo(0, 0);
    }
  };

  // Login page usually hides the main navbar or makes it very minimal
  if (activePage === 'login') return null;

  const isLightBackground = activePage !== 'home';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-700 ${
        isScrolled || isLightBackground
          ? 'bg-estate-50/95 backdrop-blur-md border-b border-estate-200 py-4' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="z-50">
          <a 
            href="#" 
            onClick={(e) => handleNavClick(e, 'home')}
            className={`font-serif text-2xl md:text-3xl tracking-widest font-semibold transition-colors duration-500 ${
                isScrolled || isLightBackground || isMobileOpen ? 'text-estate-900' : 'text-white'
            }`}
          >
            {BRAND.name}
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
            {[
                { name: 'O Estate', target: '#estate' },
                { name: 'Concierge', target: '#services' },
                { name: 'Membros', target: '#membership' },
                { name: 'Contato', target: 'contact' },
            ].map((link) => (
                <a 
                    key={link.name} 
                    href={link.target}
                    onClick={(e) => handleNavClick(e, link.target)}
                    className={`font-sans text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:text-gold-400 cursor-pointer ${
                        isScrolled || isLightBackground ? 'text-estate-900' : 'text-white/90 hover:text-white'
                    }`}
                >
                    {link.name}
                </a>
            ))}
          
          <button 
            onClick={() => onNavigate('login')}
            className={`border px-6 py-3 font-sans text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
              isScrolled || isLightBackground
                ? 'border-estate-900 text-estate-900 hover:bg-estate-900 hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-estate-900'
            }`}
          >
            Acesso Membros
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 text-gold-400"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={28} className="text-estate-900" /> : <Menu size={28} className={isScrolled || isLightBackground ? 'text-estate-900' : 'text-white'} />}
        </button>

        {/* Mobile Overlay - Added md:hidden to prevent desktop rendering */}
        <div className={`fixed inset-0 bg-estate-50 flex flex-col items-center justify-center space-y-8 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden ${isMobileOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          {[
                { name: 'Home', target: 'home' },
                { name: 'Concierge', target: '#services' },
                { name: 'Membros', target: '#membership' },
                { name: 'Contato', target: 'contact' },
                { name: 'Login', target: 'login' },
          ].map((link) => (
            <a 
              key={link.name} 
              href="#"
              onClick={(e) => handleNavClick(e, link.target)}
              className="font-serif text-4xl text-estate-900 hover:text-gold-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};