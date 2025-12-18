<!-- pages/contacto.vue -->
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
        <div class="max-w-4xl">
          <!-- Breadcrumb -->
          <div class="flex items-center text-sm text-white/80 mb-8">
            <NuxtLink to="/" class="hover:text-[#B88E41] transition-colors">Inicio</NuxtLink>
            <span class="mx-2">/</span>
            <span class="text-[#B88E41] font-medium">Contacto</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Contáctanos para
            <span class="bg-gradient-to-r from-[#B88E41] to-[#D4AF37] bg-clip-text text-transparent">tu Éxito Financiero</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
            Estamos aquí para resolver tus dudas y asesorarte. Agenda una consulta gratuita 
            y descubre cómo podemos optimizar tus finanzas empresariales.
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
                <div class="text-white font-bold text-lg">24h</div>
                <div class="text-white/70 text-sm">Respuesta garantizada</div>
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
                <div class="text-white/70 text-sm">Confidencialidad</div>
              </div>
            </div>
            
            <div class="flex items-center">
              <div class="w-10 h-10 bg-[#B88E41]/20 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-[#B88E41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div>
                <div class="text-white font-bold text-lg">Gratis</div>
                <div class="text-white/70 text-sm">Primera consulta</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Información de contacto y formulario mejorados -->
    <section class="py-24 relative">
      <!-- Fondo decorativo -->
      <div class="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#001D3C]/5 to-transparent"></div>
      
      <div class="container relative z-10 mx-auto px-4 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Información de contacto mejorada -->
          <div class="lg:col-span-1">
            <div class="sticky top-8 space-y-8">
              <!-- Título -->
              <div>
                <div class="inline-flex items-center bg-[#022859]/10 px-4 py-2 rounded-full mb-4">
                  <span class="text-[#00439D] font-semibold text-sm">INFORMACIÓN DE CONTACTO</span>
                </div>
                <h2 class="text-2xl md:text-3xl font-bold text-[#001D3C] mb-2">
                  Conecta con
                  <span class="text-[#B88E41]">Nuestro Equipo</span>
                </h2>
                <p class="text-gray-600">
                  Estamos listos para atenderte por múltiples canales
                </p>
              </div>
              
              <!-- Tarjetas de contacto -->
              <div class="space-y-6">
                <!-- Dirección -->
                <div class="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-[#022859]/10 hover:border-[#00439D]/30">
                  <div class="flex items-start space-x-4">
                    <div class="w-14 h-14 bg-gradient-to-br from-[#001D3C] to-[#022859] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-bold text-[#001D3C] mb-2 group-hover:text-[#00439D] transition-colors">Dirección</h3>
                      <p class="text-gray-600 text-sm leading-relaxed">
                        Villa Marcela, Cra. 10a #10-05 piso 2<br>
                        Mosquera, Cundinamarca<br>
                        Colombia
                      </p>
                      <a 
                        href="https://maps.app.goo.gl/rMVKXTa4rGWrkUrT8" 
                        target="_blank"
                        class="inline-flex items-center text-[#00439D] hover:text-[#022859] text-sm font-medium mt-3 group/link"
                      >
                        Ver en Google Maps
                        <svg class="w-4 h-4 ml-1 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                <!-- Teléfonos -->
                <div class="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-[#022859]/10 hover:border-[#00439D]/30">
                  <div class="flex items-start space-x-4">
                    <div class="w-14 h-14 bg-gradient-to-br from-[#001D3C] to-[#022859] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-bold text-[#001D3C] mb-2 group-hover:text-[#00439D] transition-colors">Teléfonos</h3>
                      <div class="space-y-2">
                        <a href="tel:+573024662228" class="block text-gray-600 hover:text-[#00439D] transition-colors text-sm">
                          📞 Oficina: <span class="font-semibold">302 466 2228</span>
                        </a>
                        <a href="tel:+573024662228" class="block text-gray-600 hover:text-[#00439D] transition-colors text-sm">
                          📱 Móvil: <span class="font-semibold">302 466 2228</span>
                        </a>
                        <a href="https://wa.me/573024662228" target="_blank" class="block text-gray-600 hover:text-[#00439D] transition-colors text-sm">
                          💬 WhatsApp: <span class="font-semibold">302 466 2228</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Email -->
                <div class="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-[#022859]/10 hover:border-[#00439D]/30">
                  <div class="flex items-start space-x-4">
                    <div class="w-14 h-14 bg-gradient-to-br from-[#001D3C] to-[#022859] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-bold text-[#001D3C] mb-2 group-hover:text-[#00439D] transition-colors">Correos Electrónicos</h3>
                      <div class="space-y-2">
                        <a href="mailto:info@asconfijy.com" class="block text-gray-600 hover:text-[#00439D] transition-colors text-sm break-all">
                          📧 General: <span class="font-semibold">info@asconfijy.com</span>
                        </a>
                        <a href="mailto:contabilidad@asconfijy.com" class="block text-gray-600 hover:text-[#00439D] transition-colors text-sm break-all">
                          📊 Contabilidad: <span class="font-semibold">contabilidad@asconfijy.com</span>
                        </a>
                        <a href="mailto:fiscal@asconfijy.com" class="block text-gray-600 hover:text-[#00439D] transition-colors text-sm break-all">
                          ⚖️ Fiscal: <span class="font-semibold">fiscal@asconfijy.com</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Horarios -->
                <div class="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-[#022859]/10 hover:border-[#00439D]/30">
                  <div class="flex items-start space-x-4">
                    <div class="w-14 h-14 bg-gradient-to-br from-[#001D3C] to-[#022859] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-bold text-[#001D3C] mb-2 group-hover:text-[#00439D] transition-colors">Horarios de Atención</h3>
                      <div class="space-y-1 text-gray-600 text-sm">
                        <p>🕘 <span class="font-semibold">Lunes a Viernes:</span> 9:00 AM - 5:00 PM</p>
                                                <p>🔒 <span class="font-semibold">Sábados:</span> Cerrado</p>

                        <p>🔒 <span class="font-semibold">Domingos:</span> Cerrado</p>
                      </div>
                      <p class="text-xs text-gray-500 mt-3">
                        * Horarios con cita previa. Urgencias fuera de horario disponibles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Redes sociales mejoradas -->
              <div class="bg-gradient-to-r from-[#00439D]/5 to-transparent rounded-2xl border border-[#00439D]/20 p-6">
                <h3 class="font-bold text-[#001D3C] mb-4 flex items-center">
                  <div class="w-2 h-2 bg-[#B88E41] rounded-full mr-2"></div>
                  Síguenos en Redes
                </h3>
                <p class="text-gray-600 text-sm mb-6">
                  Mantente al día con consejos financieros y actualizaciones del sector
                </p>
                
                <div class="flex space-x-3">
                  <a href="#" class="w-12 h-12 bg-[#022859] hover:bg-[#00439D] text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                    <span class="text-lg group-hover:scale-110 transition-transform">f</span>
                  </a>
                  <a href="#" class="w-12 h-12 bg-[#022859] hover:bg-[#00439D] text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                    <span class="text-lg group-hover:scale-110 transition-transform">𝕏</span>
                  </a>
                  <a href="#" class="w-12 h-12 bg-[#022859] hover:bg-[#00439D] text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                    <span class="text-lg group-hover:scale-110 transition-transform">in</span>
                  </a>
                  <a href="#" class="w-12 h-12 bg-[#022859] hover:bg-[#00439D] text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                    <span class="text-lg group-hover:scale-110 transition-transform">ig</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Formulario mejorado -->
          <div class="lg:col-span-2">
            <!-- Formulario principal -->
            <div class="mb-12">
              <div class="inline-flex items-center bg-[#022859]/10 px-4 py-2 rounded-full mb-4">
                <span class="text-[#00439D] font-semibold text-sm">CONSULTA GRATUITA</span>
              </div>
              
              <div class="mb-8">
                <h2 class="text-2xl md:text-3xl font-bold text-[#001D3C] mb-3">
                  Envíanos tu <span class="text-[#B88E41]">Consulta</span>
                </h2>
                <p class="text-gray-600 max-w-2xl">
                  Completa el formulario y nuestro equipo de expertos se pondrá en contacto contigo 
                  en menos de 24 horas hábiles con una propuesta personalizada.
                </p>
              </div>
              
              <ContactForm />
            </div>
            
            <!-- Mapa mejorado -->
            <div class="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl shadow-xl border border-[#022859]/10 overflow-hidden">
              <div class="p-8 border-b border-[#022859]/10">
                <h3 class="text-xl font-bold text-[#001D3C] mb-2 flex items-center">
                  <div class="w-2 h-2 bg-[#B88E41] rounded-full mr-2"></div>
                  Encuéntranos Fácilmente
                </h3>
                <p class="text-gray-600 text-sm">
                  Ubicación estratégica en el centro de la ciudad con acceso conveniente
                </p>
              </div>
              
              <!-- Mapa mejorado -->
  <div class="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl shadow-xl border border-[#022859]/10 overflow-hidden">
    
    
    <!-- Mapa placeholder mejorado -->
    <div class="h-80 bg-gradient-to-br from-[#001D3C] to-[#022859] flex items-center justify-center relative">
      <!-- Patrón SVG corregido -->
      <div class="absolute inset-0" :style="mapPatternStyle"></div>
      
      <div class="relative z-10 text-center">
        <div class="w-20 h-20 bg-gradient-to-br from-[#B88E41] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <p class="text-white text-lg font-medium mb-2">Oficinas AsconfiJY</p>
        <p class="text-gray-300 text-sm max-w-md mx-auto">
          Villa Marcela, Cra. 10a #10-05 piso 2, Mosquera, Cundinamarca, Colombia
        </p>
        <a 
          href="https://maps.app.goo.gl/XPAvKoYqeZ8FXPkb7" 
          target="_blank"
          class="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold mt-6 hover:bg-white/30 transition-all duration-300 group"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          Abrir en Google Maps
          <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
    
    <!-- Información adicional del mapa -->
    
  </div>
                            
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Mejorada -->
    <section class="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center bg-[#022859]/10 px-4 py-2 rounded-full mb-6">
            <span class="text-[#00439D] font-semibold text-sm">PREGUNTAS FRECUENTES</span>
          </div>
          
          <h2 class="text-3xl md:text-5xl font-bold text-[#001D3C] mb-6">
            Resolvemos tus <span class="text-[#B88E41]">Dudas</span>
          </h2>
          
          <p class="text-gray-600 text-lg max-w-3xl mx-auto">
            Respuestas a las preguntas más comunes sobre nuestros servicios y proceso de contacto
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="space-y-6">
            <div
              v-for="(faq, index) in faqs"
              :key="index"
              class="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#022859]/10 hover:border-[#00439D]/20"
            >
              <div class="p-8">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-[#001D3C] to-[#022859] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div class="text-white font-bold text-lg">{{ index + 1 }}</div>
                  </div>
                  
                  <div class="flex-1">
                    <h3 class="text-xl font-bold text-[#001D3C] mb-3 group-hover:text-[#00439D] transition-colors">
                      {{ faq.question }}
                    </h3>
                    <p class="text-gray-600 leading-relaxed">
                      {{ faq.answer }}
                    </p>
                    
                    <!-- Información adicional para algunas FAQ -->
                    <div v-if="faq.additional" class="mt-4 pt-4 border-t border-gray-100">
                      <p class="text-sm text-gray-500">{{ faq.additional }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- CTA FAQ -->
          <div class="mt-16 text-center">
            <div class="bg-gradient-to-r from-[#00439D]/5 to-transparent rounded-2xl border border-[#00439D]/20 p-8 max-w-2xl mx-auto">
              <h3 class="text-xl font-bold text-[#001D3C] mb-4">¿No encontraste tu respuesta?</h3>
              <p class="text-gray-600 mb-6">
                Nuestro equipo está disponible para resolver cualquier duda específica sobre tu caso.
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+573024662228" 
                  class="group bg-gradient-to-r from-[#00439D] to-[#022859] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center"
                >
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Llamar Ahora
                </a>
                
                <NuxtLink 
                  to="/servicios" 
                  class="group bg-white text-[#001D3C] border-2 border-[#022859]/30 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 hover:border-[#00439D]/50 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Ver Servicios
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { definePageMeta, useHead } from '#imports'
import ContactForm from '@/components/ContactForm.vue'

// Meta configuración
definePageMeta({
  title: 'Contacto'
})

useHead({
  title: 'Contacto',
  meta: [
    {
      name: 'description',
      content: 'Contacta a ASCONFI JY para tu consulta gratuita. Resolvemos todas tus dudas sobre contabilidad, fiscalidad y finanzas. Respuesta garantizada en 24 horas.'
    },
    { property: 'og:title', content: 'Contacto - ASCONFI JY' },
    { property: 'og:description', content: 'Consulta gratis con nuestros expertos en 24 horas. Ubicados en Mosquera, Cundinamarca.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:title', content: 'Contacta a ASCONFI JY' },
    { name: 'twitter:description', content: 'Solicita tu consulta personalizada sin compromiso' }
  ],
  link: [
    { rel: 'canonical', href: 'https://asconfijy.com/contacto' }
  ]
})

// Patrón SVG
const patternStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
}

const faqs = [
  {
    question: '¿Cuánto tiempo tardan en responder una consulta?',
    answer: 'Respondemos todas las consultas en un plazo máximo de 24 horas hábiles. Para casos urgentes, ofrecemos respuesta en menos de 4 horas durante nuestro horario de atención.',
    additional: '🕐 Tiempo de respuesta promedio: 2-4 horas'
  },
  {
    question: '¿Ofrecen servicios para personas físicas?',
    answer: 'Sí, ofrecemos servicios tanto para personas físicas como morales, adaptándonos a las necesidades específicas de cada cliente. Trabajamos con emprendedores, profesionales independientes, PyMEs y grandes corporativos.',
    additional: '👥 Más de 200 clientes satisfechos de todos los tamaños'
  },
  {
    question: '¿Cuál es el costo de una consulta inicial?',
    answer: 'La primera consulta es completamente gratuita y sin compromiso. En esta sesión analizamos tu situación, identificamos áreas de oportunidad y te presentamos una propuesta personalizada con costos transparentes.',
    additional: '💰 Sin costos ocultos ni sorpresas'
  },
  {
    question: '¿Trabajan de forma remota?',
    answer: 'Sí, ofrecemos servicios tanto presenciales como remotos, adaptándonos a las preferencias de nuestros clientes. Utilizamos tecnología segura y plataformas certificadas para garantizar la confidencialidad de tu información.',
    additional: '💻 70% de nuestros clientes prefieren el servicio remoto'
  },
  {
    question: '¿Qué documentación necesito para la primera consulta?',
    answer: 'Para la consulta inicial solo necesitas tener claros tus objetivos y desafíos. Si ya cuentas con documentación como estados financieros, declaraciones o contratos, puedes compartirlos para un análisis más preciso.',
    additional: '📄 Todo con estrictos protocolos de confidencialidad'
  },
  {
    question: '¿Ofrecen soporte durante fines de semana o festivos?',
    answer: 'Para urgencias fiscales o situaciones críticas, ofrecemos soporte extendido con un equipo de guardia. Este servicio tiene un costo adicional que se acuerda previamente según las necesidades específicas.',
    additional: '🚨 Soporte de urgencia disponible 24/7'
  }
]
</script>

<style scoped>
/* Animación para elementos decorativos */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

/* Ajuste para correos largos */
.break-all {
  word-break: break-all;
}
</style>