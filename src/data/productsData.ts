import { Heart, Car, Wallet, Stethoscope, HandPlatter, Bike, Home, Plane, Smartphone, DollarSign, CreditCard, Banknote, Umbrella, Shield, Briefcase, Factory, Wheat, Calendar } from 'lucide-react';
import type { ProductSegment } from '../types/index.js';

export const productsData: ProductSegment[] = [
    {
        title: "Saúde e Bem-Estar",
        products: [
            { name: "Plano de Saúde", icon: Stethoscope, objective: "Acesso à melhor rede médica e hospitalar com cobertura nacional ou regional." },
            { name: "Plano Odontológico", icon: Heart, objective: "Cuidado completo com seu sorriso, prevenindo e tratando a saúde bucal." },
            { name: "Saúde Pet", icon: HandPlatter, objective: "Proteção e assistência veterinária para o seu melhor amigo de quatro patas." },
        ]
    },

    {
        title: "Seguros e Proteção",
        products: [
            { name: "Automóvel", icon: Car, objective: "Proteção contra roubo, furto, colisão e danos a terceiros com assistência 24h." },
            { name: "Residencial", icon: Home, objective: "Cobertura contra incêndio, roubo, danos elétricos e assistência domiciliar." },
            { name: "Vida", icon: Umbrella, objective: "Segurança financeira para sua família em casos de imprevistos." },
            { name: "Viagem", icon: Plane, objective: "Assistência médica e bagagem extraviada em viagens nacionais e internacionais." },
            { name: "Equipamentos Portáteis", icon: Smartphone, objective: "Proteção para seu celular, tablet e notebook contra quebra e roubo." },
        ]
    },

    {
        title: "Serviços Financeiros",
        products: [
            { name: "Cartão de Crédito", icon: CreditCard, objective: "Opções com benefícios, milhas e taxas reduzidas para suas compras diárias." },
            { name: "Empréstimos", icon: Banknote, objective: "Crédito rápido e com taxas competitivas para realizar seus projetos." },
            { name: "Financiamento", icon: DollarSign, objective: "Soluções para compra de imóveis, veículos ou outros bens de alto valor." },
            { name: "Consórcio", icon: Calendar, objective: "Planejamento inteligente e sem juros para a aquisição de bens ou serviços." },
            { name: "Investimentos", icon: Wallet, objective: "Consultoria e plataformas para fazer seu dinheiro render mais no longo prazo." },
        ]
    }
];