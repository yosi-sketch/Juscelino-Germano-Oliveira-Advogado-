"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants, MotionConfig } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Scale,
  Award,
  Shield,
  ArrowRight,
  ArrowUpRight,
  Star,
  Menu,
  X,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Users,
  Briefcase,
  FileCheck2,
  FileText,
  Lock,
  Landmark,
  Building2,
  BookOpen,
  MessageCircle,
  Gavel,
  BadgeCheck,
  Zap,
  HeartHandshake,
  Heart,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Client & Firm Information — Escritório De Advocacia Alesânia Menezes
const WHATSAPP_NUMBER = "5537999617913";
const PHONE_DISPLAY = "(37) 99961-7913";
const EMAIL_CONTACT = "contato@alesaniamenezes.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/alesaniamenezes/";
const INSTAGRAM_HANDLE = "@alesaniamenezes";
const INSTAGRAM_STATS = "2.257 seguidores · 68 posts";

const ADDRESS_POMPEU =
  "R. Olegário Maciel, 182 - CENTRO, Pompéu - MG, 35640-000";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Ales%C3%A2nia+Menezes+%E2%80%94+Advocacia%0APomp%C3%A9u+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const GOOGLE_MAPS_URL =
  "https://www.google.com/search?sca_esv=a225a88ab5a0d3cb&sxsrf=AKL5yDgi-MqB3b66TKt8C2Bb2bUqH1vnKA:1793304394976&q=escrit%C3%B3rio+de+advocacia+ales%C3%A2nia+menezes+pomp%C3%A9u+endere%C3%A7o&ludocid=6448810776869958821&sa=X&ved=2ahUKEwjB1r67g-CXAxVgEbkGHeMZKxIQ6BN6BAg5EAI";

const SHORT_WPP_LINK = "https://tinyurl.com/advocacia-alesania-menezes-wpp";

// Official assets generated from the new client logo & photoshoot (with cache busting v=am1)
const LOGO_SRC = "/logo-badge.png?v=am1";
const LOGO_HORIZONTAL_SRC = "/logo-horizontal.png?v=am1";
const EMBLEM_SRC = "/emblema-am.png?v=am1";
const FOTO_HERO_SRC = "/dra-alesania-portrait.jpg?v=am1";
const FOTO_PORTRAIT_SRC = "/dra-alesania-office.jpg?v=am1";
const FOTO_OFFICE_SRC = "/office.jpg?v=am1";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Alesânia Menezes! Gostaria de agendar uma consulta jurídica especializada sobre o meu caso.";
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function WhatsAppIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.39 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

function InstagramIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0ZM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM18.406 4.155a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

function GoogleIcon({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

interface PracticeArea {
  id: string;
  title: string;
  category: string;
  icon: typeof Award;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "direito-de-familia-sucessoes",
    title: "Direito de Família & Sucessões",
    category: "Divórcio Consensual e Litigioso · Guarda & Visitas · Pensão Alimentícia · Inventário em Cartório",
    icon: Users,
    tag: "Atendimento Humanizado · Agilidade em Cartório · Proteção Familiar",
    summary:
      "Acolhimento empático e soluções jurídicas pacificadoras para proteger quem você ama e organizar o patrimônio familiar com dignidade, celeridade e segurança.",
    details:
      "As questões de família e sucessões exigem sensibilidade humana, equilíbrio emocional e firmeza técnica. Sob a liderança da Dra. Alesânia Menezes, priorizamos a via consensual para realizar divórcios, partilhas de bens e inventários diretamente em Cartório de Notas, proporcionando economia de tempo, redução de custos e preservação dos vínculos familiares. Quando o litígio for indispensável, garantimos atuação combativa na fixação ou revisão de pensão alimentícia, guarda e justa partilha do patrimônio.",
    topics: [
      "Divórcio Consensual em Cartório de Notas: procedimento ágil, sigiloso e concluído em curto prazo",
      "Divórcio Litigioso: partilha equilibrada de bens, proteção patrimonial e garantia dos direitos de cada cônjuge",
      "Pensão Alimentícia: pedido liminar urgente de alimentos provisórios, revisão e cobrança sob pena de prisão",
      "Guarda Compartilhada e Regulamentação do Regime de Convivência e Visitas dos Filhos",
      "Reconhecimento e Dissolução de União Estável com partilha de patrimônio adquirido em conjunto",
      "Inventário Extrajudicial em Cartório: partilha rápida de herança, redução de custos e desembaraço de bens",
      "Inventário Judicial e Planejamento Sucessório Familiar: doações com reserva de usufruto e testamentos públicos",
    ],
    whatsAppText:
      "Olá, Dra. Alesânia Menezes! Gostaria de uma consulta sobre Direito de Família (Divórcio, Guarda, Pensão ou Inventário).",
  },
  {
    id: "direito-das-mulheres",
    title: "Direito das Mulheres & Proteção Especializada",
    category: "Comissão da Mulher Advogada OAB/MG · Medidas Protetivas · Violência Patrimonial · Divórcio Protetivo",
    icon: HeartHandshake,
    tag: "Liderança OAB/MG · Acolhimento Seguro · Defesa Rigorosa",
    summary:
      "Atuação especializada e pioneira liderada pela Presidente da Comissão da Mulher Advogada da OAB/MG. Proteção jurídica integral, sigilosa e combativa para resguardar a dignidade feminina.",
    details:
      "A Dra. Alesânia Menezes é pós-graduada em Direito das Mulheres e atua com destaque na presidência da Comissão da Mulher Advogada da OAB/MG. O escritório oferece um ambiente de acolhimento ético, seguro e confidencial para mulheres que enfrentam momentos de vulnerabilidade, violência doméstica, abuso patrimonial ou separações conflituosas. Atuamos com extrema urgência na solicitação de medidas protetivas, busca de patrimônio oculto e garantia de subsistência.",
    topics: [
      "Pedidos Urgentes de Medidas Protetivas perante o Poder Judiciário e acompanhamento integral",
      "Combate à Violência Patrimonial: bloqueio de ocultação de bens, contas e patrimônio pelo ex-cônjuge",
      "Divórcio Protetivo e com afastamento do agressor do lar comum com segurança",
      "Garantia de Pensão Alimentícia Compensatória e Alimentos para a mulher e dependentes",
      "Assessoria jurídica humanizada em casos de violência psicológica, moral e física",
      "Atendimento individualizado com escuta atenta, sigilo profissional irrestrito e empatia genuína",
    ],
    whatsAppText:
      "Olá, Dra. Alesânia! Gostaria de atendimento sigiloso e acolhedor na área de Direito e Proteção das Mulheres.",
  },
  {
    id: "direito-civel-indenizacoes",
    title: "Direito Cível & Ações Indenizatórias",
    category: "Danos Morais e Materiais · Liminar SPC/Serasa · Fraudes Bancárias · Contratos · Cobranças",
    icon: Scale,
    tag: "Reparação Integral · Liminares Rápidas · Blindagem Patrimonial",
    summary:
      "Proteção firme dos seus direitos e do seu patrimônio. Ações de reparação por danos morais, cancelamento de negativações indevidas no SPC/Serasa e restituição de perdas por fraudes.",
    details:
      "No Direito Cível, atuamos com agilidade para obter decisões liminares de urgência que limpem seu nome no SPC, Serasa e cartórios de protesto, além de reverter fraudes eletrônicas, golpes bancários do Pix e empréstimos consignados não autorizados. Defendemos a reparação integral dos prejuízos materiais e danos morais decorrentes de descumprimentos contratuais, acidentes ou ofensas à honra.",
    topics: [
      "Ação com Pedido Liminar para Exclusão Imediata de Negativação Indevida no SPC, Serasa e Protestos",
      "Indenizações por Danos Morais, Materiais e Estéticos com comprovação rigorosa das perdas",
      "Fraudes Bancárias e Golpes Virtuais: anulação de contratos fraudulentos e recuperação de valores",
      "Ações de Cobrança e Execução de Títulos Judiciais e Extrajudiciais (cheques, notas e contratos)",
      "Elaboração, Revisão e Due Diligence de Contratos de Compra e Venda e Locação",
      "Direito Imobiliário: ações de reintegração de posse, despejo e regularização de escrituras",
    ],
    whatsAppText:
      "Olá, Dra. Alesânia Menezes! Gostaria de consultar sobre Ação Cível / Indenização por Danos Morais / Nome Negativado.",
  },
  {
    id: "direito-publico-administrativo",
    title: "Direito Público & Defesa Administrativa",
    category: "Pós-graduação em Direito Público · Defesa de Servidores · PAD · Concursos · Mandados de Segurança",
    icon: Landmark,
    tag: "Especialização Pós-Graduada · Rigor Técnico · Fazenda Pública",
    summary:
      "Fundamentada em sólida pós-graduação em Direito Público, prestamos assessoria altamente técnica em relações com a Administração Pública, defesa de servidores e causas contra a Fazenda.",
    details:
      "O Direito Público rege os atos do Estado e exige conhecimento aprofundado dos princípios constitucionais da legalidade, moralidade e ampla defesa. A Dra. Alesânia Menezes atua na defesa combativa de servidores públicos municipais e estaduais em Processos Administrativos Disciplinares (PAD), sindicâncias, mandados de segurança contra atos ilegais de autoridades, concursos públicos e ações de cobrança contra entes estatais.",
    topics: [
      "Defesa de Servidores Públicos em Sindicâncias e Processos Administrativos Disciplinares (PAD)",
      "Impetração de Mandado de Segurança contra atos ilegais ou abusivos do Poder Público",
      "Ações de Concurso Público: anulação de questões abusivas, posse de aprovados e cotas",
      "Ações Ordinárias contra Municípios, Estado de Minas Gerais e União Federal",
      "Cobrança de Verbas Remuneratórias de servidores públicos (adicionais, férias, quinquênios)",
      "Consultoria em Direito Administrativo e Constitucional para particulares e entidades",
    ],
    whatsAppText:
      "Olá, Dra. Alesânia Menezes! Preciso de assessoria especializada em Direito Público / Servidor Público / Concurso.",
  },
  {
    id: "direito-do-consumidor-bancario",
    title: "Direito do Consumidor & Defesa Patrimonial",
    category: "Bancos e Tarifas · Planos de Saúde · Liminares Médicas · Restituição em Dobro · Cobranças Abusivas",
    icon: Shield,
    tag: "Defesa do Consumidor · Medidas Urgentes · Equilíbrio Contratual",
    summary:
      "Defesa incisiva contra práticas abusivas de instituições bancárias, grandes fornecedores e operadoras de planos de saúde, assegurando a aplicação irrestrita do CDC.",
    details:
      "O cidadão não pode ser lesado pelo poderio econômico de instituições financeiras ou grandes empresas. O escritório ingressa com ações rápidas para obter liminares de urgência na liberação de exames, tratamentos e medicamentos negados por planos de saúde, bem como cancelamento de taxas abusivas e restituição em dobro de quantias cobradas indevidamente.",
    topics: [
      "Ações contra Planos de Saúde: pedidos liminares para liberação urgente de exames, internações e cirurgias",
      "Cobranças Abusivas e Tarifas Bancárias Não Contratadas com pedido de repetição de indébito em dobro",
      "Empréstimos Consignados Fraudulentos e Cancelamento de contratos com RMC / cartão consignado",
      "Produtos com Defeito Oculto e Veículos não consertados dentro do prazo legal",
      "Direito Aéreo: indenizações por cancelamento injustificado de voo, atrasos e extravio de bagagem",
    ],
    whatsAppText:
      "Olá, Dra. Alesânia! Gostaria de orientação em Direito do Consumidor / Abuso Bancário / Plano de Saúde.",
  },
  {
    id: "consultoria-juridica-preventiva",
    title: "Consultoria Jurídica & Resolução Extrajudicial",
    category: "Prevenção de Conflitos · Mediação de Acordos · Diagnóstico Estratégico · Segurança nos Negócios",
    icon: Briefcase,
    tag: "Prevenção Estratégica · Economia de Tempo · Segurança Jurídica",
    summary:
      "Soluções inteligentes, preventivas e amigáveis para solucionar divergências antes que se tornem processos longos e desgastantes. Atendimento personalizado para pessoas e empresas.",
    details:
      "A advocacia contemporânea mais eficiente é aquela que previne litígios e economiza recursos emocionais e financeiros. Prestamos consultoria jurídica preventiva completa para famílias, produtores rurais e empreendedores de Pompéu e região, estruturando negócios seguros, contratos bem amarrados e conduzindo mediações extrajudiciais com validade de título executivo.",
    topics: [
      "Consultoria Jurídica Preventiva: mapeamento prévio de riscos civis, contratuais e familiares",
      "Mediação e Negociação Extrajudicial de Acordos com homologação jurídica",
      "Elaboração, Revisão e Pareceres Técnicos em Contratos Particulares e Empresariais",
      "Assessoria para Regularização de Imóveis Urbanos e Rurais e Escrituras Públicas",
      "Atendimento próximo com acompanhamento contínuo e prestação de contas transparente",
    ],
    whatsAppText:
      "Olá, Dra. Alesânia Menezes! Gostaria de uma Consultoria Jurídica preventiva para meu negócio ou família.",
  },
];

interface Review {
  name: string;
  badge: string;
  date: string;
  category:
    | "Competência & Técnica"
    | "Ética & Confiabilidade"
    | "Atendimento & Atenção"
    | "Melhor da Comarca de Pompéu";
  content: string;
}

const clientReviews: Review[] = [
  {
    name: "Gracyella Borges",
    badge: "8 avaliações · 5 Estrelas",
    date: "1 ano atrás",
    category: "Competência & Técnica",
    content:
      "Dra. Alesânia, só tenho a agradecer pela competência e dedicação. Constantemente, empenhada e demonstrando grande conhecimento jurídico que me deu total segurança durante todo o processo. Sempre muito atenciosa e disponível para esclarecer todas as minhas dúvidas. Profissional ética, confiável e que realmente se importa com o cliente. Recomendo demais!",
  },
  {
    name: "Ednaldo Dias",
    badge: "3 avaliações · 5 Estrelas",
    date: "2 anos atrás",
    category: "Ética & Confiabilidade",
    content:
      "Excelente profissional, competente, ética, comprometida com o ganho das causas e confiável. Recomendo nota 10",
  },
  {
    name: "Joao Pedro Menezes",
    badge: "2 avaliações · 5 Estrelas",
    date: "2 anos atrás",
    category: "Atendimento & Atenção",
    content:
      "Muito satisfeito com o serviço! A equipe do escritório foi atenciosa, profissional e eficaz, resolvendo meu caso com excelência. Recomendo fortemente!",
  },
  {
    name: "anna paula",
    badge: "3 avaliações · 3 fotos · 5 Estrelas",
    date: "2 anos atrás",
    category: "Atendimento & Atenção",
    content:
      "Uma das melhores experiências, ótimo trabalho, excelente atendimento, soluções de forma rápida e eficiente.",
  },
  {
    name: "Eduardo Fernandes",
    badge: "Local Guide · 6 avaliações · 5 Estrelas",
    date: "2 anos atrás",
    category: "Melhor da Comarca de Pompéu",
    content:
      "A melhor Advocacia da comarca de Pompéu! Recomendada",
  },
  {
    name: "Cristina Gomes Caetano",
    badge: "3 avaliações · 2 fotos · 5 Estrelas",
    date: "2 anos atrás",
    category: "Ética & Confiabilidade",
    content:
      "Profissional ímpar! Compromisso, ética e profissionalismo com todos os processos!",
  },
  {
    name: "Jesualda Alvarenga",
    badge: "3 avaliações · 5 Estrelas",
    date: "2 anos atrás",
    category: "Competência & Técnica",
    content:
      "Profissional maravilhosa, serviço efetuado com muita competência.",
  },
  {
    name: "Eliamar Xavier",
    badge: "3 avaliações · 2 fotos · 5 Estrelas",
    date: "2 anos atrás",
    category: "Ética & Confiabilidade",
    content:
      "Super recomendo... profissionalismo, ética e responsabilidade.",
  },
  {
    name: "Silvana Aparecida Ferreira Couto Couto",
    badge: "1 avaliação · 5 Estrelas",
    date: "2 anos atrás",
    category: "Atendimento & Atenção",
    content:
      "Muito boa. Muito bem atendida, presteza, compromisso, clareza nas informações.",
  },
  {
    name: "Maria Macie",
    badge: "1 avaliação · 5 Estrelas",
    date: "2 anos atrás",
    category: "Atendimento & Atenção",
    content:
      "Advogada capacitada, humilde e muito atenciosa.",
  },
  {
    name: "christiam jonhne",
    badge: "11 avaliações · 5 Estrelas",
    date: "2 anos atrás",
    category: "Ética & Confiabilidade",
    content:
      "Maravilhoso, pessoa séria e competente!",
  },
  {
    name: "Paula Eduarda",
    badge: "2 avaliações · 5 Estrelas",
    date: "2 anos atrás",
    category: "Competência & Técnica",
    content:
      "Advogada super competente e profissional.",
  },
  {
    name: "Ricardo Menezes",
    badge: "7 avaliações · 2 fotos · 5 Estrelas",
    date: "2 anos atrás",
    category: "Competência & Técnica",
    content:
      "Profissional super competente e responsável !!!",
  },
  {
    name: "Leila Mara",
    badge: "Local Guide · 90 avaliações · 12 fotos · 5 Estrelas",
    date: "2 anos atrás",
    category: "Melhor da Comarca de Pompéu",
    content:
      "Excelente profissional!",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "Como funciona a primeira consulta jurídica no escritório da Dra. Alesânia Menezes?",
    answer:
      "Nosso primeiro contato pode ser realizado de forma presencial em nossa sede no Centro de Pompéu - MG (R. Olegário Maciel, 182) ou 100% online por meio de chamada de vídeo ou WhatsApp (37) 99961-7913. Durante a consulta, realizamos uma escuta humanizada e detalhada da sua história, examinamos os documentos apresentados e traçamos o diagnóstico jurídico com total clareza sobre viabilidade, prazos e custos.",
  },
  {
    question: "Como funciona o divórcio e o inventário em cartório? É mais rápido que na Justiça?",
    answer:
      "Sim, é muito mais ágil! Quando há consenso entre os envolvidos e preenchidos os requisitos da legislação (ausência de herdeiros menores/incapazes no inventário ou consenso pleno), o procedimento é formalizado por Escritura Pública em Cartório de Notas na presença da Dra. Alesânia Menezes. Um procedimento que na Justiça comum poderia se arrastar por meses ou anos é solucionado em poucas semanas, com substancial economia de taxas e impostos.",
  },
  {
    question: "Como é a atuação especializada na defesa e proteção dos direitos das mulheres?",
    answer:
      "A Dra. Alesânia Menezes é pós-graduada em Direito das Mulheres e Presidente da Comissão da Mulher Advogada da OAB/MG. O escritório oferece acolhimento especializado, reservado e acolhedor, com pedidos de medidas protetivas de urgência, combate rigoroso à violência patrimonial e psicológica, garantia de pensão justa e condução de divórcios protetivos, garantindo que a mulher se sinta verdadeiramente protegida em cada etapa.",
  },
  {
    question: "O que compreende a atuação em Direito Público e Defesa de Servidores?",
    answer:
      "Respaldada por sua pós-graduação em Direito Público, a Dra. Alesânia atua na defesa de servidores públicos municipais e estaduais em Processos Administrativos Disciplinares (PAD), cobrança de verbas devidas pela Fazenda Pública, pedidos de mandados de segurança contra ilegalidades da administração pública e assessoria em concursos públicos.",
  },
  {
    question: "Tive meu nome negativado indevidamente ou caí em golpe bancário. O que pode ser feito?",
    answer:
      "A negativação indevida ou fraude virtual (golpe do Pix, consignados falsos) enseja ação judicial com Pedido Liminar de Urgência ('inaudita altera parte'). O juiz costuma determinar a exclusão do seu CPF dos cadastros de inadimplentes no SPC/Serasa em curto prazo sob pena de multa diária, cumulado com o pedido de indenização por danos morais presumidos e ressarcimento dos prejuízos materiais.",
  },
  {
    question: "O escritório atende apenas em Pompéu ou também em outras cidades de Minas e do Brasil?",
    answer:
      "Nosso escritório físico está localizado no coração de Pompéu - MG (R. Olegário Maciel, 182 - Centro), atendendo presencialmente clientes de Pompéu, Martinho Campos, Abaeté, Felixlândia, Curvelo, Pitangui, Sete Lagoas e toda a região centro-oeste mineira. Além disso, por meio do processo eletrônico (PJe), atuamos com total segurança de forma digital para clientes em todo o Brasil.",
  },
];

function Heading({
  eyebrow,
  children,
  description,
  dark = false,
}: {
  eyebrow?: string;
  children: React.ReactNode;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className={dark ? "eyebrow-dark mb-3.5" : "eyebrow mb-3.5"}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.6rem] ${
          dark ? "text-white" : "text-[#1a0f0a]"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm leading-relaxed sm:text-base ${
            dark ? "text-[#ede4d5]" : "text-[#5c4e46]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedPractice, setSelectedPractice] = useState<PracticeArea | null>(
    null
  );
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedReviewCategory, setSelectedReviewCategory] =
    useState<string>("Todas");
  const [showAllReviews, setShowAllReviews] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const reviewCategories = [
    "Todas",
    "Competência & Técnica",
    "Ética & Confiabilidade",
    "Atendimento & Atenção",
    "Melhor da Comarca de Pompéu",
  ];

  const filteredReviews =
    selectedReviewCategory === "Todas"
      ? clientReviews
      : clientReviews.filter((r) => r.category === selectedReviewCategory);

  const displayedReviews = showAllReviews
    ? filteredReviews
    : filteredReviews.slice(0, 6);

  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-[#fdfbf7] text-[#1a0f0a] selection:bg-[#361a10] selection:text-[#f9efcb]">
        {/* ======================================================== */}
        {/* TOP ANNOUNCEMENT BAR (WARM COCOA NOIR & GOLD ACCENTS)     */}
        {/* ======================================================== */}
        <div className="border-b border-[#361a10] bg-[#190d08] py-2 text-xs text-[#ede4d5]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#c5a059] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#f9efcb]" />
              </span>
              <span className="text-[11px] sm:text-xs text-[#f9efcb] font-semibold">
                ESCRITÓRIO DE ADVOCACIA ALESÂNIA MENEZES · OAB/MG · Pompéu - MG ⚖️
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-[#ede4d5]">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#f9efcb]"
              >
                <Star size={12} className="fill-[#f59e0b] text-[#f59e0b]" />
                <span className="font-bold text-[#f9efcb]">5,0 ★</span> (31 avaliações no Google · Pompéu - MG)
              </a>
              <span className="hidden h-3 w-px bg-[#361a10] sm:inline-block" />
              <a
                href={getWhatsAppUrl("Olá, Dra. Alesânia Menezes! Gostaria de consultar sobre o meu caso.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 font-semibold text-[#f9efcb] transition-colors hover:text-white sm:inline-flex"
              >
                <WhatsAppIcon size={13} className="text-[#c5a059]" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* STICKY HEADER / NAVBAR (OFFICIAL ALESÂNIA MENEZES LOGO)  */}
        {/* ======================================================== */}
        <header
          className={`sticky top-0 z-40 w-full transition-all duration-300 ${
            scrolled
              ? "border-b border-[#ede4d5] bg-white/95 py-2.5 shadow-md backdrop-blur-md"
              : "border-b border-[#ede4d5]/70 bg-[#fdfbf7]/90 py-3 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
            {/* Left: Official Alesânia Menezes Logo Badge + Typography */}
            <a
              href="#"
              className="group flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-95"
              aria-label="Alesânia Menezes Advocacia - Início"
            >
              <Image
                src={LOGO_SRC}
                alt="Alesânia Menezes — Advocacia Especializada"
                width={160}
                height={160}
                className="h-[46px] sm:h-[52px] md:h-[56px] w-auto object-contain drop-shadow-xs transition-transform duration-300 group-hover:scale-102"
                priority
                unoptimized
              />
              <div className="flex flex-col border-l border-[#c5a059]/40 pl-2.5">
                <span className="font-cinzel text-sm sm:text-base font-bold tracking-wider text-[#1a0f0a] leading-tight">
                  ALESÂNIA MENEZES
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.16em] text-[#b38e46] uppercase leading-tight">
                  ADVOCACIA ESPECIALIZADA
                </span>
                <span className="text-[8.5px] font-semibold text-[#8a4d35] tracking-wider hidden 2xl:block leading-tight">
                  OAB/MG · Pós-grad. D. Público e D. Mulheres
                </span>
              </div>
            </a>

            {/* Center: Desktop Navigation (Refined, balanced & elegant) */}
            <nav className="hidden items-center gap-4 lg:gap-5 xl:gap-6 xl:flex">
              <a href="#servicos" className="nav-link text-[11px] whitespace-nowrap">
                Atuação
              </a>
              <a href="#sobre" className="nav-link text-[11px] whitespace-nowrap">
                Sobre
              </a>
              <a href="#diferenciais" className="nav-link text-[11px] whitespace-nowrap">
                Diferenciais
              </a>
              <a href="#depoimentos" className="nav-link text-[11px] whitespace-nowrap">
                Avaliações (5,0 ★)
              </a>
              <a href="#duvidas" className="nav-link text-[11px] whitespace-nowrap">
                Dúvidas
              </a>
              <a href="#contato" className="nav-link text-[11px] whitespace-nowrap">
                Sede em Pompéu
              </a>
            </nav>

            {/* Right Action: WhatsApp CTA (Metallic Warm Gold, properly sized & shrink-0) */}
            <div className="flex shrink-0 items-center gap-2.5">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Alesânia Menezes! Gostaria de agendar uma consulta sobre o meu caso.")}
                target="_blank"
                variant="gold"
                size="sm"
                className="hidden sm:inline-flex whitespace-nowrap shrink-0"
              >
                <WhatsAppIcon size={14} className="text-[#190d08]" />
                <span className="hidden xl:inline">Falar no WhatsApp</span>
                <span className="xl:hidden">WhatsApp</span>
              </GlowingButton>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex size-9 sm:size-10 items-center justify-center rounded-lg border border-[#ede4d5] bg-white text-[#1a0f0a] transition-colors hover:border-[#b38e46] hover:text-[#361a10] xl:hidden cursor-pointer shrink-0"
                aria-label="Abrir menu principal"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="border-b border-[#ede4d5] bg-white px-5 py-6 xl:hidden shadow-xl"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-[#ede4d5]">
                    <Image
                      src={LOGO_SRC}
                      alt="Alesânia Menezes Advocacia"
                      width={120}
                      height={120}
                      className="h-[48px] w-auto object-contain"
                      priority
                      unoptimized
                    />
                    <div>
                      <p className="font-cinzel text-sm font-bold text-[#1a0f0a]">ALESÂNIA MENEZES</p>
                      <p className="text-[10px] font-bold text-[#b38e46] tracking-wider uppercase">ADVOCACIA ESPECIALIZADA</p>
                    </div>
                  </div>
                  <a
                    href="#servicos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#1a0f0a] uppercase transition-colors hover:text-[#b38e46]"
                  >
                    <span>Áreas de Atuação</span>
                    <ArrowRight size={14} className="text-[#b38e46]" />
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#1a0f0a] uppercase transition-colors hover:text-[#b38e46]"
                  >
                    <span>Sobre Dra. Alesânia Menezes</span>
                    <ArrowRight size={14} className="text-[#b38e46]" />
                  </a>
                  <a
                    href="#diferenciais"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#1a0f0a] uppercase transition-colors hover:text-[#b38e46]"
                  >
                    <span>Nossos Pilares & Atendimento</span>
                    <ArrowRight size={14} className="text-[#b38e46]" />
                  </a>
                  <a
                    href="#depoimentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#1a0f0a] uppercase transition-colors hover:text-[#b38e46]"
                  >
                    <span>Avaliações no Google (31 Avaliações · 5,0 ★)</span>
                    <ArrowRight size={14} className="text-[#b38e46]" />
                  </a>
                  <a
                    href="#duvidas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#1a0f0a] uppercase transition-colors hover:text-[#b38e46]"
                  >
                    <span>Dúvidas Frequentes</span>
                    <ArrowRight size={14} className="text-[#b38e46]" />
                  </a>
                  <a
                    href="#contato"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#1a0f0a] uppercase transition-colors hover:text-[#b38e46]"
                  >
                    <span>Sede em Pompéu - MG</span>
                    <ArrowRight size={14} className="text-[#b38e46]" />
                  </a>

                  <div className="pt-2">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dra. Alesânia Menezes! Gostaria de tirar dúvidas sobre meu caso pelo WhatsApp.")}
                      target="_blank"
                      variant="gold"
                      size="md"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Fale com a Dra. Alesânia no WhatsApp</span>
                    </GlowingButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* ======================================================== */}
        {/* DOBRA 1: HERO SECTION — COM FOTO DA DRA. ALESÂNIA        */}
        {/* ======================================================== */}
        <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-22 lg:pt-18 lg:pb-26 bg-[#fdfbf7]">
          {/* Subtle Warm Amber Gold & Cocoa Glow */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[950px] -translate-x-1/2 rounded-full bg-radial from-[#dfbe76]/15 via-[#b86b5a]/5 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -right-40 -z-10 h-80 w-80 rounded-full bg-[#c5a059]/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Copy & Authority */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="lg:col-span-7"
              >
                {/* Eyebrow Badge */}
                <motion.div variants={reveal} className="mb-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#ede4d5] bg-white px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-[#361a10] shadow-xs">
                    <span className="size-1.5 rounded-full bg-[#b38e46] animate-pulse" />
                    ESCRITÓRIO DE ADVOCACIA ALESÂNIA MENEZES · POMPÉU - MG
                  </span>
                </motion.div>

                {/* H1 Headline */}
                <motion.h1
                  variants={reveal}
                  className="font-serif text-3xl leading-[1.16] font-bold tracking-tight text-[#1a0f0a] sm:text-5xl lg:text-[3.25rem]"
                >
                  Advocacia de Excelência e Atendimento Humanizado em{" "}
                  <span className="bg-gradient-to-r from-[#8a4d35] via-[#b38e46] to-[#c5a059] bg-clip-text text-transparent">
                    Família, Cível e Direito Público.
                  </span>
                </motion.h1>

                {/* Subtitle / Value Proposition */}
                <motion.p
                  variants={reveal}
                  className="mt-6 text-base leading-relaxed text-[#5c4e46] sm:text-lg lg:max-w-xl"
                >
                  Sob a liderança da <strong className="font-semibold text-[#1a0f0a]">Dra. Alesânia Menezes</strong> — Advogada com Pós-graduação em{" "}
                  <strong className="font-semibold text-[#1a0f0a]">Direito Público</strong> e{" "}
                  <strong className="font-semibold text-[#1a0f0a]">Direito das Mulheres</strong>, e Presidente da{" "}
                  <strong className="font-semibold text-[#1a0f0a]">Comissão da Mulher Advogada da OAB/MG</strong> —, nosso escritório une sensibilidade, rigor técnico e agilidade para defender seus direitos com ética inegociável e máxima segurança jurídica.
                </motion.p>

                {/* Quick Highlights Pills */}
                <motion.div
                  variants={reveal}
                  className="mt-6 flex flex-wrap gap-2.5 sm:gap-3"
                >
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#ede4d5] bg-white px-3 py-1 text-xs font-semibold text-[#361a10] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#b38e46]" />
                    Direito de Família & Sucessões
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#ede4d5] bg-white px-3 py-1 text-xs font-semibold text-[#361a10] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#b38e46]" />
                    Defesa & Direito das Mulheres
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#ede4d5] bg-white px-3 py-1 text-xs font-semibold text-[#361a10] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#b38e46]" />
                    Pós-graduação em Direito Público
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#ede4d5] bg-white px-3 py-1 text-xs font-semibold text-[#361a10] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#b38e46]" />
                    Divórcio & Inventário em Cartório
                  </span>
                </motion.div>

                {/* Action CTAs */}
                <motion.div
                  variants={reveal}
                  className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
                >
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Alesânia Menezes! Gostaria de agendar uma consulta jurídica sobre o meu caso.")}
                    target="_blank"
                    variant="gold"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Falar com a Dra. Alesânia no WhatsApp</span>
                  </GlowingButton>

                  <GlowingButton
                    href="#servicos"
                    variant="white"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <span>Conheça Nossas Atuações</span>
                    <ArrowRight size={15} />
                  </GlowingButton>
                </motion.div>

                {/* Trust Seal / Google 5,0 Authority */}
                <motion.div
                  variants={reveal}
                  className="mt-10 flex items-center gap-4 rounded-xl border border-[#ede4d5] bg-white/95 p-3.5 shadow-xs backdrop-blur-xs max-w-lg"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#190d08] text-white">
                    <GoogleIcon size={20} />
                  </div>
                  <div className="text-xs">
                    <div className="flex items-center gap-1 text-[#f59e0b]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-[#f59e0b]" />
                      ))}
                      <span className="ml-1.5 font-bold text-[#1a0f0a]">
                        5,0 / 5,0 no Google
                      </span>
                    </div>
                    <p className="mt-0.5 text-[#5c4e46]">
                      Classificação máxima com <strong className="font-semibold text-[#1a0f0a]">31 avaliações 5 estrelas</strong> em Pompéu - MG e comarca.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column: Hero Photo of Dra. Alesânia Menezes */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="lg:col-span-5"
              >
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Outer Frame with Metallic Gold Rim Accent */}
                  <div className="group relative overflow-hidden rounded-2xl border-2 border-[#c5a059]/60 bg-gradient-to-b from-[#361a10] via-[#26130b] to-[#190d08] p-2 shadow-2xl shadow-[#190d08]/25 transition-all duration-300 hover:border-[#dfbe76]">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#190d08]">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dra. Alesânia Menezes — Escritório de Advocacia em Pompéu MG"
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-102"
                        priority
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                      />

                      {/* Subtle Bottom Vignette */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#190d08]/90 via-transparent to-transparent" />

                      {/* Floating Badge on Photo: Dra. Alesânia Menezes */}
                      <div className="absolute right-3.5 bottom-3.5 left-3.5 rounded-xl border border-[#c5a059]/40 bg-[#190d08]/94 p-3.5 text-white shadow-xl backdrop-blur-md">
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <p className="font-serif text-sm font-bold tracking-wide text-[#f9efcb]">
                              Dra. Alesânia Menezes
                            </p>
                            <p className="text-[11px] font-medium text-[#ede4d5]">
                              Pres. Comissão Mulher Advogada · OAB/MG
                            </p>
                            <p className="text-[10px] text-[#ddc89d]">
                              Pós-grad. Direito Público e D. Mulheres
                            </p>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <a
                              href={INSTAGRAM_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex size-8 items-center justify-center rounded-lg bg-white/10 text-[#f9efcb] transition-colors hover:bg-white/20"
                              aria-label="Instagram da Dra. Alesânia Menezes"
                              title="@alesaniamenezes"
                            >
                              <InstagramIcon size={16} />
                            </a>
                            <a
                              href={GOOGLE_SEARCH_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex size-8 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
                              aria-label="Google Meu Negócio"
                              title="5,0 no Google"
                            >
                              <GoogleIcon size={15} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Trust Card Badge (Top Right) */}
                  <div className="absolute -top-4 -right-4 hidden rounded-xl border border-[#ede4d5] bg-white p-3 shadow-lg sm:flex items-center gap-2.5">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-[#361a10] text-[#f9efcb]">
                      <Landmark size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-[#1a0f0a]">R. Olegário Maciel, 182</p>
                      <p className="text-[10px] text-[#5c4e46]">Centro · Pompéu · MG</p>
                    </div>
                  </div>

                  {/* Floating Trust Card Badge (Bottom Left) */}
                  <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-[#ede4d5] bg-white p-3 shadow-lg sm:flex items-center gap-2.5">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-[#c5a059]/15 text-[#8a4d35]">
                      <WhatsAppIcon size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-[#1a0f0a]">Atendimento & Consulta</p>
                      <p className="text-[10px] text-[#5c4e46]">{PHONE_DISPLAY}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 2: BARRA DE AUTORIDADE & MÉTRICAS COMPROVADAS      */}
        {/* ======================================================== */}
        <section className="border-y border-[#361a10] bg-[#190d08] py-9 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
              {/* Stat 1 */}
              <div className="flex flex-col border-l-2 border-[#b38e46] pl-4 sm:pl-5">
                <div className="flex items-center gap-1 text-[#f59e0b]">
                  <Star size={16} className="fill-[#f59e0b]" />
                  <span className="font-serif text-2xl font-bold text-white sm:text-3xl">
                    5,0 ★
                  </span>
                </div>
                <p className="mt-1 text-xs font-bold tracking-wider text-[#f9efcb] uppercase">
                  31 Avaliações no Google
                </p>
                <p className="mt-0.5 text-[11px] text-[#ede4d5]">
                  100% de recomendação máxima em Pompéu - MG
                </p>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col border-l-2 border-[#b38e46] pl-4 sm:pl-5">
                <span className="font-serif text-2xl font-bold text-[#f9efcb] sm:text-3xl">
                  OAB/MG
                </span>
                <p className="mt-1 text-xs font-bold tracking-wider text-white uppercase">
                  Comissão Mulher Advogada
                </p>
                <p className="mt-0.5 text-[11px] text-[#ede4d5]">
                  Presidente da Comissão · Liderança Institucional
                </p>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col border-l-2 border-[#b38e46] pl-4 sm:pl-5">
                <span className="font-serif text-2xl font-bold text-[#f9efcb] sm:text-3xl">
                  Pós-Graduada
                </span>
                <p className="mt-1 text-xs font-bold tracking-wider text-white uppercase">
                  Direito Público & Mulheres
                </p>
                <p className="mt-0.5 text-[11px] text-[#ede4d5]">
                  Especialização acadêmica & prática forense
                </p>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col border-l-2 border-[#b38e46] pl-4 sm:pl-5">
                <span className="font-serif text-2xl font-bold text-[#f9efcb] sm:text-3xl">
                  Pompéu · MG
                </span>
                <p className="mt-1 text-xs font-bold tracking-wider text-white uppercase">
                  Sede Própria no Centro
                </p>
                <p className="mt-0.5 text-[11px] text-[#ede4d5]">
                  Atendimento presencial e online em todo o Brasil
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 3: ÁREAS DE ATUAÇÃO (SERVIÇOS COM MODAL DETALHADO)  */}
        {/* ======================================================== */}
        <section id="servicos" className="py-20 sm:py-26 bg-[#fdfbf7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12">
              <Heading
                eyebrow="Áreas de Atuação Especializada"
                description="Soluções jurídicas humanizadas e estratégicas nas áreas de Família, Sucessões, Direito das Mulheres, Cível e Direito Público, com rigor técnico e foco na resolução eficaz. Clique em qualquer área para ver os procedimentos detalhados."
              >
                Defesa Técnica e Resolutiva Para Você, Sua Família e Seus Direitos
              </Heading>

              <div className="shrink-0">
                <GlowingButton
                  href={getWhatsAppUrl("Olá, Dra. Alesânia Menezes! Gostaria de consultar sobre a viabilidade do meu caso.")}
                  target="_blank"
                  variant="gold"
                  size="md"
                >
                  <WhatsAppIcon size={16} />
                  <span>Consultar Meu Caso</span>
                </GlowingButton>
              </div>
            </div>

            {/* Practice Areas Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {practiceAreas.map((area) => {
                const IconComponent = area.icon;
                return (
                  <motion.div
                    key={area.id}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setSelectedPractice(area)}
                    className="group relative flex flex-col justify-between rounded-xl border border-[#ede4d5] bg-white p-7 shadow-xs transition-all duration-300 hover:border-[#b38e46] hover:shadow-lg cursor-pointer"
                  >
                    <div>
                      {/* Top Bar: Icon + Category Tag */}
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#190d08] text-[#f9efcb] shadow-xs transition-colors group-hover:bg-[#361a10]">
                          <IconComponent size={22} />
                        </div>
                        <span className="rounded-full bg-[#f7f3eb] border border-[#ede4d5] px-2.5 py-1 text-[10px] font-bold text-[#8a4d35]">
                          {area.tag.split("·")[0].trim()}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-xl font-bold tracking-tight text-[#1a0f0a] group-hover:text-[#8a4d35] transition-colors">
                        {area.title}
                      </h3>

                      {/* Sub-category tags */}
                      <p className="mt-2 text-xs font-medium text-[#5c4e46] leading-relaxed">
                        {area.category}
                      </p>

                      {/* Summary */}
                      <p className="mt-4 text-sm leading-relaxed text-[#5c4e46]">
                        {area.summary}
                      </p>
                    </div>

                    {/* Bottom CTA trigger */}
                    <div className="mt-6 pt-4 border-t border-[#ede4d5] flex items-center justify-between text-xs font-bold text-[#8a4d35]">
                      <span>Ver detalhes e procedimentos</span>
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* MODAL INTERATIVO: DETALHES COMPLETOS DA ÁREA DE ATUAÇÃO  */}
        {/* ======================================================== */}
        <AnimatePresence>
          {selectedPractice && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPractice(null)}
                className="absolute inset-0 bg-[#190d08]/80 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#ede4d5] bg-white p-6 sm:p-8 shadow-2xl"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedPractice(null)}
                  className="absolute top-5 right-5 inline-flex size-9 items-center justify-center rounded-lg bg-[#f7f3eb] text-[#1a0f0a] transition-colors hover:bg-[#ede4d5] cursor-pointer"
                  aria-label="Fechar modal"
                >
                  <X size={18} />
                </button>

                {/* Modal Header */}
                <div className="pr-10">
                  <span className="inline-block rounded-full bg-[#f7f3eb] border border-[#ede4d5] px-3 py-1 text-xs font-bold text-[#8a4d35]">
                    {selectedPractice.tag}
                  </span>
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-[#1a0f0a] sm:text-3xl mt-3">
                    {selectedPractice.title}
                  </h3>
                  <p className="mt-2 text-xs font-medium text-[#5c4e46]">
                    {selectedPractice.category}
                  </p>
                </div>

                {/* Description */}
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#5c4e46] border-t border-[#ede4d5] pt-5">
                  <p>{selectedPractice.details}</p>
                </div>

                {/* Topics / Bullet Points */}
                <div className="mt-6 border-t border-[#ede4d5] pt-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a0f0a] mb-3">
                    Principais Procedimentos & Medidas Jurídicas
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedPractice.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#1a0f0a] leading-relaxed">
                        <CheckCircle2 size={15} className="text-[#b38e46] shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal Footer CTA */}
                <div className="mt-8 border-t border-[#ede4d5] pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-[#5c4e46]">
                    Atendimento presencial em Pompéu - MG ou digital seguro.
                  </span>
                  <GlowingButton
                    href={getWhatsAppUrl(selectedPractice.whatsAppText)}
                    target="_blank"
                    variant="gold"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Consultar Dra. Alesânia</span>
                  </GlowingButton>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ======================================================== */}
        {/* DOBRA 4: SOBRE A ADVOGADA DRA. ALESÂNIA MENEZES          */}
        {/* ======================================================== */}
        <section id="sobre" className="py-20 sm:py-26 border-t border-[#ede4d5] bg-[#f7f3eb]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Photo Column - Office with Gold Wall Logo */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#c5a059]/50 bg-[#190d08] p-2 shadow-xl shadow-[#361a10]/15">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#26130b]">
                      <Image
                        src={FOTO_PORTRAIT_SRC}
                        alt="Dra. Alesânia Menezes em seu escritório em Pompéu MG com letreiro dourado"
                        fill
                        className="object-cover object-center"
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 420px"
                      />
                    </div>
                  </div>

                  {/* Decorative Badge */}
                  <div className="absolute -bottom-5 -right-5 hidden sm:block rounded-xl border border-[#c5a059]/40 bg-[#190d08] p-4 text-white shadow-xl max-w-xs">
                    <p className="text-[11px] font-bold text-[#f9efcb] uppercase tracking-wider">
                      Alesânia Menezes Advocacia
                    </p>
                    <p className="mt-1 text-xs text-[#ede4d5] leading-snug">
                      &quot;Competência técnica, humildade no trato e dedicação integral a cada causa e a cada cliente.&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-7">
                <Heading
                  eyebrow="Sobre a Profissional & Trajetória"
                  description="Com atuação ética, acolhedora e reconhecida competência jurídica, a Dra. Alesânia Menezes consolidou-se como referência na comarca de Pompéu e em todo o Centro-Oeste de Minas Gerais."
                >
                  Dra. Alesânia Menezes: Rigor Técnico, Ética e Acolhimento Humanizado
                </Heading>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#361a10] sm:text-base">
                  <p>
                    A <strong className="font-semibold text-[#1a0f0a]">Dra. Alesânia Menezes</strong> é advogada com destacada especialização acadêmica e prática forense, possuindo <strong className="font-semibold text-[#1a0f0a]">Pós-graduação em Direito Público</strong> e <strong className="font-semibold text-[#1a0f0a]">Direito das Mulheres</strong>.
                  </p>
                  <p>
                    Exerce a honorável liderança como <strong className="font-semibold text-[#1a0f0a]">Presidente da Comissão da Mulher Advogada da OAB/MG</strong> na Comarca de Pompéu, atuando firmemente na defesa dos direitos fundamentais, promoção da igualdade e garantia de suporte humanizado e protetivo.
                  </p>
                  <p>
                    Sua atuação é pautada por atributos reiteradamente elogiados por seus constituintes: <strong className="font-semibold text-[#1a0f0a]">capacidade técnica, empatia, humildade no atendimento e clareza nas orientações</strong> — o que se reflete na nota máxima unânime de <strong className="font-semibold text-[#1a0f0a]">5,0 estrelas no Google em 31 avaliações verificadas</strong>.
                  </p>
                  <p>
                    Com escritório próprio estabelecido na <strong className="font-semibold text-[#1a0f0a]">R. Olegário Maciel, 182 (Centro de Pompéu - MG)</strong> e atendimento digital seguro para clientes em todo o território nacional, assegura tranquilidade, confidencialidade absoluta e defesa jurídica de primeira ordem.
                  </p>
                </div>

                {/* Key Points */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 rounded-lg border border-[#ede4d5] bg-white p-3.5 shadow-2xs">
                    <Heart size={18} className="text-[#8a4d35] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#1a0f0a] uppercase">Direito das Mulheres</h4>
                      <p className="text-xs text-[#5c4e46] mt-0.5">Presidente da Comissão OAB/MG, acolhimento sigiloso e proteção integral.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-[#ede4d5] bg-white p-3.5 shadow-2xs">
                    <Gavel size={18} className="text-[#8a4d35] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#1a0f0a] uppercase">Família & Direito Público</h4>
                      <p className="text-xs text-[#5c4e46] mt-0.5">Pós-graduação em Direito Público, divórcios, inventários em cartório e servidores.</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 pt-4 flex flex-col sm:flex-row gap-3.5 items-center">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Alesânia Menezes! Gostaria de conversar diretamente sobre a minha demanda.")}
                    target="_blank"
                    variant="gold"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Falar com a Dra. Alesânia no WhatsApp</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#5c4e46] hover:text-[#1a0f0a] transition-colors"
                  >
                    <InstagramIcon size={16} />
                    <span>Seguir {INSTAGRAM_HANDLE} ({INSTAGRAM_STATS})</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 5: OS 4 PILARES DA ADVOCACIA                       */}
        {/* ======================================================== */}
        <section id="diferenciais" className="py-20 sm:py-26 bg-[#190d08] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Heading
              eyebrow="Nossos Diferenciais"
              description="Os pilares que sustentam a autoridade, o respeito institucional e a reputação máxima 5 estrelas conquistada pelo Escritório De Advocacia Alesânia Menezes."
              dark
            >
              Os 4 Pilares de Alesânia Menezes Advocacia
            </Heading>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Pillar 1 */}
              <div className="rounded-xl border border-[#361a10] bg-[#26130b]/80 p-6 transition-all duration-300 hover:border-[#b38e46] hover:bg-[#26130b]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#361a10] text-[#f9efcb]">
                  <HeartHandshake size={24} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#f9efcb]">
                  1. Acolhimento Humanizado & Escuta Atenta
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#ede4d5]">
                  Humildade no trato, empatia genuína e compreensão profunda da realidade de cada cliente, garantindo segurança emocional e jurídica em cada decisão.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="rounded-xl border border-[#361a10] bg-[#26130b]/80 p-6 transition-all duration-300 hover:border-[#b38e46] hover:bg-[#26130b]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#361a10] text-[#f9efcb]">
                  <Award size={24} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#f9efcb]">
                  2. Especialização & Liderança OAB/MG
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#ede4d5]">
                  Pós-graduação em Direito Público e Direito das Mulheres, somada à presidência da Comissão da Mulher Advogada da OAB/MG, aliando respaldo acadêmico à prática.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="rounded-xl border border-[#361a10] bg-[#26130b]/80 p-6 transition-all duration-300 hover:border-[#b38e46] hover:bg-[#26130b]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#361a10] text-[#f9efcb]">
                  <Shield size={24} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#f9efcb]">
                  3. Ética Inegociável & Transparência
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#ede4d5]">
                  Clareza absoluta quanto aos riscos e possibilidades da causa. Relacionamento transparente, prestação de contas constante e respeito ao cliente.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="rounded-xl border border-[#361a10] bg-[#26130b]/80 p-6 transition-all duration-300 hover:border-[#b38e46] hover:bg-[#26130b]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#361a10] text-[#f9efcb]">
                  <Landmark size={24} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#f9efcb]">
                  4. Sede em Pompéu & Digital Nacional
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#ede4d5]">
                  Escritório estruturado na R. Olegário Maciel, 182 (Centro de Pompéu - MG) e tecnologia digital de ponta para atender clientes em todo o Brasil com total agilidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 6: PROVA SOCIAL & DEPOIMENTOS REAIS GOOGLE 5,0 ★   */}
        {/* ======================================================== */}
        <section id="depoimentos" className="py-20 sm:py-26 bg-[#fdfbf7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6">
              <Heading
                eyebrow="Prova Social Verificada"
                description="Confira avaliações 100% autênticas e espontâneas de clientes atendidos pelo Escritório De Advocacia Alesânia Menezes no Google Meu Negócio."
              >
                Avaliações com Nota Máxima de 5,0 ★ no Google em Pompéu · MG
              </Heading>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#ede4d5] bg-white px-4 py-2.5 text-xs font-bold text-[#1a0f0a] shadow-xs hover:border-[#b38e46] hover:text-[#8a4d35] transition-colors"
                >
                  <GoogleIcon size={16} />
                  <span>Ver perfil no Google Meu Negócio</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Google Badges */}
            <div className="flex flex-wrap gap-2 pb-8 border-b border-[#ede4d5]">
              {reviewCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedReviewCategory(cat);
                    setShowAllReviews(false);
                  }}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                    selectedReviewCategory === cat
                      ? "bg-[#190d08] text-[#f9efcb] shadow-xs"
                      : "bg-white border border-[#ede4d5] text-[#5c4e46] hover:border-[#b38e46] hover:text-[#1a0f0a]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Reviews Cards Grid */}
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {displayedReviews.map((rev, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded-xl border border-[#ede4d5] bg-white p-6 shadow-xs transition-all hover:border-[#b38e46] hover:shadow-md"
                >
                  <div>
                    {/* Header: Name, Stars, Date */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-sm text-[#1a0f0a]">
                            {rev.name}
                          </h4>
                          <span className="size-1 rounded-full bg-[#ede4d5]" />
                          <span className="text-[10px] text-[#5c4e46] font-medium">
                            {rev.date}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#5c4e46] mt-0.5">
                          {rev.badge}
                        </p>
                      </div>

                      <div className="flex items-center gap-0.5 text-[#f59e0b]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={13} className="fill-[#f59e0b]" />
                        ))}
                      </div>
                    </div>

                    {/* Review text */}
                    <p className="mt-4 text-xs sm:text-sm text-[#361a10] leading-relaxed italic">
                      &quot;{rev.content}&quot;
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#ede4d5] flex items-center justify-between text-[11px] text-[#8a4d35]">
                    <span className="font-semibold">{rev.category}</span>
                    <BadgeCheck size={14} className="text-[#b38e46]" />
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              {filteredReviews.length > 6 && (
                <button
                  type="button"
                  onClick={() => setShowAllReviews(!showAllReviews)}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#ede4d5] bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#1a0f0a] hover:bg-[#f7f3eb] hover:border-[#b38e46] transition-colors cursor-pointer"
                >
                  {showAllReviews ? (
                    <span>Recolher Avaliações</span>
                  ) : (
                    <span>
                      Ver Mais Avaliações Reais do Google ({filteredReviews.length - 6} restantes)
                    </span>
                  )}
                </button>
              )}

              <GlowingButton
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                variant="white"
                size="md"
              >
                <GoogleIcon size={15} />
                <span>Ver Todas as 31 Avaliações no Google</span>
                <ExternalLink size={13} />
              </GlowingButton>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 7: PASSO A PASSO DO ATENDIMENTO                    */}
        {/* ======================================================== */}
        <section className="border-t border-[#ede4d5] py-20 sm:py-26 bg-[#f7f3eb]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Heading
              eyebrow="Como Funciona"
              description="Um processo transparente, seguro e descomplicado desde o primeiro contato pelo WhatsApp até a solução definitiva da sua causa."
            >
              Seu Atendimento Jurídico em 4 Passos Simples
            </Heading>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Step 1 */}
              <div className="relative flex flex-col rounded-xl border border-[#ede4d5] bg-white p-6 shadow-xs">
                <span className="font-serif text-3xl font-black text-[#ddc89d]">
                  01
                </span>
                <h3 className="mt-2 font-serif text-base font-bold text-[#1a0f0a]">
                  Contato Inicial & Sigilo
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#5c4e46]">
                  Você envia uma mensagem pelo nosso WhatsApp oficial relatando sua situação familiar, cível ou pública com sigilo irrestrito.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col rounded-xl border border-[#ede4d5] bg-white p-6 shadow-xs">
                <span className="font-serif text-3xl font-black text-[#ddc89d]">
                  02
                </span>
                <h3 className="mt-2 font-serif text-base font-bold text-[#1a0f0a]">
                  Diagnóstico Humanizado
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#5c4e46]">
                  A Dra. Alesânia Menezes examina seus documentos e esclarece suas opções jurídicas com franqueza, apresentando caminhos, riscos e prazos reais.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col rounded-xl border border-[#ede4d5] bg-white p-6 shadow-xs">
                <span className="font-serif text-3xl font-black text-[#ddc89d]">
                  03
                </span>
                <h3 className="mt-2 font-serif text-base font-bold text-[#1a0f0a]">
                  Ação Célere & Protocolo
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#5c4e46]">
                  Formalização rápida e prática pelo celular ou presencialmente em Pompéu, com protocolo imediato na Justiça ou diretamente no Cartório de Notas.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col rounded-xl border border-[#ede4d5] bg-white p-6 shadow-xs">
                <span className="font-serif text-3xl font-black text-[#ddc89d]">
                  04
                </span>
                <h3 className="mt-2 font-serif text-base font-bold text-[#1a0f0a]">
                  Acompanhamento Contínuo
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#5c4e46]">
                  Você é mantido informado a cada andamento processual, decisão ou expedição de documentos, com suporte permanente e transparente.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Alesânia Menezes! Gostaria de dar o primeiro passo e tirar dúvidas sobre meu caso.")}
                target="_blank"
                variant="gold"
                size="lg"
              >
                <WhatsAppIcon size={18} />
                <span>Iniciar Meu Atendimento Agora</span>
              </GlowingButton>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 8: FAQ — PERGUNTAS FREQUENTES                      */}
        {/* ======================================================== */}
        <section id="duvidas" className="py-20 sm:py-26 bg-[#fdfbf7]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Heading
                eyebrow="Tire Suas Dúvidas"
                description="Respostas diretas e esclarecedoras para as principais questões sobre divórcio, inventário em cartório, proteção das mulheres e causas cíveis."
              >
                Perguntas Frequentes
              </Heading>
            </div>

            <div className="mt-12 space-y-4">
              {faqList.map((item, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl border border-[#ede4d5] bg-white transition-all shadow-xs"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-[#1a0f0a] transition-colors hover:text-[#8a4d35] cursor-pointer"
                    >
                      <span className="pr-4">{item.question}</span>
                      {isOpen ? (
                        <ChevronUp size={18} className="shrink-0 text-[#b38e46]" />
                      ) : (
                        <ChevronDown size={18} className="shrink-0 text-[#5c4e46]" />
                      )}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-[#5c4e46] border-t border-[#ede4d5]"
                        >
                          {item.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-xl border border-[#ede4d5] bg-white p-6 text-center shadow-xs">
              <p className="text-sm font-bold text-[#1a0f0a]">
                Tem uma dúvida específica sobre a sua situação?
              </p>
              <p className="mt-1 text-xs text-[#5c4e46]">
                A Dra. Alesânia Menezes está disponível para responder diretamente no WhatsApp.
              </p>
              <div className="mt-4">
                <GlowingButton
                  href={getWhatsAppUrl("Olá, Dra. Alesânia! Gostaria de tirar uma dúvida pontual sobre o meu caso.")}
                  target="_blank"
                  variant="gold"
                  size="sm"
                >
                  <WhatsAppIcon size={15} />
                  <span>Tirar Dúvida no WhatsApp</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 9: SEDE, LOCALIZAÇÃO & CONTATO                     */}
        {/* ======================================================== */}
        <section id="contato" className="py-20 sm:py-26 bg-[#190d08] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Contact Info Column */}
              <div className="lg:col-span-6">
                <Heading
                  eyebrow="Onde Estamos & Contato"
                  description="Venha nos visitar em nossa sede em Pompéu - MG ou converse agora mesmo pelo canal oficial de atendimento online."
                  dark
                >
                  Estamos Prontos para Atender Sua Demanda
                </Heading>

                <div className="mt-8 space-y-5 text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#26130b] text-[#f9efcb]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-white text-xs uppercase tracking-wider">
                        Endereço / Sede Física
                      </p>
                      <p className="mt-1 text-[#ede4d5]">
                        {ADDRESS_POMPEU}
                      </p>
                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-[#f9efcb] hover:text-white hover:underline"
                      >
                        <span>Traçar rota no Google Maps</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#26130b] text-[#f9efcb]">
                      <WhatsAppIcon size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-white text-xs uppercase tracking-wider">
                        Telefone & WhatsApp Oficial
                      </p>
                      <p className="mt-1 text-[#ede4d5] font-semibold">
                        {PHONE_DISPLAY}
                      </p>
                      <a
                        href={getWhatsAppUrl("Olá, Dra. Alesânia Menezes! Gostaria de agendar uma consulta.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-[#f9efcb] hover:underline"
                      >
                        <span>Iniciar conversa direta no WhatsApp</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#26130b] text-[#f9efcb]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-white text-xs uppercase tracking-wider">
                        Horário de Funcionamento
                      </p>
                      <p className="mt-1 text-[#ede4d5]">
                        Segunda a Sexta · 09:00 às 18:00 (Abre às 09:00)
                      </p>
                      <p className="text-[11px] text-[#ddc89d]">
                        Atendimento presencial no Centro de Pompéu e online para todo o Brasil.
                      </p>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#26130b] text-[#f9efcb]">
                      <InstagramIcon size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-white text-xs uppercase tracking-wider">
                        Rede Social Oficial
                      </p>
                      <div className="mt-1 flex flex-col gap-1">
                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-semibold text-[#f9efcb] hover:text-white"
                        >
                          <span>{INSTAGRAM_HANDLE}</span>
                          <span className="text-[11px] text-[#ede4d5]">({INSTAGRAM_STATS})</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map / Route Card */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="overflow-hidden rounded-2xl border border-[#361a10] bg-[#26130b] p-6 sm:p-8 shadow-xl">
                  <div className="flex items-center justify-between pb-4 border-b border-[#361a10]">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-[#f9efcb]">
                        Escritório De Advocacia Alesânia Menezes
                      </h4>
                      <p className="text-xs text-[#ede4d5]">
                        R. Olegário Maciel, 182 · Centro, Pompéu - MG
                      </p>
                    </div>
                    <div className="flex items-center gap-1 rounded-md bg-[#190d08] px-3 py-1 text-xs font-bold text-[#f59e0b]">
                      <Star size={13} className="fill-[#f59e0b]" />
                      <span>5,0 ★</span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-[#ede4d5] leading-relaxed">
                    Sede acolhedora, moderna e acessível no Centro de Pompéu - MG, preparada para acolher você e sua família com total discrição, conforto e infraestrutura completa para a análise cuidadosa da sua demanda.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-xs font-bold uppercase text-[#190d08] hover:bg-[#ede4d5] transition-colors"
                    >
                      <MapPin size={16} />
                      <span>Abrir no Google Maps</span>
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dra. Alesânia! Gostaria de agendar um horário presencial no escritório em Pompéu.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#c5a059] bg-[#190d08] px-4 py-3 text-xs font-bold uppercase text-[#f9efcb] hover:bg-[#361a10] transition-colors"
                    >
                      <WhatsAppIcon size={16} className="text-[#c5a059]" />
                      <span>Agendar Horário Presencial</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* FOOTER INSTITUCIONAL EM CONFORMIDADE COM A OAB           */}
        {/* ======================================================== */}
        <footer className="border-t border-[#361a10] bg-[#140a06] py-14 text-[#ddc89d] text-xs">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-[#361a10]/80">
              {/* Brand Column */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3">
                  <Image
                    src={LOGO_SRC}
                    alt="Escritório De Advocacia Alesânia Menezes"
                    width={180}
                    height={180}
                    className="h-[52px] w-auto object-contain opacity-95"
                    unoptimized
                  />
                  <div>
                    <p className="font-cinzel text-sm font-bold text-[#f9efcb]">ALESÂNIA MENEZES</p>
                    <p className="text-[10px] font-bold text-[#b38e46] tracking-wider uppercase">ADVOCACIA ESPECIALIZADA</p>
                  </div>
                </div>
                <p className="mt-4 text-xs text-[#ede4d5] leading-relaxed">
                  Advocacia especializada em Direito de Família, Sucessões, Direito das Mulheres, Cível e Direito Público. Liderado pela Dra. Alesânia Menezes · Pós-grad. D. Público e D. Mulheres, Presidente da Comissão da Mulher Advogada da OAB/MG. Sede na R. Olegário Maciel, 182 - Centro, Pompéu - MG.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-8 items-center justify-center rounded-lg bg-[#26130b] text-[#f9efcb] hover:text-white hover:bg-[#361a10] transition-colors"
                    aria-label="Instagram da Dra. Alesânia Menezes"
                  >
                    <InstagramIcon size={15} />
                  </a>
                  <a
                    href={getWhatsAppUrl("Olá, Dra. Alesânia Menezes!")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-8 items-center justify-center rounded-lg bg-[#26130b] text-[#c5a059] hover:bg-[#361a10] transition-colors"
                    aria-label="WhatsApp Oficial"
                  >
                    <WhatsAppIcon size={15} />
                  </a>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-8 items-center justify-center rounded-lg bg-[#26130b] text-[#f9efcb] hover:text-white hover:bg-[#361a10] transition-colors"
                    aria-label="Google Meu Negócio"
                  >
                    <GoogleIcon size={14} />
                  </a>
                </div>
              </div>

              {/* Navigation Links */}
              <div>
                <p className="font-serif text-xs font-bold uppercase tracking-wider text-[#f9efcb] mb-4">
                  Navegação
                </p>
                <ul className="space-y-2">
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Áreas de Atuação
                    </a>
                  </li>
                  <li>
                    <a href="#sobre" className="hover:text-white transition-colors">
                      Sobre Dra. Alesânia Menezes
                    </a>
                  </li>
                  <li>
                    <a href="#diferenciais" className="hover:text-white transition-colors">
                      Nossos Pilares
                    </a>
                  </li>
                  <li>
                    <a href="#depoimentos" className="hover:text-white transition-colors">
                      Avaliações Google (5,0 ★)
                    </a>
                  </li>
                  <li>
                    <a href="#duvidas" className="hover:text-white transition-colors">
                      Perguntas Frequentes
                    </a>
                  </li>
                  <li>
                    <a href="#contato" className="hover:text-white transition-colors">
                      Sede em Pompéu - MG
                    </a>
                  </li>
                </ul>
              </div>

              {/* Practice Areas */}
              <div>
                <p className="font-serif text-xs font-bold uppercase tracking-wider text-[#f9efcb] mb-4">
                  Especialidades
                </p>
                <ul className="space-y-2">
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Direito de Família & Sucessões
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Direito das Mulheres & Proteção
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Direito Público & Servidores
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Divórcio e Inventário em Cartório
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Danos Morais & Negativação Indevida
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Consultoria Jurídica & Prevenção
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Details */}
              <div>
                <p className="font-serif text-xs font-bold uppercase tracking-wider text-[#f9efcb] mb-4">
                  Contato Oficial
                </p>
                <ul className="space-y-2.5 text-xs">
                  <li className="flex items-start gap-2">
                    <MapPin size={14} className="text-[#c5a059] shrink-0 mt-0.5" />
                    <span>R. Olegário Maciel, 182 - CENTRO, Pompéu - MG, 35640-000</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <WhatsAppIcon size={14} className="text-[#c5a059] shrink-0" />
                    <span>{PHONE_DISPLAY}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock size={14} className="text-[#c5a059] shrink-0" />
                    <span>Seg. a Sex. · 09:00 às 18:00</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star size={14} className="text-[#f59e0b] shrink-0 fill-[#f59e0b]" />
                    <span>5,0 ★ no Google (31 avaliações)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* OAB Compliance Disclaimer */}
            <div className="pt-8 text-[11px] leading-relaxed text-[#ede4d5]/70">
              <p>
                <strong>Aviso Legal & Ética Profissional da Advocacia:</strong> Este website tem caráter estritamente informativo e institucional, em total conformidade com o Código de Ética e Disciplina da Ordem dos Advogados do Brasil (OAB) e com o Provimento nº 205/2021 do Conselho Federal da OAB. As informações disponibilizadas não configuram promessa de resultado nem substituem a consulta jurídica individualizada com profissional devidamente habilitado. Dra. Alesânia Menezes · Pós-grad. Direito Público e Direito das Mulheres · Presidente da Comissão da Mulher Advogada da OAB/MG.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#ddc89d]/60">
                <p>© {new Date().getFullYear()} Escritório De Advocacia Alesânia Menezes. Todos os direitos reservados.</p>
                <p>Pompéu - MG · R. Olegário Maciel, 182 - CENTRO · Atendimento Nacional</p>
              </div>
            </div>
          </div>
        </footer>

        {/* ======================================================== */}
        {/* BOTÃO FLUTUANTE DO WHATSAPP (METALLIC WARM GOLD / COCOA) */}
        {/* ======================================================== */}
        <div className="fixed right-5 bottom-5 z-40 flex items-center gap-2.5">
          <a
            href={getWhatsAppUrl("Olá, Dra. Alesânia Menezes! Gostaria de tirar uma dúvida sobre o meu caso pelo WhatsApp.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex size-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#b38e46] via-[#dfbe76] to-[#c5a059] text-[#190d08] shadow-xl shadow-[#b38e46]/45 border border-[#f9efcb]/60 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#c5a059]/60 cursor-pointer"
            aria-label="Converse pelo WhatsApp com a Dra. Alesânia Menezes"
          >
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#dfbe76] opacity-35" />
            <WhatsAppIcon size={30} />
          </a>
        </div>
      </main>
    </MotionConfig>
  );
}
