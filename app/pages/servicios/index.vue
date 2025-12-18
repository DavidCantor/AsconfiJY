<!-- pages/servicios/index.vue -->
<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4">Nuestros Servicios</h1>
        <p class="text-xl max-w-3xl">
          Ofrecemos una gama completa de servicios contables y financieros para empresas de todos los tamaños.
        </p>
      </div>
    </section>

    <!-- Servicios -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <!-- Contabilidad -->
        <div id="contable" class="mb-16">
          <h2 class="text-2xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-blue-600 inline-block">
            📊 Servicios Contables
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div v-for="service in contabilidad" :key="service.title" class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 class="text-lg font-semibold mb-2">{{ service.title }}</h3>
              <p class="text-gray-600">{{ service.description }}</p>
            </div>
          </div>
        </div>

        <!-- Fiscal -->
        <div id="fiscal" class="mb-16">
          <h2 class="text-2xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-blue-600 inline-block">
            ⚖️ Servicios Fiscales
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div v-for="service in fiscal" :key="service.title" class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 class="text-lg font-semibold mb-2">{{ service.title }}</h3>
              <p class="text-gray-600">{{ service.description }}</p>
            </div>
          </div>
        </div>

        <!-- Financiero -->
        <div id="financiero" class="mb-16">
          <h2 class="text-2xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-blue-600 inline-block">
            📈 Servicios Financieros
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div v-for="service in financiero" :key="service.title" class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 class="text-lg font-semibold mb-2">{{ service.title }}</h3>
              <p class="text-gray-600">{{ service.description }}</p>
            </div>
          </div>
        </div>

        <!-- Más servicios -->
        <div class="bg-blue-50 p-8 rounded-xl">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">¿Necesitas un servicio específico?</h2>
          <p class="text-gray-600 mb-6">Contamos con servicios adicionales de nómina, auditoría, consultoría empresarial y más.</p>
          <NuxtLink to="/contacto" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block">
            Consulta Personalizada
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Datos de ejemplo - luego puedes reemplazar con datos reales
const contabilidad = [
  { title: 'Contabilidad General', description: 'Registro y clasificación de todas tus operaciones comerciales.' },
  { title: 'Estados Financieros', description: 'Elaboración de balance general, estado de resultados y más.' },
  { title: 'Contabilidad de Costos', description: 'Análisis y control de costos para mejorar rentabilidad.' },
  { title: 'Auditoría Contable', description: 'Revisión y verificación de estados financieros.' },
  { title: 'Cierre Contable Anual', description: 'Preparación y presentación de cierre fiscal anual.' },
  { title: 'Contabilidad Electrónica', description: 'Implementación y manejo de contabilidad electrónica.' }
]

const fiscal = [
  { title: 'Declaraciones Fiscales', description: 'Presentación mensual y anual de impuestos federales y locales.' },
  { title: 'Planeación Fiscal', description: 'Estrategias para optimizar tu carga tributaria legalmente.' },
  { title: 'Defensa Fiscal', description: 'Representación ante autoridades fiscales en revisiones.' },
  { title: 'Régimen de Incorporación', description: 'Asesoría para personas físicas con actividad empresarial.' },
  { title: 'Facturación Electrónica', description: 'Configuración y soporte para facturación electrónica.' },
  { title: 'Obligaciones Fiscales', description: 'Cumplimiento de todas las obligaciones fiscales vigentes.' }
]

const financiero = [
  { title: 'Análisis Financiero', description: 'Diagnóstico de la situación financiera de tu empresa.' },
  { title: 'Planeación Financiera', description: 'Estrategias para el crecimiento y sostenibilidad.' },
  { title: 'Presupuestos', description: 'Elaboración y seguimiento de presupuestos anuales.' },
  { title: 'Flujo de Efectivo', description: 'Control y proyección de tesorería.' },
  { title: 'Evaluación de Proyectos', description: 'Análisis de viabilidad de proyectos de inversión.' },
  { title: 'Reestructuración Financiera', description: 'Asesoría para mejorar la estructura financiera.' }
]
</script>