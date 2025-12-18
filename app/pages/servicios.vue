<!-- pages/servicios.vue -->
<template>
  <div class="overflow-hidden">
    <!-- Hero Section Mejorada -->
    <section class="relative overflow-hidden bg-gradient-to-br from-[#001D3C] via-[#022859] to-[#00439D] pt-32 pb-24">
      <!-- Elementos decorativos -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div class="absolute top-1/4 left-1/4 w-80 h-80 bg-[#B88E41] rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00439D] rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>
      
      <!-- Patrón de fondo sutil -->
      <div class="absolute inset-0" :style="patternStyle"></div>
      
      <div class="container relative z-10 mx-auto px-4 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Breadcrumb -->
          <div class="flex items-center justify-center text-sm text-white/80 mb-8">
            <NuxtLink to="/" class="hover:text-[#B88E41] transition-colors">Inicio</NuxtLink>
            <span class="mx-2">/</span>
            <span class="text-[#B88E41] font-medium">Servicios</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Nuestros <span class="bg-gradient-to-r from-[#B88E41] to-[#D4AF37] bg-clip-text text-transparent">Servicios</span> Profesionales
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos una gama completa de soluciones contables, fiscales y financieras 
            diseñadas para optimizar tu negocio, garantizar cumplimiento y maximizar rentabilidad.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#servicios" 
              class="group relative overflow-hidden bg-gradient-to-r from-[#B88E41] via-[#D4AF37] to-[#B88E41] text-white px-10 py-4 rounded-xl hover:shadow-2xl hover:shadow-[#B88E41]/30 transition-all duration-300 font-bold text-lg w-full sm:w-auto text-center"
              :style="buttonGradientStyle"
            >
              <span class="relative z-10 flex items-center justify-center">
                Explorar Servicios
                <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-[#001D3C] to-[#022859] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <NuxtLink 
              to="/contacto" 
              class="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-4 rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 font-semibold text-lg w-full sm:w-auto text-center"
            >
              <span class="flex items-center justify-center">
                Solicitar Cotización
                <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Servicios Principales Mejorados -->
    <section id="servicios" class="py-24 relative">
      <!-- Fondo decorativo -->
      <div class="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#001D3C]/5 to-transparent"></div>
      
      <div class="container relative z-10 mx-auto px-4 lg:px-8">
        <div id="testimonios" class="text-center mb-16">
          <div class="inline-flex items-center bg-[#022859]/10 px-4 py-2 rounded-full mb-6">
            <span class="text-[#00439D] font-semibold text-sm">SERVICIOS INTEGRALES</span>
          </div>
          
          <h2 class="text-3xl md:text-5xl font-bold text-[#001D3C] mb-6">
            Soluciones <span class="text-[#B88E41]">Especializadas</span> por Área
          </h2>
          
          <p class="text-gray-600 text-lg max-w-3xl mx-auto">
            Cada servicio está diseñado para proporcionar soluciones específicas y efectivas 
            a las necesidades contables y financieras de tu empresa
          </p>
        </div>

        <!-- Grid de Servicios Principales -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <!-- Servicios Contables -->
          <ServiceCard 
            id="contable"
            title="Contabilidad Integral"
            description="Manejo profesional completo de tu contabilidad con reportes precisos, oportunos y adaptados a las normas fiscales vigentes. Control total de tus registros financieros."
            icon="📊"
            :features="serviciosContables"
            badge="Esencial"
            link="/servicios/contabilidad-general"
          />

          <!-- Servicios Fiscales -->
          <ServiceCard 
            id="fiscal"
            title="Asesoría Fiscal"
            description="Asesoría fiscal integral para garantizar tu cumplimiento y optimizar tu carga tributaria legalmente. Evita sanciones y maximiza beneficios fiscales."
            icon="⚖️"
            :features="serviciosFiscales"
            badge="Popular"
            link="/servicios/asesoria-fiscal"
          />

          <!-- Servicios Financieros -->
          <ServiceCard 
            id="financiero"
            title="Consultoría Financiera"
            description="Análisis y planeación financiera estratégica para el crecimiento sostenible de tu empresa. Toma decisiones basadas en datos precisos."
            icon="📈"
            :features="serviciosFinancieros"
            link="/servicios/consultoria-financiera"
          />

          <!-- Servicios de Nómina -->
          <ServiceCard 
            id="nomina"
            title="Gestión de Nómina"
            description="Procesamiento completo de nómina y cumplimiento de todas las obligaciones laborales. Garantiza tranquilidad en tus procesos de recursos humanos."
            icon="👥"
            :features="serviciosNomina"
            badge="Incluido"
            link="/servicios/gestion-nomina"
          />
        </div>

        <!-- Servicios Adicionales Mejorados -->
        <div id="empresas" class="mb-20">
          <div class="text-center mb-12">
            <h3 class="text-2xl md:text-3xl font-bold text-[#001D3C] mb-4">
              Servicios <span class="text-[#B88E41]">Complementarios</span>
            </h3>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Soluciones adicionales para necesidades específicas de tu empresa
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(service, index) in serviciosAdicionales" :key="index" 
                 class="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-[#022859]/10 hover:border-[#00439D]/30">
              <div class="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#B88E41]/5 to-transparent rounded-bl-full"></div>
              
              <div class="relative z-10">
                <div class="w-14 h-14 bg-gradient-to-br from-[#001D3C] to-[#022859] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span class="text-2xl text-white">{{ service.icon }}</span>
                </div>
                
                <h4 class="text-xl font-bold text-[#001D3C] mb-3 group-hover:text-[#00439D] transition-colors">
                  {{ service.title }}
                </h4>
                
                <p class="text-gray-600 text-sm leading-relaxed">
                  {{ service.description }}
                </p>
                
                <div class="mt-6 pt-4 border-t border-gray-100">
                  <NuxtLink 
                    :to="service.link || '/contacto'"
                    class="text-[#00439D] hover:text-[#022859] text-sm font-medium inline-flex items-center group"
                  >
                    Más información
                    <svg class="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Proceso de Trabajo Mejorado -->
    <section class="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center bg-[#022859]/10 px-4 py-2 rounded-full mb-6">
            <span class="text-[#00439D] font-semibold text-sm">NUESTRO MÉTODO</span>
          </div>
          
          <h2 class="text-3xl md:text-5xl font-bold text-[#001D3C] mb-6">
            Proceso de Trabajo <span class="text-[#B88E41]">Estructurado</span>
          </h2>
          
          <p class="text-gray-600 text-lg max-w-3xl mx-auto">
            Seguimos una metodología probada para garantizar resultados óptimos en cada servicio
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="(step, index) in procesoDeTrabajo" :key="index" 
               class="group text-center">
            <div class="relative mb-6">
              <div class="w-20 h-20 bg-gradient-to-br from-[#001D3C] to-[#022859] text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {{ step.number }}
              </div>
              <div class="absolute -bottom-2 -right-2 w-10 h-10 bg-[#B88E41] rounded-full flex items-center justify-center text-white text-sm font-bold">
                {{ step.icon }}
              </div>
            </div>
            
            <h3 class="text-xl font-bold text-[#001D3C] mb-3 group-hover:text-[#00439D] transition-colors">
              {{ step.title }}
            </h3>
            
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ step.description }}
            </p>
            
            <div class="mt-4 pt-4 border-t border-gray-200">
              <span class="text-xs text-gray-500 font-medium">{{ step.duration }}</span>
            </div>
          </div>
        </div>
        
        <!-- Línea conectora (solo en desktop) -->
        <div class="hidden md:block mt-12 relative">
          <div class="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-gradient-to-r from-[#B88E41]/20 via-[#00439D]/20 to-[#B88E41]/20"></div>
          <div class="flex justify-between">
            <div v-for="i in 4" :key="i" class="w-3 h-3 bg-[#B88E41] rounded-full relative z-10"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparativa de Servicios Mejorada -->
    <section class="py-24">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center bg-[#022859]/10 px-4 py-2 rounded-full mb-6">
            <span class="text-[#00439D] font-semibold text-sm">PLANES DE SERVICIO</span>
          </div>
          
          <h2 class="text-3xl md:text-5xl font-bold text-[#001D3C] mb-6">
            Soluciones <span class="text-[#B88E41]">Adaptadas</span> a tu Negocio
          </h2>
          
          <p class="text-gray-600 text-lg max-w-3xl mx-auto">
            Ofrecemos diferentes niveles de servicio diseñados para las necesidades específicas de cada empresa
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Plan Básico -->
          <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#022859]/10 p-8">
            <h3 class="text-2xl font-bold text-[#001D3C] mb-4">Básico</h3>
            <p class="text-gray-600 text-sm mb-6">Ideal para emprendedores y pequeñas empresas</p>
            
            <div class="text-3xl font-bold text-[#001D3C] mb-2">
              Desde <span class="text-[#B88E41]">$100,000</span>
            </div>
            <div class="text-gray-500 text-sm mb-8">/mes + IVA</div>
            
            <ul class="space-y-4 mb-8">
              <li v-for="feature in planes.basico" :key="feature" 
                  :class="['flex items-start', feature.includes('✗') ? 'text-gray-400' : 'text-gray-700']">
                <span class="mr-3 mt-0.5 flex-shrink-0">
                  <svg v-if="feature.includes('✓')" class="w-5 h-5 text-[#B88E41]" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <svg v-else-if="feature.includes('✗')" class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span>{{ feature.replace('✓ ', '').replace('✗ ', '') }}</span>
              </li>
            </ul>
            
            <NuxtLink 
              to="/contacto" 
              class="block w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-[#001D3C] text-center py-4 rounded-xl font-semibold transition-all duration-300 border border-gray-300 hover:border-gray-400"
            >
              Solicitar Información
            </NuxtLink>
          </div>

          <!-- Plan Profesional (Destacado) -->
          <div class="group relative bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-[#B88E41] p-8 transform md:scale-105">
            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#B88E41] to-[#D4AF37] text-white px-6 py-1 rounded-full text-sm font-bold">
              MÁS POPULAR
            </div>
            
            <h3 class="text-2xl font-bold text-[#001D3C] mb-4">Profesional</h3>
            <p class="text-gray-600 text-sm mb-6">Perfecto para PYMEs en crecimiento</p>
            
            <div class="text-3xl font-bold text-[#001D3C] mb-2">
              Desde <span class="text-[#B88E41]">$400,000</span>
            </div>
            <div class="text-gray-500 text-sm mb-8">/mes + IVA</div>
            
            <ul class="space-y-4 mb-8">
              <li v-for="feature in planes.profesional" :key="feature" 
                  :class="['flex items-start', feature.includes('✗') ? 'text-gray-400' : 'text-gray-700']">
                <span class="mr-3 mt-0.5 flex-shrink-0">
                  <svg v-if="feature.includes('✓')" class="w-5 h-5 text-[#B88E41]" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <svg v-else-if="feature.includes('✗')" class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span>{{ feature.replace('✓ ', '').replace('✗ ', '') }}</span>
              </li>
            </ul>
            
<!-- Botón con ancho completo pero padding ajustado -->
<NuxtLink 
  to="/contacto" 
  class="group relative overflow-hidden bg-gradient-to-r from-[#B88E41] via-[#D4AF37] to-[#B88E41] text-white text-center py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-[#B88E41]/30 w-full block"
  :style="buttonGradientStyle"
>
  <span class="relative z-10">Contratar Ahora</span>
  <div class="absolute inset-0 bg-gradient-to-r from-[#001D3C] to-[#022859] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</NuxtLink>
            
            <div class="mt-4 text-center">
              <span class="text-xs text-[#B88E41] font-semibold">Ahorra 10% con pago anual</span>
            </div>
          </div>

          <!-- Plan Empresarial -->
          <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#022859]/10 p-8">
            <h3 class="text-2xl font-bold text-[#001D3C] mb-4">Empresarial</h3>
            <p class="text-gray-600 text-sm mb-6">Para empresas establecidas y corporativos</p>
            
            <div class="text-3xl font-bold text-[#001D3C] mb-2">
              Desde <span class="text-[#B88E41]">$800,000</span>
            </div>
            <div class="text-gray-500 text-sm mb-8">/mes + IVA</div>
            
            <ul class="space-y-4 mb-8">
              <li v-for="feature in planes.empresarial" :key="feature" 
                  :class="['flex items-start', feature.includes('✗') ? 'text-gray-400' : 'text-gray-700']">
                <span class="mr-3 mt-0.5 flex-shrink-0">
                  <svg v-if="feature.includes('✓')" class="w-5 h-5 text-[#B88E41]" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <svg v-else-if="feature.includes('✗')" class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span>{{ feature.replace('✓ ', '').replace('✗ ', '') }}</span>
              </li>
            </ul>
            
            <NuxtLink 
              to="/contacto" 
              class="block w-full bg-gradient-to-r from-[#00439D]/10 to-[#022859]/5 hover:from-[#00439D]/20 hover:to-[#022859]/10 text-[#001D3C] text-center py-4 rounded-xl font-semibold transition-all duration-300 border border-[#00439D]/20 hover:border-[#00439D]/40"
            >
              Solicitar Cotización
            </NuxtLink>
          </div>
        </div>

        <div class="text-center mt-12 p-6 bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-2xl border border-[#022859]/10">
          <p class="text-gray-600 mb-4">
            <span class="text-[#B88E41] font-semibold">* Los precios son referenciales</span> y pueden variar según las necesidades específicas de cada cliente.
          </p>
          <NuxtLink to="/contacto" class="text-[#00439D] hover:text-[#022859] font-semibold inline-flex items-center group">
            Solicita una cotización personalizada sin compromiso
            <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Testimonios Mejorados -->
    <section class="py-24 bg-gradient-to-br from-[#001D3C]/5 to-[#022859]/5">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center bg-[#022859]/10 px-4 py-2 rounded-full mb-6">
            <span class="text-[#00439D] font-semibold text-sm">TESTIMONIOS</span>
          </div>
          
          <h2 class="text-3xl md:text-5xl font-bold text-[#001D3C] mb-6">
            Empresas que <span class="text-[#B88E41]">confían</span> en nosotros
          </h2>
          
          <p class="text-gray-600 text-lg max-w-3xl mx-auto">
            Conoce la experiencia de nuestros clientes satisfechos con nuestros servicios profesionales
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial 
            :testimonial="{
              text: 'Gracias a AsconfiJY hemos optimizado nuestra carga fiscal en un 20%. Su profesionalismo y atención al detalle son excepcionales.',
              name: 'Cliente 1',
              position: 'Dueño',
              company: 'Empresa 1',
              initials: 'RS',
              rating: 5,
              verified: true,
              type: 'Cliente desde 2019',
              industry: 'Tecnología',
              date: '2024-01-15'
            }"
          />
          
          <Testimonial 
            :testimonial="{
              text: 'Llevamos 5 años trabajando con ellos y nunca hemos tenido problemas con la DIAN. Su servicio es confiable y siempre están disponibles.',
              name: 'Cliente 2',
              position: 'Gerente Financiera',
              company: 'Distribuidora Comercial',
              initials: 'AG',
              rating: 5,
              verified: true,
              type: 'Cliente desde 2018',
              industry: 'Comercio',
              date: '2024-02-20'
            }"
          />
          
          <Testimonial 
            :testimonial="{
              text: 'La implementación de su sistema de contabilidad electrónica fue impecable. Nos asesoraron en cada paso del proceso.',
              name: 'Cliente 3',
              position: 'Dueño',
              company: 'Empresa 3',
              initials: 'CM',
              rating: 5,
              verified: true,
              type: 'Cliente desde 2020',
              industry: 'Ferretería',
              date: '2024-03-10'
            }"
          />
        </div>
        
        <div class="text-center mt-16">
          <NuxtLink 
            to="/servicios#testimonios" 
            class="inline-flex items-center text-[#00439D] hover:text-[#022859] font-semibold group"
          >
            Ver más testimonios de clientes satisfechos
            <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Final Mejorado -->
    <section class="relative overflow-hidden py-24">
      <!-- Fondo con gradiente -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#001D3C] via-[#022859] to-[#00439D]"></div>
      
      <!-- Elementos decorativos -->
      <div class="absolute top-1/3 left-1/4 w-64 h-64 bg-[#B88E41]/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
      <div class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#00439D]/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
      
      <div class="container relative z-10 mx-auto px-4 lg:px-8 text-center">
        <div class="max-w-3xl mx-auto">
          <div class="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <span class="text-white font-semibold text-sm">CONSULTA PERSONALIZADA</span>
          </div>
          
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-8">
            ¿Necesitas una solución <span class="text-[#B88E41]">a tu medida</span>?
          </h2>
          
          <p class="text-xl text-gray-200 mb-12 leading-relaxed">
            Desarrollamos soluciones personalizadas para necesidades específicas. 
            Nuestros expertos analizarán tu caso y crearán un plan adaptado a tus objetivos.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <NuxtLink 
              to="/contacto" 
              class="group relative overflow-hidden bg-gradient-to-r from-[#B88E41] via-[#D4AF37] to-[#B88E41] text-white px-12 py-5 rounded-xl hover:shadow-2xl hover:shadow-[#B88E41]/40 transition-all duration-300 font-bold text-lg w-full sm:w-auto text-center"
              :style="buttonGradientStyle"
            >
              <span class="relative z-10 flex items-center justify-center">
                Solicitar Consulta Personalizada
                <svg class="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-[#001D3C] to-[#022859] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </NuxtLink>
            
            <a 
              href="tel:+573024662228" 
              class="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-5 rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 font-semibold text-lg w-full sm:w-auto text-center"
            >
              <span class="flex items-center justify-center">
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Llamar Ahora: 302 466 2228
              </span>
            </a>
          </div>
          
          <p class="mt-12 text-gray-300 text-sm">
            <span class="text-[#B88E41] font-semibold">Primera consulta gratuita</span> • Análisis sin compromiso • Propuesta detallada
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { definePageMeta, useHead } from '#imports'
import ServiceCard from '@/components/ServiceCard.vue'
import Testimonial from '@/components/Testimonial.vue'

// Meta SEO para la página de servicios
definePageMeta({
  title: 'Servicios'
})

useHead({
  title: 'Servicios',
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

// Patrón SVG
const patternStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
}

// Estilo para la animación del gradiente del botón
const buttonGradientStyle = {
  backgroundSize: '200% 100%',
  backgroundPosition: '0% 0%'
}

// Datos de servicios
const serviciosContables = [
  'Contabilidad general y fiscal completa',
  'Elaboración de estados financieros mensuales',
  'Contabilidad de costos y presupuestos',
  'Auditoría contable interna periódica',
  'Cierre contable anual y declaraciones',
  'Contabilidad electrónica 100% SAT'
]

const serviciosFiscales = [
  'Declaraciones fiscales mensuales/anuales',
  'Planeación fiscal estratégica personalizada',
  'Defensa y representación ante la DIAN',
  'Régimen de incorporación fiscal (RIF)',
  'Facturación electrónica CFDI 4.0',
  'Cumplimiento total de obligaciones fiscales'
]

const serviciosFinancieros = [
  'Análisis financiero',
  'Planeación financiera estratégica anual',
  'Elaboración y control de presupuestos',
  'Gestión de flujo de efectivo optimizado',
  'Evaluación de proyectos de inversión',
  'Reestructuración financiera empresarial'
]

const serviciosNomina = [
  'Cálculo y procesamiento de nómina quincenal',
  'Altas, bajas y modificaciones ante EPS y ARL',
  'Aportes a la seguridad social y parafiscales mensuales',
  'Elaboración de recibos de nómina electrónicos',
  'Asesoría en obligaciones laborales actualizadas',
  'Cálculo de PTU, aguinaldo y liquidaciones'
]

const serviciosAdicionales = [
  {
    icon: '🏢',
    title: 'Constitución de Empresas',
    description: 'Asesoría completa en la creación y formalización legal de tu empresa',
    link: '/servicios/constitucion-empresas'
  },
  {
    icon: '🔍',
    title: 'Auditoría Externa',
    description: 'Revisión independiente certificada de estados financieros',
    link: '/servicios/auditoria-externa'
  },
  {
    icon: '💼',
    title: 'Manejo Contable',
    description: 'Manejo completo o parcial de la contabilidad de tu empresa',
    link: '/servicios/manejo-contable'
  },
  {
    icon: '📋',
    title: 'Consultoría Empresarial',
    description: 'Asesoría estratégica para crecimiento y optimización empresarial',
    link: '/servicios/consultoria-empresarial'
  },
  {
    icon: '⚖️',
    title: 'Asesoría Legal Básica',
    description: 'Orientación en aspectos legales y contractuales empresariales',
    link: '/servicios/asesoria-legal'
  },
  {
    icon: '📱',
    title: 'Implementación de Software',
    description: 'Configuración de sistemas contables, ERP y facturación electrónica',
    link: '/servicios/implementacion-software'
  }
]

const procesoDeTrabajo = [
  {
    number: '1',
    icon: '🔍',
    title: 'Diagnóstico Inicial',
    description: 'Evaluamos tus necesidades específicas y situación actual sin costo',
    duration: '1-2 días'
  },
  {
    number: '2',
    icon: '📋',
    title: 'Propuesta Personalizada',
    description: 'Desarrollamos un plan de acción detallado adaptado a tus objetivos',
    duration: '2-3 días'
  },
  {
    number: '3',
    icon: '⚡',
    title: 'Implementación',
    description: 'Ejecutamos las soluciones con precisión y atención al detalle',
    duration: 'Variable'
  },
  {
    number: '4',
    icon: '📊',
    title: 'Seguimiento Continuo',
    description: 'Monitoreamos resultados y realizamos ajustes periódicos necesarios',
    duration: 'Continuo'
  }
]

const planes = {
  basico: [
    '✓ Beneficio 1',
    '✓ Beneficio 2',
    '✓ Beneficio 3',
    '✓ Beneficio 4',
    '✗ Beneficio 5',
    '✗ Beneficio 6',
    '✗ Beneficio 7',
    '✗ Beneficio 8'
  ],
  profesional: [
    '✓ Beneficio 1',
    '✓ Beneficio 2',
    '✓ Beneficio 3',
    '✓ Beneficio 4',
    '✓ Beneficio 5',
    '✓ Beneficio 6',
    '✗ Beneficio 7',
    '✗ Beneficio 8'
  ],
  empresarial: [
    '✓ Beneficio 1',
    '✓ Beneficio 2',
    '✓ Beneficio 3',
    '✓ Beneficio 4',
    '✓ Beneficio 5',
    '✓ Beneficio 6',
    '✓ Beneficio 7',
    '✓ Beneficio 8'
  ]
}
</script>

<style scoped>
/* Animación para elementos decorativos */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

/* Ajuste responsive para el plan destacado */
@media (max-width: 768px) {
  .md\:scale-105 {
    transform: scale(1);
  }
}
</style>