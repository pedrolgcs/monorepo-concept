export default {
  entryPoints: [
    'src/styles/global.ts',
    'src/context/theme-provider/index.ts',
    'src/components/alert/index.ts',
    'src/components/badge/index.ts',
    'src/components/button/index.ts',
    'src/components/calendar/index.ts',
    'src/components/checkbox/index.ts',
    'src/components/collapsible/index.ts',
    'src/components/dialog/index.ts',
    'src/components/input/index.ts',
    'src/components/label/index.ts',
    'src/components/select/index.ts',
    'src/components/skeleton/index.ts',
    'src/components/sonner/index.ts',
    'src/components/tooltip/index.ts',
    'src/components/separator/index.ts',
    'src/components/dropdown-menu/index.ts',
    'src/components/navigation-menu/index.ts',
    'src/components/popover/index.ts',
    'src/components/form/index.ts',
  ], // Pontos de entrada do seu projeto
  format: ['cjs', 'esm'], // Formatos de saída desejados (CommonJS e ES Module)
  splitting: true, // Habilita a geração de múltiplos arquivos de saída
  outDir: 'dist', // Diretório de saída para o build
  dts: true,
  ignoreWatch: ['**/node_modules', '**/dist'],
  bundle: true,
  tsconfig: './tsconfig.json',
}
