<!-- pages/nosotros.vue -->
<template>
  <div class="overflow-hidden">
    <!-- Hero Mejorado -->
    <section class="relative overflow-hidden bg-gradient-to-br from-[#001D3C] via-[#022859] to-[#00439D] pt-32 pb-24">
      <!-- Elementos decorativos -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div class="absolute top-1/3 left-1/4 w-80 h-80 bg-[#B88E41] rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div class="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#00439D] rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>
      
      <!-- Patrón de fondo sutil -->
      <div class="absolute inset-0" :style="patternStyle"></div>
      
      <div class="container relative z-10 mx-auto px-4 lg:px-8">
        <div class="max-w-4xl">
          <!-- Breadcrumb -->
          <div class="flex items-center text-sm text-white/80 mb-8">
            <NuxtLink to="/" class="hover:text-[#B88E41] transition-colors">Inicio</NuxtLink>
            <span class="mx-2">/</span>
            <span class="text-[#B88E41] font-medium">Sobre Nosotros</span>
          </div>
          
          <div class="max-w-3xl">
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Conoce a
              <span class="bg-gradient-to-r from-[#B88E41] to-[#D4AF37] bg-clip-text text-transparent">AsconfiJY</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Más de 15 años brindando soluciones contables y financieras confiables, 
              combinando experiencia técnica con un trato personalizado y comprometido.
            </p>
            
            <!-- Estadísticas rápidas -->
            <div class="flex flex-wrap gap-6 mt-12">
              <div class="flex items-center">
                <div class="w-10 h-10 bg-[#B88E41]/20 rounded-lg flex items-center justify-center mr-3">
                  <svg class="w-5 h-5 text-[#B88E41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div class="text-white font-bold text-lg">15+</div>
                  <div class="text-white/70 text-sm">Años de Experiencia</div>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="w-10 h-10 bg-[#B88E41]/20 rounded-lg flex items-center justify-center mr-3">
                  <svg class="w-5 h-5 text-[#B88E41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div class="text-white font-bold text-lg">+000</div>
                  <div class="text-white/70 text-sm">Clientes Satisfechos</div>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="w-10 h-10 bg-[#B88E41]/20 rounded-lg flex items-center justify-center mr-3">
                  <svg class="w-5 h-5 text-[#B88E41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div class="text-white font-bold text-lg">100%</div>
                  <div class="text-white/70 text-sm">Profesionales Certificados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Historia Mejorada -->
    <section class="py-24 relative">
      <!-- Fondo decorativo -->
      <div class="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#001D3C]/5 to-transparent"></div>
      
      <div class="container relative z-10 mx-auto px-4 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="inline-flex items-center bg-[#022859]/10 px-4 py-2 rounded-full mb-6">
              <span class="text-[#00439D] font-semibold text-sm">NUESTRA HISTORIA</span>
            </div>
            
            <h2 class="text-3xl md:text-5xl font-bold text-[#001D3C] mb-8">
              Más de 15 años
              <span class="text-[#B88E41]">escribiendo historias</span>
              de éxito
            </h2>
            
            <div class="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Fundada en 2008, AsconfiJY nació con la visión clara de transformar la asesoría contable 
                tradicional en una experiencia de valor añadido, combinando <span class="text-[#001D3C] font-medium">experiencia técnica</span> 
                con un <span class="text-[#001D3C] font-medium">trato personalizado</span> y cercano.
              </p>
              <p>
                A lo largo de los años, hemos crecido <span class="text-[#001D3C] font-medium">junto a nuestros clientes</span>, adaptándonos 
                a los cambios normativos y tecnológicos, siempre manteniendo nuestro compromiso inquebrantable 
                con la excelencia y la innovación.
              </p>
              <p>
                Hoy en día, somos un <span class="text-[#001D3C] font-medium">referente en el sector</span>, reconocidos por nuestra integridad, 
                profesionalismo y por generar <span class="text-[#001D3C] font-medium">resultados tangibles</span> que impulsan el crecimiento 
                sostenible de las empresas que confían en nosotros.
              </p>
            </div>
            
            <!-- Timeline visual -->
            <div class="mt-12 p-6 bg-gradient-to-r from-[#00439D]/5 to-transparent rounded-2xl border border-[#00439D]/10">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-[#B88E41] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-[#001D3C]">Desde 2008</h4>
                  <p class="text-gray-600 text-sm">Acompañando el crecimiento empresarial</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Imagen del equipo -->
          <div class="relative">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl">
              <!-- Placeholder para imagen -->
              <div class="aspect-[4/3] bg-gradient-to-br from-[#001D3C] to-[#022859] flex items-center justify-center">
                <div class="text-center">
                  <div class="w-20 h-20 bg-gradient-to-br from-[#B88E41] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p class="text-white text-lg font-medium">Nuestro equipo de expertos</p>
                  <p class="text-gray-300 text-sm mt-2">Profesionales certificados trabajando por tu éxito</p>
                </div>
              </div>
            </div>
            
            <!-- Elementos decorativos -->
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-[#B88E41]/10 rounded-2xl -z-10"></div>
            <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-[#00439D]/10 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Misión, Visión, Valores Mejorados -->
    <section class="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center bg-[#022859]/10 px-4 py-2 rounded-full mb-6">
            <span class="text-[#00439D] font-semibold text-sm">NUESTRA FILOSOFÍA</span>
          </div>
          <h2 class="text-3xl md:text-5xl font-bold text-[#001D3C] mb-6">
            Los pilares que nos <span class="text-[#B88E41]">definen</span>
          </h2>
          <p class="text-gray-600 text-lg max-w-3xl mx-auto">
            Fundamentos que guían cada decisión y acción en nuestra firma
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Misión -->
          <div class="group relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-[#022859]/10 hover:border-[#00439D]/30">
            <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#B88E41]/5 to-transparent rounded-bl-full"></div>
            
            <div class="relative z-10">
              <div class="w-16 h-16 bg-gradient-to-br from-[#001D3C] to-[#022859] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span class="text-2xl text-white">🎯</span>
              </div>
              
              <h3 class="text-2xl font-bold text-[#001D3C] mb-4 group-hover:text-[#00439D] transition-colors">
                Misión
              </h3>
              
              <p class="text-gray-600 leading-relaxed">
                Brindar soluciones contables y financieras integrales que impulsen el crecimiento 
                sostenible de nuestros clientes, garantizando cumplimiento normativo y optimización 
                de recursos a través de un servicio personalizado y de excelencia.
              </p>
              
              <div class="mt-6 pt-6 border-t border-gray-200">
                <p class="text-sm text-gray-500">
                  <span class="text-[#B88E41] font-semibold">Nuestro compromiso:</span> Ser el soporte confiable que tu empresa necesita.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Visión -->
          <div class="group relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-[#022859]/10 hover:border-[#00439D]/30">
            <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#00439D]/5 to-transparent rounded-bl-full"></div>
            
            <div class="relative z-10">
              <div class="w-16 h-16 bg-gradient-to-br from-[#001D3C] to-[#022859] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span class="text-2xl text-white">👁️</span>
              </div>
              
              <h3 class="text-2xl font-bold text-[#001D3C] mb-4 group-hover:text-[#00439D] transition-colors">
                Visión
              </h3>
              
              <p class="text-gray-600 leading-relaxed">
                Ser la firma de asesoría contable y financiera líder en Colombia, reconocida por 
                nuestra innovación, confiabilidad y contribución al éxito empresarial de nuestros clientes.
              </p>
              
              <div class="mt-6 pt-6 border-t border-gray-200">
                <p class="text-sm text-gray-500">
                  <span class="text-[#B88E41] font-semibold">Nuestra aspiración:</span> Transformar la gestión financiera empresarial.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Valores -->
          <div class="group relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-[#022859]/10 hover:border-[#00439D]/30">
            <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#022859]/5 to-transparent rounded-bl-full"></div>
            
            <div class="relative z-10">
              <div class="w-16 h-16 bg-gradient-to-br from-[#001D3C] to-[#022859] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span class="text-2xl text-white">💎</span>
              </div>
              
              <h3 class="text-2xl font-bold text-[#001D3C] mb-4 group-hover:text-[#00439D] transition-colors">
                Valores
              </h3>
              
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="w-6 h-6 bg-[#B88E41]/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <div class="w-2 h-2 bg-[#B88E41] rounded-full"></div>
                  </div>
                  <div>
                    <h4 class="font-semibold text-[#001D3C] text-sm">Integridad</h4>
                    <p class="text-gray-600 text-sm">Actuamos con ética y transparencia absoluta</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="w-6 h-6 bg-[#B88E41]/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <div class="w-2 h-2 bg-[#B88E41] rounded-full"></div>
                  </div>
                  <div>
                    <h4 class="font-semibold text-[#001D3C] text-sm">Excelencia</h4>
                    <p class="text-gray-600 text-sm">Buscamos la máxima calidad en todo lo que hacemos</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="w-6 h-6 bg-[#B88E41]/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <div class="w-2 h-2 bg-[#B88E41] rounded-full"></div>
                  </div>
                  <div>
                    <h4 class="font-semibold text-[#001D3C] text-sm">Compromiso</h4>
                    <p class="text-gray-600 text-sm">Nos involucramos con el éxito de nuestros clientes</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="w-6 h-6 bg-[#B88E41]/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <div class="w-2 h-2 bg-[#B88E41] rounded-full"></div>
                  </div>
                  <div>
                    <h4 class="font-semibold text-[#001D3C] text-sm">Innovación</h4>
                    <p class="text-gray-600 text-sm">Adoptamos nuevas tecnologías y metodologías</p>
                  </div>
                </div>
              </div>
              
              <div class="mt-6 pt-6 border-t border-gray-200">
                <p class="text-sm text-gray-500">
                  <span class="text-[#B88E41] font-semibold">Nuestro principio:</span> Valores que no se negocian.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Equipo Mejorado -->
    <section class="py-24">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center bg-[#022859]/10 px-4 py-2 rounded-full mb-6">
            <span class="text-[#00439D] font-semibold text-sm">NUESTRO EQUIPO</span>
          </div>
          <h2 class="text-3xl md:text-5xl font-bold text-[#001D3C] mb-6">
            Expertos que <span class="text-[#B88E41]">impulsan</span> tu éxito
          </h2>
          <p class="text-gray-600 text-lg max-w-3xl mx-auto">
            Conoce al equipo de profesionales certificados que trabajan para optimizar tus finanzas
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Miembro 1 -->
          <div class="group text-center">
            <div class="relative mb-8 mx-auto w-48 h-48">
              <div class="absolute inset-0 bg-gradient-to-br from-[#B88E41] to-[#D4AF37] rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div class="relative w-44 h-44 bg-gradient-to-br from-[#001D3C] to-[#022859] rounded-full mx-auto flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div class="text-center">
                  <div class="text-4xl text-white mb-2">👔</div>
                  <p class="text-white/80 text-sm">CEO & Contador Público</p>
                </div>
              </div>
            </div>
            
            <h3 class="text-2xl font-bold text-[#001D3C] mb-2">Jose Luis Oñate Torres</h3>
            <p class="text-[#00439D] font-semibold mb-4">CEO & Contador Público Especializado</p>
            <p class="text-gray-600 mb-4">
              Más de 20 años de experiencia en contabilidad corporativa y asesoría estratégica empresarial.
            </p>
            
            <div class="flex justify-center space-x-3">
              <div class="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                <svg class="w-3 h-3 mr-1 text-[#B88E41]" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                CPA
              </div>
              <div class="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                <svg class="w-3 h-3 mr-1 text-[#B88E41]" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                +20 años
              </div>
            </div>
          </div>
          
          <!-- Miembro 2 -->
          <div class="group text-center">
            <div class="relative mb-8 mx-auto w-48 h-48">
              <div class="absolute inset-0 bg-gradient-to-br from-[#B88E41] to-[#D4AF37] rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div class="relative w-44 h-44 bg-gradient-to-br from-[#001D3C] to-[#022859] rounded-full mx-auto flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div class="text-center">
                  <div class="text-4xl text-white mb-2">⚖️</div>
                  <p class="text-white/80 text-sm">Directora Fiscal</p>
                </div>
              </div>
            </div>
            
            <h3 class="text-2xl font-bold text-[#001D3C] mb-2">Yuly Cala</h3>
            <p class="text-[#00439D] font-semibold mb-4">Cargo</p>
            <p class="text-gray-600 mb-4">
              Experiencia...
            </p>
            
            <div class="flex justify-center space-x-3">
              <div class="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                <svg class="w-3 h-3 mr-1 text-[#B88E41]" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Atributo 1
              </div>
              <div class="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                <svg class="w-3 h-3 mr-1 text-[#B88E41]" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Atributo 2
              </div>
            </div>
          </div>
          
          
        </div>
        
        <!-- CTA Equipo -->
        <div class="mt-16 text-center">
          <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
            Nuestro equipo multidisciplinario está listo para analizar tu situación y 
            diseñar la estrategia contable y financiera más adecuada para tu empresa.
          </p>
          
          <NuxtLink 
            to="/contacto" 
            class="group inline-flex items-center bg-gradient-to-r from-[#00439D] to-[#022859] hover:from-[#022859] hover:to-[#001D3C] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl"
          >
            <span>Contactar al equipo</span>
            <svg class="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { definePageMeta, useHead } from '#imports'

// Meta configuración
definePageMeta({
  title: 'Sobre Nosotros - ASCONFI JY | 15+ Años de Experiencia'
})

useHead({
  title: 'Sobre Nosotros - ASCONFI JY | 15+ Años de Experiencia',
  meta: [
    {
      name: 'description',
      content: 'Conoce ASCONFI JY: 15+ años brindando soluciones contables y financieras confiables. Nuestro equipo de expertos se dedica a tu éxito empresarial con integridad y excelencia.'
    },
    { property: 'og:title', content: 'Sobre Nosotros - ASCONFI JY' },
    { property: 'og:description', content: 'Firma de asesoría contable con experiencia, innovación y compromiso con el éxito de nuestros clientes.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:title', content: 'ASCONFI JY - Asesoría Contable Confiable' },
    { name: 'twitter:description', content: 'Conoce nuestra historia, misión, visión y valores' }
  ],
  link: [
    { rel: 'canonical', href: 'https://asconfijy.com/nosotros' }
  ]
})

// Patrón SVG corregido
const patternStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
}
</script>

<style scoped>
/* Animación para elementos decorativos */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

/* Efecto de elevación para cards */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}
</style>