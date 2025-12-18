<!-- pages/blog.vue -->
<template>
  <div class="overflow-hidden">
    <!-- Hero Mejorado -->
    <section class="relative overflow-hidden bg-gradient-to-br from-[#001D3C] via-[#022859] to-[#00439D] pt-32 pb-24">
      <!-- Elementos decorativos -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div class="absolute top-1/4 left-1/4 w-80 h-80 bg-[#B88E41] rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00439D] rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>
      
      <!-- Patrón de fondo sutil -->
      <div class="absolute inset-0" :style="patternStyle"></div>
      
      <div class="container relative z-10 mx-auto px-4 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <!-- Breadcrumb -->
          <div class="flex items-center text-sm text-white/80 mb-8">
            <NuxtLink to="/" class="hover:text-[#B88E41] transition-colors">Inicio</NuxtLink>
            <span class="mx-2">/</span>
            <span class="text-[#B88E41] font-medium">Blog & Recursos</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Blog & <span class="bg-gradient-to-r from-[#B88E41] to-[#D4AF37] bg-clip-text text-transparent">Recursos</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
            Artículos especializados, noticias fiscales y consejos prácticos sobre contabilidad, 
            finanzas y fiscalidad para el éxito de tu empresa.
          </p>
          
          <!-- Estadísticas del blog -->
          <div class="flex flex-wrap gap-6 mt-12">
            <div class="flex items-center">
              <div class="w-10 h-10 bg-[#B88E41]/20 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-[#B88E41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <div>
                <div class="text-white font-bold text-lg">{{ posts.length }}+</div>
                <div class="text-white/70 text-sm">Artículos Publicados</div>
              </div>
            </div>
            
            <div class="flex items-center">
              <div class="w-10 h-10 bg-[#B88E41]/20 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-[#B88E41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div class="text-white font-bold text-lg">Actualizado</div>
                <div class="text-white/70 text-sm">Semanalmente</div>
              </div>
            </div>
            
            <div class="flex items-center">
              <div class="w-10 h-10 bg-[#B88E41]/20 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-[#B88E41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <div class="text-white font-bold text-lg">Expertos</div>
                <div class="text-white/70 text-sm">Escritos por especialistas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filtros y búsqueda mejorados -->
    <section class="py-8 bg-gradient-to-b from-white to-gray-50 border-b border-[#022859]/10">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <!-- Búsqueda mejorada -->
          <div class="relative flex-grow max-w-2xl">
            <div class="relative">
              <div class="absolute left-4 top-1/2 transform -translate-y-1/2">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                v-model="search"
                type="text"
                placeholder="Buscar artículos por tema, palabra clave o autor..."
                class="w-full px-4 py-3 pl-12 pr-12 border border-[#022859]/20 rounded-xl focus:ring-2 focus:ring-[#00439D]/30 focus:border-[#00439D] outline-none transition-all duration-200 bg-white/50 hover:bg-white"
              >
              <button 
                v-if="search"
                @click="search = ''"
                class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          <!-- Filtros por categoría mejorados -->
          <div class="flex flex-wrap gap-2">
            <button
              v-for="category in categories"
              :key="category"
              @click="toggleCategory(category)"
              :class="[
                'px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2',
                selectedCategories.includes(category)
                  ? 'bg-gradient-to-r from-[#00439D] to-[#022859] text-white shadow-lg'
                  : 'bg-white text-[#001D3C] border border-[#022859]/20 hover:border-[#00439D]/40 hover:shadow-md'
              ]"
            >
              <span>{{ category }}</span>
              <span v-if="selectedCategories.includes(category)" class="text-xs">×</span>
            </button>
            
            <!-- Botón limpiar filtros -->
            <button
              v-if="selectedCategories.length > 0 || search"
              @click="clearFilters"
              class="px-4 py-2.5 rounded-xl text-sm font-medium text-[#B88E41] hover:text-[#D4AF37] transition-colors border border-[#B88E41]/20 hover:border-[#B88E41]/40"
            >
              Limpiar filtros
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Contenido principal -->
    <div class="container mx-auto px-4 lg:px-8 py-12">
      <div class="grid lg:grid-cols-3 gap-12">
        <!-- Artículos principales -->
        <div class="lg:col-span-2">
          <!-- Artículos destacados -->
          <div v-if="featuredPosts.length > 0" class="mb-16">
            <div class="flex items-center justify-between mb-8">
              <h2 class="text-2xl md:text-3xl font-bold text-[#001D3C] flex items-center">
                <div class="w-2 h-8 bg-[#B88E41] rounded-full mr-3"></div>
                Artículos Destacados
              </h2>
              <span class="text-sm text-[#00439D] font-medium bg-[#00439D]/10 px-3 py-1 rounded-full">
                {{ featuredPosts.length }} artículos
              </span>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <article
                v-for="post in featuredPosts"
                :key="post.id"
                class="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#022859]/10 hover:border-[#00439D]/30"
              >
                <!-- Categoría -->
                <div class="absolute top-4 left-4 z-10">
                  <span class="px-3 py-1.5 bg-gradient-to-r from-[#00439D] to-[#022859] text-white text-xs font-bold rounded-full shadow-md">
                    {{ post.category }}
                  </span>
                </div>
                
                <!-- Imagen destacada -->
                <div class="h-56 bg-gradient-to-br from-[#001D3C] to-[#022859] relative overflow-hidden">
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="text-center">
                      <div class="text-4xl text-white mb-3">{{ post.icon }}</div>
                      <p class="text-white/80 text-sm">Ilustración: {{ post.title }}</p>
                    </div>
                  </div>
                  <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <!-- Contenido -->
                <div class="p-6">
                  <div class="flex items-center space-x-4 mb-4">
                    <span class="text-sm text-gray-500 flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {{ post.date }}
                    </span>
                    <span class="text-sm text-gray-500 flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {{ post.readTime }}
                    </span>
                  </div>
                  
                  <h3 class="text-xl font-bold text-[#001D3C] mb-4 group-hover:text-[#00439D] transition-colors line-clamp-2">
                    <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
                  </h3>
                  
                  <p class="text-gray-600 mb-6 line-clamp-3">{{ post.excerpt }}</p>
                  
                  <div class="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div class="flex items-center space-x-3">
                      <div class="w-10 h-10 bg-gradient-to-br from-[#001D3C] to-[#022859] rounded-full flex items-center justify-center shadow-md">
                        <span class="text-white font-bold text-sm">{{ post.author.initials }}</span>
                      </div>
                      <div>
                        <p class="text-sm font-medium text-[#001D3C]">{{ post.author.name }}</p>
                        <p class="text-xs text-gray-500">{{ post.author.role }}</p>
                      </div>
                    </div>
                    
                    <NuxtLink 
                      :to="`/blog/${post.slug}`" 
                      class="text-[#00439D] hover:text-[#022859] font-semibold text-sm flex items-center group"
                    >
                      Leer artículo
                      <svg class="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </NuxtLink>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <!-- Todos los artículos -->
          <div>
            <div class="flex items-center justify-between mb-8">
              <h2 class="text-2xl md:text-3xl font-bold text-[#001D3C] flex items-center">
                <div class="w-2 h-8 bg-[#00439D] rounded-full mr-3"></div>
                Todos los Artículos
              </h2>
              <span class="text-sm text-gray-500">
                Mostrando {{ filteredPosts.length }} de {{ posts.length }} artículos
              </span>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article
                v-for="post in filteredPosts.filter(p => !p.featured)"
                :key="post.id"
                class="group relative overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#022859]/10 hover:border-[#00439D]/20"
              >
                <div class="p-6">
                  <!-- Categoría y fecha -->
                  <div class="flex items-center justify-between mb-4">
                    <span class="px-3 py-1 bg-[#00439D]/10 text-[#00439D] text-xs font-semibold rounded-full">
                      {{ post.category }}
                    </span>
                    <span class="text-xs text-gray-500">{{ post.date }}</span>
                  </div>
                  
                  <h3 class="text-lg font-bold text-[#001D3C] mb-3 group-hover:text-[#00439D] transition-colors line-clamp-2">
                    <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
                  </h3>
                  
                  <p class="text-gray-600 text-sm mb-6 line-clamp-3">{{ post.excerpt }}</p>
                  
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                      <div class="w-8 h-8 bg-gradient-to-br from-[#001D3C] to-[#022859] rounded-full flex items-center justify-center">
                        <span class="text-white text-xs font-bold">{{ post.author.initials }}</span>
                      </div>
                      <span class="text-xs text-gray-600">{{ post.author.name }}</span>
                    </div>
                    
                    <div class="flex items-center space-x-3">
                      <span class="text-xs text-gray-500 flex items-center">
                        <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {{ post.readTime }}
                      </span>
                      <NuxtLink 
                        :to="`/blog/${post.slug}`" 
                        class="text-[#B88E41] hover:text-[#D4AF37] text-xs font-semibold"
                      >
                        Leer
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            
            <!-- Mensaje si no hay resultados -->
            <div v-if="filteredPosts.length === 0" class="text-center py-16">
              <div class="w-20 h-20 bg-gradient-to-br from-[#001D3C]/10 to-[#022859]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg class="w-10 h-10 text-[#00439D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-[#001D3C] mb-3">No se encontraron artículos</h3>
              <p class="text-gray-600 mb-6 max-w-md mx-auto">
                No hay artículos que coincidan con tu búsqueda. Intenta con otros términos o categorías.
              </p>
              <button
                @click="clearFilters"
                class="px-6 py-3 bg-gradient-to-r from-[#00439D] to-[#022859] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Limpiar filtros y ver todos
              </button>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <!-- Newsletter Sidebar -->
          <div class="sticky top-8 space-y-8">
            <!-- Newsletter -->
            <div class="bg-gradient-to-br from-[#001D3C] to-[#022859] rounded-2xl p-8 text-white">
              <div class="w-14 h-14 bg-gradient-to-br from-[#B88E41] to-[#D4AF37] rounded-xl flex items-center justify-center mb-6">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h3 class="text-xl font-bold mb-4">Suscríbete al Newsletter</h3>
              <p class="text-gray-300 text-sm mb-6">
                Recibe las últimas noticias fiscales, consejos financieros y actualizaciones directamente en tu correo.
              </p>
              
              <form @submit.prevent="subscribeNewsletter" class="space-y-4">
                <input
                  v-model="newsletterEmail"
                  type="email"
                  placeholder="Tu correo electrónico"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B88E41] focus:border-transparent"
                >
                <button
                  type="submit"
                  class="w-full bg-gradient-to-r from-[#B88E41] to-[#D4AF37] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#B88E41]/30 transition-all duration-300"
                >
                  Suscribirse Gratis
                </button>
              </form>
              
              <p class="text-gray-300 text-xs mt-4">
                Solo contenido relevante. Cancela cuando quieras.
              </p>
            </div>

            <!-- Categorías -->
            <div class="bg-white rounded-2xl shadow-lg border border-[#022859]/10 p-6">
              <h3 class="text-lg font-bold text-[#001D3C] mb-6 flex items-center">
                <div class="w-2 h-2 bg-[#B88E41] rounded-full mr-2"></div>
                Categorías
              </h3>
              
              <div class="space-y-3">
                <button
                  v-for="category in categories"
                  :key="category"
                  @click="toggleCategory(category)"
                  :class="[
                    'flex items-center justify-between w-full p-3 rounded-xl transition-all duration-200',
                    selectedCategories.includes(category)
                      ? 'bg-gradient-to-r from-[#00439D]/10 to-[#022859]/5 border border-[#00439D]/20'
                      : 'hover:bg-gray-50'
                  ]"
                >
                  <span :class="[
                    'font-medium',
                    selectedCategories.includes(category) ? 'text-[#00439D]' : 'text-gray-700'
                  ]">
                    {{ category }}
                  </span>
                  <span :class="[
                    'text-xs px-2 py-1 rounded-full',
                    selectedCategories.includes(category)
                      ? 'bg-[#00439D] text-white'
                      : 'bg-gray-100 text-gray-600'
                  ]">
                    {{ getCategoryCount(category) }}
                  </span>
                </button>
              </div>
            </div>

            <!-- Artículos Populares -->
            <div class="bg-white rounded-2xl shadow-lg border border-[#022859]/10 p-6">
              <h3 class="text-lg font-bold text-[#001D3C] mb-6 flex items-center">
                <div class="w-2 h-2 bg-[#B88E41] rounded-full mr-2"></div>
                Artículos Populares
              </h3>
              
              <div class="space-y-4">
                <div
                  v-for="post in popularPosts"
                  :key="post.id"
                  class="group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div class="w-12 h-12 bg-gradient-to-br from-[#001D3C] to-[#022859] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-white text-lg">{{ post.icon }}</span>
                  </div>
                  
                  <div class="flex-1 min-w-0">
                    <h4 class="text-sm font-semibold text-[#001D3C] group-hover:text-[#00439D] transition-colors line-clamp-2 mb-1">
                      <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
                    </h4>
                    <p class="text-xs text-gray-500">{{ post.date }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- CTA Sidebar -->
            <div class="bg-gradient-to-br from-[#B88E41]/10 to-[#D4AF37]/5 rounded-2xl border border-[#B88E41]/20 p-6">
              <h3 class="text-lg font-bold text-[#001D3C] mb-4">¿Necesitas asesoría personalizada?</h3>
              <p class="text-gray-600 text-sm mb-6">
                Agenda una consulta gratuita con nuestros expertos para resolver tus dudas específicas.
              </p>
              
              <NuxtLink 
                to="/contacto"
                class="block w-full bg-gradient-to-r from-[#00439D] to-[#022859] text-white text-center py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Agendar Consulta
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const search = ref('')
const selectedCategories = ref([])
const newsletterEmail = ref('')

const categories = ['Fiscal', 'Contabilidad', 'Finanzas', 'Nómina', 'Empresas', 'Noticias']
// Meta SEO para la página de servicios
definePageMeta({
  title: 'Blog'
})

useHead({
  title: 'Blog',
  meta: [
    {
      name: 'description',
      content: 'Ofrecemos soluciones contables, fiscales y financieras a medida. Contabilidad, asesoría fiscal, nómina y consultoría financiera para optimizar tu negocio.'
    },
    {
      name: 'keywords',
      content: 'servicios contables, asesoría fiscal, consultoría financiera, nómina, contabilidad'
    },
    { property: 'og:title', content: 'Servicios - ASCONFI JY' },
    { property: 'og:description', content: 'Soluciones contables y financieras para empresas: contabilidad, fiscalidad, nómina y consultoría.' },
    { property: 'og:type', content: 'website' }
  ],
  link: [
    { rel: 'canonical', href: 'https://asconfijy.com/servicios' }
  ]
})

// Cargar posts desde archivo JSON centralizado
import rawPosts from '../../content/posts.json'
const posts = ref(rawPosts)

// Patrón SVG
const patternStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
}

const toggleCategory = (category) => {
  const index = selectedCategories.value.indexOf(category)
  if (index > -1) {
    selectedCategories.value.splice(index, 1)
  } else {
    selectedCategories.value.push(category)
  }
}

const clearFilters = () => {
  search.value = ''
  selectedCategories.value = []
}

const getCategoryCount = (category) => {
  return posts.value.filter(post => post.category === category).length
}

const filteredPosts = computed(() => {
  return posts.value.filter(post => {
    // Filtrar por categorías
    if (selectedCategories.value.length > 0 && !selectedCategories.value.includes(post.category)) {
      return false
    }
    
    // Filtrar por búsqueda
    if (search.value) {
      const searchLower = search.value.toLowerCase()
      return (
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.category.toLowerCase().includes(searchLower) ||
        post.author.name.toLowerCase().includes(searchLower)
      )
    }
    
    return true
  })
})

const featuredPosts = computed(() => {
  return filteredPosts.value.filter(post => post.featured)
})

const popularPosts = computed(() => {
  return posts.value.filter(post => post.popular).slice(0, 4)
})

const subscribeNewsletter = () => {
  if (newsletterEmail.value) {
    alert(`¡Gracias por suscribirte con: ${newsletterEmail.value}! Te hemos enviado un correo de confirmación.`)
    newsletterEmail.value = ''
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>