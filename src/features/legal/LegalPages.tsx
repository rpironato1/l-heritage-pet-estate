import React from 'react';
import { DisplayHeading } from '../ui/Typography';

interface LegalLayoutProps {
    title: string;
    date: string;
    children: React.ReactNode;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ title, date, children }) => (
    <div className="pt-32 pb-24 min-h-screen bg-estate-50 animate-[fadeIn_0.5s_ease-out]">
        <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16 border-b border-estate-200 pb-12">
                 <span className="text-gold-600 font-sans text-xs uppercase tracking-[0.3em] mb-4 block">
                    Legal & Compliance
                </span>
                <DisplayHeading className="mb-4 text-4xl md:text-6xl">{title}</DisplayHeading>
                <p className="font-sans text-[10px] text-estate-400 uppercase tracking-widest">Última atualização: {date}</p>
            </div>
            <div className="font-serif text-estate-800/80 text-lg leading-loose space-y-8 text-justify">
                {children}
            </div>
        </div>
    </div>
);

export const TermsOfService: React.FC = () => (
    <LegalLayout title="Termos de Serviço" date="12 de Outubro, 2025">
        <p>
            <strong className="text-estate-900 text-xl block mb-2">1. Introdução</strong>
            Bem-vindo ao L'Héritage Pet Estate. Ao utilizar nossos serviços, instalações ou website, você concorda com estes termos, que regem a relação exclusiva entre o Estate e seus Membros. A excelência é nossa premissa, e a clareza é nossa obrigação.
        </p>
        <p>
            <strong className="text-estate-900 text-xl block mb-2">2. Elegibilidade e Membership</strong>
            O acesso às instalações físicas do L'Héritage é restrito a membros aprovados pelo Comitê de Admissão. O membership é pessoal, intransferível e vinculado ao animal de estimação cadastrado. A direção reserva-se o direito de revogar o membership em caso de violação do código de conduta ou inadimplência.
        </p>
        <p>
            <strong className="text-estate-900 text-xl block mb-2">3. Reservas e Cancelamentos</strong>
            Serviços de Spa, Hotel e Gastronomia requerem agendamento prévio de no mínimo 24 horas. Cancelamentos com menos de 12 horas de antecedência estarão sujeitos a uma taxa de conveniência equivalente a 50% do valor do serviço, revertida para nosso fundo de preservação ambiental.
        </p>
        <p>
            <strong className="text-estate-900 text-xl block mb-2">4. Responsabilidade Civil</strong>
            Embora empreguemos os mais altos padrões de segurança e monitoramento veterinário 24/7, os tutores permanecem legalmente responsáveis pelo comportamento de seus animais em interações sociais.
        </p>
    </LegalLayout>
);

export const PrivacyPolicy: React.FC = () => (
    <LegalLayout title="Política de Privacidade" date="01 de Setembro, 2025">
        <p>
            <strong className="text-estate-900 text-xl block mb-2">Compromisso com o Sigilo</strong>
            No L'Héritage, a privacidade dos nossos membros e de seus animais é sagrada. Esta política detalha como coletamos, usamos e protegemos suas informações pessoais com o mais alto nível de discrição e segurança cibernética.
        </p>
        <p>
            <strong className="text-estate-900 text-xl block mb-2">Coleta de Dados</strong>
            Coletamos apenas as informações estritamente necessárias para prover nossos serviços de excelência, incluindo histórico veterinário completo, preferências alimentares, dados biométricos do animal e dados de contato do tutor responsável.
        </p>
        <p>
            <strong className="text-estate-900 text-xl block mb-2">Confidencialidade Absoluta</strong>
            Jamais compartilhamos, vendemos ou expomos dados de nossos membros a terceiros. Todas as informações são armazenadas em servidores criptografados. A presença de qualquer figura pública ou membro notável em nossas instalações é tratada sob estrito Acordo de Não-Divulgação (NDA) assinado por toda nossa equipe.
        </p>
    </LegalLayout>
);

export const EthicsCode: React.FC = () => (
    <LegalLayout title="Código de Ética" date="Jan 2025">
        <p>
            <strong className="text-estate-900 text-xl block mb-2">Filosofia</strong>
            Nossa filosofia é fundamentada no respeito absoluto à senciência animal. Tratamos cada hóspede não como um animal de estimação, mas como um indivíduo com preferências, limites, emoções e dignidade inalienável.
        </p>
        <p>
            <strong className="text-estate-900 text-xl block mb-2">Manejo Fear Free®</strong>
            Repudiamos qualquer técnica de adestramento punitivo ou coercitivo. Nossos profissionais utilizam exclusivamente reforço positivo e manejo Fear Free®, garantindo que a experiência no Estate seja livre de medo, ansiedade e estresse.
        </p>
        <p>
            <strong className="text-estate-900 text-xl block mb-2">Sustentabilidade e Impacto</strong>
            Comprometemo-nos com práticas de desperdício zero, uso de energia solar em nossas instalações e produtos de higiene 100% biodegradáveis e cruelty-free. Parte de nossa receita é destinada a santuários de vida selvagem.
        </p>
    </LegalLayout>
);