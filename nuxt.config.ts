// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/test-utils/module'],
  tailwindcss: {
    config: {
      theme: {
        extend: {},
        content: {
          files: [
            // all directories and extensions will correspond to your Nuxt config
            '{srcDir}/assets/**/*.{vue,js,jsx,mjs,ts,tsx}',
            '{srcDir}/components/**/*.{vue,js,jsx,mjs,ts,tsx}',
            '{srcDir}/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}',
            '{srcDir}/pages/**/*.{vue,js,jsx,mjs,ts,tsx}',
            '{srcDir}/plugins/**/*.{js,ts,mjs}',
            '{srcDir}/composables/**/*.{js,ts,mjs}',
            '{srcDir}/utils/**/*.{js,ts,mjs}',
            '{srcDir}/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}',
            '{srcDir}/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}',
            '{srcDir}/app.config.{js,ts,mjs}',
            '{srcDir}/app/spa-loading-template.html',
          ],
        },
      },
    },
  },
});
