<!-- components/Testimonial.vue -->
<template>
  <div class="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50/70 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-[#022859]/10 hover:border-[#00439D]/20">
    <!-- Elemento decorativo de fondo -->
    <div class="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-[#B88E41]/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    
    <!-- Comillas decorativas -->
    <div class="absolute -top-4 -left-4 text-[#001D3C]/10 text-7xl font-serif">"</div>
    
    <!-- Rating mejorado -->
    <div class="relative z-10 flex mb-6">
      <template v-for="i in 5" :key="i">
        <svg class="w-6 h-6" :class="i <= testimonial.rating ? 'text-[#B88E41]' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </template>
      <span v-if="testimonial.rating" class="ml-2 text-sm font-semibold text-[#001D3C]">
        {{ testimonial.rating }}/5
      </span>
    </div>
    
    <!-- Texto del testimonio mejorado -->
    <div class="relative z-10 mb-8">
      <p class="text-gray-700 text-lg leading-relaxed font-light italic pl-4 border-l-2 border-[#B88E41]">
        "{{ testimonial.text }}"
      </p>
    </div>
    
    <!-- Información del cliente mejorada -->
    <div class="relative z-10 flex items-center p-4 bg-gradient-to-r from-[#00439D]/5 to-transparent rounded-xl border border-[#022859]/10">
      <!-- Avatar -->
      <div class="relative mr-4">
        <div v-if="testimonial.avatar" class="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white shadow-lg">
          <img 
            :src="testimonial.avatar" 
            :alt="testimonial.name" 
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          >
        </div>
        <div v-else class="w-14 h-14 bg-gradient-to-br from-[#001D3C] to-[#00439D] rounded-full flex items-center justify-center shadow-lg ring-2 ring-white">
          <span class="text-white font-bold text-lg">{{ testimonial.initials || getInitials(testimonial.name) }}</span>
        </div>
        
        <!-- Verificación de cliente -->
        <div v-if="testimonial.verified" class="absolute -bottom-1 -right-1 w-6 h-6 bg-[#B88E41] rounded-full flex items-center justify-center border-2 border-white">
          <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
      
      <!-- Información del cliente -->
      <div class="flex-1">
        <div class="flex items-center gap-2 mb-1">
          <h4 class="font-bold text-[#001D3C] text-lg">{{ testimonial.name }}</h4>
          <span v-if="testimonial.type" class="text-xs font-semibold px-2 py-0.5 bg-[#022859]/10 text-[#00439D] rounded-full">
            {{ testimonial.type }}
          </span>
        </div>
        <p class="text-[#00439D] font-medium text-sm mb-1">{{ testimonial.position }}</p>
        <p class="text-gray-600 text-sm">{{ testimonial.company }}</p>
        
        <!-- Industria/sector -->
        <div v-if="testimonial.industry" class="mt-2">
          <span class="inline-flex items-center text-xs text-gray-500">
            <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            {{ testimonial.industry }}
          </span>
        </div>
      </div>
    </div>
    
    <!-- Fecha del testimonio -->
    <div v-if="testimonial.date" class="mt-4 text-right">
      <span class="text-xs text-gray-500">
        {{ formatDate(testimonial.date) }}
      </span>
    </div>
    
    <!-- Efecto hover overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-white/0 via-[#B88E41]/0 to-[#001D3C]/0 group-hover:from-white/0 group-hover:via-[#B88E41]/5 group-hover:to-[#001D3C]/5 transition-all duration-500 pointer-events-none"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  testimonial: {
    type: Object,
    required: true,
    default: () => ({
      text: '',
      name: '',
      position: '',
      company: '',
      initials: '',
      avatar: null,
      rating: 5,
      verified: false,
      type: '', // Ej: "Cliente desde 2020", "PYME", "Corporativo"
      industry: '', // Ej: "Manufactura", "Retail", "Tecnología"
      date: ''
    })
  }
})

// Función para obtener iniciales del nombre
const getInitials = (name) => {
  if (!name) return ''
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .substring(0, 2)
}

// Función para formatear fecha de manera determinista (evita dependencias de Intl)
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) return ''
  const months = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ]
  const month = months[date.getMonth()] || ''
  const year = date.getFullYear()
  return `${month} de ${year}`
}

// Computed para el rating por defecto
const testimonialRating = computed(() => {
  return props.testimonial.rating || 5
})
</script>

<style scoped>
/* Efecto sutil de elevación */
.group {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.group:hover {
  transform: translateY(-8px);
}

/* Efecto de aparición suave para el testimonio */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Aplicar animación si se quiere cuando el componente se monta */
:deep(.animate-on-scroll) {
  animation: fadeInUp 0.6s ease-out;
}
</style>