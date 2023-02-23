import { transformerVariantGroup, transformerDirectives } from 'unocss';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: [
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@inkline/nuxt'
  ],
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    // or
    // wind: true, // enabled `@unocss/preset-wind`
    icons: true,
    transformers: [
			transformerVariantGroup(),
      transformerDirectives()
		],
  },
  css: [
    "@unocss/reset/tailwind.css",
    "assets/scss/main.scss"
  ]
})
