import React from 'react';
import { DisplayHeading, BodyText } from '../ui/Typography';
import { Button } from '../ui/Button';
import { ArrowLeft, Send } from 'lucide-react';

interface RequestInvitationPageProps {
  onNavigate: (page: string) => void;
}

export const RequestInvitationPage: React.FC<RequestInvitationPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-estate-50 animate-[fadeIn_0.5s_ease-out] flex flex-col items-center pt-32 pb-24 px-6">
      
      {/* Header */}
      <div className="max-w-2xl w-full text-center mb-16">
        <button 
            onClick={() => onNavigate('home')} 
            className="mb-8 text-estate-400 hover:text-gold-600 transition-colors flex items-center gap-2 font-sans text-xs tracking-widest uppercase mx-auto"
        >
            <ArrowLeft size={14} /> Retornar
        </button>
        <span className="text-gold-600 font-sans text-xs uppercase tracking-[0.3em] mb-4 block">
            The Golden Circle
        </span>
        <DisplayHeading className="mb-6">Candidatura de Membro</DisplayHeading>
        <BodyText className="text-center">
            O L'Héritage mantém um número estrito de membros para garantir a exclusividade e a atenção personalizada. 
            Sua aplicação será avaliada pelo nosso Comitê de Admissão em até 48 horas úteis.
        </BodyText>
      </div>

      {/* Application Form */}
      <div className="w-full max-w-3xl bg-white p-10 md:p-16 shadow-[0_4px_30px_-5px_rgba(0,0,0,0.03)] border border-estate-100 relative overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-gold-200" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gold-200" />

        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            
            {/* Section: Tutor */}
            <div className="space-y-6">
                <h3 className="font-serif text-2xl text-estate-900 border-b border-estate-100 pb-2">Informações do Tutor</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-[10px] font-sans uppercase tracking-widest text-estate-400">Nome Completo</label>
                        <input type="text" className="w-full border-b border-estate-200 py-2 text-estate-900 focus:outline-none focus:border-gold-500 font-serif text-lg bg-transparent transition-colors" placeholder="Ex: Dra. Helena Vasconcelos" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-sans uppercase tracking-widest text-estate-400">Profissão / Ocupação</label>
                        <input type="text" className="w-full border-b border-estate-200 py-2 text-estate-900 focus:outline-none focus:border-gold-500 font-serif text-lg bg-transparent transition-colors" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-[10px] font-sans uppercase tracking-widest text-estate-400">Email Privado</label>
                        <input type="email" className="w-full border-b border-estate-200 py-2 text-estate-900 focus:outline-none focus:border-gold-500 font-serif text-lg bg-transparent transition-colors" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-sans uppercase tracking-widest text-estate-400">Telefone Celular</label>
                        <input type="tel" className="w-full border-b border-estate-200 py-2 text-estate-900 focus:outline-none focus:border-gold-500 font-serif text-lg bg-transparent transition-colors" />
                    </div>
                </div>
                <div className="space-y-2">
                     <label className="text-[10px] font-sans uppercase tracking-widest text-estate-400">Perfil Social (LinkedIn ou Instagram)</label>
                     <input type="text" className="w-full border-b border-estate-200 py-2 text-estate-900 focus:outline-none focus:border-gold-500 font-serif text-lg bg-transparent transition-colors" placeholder="@..." />
                     <p className="text-[10px] text-estate-400/70 italic">Necessário para validação de identidade pelo comitê.</p>
                </div>
            </div>

            {/* Section: Pet */}
            <div className="space-y-6">
                <h3 className="font-serif text-2xl text-estate-900 border-b border-estate-100 pb-2">O Candidato (Seu Animal)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-[10px] font-sans uppercase tracking-widest text-estate-400">Nome do Animal</label>
                        <input type="text" className="w-full border-b border-estate-200 py-2 text-estate-900 focus:outline-none focus:border-gold-500 font-serif text-lg bg-transparent transition-colors" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-sans uppercase tracking-widest text-estate-400">Raça / Espécie</label>
                        <input type="text" className="w-full border-b border-estate-200 py-2 text-estate-900 focus:outline-none focus:border-gold-500 font-serif text-lg bg-transparent transition-colors" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-sans uppercase tracking-widest text-estate-400">Idade</label>
                    <input type="text" className="w-full border-b border-estate-200 py-2 text-estate-900 focus:outline-none focus:border-gold-500 font-serif text-lg bg-transparent transition-colors" />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-sans uppercase tracking-widest text-estate-400">Carta de Intenção</label>
                    <p className="text-[10px] text-estate-400/70 italic mb-2">Por que você acredita que o L'Héritage é o lugar ideal para o legado do seu companheiro?</p>
                    <textarea rows={4} className="w-full border-b border-estate-200 py-2 text-estate-900 focus:outline-none focus:border-gold-500 font-serif text-lg bg-transparent transition-colors resize-none"></textarea>
                </div>
            </div>

            <div className="pt-8 flex flex-col items-center">
                <Button className="w-full md:w-auto min-w-[300px]" withIcon>
                    Submeter Candidatura
                </Button>
                <p className="mt-4 text-[10px] text-estate-400 font-sans text-center max-w-md">
                    Ao enviar, você concorda com a verificação de antecedentes e com nossos Termos de Confidencialidade. A taxa de iniciação será cobrada apenas após a aprovação.
                </p>
            </div>
        </form>
      </div>
    </div>
  );
};