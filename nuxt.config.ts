// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@vite-pwa/nuxt'],
  pwa: {
    manifest: {
          name: "Nuxt3 pwa",
          short_name: "Nuxt3 PWA",
          description: "Testing Nuxt3 PWA",
          icons: [
            {
              src: 'icons/pwa-icon-64x64.png',
              sizes: '64x64',
              type: 'image/png'
            },
            {
              src: 'icons/pwa-icon-144x144.png',
              sizes: '144x144',
              type: 'image/png'
            },
            {
              src: 'icons/pwa-icon-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'icons/pwa-icon-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            },
          ]
    },
    workbox: {
      navigateFallback: '/'
    },
    devOptions: {
        enabled: true,
        type: "module"
    }
  },
});
