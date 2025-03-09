import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: '/gestao-saude-fisica/', // Define a base do projeto no GitHub Pages
});
