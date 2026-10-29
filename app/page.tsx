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
  Siren,
  FileSpreadsheet,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Client & Firm Information — Ronaldo Giliard Advocacia e Consultoria Jurídica
const WHATSAPP_NUMBER = "5535997458013";
const PHONE_DISPLAY = "(35) 99745-8013";
const EMAIL_CONTACT = "contato@giliardadv.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/giliardadv/";
const INSTAGRAM_HANDLE = "@giliardadv";
const INSTAGRAM_STATS = "1.169 seguidores · 35 posts";

const ADDRESS_CAMPO_BELO =
  "R. João Pinheiro, 356 - Centro, Campo Belo - MG, 37270-000";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Ronaldo+Giliard+Advocacia+e+Consultoria+Jur%C3%ADdica%0ACampo+Belo+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const GOOGLE_MAPS_URL =
  "https://www.google.com/search?sca_esv=a225a88ab5a0d3cb&sxsrf=AKL5yDi3-vkda8Xhmq2e6vyazpAvb_X0mA:1793301708947&q=ronaldo+giliard+advocacia+e+consultoria+jur%C3%ADdica+campo+belo+endere%C3%A7o&ludocid=7500559776695212659&sa=X&ved=2ahUKEwjOvti6-d-XAxU0G7kGHZyUMr0Q6BN6BAg6EAI";

// Official assets generated from the new client logo & photoshoot (with cache busting v=rg3)
const LOGO_SRC = "/logo-ronaldo-giliard-trimmed.png?v=rg3";
const LOGO_WHITE_SRC = "/logo-ronaldo-giliard-white.png?v=rg3";
const EMBLEM_SRC = "/emblema-rg.png?v=rg3";
const FOTO_HERO_SRC = "/ronaldo-giliard.jpg?v=rg3";
const FOTO_PORTRAIT_SRC = "/dr-ronaldo-portrait.jpg?v=rg3";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dr. Ronaldo Giliard! Gostaria de agendar uma consulta jurídica especializada sobre o meu caso.";
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
    id: "direito-criminal-defesa-penal",
    title: "Direito Criminal & Defesa Penal Estratégica 24h",
    category: "Plantão em Delegacia · Audiência de Custódia · Flagrante · Tribunal do Júri · Habeas Corpus",
    icon: Siren,
    tag: "Plantão Urgente 24h · Defesa Combativa · Liberdade Provisória",
    summary:
      "Atendimento imediato em situações de urgência penal. Acompanhamento rigoroso em delegacias, pedidos de liberdade provisória, relaxamento de prisão em flagrante e defesa perante o Tribunal do Júri.",
    details:
      "A liberdade e a dignidade humana não podem esperar. Sob a liderança do Dr. Ronaldo Giliard (OAB/MG 218.682), prestamos assistência criminal intransigente desde os primeiros momentos da abordagem policial ou lavratura do flagrante, passando pela realização de audiências de custódia, impetração de Habeas Corpus perante o Tribunal de Justiça de Minas Gerais (TJMG), Superior Tribunal de Justiça (STJ) e Supremo Tribunal Federal (STF). Atuamos com técnica apurada, agilidade e total sigilo para assegurar o respeito irrestrito às garantias constitucionais.",
    topics: [
      "Plantão Criminal 24 Horas: acompanhamento presencial em delegacias de polícia e unidades prisionais",
      "Audiência de Custódia: pedidos urgentes de liberdade provisória, arbitramento de fiança ou relaxamento de prisão ilegal",
      "Tribunal do Júri: defesa combativa e oratória estratégica em crimes dolosos contra a vida",
      "Impetração de Habeas Corpus com pedido liminar em casos de constrangimento ilegal e excesso de prazo",
      "Defesa em Inquéritos Policiais e Ações Penais por crimes contra o patrimônio, honra, trânsito e drogas",
      "Execução Penal: pedidos de progressão de regime (fechado, semiaberto, aberto), livramento condicional e remição de pena",
      "Crimes Econômicos, Empresariais e Defesa de Direitos Fundamentais em todas as instâncias judiciais",
    ],
    whatsAppText:
      "Olá, Dr. Ronaldo Giliard! Preciso de atendimento urgente na área Criminal (Delegacia, Custódia ou Processo Penal).",
  },
  {
    id: "direito-civel-indenizacoes",
    title: "Direito Cível, Contratos & Ações Indenizatórias",
    category: "Danos Morais e Materiais · Liminar SPC/Serasa · Fraudes Bancárias · Acidentes · Cobranças",
    icon: Scale,
    tag: "Reparação Integral · Celeridade Processual · Nome Limpo",
    summary:
      "Proteção firme do seu patrimônio e da sua honra. Ações de reparação por danos morais, exclusão liminar de restrições indevidas em cadastros de crédito e cobrança ágil de créditos inadimplidos.",
    details:
      "O Direito Cível é a espinha dorsal da convivência social e dos negócios. O Dr. Ronaldo Giliard atua com dinamismo para obter decisões liminares emergenciais que retirem inscrições indevidas no SPC/Serasa, revertam fraudes virtuais (como o golpe do Pix e empréstimos consignados fraudulentos) e garantam a integral reparação por prejuízos materiais, lucros cessantes e abalos morais decorrentes de acidentes, descumprimentos contratuais ou ofensas públicas.",
    topics: [
      "Ação com Pedido Liminar para Exclusão de Negativação Indevida no SPC, Serasa e Cartórios de Protesto",
      "Indenização por Danos Morais, Materiais e Estéticos com apuração técnica das perdas sofridas",
      "Fraudes Bancárias e Golpes Eletrônicos: anulação de contratos não solicitados e recuperação de valores",
      "Indenização por Acidentes de Trânsito: reparação de avarias no veículo, tratamento médico e lucros cessantes",
      "Ações de Cobrança e Execução Judicial de Títulos (cheques, notas promissórias, confissões de dívida e contratos)",
      "Ações de Despejo, Cobrança de Aluguéis e Conflitos Locatícios residenciais ou comerciais",
      "Direito Imobiliário: ações possessórias, usucapião, regularização de escrituras e rescisões de promessa de compra e venda",
    ],
    whatsAppText:
      "Olá, Dr. Ronaldo Giliard! Gostaria de consultar sobre Ação Cível / Indenização por Danos Morais / Nome Negativado.",
  },
  {
    id: "direito-de-familia-sucessoes",
    title: "Direito de Família & Sucessões (Cível)",
    category: "Divórcio Consensual em Cartório · Guarda & Convivência · Pensão Alimentícia · Inventário Extrajudicial",
    icon: Users,
    tag: "Atendimento Humanizado · Agilidade em Cartório · Resguardo Familiar",
    summary:
      "Soluções pacificadoras e ágeis para proteger quem você ama e organizar o patrimônio da família. Divórcios e inventários realizados em cartório com economia de tempo e custos.",
    details:
      "As questões de família e sucessões exigem equilíbrio emocional, empatia e extrema firmeza técnica. Priorizamos a via consensual para realizar divórcios e partilhas de herança diretamente em Cartório de Notas de maneira rápida e segura. Quando o litígio for indispensável, garantimos defesa intransigente do melhor interesse dos filhos menores, fixação correta de pensão alimentícia e justa partilha dos bens conquistados.",
    topics: [
      "Divórcio Consensual em Cartório de Notas: procedimento descomplicado, seguro e concluído em curto prazo",
      "Divórcio Litigioso: partilha justa de bens, busca de patrimônio oculto e blindagem dos direitos do cônjuge",
      "Pensão Alimentícia: pedido liminar de alimentos provisórios e execução de pensão em atraso (sob pena de prisão)",
      "Ação Revisional e Exoneração de Alimentos com base na alteração da capacidade contributiva",
      "Guarda Compartilhada e Regulamentação do Regime de Convivência e Visitas dos Filhos",
      "Inventário Extrajudicial em Cartório: partilha rápida de herança, redução de custos e desembaraço de bens",
      "Planejamento Sucessório Familiar: doações com cláusula de usufruto e testamentos públicos",
    ],
    whatsAppText:
      "Olá, Dr. Ronaldo Giliard! Gostaria de orientações sobre Divórcio, Guarda, Pensão ou Inventário em Cartório.",
  },
  {
    id: "consultoria-juridica-speed-process",
    title: "Consultoria Jurídica & 'Speed in the Process'",
    category: "Agilidade Comprovada · Diagnóstico Preventivo · Blindagem de Riscos · Resolução Ágil",
    icon: Zap,
    tag: "Speed in the Process · Alta Celeridade · Preço Justo",
    summary:
      "O diferencial que consagrou o Dr. Ronaldo Giliard perante 35 avaliações 5 estrelas no Google: rapidez nas diligências, atendimento resolutivo e sem protelações desnecessárias.",
    details:
      "Um dos elogios mais frequentes dos clientes atendidos em Campo Belo e região é a celeridade do trabalho: 'speed in the process'. O escritório combina tecnologia jurídica com presença constante nos fóruns e delegacias, assegurando que o processo não fique esquecido em gabinetes. Prestamos consultoria jurídica preventiva e contenciosa para antecipar soluções, evitar litígios custosos e conduzir negociações extrajudiciais com agilidade ímpar.",
    topics: [
      "Consultoria Jurídica Ágil com análise imediata de viabilidade processual e opções resolutivas",
      "Acompanhamento Diário de Prazos e Diligências Diretas junto a Varas Judiciais e Delegacias",
      "Elaboração e Revisão de Contratos de Compra e Venda, Locação e Prestação de Serviços",
      "Mediação e Negociação Extrajudicial de acordos com força de título executivo judicial",
      "Assessoria Preventiva para Pessoas Físicas e Empresas na minimização de passivos e litígios",
      "Atendimento transparente com prestação de contas detalhada a cada andamento processual",
    ],
    whatsAppText:
      "Olá, Dr. Ronaldo Giliard! Gostaria de uma Consultoria Jurídica ágil para resolver minha situação com rapidez.",
  },
  {
    id: "direito-do-consumidor-bancario",
    title: "Direito do Consumidor & Defesa Contra Abusos",
    category: "Bancos e Tarifas · Planos de Saúde · Atraso de Voos · Cobranças Indevidas · Produtos com Defeito",
    icon: Shield,
    tag: "Defesa do Consumidor · Medidas Urgentes · Devolução em Dobro",
    summary:
      "Defesa firme contra o poderio de bancos, grandes empresas de telefonia, companhias aéreas e fornecedores. Aplicação rigorosa do Código de Defesa do Consumidor.",
    details:
      "O consumidor não pode ser lesado por cobranças injustas ou práticas predatórias do mercado. O Dr. Ronaldo Giliard ingressa com ações judiciais objetivas para reparar danos causados por produtos com defeito não sanados, cobranças abusivas de tarifas bancárias com pedido de repetição de indébito em dobro, cancelamentos injustificados de voos com extravio de bagagem e negativas ilegais de exames e cirurgias por planos de saúde.",
    topics: [
      "Cobranças Abusivas e Tarifas Bancárias Não Contratadas com pedido de devolução em dobro",
      "Ações contra Planos de Saúde: pedidos liminares para liberação imediata de cirurgias, tratamentos e remédios",
      "Direito Aéreo: indenização por cancelamento injustificado de voo, atrasos excessivos e extravio de bagagem",
      "Veículos com Defeito e Produtos com Vício oculto não solucionados no prazo legal de 30 dias",
      "Cancelamento de Compras Fraudulentas e combate a cláusulas contratuais abusivas",
    ],
    whatsAppText:
      "Olá, Dr. Ronaldo! Preciso de assessoria jurídica em uma causa de Direito do Consumidor / Abuso Bancário.",
  },
  {
    id: "direito-imobiliario-regularizacao",
    title: "Direito Imobiliário & Regularização de Imóveis",
    category: "Contratos de Compra e Venda · Usucapião Judicial e em Cartório · Despejo · Reintegração de Posse",
    icon: Building2,
    tag: "Segurança Imobiliária · Usucapião Extrajudicial · Proteção de Bens",
    summary:
      "Segurança jurídica na compra, venda, locação e regularização de imóveis urbanos e rurais em Campo Belo e toda a região mineira.",
    details:
      "A aquisição ou posse de um imóvel representa o patrimônio de uma vida inteira. Prestamos assessoria completa em transações imobiliárias para evitar surpresas com penhoras, dívidas fiscais ou irregularidades de matrícula. Conduzimos ações de usucapião judicial e extrajudicial (em cartório), defesas de posse e despejos por inadimplência com total rigor probatório.",
    topics: [
      "Elaboração e Due Diligence completa em Contratos de Compra e Venda de Imóveis urbanos e fazendas",
      "Ações de Usucapião Extrajudicial (em Cartório de Registro de Imóveis) e Usucapião Judicial",
      "Ações Possessórias: Reintegração de Posse, Manutenção de Posse e Interdito Proibitório",
      "Ações de Despejo e Cobrança de Aluguéis e encargos condominiais em atraso",
      "Retificação de Área, desmembramento e unificação de matrículas imobiliárias",
    ],
    whatsAppText:
      "Olá, Dr. Ronaldo Giliard! Gostaria de consultar sobre Regularização de Imóvel, Usucapião ou Contrato Imobiliário.",
  },
];

interface Review {
  name: string;
  badge: string;
  date: string;
  category:
    | "Rapidez & Eficácia (speed in the process)"
    | "Competência & Técnica"
    | "Atendimento & Clareza"
    | "Ética & Preço Justo"
    | "Melhor da Região";
  highlight: string;
  content: string;
  ownerReply?: string;
  ownerDate?: string;
}

const clientReviews: Review[] = [
  {
    name: "Luisa Montserrat",
    badge: "12 avaliações · 6 fotos · 5 Estrelas",
    date: "4 anos atrás",
    category: "Ética & Preço Justo",
    highlight: "Profissional sério e competente, resolveu meus problemas com rapidez e cobrou um preço justo. Indico muito seus serviços.",
    content: "Profissional sério e competente, resolveu meus problemas com rapidez e cobrou um preço justo. Indico muito seus serviços.",
    ownerReply: "Muito obrigado Luisa, sempre a disposição.",
    ownerDate: "4 anos atrás",
  },
  {
    name: "Paulo Ferreira",
    badge: "3 avaliações · 5 Estrelas",
    date: "4 anos atrás",
    category: "Rapidez & Eficácia (speed in the process)",
    highlight: "Excelente Advogado, rápido em resolver qualquer situação. O Melhor da cidade com certeza!!!",
    content: "Excelente Advogado, rápido em resolver qualquer situação. O Melhor da cidade com certeza!!!",
    ownerReply: "Grato pela avaliação. Obrigado pela confiança.",
    ownerDate: "4 anos atrás",
  },
  {
    name: "Nayara Gomes",
    badge: "1 avaliação · 5 Estrelas",
    date: "4 anos atrás",
    category: "Atendimento & Clareza",
    highlight: "Ótimo atendimento, nos deu toda atenção que precisávamos, sempre esclarecendo as dúvidas e resolvendo da melhor forma possível.",
    content: "Ótimo atendimento, nos deu toda atenção que precisávamos, sempre esclarecendo as dúvidas e resolvendo da melhor forma possível.",
  },
  {
    name: "Arthur Cruz",
    badge: "4 avaliações · 5 Estrelas",
    date: "2 anos atrás",
    category: "Rapidez & Eficácia (speed in the process)",
    highlight: "Excelente Profissional, agilizou meu processo.",
    content: "Excelente Profissional, agilizou meu processo.",
  },
  {
    name: "Lucas Marques",
    badge: "Local Guide · 5 avaliações · 2 fotos · 5 Estrelas",
    date: "3 anos atrás",
    category: "Competência & Técnica",
    highlight: "Excelente profissional, sempre disposto a fazer o melhor pelos seus clientes!",
    content: "Excelente profissional, sempre disposto a fazer o melhor pelos seus clientes!",
  },
  {
    name: "Raul Vitor",
    badge: "1 avaliação · 5 Estrelas",
    date: "3 anos atrás",
    category: "Melhor da Região",
    highlight: "Ótimo advogado! Atendimento perfeito, melhor da região, indico a todos.",
    content: "Ótimo advogado! Atendimento perfeito , melhor da região,indico a todos .",
    ownerReply: "Obrigado!",
    ownerDate: "3 anos atrás",
  },
  {
    name: "Áttila Laudares",
    badge: "Local Guide · 19 avaliações · 3 fotos · 5 Estrelas",
    date: "4 anos atrás",
    category: "Competência & Técnica",
    highlight: "Profissional gabaritado com atendimento diferenciado! Recomendo!",
    content: "Profissional gabaritado com atendimento diferenciado!Recomendo!",
    ownerReply: "Grato pela avaliação. Obrigado pela confiança.",
    ownerDate: "4 anos atrás",
  },
  {
    name: "Bruno Araujo",
    badge: "1 avaliação · 5 Estrelas",
    date: "4 anos atrás",
    category: "Ética & Preço Justo",
    highlight: "Ótimo profissional, íntegro.",
    content: "Ótimo profissional, íntegro.",
    ownerReply: "Grato pela avaliação. Obrigado pela confiança.",
    ownerDate: "4 anos atrás",
  },
  {
    name: "Gabriel Cantanhede",
    badge: "1 avaliação · 5 Estrelas",
    date: "3 anos atrás",
    category: "Melhor da Região",
    highlight: "Um dos melhores advogados de Campo Belo e região.",
    content: "Um dos melhores advogados de campo belo e região.",
  },
  {
    name: "Dra. Hellen Lima",
    badge: "3 avaliações · 5 Estrelas",
    date: "3 anos atrás",
    category: "Melhor da Região",
    highlight: "Melhor advogado de Campo Belo e região!",
    content: "Melhor advogado de Campo Belo e região!",
  },
  {
    name: "Rogerio Teixeira",
    badge: "2 avaliações · 5 Estrelas",
    date: "4 anos atrás",
    category: "Competência & Técnica",
    highlight: "Excelente! Dos melhores que possa ter, está de Parabéns...",
    content: "Excelente! Dos melhores que possa ter, está de Parabéns...",
    ownerReply: "Obrigado meu amigo",
    ownerDate: "4 anos atrás",
  },
  {
    name: "Cassiano Rodrigues Mota",
    badge: "1 avaliação · 5 Estrelas",
    date: "4 anos atrás",
    category: "Atendimento & Clareza",
    highlight: "Excelente atendimento!",
    content: "Excelente atendimento!",
    ownerReply: "Muito obrigado pela avaliação. Sempre a disposição.",
    ownerDate: "4 anos atrás",
  },
  {
    name: "João Paulo Feliciano",
    badge: "1 avaliação · 5 Estrelas",
    date: "4 anos atrás",
    category: "Melhor da Região",
    highlight: "Melhor da região!",
    content: "Melhor de região",
    ownerReply: "Muito obrigado pela confiança!",
    ownerDate: "4 anos atrás",
  },
  {
    name: "Denilson Martins",
    badge: "1 avaliação · 1 foto · 5 Estrelas",
    date: "4 anos atrás",
    category: "Atendimento & Clareza",
    highlight: "Excelente atendimento!",
    content: "Excelente atendimento",
    ownerReply: "Grato pela avaliação. Obrigado pela confiança.",
    ownerDate: "4 anos atrás",
  },
  {
    name: "Fabio Júnior",
    badge: "1 avaliação · 5 Estrelas",
    date: "4 anos atrás",
    category: "Atendimento & Clareza",
    highlight: "Melhor advogado. Sempre prestativo!",
    content: "Melhor advogado. Sempre prestativo",
    ownerReply: "Obrigado",
    ownerDate: "4 anos atrás",
  },
  {
    name: "israel israel",
    badge: "1 avaliação · 5 Estrelas",
    date: "4 anos atrás",
    category: "Melhor da Região",
    highlight: "Melhor da Região!",
    content: "Melhor da Região",
    ownerReply: "Muito obrigado pela avaliação. Sempre a disposição.",
    ownerDate: "4 anos atrás",
  },
  {
    name: "Lucas Freitas",
    badge: "2 avaliações · 5 Estrelas",
    date: "4 anos atrás",
    category: "Competência & Técnica",
    highlight: "Profissional excelente!!",
    content: "Profissional excelente!!",
    ownerReply: "Obrigado amigo!",
    ownerDate: "4 anos atrás",
  },
  {
    name: "Marcelo Timao",
    badge: "1 avaliação · 5 Estrelas",
    date: "4 anos atrás",
    category: "Competência & Técnica",
    highlight: "Muito bem assessorado.",
    content: "Muito bem assessorado.",
    ownerReply: "Muito obrigado pela confiança!",
    ownerDate: "4 anos atrás",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "Como funciona o atendimento de plantão criminal 24h para prisões em flagrante e delegacia?",
    answer:
      "Em casos de prisão em flagrante, busca e apreensão, intimação urgente ou realização de audiência de custódia, o Dr. Ronaldo Giliard mantém canal de plantão ininterrupto pelo WhatsApp (35) 99745-8013. O contato imediato com o advogado criminalista é indispensável para garantir que o cidadão não produza provas contra si mesmo, tenha sua integridade física resguardada e possa requerer o relaxamento da prisão ilegal ou a liberdade provisória com a maior brevidade.",
  },
  {
    question: "O que significa o diferencial 'speed in the process' citado nas avaliações do Google?",
    answer:
      "A expressão 'speed in the process' (agilidade no processo) é um dos tópicos mais elogiados pelos clientes atendidos no escritório. Ela reflete a nossa postura combativa contra a lentidão burocrática: ajuizamento célere de ações, realização ágil de diligências nos cartórios e fóruns, cumprimento imediato de despachos judiciais e interlocução direta com juízes e promotores para que a sua causa não fique parada.",
  },
  {
    question: "Tive meu nome inscrito indevidamente no SPC/Serasa ou sofri golpe bancário. Quanto tempo demora?",
    answer:
      "A inscrição indevida nos cadastros de inadimplentes sem que você tenha contraído a dívida enseja pedido de Liminar de Urgência ('inaudita altera parte'). O juiz costuma apreciar esse pedido em poucos dias ou horas, determinando a exclusão do seu CPF sob pena de multa diária, cumulado com pedido indenizatório por danos morais presumidos ('in re ipsa').",
  },
  {
    question: "Como funciona o divórcio e o inventário em cartório? É mais rápido do que na Justiça?",
    answer:
      "Sim, consideravelmente mais rápido! Se houver consenso entre os herdeiros ou entre o casal e preenchidos os requisitos da lei (inexistência de testamento ou herdeiros incapazes), o ato é formalizado por Escritura Pública em Cartório de Notas na presença do Dr. Ronaldo Giliard. Um procedimento que na Justiça poderia levar anos é resolvido com tranquilidade em poucas semanas, com menores custos de emolumentos e impostos.",
  },
  {
    question: "O escritório atende apenas em Campo Belo ou também em outras cidades de Minas e do Brasil?",
    answer:
      "Nosso escritório físico está situado no coração de Campo Belo - MG (R. João Pinheiro, 356 - Centro), atendendo presencialmente clientes de Campo Belo, Candeias, Cristais, Santana do Jacaré, Aguanil, Perdões, Lavras, Formiga, Arcos e comarcas vizinhas. Além disso, por meio do processo eletrônico (PJe, Projudi e E-Proc), atuamos de forma 100% digital em todo o Estado de Minas Gerais e nos Tribunais Superiores em Brasília.",
  },
  {
    question: "Quais documentos preciso ter em mãos para a primeira consulta jurídica?",
    answer:
      "Para iniciar o atendimento com rapidez, basta ter em mãos seu documento oficial com foto (RG/CNH), comprovante de endereço recente e os documentos específicos da sua demanda (contratos, comprovantes de pagamento, fotos, cópia do boletim de ocorrência no caso criminal, extratos bancários ou certidões). Você pode enviar fotos nítidas ou arquivos PDF diretamente pelo WhatsApp.",
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
          dark ? "text-white" : "text-[#0b0f17]"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm leading-relaxed sm:text-base ${
            dark ? "text-slate-300" : "text-slate-600"
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
    "Rapidez & Eficácia (speed in the process)",
    "Competência & Técnica",
    "Atendimento & Clareza",
    "Ética & Preço Justo",
    "Melhor da Região",
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
      <main className="min-h-screen bg-[#f8fafc] text-[#0b0f17] selection:bg-[#1c2e4d] selection:text-[#ffffff]">
        {/* ======================================================== */}
        {/* TOP ANNOUNCEMENT BAR (OBSIDIAN NOIR & PLATINUM ACCENT)   */}
        {/* ======================================================== */}
        <div className="border-b border-[#1e293b] bg-[#0b0f17] py-2 text-xs text-slate-300">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-slate-300 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-white" />
              </span>
              <span className="text-[11px] sm:text-xs text-white font-semibold">
                RONALDO GILIARD ADVOCACIA · Cível & Criminal · OAB/MG 218.682 ⚖️
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-slate-300">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Star size={12} className="fill-[#f59e0b] text-[#f59e0b]" />
                <span className="font-bold text-white">5,0 ★</span> (35 avaliações no Google · Campo Belo - MG)
              </a>
              <span className="hidden h-3 w-px bg-slate-700 sm:inline-block" />
              <a
                href={getWhatsAppUrl("Olá, Dr. Ronaldo Giliard! Gostaria de consultar sobre o meu caso.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 font-semibold text-slate-200 transition-colors hover:text-white sm:inline-flex"
              >
                <WhatsAppIcon size={13} className="text-white" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* STICKY HEADER / NAVBAR (OFFICIAL RONALDO GILIARD LOGO)   */}
        {/* ======================================================== */}
        <header
          className={`sticky top-0 z-40 w-full transition-all duration-300 ${
            scrolled
              ? "border-b border-slate-200/90 bg-white/95 py-2.5 shadow-md backdrop-blur-md"
              : "border-b border-slate-200/60 bg-white/90 py-3.5 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            {/* Left: Official Ronaldo Giliard Logo (with cache-busting) */}
            <a
              href="#"
              className="group flex shrink-0 items-center transition-opacity hover:opacity-90"
              aria-label="Ronaldo Giliard Advocacia - Início"
            >
              <Image
                src={LOGO_SRC}
                alt="Ronaldo Giliard Advocacia e Consultoria Jurídica — OAB/MG 218.682"
                width={480}
                height={240}
                className="h-[56px] sm:h-[66px] md:h-[72px] w-auto object-contain"
                priority
                unoptimized
              />
            </a>

            {/* Center: Desktop Navigation */}
            <nav className="hidden items-center gap-5 xl:gap-7 xl:flex">
              <a href="#servicos" className="nav-link text-[11px] whitespace-nowrap">
                Áreas de Atuação
              </a>
              <a href="#sobre" className="nav-link text-[11px] whitespace-nowrap">
                Sobre Dr. Ronaldo Giliard
              </a>
              <a href="#diferenciais" className="nav-link text-[11px] whitespace-nowrap">
                Speed in the Process
              </a>
              <a href="#depoimentos" className="nav-link text-[11px] whitespace-nowrap">
                Avaliações Google (5,0 ★)
              </a>
              <a href="#duvidas" className="nav-link text-[11px] whitespace-nowrap">
                Dúvidas Frequentes
              </a>
              <a href="#contato" className="nav-link text-[11px] whitespace-nowrap">
                Sede & Contato
              </a>
            </nav>

            {/* Right Action: WhatsApp CTA (Oxford Navy matching Dr. Ronaldo's tie) */}
            <div className="flex shrink-0 items-center gap-3">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dr. Ronaldo Giliard! Gostaria de agendar uma consulta sobre o meu caso.")}
                target="_blank"
                variant="navy"
                size="sm"
                className="hidden sm:inline-flex whitespace-nowrap"
              >
                <WhatsAppIcon size={14} className="text-white" />
                <span className="hidden 2xl:inline">Falar com Dr. Ronaldo</span>
                <span className="2xl:hidden">WhatsApp</span>
              </GlowingButton>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-800 transition-colors hover:border-[#1c2e4d] hover:text-[#141f33] xl:hidden cursor-pointer"
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
                className="border-b border-slate-200 bg-white px-5 py-6 xl:hidden shadow-lg"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center pb-3 border-b border-slate-100">
                    <Image
                      src={LOGO_SRC}
                      alt="Ronaldo Giliard Advocacia"
                      width={360}
                      height={180}
                      className="h-[52px] w-auto object-contain"
                      priority
                      unoptimized
                    />
                  </div>
                  <a
                    href="#servicos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#141f33]"
                  >
                    <span>Áreas de Atuação (Cível & Criminal)</span>
                    <ArrowRight size={14} className="text-[#1c2e4d]" />
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#141f33]"
                  >
                    <span>Sobre Dr. Ronaldo Giliard</span>
                    <ArrowRight size={14} className="text-[#1c2e4d]" />
                  </a>
                  <a
                    href="#diferenciais"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#141f33]"
                  >
                    <span>Speed in the Process (Agilidade)</span>
                    <ArrowRight size={14} className="text-[#1c2e4d]" />
                  </a>
                  <a
                    href="#depoimentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#141f33]"
                  >
                    <span>Avaliações no Google (35 Avaliações · 5,0 ★)</span>
                    <ArrowRight size={14} className="text-[#1c2e4d]" />
                  </a>
                  <a
                    href="#duvidas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#141f33]"
                  >
                    <span>Dúvidas Frequentes</span>
                    <ArrowRight size={14} className="text-[#1c2e4d]" />
                  </a>
                  <a
                    href="#contato"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#141f33]"
                  >
                    <span>Sede em Campo Belo - MG</span>
                    <ArrowRight size={14} className="text-[#1c2e4d]" />
                  </a>

                  <div className="pt-2">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dr. Ronaldo Giliard! Gostaria de tirar dúvidas sobre meu caso pelo WhatsApp.")}
                      target="_blank"
                      variant="navy"
                      size="md"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Fale com o Dr. Ronaldo no WhatsApp</span>
                    </GlowingButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* ======================================================== */}
        {/* DOBRA 1: HERO SECTION — COM FOTO DO DR. RONALDO GILIARD  */}
        {/* ======================================================== */}
        <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-22 lg:pt-18 lg:pb-26 bg-[#f8fafc]">
          {/* Subtle Ambient Light Platinum & Tie Blue Glow */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[950px] -translate-x-1/2 rounded-full bg-radial from-slate-200/40 via-[#1c2e4d]/5 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -right-40 -z-10 h-80 w-80 rounded-full bg-[#1c2e4d]/10 blur-3xl" />

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
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-[#141f33] shadow-xs">
                    <span className="size-1.5 rounded-full bg-[#1c2e4d] animate-pulse" />
                    RONALDO GILIARD ADVOCACIA · CAMPO BELO - MG · OAB/MG 218.682
                  </span>
                </motion.div>

                {/* H1 Headline */}
                <motion.h1
                  variants={reveal}
                  className="font-serif text-3xl leading-[1.16] font-bold tracking-tight text-[#0b0f17] sm:text-5xl lg:text-[3.25rem]"
                >
                  Defesa Combativa e Alta Agilidade nas Áreas{" "}
                  <span className="bg-gradient-to-r from-[#141f33] via-[#1c2e4d] to-[#263e68] bg-clip-text text-transparent">
                    Cível e Criminal.
                  </span>
                </motion.h1>

                {/* Subtitle / Value Proposition */}
                <motion.p
                  variants={reveal}
                  className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg lg:max-w-xl"
                >
                  Advocacia de excelência liderada pelo{" "}
                  <strong className="font-semibold text-slate-900">Dr. Ronaldo Giliard</strong>, Bacharel em Direito pela{" "}
                  <span className="text-slate-800 font-medium">PUC Minas Arcos</span> e inscrito na{" "}
                  <strong className="font-semibold text-slate-900">OAB/MG 218.682</strong>. Reconhecido pela nota máxima de{" "}
                  <strong className="font-semibold text-slate-900">5,0 estrelas no Google</strong> por sua velocidade em resolver problemas (&quot;speed in the process&quot;), ética exemplar e atendimento próximo.
                </motion.p>

                {/* Quick Highlights Pills */}
                <motion.div
                  variants={reveal}
                  className="mt-6 flex flex-wrap gap-2.5 sm:gap-3"
                >
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200/80 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#1c2e4d]" />
                    Plantão Criminal 24h & Flagrante
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200/80 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#1c2e4d]" />
                    Danos Morais & Negativação Indevida
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200/80 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#1c2e4d]" />
                    Divórcio & Inventário em Cartório
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200/80 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#1c2e4d]" />
                    Speed in the Process (Rapidez Comprovada)
                  </span>
                </motion.div>

                {/* Action CTAs (Oxford Navy matching tie) */}
                <motion.div
                  variants={reveal}
                  className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
                >
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dr. Ronaldo Giliard! Gostaria de agendar uma consulta jurídica especializada sobre meu caso.")}
                    target="_blank"
                    variant="navy"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Fale com o Dr. Ronaldo no WhatsApp</span>
                  </GlowingButton>

                  <GlowingButton
                    href="#servicos"
                    variant="light"
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
                  className="mt-10 flex items-center gap-4 rounded-xl border border-slate-200/80 bg-white/95 p-3.5 shadow-xs backdrop-blur-xs max-w-lg"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#0b0f17] text-white">
                    <GoogleIcon size={20} />
                  </div>
                  <div className="text-xs">
                    <div className="flex items-center gap-1 text-[#f59e0b]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-[#f59e0b]" />
                      ))}
                      <span className="ml-1.5 font-bold text-slate-900">
                        5,0 / 5,0 no Google
                      </span>
                    </div>
                    <p className="mt-0.5 text-slate-600">
                      Classificação máxima com <strong className="font-semibold text-slate-900">35 avaliações 5 estrelas</strong> em Campo Belo - MG e toda a região.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column: Hero Photo of Dr. Ronaldo Giliard */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="lg:col-span-5"
              >
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Outer Frame with Metallic Platinum Rim Accent */}
                  <div className="group relative overflow-hidden rounded-2xl border-2 border-slate-300 bg-gradient-to-b from-[#1c2e4d] to-[#0b0f17] p-2 shadow-2xl shadow-slate-900/20 transition-all duration-300 hover:border-[#263e68]">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#0b0f17]">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dr. Ronaldo Giliard — Ronaldo Giliard Advocacia Campo Belo MG"
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-102"
                        priority
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                      />

                      {/* Subtle Bottom Vignette */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06090e]/85 via-transparent to-transparent" />

                      {/* Floating Badge on Photo: Dr. Ronaldo Giliard */}
                      <div className="absolute right-3.5 bottom-3.5 left-3.5 rounded-xl border border-white/20 bg-[#0b0f17]/92 p-3.5 text-white shadow-xl backdrop-blur-md">
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <p className="font-serif text-sm font-bold tracking-wide text-white">
                              Dr. Ronaldo Giliard
                            </p>
                            <p className="text-[11px] font-medium text-slate-300">
                              OAB/MG 218.682 · Bacharel PUC Minas Arcos
                            </p>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <a
                              href={INSTAGRAM_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex size-8 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
                              aria-label="Instagram do Dr. Ronaldo Giliard"
                              title="@giliardadv"
                            >
                              <InstagramIcon size={16} />
                            </a>
                            <a
                              href={GOOGLE_SEARCH_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex size-8 items-center justify-center rounded-lg bg-white/10 text-slate-200 transition-colors hover:bg-white/20"
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
                  <div className="absolute -top-4 -right-4 hidden rounded-xl border border-slate-200/90 bg-white p-3 shadow-lg sm:flex items-center gap-2.5">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-[#141f33] text-white">
                      <Landmark size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-900">R. João Pinheiro, 356</p>
                      <p className="text-[10px] text-slate-500">Campo Belo · MG</p>
                    </div>
                  </div>

                  {/* Floating Trust Card Badge (Bottom Left - Navy styled) */}
                  <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-slate-200/90 bg-white p-3 shadow-lg sm:flex items-center gap-2.5">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-[#1c2e4d]/10 text-[#1c2e4d]">
                      <WhatsAppIcon size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-900">Plantão e WhatsApp</p>
                      <p className="text-[10px] text-slate-500">{PHONE_DISPLAY}</p>
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
        <section className="border-y border-[#1e293b] bg-[#0b0f17] py-9 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
              {/* Stat 1 */}
              <div className="flex flex-col border-l-2 border-[#263e68] pl-4 sm:pl-5">
                <div className="flex items-center gap-1 text-[#f59e0b]">
                  <Star size={16} className="fill-[#f59e0b]" />
                  <span className="font-serif text-2xl font-bold text-white sm:text-3xl">
                    5,0 ★
                  </span>
                </div>
                <p className="mt-1 text-xs font-bold tracking-wider text-slate-200 uppercase">
                  35 Avaliações no Google
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  100% de satisfação em Campo Belo - MG
                </p>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col border-l-2 border-[#263e68] pl-4 sm:pl-5">
                <span className="font-serif text-2xl font-bold text-white sm:text-3xl">
                  Criminal
                </span>
                <p className="mt-1 text-xs font-bold tracking-wider text-slate-200 uppercase">
                  Plantão 24 Horas
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  Delegacia, custódia, júri e liberdade provisória
                </p>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col border-l-2 border-[#263e68] pl-4 sm:pl-5">
                <span className="font-serif text-2xl font-bold text-white sm:text-3xl">
                  Cível
                </span>
                <p className="mt-1 text-xs font-bold tracking-wider text-slate-200 uppercase">
                  Indenizações & Contratos
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  Danos morais, consumidor, família e cartório
                </p>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col border-l-2 border-[#263e68] pl-4 sm:pl-5">
                <span className="font-serif text-2xl font-bold text-white sm:text-3xl">
                  PUC Minas
                </span>
                <p className="mt-1 text-xs font-bold tracking-wider text-slate-200 uppercase">
                  Formação de Excelência
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  Arcos-MG · OAB/MG 218.682
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 3: ÁREAS DE ATUAÇÃO (SERVIÇOS COM MODAL DETALHADO)  */}
        {/* ======================================================== */}
        <section id="servicos" className="py-20 sm:py-26 bg-[#f8fafc]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12">
              <Heading
                eyebrow="Áreas de Atuação Especializada"
                description="Soluções jurídicas combativas focadas nas áreas Cível e Criminal, com rigor técnico, atendimento ágil e defesa intransigente dos seus direitos. Clique em qualquer área para ver os procedimentos detalhados."
              >
                Defesa Técnica e Resolutiva Para Você, Sua Liberdade e Seu Patrimônio
              </Heading>

              <div className="shrink-0">
                <GlowingButton
                  href={getWhatsAppUrl("Olá, Dr. Ronaldo Giliard! Gostaria de consultar sobre a viabilidade do meu caso.")}
                  target="_blank"
                  variant="navy"
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
                    className="group relative flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:border-[#1c2e4d] hover:shadow-lg cursor-pointer"
                  >
                    <div>
                      {/* Top Bar: Icon + Category Tag */}
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#141f33] text-white shadow-xs transition-colors group-hover:bg-[#1c2e4d]">
                          <IconComponent size={22} />
                        </div>
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-700">
                          {area.tag.split("·")[0].trim()}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-xl font-bold tracking-tight text-[#0b0f17] group-hover:text-[#1c2e4d] transition-colors">
                        {area.title}
                      </h3>

                      {/* Sub-category tags */}
                      <p className="mt-2 text-xs font-medium text-slate-500 leading-relaxed">
                        {area.category}
                      </p>

                      {/* Summary */}
                      <p className="mt-4 text-sm leading-relaxed text-slate-600">
                        {area.summary}
                      </p>
                    </div>

                    {/* Bottom CTA trigger */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#141f33]">
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
                className="absolute inset-0 bg-[#06090e]/80 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedPractice(null)}
                  className="absolute top-5 right-5 inline-flex size-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 cursor-pointer"
                  aria-label="Fechar modal"
                >
                  <X size={18} />
                </button>

                {/* Modal Header */}
                <div className="pr-10">
                  <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                    {selectedPractice.tag}
                  </span>
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-[#0b0f17] sm:text-3xl mt-3">
                    {selectedPractice.title}
                  </h3>
                  <p className="mt-2 text-xs font-medium text-slate-500">
                    {selectedPractice.category}
                  </p>
                </div>

                {/* Description */}
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-5">
                  <p>{selectedPractice.details}</p>
                </div>

                {/* Topics / Bullet Points */}
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                    Principais Procedimentos & Medidas Judiciais
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedPractice.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                        <CheckCircle2 size={15} className="text-[#1c2e4d] shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal Footer CTA */}
                <div className="mt-8 border-t border-slate-100 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-500">
                    Atendimento presencial em Campo Belo - MG ou digital seguro.
                  </span>
                  <GlowingButton
                    href={getWhatsAppUrl(selectedPractice.whatsAppText)}
                    target="_blank"
                    variant="navy"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Consultar Dr. Ronaldo</span>
                  </GlowingButton>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ======================================================== */}
        {/* DOBRA 4: SOBRE O ADVOGADO DR. RONALDO GILIARD            */}
        {/* ======================================================== */}
        <section id="sobre" className="py-20 sm:py-26 border-t border-slate-200 bg-[#f1f5f9]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Photo Column */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="relative overflow-hidden rounded-2xl border-2 border-slate-300 bg-[#0b0f17] p-2 shadow-xl shadow-slate-300">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#0f172a]">
                      <Image
                        src={FOTO_PORTRAIT_SRC}
                        alt="Dr. Ronaldo Giliard — Ronaldo Giliard Advocacia e Consultoria Jurídica"
                        fill
                        className="object-cover object-top"
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 420px"
                      />
                    </div>
                  </div>

                  {/* Decorative Badge */}
                  <div className="absolute -bottom-5 -right-5 hidden sm:block rounded-xl border border-slate-700 bg-[#0b0f17] p-4 text-white shadow-xl max-w-xs">
                    <p className="text-[11px] font-bold text-slate-200 uppercase tracking-wider">
                      Ronaldo Giliard Advocacia
                    </p>
                    <p className="mt-1 text-xs text-slate-300 leading-snug">
                      &quot;Cível e Criminal com combatividade, ética irrestrita e rapidez comprovada na solução dos processos.&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-7">
                <Heading
                  eyebrow="Sobre o Profissional & Trajetória"
                  description="Com atuação ética, combativa e reconhecida celeridade, o Dr. Ronaldo Giliard consolidou-se como um dos advogados mais bem avaliados de Campo Belo e de todo o Centro-Oeste / Sul de Minas."
                >
                  Dr. Ronaldo Giliard: Rigor Técnico, Agilidade e Defesa Intransigente
                </Heading>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                  <p>
                    O <strong className="font-semibold text-slate-900">Dr. Ronaldo Giliard · OAB/MG 218.682</strong> é graduado em Direito pela conceituada <strong className="font-semibold text-slate-900">PUC Minas (Arcos - MG)</strong>, aliando sólida base acadêmica à prática forense combativa no Direito Cível, Criminal e Consultoria Jurídica.
                  </p>
                  <p>
                    Sua atuação é marcada pelo compromisso inegociável com a liberdade e o patrimônio de cada constituinte. O Dr. Ronaldo atua pessoalmente em cada fase processual, acompanhando desde diligências de emergência em delegacias até sustentações perante os Tribunais de Justiça.
                  </p>
                  <p>
                    O principal traço destacado pelos clientes é a <strong className="font-semibold text-slate-900">rapidez na resolução das causas (&quot;speed in the process&quot;)</strong>, a clareza nas orientações e a condução honesta com preço justo — atributos que se traduzem na nota máxima unânime de <strong className="font-semibold text-slate-900">5,0 estrelas no Google em 35 avaliações</strong>.
                  </p>
                  <p>
                    Com escritório próprio estabelecido na <strong className="font-semibold text-slate-900">R. João Pinheiro, 356 (Centro de Campo Belo - MG)</strong> e atendimento digital seguro para todo o território nacional, assegura aos seus clientes tranquilidade, suporte contínuo e defesa técnica de primeira grandeza.
                  </p>
                </div>

                {/* Key Points */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3.5 shadow-2xs">
                    <Gavel size={18} className="text-[#1c2e4d] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase">Cível & Criminal</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Defesa penal especializada, plantão em delegacia e causas cíveis indenizatórias.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3.5 shadow-2xs">
                    <Zap size={18} className="text-[#1c2e4d] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase">⚡ Speed in the Process</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Agilidade real na tramitação, diligências frequentes e foco em resultados sem demora.</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 pt-4 flex flex-col sm:flex-row gap-3.5 items-center">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dr. Ronaldo Giliard! Gostaria de conversar diretamente sobre a minha demanda.")}
                    target="_blank"
                    variant="navy"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Falar com o Dr. Ronaldo no WhatsApp</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#141f33] transition-colors"
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
        <section id="diferenciais" className="py-20 sm:py-26 bg-[#0b0f17] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Heading
              eyebrow="Nossos Diferenciais"
              description="Os pilares que sustentam a autoridade, a reputação 5 estrelas e os resultados expressivos alcançados por Ronaldo Giliard Advocacia."
              dark
            >
              Os 4 Pilares de Ronaldo Giliard Advocacia
            </Heading>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Pillar 1 */}
              <div className="rounded-xl border border-[#1e293b] bg-[#141e33]/80 p-6 transition-all duration-300 hover:border-[#263e68] hover:bg-[#141e33]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#1e293b] text-white">
                  <Zap size={24} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  1. Speed in the Process (Celeridade)
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                  Agilidade e presteza nos andamentos judiciais. Diligências constantes perante cartórios e juizados para assegurar a resolução mais rápida possível.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="rounded-xl border border-[#1e293b] bg-[#141e33]/80 p-6 transition-all duration-300 hover:border-[#263e68] hover:bg-[#141e33]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#1e293b] text-white">
                  <Siren size={24} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  2. Plantão Criminal 24h & Combatividade
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                  Prontidão técnica para atender urgências penais, delegacias e flagrantes a qualquer hora do dia ou da noite, defendendo a liberdade sem hesitação.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="rounded-xl border border-[#1e293b] bg-[#141e33]/80 p-6 transition-all duration-300 hover:border-[#263e68] hover:bg-[#141e33]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#1e293b] text-white">
                  <Shield size={24} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  3. Integridade, Ética & Preço Justo
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                  Transparência total nos honorários e na avaliação de riscos. Honestidade comprovada pelos depoimentos de clientes que confiam no trabalho.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="rounded-xl border border-[#1e293b] bg-[#141e33]/80 p-6 transition-all duration-300 hover:border-[#263e68] hover:bg-[#141e33]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#1e293b] text-white">
                  <Landmark size={24} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  4. Sede em Campo Belo & Digital Nacional
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                  Escritório presencial na R. João Pinheiro, 356 (Centro) e moderna estrutura de atendimento virtual para clientes em todo o território nacional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 6: PROVA SOCIAL & DEPOIMENTOS REAIS GOOGLE 5,0 ★   */}
        {/* ======================================================== */}
        <section id="depoimentos" className="py-20 sm:py-26 bg-[#f8fafc]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6">
              <Heading
                eyebrow="Prova Social Verificada"
                description="Confira avaliações 100% autênticas e espontâneas de clientes atendidos por Ronaldo Giliard Advocacia e Consultoria Jurídica no Google Meu Negócio."
              >
                Avaliações com Nota Máxima de 5,0 ★ no Google em Campo Belo · MG
              </Heading>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 shadow-xs hover:border-[#1c2e4d] hover:text-[#141f33] transition-colors"
                >
                  <GoogleIcon size={16} />
                  <span>Ver perfil no Google Meu Negócio</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Google Badges Extracted directly from Google Reviews Keywords */}
            <div className="flex flex-wrap gap-2 pb-8 border-b border-slate-200">
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
                      ? "bg-[#141f33] text-white shadow-xs"
                      : "bg-white border border-slate-200 text-slate-600 hover:border-[#1c2e4d] hover:text-[#141f33]"
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
                  className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all hover:border-[#1c2e4d] hover:shadow-md"
                >
                  <div>
                    {/* Header: Name, Stars, Date */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-sm text-[#0b0f17]">
                            {rev.name}
                          </h4>
                          <span className="size-1 rounded-full bg-slate-300" />
                          <span className="text-[10px] text-slate-400 font-medium">
                            {rev.date}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">
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
                    <p className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                      &quot;{rev.content}&quot;
                    </p>
                  </div>

                  {/* Owner Reply if available */}
                  {rev.ownerReply && (
                    <div className="mt-4 pt-3.5 border-t border-slate-100 rounded-lg bg-slate-50 p-3">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-800">
                        <BadgeCheck size={13} className="text-[#1c2e4d]" />
                        <span>Resposta do Dr. Ronaldo Giliard (proprietário):</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                        &quot;{rev.ownerReply}&quot;
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              {filteredReviews.length > 6 && (
                <button
                  type="button"
                  onClick={() => setShowAllReviews(!showAllReviews)}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-50 hover:border-[#1c2e4d] transition-colors cursor-pointer"
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
                variant="light"
                size="md"
              >
                <GoogleIcon size={15} />
                <span>Ver Todas as 35 Avaliações no Google</span>
                <ExternalLink size={13} />
              </GlowingButton>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 7: PASSO A PASSO DO ATENDIMENTO                    */}
        {/* ======================================================== */}
        <section className="border-t border-slate-200 py-20 sm:py-26 bg-[#f1f5f9]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Heading
              eyebrow="Como Funciona"
              description="Um processo transparente, ágil e descomplicado desde o primeiro contato pelo WhatsApp até a solução definitiva da sua causa."
            >
              Seu Atendimento Jurídico em 4 Passos Simples
            </Heading>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Step 1 */}
              <div className="relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
                <span className="font-serif text-3xl font-black text-slate-300">
                  01
                </span>
                <h3 className="mt-2 font-serif text-base font-bold text-slate-900">
                  Contato & Sigilo
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Você envia uma mensagem pelo nosso WhatsApp oficial relatando sua situação cível ou criminal com confidencialidade absoluta.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
                <span className="font-serif text-3xl font-black text-slate-300">
                  02
                </span>
                <h3 className="mt-2 font-serif text-base font-bold text-slate-900">
                  Diagnóstico Técnico
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  O Dr. Ronaldo Giliard analisa os documentos e esclarece suas opções jurídicas com franqueza, informando chances, riscos e prazos reais.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
                <span className="font-serif text-3xl font-black text-slate-300">
                  03
                </span>
                <h3 className="mt-2 font-serif text-base font-bold text-slate-900">
                  Ação Célere & Protocolo
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Assinatura prática pelo celular ou presencialmente em Campo Belo, com protocolo imediato na Justiça ou diligência em delegacia.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
                <span className="font-serif text-3xl font-black text-slate-300">
                  04
                </span>
                <h3 className="mt-2 font-serif text-base font-bold text-slate-900">
                  Acompanhamento Transparente
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Você é informado a cada movimentação e decisão, acompanhando o recebimento de valores, alvarás ou expedição de contramandados.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dr. Ronaldo Giliard! Gostaria de dar o primeiro passo e tirar dúvidas sobre meu caso.")}
                target="_blank"
                variant="navy"
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
        <section id="duvidas" className="py-20 sm:py-26 bg-[#f8fafc]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Heading
                eyebrow="Tire Suas Dúvidas"
                description="Respostas diretas e esclarecedoras para as principais questões sobre defesa penal, causas cíveis, danos morais e direito de família."
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
                    className="overflow-hidden rounded-xl border border-slate-200/90 bg-white transition-all shadow-xs"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-[#0b0f17] transition-colors hover:text-[#1c2e4d] cursor-pointer"
                    >
                      <span className="pr-4">{item.question}</span>
                      {isOpen ? (
                        <ChevronUp size={18} className="shrink-0 text-[#1c2e4d]" />
                      ) : (
                        <ChevronDown size={18} className="shrink-0 text-slate-400" />
                      )}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100"
                        >
                          {item.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-xl border border-slate-300 bg-white p-6 text-center shadow-xs">
              <p className="text-sm font-bold text-slate-900">
                Tem uma dúvida específica sobre a sua situação?
              </p>
              <p className="mt-1 text-xs text-slate-600">
                O Dr. Ronaldo Giliard está disponível para responder diretamente no WhatsApp.
              </p>
              <div className="mt-4">
                <GlowingButton
                  href={getWhatsAppUrl("Olá, Dr. Ronaldo! Gostaria de tirar uma dúvida pontual sobre o meu caso.")}
                  target="_blank"
                  variant="navy"
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
        <section id="contato" className="py-20 sm:py-26 bg-[#0b0f17] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Contact Info Column */}
              <div className="lg:col-span-6">
                <Heading
                  eyebrow="Onde Estamos & Contato"
                  description="Venha nos visitar em nossa sede em Campo Belo - MG ou converse agora mesmo pelo canal oficial de atendimento online."
                  dark
                >
                  Estamos Prontos para Atender Sua Demanda
                </Heading>

                <div className="mt-8 space-y-5 text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#141e33] text-white">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-white text-xs uppercase tracking-wider">
                        Endereço / Sede Física
                      </p>
                      <p className="mt-1 text-slate-300">
                        {ADDRESS_CAMPO_BELO}
                      </p>
                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-slate-200 hover:text-white hover:underline"
                      >
                        <span>Traçar rota no Google Maps</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#141e33] text-white">
                      <WhatsAppIcon size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-white text-xs uppercase tracking-wider">
                        Telefone & WhatsApp Oficial
                      </p>
                      <p className="mt-1 text-slate-300 font-semibold">
                        {PHONE_DISPLAY}
                      </p>
                      <a
                        href={getWhatsAppUrl("Olá, Dr. Ronaldo Giliard! Gostaria de agendar uma consulta.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-white hover:underline"
                      >
                        <span>Iniciar conversa direta no WhatsApp</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#141e33] text-white">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-white text-xs uppercase tracking-wider">
                        Horário de Funcionamento
                      </p>
                      <p className="mt-1 text-slate-300">
                        Segunda a Sexta · 08:00 às 18:00 (Abre às 08:00)
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Plantão criminal 24 horas via WhatsApp para prisões em flagrante e custódia.
                      </p>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#141e33] text-white">
                      <InstagramIcon size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-white text-xs uppercase tracking-wider">
                        Redes Sociais Oficiais
                      </p>
                      <div className="mt-1 flex flex-col gap-1">
                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-semibold text-slate-200 hover:text-white"
                        >
                          <span>{INSTAGRAM_HANDLE}</span>
                          <span className="text-[11px] text-slate-400">({INSTAGRAM_STATS} · Cível e Criminal)</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map / Route Card */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="overflow-hidden rounded-2xl border border-[#1e293b] bg-[#141e33] p-6 sm:p-8 shadow-xl">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-white">
                        Ronaldo Giliard Advocacia e Consultoria Jurídica
                      </h4>
                      <p className="text-xs text-slate-300">
                        R. João Pinheiro, 356 · Centro, Campo Belo - MG
                      </p>
                    </div>
                    <div className="flex items-center gap-1 rounded-md bg-[#0b0f17] px-3 py-1 text-xs font-bold text-[#f59e0b]">
                      <Star size={13} className="fill-[#f59e0b]" />
                      <span>5,0 ★</span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-slate-300 leading-relaxed">
                    Sede moderna e privativa no Centro de Campo Belo - MG, preparada para acolher você e sua família com total discrição, comodidade e estrutura para análise aprofundada da sua causa cível ou criminal.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-xs font-bold uppercase text-[#0b0f17] hover:bg-slate-200 transition-colors"
                    >
                      <MapPin size={16} />
                      <span>Abrir no Google Maps</span>
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dr. Ronaldo! Gostaria de agendar um horário presencial no escritório em Campo Belo.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 bg-[#0b0f17] px-4 py-3 text-xs font-bold uppercase text-white hover:bg-slate-800 transition-colors"
                    >
                      <WhatsAppIcon size={16} className="text-white" />
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
        <footer className="border-t border-[#1e293b] bg-[#06090e] py-14 text-slate-400 text-xs">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-slate-800/80">
              {/* Brand Column */}
              <div className="lg:col-span-1">
                <Image
                  src={LOGO_WHITE_SRC}
                  alt="Ronaldo Giliard Advocacia e Consultoria Jurídica"
                  width={340}
                  height={170}
                  className="h-[56px] w-auto object-contain opacity-95"
                  unoptimized
                />
                <p className="mt-4 text-xs text-slate-400 leading-relaxed">
                  Advocacia especializada em Direito Cível e Criminal. Liderado pelo Dr. Ronaldo Giliard · OAB/MG 218.682, Bacharel pela PUC Minas Arcos. Sede na R. João Pinheiro, 356 - Centro, Campo Belo - MG, e atendimento digital em todo o Brasil.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-8 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    aria-label="Instagram de Ronaldo Giliard Advocacia"
                  >
                    <InstagramIcon size={15} />
                  </a>
                  <a
                    href={getWhatsAppUrl("Olá, Dr. Ronaldo Giliard!")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-8 items-center justify-center rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors"
                    aria-label="WhatsApp Oficial"
                  >
                    <WhatsAppIcon size={15} />
                  </a>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-8 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    aria-label="Google Meu Negócio"
                  >
                    <GoogleIcon size={14} />
                  </a>
                </div>
              </div>

              {/* Navigation Links */}
              <div>
                <p className="font-serif text-xs font-bold uppercase tracking-wider text-white mb-4">
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
                      Sobre Dr. Ronaldo Giliard
                    </a>
                  </li>
                  <li>
                    <a href="#diferenciais" className="hover:text-white transition-colors">
                      Speed in the Process
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
                      Sede em Campo Belo - MG
                    </a>
                  </li>
                </ul>
              </div>

              {/* Practice Areas */}
              <div>
                <p className="font-serif text-xs font-bold uppercase tracking-wider text-white mb-4">
                  Especialidades
                </p>
                <ul className="space-y-2">
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Direito Criminal & Plantão 24h
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Audiência de Custódia & Flagrante
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Danos Morais & Negativação Indevida
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Consultoria Jurídica & Contratos
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Direito do Consumidor & Bancário
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Divórcio e Inventário em Cartório
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Details */}
              <div>
                <p className="font-serif text-xs font-bold uppercase tracking-wider text-white mb-4">
                  Contato Oficial
                </p>
                <ul className="space-y-2.5 text-xs">
                  <li className="flex items-start gap-2">
                    <MapPin size={14} className="text-slate-300 shrink-0 mt-0.5" />
                    <span>R. João Pinheiro, 356 - Centro, Campo Belo - MG, 37270-000</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <WhatsAppIcon size={14} className="text-white shrink-0" />
                    <span>{PHONE_DISPLAY}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock size={14} className="text-slate-300 shrink-0" />
                    <span>Seg. a Sex. · 08:00 às 18:00 (Plantão 24h)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star size={14} className="text-[#f59e0b] shrink-0 fill-[#f59e0b]" />
                    <span>5,0 ★ no Google (35 avaliações)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* OAB Compliance Disclaimer */}
            <div className="pt-8 text-[11px] leading-relaxed text-slate-500">
              <p>
                <strong>Aviso Legal & Ética Profissional da Advocacia:</strong> Este website tem caráter estritamente informativo e institucional, em total conformidade com o Código de Ética e Disciplina da Ordem dos Advogados do Brasil (OAB) e com o Provimento nº 205/2021 do Conselho Federal da OAB. As informações disponibilizadas não configuram promessa de resultado nem substituem a consulta jurídica individualizada com profissional devidamente habilitado. Dr. Ronaldo Giliard · OAB/MG 218.682.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600">
                <p>© {new Date().getFullYear()} Ronaldo Giliard Advocacia e Consultoria Jurídica. Todos os direitos reservados. OAB/MG 218.682.</p>
                <p>Campo Belo - MG · R. João Pinheiro, 356 - Centro · Atendimento Nacional</p>
              </div>
            </div>
          </div>
        </footer>

        {/* ======================================================== */}
        {/* BOTÃO FLUTUANTE DO WHATSAPP (OXFORD NAVY COMBINANDO)     */}
        {/* ======================================================== */}
        <div className="fixed right-5 bottom-5 z-40 flex items-center gap-2.5">
          <a
            href={getWhatsAppUrl("Olá, Dr. Ronaldo Giliard! Gostaria de tirar uma dúvida sobre o meu caso pelo WhatsApp.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex size-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#141f33] via-[#1c2e4d] to-[#263e68] text-white shadow-xl shadow-[#141f33]/45 border border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#1c2e4d]/60 cursor-pointer"
            aria-label="Converse pelo WhatsApp com o Dr. Ronaldo Giliard"
          >
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#1c2e4d] opacity-35" />
            <WhatsAppIcon size={30} />
          </a>
        </div>
      </main>
    </MotionConfig>
  );
}
