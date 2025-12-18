<template>
  <div class="container mx-auto px-4 lg:px-8 py-12">
    <header class="text-center mb-12">
      <h1 class="text-3xl md:text-4xl font-bold text-[#001D3C]">Testimonios de Clientes</h1>
      <p class="text-gray-600 mt-3 max-w-2xl mx-auto">La confianza de nuestros clientes es nuestra mejor referencia. Conoce experiencias reales de empresas que han trabajado con ASCONFI JY.</p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      <Testimonial :testimonial="testimonials[0]" />
      <Testimonial :testimonial="testimonials[1]" />
      <Testimonial :testimonial="testimonials[2]" />
      <Testimonial :testimonial="testimonials[3]" />
      <Testimonial :testimonial="testimonials[4]" />
      <Testimonial :testimonial="testimonials[5]" />
    </section>

    <div class="text-center">
      <NuxtLink to="/servicios#testimonios" class="inline-block text-[#00439D] font-semibold">Volver a Servicios</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '#imports'
import Testimonial from '@/components/Testimonial.vue'

useHead({
  title: 'Testimonios - ASCONFI JY',
  meta: [
    { name: 'description', content: 'Testimonios reales de clientes satisfechos de ASCONFI JY. Experiencias en contabilidad, fiscalidad, nómina y consultoría financiera.' },
    { property: 'og:title', content: 'Testimonios - ASCONFI JY' },
    { property: 'og:description', content: 'Conoce las experiencias de clientes que han confiado en nuestros servicios profesionales.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://asconfijy.com/testimonios' }
  ]
})

const testimonials = [
  {
    text: 'Gracias a AsconfiJY hemos optimizado nuestra carga fiscal en un 20%. Su profesionalismo y atención al detalle son excepcionales.',
    name: 'Cliente 1',
    position: 'Dueño',
    company: 'Empresa 1',
    initials: 'RS',
    rating: 5,
    verified: true,
    type: 'Cliente desde 2019',
    industry: 'Tecnología',
    date: '2024-01-15'
  },
  {
    text: 'Llevamos 5 años trabajando con ellos y nunca hemos tenido problemas con la DIAN. Su servicio es confiable y siempre están disponibles.',
    name: 'Cliente 2',
    position: 'Gerente Financiera',
    company: 'Distribuidora Comercial',
    initials: 'AG',
    rating: 5,
    verified: true,
    type: 'Cliente desde 2018',
    industry: 'Comercio',
    date: '2024-02-20'
  },
  {
    text: 'La implementación de su sistema de contabilidad electrónica fue impecable. Nos asesoraron en cada paso del proceso.',
    name: 'Cliente 3',
    position: 'Dueño',
    company: 'Empresa 3',
    initials: 'CM',
    rating: 5,
    verified: true,
    type: 'Cliente desde 2020',
    industry: 'Ferretería',
    date: '2024-03-10'
  },
  {
    text: 'Su equipo nos ayudó a estructurar mejor nuestros estados financieros y tomar decisiones que mejoraron nuestro flujo de caja.',
    name: 'Cliente 4',
    position: 'CFO',
    company: 'Compañía X',
    initials: 'LM',
    rating: 5,
    verified: false,
    type: 'Cliente desde 2021',
    industry: 'Servicios',
    date: '2024-04-05'
  },
  {
    text: 'Excelente atención y resultados medibles en el corto plazo. Recomendados para PYMES que buscan orden y crecimiento financiero.',
    name: 'Cliente 5',
    position: 'Gerente',
    company: 'Empresa Y',
    initials: 'PR',
    rating: 5,
    verified: false,
    type: 'Cliente desde 2022',
    industry: 'Retail',
    date: '2024-05-12'
  },
  {
    text: 'Nos acompañaron en el proceso de constitución y en la implementación de un software contable que nos ahorra tiempo cada mes.',
    name: 'Cliente 6',
    position: 'Administrador',
    company: 'Empresa Z',
    initials: 'AR',
    rating: 5,
    verified: true,
    type: 'Cliente desde 2019',
    industry: 'Manufactura',
    date: '2024-06-18'
  }
]
</script>

<style scoped>
.container { max-width: 1200px; }
</style>
