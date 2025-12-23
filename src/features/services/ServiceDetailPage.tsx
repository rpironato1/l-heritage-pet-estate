import React, { useEffect } from 'react';
import { ServiceDetailData } from './serviceData';
import { DisplayHeading, BodyText } from '../ui/Typography';
import { Button } from '../ui/Button';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

interface ServiceDetailPageProps {
    data: ServiceDetailData;
    onNavigate: (page: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ data, onNavigate }) => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [data.id]);

    return (
        <div className="min-h-screen bg-estate-50 animate-[fadeIn_0.5s_ease-out]">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${data.heroImage})` }}
                />
                <div className="absolute inset-0 bg-black/40" />
                
                <div className="absolute top-8 left-8 z-20">
                    <button 
                        onClick={() => onNavigate('home')} 
                        className="text-white hover:text-gold-300 transition-colors flex items-center gap-2 font-sans text-xs tracking-widest uppercase bg-black/20 backdrop-blur-sm px-4 py-2 rounded-sm border border-white/10 hover:border-gold-300"
                    >
                        <ArrowLeft size={14} /> Voltar
                    </button>
                </div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                    <span className="text-gold-300 font-sans text-xs uppercase tracking-[0.4em] mb-4 animate-[fadeInUp_0.8s_ease-out]">
                        Concierge Services
                    </span>
                    <DisplayHeading className="text-white mb-4 drop-shadow-xl animate-[fadeInUp_1s_ease-out]">
                        {data.title}
                    </DisplayHeading>
                    <p className="font-serif text-xl md:text-2xl text-white/90 italic font-light animate-[fadeInUp_1.2s_ease-out]">
                        "{data.subtitle}"
                    </p>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Main Description & Features */}
                    <div className="lg:col-span-7 space-y-16">
                        <div>
                            <h3 className="font-serif text-3xl text-estate-900 mb-6">A Experiência</h3>
                            <BodyText className="text-lg leading-loose text-justify">
                                {data.description}
                            </BodyText>
                        </div>

                        <div className="grid grid-cols-1 gap-8">
                            {data.features.map((feature, idx) => (
                                <div key={idx} className="flex gap-6 p-6 border border-estate-200 hover:border-gold-300 transition-colors bg-white shadow-sm">
                                    <div className="shrink-0 text-gold-600">
                                        <feature.icon size={32} strokeWidth={1} />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-xl text-estate-900 mb-2">{feature.title}</h4>
                                        <p className="font-sans text-sm text-estate-600 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar / Menu */}
                    <div className="lg:col-span-5">
                        <div className="bg-estate-900 text-estate-50 p-10 md:p-12 sticky top-32">
                            <div className="border-b border-white/20 pb-8 mb-8">
                                <h3 className="font-serif text-3xl text-gold-100 mb-2">{data.menuTitle}</h3>
                                <p className="font-sans text-xs text-white/40 uppercase tracking-widest">Sujeito a disponibilidade e avaliação</p>
                            </div>

                            <ul className="space-y-8 mb-12">
                                {data.menuItems.map((item, idx) => (
                                    <li key={idx} className="group">
                                        <div className="flex justify-between items-baseline mb-1">
                                            <span className="font-serif text-xl text-white group-hover:text-gold-300 transition-colors">{item.name}</span>
                                        </div>
                                        <p className="font-sans text-xs text-white/50 leading-relaxed">{item.detail}</p>
                                    </li>
                                ))}
                            </ul>

                            <div className="space-y-4">
                                <Button className="w-full bg-gold-600 border-gold-600 text-estate-900 hover:bg-white hover:text-estate-900 font-bold" onClick={() => onNavigate('contact')}>
                                    {data.ctaText}
                                </Button>
                                <p className="text-center font-serif italic text-white/30 text-sm">
                                    Exclusivo para membros L'Héritage
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            {/* Visual Footer for Section */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-30 mb-12" />
        </div>
    );
};