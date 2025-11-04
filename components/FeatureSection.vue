<template>
  <section class="feature-row" :class="{ reverse }">
    <div class="media">
      <ImageSlideshow v-if="images?.length" :items="images" :aspect="aspect" autoplay arrows indicators />
      <img v-else :src="resolveImg(src)" :alt="alt || 'image'" loading="lazy" />
    </div>
    <div class="copy">
      <h3 class="h3">{{ title }}</h3>
      <p v-if="subtitle" class="sub">{{ subtitle }}</p>
      <ul v-if="bullets?.length" class="bullets">
        <li v-for="(b,i) in bullets" :key="i">{{ b }}</li>
      </ul>
      <slot />
    </div>
  </section>
</template>

<script setup>
import ImageSlideshow from './ImageSlideshow.vue'
defineProps({
  title: String,
  subtitle: String,
  bullets: Array,
  images: Array,
  src: String,
  alt: String,
  reverse: { type: Boolean, default: false },
  aspect: { type: String, default: '16/9' }
})

function resolveImg(src) {
  if (!src || typeof src !== 'string') return src
  if (src.startsWith('/Main/assets') || src.startsWith('Main/assets')) {
    const relPath = src.replace(/^\//, '')
    const images = import.meta.glob('/Main/assets/**/*.{png,jpg,jpeg,webp,avif,gif,svg}', {
      eager: true,
      query: '?url',
      import: 'default'
    })
    return images['/' + relPath] || images[src] || images[relPath] || src
  }
  return src
}
</script>

<style scoped>
.feature-row { display: grid; gap: 1.5rem; align-items: center; max-width: 1500px; margin: 0 auto; }
@media(min-width:1024px){
  .feature-row{grid-template-columns:1.2fr 1fr}
  .feature-row.reverse .media{order:2}
  .feature-row.reverse .copy{order:1}
}
.media{border-radius:14px;overflow:hidden;box-shadow:0 10px 30px rgb(0 0 0 / .25)}
.media :deep(img){display:block;width:100%;height:auto}
.h3{margin:0 0 .25rem;font-size:clamp(1.25rem,1vw+1rem,1.6rem)}
.sub{opacity:.9;margin:0 0 .5rem}
.bullets{margin:.5rem 0 0;display:grid;gap:.25rem;padding-left:1.1rem}
</style>