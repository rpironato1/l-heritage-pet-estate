import React from 'react';
import { IMAGES, BRAND } from '../../constants';
import { Button } from '../ui/Button';
import { DisplayHeading } from '../ui/Typography';
import { ArrowLeft, Lock } from 'lucide-react';

interface LoginPageProps {
  onNavigate: (page: string) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-estate-900 text-estate-50 animate-[fadeIn_0.5s_ease-in-out]">
      
      {/* Visual Side (Left) */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden bg-estate-800">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-[20s] hover:scale-105"
            style={{ backgroundImage: `url(${IMAGES.interior})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-estate-900 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-estate-900" />
        
        <div className="absolute top-8 left-8 z-20">
             <button 
                onClick={() => onNavigate('home')} 
                className="text-white hover:text-gold-300 transition-colors flex items-center gap-2 font-sans text-xs tracking-widest uppercase"
             >
                <ArrowLeft size={14} /> Voltar ao Estate
             </button>
        </div>

        <div className="absolute bottom-12 left-12 right-12 z-10 hidden md:block">
            <h2 className="font-serif text-4xl italic text-gold-100 mb-4">"Privacidade é a verdadeira exclusividade."</h2>
            <p className="font-sans text-xs text-white/50 tracking-widest uppercase">Acesso Restrito a Membros</p>
        </div>
      </div>

      {/* Form Side (Right) */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-24 bg-estate-900">
        <div className="w-full max-w-md">
            <div className="text-center mb-12">
                <span className="text-gold-500 font-sans text-[10px] uppercase tracking-[0.4em] mb-4 block">
                    L'Héritage Membership
                </span>
                <DisplayHeading className="text-white text-4xl md:text-5xl mb-4">
                    Member Login
                </DisplayHeading>
                <div className="h-[1px] w-12 bg-gold-600 mx-auto opacity-50" />
            </div>

            <div className="space-y-4 mb-10">
                <button className="w-full flex items-center justify-center gap-3 py-4 border border-white/10 hover:border-gold-500/50 hover:bg-white/5 transition-all duration-300 text-sm font-sans tracking-wider uppercase text-white/80 group">
                    <span className="text-lg pb-1"></span>
                    <span className="group-hover:text-gold-100 transition-colors">Entrar com Apple</span>
                </button>
                <button className="w-full flex items-center justify-center gap-3 py-4 border border-white/10 hover:border-gold-500/50 hover:bg-white/5 transition-all duration-300 text-sm font-sans tracking-wider uppercase text-white/80 group">
                    <span className="font-serif font-bold text-lg">G</span>
                    <span className="group-hover:text-gold-100 transition-colors">Entrar com Google</span>
                </button>
            </div>

            <div className="relative mb-10 text-center">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative inline-block px-4 bg-estate-900 text-[10px] text-white/30 font-sans tracking-widest uppercase">
                    ou via credenciais
                </div>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2 group">
                    <label className="block text-[10px] font-sans uppercase tracking-widest text-gold-500/60 ml-1 group-focus-within:text-gold-400 transition-colors">
                        Email Cadastrado
                    </label>
                    <input 
                        type="email" 
                        className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-gold-400 transition-colors font-serif text-xl placeholder:text-white/5"
                        placeholder="membro@lheritage.com"
                    />
                </div>
                
                <div className="space-y-2 group">
                    <label className="block text-[10px] font-sans uppercase tracking-widest text-gold-500/60 ml-1 group-focus-within:text-gold-400 transition-colors">
                        Senha
                    </label>
                    <input 
                        type="password" 
                        className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-gold-400 transition-colors font-serif text-xl placeholder:text-white/5"
                        placeholder="••••••••"
                    />
                </div>

                <div className="flex justify-between items-center text-[10px] text-white/40 font-sans tracking-wide">
                    <label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                        <input type="checkbox" className="rounded border-white/20 bg-transparent accent-gold-500" />
                        Permanecer conectado
                    </label>
                    <a href="#" className="hover:text-gold-400 transition-colors border-b border-transparent hover:border-gold-400">Esqueceu a senha?</a>
                </div>

                {/* Updated Button to Gold Variant */}
                <Button className="w-full font-medium" variant="gold">
                    <Lock size={14} className="mr-2" /> Acessar Portal
                </Button>
            </form>

            <p className="mt-12 text-center text-white/20 text-[10px] font-sans uppercase tracking-wider">
                Ainda não é membro? <button onClick={() => onNavigate('contact')} className="text-gold-600 hover:text-gold-400 border-b border-gold-600/30 hover:border-gold-400 transition-all ml-1">Solicitar convite</button>.
            </p>
        </div>
      </div>
    </div>
  );
};