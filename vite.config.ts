import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import flowbiteReact from 'flowbite-react/plugin/vite';
import path from 'path';
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@test': path.resolve(__dirname, './test'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    silent: true,
    dangerouslyIgnoreUnhandledErrors: true,
    // onConsoleLog(_, type) {
    //   return type !== 'stderr';
    // },
  },
});
