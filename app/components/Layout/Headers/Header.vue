<template>
  <header class="fixed top-0 left-0 w-full z-[100] bg-white border-b border-gray-100 shadow-sm">
    <nav class="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
      
      <NuxtLink to="/" class="flex items-center space-x-3 group z-[110]" aria-label="Asconfi JY - Inicio">
        <div class="relative flex-shrink-0">
          <img 
            src="~/assets/logos/sevege.svg" 
            alt="Logo" 
            class="w-10 h-10 lg:w-12 lg:h-12 object-contain"
          />
        </div>
        <div class="flex flex-col">
          <span class="text-lg lg:text-xl font-bold text-gray-900 leading-none">
            Asconfi<span class="text-[#B88E41]">JY</span>
          </span>
          <span class="text-[9px] lg:text-[10px] uppercase tracking-[0.15em] text-gray-500 font-semibold mt-1">
            Asesoría Contable
          </span>
        </div>
      </NuxtLink>

      <div class="hidden lg:flex items-center space-x-6">
        <div class="flex items-center space-x-1">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.path"
            :to="item.path"
            class="px-4 py-2 text-sm font-bold text-gray-600 hover:text-[#B88E41] transition-all relative group"
            :class="{ 'text-[#B88E41]': $route.path === item.path }"
          >
            {{ item.name }}
            <span 
              class="absolute bottom-1 left-4 right-4 h-0.5 bg-[#B88E41] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
              :class="{ 'scale-x-100': $route.path === item.path }"
            ></span>
          </NuxtLink>
        </div>

        <div class="flex items-center border-l border-gray-200 pl-6 space-x-6">
          <a href="tel:+573024662228" class="flex flex-col items-end group">
            <span class="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Llámanos</span>
            <span class="text-sm font-extrabold text-gray-900 group-hover:text-[#B88E41] transition-colors">302 466 2228</span>
          </a>
          <NuxtLink 
            to="/contacto" 
            class="bg-[#B88E41] text-white px-6 py-3 rounded-lg text-sm font-bold hover:bg-gray-900 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Consulta Gratis
          </NuxtLink>
        </div>
      </div>

      <button 
        @click="isMenuOpen = !isMenuOpen"
        class="lg:hidden relative z-[110] w-10 h-10 flex flex-col justify-center items-center rounded-full hover:bg-gray-50 transition-colors"
        aria-label="Menú"
      >
        <div class="w-6 h-5 relative flex flex-col justify-between">
          <span 
            class="w-full h-0.5 bg-gray-900 transition-all duration-300 origin-left"
            :class="{ 'rotate-[42deg] w-[28px]': isMenuOpen }"
          ></span>
          <span 
            class="w-full h-0.5 bg-gray-900 transition-all duration-300"
            :class="{ 'opacity-0 scale-0': isMenuOpen }"
          ></span>
          <span 
            class="w-full h-0.5 bg-gray-900 transition-all duration-300 origin-left"
            :class="{ '-rotate-[42deg] w-[28px]': isMenuOpen }"
          ></span>
        </div>
      </button>

      <Transition name="fade">
        <div 
          v-if="isMenuOpen" 
          class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-[101] lg:hidden"
          @click="isMenuOpen = false"
        ></div>
      </Transition>

      <Transition name="slide">
        <div 
          v-if="isMenuOpen" 
          class="fixed top-0 right-0 w-[85%] max-w-[320px] h-screen bg-white z-[105] lg:hidden shadow-2xl flex flex-col"
        >
          <div class="p-6 pt-24 overflow-y-auto flex-1">
            <nav class="flex flex-col space-y-2">
              <NuxtLink 
                v-for="item in menuItems" 
                :key="item.path"
                :to="item.path"
                @click="isMenuOpen = false"
                class="px-4 py-4 text-xl font-bold text-gray-800 border-b border-gray-50 flex justify-between items-center active:bg-gray-50 rounded-xl"
              >
                {{ item.name }}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#B88E41]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </NuxtLink>
            </nav>
            
            <div class="mt-10 p-6 bg-gray-50 rounded-2xl">
              <p class="text-xs text-gray-500 mb-2 font-bold uppercase tracking-widest">Contacto Directo</p>
              <a href="tel:+573024662228" class="text-[#B88E41] font-extrabold text-xl block mb-6 hover:underline">
                302 466 2228
              </a>
              <NuxtLink 
                to="/contacto"
                @click="isMenuOpen = false"
                class="block w-full text-center bg-gray-900 text-white py-4 rounded-xl font-bold shadow-lg"
              >
                Solicitar Consulta
              </NuxtLink>
            </div>
          </div>
        </div>
      </Transition>

    </nav>
  </header>
  <div class="h-20 w-full"></div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
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

// Bloquear scroll de manera segura
watch(isMenuOpen, (val) => {
  if (process.client) {
    document.body.style.overflow = val ? 'hidden' : ''
  }
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}
</style>