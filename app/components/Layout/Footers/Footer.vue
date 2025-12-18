<!-- components/Footer.vue -->
<template>
  <footer class="bg-gradient-to-b from-[#001D3C] to-[#000D20] text-white pt-16 pb-8 border-t border-[#022859]/30">
    <!-- Wave separator -->
    <div class="w-full overflow-hidden mb-12">
      <svg class="w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" class="text-[#022859]/20"></path>
      </svg>
    </div>

    <div class="container mx-auto px-4 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        <!-- Logo y descripción mejorado -->
        <div class="lg:pr-8">
          <div class="flex items-start space-x-3 mb-6 group">
            <div class="w-14 h-14 bg-gradient-to-br from-[#B88E41] to-[#D4AF37] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
              <span class="text-white font-bold text-2xl">AJ</span>
            </div>
            <div>
              <h2 class="text-2xl font-bold bg-gradient-to-r from-white to-[#B88E41] bg-clip-text text-transparent">
                Asconfi<span class="text-[#B88E41]">JY</span>
              </h2>
              <p class="text-sm text-gray-300 mt-1">Asesoría Contable & Financiera</p>
            </div>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            Brindamos soluciones contables y financieras integrales para empresas y particulares, garantizando exactitud, confianza y crecimiento sostenible.
          </p>
          
          <!-- Newsletter -->
          <div class="bg-[#022859]/30 p-4 rounded-xl border border-[#00439D]/20">
            <p class="text-sm text-white mb-3 font-medium">📩 Suscríbete a nuestro boletín</p>
            <div class="flex">
              <input 
                type="email" 
                placeholder="Tu correo" 
                class="flex-grow px-3 py-2 bg-[#001D3C] border border-[#00439D]/30 rounded-l-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#B88E41]"
              >
              <button class="bg-gradient-to-r from-[#B88E41] to-[#D4AF37] text-white px-4 py-2 rounded-r-lg text-sm font-medium hover:opacity-90 transition-opacity">
                →
              </button>
            </div>
          </div>
        </div>

        <!-- Servicios rápidos mejorado -->
        <div>
          <h3 class="text-lg font-bold mb-6 pb-3 border-b border-[#00439D]/30 text-white flex items-center">
            <div class="w-2 h-2 bg-[#B88E41] rounded-full mr-2"></div>
            Servicios
          </h3>
          <ul class="space-y-3">
            <li>
              <a href="/servicios#contable" class="text-gray-400 hover:text-white group flex items-center transition-all duration-200 hover:translate-x-1">
                <div class="w-1.5 h-1.5 bg-[#00439D] rounded-full mr-3 group-hover:bg-[#B88E41] transition-colors"></div>
                Contabilidad Integral
              </a>
            </li>
            <li>
              <a href="/servicios#fiscal" class="text-gray-400 hover:text-white group flex items-center transition-all duration-200 hover:translate-x-1">
                <div class="w-1.5 h-1.5 bg-[#00439D] rounded-full mr-3 group-hover:bg-[#B88E41] transition-colors"></div>
                Asesoría Fiscal
              </a>
            </li>
            <li>
              <a href="/servicios#financiero" class="text-gray-400 hover:text-white group flex items-center transition-all duration-200 hover:translate-x-1">
                <div class="w-1.5 h-1.5 bg-[#00439D] rounded-full mr-3 group-hover:bg-[#B88E41] transition-colors"></div>
                Consultoría Financiera
              </a>
            </li>
            <li>
              <a href="/servicios#nomina" class="text-gray-400 hover:text-white group flex items-center transition-all duration-200 hover:translate-x-1">
                <div class="w-1.5 h-1.5 bg-[#00439D] rounded-full mr-3 group-hover:bg-[#B88E41] transition-colors"></div>
                Nómina
              </a>
            </li>
            <li>
              <a href="/servicios#empresas" class="text-gray-400 hover:text-white group flex items-center transition-all duration-200 hover:translate-x-1">
                <div class="w-1.5 h-1.5 bg-[#00439D] rounded-full mr-3 group-hover:bg-[#B88E41] transition-colors"></div>
                Servicios Empresariales
              </a>
            </li>
          </ul>
        </div>

        <!-- Enlaces rápidos mejorado -->
        <div>
          <h3 class="text-lg font-bold mb-6 pb-3 border-b border-[#00439D]/30 text-white flex items-center">
            <div class="w-2 h-2 bg-[#B88E41] rounded-full mr-2"></div>
            Enlaces Rápidos
          </h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/nosotros" class="text-gray-400 hover:text-white group flex items-center transition-all duration-200 hover:translate-x-1">
                <svg class="w-4 h-4 mr-3 text-[#00439D] group-hover:text-[#B88E41] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Sobre Nosotros
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/servicios" class="text-gray-400 hover:text-white group flex items-center transition-all duration-200 hover:translate-x-1">
                <svg class="w-4 h-4 mr-3 text-[#00439D] group-hover:text-[#B88E41] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Todos los Servicios
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog" class="text-gray-400 hover:text-white group flex items-center transition-all duration-200 hover:translate-x-1">
                <svg class="w-4 h-4 mr-3 text-[#00439D] group-hover:text-[#B88E41] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                Blog y Recursos
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contacto" class="text-gray-400 hover:text-white group flex items-center transition-all duration-200 hover:translate-x-1">
                <svg class="w-4 h-4 mr-3 text-[#00439D] group-hover:text-[#B88E41] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contacto
              </NuxtLink>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white group flex items-center transition-all duration-200 hover:translate-x-1">
                <svg class="w-4 h-4 mr-3 text-[#00439D] group-hover:text-[#B88E41] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Política de Privacidad
              </a>
            </li>
          </ul>
        </div>

        <!-- Contacto mejorado -->
        <div>
          <h3 class="text-lg font-bold mb-6 pb-3 border-b border-[#00439D]/30 text-white flex items-center">
            <div class="w-2 h-2 bg-[#B88E41] rounded-full mr-2"></div>
            Contacto
          </h3>
          <ul class="space-y-4">
            <li class="flex items-start group">
              <div class="w-10 h-10 bg-[#022859] rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#B88E41] transition-colors duration-200 flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-400">Dirección</p>
                <p class="text-white text-sm">Villa Marcela, Cra. 10a #10-05 piso 2, Mosquera, Cundinamarca</p>
              </div>
            </li>
            
            <li class="flex items-start group">
              <div class="w-10 h-10 bg-[#022859] rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#B88E41] transition-colors duration-200 flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-400">Teléfono</p>
                <a href="tel:+573024662228" class="text-white text-sm hover:text-[#B88E41] transition-colors">302 466 2228</a>
              </div>
            </li>
            
            <li class="flex items-start group">
              <div class="w-10 h-10 bg-[#022859] rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#B88E41] transition-colors duration-200 flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-400">Email</p>
                <a href="mailto:info@ascofijy.com" class="text-white text-sm hover:text-[#B88E41] transition-colors break-all">info@ascofijy.com</a>
              </div>
            </li>
          </ul>
          
          <!-- Redes Sociales Mejoradas -->
          <div class="mt-8">
            <p class="text-sm text-gray-400 mb-4">Síguenos</p>
            <div class="flex space-x-3">
              <a href="#" class="w-10 h-10 bg-[#022859] hover:bg-[#B88E41] rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group">
                <span class="text-white group-hover:scale-110 transition-transform">f</span>
              </a>
              <a href="#" class="w-10 h-10 bg-[#022859] hover:bg-[#B88E41] rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group">
                <span class="text-white group-hover:scale-110 transition-transform">𝕏</span>
              </a>
              <a href="#" class="w-10 h-10 bg-[#022859] hover:bg-[#B88E41] rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group">
                <span class="text-white group-hover:scale-110 transition-transform">in</span>
              </a>
              <a href="#" class="w-10 h-10 bg-[#022859] hover:bg-[#B88E41] rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group">
                <span class="text-white group-hover:scale-110 transition-transform">ig</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Línea divisoria y copyright -->
      <div class="mt-16 pt-8 border-t border-[#022859]/50">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-gray-500 text-sm">
            <p>© 2025 ascofiJY Asesoría Contable & Financiera. Todos los derechos reservados.</p>
          </div>
          
          <div class="flex items-center space-x-6 text-gray-500 text-sm">
            <a href="#" class="hover:text-[#B88E41] transition-colors">Términos del Servicio</a>
            <a href="#" class="hover:text-[#B88E41] transition-colors">Política de Cookies</a>
            <a href="#" class="hover:text-[#B88E41] transition-colors">Mapa del Sitio</a>
          </div>
        </div>
        
        <!-- Sello de confianza -->
        <div class="mt-6 flex justify-center">
          <div class="inline-flex items-center space-x-4 px-4 py-2 bg-[#022859]/30 rounded-lg border border-[#00439D]/20">
            <div class="w-6 h-6 bg-[#B88E41] rounded-full flex items-center justify-center">
              <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
            <span class="text-xs text-gray-400">Asesoría Certificada • Contadores Profesionales • Confidencialidad Garantizada</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// El año se genera dinámicamente
</script>