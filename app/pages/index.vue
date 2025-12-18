<!-- pages/index.vue -->
<template>
  <div class="overflow-hidden">
    <!-- Hero Section Mejorada -->
    <section class="relative overflow-hidden bg-gradient-to-br from-[#001D3C] via-[#022859] to-[#00439D] pt-24 pb-32">
      <!-- Elementos decorativos -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B88E41] rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00439D] rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>
      
      <!-- Patrón de fondo sutil - Corregido -->
      <div class="absolute inset-0" :style="patternStyle"></div>
      
      <div class="container relative z-10 mx-auto px-4 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Badge de confianza -->
          <div class="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
            <div class="w-2 h-2 bg-[#B88E41] rounded-full mr-2 animate-pulse"></div>
            <span class="text-white/90 text-sm font-medium">+15 años de experiencia contable</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <span class="block">Soluciones</span>
            <span class="bg-gradient-to-r from-[#B88E41] to-[#D4AF37] bg-clip-text text-transparent">Contables & Financieras</span>
            <span class="block">para tu Éxito Empresarial</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Expertos en asesoría contable, fiscal y financiera. Optimizamos tus recursos, garantizamos cumplimiento y maximizamos tu rentabilidad.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <NuxtLink 
              to="/contacto" 
              class="group relative overflow-hidden bg-gradient-to-r from-[#B88E41] via-[#D4AF37] to-[#B88E41] text-white px-10 py-4 rounded-xl hover:shadow-2xl hover:shadow-[#B88E41]/30 transition-all duration-300 font-bold text-lg w-full sm:w-auto text-center"
              :style="buttonGradientStyle"
            >
              <span class="relative z-10 flex items-center justify-center">
                Solicitar Consulta Gratuita
                <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-[#001D3C] to-[#022859] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </NuxtLink>
            
            <NuxtLink 
              to="/servicios" 
              class="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-4 rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 font-semibold text-lg w-full sm:w-auto text-center"
            >
              <span class="flex items-center justify-center">
                Explorar Servicios
                <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </NuxtLink>
          </div>
          
          <!-- Elementos de confianza -->
          <div class="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
            <div class="flex items-center">
              <div class="w-8 h-8 bg-[#B88E41]/20 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-4 h-4 text-[#B88E41]" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <span>Confidencialidad Garantizada</span>
            </div>
            
            <div class="flex items-center">
              <div class="w-8 h-8 bg-[#B88E41]/20 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-4 h-4 text-[#B88E41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span>Respuesta en 24h hábiles</span>
            </div>
            
            <div class="flex items-center">
              <div class="w-8 h-8 bg-[#B88E41]/20 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-4 h-4 text-[#B88E41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span>Asesores Certificados</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Servicios Destacados Mejorados -->
    <section class="py-24 relative">
      <!-- Fondo decorativo -->
      <div class="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#001D3C]/5 to-transparent"></div>
      
      <div class="container relative z-10 mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center bg-[#022859]/10 px-4 py-2 rounded-full mb-6">
            <span class="text-[#00439D] font-semibold text-sm">NUESTROS SERVICIOS</span>
          </div>
          <h2 class="text-3xl md:text-5xl font-bold text-[#001D3C] mb-6">
            Soluciones <span class="text-[#B88E41]">Integrales</span> para tu Negocio
          </h2>
          <p class="text-gray-600 text-lg max-w-3xl mx-auto">
            Ofrecemos una gama completa de servicios especializados para cubrir todas las necesidades contables y financieras de tu empresa
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            title="Contabilidad Integral"
            description="Manejo completo de tu contabilidad con reportes precisos, oportunos y adaptados a las normas fiscales vigentes."
            icon="📊"
            :features="['Estados financieros', 'Balances mensuales', 'Conciliaciones bancarias', 'Control de inventarios']"
            badge="Esencial"
          />
          
          <ServiceCard 
            title="Asesoría Fiscal"
            description="Cumplimiento fiscal estratégico y planeación tributaria para optimizar tu carga impositiva legalmente."
            icon="⚖️"
            :features="['Declaraciones de renta', 'Planeación fiscal', 'Defensa ante DIAN', 'Cumplimiento normativo']"
            badge="Popular"
          />
          
          <ServiceCard 
            title="Consultoría Financiera"
            description="Análisis, planeación y estrategias financieras para maximizar la rentabilidad y crecimiento de tu negocio."
            icon="📈"
            :features="['Análisis de rentabilidad', 'Proyecciones financieras', 'Control de costos', 'Optimización de recursos']"
          />
          
          <ServiceCard 
            title="Gestión de Nómina"
            description="Procesamiento completo de nómina, cumplimiento de obligaciones laborales y asesoría en recursos humanos."
            icon="👥"
            :features="['Cálculo de nómina', 'EPS + ARL', 'Liquidaciones', 'Obligaciones patronales']"
          />
        </div>
        
        <div class="text-center mt-16">
          <NuxtLink 
            to="/servicios" 
            class="group inline-flex items-center bg-gradient-to-r from-[#00439D]/10 to-[#022859]/5 hover:from-[#00439D]/20 hover:to-[#022859]/10 text-[#001D3C] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-[#00439D]/20 hover:shadow-lg"
          >
            <span>Explorar Todos los Servicios</span>
            <svg class="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Por qué elegirnos - Mejorado -->
    <section class="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Columna izquierda: Texto -->
          <div>
            <div class="inline-flex items-center bg-[#022859]/10 px-4 py-2 rounded-full mb-6">
              <span class="text-[#00439D] font-semibold text-sm">¿POR QUÉ ELEGIRNOS?</span>
            </div>
            
            <h2 class="text-3xl md:text-5xl font-bold text-[#001D3C] mb-8">
              Más que un servicio contable,
              <span class="text-[#B88E41]">un socio estratégico</span>
            </h2>
            
            <p class="text-gray-600 text-lg mb-12 leading-relaxed">
              En AsconfiJY no solo llevamos tus números; construimos relaciones de confianza, 
              brindamos asesoría estratégica y trabajamos contigo para alcanzar tus objetivos financieros.
            </p>
            
            <div class="space-y-8">
              <div class="flex items-start group">
                <div class="w-14 h-14 bg-gradient-to-br from-[#001D3C] to-[#022859] rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <span class="text-2xl text-white">🏆</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-[#001D3C] mb-2 group-hover:text-[#00439D] transition-colors">
                    Experiencia Comprobada
                  </h3>
                  <p class="text-gray-600">
                    Más de 15 años especializados en asesoría contable y financiera para empresas de todos los sectores.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start group">
                <div class="w-14 h-14 bg-gradient-to-br from-[#001D3C] to-[#022859] rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <span class="text-2xl text-white">🔒</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-[#001D3C] mb-2 group-hover:text-[#00439D] transition-colors">
                    Confidencialidad Total
                  </h3>
                  <p class="text-gray-600">
                    Protocolos de seguridad avanzados y estrictos acuerdos de confidencialidad para proteger tu información.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start group">
                <div class="w-14 h-14 bg-gradient-to-br from-[#001D3C] to-[#022859] rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <span class="text-2xl text-white">💼</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-[#001D3C] mb-2 group-hover:text-[#00439D] transition-colors">
                    Asesoría Personalizada
                  </h3>
                  <p class="text-gray-600">
                    Soluciones a medida adaptadas a las necesidades específicas y objetivos particulares de tu negocio.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Columna derecha: Estadísticas/Info -->
          <div class="bg-gradient-to-br from-[#001D3C] to-[#022859] rounded-3xl p-8 lg:p-12 text-white">
            <div class="text-center mb-12">
              <h3 class="text-2xl font-bold mb-4">Nuestro Impacto en Números</h3>
              <p class="text-gray-300">Resultados que respaldan nuestra experiencia</p>
            </div>
            
            <div class="grid grid-cols-2 gap-8">
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-[#B88E41] mb-2">+100</div>
                <p class="text-gray-300 text-sm">Clientes Satisfechos</p>
              </div>
              
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-[#B88E41] mb-2">15+</div>
                <p class="text-gray-300 text-sm">Años de Experiencia</p>
              </div>
              
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-[#B88E41] mb-2">99.8%</div>
                <p class="text-gray-300 text-sm">Precisión Contable</p>
              </div>
              
              <div class="text-center">
                <div class="text-4xl lg:text-5xl font-bold text-[#B88E41] mb-2">24h</div>
                <p class="text-gray-300 text-sm">Tiempo de Respuesta</p>
              </div>
            </div>
            
            <div class="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-[#B88E41] rounded-full flex items-center justify-center mr-4">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 class="text-lg font-bold">Garantía de Satisfacción</h4>
              </div>
              <p class="text-gray-300 text-sm">
                Si no estás satisfecho con nuestros servicios durante los primeros 30 días, 
                te devolvemos el 100% de tu inversión.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final Mejorado -->
    <section class="relative overflow-hidden py-24">
      <!-- Fondo con gradiente y patrón -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#001D3C] via-[#022859] to-[#00439D]"></div>
      <div class="absolute inset-0" :style="patternStyle2"></div>
      
      <!-- Elementos decorativos -->
      <div class="absolute top-1/4 right-1/4 w-64 h-64 bg-[#B88E41]/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
      <div class="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#00439D]/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
      
      <div class="container relative z-10 mx-auto px-4 lg:px-8 text-center">
        <div class="max-w-3xl mx-auto">
          <div class="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <span class="text-white font-semibold text-sm">CONSULTA GRATUITA</span>
          </div>
          
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-8">
            ¿Listo para transformar
            <span class="text-[#B88E41]">tu gestión financiera</span>?
          </h2>
          
          <p class="text-xl text-gray-200 mb-12 leading-relaxed">
            Agenda una consulta gratuita con nuestros expertos. Analizaremos tu situación actual 
            y te presentaremos un plan personalizado para optimizar tus finanzas empresariales.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <NuxtLink 
              to="/contacto" 
              class="group relative overflow-hidden bg-gradient-to-r from-[#B88E41] via-[#D4AF37] to-[#B88E41] text-white px-12 py-5 rounded-xl hover:shadow-2xl hover:shadow-[#B88E41]/40 transition-all duration-300 font-bold text-lg w-full sm:w-auto text-center"
              :style="buttonGradientStyle"
            >
              <span class="relative z-10 flex items-center justify-center">
                Solicitar Consulta Gratuita
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
            <span class="text-[#B88E41] font-semibold">Sin compromisos</span> • Análisis inicial gratuito • Propuesta personalizada
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ServiceCard from '@/components/ServiceCard.vue'

// Definir metadatos SEO
definePageMeta({
  title: 'ASCONFI JY - Asesoría Contable y Financiera Profesional',
})

useHead({
  meta: [
    {
      name: 'description',
      content: 'Asesoría contable y financiera profesional en Bogotá. Servicios de contabilidad, asesoramiento fiscal, nómina y consultoría financiera con +15 años de experiencia.'
    },
    {
      name: 'keywords',
      content: 'asesoría contable Bogotá, consultoría financiera, contabilidad empresarial, asesoramiento fiscal, nómina, auditoría'
    },
    {
      property: 'og:title',
      content: 'ASCONFI JY - Asesoría Contable y Financiera Profesional'
    },
    {
      property: 'og:description',
      content: 'Soluciones contables y financieras profesionales para empresas y particulares en Bogotá.'
    },
    {
      property: 'og:url',
      content: 'https://asconfijy.com'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:title',
      content: 'ASCONFI JY - Asesoría Contable y Financiera'
    },
    {
      name: 'twitter:description',
      content: 'Soluciones contables y financieras profesionales.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://asconfijy.com'
    }
  ]
})

// Corregir los patrones SVG usando estilo en línea
const patternStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
}

const patternStyle2 = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
}

// Estilo para la animación del gradiente del botón
const buttonGradientStyle = {
  backgroundSize: '200% 100%',
  backgroundPosition: '0% 0%'
}
</script>

<style scoped>
/* Animación para elementos decorativos */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Mejorar la legibilidad del gradiente de texto */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>