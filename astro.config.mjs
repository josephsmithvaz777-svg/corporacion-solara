// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// Salida estática → subir contenido de dist/ a public_html en DonWeb
export default defineConfig({
  output: 'static',
  site: 'https://corporacionsolara.com',
  compressHTML: true,
  build: {
    assets: '_assets',
  },
  integrations: [icon()],
});
