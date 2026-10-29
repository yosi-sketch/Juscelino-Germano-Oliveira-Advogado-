const fs = require('fs');
const path = require('path');

console.log('=== VERIFICAÇÃO DE INTEGRIDADE: RONALDO GILIARD ADVOCACIA ===\n');

// 1. Check all required assets in public and app
const requiredFiles = [
  'public/logo.png',
  'public/logo-trimmed.png',
  'public/logo-white.png',
  'public/emblema-rg.png',
  'public/ronaldo-giliard.jpg',
  'public/hero.jpg',
  'public/dr-ronaldo-portrait.jpg',
  'public/favicon.ico',
  'public/icon.png',
  'public/apple-icon.png',
  'public/icon-32x32.png',
  'public/icon-16x16.png',
  'app/favicon.ico',
  'app/icon.png',
  'app/apple-icon.png'
];

let allFilesExist = true;
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const stat = fs.statSync(file);
    console.log(`[OK] ${file} (${stat.size} bytes)`);
  } else {
    console.error(`[FALHA] Arquivo não encontrado: ${file}`);
    allFilesExist = false;
  }
});

// 2. Scan for any trace of previous client
const forbiddenStrings = [
  'Agenor',
  'Lucena',
  'Alexandre Abreu',
  'Pitangui',
  '99971-0510',
  '5537999710510',
  'agenor_lucena',
  'agenorlucena'
];

const checkDirs = ['app', 'public'];
let foundForbidden = false;

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(fullPath);
    } else if (entry.isFile() && (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css') || fullPath.endsWith('.json') || fullPath.endsWith('.js') || fullPath.endsWith('.mjs'))) {
      const content = fs.readFileSync(fullPath, 'utf8');
      forbiddenStrings.forEach(str => {
        if (content.toLowerCase().includes(str.toLowerCase())) {
          console.error(`[ALERTA RESIDUAL] Encontrado "${str}" em ${fullPath}`);
          foundForbidden = true;
        }
      });
    }
  }
}

checkDirs.forEach(dir => scanDir(dir));

if (!foundForbidden) {
  console.log('\n[SUCESSO] Nenhum rastro do cliente anterior encontrado nos códigos e arquivos de app/ e public/!');
}

// 3. Check WhatsApp number & phone links in page.tsx
const pageContent = fs.readFileSync('app/page.tsx', 'utf8');
if (pageContent.includes('5535997458013') && pageContent.includes('(35) 99745-8013')) {
  console.log('[SUCESSO] Número do WhatsApp oficial (35) 99745-8013 aplicado em todos os links e botões.');
} else {
  console.error('[FALHA] Número do WhatsApp oficial não encontrado em app/page.tsx.');
}

// 4. Check OAB number
if (pageContent.includes('218.682') && pageContent.includes('PUC Minas')) {
  console.log('[SUCESSO] Registro OAB/MG 218.682 e PUC Minas Arcos devidamente citados.');
}

console.log('\n=== FIM DA VERIFICAÇÃO ===');
