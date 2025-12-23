import React, { useEffect } from 'react';
import { IMAGES } from '../../constants';
import { DisplayHeading, BodyText } from '../ui/Typography';
import { ArrowLeft } from 'lucide-react';
import { ParallaxImage, Reveal } from '../utils/AnimationContext';
import { OptimizedImage } from '../ui/OptimizedImage';

interface ExploreEstatePageProps {
  onNavigate: (page: string) => void;
}

const EstateSection: React.FC<{ 
    title: string; 
    subtitle: string; 
    description: string; 
    image: string; 
    align: 'left' | 'right' 
}> = ({ title, subtitle, description, image, align }) => (
    <div className={`flex flex-col ${align === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 py-24 overflow-hidden`}>
        <div className="w-full lg:w-1/2 relative group">
            <div className="aspect-[4/5] md:aspect-[16/10] overflow-hidden relative bg-estate-200">
                {/* ParallaxImage now handles lazy loading internally */}
                <ParallaxImage src={image} alt={title} className="w-full h-full" />
            </div>
            {/* Elegant border offset */}
            <div className={`absolute top-4 ${align === 'right' ? '-right-4' : '-left-4'} w-full h-full border border-estate-900/10 -z-10`} />
        </div>
        
        <div className="w-full lg:w-1/2 text-center lg:text-left px-6">
            <Reveal width="100%" y={30}>
                <span className="text-gold-600 font-sans text-xs uppercase tracking-[0.3em] mb-4 block">
                    {subtitle}
                </span>
                <h3 className="font-serif text-4xl md:text-5xl text-estate-900 mb-6">{title}</h3>
                <div className={`h-[1px] w-16 bg-gold-400 mb-8 ${align === 'right' ? 'mx-auto lg:mx-0' : 'mx-auto lg:ml-auto lg:mr-0'}`} />
                <BodyText className={`text-lg leading-loose ${align === 'right' ? 'lg:text-left' : 'lg:text-right'}`}>
                    {description}
                </BodyText>
            </Reveal>
        </div>
    </div>
);

export const ExploreEstatePage: React.FC<ExploreEstatePageProps> = ({ onNavigate }) => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-estate-50 min-h-screen">
            
            {/* Hero with Fixed Background Logic converted to Optimized Image for performance */}
            <div className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center bg-estate-900">
                 {/* 
                   Fixed backgrounds are terrible for mobile performance (repaints). 
                   We simulate it or use a simple absolute position with object-cover.
                   For "Explore" page, we will use a static clean image for better stability.
                 */}
                <div className="absolute inset-0">
                    <OptimizedImage 
                        src={IMAGES.interior} 
                        alt="Estate Interior" 
                        className="w-full h-full object-cover opacity-60"
                        priority
                    />
                </div>
                
                <div className="absolute top-8 left-8 z-20">
                    <button 
                        onClick={() => onNavigate('home')} 
                        className="text-white hover:text-gold-300 transition-colors flex items-center gap-2 font-sans text-xs tracking-widest uppercase bg-black/20 backdrop-blur-sm px-4 py-2 rounded-sm border border-white/10 hover:border-gold-300"
                    >
                        <ArrowLeft size={14} /> Voltar
                    </button>
                </div>

                <Reveal className="relative z-10 text-center max-w-4xl px-6 pt-20">
                    <span className="block text-gold-300 font-sans text-xs uppercase tracking-[0.4em] mb-6">
                        O Santuário
                    </span>
                    <DisplayHeading className="text-white mb-6 drop-shadow-2xl">
                        Um Refúgio Sem Paralelos
                    </DisplayHeading>
                    <p className="font-serif text-xl md:text-2xl text-white/90 italic font-light max-w-2xl mx-auto">
                        "Arquitetura atemporal em harmonia com a natureza, projetada para a paz de espírito absoluta."
                    </p>
                </Reveal>
            </div>

            {/* Intro Text */}
            <Reveal className="max-w-3xl mx-auto py-24 px-6 text-center" y={50}>
                <p className="font-serif text-2xl text-estate-900 leading-relaxed">
                    Localizado em uma reserva preservada de 20.000m², o L'Héritage combina a segurança de uma fortaleza com a serenidade de um templo. Cada espaço foi concebido sob os princípios da neuroarquitetura animal.
                </p>
            </Reveal>

            {/* Sections */}
            <div className="max-w-screen-xl mx-auto px-6 pb-24">
                <EstateSection 
                    align="right"
                    subtitle="Os Jardins"
                    title="Jardins Sensoriais"
                    image={IMAGES.spa} 
                    description="Projetados pelo paisagista francês Jean-Michel Blanc, nossos jardins não são apenas decorativos. São circuitos de olfação enriquecida, com lavanda, alecrim e camomila, criando uma aromaterapia natural contínua para os hóspedes em seus passeios matinais."
                />

                <EstateSection 
                    align="left"
                    subtitle="Instalações"
                    title="Arquitetura Hospitalar Invisível"
                    image={IMAGES.hotel}
                    description="Por trás das boiseries de carvalho e dos pisos de mármore aquecido, reside uma infraestrutura clínica de ponta. Filtragem de ar HEPA hospitalar, isolamento acústico de estúdio e iluminação circadiana garantem que a saúde física seja tão cuidada quanto o conforto."
                />

                <EstateSection 
                    align="right"
                    subtitle="Lounge Social"
                    title="O Salão Principal"
                    image={IMAGES.interior}
                    description="O coração do Estate. Um espaço de socialização monitorada, onde música clássica suave ecoa e lareiras ecológicas mantêm a temperatura ideal. Aqui, temperamentos compatíveis interagem sob o olhar atento de nossos comportamentalistas."
                />
            </div>

            {/* Footer CTA */}
            <div className="bg-estate-900 text-center py-24 px-6">
                <Reveal>
                    <DisplayHeading className="text-white mb-8 text-4xl">Vivencie a Exclusividade</DisplayHeading>
                    <button 
                        onClick={() => onNavigate('request-invitation')}
                        className="inline-block border border-gold-400 text-gold-400 px-8 py-4 font-sans text-xs uppercase tracking-[0.2em] hover:bg-gold-400 hover:text-estate-900 transition-all duration-300"
                    >
                        Agendar Visita Guiada
                    </button>
                </Reveal>
            </div>

        </div>
    );
};