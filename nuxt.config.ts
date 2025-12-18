// nuxt.config.ts
import posts from './content/posts.json'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo'
  ],
  app: {
    head: {
      title: 'Inicio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Asesoría contable y financiera profesional para empresas y particulares. Servicios de contabilidad, fiscalidad, nómina y consultoría financiera con más de 15 años de experiencia.' },
        { name: 'keywords', content: 'asesoría contable, consultoría financiera, contabilidad empresarial, asesoramiento fiscal, nómina, auditoría' },
        { name: 'author', content: 'ASCONFI JY' },
        { name: 'og:title', content: 'ASCONFI JY - Asesoría Contable y Financiera' },
        { name: 'og:description', content: 'Soluciones contables y financieras profesionales para empresas y particulares.' },
        { name: 'og:url', content: 'https://asconfijy.com' },
        { name: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'ASCONFI JY - Asesoría Contable y Financiera' },
        { name: 'twitter:description', content: 'Soluciones contables y financieras profesionales.' },
        { name: 'robots', content: 'index, follow' },
        { name: 'language', content: 'es' },
        { 'http-equiv': 'content-language', content: 'es-CO' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://asconfijy.com' },
        { rel: 'alternate', hreflang: 'es', href: 'https://asconfijy.com' }
      ]
    }
  },
  routeRules: {
    // Pre-render páginas estáticas en build time
    '/': { prerender: true },
    '/nosotros': { prerender: true },
    '/servicios': { prerender: true },
    '/blog': { prerender: true },
    '/contacto': { prerender: true },
    '/privacidad': { prerender: true },
    // Páginas dinámicas
    '/servicios/**': { swr: true }
  },
  nitro: {
    prerender: {
      routes: posts.map(p => `/blog/${p.slug}`)
    }
  },
  ssr: true
})