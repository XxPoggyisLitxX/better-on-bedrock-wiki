<template>
  <section class="masonry">
    <div v-for="(img,i) in images" :key="i" class="item">
      <img :src="resolveImg(img.src)" :alt="img.alt || 'Screenshot'" loading="lazy" />
      <figcaption v-if="img.caption">{{ img.caption }}</figcaption>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  images: { type: Array, default: () => [] }
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
.masonry {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: .75rem;
}
.item {
  flex: 0 1 320px;
  margin-bottom: .75rem;
  border-radius: .875rem;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item img{ width: 100%; display: block; }
figcaption{
  font-size: .85rem;
  padding: .5rem .75rem;
  opacity: .85;
}
</style>