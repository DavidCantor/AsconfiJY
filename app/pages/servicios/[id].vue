<!-- pages/servicios/[id].vue -->
<template>
  <div v-if="service">
    <!-- Hero -->
    <section class="py-16" :style="{ backgroundColor: service.color + '10' }">
      <div class="container mx-auto px-4">
        <div class="flex items-center space-x-2 text-sm text-gray-600 mb-4">
          <NuxtLink to="/servicios" class="hover:text-blue-600">Servicios</NuxtLink>
          <span>›</span>
          <span>{{ service.title }}</span>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="text-5xl mb-6" :style="{ color: service.color }">{{ service.icon }}</div>
            <h1 class="text-4xl font-bold text-gray-800 mb-4">{{ service.title }}</h1>
            <p class="text-xl text-gray-600 mb-8">{{ service.description }}</p>
            
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/contacto" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Solicitar Información
              </NuxtLink>
              <a href="#" class="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                📥 Descargar Brochure
              </a>
            </div>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-lg">
            <div class="text-2xl font-bold mb-6 text-center" :style="{ color: service.color }">
              Beneficios Principales
            </div>
            <ul class="space-y-4">
              <li v-for="benefit in service.benefits" :key="benefit" class="flex items-start">
                <span class="text-green-500 text-xl mr-3">✓</span>
                <span class="text-gray-700">{{ benefit }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Descripción detallada -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">¿En qué consiste este servicio?</h2>
        
        <div class="prose max-w-4xl mx-auto">
          <p class="text-gray-600 text-lg mb-6">
            {{ service.detailedDescription }}
          </p>
          
          <div class="bg-blue-50 p-6 rounded-xl my-8">
            <h3 class="text-xl font-bold text-gray-800 mb-4">¿Para quién es ideal este servicio?</h3>
            <p class="text-gray-700">{{ service.targetAudience }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Proceso -->
    <section class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-800 mb-12 text-center">Nuestro Proceso</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="(step, index) in service.process" :key="index" class="text-center">
            <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                 :style="{ backgroundColor: service.color + '20', color: service.color }">
              <span class="text-2xl font-bold">{{ index + 1 }}</span>
            </div>
            <h3 class="font-bold text-gray-800 mb-2">{{ step.title }}</h3>
            <p class="text-gray-600 text-sm">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Preguntas frecuentes específicas -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-800 mb-12 text-center">Preguntas Frecuentes</h2>
        
        <div class="max-w-3xl mx-auto space-y-6">
          <div v-for="(faq, index) in service.faqs" :key="index" 
               class="border border-gray-200 rounded-lg overflow-hidden">
            <button
              @click="toggleFaq(index)"
              class="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span class="font-semibold text-gray-800 text-lg">{{ faq.question }}</span>
              <span class="text-gray-500 text-xl">{{ openFaqs.includes(index) ? '−' : '+' }}</span>
            </button>
            <div v-if="openFaqs.includes(index)" class="p-6 pt-0">
              <p class="text-gray-600">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16" :style="{ backgroundColor: service.color + '10' }">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">¿Listo para comenzar?</h2>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contáctanos hoy mismo para una consulta gratuita sobre este servicio.
        </p>
        <NuxtLink to="/contacto" class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
          Agendar Consulta Gratuita
        </NuxtLink>
      </div>
    </section>
  </div>
  
  <div v-else class="text-center py-20">
    <div class="text-5xl mb-6">🔍</div>
    <h1 class="text-3xl font-bold text-gray-800 mb-4">Servicio no encontrado</h1>
    <p class="text-gray-600 mb-8">El servicio que buscas no existe o ha sido movido.</p>
    <NuxtLink to="/servicios" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
      Ver todos los servicios
    </NuxtLink>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const openFaqs = ref([])

// Datos de ejemplo para servicios
const services = ref({
  'contabilidad-general': {
    title: 'Contabilidad General',
    description: 'Manejo completo y profesional de tu contabilidad con reportes precisos y oportunos.',
    icon: '📊',
    color: '#3B82F6',
    detailedDescription: 'Nuestro servicio de contabilidad general incluye el registro sistemático de todas las transacciones financieras de tu empresa, clasificación de cuentas, elaboración de estados financieros mensuales, conciliaciones bancarias y el cumplimiento de todas las obligaciones contables. Trabajamos con las mejores prácticas del sector y nos aseguramos de que tu información esté siempre actualizada y lista para la toma de decisiones.',
    targetAudience: 'Ideal para empresas de todos los tamaños que buscan externalizar su contabilidad de manera profesional, confiable y eficiente.',
    benefits: [
      'Reportes financieros mensuales oportunos',
      'Cumplimiento normativo garantizado',
      'Asesoría contable personalizada',
      'Tecnología de vanguardia',
      'Soporte continuo'
    ],
    process: [
      { title: 'Diagnóstico', description: 'Evaluamos tus necesidades contables actuales' },
      { title: 'Implementación', description: 'Configuramos tu sistema contable' },
      { title: 'Operación', description: 'Manejo diario de tu contabilidad' },
      { title: 'Reportes', description: 'Entrega de estados financieros periódicos' }
    ],
    faqs: [
      {
        question: '¿Qué documentos necesito proporcionar?',
        answer: 'Necesitamos facturas, comprobantes de gastos, estados de cuenta bancarios, nóminas y cualquier documento que respalde tus transacciones financieras.'
      },
      {
        question: '¿Con qué frecuencia recibo reportes?',
        answer: 'Entregamos estados financieros mensuales dentro de los primeros 5 días hábiles del mes siguiente.'
      },
      {
        question: '¿Manejan contabilidad electrónica?',
        answer: 'Sí, implementamos y mantenemos tu contabilidad electrónica de acuerdo a los requerimientos del SAT.'
      }
    ]
  },
  // ... agregar más servicios aquí
})

const service = computed(() => {
  return services.value[route.params.id] || null
})

const toggleFaq = (index) => {
  const currentIndex = openFaqs.value.indexOf(index)
  if (currentIndex > -1) {
    openFaqs.value.splice(currentIndex, 1)
  } else {
    openFaqs.value.push(index)
  }
}
</script>