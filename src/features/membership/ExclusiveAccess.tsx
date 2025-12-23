import React from 'react';
import { IMAGES } from '../../constants';
import { Button } from '../ui/Button';
import { DisplayHeading, BodyText } from '../ui/Typography';

export const ExclusiveAccess: React.FC = () => {
  return (
    <section id="membership" className="relative py-32 bg-estate-900 text-estate-50 overflow-hidden">
      {/* Decorative Gold Circle */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] border border-gold-500/10 rounded-full translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <span className="text-gold-400 font-sans text-xs uppercase tracking-[0.3em] block mb-6">
            Membership Only
          </span>
          <DisplayHeading className="text-white mb-8">
            The Golden Circle
          </DisplayHeading>
          <BodyText className="text-white/70 mb-8 text-lg">
            O acesso às instalações do L'Héritage é restrito a membros aprovados pelo nosso comitê. 
            Garantimos um ambiente de serenidade absoluta, onde cada detalhe é orquestrado para a 
            segurança e conforto do seu animal.
          </BodyText>

          <ul className="space-y-6 mb-12">
            {[
              "Concierge Veterinário dedicado 24/7",
              "Transporte em veículo blindado climatizado",
              "Acesso prioritário a eventos sociais exclusivos",
              "Alfaiataria sob medida para seu pet"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center space-x-4">
                <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                <span className="font-serif text-xl italic text-estate-100">{item}</span>
              </li>
            ))}
          </ul>

          {/* New Variant Usage: Gold Variant */}
          <Button variant="gold">
            Aplicar para Membership
          </Button>
        </div>

        {/* Image Composition */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative z-10 aspect-[4/5] w-full max-w-md mx-auto">
            <img 
              src={IMAGES.interior} 
              alt="Interior do Estate" 
              className="w-full h-full object-cover shadow-2xl"
            />
            {/* Overlay Border */}
            <div className="absolute top-6 -right-6 w-full h-full border border-gold-500/30 -z-10" />
          </div>
        </div>

      </div>
    </section>
  );
};