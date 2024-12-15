import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgo from 'vite-plugin-svgo'; // Import the plugin

export default defineConfig({
  plugins: [react(), svgo()], // Add the svgo plugin
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
