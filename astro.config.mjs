import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [tailwind(), svelte()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "hi"]
  },
});