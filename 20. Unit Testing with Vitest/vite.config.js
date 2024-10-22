import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // setup the file for test
  test: {
    environment: 'jsdom',
    setupFiles: './setupTests.js',
  },
});

// vitest install ===>  npm i -D vitest @testing-library/react jsdom
