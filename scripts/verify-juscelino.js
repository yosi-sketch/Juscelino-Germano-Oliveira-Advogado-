const fs = require('fs');
const path = require('path');

console.log('=== VERIFICAÇÃO INTEGRAL — JUSCELINO GERMANO OLIVEIRA ADVOGADO ===\n');

// 1. Verificar arquivos essenciais na pasta public
const publicFiles = [
  'public/logo.png',
  'public/emblema-jg.png',
  'public/juscelino-germano.jpg',
  'public/hero.jpg',
  'public/portrait.jpg',
  'public/escritorio.jpg',
  'public/fachada.jpg',
  'public/favicon.ico',
  'public/icon.png',
  'public/apple-icon.png',
  'public/icon-32x32.png',
  'public/icon-16x16.png',
  'public/icon-48x48.png',
];

console.log('1. Verificando arquivos na pasta public:');
let allPublicExist = true;
publicFiles.forEach(f => {
  const exists = fs.existsSync(f);
  const size = exists ? fs.statSync(f).size : 0;
  console.log(`  [${exists ? 'OK' : 'FALHA'}] ${f} (${size} bytes)`);
  if (!exists) allPublicExist = false;
});

// 2. Verificar arquivos de favicon na pasta app
console.log('\n2. Verificando favicons na pasta app:');
const appFiles = [
  'app/favicon.ico',
  'app/icon.png',
  'app/apple-icon.png',
];
let allAppExist = true;
appFiles.forEach(f => {
  const exists = fs.existsSync(f);
  const size = exists ? fs.statSync(f).size : 0;
  console.log(`  [${exists ? 'OK' : 'FALHA'}] ${f} (${size} bytes)`);
  if (!exists) allAppExist = false;
});

// 3. Verificar ausência de referências antigas em arquivos de código
console.log('\n3. Varrendo código por rastros do cliente anterior:');
const scanDirs = ['app'];
let leakFound = false;

function scan(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scan(p);
    } else if (p.endsWith('.tsx') || p.endsWith('.ts') || p.endsWith('.css')) {
      const content = fs.readFileSync(p, 'utf8');
      if (/ales[âa]nia/i.test(content) || /pomp[ée]u/i.test(content) || /99961-?7913/.test(content)) {
        console.log(`  [ALERTA] Rastro encontrado em: ${p}`);
        leakFound = true;
      }
    }
  }
}

scanDirs.forEach(scan);
if (!leakFound) {
  console.log('  [OK] Nenhum rastro do cliente anterior encontrado na pasta app!');
}

console.log('\n=== FIM DA VERIFICAÇÃO ===');
