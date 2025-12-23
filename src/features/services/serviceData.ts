import { IMAGES } from '../../constants';
import { Sparkles, Utensils, Castle, Crown, Leaf, ShieldCheck, Music, Clock, HeartHandshake } from 'lucide-react';

export interface ServiceFeature {
    icon: any;
    title: string;
    description: string;
}

export interface ServiceDetailData {
    id: string;
    title: string;
    subtitle: string;
    heroImage: string;
    description: string;
    features: ServiceFeature[];
    menuTitle: string;
    menuItems: { name: string; detail: string }[];
    ctaText: string;
}

export const SERVICE_DETAILS: Record<string, ServiceDetailData> = {
    'spa': {
        id: 'spa',
        title: "Royal Spa & Grooming",
        subtitle: "Onde a estética encontra o bem-estar clínico",
        heroImage: IMAGES.spa,
        description: "Nosso spa não é apenas sobre beleza; é sobre revitalização celular e equilíbrio energético. Utilizamos exclusivamente produtos importados da França e Itália, com formulações hipoalergênicas e botânicas. Cada sessão é precedida por uma avaliação dermatológica completa e acompanhada de musicoterapia para garantir relaxamento absoluto.",
        features: [
            { icon: Sparkles, title: "Hidroterapia de Ozônio", description: "Tecnologia japonesa para oxigenação profunda da derme e relaxamento muscular." },
            { icon: Leaf, title: "Cosmética Bio-ativa", description: "Shampoos e bálsamos livres de parabenos, com óleos essenciais raros." },
            { icon: Crown, title: "Tosa Stylist", description: "Estilistas premiados internacionalmente, especialistas em cortes de raça (Breed Standard)." }
        ],
        menuTitle: "Menu de Tratamentos",
        menuItems: [
            { name: "Le Bain Couture", detail: "Banho de imersão com sais do Mar Morto e massagem relaxante." },
            { name: "Ritual Detox", detail: "Esfoliação suave, máscara de argila vulcânica e hidratação profunda." },
            { name: "Cromoterapia Integrada", detail: "Sessões de luz para alinhamento de chakras e redução de ansiedade." }
        ],
        ctaText: "Agendar Sessão"
    },
    'gastronomy': {
        id: 'gastronomy',
        title: "Alta Gastronomia",
        subtitle: "Nutrição funcional elevada à arte culinária",
        heroImage: IMAGES.nutrition,
        description: "Acreditamos que a longevidade começa no prato. Nossa cozinha, liderada por nutricionistas veterinários e chefs especializados, prepara refeições frescas diariamente. Ingredientes 100% orgânicos, proteínas de origem rastreável e suplementação de precisão compõem a dieta dos hóspedes do Estate.",
        features: [
            { icon: Utensils, title: "Farm-to-Bowl", description: "Ingredientes colhidos em nossa horta orgânica ou de fornecedores locais certificados." },
            { icon: HeartHandshake, title: "Personalização Absoluta", description: "Dietas adaptadas para alergias, sensibilidades ou prescrições médicas." },
            { icon: Clock, title: "Serviço à Francesa", description: "Refeições servidas em porcelana, com temperatura controlada e acompanhamento." }
        ],
        menuTitle: "Exemplos do Menu Sazonal",
        menuItems: [
            { name: "Tartare de Salmão Selvagem", detail: "Com óleo de coco extra virgem e sementes de chia." },
            { name: "Risoto de Cordeiro Patagônico", detail: "Arroz negro, abóbora cabotiá e alecrim fresco." },
            { name: "Gelato Funcional", detail: "Base de iogurte kéfir com frutas vermelhas e colágeno." }
        ],
        ctaText: "Consultar Nutricionista"
    },
    'suites': {
        id: 'suites',
        title: "Suítes Presidenciais",
        subtitle: "A extensão do seu lar, com a segurança de um santuário",
        heroImage: IMAGES.hotel,
        description: "Esqueça o conceito de canis ou gaiolas. No L'Héritage, oferecemos suítes privativas reais, projetadas para mimetizar o conforto de uma residência de alto padrão. Com isolamento acústico, camas ortopédicas e climatização inteligente, garantimos que seu companheiro desfrute de noites de sono reparador.",
        features: [
            { icon: Castle, title: "Arquitetura Neuro-sensorial", description: "Ambientes projetados para reduzir o estresse visual e auditivo." },
            { icon: ShieldCheck, title: "Monitoramento 24/7", description: "Câmeras acessíveis pelo tutor e ronda de enfermagem veterinária noturna." },
            { icon: Music, title: "Ambientação Sonora", description: "Playlists de música clássica e frequências calmantes desenvolvidas para cães." }
        ],
        menuTitle: "Amenities da Suíte",
        menuItems: [
            { name: "Smart TV 4K", detail: "Programação visual estimulante para entretenimento diurno." },
            { name: "Aromaterapia Noturna", detail: "Difusão de óleos de lavanda francesa para indução do sono." },
            { name: "Concierge de Cabeceira", detail: "Leitura de histórias e carinho antes de dormir." }
        ],
        ctaText: "Solicitar Reserva"
    }
};