<!-- components/ServiceCard.vue -->
<template>
  <div class="group relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-[#022859]/10 hover:border-[#00439D]/30" v-bind="$attrs">
    <!-- Fondo decorativo sutil -->
    <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#B88E41]/5 to-transparent rounded-bl-full"></div>
    
    <!-- Ícono mejorado -->
    <div class="relative z-10 mb-6">
      <div class="w-16 h-16 bg-gradient-to-br from-[#001D3C] to-[#022859] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
        <span class="text-2xl text-white">{{ icon }}</span>
      </div>
    </div>
    
    <!-- Contenido -->
    <div class="relative z-10">
      <h3 class="text-xl font-bold text-[#001D3C] mb-4 group-hover:text-[#00439D] transition-colors duration-200">
        {{ title }}
        <div class="w-12 h-0.5 bg-gradient-to-r from-[#B88E41] to-transparent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </h3>
      
      <p class="text-gray-600 mb-6 leading-relaxed">
        {{ description }}
      </p>
      
      <!-- Beneficios destacados -->
      <div v-if="features && features.length > 0" class="mb-6 space-y-2">
        <div v-for="(feature, index) in features.slice(0, 3)" :key="index" 
             class="flex items-center text-sm text-gray-700">
          <svg class="w-4 h-4 text-[#B88E41] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <span>{{ feature }}</span>
        </div>
      </div>
      
      <!-- Botón de acción mejorado -->
      <NuxtLink 
        :to="link || '/servicios'" 
        class="inline-flex items-center justify-between w-full px-4 py-3 bg-gradient-to-r from-[#00439D]/10 to-[#022859]/5 hover:from-[#00439D]/20 hover:to-[#022859]/10 text-[#001D3C] rounded-xl font-semibold transition-all duration-300 group-hover:shadow-md border border-[#00439D]/20"
      >
        <span>Ver detalles</span>
        <div class="flex items-center space-x-1">
          <span class="text-[#B88E41] group-hover:translate-x-1 transition-transform duration-300">→</span>
          <svg class="w-4 h-4 text-[#00439D] opacity-0 group-hover:opacity-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </NuxtLink>
    </div>
    
    <!-- Badge opcional -->
    <div v-if="badge" 
         class="absolute top-4 right-4 bg-gradient-to-r from-[#B88E41] to-[#D4AF37] text-white text-xs font-bold px-3 py-1 rounded-full">
      {{ badge }}
    </div>
    
    <!-- Efecto hover overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#00439D]/0 to-[#001D3C]/0 group-hover:from-[#00439D]/5 group-hover:to-[#001D3C]/5 transition-all duration-300 pointer-events-none"></div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  features: {
    type: Array,
    default: () => []
  },
  badge: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: '/servicios'
  }
})
</script>

<style scoped>
/* Efecto de elevación sutil al hover */
.group:hover {
  transform: translateY(-4px);
  transition: transform 0.3s ease;
}
</style>