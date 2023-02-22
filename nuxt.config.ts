import { transformerVariantGroup } from 'unocss';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: [
    '@unocss/nuxt',
  ],
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    // or
    // wind: true, // enabled `@unocss/preset-wind`
    icons: true,
    transformers: [
			transformerVariantGroup()
		],
  },
})
