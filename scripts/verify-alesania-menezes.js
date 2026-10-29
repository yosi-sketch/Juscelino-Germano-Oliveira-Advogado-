const fs = require('fs');
const path = require('path');

console.log('=== VERIFICAÇÃO DE INTEGRIDADE: ESCRITÓRIO DE ADVOCACIA ALESÂNIA MENEZES ===\n');

// 1. Verificar arquivos essenciais
const requiredFiles = [
  'public/logo.png',
  'public/logo-badge.png',
  'public/logo-horizontal.png',
  'public/emblema-am.png',
  'public/alesania-menezes.jpg',
  'public/dra-alesania-portrait.jpg',
  'public/dra-alesania-office.jpg',
  'public/favicon.ico',
  'public/icon.png',
  'public/apple-icon.png',
  'public/icon-32x32.png',
  'public/icon-16x16.png',
  'public/icon-48x48.png',
  'app/favicon.ico',
  'app/icon.png',
  'app/apple-icon.png',
  'app/page.tsx',
  'app/layout.tsx',
  'app/globals.css',
  'app/components/GlowingButton.tsx',
];

let allFilesOk = true;
for (const file of requiredFiles) {
  if (fs.existsSync(file)) {
    const size = fs.statSync(file).size;
    console.log(`[OK] ${file} (${size} bytes)`);
  } else {
    console.error(`[ERRO] Arquivo ausente: ${file}`);
    allFilesOk = false;
  }
}

// 2. Verificar conteúdo de app/page.tsx e app/layout.tsx
const pageContent = fs.readFileSync('app/page.tsx', 'utf8');
const layoutContent = fs.readFileSync('app/layout.tsx', 'utf8');

// Validação de resquícios do cliente antigo
const forbiddenTerms = [
  'ronaldo',
  'giliard',
  'campo belo',
  '218.682',
  '99745',
  'giliardadv',
];

let cleanCode = true;
for (const term of forbiddenTerms) {
  const pageRegex = new RegExp(term, 'i');
  if (pageRegex.test(pageContent)) {
    console.error(`[ALERTA] Termo proibido '${term}' encontrado em app/page.tsx!`);
    cleanCode = false;
  }
  if (pageRegex.test(layoutContent)) {
    console.error(`[ALERTA] Termo proibido '${term}' encontrado em app/layout.tsx!`);
    cleanCode = false;
  }
}

if (cleanCode) {
  console.log('\n[SUCESSO] Nenhum resquício do cliente anterior encontrado no código da aplicação!');
}

// Validação dos novos dados
if (pageContent.includes('5537999617913') && pageContent.includes('(37) 99961-7913')) {
  console.log('[SUCESSO] Número do WhatsApp oficial (37) 99961-7913 devidamente aplicado.');
} else {
  console.error('[ERRO] WhatsApp novo não encontrado em app/page.tsx.');
}

if (pageContent.includes('Alesânia Menezes') && pageContent.includes('Pompéu - MG')) {
  console.log('[SUCESSO] Nome Dra. Alesânia Menezes e Sede em Pompéu - MG devidamente aplicados.');
} else {
  console.error('[ERRO] Nome do cliente ou sede não encontrados.');
}

if (pageContent.includes('5,0') && pageContent.includes('31 avaliações')) {
  console.log('[SUCESSO] Prova Social Google 5,0 ★ (31 avaliações) aplicada.');
}

if (layoutContent.includes('favicon.ico?v=am1') && layoutContent.includes('icon.png?v=am1')) {
  console.log('[SUCESSO] Favicons configurados com cache busting no layout.');
}

console.log('\n=== FIM DA VERIFICAÇÃO ===');
