import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://JoseAntonioLeonLopez.github.io',
  base: '/portfolio-joseleon', // Mantenemos el 'base' para rutas relativas al subdirectorio
  build: {
    assetsPrefix: './', // Esto fuerza a Astro a usar rutas relativas para los assets
  }
})