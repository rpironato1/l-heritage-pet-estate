import React from 'react';
import { BRAND } from '../../constants';

interface FooterProps {
    onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  
  const handleLinkClick = (e: React.MouseEvent, page: string) => {
      e.preventDefault();
      onNavigate(page);
      window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-estate-900 text-white border-t border-estate-900">
      
      {/* 1. CTA Section - "Vivencie a Exclusividade" */}
      <div className="py-24 md:py-32 flex flex-col items-center text-center px-6 border-b border-white/5 bg-estate-900 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <h2 className="font-serif text-4xl md:text-6xl text-white mb-10 relative z-10">
          Vivencie a Exclusividade
        </h2>
        
        <button 
            onClick={() => onNavigate('contact')}
            className="border border-gold-500/30 text-gold-400 px-10 py-4 font-sans text-[10px] uppercase tracking-[0.25em] hover:bg-gold-400 hover:text-estate-900 hover:border-gold-400 transition-all duration-500 relative z-10"
        >
            Agendar Visita Guiada
        </button>
      </div>

      {/* 2. Main Footer Content */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-24">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-32">
          
          {/* Left: Brand Identity */}
          <div className="lg:w-1/3 space-y-8">
            <div className="space-y-4">
                <h3 className="font-serif text-3xl md:text-4xl text-white">{BRAND.name}</h3>
                <div className="h-[1px] w-12 bg-gold-600/50" />
            </div>
            
            <p className="font-sans text-xs md:text-sm text-white/40 leading-loose max-w-sm font-light">
              {BRAND.tagline} <br />
              Redefinindo os padrões globais de cuidado animal desde 2025.
            </p>
          </div>

          {/* Right: Structured Info Box */}
          <div className="lg:w-2/3 w-full border border-white/10 p-8 md:p-16 relative">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold-500/50" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold-500/50" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
                {/* Contact Column */}
                <div>
                    <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold-500 mb-8">Contato</h4>
                    <div className="space-y-4 font-serif text-lg md:text-xl text-white/80">
                    <a href="mailto:concierge@lheritage.com" className="block hover:text-gold-300 transition-colors">concierge@lheritage.com</a>
                    <p>+55 11 99999-9999</p>
                    <p className="text-white/50 text-base mt-2">Jardins, São Paulo - Brasil</p>
                    </div>
                </div>

                {/* Legal Column */}
                <div>
                    <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold-500 mb-8">Legal</h4>
                    <ul className="space-y-4 font-sans text-[11px] text-white/50 tracking-wide uppercase">
                        <li>
                            <button onClick={(e) => handleLinkClick(e, 'terms')} className="hover:text-white transition-colors text-left border-b border-transparent hover:border-white/30 pb-1">
                                Termos de Serviço
                            </button>
                        </li>
                        <li>
                            <button onClick={(e) => handleLinkClick(e, 'privacy')} className="hover:text-white transition-colors text-left border-b border-transparent hover:border-white/30 pb-1">
                                Política de Privacidade
                            </button>
                        </li>
                        <li>
                            <button onClick={(e) => handleLinkClick(e, 'ethics')} className="hover:text-white transition-colors text-left border-b border-transparent hover:border-white/30 pb-1">
                                Código de Ética
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 mt-20 border-t border-white/5 text-white/20 text-[10px] font-sans uppercase tracking-[0.15em]">
          <p>&copy; 2025 L'Héritage. Todos os direitos reservados.</p>
          <div className="mt-6 md:mt-0 flex space-x-12">
            <a href="#" className="hover:text-gold-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-gold-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};