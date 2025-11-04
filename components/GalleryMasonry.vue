<template>
  <section class="masonry">
    <figure v-for="(card, i) in cards" :key="i" class="item">
      
      <ImageSlideshow
        v-if="card.items && card.items.length"
        class="slideshow"
        :items="card.items"
        :aspect="card.aspect ?? '21/9'"
        :autoplay="card.autoplay ?? true"
        :interval="card.interval ?? 3500"
        :arrows="card.arrows ?? true"
        :indicators="card.indicators ?? true"
        pause-on-hover
      />
      
      <div v-else style="position:relative;">
        <img
          :src="resolveImg(card.src)"
          :alt="card.alt || 'Screenshot'"
          loading="lazy"
          style="display:block;width:100%;height:auto;"
        />
        <figcaption v-if="card.caption" class="overlay-caption" style="position:absolute;left:0.75rem;bottom:0.75rem;background:rgba(0,0,0,0.45);color:#fff;padding:0.5rem 1rem;border-radius:0.5rem;font-size:.95rem;opacity:0.95;z-index:3;max-width:80%;box-shadow:0 2px 8px rgba(0,0,0,0.18);">
          {{ card.caption }}
        </figcaption>
      </div>
      <figcaption v-if="card.title" style="margin-top:0.5rem;font-weight:600;">{{ card.title }}</figcaption>
    </figure>
  </section>
</template>

<script setup>
import ImageSlideshow from './ImageSlideshow.vue'

const props = defineProps({
  cards: { type: Array, required: true }
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
.masonry { column-gap: 0.9rem; column-count: 1; }
@media (min-width: 768px)  { .masonry { column-count: 2; } }
@media (min-width: 1200px) { .masonry { column-count: 2; } }

.item { break-inside: avoid; margin-bottom: 0.9rem; border-radius: 18px; overflow: hidden; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft); box-shadow: 0 2px 10px rgba(0,0,0,.12); }
.item img { width: 100%; display: block; height: auto; }
:deep(.vp-carousel) { border: none; border-radius: 18px 18px 0 0; }

figcaption { display: grid; gap: .25rem; font-size: .95rem; padding: .85rem 1rem; color: var(--vp-c-text-1); background: rgba(0,0,0,.06); }
.dark figcaption { background: rgba(255,255,255,.06); }
figcaption > strong { font-weight: 600; }
</style>