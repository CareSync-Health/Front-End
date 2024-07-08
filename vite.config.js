// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@i18n': path.resolve(__dirname, './src/Doctor Dashboard/Components/Language_Locales'),
    },
  },
});