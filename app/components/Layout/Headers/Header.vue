<template>
  <header
    class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm"
  >
    <nav
      class="container mx-auto px-4 lg:px-8 h-16 lg:h-20 flex items-center justify-between"
      aria-label="Navegación principal"
    >
      <NuxtLink
        to="/"
        class="flex items-center gap-2 lg:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88E41] rounded-lg"
      >
        <img
          src="~/assets/logos/sevege.svg"
          alt="Logo Asconfi JY"
          class="w-8 h-8 lg:w-12 lg:h-12 object-contain"
        />
        <div class="leading-tight">
          <p class="text-base lg:text-xl font-bold">
            Asconfi<span class="text-[#B88E41]">JY</span>
          </p>
          <p class="text-[8px] lg:text-[10px] uppercase tracking-[0.15em] text-gray-500 font-bold">
            Asesoría Contable
          </p>
        </div>
      </NuxtLink>

      <div class="hidden lg:flex items-center gap-10">
        <ul class="flex items-center gap-2">
          <li v-for="item in menuItems" :key="item.path">
            <NuxtLink
              :to="item.path"
              class="relative px-4 py-2 text-sm font-bold transition-colors duration-200"
              :class="[isActive(item.path) ? 'text-[#B88E41]' : 'text-gray-700 hover:text-[#B88E41]']"
            >
              {{ item.name }}
              <span
                class="absolute inset-x-4 bottom-0 h-0.5 bg-[#B88E41] transition-transform duration-300"
                :class="isActive(item.path) ? 'scale-x-100' : 'scale-x-0'"
              />
            </NuxtLink>
          </li>
        </ul>
        <div class="flex items-center gap-6 border-l border-gray-200 pl-6">
          <a href="tel:+573024662228" class="group text-right">
            <span class="block text-[10px] uppercase font-bold text-gray-400">Llámanos</span>
            <span class="font-extrabold text-gray-900 group-hover:text-[#B88E41]">302 466 2228</span>
          </a>
          <NuxtLink to="/contacto" class="bg-[#B88E41] text-white px-6 py-3 rounded-lg text-sm font-bold shadow-md hover:bg-[#9f7a38]">
            Consulta Gratis
          </NuxtLink>
        </div>
      </div>

      <button
        class="lg:hidden p-2 -mr-2 rounded-xl active:bg-gray-100 transition-colors"
        @click="toggleMenu"
        aria-label="Menú"
      >
        <div class="w-6 h-5 flex flex-col justify-between items-end">
          <span :class="['h-0.5 bg-gray-900 rounded-full transition-all duration-300', isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6']" />
          <span :class="['h-0.5 bg-gray-900 rounded-full transition-all duration-300', isMenuOpen ? 'opacity-0' : 'w-4']" />
          <span :class="['h-0.5 bg-gray-900 rounded-full transition-all duration-300', isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5']" />
        </div>
      </button>
    </nav>
  </header>

  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isMenuOpen" class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-40 lg:hidden" @click="closeMenu" />
    </Transition>

    <Transition name="slide">
      <aside
        v-if="isMenuOpen"
        class="fixed inset-y-0 right-0 z-50 w-[85%] max-w-[360px] bg-white shadow-2xl lg:hidden flex flex-col"
      >
        <div class="p-6 flex items-center justify-between border-b border-gray-50">
           <div class="flex items-center gap-2">
             <div class="w-8 h-8 bg-[#B88E41]/10 rounded-lg flex items-center justify-center">
               <img src="~/assets/logos/sevege.svg" class="w-5 h-5" alt="" />
             </div>
             <span class="font-bold text-gray-900">Menú</span>
           </div>
           <button @click="closeMenu" class="p-2 bg-gray-50 rounded-full text-gray-500">
             <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
           </button>
        </div>

        <nav class="flex-1 overflow-y-auto py-4 px-4">
          <ul class="space-y-1">
            <li v-for="item in menuItems" :key="item.path">
              <NuxtLink
                :to="item.path"
                @click="closeMenu"
                class="flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-200"
                :class="[isActive(item.path) ? 'bg-[#B88E41]/10 text-[#B88E41]' : 'text-gray-600 active:bg-gray-50']"
              >
                <span class="font-semibold text-base">{{ item.name }}</span>
                <svg v-if="isActive(item.path)" class="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="p-6 bg-gray-50 border-t border-gray-100">
          <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">¿Necesitas ayuda?</p>
          <div class="space-y-3">
            <a href="tel:+573024662228" class="flex items-center gap-4 p-3 bg-white border border-gray-200 rounded-xl shadow-sm">
              <div class="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke-width="2"/></svg>
              </div>
              <div>
                <p class="text-xs text-gray-500 font-medium">Llamada directa</p>
                <p class="font-bold text-gray-900">302 466 2228</p>
              </div>
            </a>
            <NuxtLink to="/contacto" @click="closeMenu" class="block w-full py-4 bg-[#B88E41] text-white text-center rounded-xl font-bold shadow-lg shadow-[#B88E41]/20 active:scale-[0.98] transition-transform">
              Solicitar Consulta Gratis
            </NuxtLink>
          </div>
        </div>
      </aside>
    </Transition>
  </Teleport>
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

const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)
const closeMenu = () => (isMenuOpen.value = false)

const isActive = (path) =>
  path === '/'
    ? route.path === '/'
    : route.path.startsWith(path)

const barClass = (index) => [
  'block w-6 h-0.5 bg-gray-900 transition',
  isMenuOpen.value &&
    (index === 1
      ? 'rotate-45 translate-y-1.5'
      : index === 2
      ? 'opacity-0'
      : '-rotate-45 -translate-y-1.5'),
]

watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
