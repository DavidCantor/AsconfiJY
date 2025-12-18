<!-- components/ContactForm.vue -->
<template>
  <form @submit.prevent="submitForm" class="space-y-8 bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-[#022859]/10">
    <!-- Encabezado del formulario -->
    <div class="text-center mb-8">
      <h3 class="text-2xl font-bold text-[#001D3C] mb-3">
        <span class="text-[#B88E41]">¿Listo para optimizar</span> tus finanzas?
      </h3>
      <p class="text-gray-600">Completa el formulario y un experto se contactará contigo en menos de 24h</p>
    </div>
    
    <!-- Mensaje de éxito/error mejorado -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 transform -translate-y-2"
      enter-to-class="opacity-100 transform translate-y-0"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="message" 
        :class="['p-5 rounded-xl border-l-4 flex items-center space-x-4 shadow-lg', 
                 message.type === 'success' 
                 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-500 text-green-800' 
                 : 'bg-gradient-to-r from-red-50 to-rose-50 border-red-500 text-red-800']"
      >
        <div :class="['w-10 h-10 rounded-full flex items-center justify-center', 
                      message.type === 'success' ? 'bg-green-100' : 'bg-red-100']">
          <svg v-if="message.type === 'success'" class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <svg v-else class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
        </div>
        <div>
          <p class="font-medium">{{ message.text }}</p>
          <p v-if="message.type === 'success'" class="text-sm opacity-90 mt-1">
            Hemos recibido tu información correctamente
          </p>
        </div>
      </div>
    </transition>
    
    <!-- Campos del formulario -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Nombre -->
      <div class="group">
        <label for="name" class="block text-[#001D3C] font-semibold mb-3 flex items-center">
          <div class="w-2 h-2 bg-[#B88E41] rounded-full mr-2"></div>
          Nombre Completo *
        </label>
        <div class="relative">
          <div class="absolute left-4 top-1/2 transform -translate-y-1/2">
            <svg class="w-5 h-5 text-gray-400 group-focus-within:text-[#00439D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <input
            v-model="form.name"
            type="text"
            id="name"
            required
            class="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00439D]/30 focus:border-[#00439D] outline-none transition-all duration-200 bg-gray-50/50 hover:bg-white"
            placeholder="Ingresa tu nombre completo"
          >
        </div>
      </div>
      
      <!-- Email -->
      <div class="group">
        <label for="email" class="block text-[#001D3C] font-semibold mb-3 flex items-center">
          <div class="w-2 h-2 bg-[#B88E41] rounded-full mr-2"></div>
          Correo Electrónico *
        </label>
        <div class="relative">
          <div class="absolute left-4 top-1/2 transform -translate-y-1/2">
            <svg class="w-5 h-5 text-gray-400 group-focus-within:text-[#00439D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <input
            v-model="form.email"
            type="email"
            id="email"
            required
            class="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00439D]/30 focus:border-[#00439D] outline-none transition-all duration-200 bg-gray-50/50 hover:bg-white"
            placeholder="ejemplo@empresa.com"
          >
        </div>
      </div>
    </div>
    
    <!-- Teléfono y Empresa -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Teléfono -->
      <div class="group">
        <label for="phone" class="block text-[#001D3C] font-semibold mb-3">
          <span class="text-gray-600 font-normal">Teléfono</span> (Opcional)
        </label>
        <div class="relative">
          <div class="absolute left-4 top-1/2 transform -translate-y-1/2">
            <svg class="w-5 h-5 text-gray-400 group-focus-within:text-[#00439D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <input
            v-model="form.phone"
            type="tel"
            id="phone"
            class="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00439D]/30 focus:border-[#00439D] outline-none transition-all duration-200 bg-gray-50/50 hover:bg-white"
            placeholder="+57 123 456 7890"
          >
        </div>
      </div>
      
      <!-- Empresa -->
      <div class="group">
        <label for="company" class="block text-[#001D3C] font-semibold mb-3">
          <span class="text-gray-600 font-normal">Empresa</span> (Opcional)
        </label>
        <div class="relative">
          <div class="absolute left-4 top-1/2 transform -translate-y-1/2">
            <svg class="w-5 h-5 text-gray-400 group-focus-within:text-[#00439D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <input
            v-model="form.company"
            type="text"
            id="company"
            class="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00439D]/30 focus:border-[#00439D] outline-none transition-all duration-200 bg-gray-50/50 hover:bg-white"
            placeholder="Nombre de tu empresa"
          >
        </div>
      </div>
    </div>
    
    <!-- Servicio de interés -->
    <div class="group">
      <label for="service" class="block text-[#001D3C] font-semibold mb-3 flex items-center">
        <div class="w-2 h-2 bg-[#B88E41] rounded-full mr-2"></div>
        ¿Qué servicio te interesa?
      </label>
      <div class="relative">
        <div class="absolute left-4 top-1/2 transform -translate-y-1/2">
          <svg class="w-5 h-5 text-gray-400 group-focus-within:text-[#00439D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <select
          v-model="form.service"
          id="service"
          class="w-full pl-12 pr-12 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00439D]/30 focus:border-[#00439D] outline-none transition-all duration-200 bg-gray-50/50 hover:bg-white appearance-none cursor-pointer"
        >
          <option value="" class="text-gray-400">Selecciona un servicio</option>
          <option value="contabilidad" class="text-[#001D3C]">Contabilidad General</option>
          <option value="fiscal" class="text-[#001D3C]">Asesoría Fiscal y Tributaria</option>
          <option value="financiero" class="text-[#001D3C]">Consultoría Financiera</option>
          <option value="nomina" class="text-[#001D3C]">Gestión de Nómina</option>
          <option value="auditoria" class="text-[#001D3C]">Auditoría y Control</option>
          <option value="empresas" class="text-[#001D3C]">Servicios Empresariales</option>
          <option value="otros" class="text-[#001D3C]">Otro servicio</option>
        </select>
        <div class="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
    
    <!-- Mensaje -->
    <div class="group">
      <label for="message" class="block text-[#001D3C] font-semibold mb-3 flex items-center">
        <div class="w-2 h-2 bg-[#B88E41] rounded-full mr-2"></div>
        Cuéntanos sobre tu proyecto *
      </label>
      <div class="relative">
        <div class="absolute left-4 top-4">
          <svg class="w-5 h-5 text-gray-400 group-focus-within:text-[#00439D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
        </div>
        <textarea
          v-model="form.message"
          id="message"
          rows="5"
          required
          class="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00439D]/30 focus:border-[#00439D] outline-none transition-all duration-200 bg-gray-50/50 hover:bg-white resize-none"
          placeholder="Describe tus necesidades contables, objetivos financieros, o cualquier pregunta específica que tengas..."
        ></textarea>
      </div>
    </div>
    
    <!-- Checkbox de privacidad mejorado -->
    <div class="flex items-start p-4 bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-xl border border-[#022859]/10">
      <input
        v-model="form.privacy"
        type="checkbox"
        id="privacy"
        required
        class="mt-1 mr-4 w-5 h-5 text-[#00439D] bg-gray-100 border-gray-300 rounded focus:ring-[#00439D] focus:ring-2 cursor-pointer"
      >
      <label for="privacy" class="text-gray-700 text-sm">
        He leído y acepto la 
        <NuxtLink to="/privacidad" class="text-[#00439D] hover:text-[#022859] font-semibold hover:underline transition-colors">
          política de privacidad
        </NuxtLink>
        y autorizo el tratamiento de mis datos con fines de asesoramiento profesional.
        <span class="text-[#B88E41] font-semibold">*</span>
      </label>
    </div>
    
    <!-- Botón de envío mejorado -->
    <div class="pt-4">
      <button
        type="submit"
        :disabled="loading"
        class="w-full group relative overflow-hidden bg-gradient-to-r from-[#B88E41] via-[#D4AF37] to-[#B88E41] bg-size-200 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#B88E41]/30 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99]"
        :class="{ 'bg-pos-100': loading }"
      >
        <span class="relative z-10 flex items-center justify-center">
          <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span v-else class="flex items-center">
            <span>Enviar Solicitud</span>
            <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </span>
        <div class="absolute inset-0 bg-gradient-to-r from-[#001D3C] to-[#022859] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
      
      <!-- Información adicional -->
      <div class="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center text-gray-600 text-sm">
        <div class="flex items-center">
          <div class="w-8 h-8 bg-[#022859]/10 rounded-full flex items-center justify-center mr-2">
            <svg class="w-4 h-4 text-[#00439D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span>Respuesta en <span class="font-semibold text-[#001D3C]">24h hábiles</span></span>
        </div>
        <div class="hidden sm:block w-px h-4 bg-gray-300"></div>
        <div class="flex items-center">
          <div class="w-8 h-8 bg-[#022859]/10 rounded-full flex items-center justify-center mr-2">
            <svg class="w-4 h-4 text-[#00439D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <span><span class="font-semibold text-[#001D3C]">Confidencialidad</span> garantizada</span>
        </div>
      </div>
      
      <p class="mt-8 pt-6 border-t border-gray-200 text-gray-500 text-sm text-center">
        <span class="text-[#B88E41] font-semibold">*</span> Campos obligatorios. 
        <span class="block mt-1">Nuestro equipo de expertos analizará tu caso y te contactará con una propuesta personalizada.</span>
      </p>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
  privacy: false
})

const loading = ref(false)
const message = ref(null)

const submitForm = async () => {
  loading.value = true
  message.value = null
  
  try {
    // Simulación de envío
    await new Promise(resolve => setTimeout(resolve, 1800))
    
    message.value = {
      type: 'success',
      text: '¡Excelente! Hemos recibido tu solicitud correctamente.'
    }
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
      privacy: false
    }
  } catch (error) {
    message.value = {
      type: 'error',
      text: 'Hubo un error al enviar tu solicitud. Por favor, intenta nuevamente o contáctanos directamente.'
    }
  } finally {
    loading.value = false
  }
}
</script>

<style>
/* Animación para el gradiente del botón */
.bg-size-200 {
  background-size: 200% 100%;
}

.bg-pos-100 {
  background-position: 100% 0;
}
</style>