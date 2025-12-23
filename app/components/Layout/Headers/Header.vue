<template>
  <header class="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
    <nav class="container mx-auto px-4 lg:px-8 py-3">
      <div class="flex justify-between items-center">
        <!-- Logo Mejorado - Sin fondo amarillo -->
        <NuxtLink to="/" class="flex items-center space-x-3 group" aria-label="Ir a inicio - ASCONFI JY">
          <!-- Contenedor del logo sin fondo -->
          <div class="flex items-center justify-center">
            <!-- Logo SVG agrandado -->
            <img 
              src="~/assets/logos/sevege.svg" 
              alt="Logo ASCONFI JY" 
              class="w-16 h-16 group-hover:scale-105 transition-all duration-300 ease-out"
              aria-hidden="true"
            />
          </div>
          <div class="hidden sm:block">
            <!-- Texto en color oscuro para fondo blanco -->
            <h1 class="text-xl font-bold text-gray-900 tracking-tight transition-transform duration-300 group-hover:translate-x-1">
              Asconfi<span class="text-[#B88E41]">JY</span>
            </h1>
            <p class="text-xs text-gray-600 mt-0.5 opacity-95 group-hover:opacity-100 transition-opacity duration-300">
              Asesoría Contable & Financiera
            </p>
          </div>
        </NuxtLink>

        <!-- Navegación Desktop - Mejorada -->
        <div class="hidden lg:flex items-center space-x-1">
          <NuxtLink 
            to="/" 
            class="nav-link-desktop group"
            :class="{ 'active-nav': $route.path === '/' }"
          >
            Inicio
          </NuxtLink>
          <NuxtLink 
            to="/nosotros" 
            class="nav-link-desktop group"
            :class="{ 'active-nav': $route.path.includes('/nosotros') }"
          >
            Nosotros
          </NuxtLink>
          <NuxtLink 
            to="/servicios" 
            class="nav-link-desktop group"
            :class="{ 'active-nav': $route.path.includes('/servicios') }"
          >
            Servicios
          </NuxtLink>
          <NuxtLink 
            to="/blog" 
            class="nav-link-desktop group"
            :class="{ 'active-nav': $route.path.includes('/blog') }"
          >
            Blog
          </NuxtLink>
          <NuxtLink 
            to="/contacto" 
            class="nav-link-desktop group"
            :class="{ 'active-nav': $route.path.includes('/contacto') }"
          >
            Contacto
          </NuxtLink>
        </div>

        <!-- CTA y Menú Móvil - Mejorado -->
        <div class="flex items-center space-x-4">
          <!-- Teléfono Desktop -->
          <a 
            href="tel:+573024662228" 
            class="hidden lg:flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-all duration-300 ease-out hover:scale-105 group"
            aria-label="Llamar al teléfono: 302 466 2228"
          >
            <div class="w-8 h-8 bg-[#B88E41] rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p class="text-xs text-gray-600 transition-all duration-300 group-hover:translate-y-[-2px]">Llámanos</p>
              <p class="text-gray-900 font-semibold text-sm transition-all duration-300 group-hover:translate-y-[2px]">302 466 2228</p>
            </div>
          </a>

          <!-- Botón CTA Mejorado -->
          <NuxtLink 
            to="/contacto" 
            class="hidden sm:flex items-center bg-gradient-to-r from-[#B88E41] to-[#D4AF37] text-white px-5 py-3 rounded-xl hover:shadow-lg hover:shadow-[#B88E41]/40 transition-all duration-300 ease-out font-semibold group hover:scale-105"
          >
            <span class="transition-transform duration-300 group-hover:translate-x-[-2px]">Consulta Gratis</span>
            <svg class="w-4 h-4 ml-2 transition-all duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>

          <!-- Botón Menú Móvil Mejorado -->
          <button 
            @click="toggleMenu" 
            class="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-200 ease-out active:scale-95"
            aria-label="Toggle navigation menu"
            :aria-expanded="menuOpen"
          >
            <svg class="w-6 h-6 text-gray-700 transition-transform duration-200" :class="{ 'rotate-180': menuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- MENÚ MÓVIL OPTIMIZADO -->
      <!-- Usamos :class en lugar de v-if para evitar re-renderizados pesados -->
      <div 
        ref="mobileMenuRef"
        class="lg:hidden overflow-hidden transition-all duration-300 ease-out"
        :class="{
          'max-h-0 opacity-0 invisible': !menuOpen,
          'max-h-[500px] opacity-100 visible mt-3 pt-4 pb-6 border-t border-gray-200': menuOpen
        }"
        :style="{ willChange: 'max-height, opacity' }"
      >
        <div class="flex flex-col space-y-1">
          <NuxtLink 
            v-for="link in mobileLinks"
            :key="link.to"
            :to="link.to" 
            class="mobile-nav-link group"
            :class="{ 
              'active-mobile-nav': 
                link.to === '/' ? $route.path === '/' : 
                $route.path.startsWith(link.to) 
            }"
            @click="closeMenu"
          >
            <component 
              :is="link.icon" 
              class="w-5 h-5 mr-3 transition-transform duration-200 group-hover:scale-110" 
              :style="{ willChange: 'transform' }"
            />
            <span class="transition-all duration-200 group-hover:translate-x-2" :style="{ willChange: 'transform' }">
              {{ link.label }}
            </span>
          </NuxtLink>
          
          <div class="pt-4 mt-2 border-t border-gray-200 space-y-3">
            <a 
              href="tel:+573024662228" 
              class="flex items-center justify-center bg-[#00439D] hover:bg-[#022859] text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 ease-out active:scale-95 group"
              @click="closeMenu"
              :style="{ willChange: 'transform' }"
            >
              <svg class="w-5 h-5 mr-2 transition-transform duration-200 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Llamar Ahora: 302 466 2228
            </a>
            <NuxtLink 
              to="/contacto" 
              class="flex items-center justify-center bg-gradient-to-r from-[#B88E41] to-[#D4AF37] text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#B88E41]/40 transition-all duration-200 ease-out active:scale-95 group"
              @click="closeMenu"
              :style="{ willChange: 'transform' }"
            >
              <span class="transition-all duration-200 group-hover:translate-x-[-2px]" :style="{ willChange: 'transform' }">
                Solicitar Consulta Gratis
              </span>
              <svg class="w-4 h-4 ml-2 transition-all duration-200 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)
const mobileMenuRef = ref(null)

// Optimización: Prevenir animaciones durante el resize
let resizeTimeout
const handleResize = () => {
  if (window.innerWidth >= 1024 && menuOpen.value) {
    menuOpen.value = false
  }
}

// Optimización: Debounce para resize
const debouncedResize = () => {
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(handleResize, 100)
}

onMounted(() => {
  window.addEventListener('resize', debouncedResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', debouncedResize)
  clearTimeout(resizeTimeout)
})

const toggleMenu = () => {
  // Solicitar el frame de animación para mejor rendimiento
  requestAnimationFrame(() => {
    menuOpen.value = !menuOpen.value
  })
}

const closeMenu = () => {
  requestAnimationFrame(() => {
    menuOpen.value = false
  })
}

// Cerrar menú cuando cambia la ruta (con requestAnimationFrame)
watch(() => route.path, () => {
  if (menuOpen.value) {
    requestAnimationFrame(() => {
      menuOpen.value = false
    })
  }
})

// Iconos optimizados - Componentes simples
const createIcon = (d) => ({
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" style="will-change: transform;">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="d" />
  </svg>`,
  props: ['d']
})

const mobileLinks = [
  { 
    to: '/', 
    label: 'Inicio', 
    icon: { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" style="will-change: transform;">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>` }
  },
  { 
    to: '/nosotros', 
    label: 'Nosotros', 
    icon: { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" style="will-change: transform;">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>` }
  },
  { 
    to: '/servicios', 
    label: 'Servicios', 
    icon: { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" style="will-change: transform;">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>` }
  },
  { 
    to: '/blog', 
    label: 'Blog', 
    icon: { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" style="will-change: transform;">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>` }
  },
  { 
    to: '/contacto', 
    label: 'Contacto', 
    icon: { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" style="will-change: transform;">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>` }
  }
]
</script>

<style scoped lang="postcss">
/* Optimización: Usar transform y opacity en lugar de height/max-height */
.mobile-nav-link {
  @apply flex items-center px-4 py-3 text-gray-700 rounded-lg font-medium relative overflow-hidden;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;
}

.mobile-nav-link:hover {
  @apply text-gray-900 bg-gray-100;
}

/* Línea inferior para enlaces móviles */
.mobile-nav-link::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#B88E41] to-[#D4AF37];
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  will-change: width;
}

.mobile-nav-link:hover::after {
  @apply w-full;
}

/* Estado activo móvil - Solo línea inferior */
.active-mobile-nav {
  @apply text-gray-900 bg-gray-100;
}

.active-mobile-nav::after {
  @apply w-full;
}

/* Optimización para animaciones */
.nav-link-desktop,
.mobile-nav-link,
button {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Mejorar performance en móviles */
@media (max-width: 1023px) {
  button[aria-label="Toggle navigation menu"] {
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }
  
  .mobile-nav-link {
    -webkit-tap-highlight-color: transparent;
    transform: translateZ(0);
  }
}

/* Focus visible para accesibilidad (WCAG) */
a:focus-visible,
button:focus-visible,
[role="button"]:focus-visible {
  outline: 2px solid #B88E41;
  outline-offset: 2px;
  border-radius: 0.375rem;
}

.nav-link-desktop {
  @apply px-4 py-2 text-gray-700 rounded-lg font-medium text-sm relative overflow-hidden;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link-desktop:hover {
  @apply text-gray-900 bg-gray-100;
}

.nav-link-desktop::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#B88E41] to-[#D4AF37];
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link-desktop:hover::after {
  @apply w-full;
}

.active-nav {
  @apply text-gray-900;
}

.active-nav::after {
  @apply w-full;
}
</style>