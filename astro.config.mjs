import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import turbolinks from'@astrojs/turbolinks';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), turbolinks()]
});