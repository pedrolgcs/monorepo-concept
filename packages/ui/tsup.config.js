export default {
  entryPoints: [
    'src/styles/global.ts',
    'src/components/index.ts',
    'src/components/alert/alert.tsx',
    'src/components/badge/badge.tsx',
    'src/components/button/button.tsx',
    'src/components/calendar/calendar.tsx',
    'src/components/checkbox/checkbox.tsx',
    'src/components/collapsible/collapsible.tsx',
    'src/components/dialog/dialog.tsx',
    'src/components/input/input.tsx',
    'src/components/label/label.tsx',
    'src/components/select/select.tsx',
    'src/components/skeleton/skeleton.tsx',
    'src/components/sonner/sonner.tsx',
    'src/components/tooltip/tooltip.tsx',
  ], // Pontos de entrada do seu projeto
  format: ['cjs', 'esm'], // Formatos de saída desejados (CommonJS e ES Module)
  splitting: true, // Habilita a geração de múltiplos arquivos de saída
  outDir: 'dist', // Diretório de saída para o build
  dts: true,
  ignoreWatch: ['**/node_modules', '**/dist'],
  bundle: true,
  tsconfig: './tsconfig.json',
}
