<template>
  <div class="container mx-auto px-4 lg:px-8 py-12">
    <article v-if="post">
      <header class="mb-6">
        <h1 class="text-3xl font-bold text-[#001D3C] mb-2">{{ post.title }}</h1>
        <p class="text-sm text-gray-600">{{ post.date }} • {{ post.readTime }}</p>
      </header>
      <section class="prose max-w-none">
        <p>{{ post.excerpt }}</p>
        <p class="mt-6 text-sm text-gray-600">Autor: {{ post.author.name }} — {{ post.author.role }}</p>
      </section>
    </article>

    <div v-else class="text-center py-24">
      <h2 class="text-xl font-semibold">Artículo no encontrado</h2>
      <p class="text-gray-600 mt-4">Puede que el artículo haya sido movido o eliminado.</p>
      <NuxtLink to="/blog" class="inline-block mt-6 text-[#00439D] font-semibold">Volver al blog</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useHead } from '#imports'
import posts from '../../../content/posts.json'

const route = useRoute()
const slug = route.params.slug
const post = posts.find(p => p.slug === slug)

if (post) {
  useHead({
    title: post.title + ' | ASCONFI JY',
    meta: [
      { name: 'description', content: post.excerpt },
      { property: 'og:title', content: post.title },
      { property: 'og:description', content: post.excerpt },
      { property: 'og:url', content: `https://asconfijy.com/blog/${post.slug}` }
    ]
  })
}
</script>

<style scoped>
.prose p { color: #1f2937 }
</style>