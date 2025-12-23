import React from 'react';
import { SectionHeading } from '../ui/Typography';
import { ServiceCard } from './ServiceCard';
import { IMAGES } from '../../constants';
import { Reveal } from '../utils/AnimationContext';

interface ServicesProps {
    onNavigate: (page: string) => void;
}

const services = [
  {
    id: 'service-spa',
    title: "Royal Spa & Grooming",
    description: "Terapias dermocosméticas importadas, banhos de ozônio e tosa especializada por estilistas premiados internacionalmente.",
    image: IMAGES.spa
  },
  {
    id: 'service-gastronomy',
    title: "Alta Gastronomia",
    description: "Menus desenvolvidos por nutricionistas veterinários e chefs, utilizando ingredientes orgânicos e superfoods selecionadas.",
    image: IMAGES.nutrition
  },
  {
    id: 'service-suites',
    title: "Suítes Presidenciais",
    description: "Hospedagem em ambientes climatizados com aromaterapia, música clássica e monitoramento 24h por equipe de enfermagem.",
    image: IMAGES.hotel
  }
];

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section id="services" className="py-24 md:py-36 px-6 md:px-12 max-w-screen-2xl mx-auto bg-noise">
      <Reveal className="w-full">
        <SectionHeading>
            O Concierge
        </SectionHeading>
      </Reveal>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
        {services.map((service, index) => (
          <Reveal key={index} delay={index * 0.2} width="100%">
            <ServiceCard 
                {...service} 
                index={index} 
                onClick={() => onNavigate(service.id)}
            />
          </Reveal>
        ))}
      </div>
      
      <Reveal className="mt-16 text-center" y={30} delay={0.4}>
        <p className="font-serif italic text-2xl text-estate-800">
          "O luxo reside na ausência de vulgaridade."
        </p>
      </Reveal>
    </section>
  );
};