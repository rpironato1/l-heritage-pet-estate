import React from 'react';
import { DisplayHeading, BodyText } from '../ui/Typography';
import { Button } from '../ui/Button';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-estate-50 animate-[fadeIn_0.5s_ease-out]">
       <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            
            <div className="text-center mb-20">
                <span className="text-gold-600 font-sans text-xs uppercase tracking-[0.3em] mb-4 block">
                    Atendimento Concierge
                </span>
                <DisplayHeading className="mb-6">Fale Conosco</DisplayHeading>
                <BodyText className="max-w-xl mx-auto">
                    Nossa equipe de concierge está à disposição para agendar visitas privadas, esclarecer dúvidas sobre o membership ou personalizar a experiência do seu animal.
                </BodyText>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                
                {/* Contact Info */}
                <div className="space-y-12">
                    <div className="border-l-2 border-gold-200 pl-6">
                        <h3 className="font-serif text-2xl text-estate-900 mb-2">O Estate</h3>
                        <p className="font-sans text-sm text-estate-800/60 leading-relaxed">
                            Rua Haddock Lobo, 1420<br />
                            Jardins, São Paulo - SP<br />
                            01414-002
                        </p>
                    </div>

                    <div className="border-l-2 border-gold-200 pl-6">
                        <h3 className="font-serif text-2xl text-estate-900 mb-2">Contato Direto</h3>
                        <p className="font-sans text-sm text-estate-800/60 leading-relaxed mb-1">
                            concierge@lheritage.com
                        </p>
                        <p className="font-sans text-sm text-estate-800/60 leading-relaxed">
                            +55 11 3062-9999
                        </p>
                    </div>

                    <div className="border-l-2 border-gold-200 pl-6">
                        <h3 className="font-serif text-2xl text-estate-900 mb-2">Horário de Atendimento</h3>
                        <p className="font-sans text-sm text-estate-800/60 leading-relaxed">
                            Segunda a Sábado: 09h às 20h<br />
                            Domingos e Feriados: 10h às 16h (Apenas Hotel)
                        </p>
                    </div>
                </div>

                {/* Form */}
                <form className="bg-white p-8 md:p-12 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-estate-100" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-2">
                            <label className="text-[10px] font-sans uppercase tracking-widest text-estate-400">Nome Completo</label>
                            <input type="text" className="w-full border-b border-estate-200 py-2 text-estate-900 focus:outline-none focus:border-gold-500 font-serif text-lg bg-transparent transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-sans uppercase tracking-widest text-estate-400">Telefone</label>
                            <input type="tel" className="w-full border-b border-estate-200 py-2 text-estate-900 focus:outline-none focus:border-gold-500 font-serif text-lg bg-transparent transition-colors" />
                        </div>
                    </div>

                    <div className="space-y-2 mb-8">
                        <label className="text-[10px] font-sans uppercase tracking-widest text-estate-400">Email</label>
                        <input type="email" className="w-full border-b border-estate-200 py-2 text-estate-900 focus:outline-none focus:border-gold-500 font-serif text-lg bg-transparent transition-colors" />
                    </div>

                    <div className="space-y-2 mb-8">
                        <label className="text-[10px] font-sans uppercase tracking-widest text-estate-400">Assunto</label>
                        <select className="w-full border-b border-estate-200 py-2 text-estate-900 focus:outline-none focus:border-gold-500 font-serif text-lg bg-transparent transition-colors appearance-none rounded-none cursor-pointer">
                            <option>Interesse em Membership</option>
                            <option>Agendamento de Visita</option>
                            <option>Imprensa & Parcerias</option>
                            <option>Outros Assuntos</option>
                        </select>
                    </div>

                    <div className="space-y-2 mb-12">
                        <label className="text-[10px] font-sans uppercase tracking-widest text-estate-400">Mensagem</label>
                        <textarea rows={4} className="w-full border-b border-estate-200 py-2 text-estate-900 focus:outline-none focus:border-gold-500 font-serif text-lg bg-transparent transition-colors resize-none"></textarea>
                    </div>

                    <Button className="w-full" withIcon>Enviar Mensagem</Button>
                </form>

            </div>
       </div>
    </div>
  );
};