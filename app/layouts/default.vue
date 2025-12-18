<!-- layouts/default.vue -->
<template>
  <html lang="es">
    <div class="min-h-screen flex flex-col">
      <Header />
      <main class="flex-grow">
        <slot />
      </main>
      <Footer />
    </div>
  </html>
</template>

<script setup>
import Header from '@/components/Layout/Headers/Header.vue'
import Footer from '@/components/Layout/Footers/Footer.vue'
</script>

<style>
/* Estilos globales */
body {
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
}
</style>