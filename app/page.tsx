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
  Quote,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Client & Firm Information — Juscelino Germano Oliveira — Advogado
const CLIENT_NAME = "Juscelino Germano Oliveira — Advogado";
const ADVOGADO_TITLE = "Dr. Juscelino Germano Oliveira";
const WHATSAPP_NUMBER = "5538998491504";
const PHONE_DISPLAY = "(38) 99849-1504";
const PHONE_SECONDARY = "(38) 99847-6504";
const EMAIL_CONTACT = "contato@juscelinogermano.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/juscelinoadv";
const INSTAGRAM_HANDLE = "@juscelinoadv";
const INSTAGRAM_STATS = "Direito de Família, Consumidor & Servidores";
const INSTAGRAM_SPEAKER_URL = "https://www.instagram.com/ojuscelinogermano/";
const INSTAGRAM_SPEAKER_HANDLE = "@ojuscelinogermano";

const ADDRESS_BOCAIUVA =
  "Rua Luís Inácio Silveira, n° 1385 - Centro, Bocaiúva - MG, 39390-000";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Juscelino+Germano+Oliveira+%E2%80%94+Advogado%0ABocai%C3%BAva+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const GOOGLE_MAPS_URL =
  "https://www.google.com/search?sca_esv=0499b66e11e21840&sxsrf=AKL5yDghkhfoP24JpPesdCQWoIAW0c1bJA:1793307159333&q=juscelino+germano+oliveira+-+advogado+bocai%C3%BAva+endere%C3%A7o&ludocid=9883260072375686984&sa=X&ved=2ahUKEwiR0dHhjeCXAxWRppUCHSwcJbwQ6BN6BAg7EAI";

// Official assets generated from the new client logo & photoshoot
const LOGO_SRC = "/logo.png";
const EMBLEM_SRC = "/emblema-jg.png";
const FOTO_HERO_SRC = "/juscelino-germano.jpg";
const FOTO_PORTRAIT_SRC = "/portrait.jpg";
const FOTO_OFFICE_SRC = "/escritorio.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dr. Juscelino Germano! Gostaria de agendar uma consulta jurídica especializada sobre o meu caso.";
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
      "Acolhimento empático e condução jurídica pacificadora para proteger quem você ama e organizar o patrimônio com dignidade, celeridade e segurança.",
    details:
      "As questões de família e sucessões exigem sensibilidade humana, equilíbrio emocional e firmeza técnica. Sob a liderança do Dr. Juscelino Germano Oliveira, priorizamos a via consensual para realizar divórcios, partilhas de bens e inventários diretamente em Cartório de Notas, proporcionando economia de tempo, redução de custos e preservação dos vínculos familiares. Quando o litígio for indispensável, garantimos atuação combativa na fixação ou revisão de pensão alimentícia, guarda e justa partilha do patrimônio.",
    topics: [
      "Divórcio Consensual em Cartório de Notas: procedimento ágil, sigiloso e concluído em curto prazo",
      "Divórcio Litigioso: partilha equilibrada de bens, proteção patrimonial e garantia dos direitos de cada cônjuge",
      "Pensão Alimentícia: pedido liminar urgente de alimentos provisionais, revisão e cobrança sob pena de prisão",
      "Guarda Compartilhada e Regulamentação do Regime de Convivência e Visitas dos Filhos",
      "Reconhecimento e Dissolução de União Estável com partilha de patrimônio adquirido em conjunto",
      "Inventário Extrajudicial em Cartório: partilha rápida de herança, redução de custos e desembaraço de bens",
      "Inventário Judicial e Planejamento Sucessório Familiar: doações com reserva de usufruto e testamentos públicos",
    ],
    whatsAppText:
      "Olá, Dr. Juscelino Germano! Gostaria de uma consulta sobre Direito de Família (Divórcio, Guarda, Pensão ou Inventário).",
  },
  {
    id: "direito-do-consumidor-bancario",
    title: "Direito do Consumidor & Defesa Patrimonial",
    category: "Operadoras de Telefonia · Abusos Bancários · Negativação SPC/Serasa · Fraudes · Indenizações",
    icon: Shield,
    tag: "Combate Incisivo · Causa Ganha · Reparação de Danos",
    summary:
      "Atuação combativa e incisiva contra práticas abusivas de operadoras de telefonia, instituições financeiras e grandes fornecedores, garantindo o respeito integral aos seus direitos.",
    details:
      "O consumidor não pode ser lesado pelo poderio econômico de grandes empresas. Com um histórico consolidado de combatividade — inclusive revertendo casos complexos contra grandes operadoras de telefonia e recuperando a dignidade de quem foi ignorado —, o Dr. Juscelino ingressa com medidas rápidas para obter liminares de exclusão de nome no SPC/Serasa, cancelar contratos fraudulentos e conquistar indenizações justas por danos morais e materiais.",
    topics: [
      "Ações contra Operadoras de Telefonia por cobranças indevidas, linhas abertas sem consentimento e recusa de atendimento",
      "Pedido Liminar de Urgência para Exclusão Imediata de Negativação Indevida no SPC, Serasa e Protestos",
      "Indenizações por Danos Morais e Materiais decorrentes de falhas graves e desrespeito ao consumidor",
      "Fraudes Bancárias, Golpes do Pix e Empréstimos Consignados Fraudulentos (anulação de contratos e repetição de indébito)",
      "Cobranças Abusivas e Tarifas Bancárias Não Contratadas com restituição em dobro",
      "Planos de Saúde: ações com pedido de liminar para fornecimento imediato de tratamentos, cirurgias e exames negados",
    ],
    whatsAppText:
      "Olá, Dr. Juscelino Germano! Gostaria de consultar sobre Direito do Consumidor (Problema com Operadora, Banco ou Nome Negativado).",
  },
  {
    id: "direito-dos-servidores-publicos",
    title: "Direito dos Servidores Públicos & Defesa Funcional",
    category: "Direitos Estatutários · Progressões · Processo Administrativo (PAD) · Mandado de Segurança",
    icon: Landmark,
    tag: "Defesa Especializada · Garantia de Direitos · Rigor Técnico",
    summary:
      "Defesa intransigente dos direitos e prerrogativas de servidores públicos municipais, estaduais e federais perante a Administração Pública e o Judiciário.",
    details:
      "O servidor público dedica sua carreira à sociedade e merece ter seus direitos funcionais rigorosamente respeitados. O escritório presta assessoria técnica de ponta em Processos Administrativos Disciplinares (PAD), sindicâncias funcionais, cobrança de adicionais remuneratórios, quinquênios, férias-prêmio e impetração de mandados de segurança contra arbitrariedades da Administração.",
    topics: [
      "Defesa Técnica em Sindicâncias e Processos Administrativos Disciplinares (PAD)",
      "Cobrança de Verbas Remuneratórias de servidores (adicionais, férias, quinquênios, horas extras)",
      "Reclassificação Funcional, Promoções e Progressões de Carreira Estatutária",
      "Impetração de Mandado de Segurança contra atos ilegais ou abusivos de autoridades públicas",
      "Ações de Concurso Público: posse de candidatos aprovados, preterição, cotas e anulação de questões abusivas",
      "Assessoria e Pareceres em Direito Administrativo e Constitucional",
    ],
    whatsAppText:
      "Olá, Dr. Juscelino Germano! Preciso de assessoria jurídica especializada em Direito dos Servidores Públicos / PAD / Concurso.",
  },
  {
    id: "direito-civel-indenizacoes",
    title: "Direito Cível & Ações Indenizatórias",
    category: "Danos Morais e Materiais · Contratos · Cobranças · Responsabilidade Civil · Imóveis",
    icon: Scale,
    tag: "Reparação Integral · Resolução Eficaz · Blindagem Patrimonial",
    summary:
      "Proteção firme dos seus direitos e do seu patrimônio. Ações de reparação por danos morais e materiais, cobranças eficazes e elaboração de contratos seguros.",
    details:
      "No Direito Cível, atuamos com agilidade para obter decisões liminares e reparações integrais em conflitos contratuais, litígios patrimoniais e cobranças. Atuamos com extrema técnica processual na busca de bens, execução de dívidas e blindagem jurídica de negócios familiares e imobiliários.",
    topics: [
      "Ações Indenizatórias por Danos Morais, Materiais e Estéticos com comprovação rigorosa das perdas",
      "Ações de Cobrança e Execução de Títulos Judiciais e Extrajudiciais (cheques, notas e contratos inadimplidos)",
      "Elaboração, Revisão e Due Diligence de Contratos de Compra e Venda e Locação Imobiliária",
      "Direito Imobiliário: ações possessórias, usucapião, reintegração de posse e regularização de escrituras",
      "Resolução de Conflitos e Notificações Extrajudiciais com validade jurídica",
      "Assessoria em Responsabilidade Civil e Reparação por Acidentes e Inadimplementos",
    ],
    whatsAppText:
      "Olá, Dr. Juscelino Germano! Gostaria de consultar sobre Ação Cível / Indenização / Contratos.",
  },
  {
    id: "consultoria-juridica-preventiva",
    title: "Consultoria Jurídica & Resolução Sem Burocracia",
    category: "Prevenção de Conflitos · Mediação de Acordos · Diagnóstico Estratégico · Segurança nos Negócios",
    icon: Briefcase,
    tag: "Prevenção Estratégica · Economia de Tempo · Resolução Ágil",
    summary:
      "Soluções inteligentes, preventivas e amigáveis para solucionar divergências antes que se tornem processos longos e desgastantes. Atendimento próximo e desburocratizado.",
    details:
      "A advocacia contemporânea mais eficiente é aquela que previne litígios e economiza recursos emocionais e financeiros. Conforme destacado pelos nossos clientes, prestamos uma assessoria esclarecedora, atenciosa e ágil, desatando nós burocráticos e trazendo soluções seguras para famílias e negócios de Bocaiúva e região.",
    topics: [
      "Consultoria Jurídica Preventiva: mapeamento prévio de riscos civis, contratuais e familiares",
      "Mediação e Negociação Extrajudicial de Acordos com homologação jurídica",
      "Elaboração, Revisão e Pareceres Técnicos em Negócios e Contratos Particulares",
      "Assessoria para Regularização de Imóveis Urbanos e Rurais e Escrituras Públicas",
      "Atendimento próximo com acompanhamento contínuo e prestação de contas transparente",
    ],
    whatsAppText:
      "Olá, Dr. Juscelino Germano! Gostaria de uma Consultoria Jurídica preventiva e desburocratizada para meu caso.",
  },
];

interface Review {
  name: string;
  badge: string;
  date: string;
  category:
    | "Empatia & Humanidade"
    | "Segurança & Confiança"
    | "Agilidade & Eficácia"
    | "Competência & Dedicação";
  content: string;
  ownerReply?: string;
}

const clientReviews: Review[] = [
  {
    name: "Danielle Oliveira",
    badge: "2 avaliações · 5 Estrelas · Google Maps",
    date: "4 anos atrás",
    category: "Empatia & Humanidade",
    content:
      "É difícil conviver com o sentimento de injustiça, sobretudo quando nos sentimos ou estamos em um local que nos torna incapaz. A um tempo atrás tive um problema com uma operadora de celular, usaram meu nome sem a minha autorização e a operadora simplesmente me ignorou. Após algumas indicações, encontrei o Dr. Juscelino que, sem ao menos me conhecer, se mostrou aberto a acolher a minha demanda, sem que eu pudesse dá-lo nenhuma garantia de retorno da causa. Em uma primeira tentativa perdemos a causa e, ainda assim, ele não desistiu. Correu atrás, como se o problema tivesse ocorrido com ele, e ganhou a minha causa! Empatia é a palavra que define Juscelino, por ter se colocado ao meu lado mesmo sem conhecer e sentido o que eu senti. Obrigada, Juscelino por transbordar humanidade e competência, por sempre ter ido além do que podia e sobretudo por nunca ter desistido!",
    ownerReply:
      "Oi, Danielle! Muito obrigado pelo reconhecimento. Você merece essa felicidade. Conte sempre comigo.",
  },
  {
    name: "Thamires Meiriane",
    badge: "1 avaliação · 5 Estrelas · Google Maps",
    date: "1 ano atrás",
    category: "Segurança & Confiança",
    content:
      "Excelente profissional, super admiro como pessoa. Sua competência me inspira confiança e segurança. Um advogado incrível, de um trabalho espetacular.",
    ownerReply:
      "Obrigado, Thamires! São clientes com você que me permitem ser igualmente dedicado. Gratidão!",
  },
  {
    name: "Heberth Oliveira",
    badge: "2 avaliações · 5 Estrelas · Google Maps",
    date: "2 anos atrás",
    category: "Agilidade & Eficácia",
    content:
      "Excelente profissional, super atencioso, procura deixar o cliente sempre calmo com a situação. Resolveu meu problema antes do previsto. Parabéns!",
    ownerReply:
      "Muito obrigado, Heberth. Sou privilegiado por ter clientes como você.",
  },
  {
    name: "Carlos Roberto Pereira Dias",
    badge: "1 avaliação · 5 Estrelas · Google Maps",
    date: "6 anos atrás",
    category: "Competência & Dedicação",
    content:
      "Muito satisfeito com os serviços prestados pelo Juscelino, além de um ótimo atendimento, sucesso total na ação judicial. Já o agradeci pessoalmente, mas fica aqui mais uma vez o meu muito obrigado!!!",
    ownerReply: "Obrigado, meu irmão! Conte sempre comigo.",
  },
  {
    name: "Fernanda Pereira",
    badge: "1 avaliação · 5 Estrelas · Google Maps",
    date: "3 anos atrás",
    category: "Empatia & Humanidade",
    content:
      "Excelente profissional, muita empatia e atenção para com os clientes, tem um papo muito esclarecedor, com um atendimento humanitário... Super recomendo!!!",
    ownerReply:
      "Oi, Fernanda, obrigado! Fico contente que esteja satisfeita. Conte sempre comigo.",
  },
  {
    name: "Larissa Vieira",
    badge: "2 avaliações · 5 Estrelas · Google Maps",
    date: "4 anos atrás",
    category: "Segurança & Confiança",
    content:
      "Atendimento 100% confiável, todas as informações passadas com segurança e inclusive problemas são resolvidos sem burocracia, a melhor solução para esse problema é com Juscelino...",
    ownerReply: "Larissa, muito obrigado pela confiança em meu trabalho.",
  },
  {
    name: "Silvanira Borges de Oliveira",
    badge: "1 avaliação · 5 Estrelas · Google Maps",
    date: "4 anos atrás",
    category: "Competência & Dedicação",
    content:
      "Super competente, honesto, pessoa confiável, indico pra todos o melhor advogado.",
    ownerReply: "Obrigado, Silvanira! Conte sempre comigo.",
  },
  {
    name: "Aliny Duarte Veloso Gomes",
    badge: "4 avaliações · 7 fotos · 5 Estrelas",
    date: "1 ano atrás",
    category: "Competência & Dedicação",
    content:
      "Dr. Juscelino é um excelente profissional, sempre dedicado e comprometido!",
    ownerReply: "Obrigado pela confiança.",
  },
  {
    name: "Carolayne Tayna",
    badge: "1 avaliação · 5 Estrelas · Google Maps",
    date: "4 anos atrás",
    category: "Empatia & Humanidade",
    content:
      "Melhor advogado, sem dúvidas! Atencioso e responsável, indico fácil. Por mais advogados assim..",
    ownerReply:
      "Obrigado, Tayná! Conte sempre comigo. Espero que esteja tudo bem contigo e o seu pequeno.",
  },
  {
    name: "Gregório Farias",
    badge: "3 avaliações · 5 Estrelas · Google Maps",
    date: "4 anos atrás",
    category: "Agilidade & Eficácia",
    content:
      "Profissional extremamente educado e atencioso. Resolveu meu problema de forma ágil e eficaz.",
    ownerReply: "Obrigado, amigo! Conte sempre comigo.",
  },
  {
    name: "Fernando Epitacio",
    badge: "3 avaliações · 5 Estrelas · Google Maps",
    date: "3 anos atrás",
    category: "Segurança & Confiança",
    content: "Ótimo, fui muito bem atendido!",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "Como funciona a primeira consulta jurídica com o Dr. Juscelino Germano?",
    answer:
      "Nosso primeiro atendimento pode ser presencial em nossa sede no Centro de Bocaiúva - MG (Rua Luís Inácio Silveira, n° 1385) ou 100% online por meio de chamada de vídeo ou WhatsApp (38) 99849-1504. Durante o atendimento, realizamos uma escuta atenta e humanizada do seu relato, analisamos a documentação disponível e traçamos o caminho jurídico mais ágil, seguro e eficaz para o seu caso.",
  },
  {
    question: "Tive problemas com operadora de celular ou grande empresa. Realmente vale a pena entrar com ação?",
    answer:
      "Sim, com absoluta certeza! Muitas vezes o cidadão se sente impotente perante grandes empresas e operadoras que ignoram reclamações ou colocam o nome indevidamente no SPC/Serasa. O escritório do Dr. Juscelino possui atuação reconhecida e combativa nessa área, obtendo decisões judiciais liminares e reparações por danos morais e materiais, não desistindo até que a justiça seja restabelecida.",
  },
  {
    question: "Como funciona o divórcio e o inventário em cartório? É mais rápido que na Justiça?",
    answer:
      "Sim, é substancialmente mais rápido! Havendo acordo entre as partes e preenchidos os requisitos legais, o procedimento é formalizado por Escritura Pública diretamente em Cartório de Notas na presença do Dr. Juscelino Germano. O que na via judicial tradicional poderia levar meses ou anos é solucionado com grande celeridade, economia de custos e total segurança jurídica.",
  },
  {
    question: "Quais direitos e medidas podem ser pleiteados por Servidores Públicos?",
    answer:
      "Atuamos na defesa integral do servidor em Processos Administrativos Disciplinares (PAD) e sindicâncias, na cobrança de verbas remuneratórias retidas, progressões na carreira, adicionais por tempo de serviço (quinquênios, férias-prêmio), bem como na impetração de Mandados de Segurança contra decisões arbitrárias da Administração Pública.",
  },
  {
    question: "Tive meu nome negativado indevidamente ou caí em golpe bancário. O que pode ser feito?",
    answer:
      "Ingressamos prontamente com uma ação com Pedido Liminar de Urgência ('inaudita altera parte'). O juiz costuma determinar a imediata exclusão do seu CPF dos cadastros de inadimplentes no SPC/Serasa sob pena de multa diária contra a empresa, além de pleitearmos a anulação de cobranças indevidas e indenização por danos morais.",
  },
  {
    question: "O escritório atende apenas em Bocaiúva ou também em outras cidades e estados?",
    answer:
      "Nossa sede física está estrategicamente localizada no Centro de Bocaiúva - MG (Rua Luís Inácio Silveira, n° 1385), acolhendo presencialmente clientes de Bocaiúva, Montes Claros, Engenheiro Navarro, Francisco Dumont, Olhos-d'Água e todo o Norte de Minas. Além disso, por meio do processo judicial eletrônico (PJe), atendemos clientes de qualquer cidade de Minas Gerais e do Brasil com máxima agilidade e proximidade digital.",
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
          dark ? "text-white" : "text-[#111317]"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm leading-relaxed sm:text-base ${
            dark ? "text-[#e6e2d8]" : "text-[#535965]"
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
    "Empatia & Humanidade",
    "Segurança & Confiança",
    "Agilidade & Eficácia",
    "Competência & Dedicação",
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
      <main className="min-h-screen bg-[#faf9f5] text-[#111317] selection:bg-[#181c22] selection:text-[#f1ce89]">
        {/* ======================================================== */}
        {/* TOP ANNOUNCEMENT BAR (LUXURY ONYX & METALLIC GOLD ACCENT) */}
        {/* ======================================================== */}
        <div className="border-b border-[#222731] bg-[#0a0c0f] py-2 text-xs text-[#e6e2d8]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#c89a47] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#f1ce89]" />
              </span>
              <span className="text-[11px] sm:text-xs text-[#f1ce89] font-semibold">
                JUSCELINO GERMANO OLIVEIRA — ADVOGADO · Bocaiúva - MG ⚖️
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-[#e6e2d8]">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#f1ce89]"
              >
                <Star size={12} className="fill-[#f59e0b] text-[#f59e0b]" />
                <span className="font-bold text-[#f1ce89]">5,0 ★</span> (28 avaliações no Google · Bocaiúva - MG)
              </a>
              <span className="hidden h-3 w-px bg-[#222731] sm:inline-block" />
              <a
                href={getWhatsAppUrl("Olá, Dr. Juscelino Germano! Gostaria de consultar sobre o meu caso.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 font-semibold text-[#f1ce89] transition-colors hover:text-white sm:inline-flex"
              >
                <WhatsAppIcon size={13} className="text-[#c89a47]" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* STICKY HEADER / NAVBAR (OFFICIAL JUSCELINO GERMANO LOGO) */}
        {/* ======================================================== */}
        <header
          className={`sticky top-0 z-40 w-full transition-all duration-300 ${
            scrolled
              ? "border-b border-[#e6e2d8] bg-white/95 py-2.5 shadow-md backdrop-blur-md"
              : "border-b border-[#e6e2d8]/70 bg-[#faf9f5]/90 py-3 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
            {/* Left: Official Juscelino Germano Logo Badge + Typography */}
            <a
              href="#"
              className="group flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-95"
              aria-label="Juscelino Germano Oliveira Advogado - Início"
            >
              <Image
                src={EMBLEM_SRC}
                alt="Juscelino Germano Oliveira — Emblema Oficial JG"
                width={56}
                height={56}
                className="h-[44px] sm:h-[48px] md:h-[52px] w-auto object-contain drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
                priority
                unoptimized
              />
              <div className="flex flex-col border-l border-[#c89a47]/40 pl-2.5">
                <span className="font-cinzel text-xs sm:text-sm md:text-base font-bold tracking-wider text-[#111317] leading-tight">
                  JUSCELINO GERMANO
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-[#b88836] uppercase leading-tight">
                  A D V O G A D O
                </span>
                <span className="text-[8.5px] font-semibold text-[#535965] tracking-wider hidden 2xl:block leading-tight">
                  Família · Consumidor · Servidores
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
                Pilares & Diferenciais
              </a>
              <a href="#depoimentos" className="nav-link text-[11px] whitespace-nowrap">
                Avaliações (5,0 ★)
              </a>
              <a href="#sede" className="nav-link text-[11px] whitespace-nowrap">
                Sede em Bocaiúva
              </a>
              <a href="#duvidas" className="nav-link text-[11px] whitespace-nowrap">
                Dúvidas
              </a>
              <a href="#contato" className="nav-link text-[11px] whitespace-nowrap">
                Contato
              </a>
            </nav>

            {/* Right Action: WhatsApp CTA (Metallic Warm Gold, properly sized & shrink-0) */}
            <div className="flex shrink-0 items-center gap-2.5">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dr. Juscelino Germano! Gostaria de agendar uma consulta sobre o meu caso.")}
                target="_blank"
                variant="gold"
                size="sm"
                className="hidden sm:inline-flex whitespace-nowrap shrink-0"
              >
                <WhatsAppIcon size={14} className="text-[#0a0c0f]" />
                <span className="hidden xl:inline">Falar no WhatsApp</span>
                <span className="xl:hidden">WhatsApp</span>
              </GlowingButton>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex size-9 sm:size-10 items-center justify-center rounded-lg border border-[#e6e2d8] bg-white text-[#111317] transition-colors hover:border-[#c89a47] hover:text-[#0a0c0f] xl:hidden cursor-pointer shrink-0"
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
                className="border-b border-[#e6e2d8] bg-white px-5 py-6 xl:hidden shadow-xl"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-[#e6e2d8]">
                    <Image
                      src={EMBLEM_SRC}
                      alt="Juscelino Germano Oliveira Advogado"
                      width={48}
                      height={48}
                      className="h-[44px] w-auto object-contain"
                      priority
                      unoptimized
                    />
                    <div>
                      <p className="font-cinzel text-sm font-bold text-[#111317]">JUSCELINO GERMANO</p>
                      <p className="text-[10px] font-bold text-[#b88836] tracking-[0.2em] uppercase">A D V O G A D O</p>
                    </div>
                  </div>
                  <a
                    href="#servicos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#111317] uppercase transition-colors hover:text-[#c89a47]"
                  >
                    <span>Áreas de Atuação</span>
                    <ArrowRight size={14} className="text-[#c89a47]" />
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#111317] uppercase transition-colors hover:text-[#c89a47]"
                  >
                    <span>Sobre Dr. Juscelino Germano</span>
                    <ArrowRight size={14} className="text-[#c89a47]" />
                  </a>
                  <a
                    href="#diferenciais"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#111317] uppercase transition-colors hover:text-[#c89a47]"
                  >
                    <span>Nossos Pilares & Atendimento</span>
                    <ArrowRight size={14} className="text-[#c89a47]" />
                  </a>
                  <a
                    href="#depoimentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#111317] uppercase transition-colors hover:text-[#c89a47]"
                  >
                    <span>Avaliações no Google (28 Avaliações · 5,0 ★)</span>
                    <ArrowRight size={14} className="text-[#c89a47]" />
                  </a>
                  <a
                    href="#sede"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#111317] uppercase transition-colors hover:text-[#c89a47]"
                  >
                    <span>Sede em Bocaiúva - MG</span>
                    <ArrowRight size={14} className="text-[#c89a47]" />
                  </a>
                  <a
                    href="#duvidas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#111317] uppercase transition-colors hover:text-[#c89a47]"
                  >
                    <span>Dúvidas Frequentes</span>
                    <ArrowRight size={14} className="text-[#c89a47]" />
                  </a>
                  <a
                    href="#contato"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#111317] uppercase transition-colors hover:text-[#c89a47]"
                  >
                    <span>Contato & Localização</span>
                    <ArrowRight size={14} className="text-[#c89a47]" />
                  </a>

                  <div className="pt-2">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dr. Juscelino Germano! Gostaria de tirar dúvidas sobre meu caso pelo WhatsApp.")}
                      target="_blank"
                      variant="gold"
                      size="md"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Fale com o Dr. Juscelino no WhatsApp</span>
                    </GlowingButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* ======================================================== */}
        {/* DOBRA 1: HERO SECTION — COM FOTO DO DR. JUSCELINO GERMANO */}
        {/* ======================================================== */}
        <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-22 lg:pt-18 lg:pb-26 bg-[#faf9f5]">
          {/* Subtle Warm Amber Gold & Onyx Radial Glow */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[950px] -translate-x-1/2 rounded-full bg-radial from-[#f1ce89]/20 via-[#c89a47]/5 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -right-40 -z-10 h-80 w-80 rounded-full bg-[#c89a47]/10 blur-3xl" />

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
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#e6e2d8] bg-white px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-[#181c22] shadow-xs">
                    <span className="size-1.5 rounded-full bg-[#c89a47] animate-pulse" />
                    JUSCELINO GERMANO OLIVEIRA — ADVOGADO · BOCAIÚVA - MG
                  </span>
                </motion.div>

                {/* H1 Headline */}
                <motion.h1
                  variants={reveal}
                  className="font-serif text-3xl leading-[1.16] font-bold tracking-tight text-[#111317] sm:text-5xl lg:text-[3.25rem]"
                >
                  Advocacia de Excelência, Empatia e Solidez em{" "}
                  <span className="bg-gradient-to-r from-[#8a611e] via-[#c89a47] to-[#f1ce89] bg-clip-text text-transparent">
                    Família, Consumidor e Servidores.
                  </span>
                </motion.h1>

                {/* Subtitle / Value Proposition */}
                <motion.p
                  variants={reveal}
                  className="mt-6 text-base leading-relaxed text-[#535965] sm:text-lg lg:max-w-xl"
                >
                  Sob a liderança do <strong className="font-semibold text-[#111317]">Dr. Juscelino Germano Oliveira</strong>, nosso escritório combina combatividade técnica, escuta humanizada e desburocratização ágil para resolver seu problema com segurança, proteger o seu patrimônio e restabelecer a justiça sem que você enfrente litígios desgastantes sozinho.
                </motion.p>

                {/* Quick Highlights Pills */}
                <motion.div
                  variants={reveal}
                  className="mt-6 flex flex-wrap gap-2.5 sm:gap-3"
                >
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#e6e2d8] bg-white px-3 py-1 text-xs font-semibold text-[#181c22] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#c89a47]" />
                    Direito de Família & Sucessões
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#e6e2d8] bg-white px-3 py-1 text-xs font-semibold text-[#181c22] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#c89a47]" />
                    Defesa do Consumidor & Operadoras
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#e6e2d8] bg-white px-3 py-1 text-xs font-semibold text-[#181c22] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#c89a47]" />
                    Direito dos Servidores Públicos
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#e6e2d8] bg-white px-3 py-1 text-xs font-semibold text-[#181c22] shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#c89a47]" />
                    Resolução Ágil Sem Burocracia
                  </span>
                </motion.div>

                {/* Action CTAs */}
                <motion.div
                  variants={reveal}
                  className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
                >
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dr. Juscelino Germano! Gostaria de agendar uma consulta jurídica sobre o meu caso.")}
                    target="_blank"
                    variant="gold"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Agendar Consulta no WhatsApp</span>
                  </GlowingButton>

                  <GlowingButton
                    href="#servicos"
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <span>Conhecer Áreas de Atuação</span>
                    <ArrowRight size={15} />
                  </GlowingButton>
                </motion.div>

                {/* Social Proof Strip underneath CTAs */}
                <motion.div
                  variants={reveal}
                  className="mt-9 flex flex-wrap items-center gap-4 border-t border-[#e6e2d8] pt-6 sm:gap-6"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex text-[#f59e0b]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} className="fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#111317]">
                      5,0 no Google
                    </span>
                    <span className="text-xs text-[#535965]">
                      (28 avaliações verificadas)
                    </span>
                  </div>

                  <span className="hidden h-3.5 w-px bg-[#e6e2d8] sm:inline-block" />

                  <div className="flex items-center gap-2 text-xs text-[#535965]">
                    <Shield size={14} className="text-[#c89a47]" />
                    <span>Sede na Rua Luís Inácio Silveira, 1385 - Bocaiúva - MG</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column: Photo of Dr. Juscelino Germano Oliveira */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="relative lg:col-span-5"
              >
                <div className="relative mx-auto max-w-[390px] sm:max-w-[430px] lg:max-w-none">
                  {/* Outer Luxury Metallic Border Frame */}
                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#c89a47]/40 bg-white p-2 shadow-2xl shadow-[#181c22]/15">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-gradient-to-b from-[#f3f1ea] to-[#e6e2d8]">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dr. Juscelino Germano Oliveira — Advogado em Bocaiúva - MG"
                        fill
                        className="object-cover object-top transition-transform duration-500 hover:scale-102"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                      />

                      {/* Subtle Bottom Vignette for High-Contrast Typography Badge */}
                      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0c0f]/90 via-[#0a0c0f]/40 to-transparent" />

                      {/* Overlay Identification Badge */}
                      <div className="absolute inset-x-4 bottom-4 rounded-xl border border-[#c89a47]/45 bg-[#0a0c0f]/90 p-4 shadow-xl backdrop-blur-md">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="font-cinzel text-base font-bold text-white tracking-wide">
                              Dr. Juscelino Germano
                            </p>
                            <p className="text-[11px] font-semibold text-[#f1ce89] uppercase tracking-wider">
                              Advogado · OAB/MG
                            </p>
                            <p className="text-[10px] text-[#e6e2d8] mt-0.5">
                              Família · Consumidor · Servidores Públicos
                            </p>
                          </div>
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-[#c89a47]/40 bg-[#181c22] p-1.5 shadow-md">
                            <Image
                              src={EMBLEM_SRC}
                              alt="Monograma JG"
                              width={40}
                              height={40}
                              className="size-full object-contain"
                              unoptimized
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Google Review Card on the side */}
                  <div className="absolute -bottom-6 -left-4 sm:-bottom-7 sm:-left-7 rounded-xl border border-[#c89a47]/40 bg-white/95 p-3.5 shadow-xl backdrop-blur-md sm:max-w-[270px]">
                    <div className="flex items-center gap-2">
                      <div className="flex size-7 items-center justify-center rounded-full bg-[#faf9f5] border border-[#e6e2d8]">
                        <GoogleIcon size={14} />
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-[#f59e0b]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={11} className="fill-current" />
                          ))}
                        </div>
                        <p className="text-[10px] font-bold text-[#111317]">
                          5,0 Estrelas no Google
                        </p>
                      </div>
                    </div>
                    <p className="mt-2 text-[10px] leading-snug text-[#535965] italic">
                      &quot;Competência, empatia e humanidade. Nunca desistiu da minha causa!&quot;
                    </p>
                    <p className="mt-1 text-[9px] font-semibold text-[#8a611e]">
                      — Danielle Oliveira (Avaliação Real no Google)
                    </p>
                  </div>

                  {/* Floating Badge Top-Right: Sede Própria Bocaiúva */}
                  <div className="absolute -top-4 -right-3 sm:-top-5 sm:-right-5 rounded-lg border border-[#c89a47]/50 bg-[#0a0c0f] px-3.5 py-2 shadow-lg text-white">
                    <p className="text-[9px] font-bold tracking-widest text-[#f1ce89] uppercase">
                      BOCAIÚVA · MG
                    </p>
                    <p className="text-[11px] font-bold text-white">
                      R. Luís Inácio Silveira, 1385
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 2: STRIP DE AUTORIDADE / MÉTRICAS (LUXURY ONYX)    */}
        {/* ======================================================== */}
        <section className="border-y border-[#222731] bg-[#0a0c0f] py-9 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 text-center">
              {/* Stat 1: Google Rating */}
              <div className="flex flex-col items-center border-r border-[#222731] pr-4 last:border-r-0 md:pr-0">
                <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-[#f1ce89]">
                  <span>5,0</span>
                  <div className="flex text-[#f59e0b]">
                    <Star size={18} className="fill-current" />
                  </div>
                </div>
                <p className="mt-1 font-cinzel text-xs font-bold text-white tracking-wider uppercase">
                  Avaliação Máxima
                </p>
                <p className="text-[11px] text-[#e6e2d8]/70">
                  28 avaliações 5 estrelas no Google
                </p>
              </div>

              {/* Stat 2: Humanized Care */}
              <div className="flex flex-col items-center md:border-r md:border-[#222731] md:pr-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#f1ce89]">
                  100%
                </div>
                <p className="mt-1 font-cinzel text-xs font-bold text-white tracking-wider uppercase">
                  Atendimento Humanizado
                </p>
                <p className="text-[11px] text-[#e6e2d8]/70">
                  Dedicação integral a cada cliente
                </p>
              </div>

              {/* Stat 3: Agility & Bureaucracy-Free */}
              <div className="flex flex-col items-center border-r border-[#222731] pr-4 last:border-r-0 md:pr-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#f1ce89]">
                  Ágil
                </div>
                <p className="mt-1 font-cinzel text-xs font-bold text-white tracking-wider uppercase">
                  Sem Burocracia
                </p>
                <p className="text-[11px] text-[#e6e2d8]/70">
                  Resolução rápida e descomplicada
                </p>
              </div>

              {/* Stat 4: Geographic Reach */}
              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#f1ce89]">
                  MG & Brasil
                </div>
                <p className="mt-1 font-cinzel text-xs font-bold text-white tracking-wider uppercase">
                  Sede em Bocaiúva
                </p>
                <p className="text-[11px] text-[#e6e2d8]/70">
                  Atendimento presencial & online
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 3: ÁREAS DE ATUAÇÃO (SERVIÇOS ESPECIALIZADOS)      */}
        {/* ======================================================== */}
        <section id="servicos" className="py-20 sm:py-26 bg-[#faf9f5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <p className="eyebrow justify-center mb-3.5">
                EXPERTISE JURÍDICA ESTRATÉGICA
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#111317] sm:text-4xl lg:text-[2.6rem]">
                Áreas de Atuação Especializada
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#535965] sm:text-base">
                Conheça nossos pilares de atuação. Cada demanda é tratada com profundidade técnica, acolhimento humano e dedicação irrestrita aos seus direitos.
              </p>
            </div>

            {/* Practice Areas Grid */}
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {practiceAreas.map((area) => {
                const IconComponent = area.icon;
                return (
                  <motion.div
                    key={area.id}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#e6e2d8] bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#c89a47]/60 hover:shadow-xl"
                  >
                    <div>
                      {/* Top Row: Icon + Tag */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex size-12 items-center justify-center rounded-xl border border-[#c89a47]/30 bg-[#f1ce89]/15 text-[#8a611e] transition-colors group-hover:bg-[#181c22] group-hover:text-[#f1ce89] group-hover:border-[#c89a47]">
                          <IconComponent size={24} />
                        </div>
                        <span className="rounded-full border border-[#e6e2d8] bg-[#faf9f5] px-3 py-1 text-[10px] font-bold text-[#8a611e] uppercase tracking-wider">
                          Especialidade
                        </span>
                      </div>

                      {/* Area Title */}
                      <h3 className="mt-5 font-serif text-xl font-bold text-[#111317] transition-colors group-hover:text-[#8a611e]">
                        {area.title}
                      </h3>

                      {/* Category Subtext */}
                      <p className="mt-1 text-[11px] font-semibold text-[#b88836] uppercase tracking-wider">
                        {area.category}
                      </p>

                      {/* Summary */}
                      <p className="mt-3.5 text-xs leading-relaxed text-[#535965]">
                        {area.summary}
                      </p>

                      {/* Key Topics List */}
                      <ul className="mt-4 space-y-2 border-t border-[#e6e2d8]/70 pt-4 text-xs text-[#111317]">
                        {area.topics.slice(0, 3).map((topic, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2
                              size={14}
                              className="mt-0.5 shrink-0 text-[#c89a47]"
                            />
                            <span className="leading-snug">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom CTA Actions */}
                    <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#e6e2d8] pt-4">
                      <button
                        type="button"
                        onClick={() => setSelectedPractice(area)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8a611e] transition-colors hover:text-[#111317] cursor-pointer"
                      >
                        <span>Ver detalhes completos</span>
                        <ArrowRight size={13} />
                      </button>

                      <a
                        href={getWhatsAppUrl(area.whatsAppText)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex size-8 items-center justify-center rounded-lg bg-[#c89a47]/15 text-[#8a611e] transition-all hover:bg-[#c89a47] hover:text-[#0a0c0f]"
                        aria-label={`Consultar sobre ${area.title} no WhatsApp`}
                      >
                        <WhatsAppIcon size={15} />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Callout Banner */}
            <div className="mt-12 rounded-2xl border border-[#c89a47]/40 bg-gradient-to-r from-[#0a0c0f] via-[#12151a] to-[#181c22] p-8 text-white shadow-xl sm:flex sm:items-center sm:justify-between sm:gap-8">
              <div className="max-w-2xl">
                <span className="rounded-full border border-[#f1ce89]/30 bg-[#f1ce89]/10 px-3 py-1 text-[10px] font-bold text-[#f1ce89] uppercase tracking-wider">
                  ATENDIMENTO DIRETO COM O ADVOGADO
                </span>
                <h3 className="mt-3 font-serif text-2xl font-bold text-white">
                  Não encontrou a sua área ou tem dúvidas sobre a viabilidade da causa?
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#e6e2d8]">
                  Cada caso possui particularidades únicas. Entre em contato direto pelo WhatsApp para analisarmos a sua situação com total sigilo e transparência.
                </p>
              </div>

              <div className="mt-6 sm:mt-0 shrink-0">
                <GlowingButton
                  href={getWhatsAppUrl("Olá, Dr. Juscelino Germano! Gostaria de uma avaliação inicial sobre o meu caso.")}
                  target="_blank"
                  variant="gold"
                  size="md"
                >
                  <WhatsAppIcon size={16} />
                  <span>Conversar com o Dr. Juscelino</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 4: SOBRE DR. JUSCELINO GERMANO OLIVEIRA            */}
        {/* ======================================================== */}
        <section id="sobre" className="py-20 sm:py-26 border-t border-[#e6e2d8] bg-[#f3f1ea]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Portrait & Sede Picture */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-[420px] lg:max-w-none">
                  {/* Portrait Card */}
                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#c89a47]/40 bg-white p-2.5 shadow-2xl">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#faf9f5]">
                      <Image
                        src={FOTO_PORTRAIT_SRC}
                        alt="Dr. Juscelino Germano Oliveira — Advogado"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 460px"
                      />
                    </div>
                  </div>

                  {/* Secondary Office Photo Preview */}
                  <div className="absolute -bottom-7 -right-4 sm:-bottom-8 sm:-right-6 w-44 sm:w-52 overflow-hidden rounded-xl border-2 border-[#c89a47]/60 bg-white p-1.5 shadow-2xl">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                      <Image
                        src={FOTO_OFFICE_SRC}
                        alt="Fachada do Escritório Juscelino Germano Oliveira em Bocaiúva"
                        fill
                        className="object-cover"
                        sizes="220px"
                      />
                    </div>
                    <p className="mt-1.5 text-center text-[9px] font-bold text-[#111317]">
                      Sede em Bocaiúva - MG (n° 1385)
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Bio & Values */}
              <div className="lg:col-span-7">
                <p className="eyebrow mb-3.5">TRAJETÓRIA & PROPÓSITO</p>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[#111317] sm:text-4xl lg:text-[2.6rem]">
                  Sobre o Dr. Juscelino Germano Oliveira
                </h2>
                <p className="mt-2 text-sm font-bold text-[#b88836] tracking-wider uppercase">
                  Advogado · Palestrante · Defensor Intransigente dos Seus Direitos
                </p>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#535965] sm:text-base">
                  <p>
                    Com escritório sediado no coração de Bocaiúva - MG, o <strong className="font-semibold text-[#111317]">Dr. Juscelino Germano Oliveira</strong> construiu sua trajetória fundamentada na premissa de que a advocacia deve ser, acima de tudo, um instrumento de acolhimento humano, empatia e restauração da justiça.
                  </p>
                  <p>
                    Especializado em <strong className="font-semibold text-[#111317]">Direito de Família, Direito do Consumidor e Servidores Públicos</strong>, atua com dedicação incansável, buscando desatar conflitos de forma ágil, segura e sem burocracias desnecessárias. Como destacam os próprios clientes, seu diferencial reside em tratar cada caso como se fosse seu próprio problema, não desistindo mesmo diante das causas mais desafiadoras.
                  </p>
                  <p>
                    Além de sua prática jurídica nos tribunais e cartórios, o Dr. Juscelino atua também como palestrante (
                    <a
                      href={INSTAGRAM_SPEAKER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#8a611e] underline decoration-[#c89a47] hover:text-[#111317]"
                    >
                      {INSTAGRAM_SPEAKER_HANDLE}
                    </a>
                    ), compartilhando conhecimento, segurança jurídica e clareza para cidadãos e famílias de toda a região.
                  </p>
                </div>

                {/* 4 Pillars of Action */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-[#e6e2d8] bg-white p-4 shadow-2xs">
                    <div className="flex items-center gap-2 font-bold text-[#111317] text-xs sm:text-sm">
                      <HeartHandshake size={16} className="text-[#c89a47]" />
                      <span>Empatia Genuína</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#535965]">
                      Escuta atenta e respeito absoluto à sua história de vida.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#e6e2d8] bg-white p-4 shadow-2xs">
                    <div className="flex items-center gap-2 font-bold text-[#111317] text-xs sm:text-sm">
                      <Zap size={16} className="text-[#c89a47]" />
                      <span>Agilidade Comprovada</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#535965]">
                      Problemas resolvidos antes do prazo previsto e sem rodeios.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#e6e2d8] bg-white p-4 shadow-2xs">
                    <div className="flex items-center gap-2 font-bold text-[#111317] text-xs sm:text-sm">
                      <Shield size={16} className="text-[#c89a47]" />
                      <span>Segurança Total</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#535965]">
                      Informações transparentes e atuação processual firme.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#e6e2d8] bg-white p-4 shadow-2xs">
                    <div className="flex items-center gap-2 font-bold text-[#111317] text-xs sm:text-sm">
                      <Award size={16} className="text-[#c89a47]" />
                      <span>Combatividade</span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#535965]">
                      Nunca desiste de buscar a vitória na causa do cliente.
                    </p>
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dr. Juscelino Germano! Gostaria de conversar diretamente com você sobre uma demanda jurídica.")}
                    target="_blank"
                    variant="gold"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Falar com o Dr. Juscelino no WhatsApp</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#535965] transition-colors hover:text-[#111317]"
                  >
                    <InstagramIcon size={16} className="text-[#c89a47]" />
                    <span>Siga {INSTAGRAM_HANDLE} no Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 5: NOSSOS PILARES & DIFERENCIAIS (LUXURY ONYX)     */}
        {/* ======================================================== */}
        <section id="diferenciais" className="py-20 sm:py-26 bg-[#0a0c0f] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <p className="eyebrow-dark justify-center mb-3.5">
                POR QUE ESCOLHER NOSSO ESCRITÓRIO
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                Os Pilares que Conquistaram a Confiança de Bocaiúva
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#e6e2d8] sm:text-base">
                Mais do que processos, defendemos vidas, patrimônios e a dignidade de quem confia em nosso trabalho.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Pillar 1 */}
              <div className="rounded-2xl border border-[#222731] bg-[#12151a] p-7 transition-all duration-300 hover:border-[#c89a47]/50 hover:bg-[#181c22]">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#c89a47]/30 bg-[#c89a47]/10 text-[#f1ce89]">
                  <HeartHandshake size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Empatia & Humanidade
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#e6e2d8]/75">
                  Acolhemos sua dor e preocupação com sensibilidade. Aqui você nunca será apenas um número de processo; você tem voz e atenção exclusiva.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="rounded-2xl border border-[#222731] bg-[#12151a] p-7 transition-all duration-300 hover:border-[#c89a47]/50 hover:bg-[#181c22]">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#c89a47]/30 bg-[#c89a47]/10 text-[#f1ce89]">
                  <Zap size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Agilidade sem Burocracia
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#e6e2d8]/75">
                  Conforme avaliado por nossos clientes, buscamos antecipar prazos e destravar procedimentos cartorários e judiciais com máxima eficiência.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="rounded-2xl border border-[#222731] bg-[#12151a] p-7 transition-all duration-300 hover:border-[#c89a47]/50 hover:bg-[#181c22]">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#c89a47]/30 bg-[#c89a47]/10 text-[#f1ce89]">
                  <Shield size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Segurança & Clareza
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#e6e2d8]/75">
                  Sem termos herméticos ou falsas ilusões. Informações passadas com clareza, transparência e segurança jurídica em cada etapa.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="rounded-2xl border border-[#222731] bg-[#12151a] p-7 transition-all duration-300 hover:border-[#c89a47]/50 hover:bg-[#181c22]">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#c89a47]/30 bg-[#c89a47]/10 text-[#f1ce89]">
                  <Award size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Combatividade Inabalável
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#e6e2d8]/75">
                  Não recuamos diante de grandes operadoras ou empresas. Enfrentamos as causas mais difíceis até que o direito do cliente seja vitorioso.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 6: PROVA SOCIAL / GOOGLE REVIEWS (5,0 ★)           */}
        {/* ======================================================== */}
        <section id="depoimentos" className="py-20 sm:py-26 bg-[#faf9f5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header with Google Badge */}
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e6e2d8] bg-white px-4 py-1.5 shadow-2xs">
                <GoogleIcon size={16} />
                <span className="text-xs font-bold text-[#111317]">
                  Google Avaliações Verificadas
                </span>
                <span className="flex text-[#f59e0b]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-current" />
                  ))}
                </span>
                <span className="text-xs font-bold text-[#8a611e]">
                  5,0 / 5,0
                </span>
              </div>

              <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#111317] sm:text-4xl lg:text-[2.6rem]">
                O Reconhecimento de Quem Já Teve Seus Direitos Defendidos
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#535965] sm:text-base">
                Depoimentos reais de clientes atendidos pelo Dr. Juscelino Germano em Bocaiúva e região.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {reviewCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedReviewCategory(cat);
                    setShowAllReviews(false);
                  }}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                    selectedReviewCategory === cat
                      ? "border border-[#c89a47] bg-[#0a0c0f] text-[#f1ce89] shadow-sm"
                      : "border border-[#e6e2d8] bg-white text-[#535965] hover:border-[#c89a47] hover:text-[#111317]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Reviews Cards Grid */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {displayedReviews.map((review, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col justify-between rounded-2xl border border-[#e6e2d8] bg-white p-6 shadow-sm transition-all hover:border-[#c89a47]/50 hover:shadow-md"
                >
                  <div>
                    {/* Top Row: Stars + Date */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex text-[#f59e0b]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] text-[#535965]">{review.date}</span>
                    </div>

                    {/* Category Tag */}
                    <span className="mt-3 inline-block rounded-md bg-[#f1ce89]/20 px-2.5 py-0.5 text-[9px] font-bold text-[#8a611e] uppercase tracking-wider">
                      {review.category}
                    </span>

                    {/* Review Text */}
                    <p className="mt-3.5 text-xs leading-relaxed text-[#111317] italic">
                      &quot;{review.content}&quot;
                    </p>

                    {/* Owner Response if present */}
                    {review.ownerReply && (
                      <div className="mt-4 rounded-xl border border-[#c89a47]/20 bg-[#faf9f5] p-3 text-[11px] text-[#535965]">
                        <p className="font-bold text-[#8a611e] text-[10px] uppercase tracking-wider">
                          Resposta do Dr. Juscelino:
                        </p>
                        <p className="mt-1 leading-snug">{review.ownerReply}</p>
                      </div>
                    )}
                  </div>

                  {/* Author Info */}
                  <div className="mt-5 flex items-center gap-3 border-t border-[#e6e2d8]/70 pt-4">
                    <div className="flex size-9 items-center justify-center rounded-full bg-[#0a0c0f] font-cinzel text-xs font-bold text-[#f1ce89]">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#111317]">{review.name}</p>
                      <p className="text-[10px] text-[#535965]">{review.badge}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Toggle show all reviews */}
            {filteredReviews.length > 6 && (
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAllReviews(!showAllReviews)}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#c89a47] bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#111317] transition-all hover:bg-[#0a0c0f] hover:text-[#f1ce89] cursor-pointer"
                >
                  <span>
                    {showAllReviews
                      ? "Ver Menos Depoimentos"
                      : `Ver Todos os Depoimentos (${filteredReviews.length})`}
                  </span>
                  {showAllReviews ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 7: SEDE FÍSICA EM BOCAIÚVA & ATENDIMENTO DIGITAL    */}
        {/* ======================================================== */}
        <section id="sede" className="border-t border-[#e6e2d8] py-20 sm:py-26 bg-[#f3f1ea]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Office Entrance Photo */}
              <div className="lg:col-span-6">
                <div className="relative mx-auto max-w-[480px] lg:max-w-none overflow-hidden rounded-2xl border-2 border-[#c89a47]/50 bg-white p-2 shadow-2xl">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#0a0c0f]">
                    <Image
                      src={FOTO_OFFICE_SRC}
                      alt="Fachada do Escritório Juscelino Germano Oliveira — Advogado em Bocaiúva - MG"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                    />

                    {/* Gradient Overlay for Address */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0a0c0f] via-[#0a0c0f]/70 to-transparent p-6 text-white">
                      <div className="flex items-center gap-2 text-[#f1ce89] text-xs font-bold uppercase tracking-wider">
                        <MapPin size={16} />
                        <span>Sede Própria no Centro de Bocaiúva</span>
                      </div>
                      <p className="mt-1 font-serif text-lg font-bold text-white">
                        Rua Luís Inácio Silveira, n° 1385
                      </p>
                      <p className="text-xs text-[#e6e2d8]">
                        Centro, Bocaiúva - MG, CEP 39390-000
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Information & Office Hours */}
              <div className="lg:col-span-6">
                <p className="eyebrow mb-3.5">ESTRUTURA & LOCALIZAÇÃO</p>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[#111317] sm:text-4xl lg:text-[2.6rem]">
                  Atendimento Presencial de Excelência e Cobertura Digital
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#535965] sm:text-base">
                  Nosso escritório físico em Bocaiúva foi concebido para oferecer total conforto, discrição e segurança aos nossos clientes. Contamos com espaço acolhedor e infraestrutura moderna para tratar de demandas delicadas de família, servidor público e consumidor.
                </p>

                <div className="mt-8 space-y-4">
                  {/* Address Box */}
                  <div className="flex items-start gap-3.5 rounded-xl border border-[#e6e2d8] bg-white p-4 shadow-2xs">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#c89a47]/15 text-[#8a611e]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#111317] uppercase tracking-wider">
                        Endereço Completo
                      </p>
                      <p className="text-xs text-[#535965] mt-0.5">
                        {ADDRESS_BOCAIUVA}
                      </p>
                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-[#8a611e] hover:text-[#111317]"
                      >
                        <span>Abrir rotas no Google Maps</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>

                  {/* Hours Box */}
                  <div className="flex items-start gap-3.5 rounded-xl border border-[#e6e2d8] bg-white p-4 shadow-2xs">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#c89a47]/15 text-[#8a611e]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#111317] uppercase tracking-wider">
                        Horário de Atendimento
                      </p>
                      <p className="text-xs text-[#535965] mt-0.5">
                        Segunda a Sexta-feira: <strong>09:00 às 18:00</strong>
                      </p>
                      <p className="text-[11px] text-[#8a611e] font-semibold mt-0.5">
                        Atendimento presencial com agendamento prévio ou online imediato.
                      </p>
                    </div>
                  </div>

                  {/* Contact Phones */}
                  <div className="flex items-start gap-3.5 rounded-xl border border-[#e6e2d8] bg-white p-4 shadow-2xs">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#c89a47]/15 text-[#8a611e]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#111317] uppercase tracking-wider">
                        Telefones & WhatsApp
                      </p>
                      <p className="text-xs text-[#535965] mt-0.5">
                        WhatsApp Principal: <strong>{PHONE_DISPLAY}</strong>
                      </p>
                      <p className="text-xs text-[#535965]">
                        Telefone da Sede: <strong>{PHONE_SECONDARY}</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sede CTA */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dr. Juscelino! Gostaria de agendar um horário para visita em seu escritório de Bocaiúva.")}
                    target="_blank"
                    variant="gold"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Agendar Atendimento Presencial</span>
                  </GlowingButton>

                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#c89a47] bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#111317] transition-all hover:bg-[#0a0c0f] hover:text-[#f1ce89]"
                  >
                    <MapPin size={15} />
                    <span>Como Chegar</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 8: DÚVIDAS FREQUENTES (FAQ ACCORDION)              */}
        {/* ======================================================== */}
        <section id="duvidas" className="py-20 sm:py-26 bg-[#faf9f5]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <p className="eyebrow justify-center mb-3.5">ESCLARECIMENTOS JURÍDICOS</p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#111317] sm:text-4xl lg:text-[2.6rem]">
                Perguntas Frequentes
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#535965] sm:text-base">
                Tire suas principais dúvidas sobre procedimentos, atendimento e prazos.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {faqList.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl border border-[#e6e2d8] bg-white transition-all hover:border-[#c89a47]/50"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left font-serif text-base sm:text-lg font-bold text-[#111317] transition-colors hover:text-[#8a611e] cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#faf9f5] border border-[#e6e2d8] text-[#8a611e]">
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="border-t border-[#e6e2d8]/70 px-5 pb-6 pt-4 sm:px-6 text-xs sm:text-sm leading-relaxed text-[#535965]"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Bottom FAQ CTA */}
            <div className="mt-10 text-center">
              <p className="text-xs text-[#535965]">
                Ainda tem alguma dúvida específica sobre o seu caso?
              </p>
              <div className="mt-3">
                <a
                  href={getWhatsAppUrl("Olá, Dr. Juscelino Germano! Tenho uma dúvida sobre meu caso e gostaria de orientação.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#8a611e] underline decoration-[#c89a47] hover:text-[#111317] text-xs sm:text-sm"
                >
                  <WhatsAppIcon size={15} />
                  <span>Converse diretamente com o Dr. Juscelino pelo WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 9: BANNER DE CONTATO / CTA FINAL (LUXURY ONYX)     */}
        {/* ======================================================== */}
        <section id="contato" className="py-20 sm:py-26 bg-[#0a0c0f] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-[#c89a47]/40 bg-gradient-to-b from-[#12151a] to-[#0a0c0f] p-8 sm:p-12 lg:p-16 shadow-2xl">
              {/* Background Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-[#c89a47]/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 size-80 rounded-full bg-[#f1ce89]/10 blur-3xl" />

              <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#f1ce89]/30 bg-[#f1ce89]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#f1ce89]">
                    <span className="size-1.5 rounded-full bg-[#f1ce89] animate-pulse" />
                    ATENDIMENTO PRIORITÁRIO & SIGILOSO
                  </div>

                  <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Proteja Seus Direitos e Sua Família com um Advogado Dedicado e Combativo.
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#e6e2d8] sm:text-base">
                    Não permita que o sentimento de injustiça ou a burocracia prejudiquem o que você construiu. Agende hoje mesmo uma consulta com o Dr. Juscelino Germano Oliveira.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-4 text-xs text-[#e6e2d8]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#f1ce89]" />
                      <span>Atendimento humanizado e sem promessas vazias</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#f1ce89]" />
                      <span>Sigilo profissional irrestrito</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#f1ce89]" />
                      <span>Sede própria no Centro de Bocaiúva</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dr. Juscelino Germano! Gostaria de agendar uma consulta jurídica especializada sobre meu caso.")}
                    target="_blank"
                    variant="gold"
                    size="lg"
                    className="w-full text-center"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Iniciar Atendimento no WhatsApp</span>
                  </GlowingButton>

                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#c89a47]/50 bg-[#181c22] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#f1ce89] transition-all hover:bg-[#c89a47] hover:text-[#0a0c0f]"
                  >
                    <Phone size={15} />
                    <span>Ligar: {PHONE_DISPLAY}</span>
                  </a>

                  <p className="text-center text-[10px] text-[#e6e2d8]/60 mt-1">
                    Atendimento de Segunda a Sexta, das 09h às 18h.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* FOOTER (SOFISTICADO, COMPLETO & 100% LIMPO)              */}
        {/* ======================================================== */}
        <footer className="border-t border-[#222731] bg-[#0a0c0f] pt-16 pb-12 text-[#e6e2d8]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {/* Col 1: Brand & Logo */}
              <div>
                <a href="#" className="flex items-center gap-3">
                  <Image
                    src={EMBLEM_SRC}
                    alt="Juscelino Germano Oliveira — Advogado"
                    width={50}
                    height={50}
                    className="h-11 w-auto object-contain"
                    unoptimized
                  />
                  <div>
                    <p className="font-cinzel text-sm font-bold text-white tracking-wider">
                      JUSCELINO GERMANO
                    </p>
                    <p className="text-[9px] font-bold text-[#f1ce89] tracking-[0.2em] uppercase">
                      A D V O G A D O
                    </p>
                  </div>
                </a>
                <p className="mt-4 text-xs leading-relaxed text-[#e6e2d8]/70">
                  Advocacia humanizada, ágil e combativa em Direito de Família, Direito do Consumidor e Servidores Públicos. Sede própria em Bocaiúva - MG e atendimento digital para todo o Brasil.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-[#c89a47]/40 bg-[#181c22] text-[#f1ce89] transition-colors hover:bg-[#c89a47] hover:text-[#0a0c0f]"
                    aria-label="Instagram Juscelino Advogado"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-[#c89a47]/40 bg-[#181c22] text-[#f1ce89] transition-colors hover:bg-[#c89a47] hover:text-[#0a0c0f]"
                    aria-label="WhatsApp Juscelino Germano Advogado"
                  >
                    <WhatsAppIcon size={16} />
                  </a>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-[#c89a47]/40 bg-[#181c22] text-[#f1ce89] transition-colors hover:bg-[#c89a47] hover:text-[#0a0c0f]"
                    aria-label="Avaliações no Google"
                  >
                    <GoogleIcon size={16} />
                  </a>
                </div>
              </div>

              {/* Col 2: Áreas de Atuação */}
              <div>
                <p className="font-cinzel text-xs font-bold text-white uppercase tracking-widest">
                  Áreas de Atuação
                </p>
                <ul className="mt-4 space-y-2.5 text-xs text-[#e6e2d8]/70">
                  <li>
                    <a href="#servicos" className="hover:text-[#f1ce89] transition-colors">
                      Direito de Família & Sucessões
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#f1ce89] transition-colors">
                      Direito do Consumidor & Operadoras
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#f1ce89] transition-colors">
                      Direito dos Servidores Públicos (PAD)
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#f1ce89] transition-colors">
                      Divórcio & Inventário em Cartório
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#f1ce89] transition-colors">
                      Ações Cíveis & Indenizatórias
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-[#f1ce89] transition-colors">
                      Consultoria Jurídica Preventiva
                    </a>
                  </li>
                </ul>
              </div>

              {/* Col 3: Links Rápidos */}
              <div>
                <p className="font-cinzel text-xs font-bold text-white uppercase tracking-widest">
                  Navegação Rápida
                </p>
                <ul className="mt-4 space-y-2.5 text-xs text-[#e6e2d8]/70">
                  <li>
                    <a href="#sobre" className="hover:text-[#f1ce89] transition-colors">
                      Sobre Dr. Juscelino Germano
                    </a>
                  </li>
                  <li>
                    <a href="#diferenciais" className="hover:text-[#f1ce89] transition-colors">
                      Pilares & Diferenciais
                    </a>
                  </li>
                  <li>
                    <a href="#depoimentos" className="hover:text-[#f1ce89] transition-colors">
                      Avaliações no Google (5,0 ★)
                    </a>
                  </li>
                  <li>
                    <a href="#sede" className="hover:text-[#f1ce89] transition-colors">
                      Sede em Bocaiúva - MG
                    </a>
                  </li>
                  <li>
                    <a href="#duvidas" className="hover:text-[#f1ce89] transition-colors">
                      Perguntas Frequentes
                    </a>
                  </li>
                  <li>
                    <a href="#contato" className="hover:text-[#f1ce89] transition-colors">
                      Contato & Agendamento
                    </a>
                  </li>
                </ul>
              </div>

              {/* Col 4: Sede & Contatos */}
              <div>
                <p className="font-cinzel text-xs font-bold text-white uppercase tracking-widest">
                  Sede & Contato
                </p>
                <ul className="mt-4 space-y-3 text-xs text-[#e6e2d8]/70">
                  <li className="flex items-start gap-2">
                    <MapPin size={15} className="text-[#f1ce89] shrink-0 mt-0.5" />
                    <span>{ADDRESS_BOCAIUVA}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <WhatsAppIcon size={15} className="text-[#f1ce89] shrink-0" />
                    <span>WhatsApp: {PHONE_DISPLAY}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone size={15} className="text-[#f1ce89] shrink-0" />
                    <span>Telefone: {PHONE_SECONDARY}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock size={15} className="text-[#f1ce89] shrink-0" />
                    <span>Seg a Sex: 09:00 às 18:00</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <InstagramIcon size={15} className="text-[#f1ce89] shrink-0" />
                    <span>Instagram: {INSTAGRAM_HANDLE}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Legal Notice & Copyright */}
            <div className="mt-12 border-t border-[#222731] pt-8 text-center text-[11px] text-[#e6e2d8]/50">
              <p>
                © {new Date().getFullYear()} {CLIENT_NAME}. Todos os direitos reservados.
              </p>
              <p className="mt-1">
                Atuação em estrita conformidade com o Código de Ética e Disciplina da OAB e a legislação brasileira.
              </p>
            </div>
          </div>
        </footer>

        {/* ======================================================== */}
        {/* MODAL DE DETALHES DA ÁREA DE ATUAÇÃO                     */}
        {/* ======================================================== */}
        <AnimatePresence>
          {selectedPractice && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPractice(null)}
                className="absolute inset-0 bg-[#0a0c0f]/80 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-[#c89a47]/50 bg-white p-6 sm:p-8 shadow-2xl text-[#111317]"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedPractice(null)}
                  className="absolute right-5 top-5 inline-flex size-9 items-center justify-center rounded-full bg-[#faf9f5] border border-[#e6e2d8] text-[#535965] hover:text-[#111317] hover:border-[#c89a47] cursor-pointer"
                  aria-label="Fechar janela"
                >
                  <X size={18} />
                </button>

                {/* Modal Content */}
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-[#c89a47]/15 text-[#8a611e]">
                    <selectedPractice.icon size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#b88836]">
                      Área Especializada
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#111317]">
                      {selectedPractice.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-2 text-xs font-semibold text-[#8a611e] uppercase tracking-wider">
                  {selectedPractice.category}
                </p>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#535965]">
                  {selectedPractice.details}
                </p>

                <div className="mt-6">
                  <p className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#111317]">
                    Principais Procedimentos e Demandas:
                  </p>
                  <ul className="mt-3 space-y-2 text-xs sm:text-sm text-[#111317]">
                    {selectedPractice.topics.map((t, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2
                          size={15}
                          className="mt-0.5 shrink-0 text-[#c89a47]"
                        />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal CTA */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#e6e2d8]">
                  <GlowingButton
                    href={getWhatsAppUrl(selectedPractice.whatsAppText)}
                    target="_blank"
                    variant="gold"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Consultar sobre {selectedPractice.title}</span>
                  </GlowingButton>

                  <button
                    type="button"
                    onClick={() => setSelectedPractice(null)}
                    className="rounded-lg border border-[#e6e2d8] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#535965] hover:bg-[#faf9f5] hover:text-[#111317] cursor-pointer"
                  >
                    Fechar
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
