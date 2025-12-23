<template>
  <header class="bg-white/95 backdrop-blur-md sticky top-0 z-[100] border-b border-gray-100">
    <nav class="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
      
      <NuxtLink to="/" class="flex items-center space-x-3 group" aria-label="Asconfi JY - Inicio">
        <div class="relative overflow-hidden">
          <img 
            src="~/assets/logos/sevege.svg" 
            alt="Logo" 
            class="w-12 h-12 lg:w-14 lg:h-14 "
          />
        </div>
        <div class="flex flex-col">
          <span class="text-xl lg:text-2xl font-bold text-gray-900 tracking-tight leading-none">
            Asconfi<span class="text-[#B88E41]">JY</span>
          </span>
          <span class="text-[10px] lg:text-xs uppercase tracking-widest text-gray-500 font-medium mt-1">
            Asesoría Contable y Financiera
          </span>
        </div>
      </NuxtLink>

      <div class="hidden lg:flex items-center space-x-8">
        <div class="flex items-center space-x-1">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.path"
            :to="item.path"
            class="px-3 py-2 text-sm font-semibold text-gray-600 hover:text-[#B88E41] transition-colors relative group"
            :class="{ 'text-[#B88E41]': $route.path === item.path }"
          >
            {{ item.name }}
            <span 
              class="absolute bottom-0 left-0 w-full h-0.5 bg-[#B88E41] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
              :class="{ 'scale-x-100': $route.path === item.path }"
            ></span>
          </NuxtLink>
        </div>

        <div class="flex items-center border-l border-gray-200 pl-8 space-x-6">
          <a href="tel:+573024662228" class="flex flex-col items-end group">
            <span class="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Llámanos hoy</span>
            <span class="text-sm font-bold text-gray-900 group-hover:text-[#B88E41] transition-colors">302 466 2228</span>
          </a>
          <NuxtLink 
            to="/contacto" 
            class="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#B88E41] transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-gray-200"
          >
            Consulta Gratis
          </NuxtLink>
        </div>
      </div>

      <button 
        @click="isMenuOpen = !isMenuOpen"
        class="lg:hidden relative z-[110] w-10 h-10 flex flex-col justify-center items-center group focus:outline-none"
        aria-label="Abrir menú"
      >
        <span 
          class="w-6 h-0.5 bg-gray-900 mb-1.5 transition-all duration-300"
          :class="{ 'rotate-45 translate-y-2': isMenuOpen }"
        ></span>
        <span 
          class="w-6 h-0.5 bg-gray-900 mb-1.5 transition-all duration-300"
          :class="{ 'opacity-0': isMenuOpen }"
        ></span>
        <span 
          class="w-6 h-0.5 bg-gray-900 transition-all duration-300"
          :class="{ '-rotate-45 -translate-y-2': isMenuOpen }"
        ></span>
      </button>

      <Transition name="fade">
        <div v-if="isMenuOpen" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] lg:hidden" @click="isMenuOpen = false"></div>
      </Transition>

      <Transition name="slide">
        <div v-if="isMenuOpen" class="fixed top-0 right-0 w-[80%] max-w-sm h-screen bg-white z-[105] shadow-2xl lg:hidden flex flex-col">
          <div class="p-8 pt-24 flex-1">
            <div class="flex flex-col space-y-6">
              <NuxtLink 
                v-for="item in menuItems" 
                :key="item.path"
                :to="item.path"
                @click="isMenuOpen = false"
                class="text-2xl font-bold text-gray-900 hover:text-[#B88E41] transition-colors flex justify-between items-center group"
              >
                {{ item.name }}
                <span class="opacity-0 group-hover:opacity-100 transition-opacity text-[#B88E41]">→</span>
              </NuxtLink>
            </div>
            
            <div class="mt-12 pt-8 border-t border-gray-100">
              <p class="text-sm text-gray-500 mb-4 font-medium italic">¿Necesitas ayuda inmediata?</p>
              <a href="tel:+573024662228" class="flex items-center text-[#B88E41] font-bold text-xl mb-6">
                <span class="mr-2">📞</span> 302 466 2228
              </a>
              <NuxtLink 
                to="/contacto"
                @click="isMenuOpen = false"
                class="block w-full text-center bg-[#B88E41] text-white py-4 rounded-xl font-bold shadow-xl shadow-[#B88E41]/20"
              >
                Solicitar Consulta
              </NuxtLink>
            </div>
          </div>
        </div>
      </Transition>

    </nav>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const isMenuOpen = ref(false)
const route = useRoute()

const menuItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contacto', path: '/contacto' },
]

// Cerrar menú al cambiar de ruta
watch(() => route.path, () => {
  isMenuOpen.value = false
})

// Bloquear scroll cuando el menú está abierto
watch(isMenuOpen, (val) => {
  if (process.client) {
    document.body.style.overflow = val ? 'hidden' : ''
  }
})
</script>

<style scoped>
/* Transición de Fondo */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Transición del Menú Lateral */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}

/* Efecto sutil para el logo */
.tracking-tight {
  letter-spacing: -0.025em;
}
</style>