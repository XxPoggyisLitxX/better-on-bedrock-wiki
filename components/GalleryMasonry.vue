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

// Helper to resolve image paths for Vite build
function resolveImg(src) {
  // If src starts with '/Main/assets', use import.meta.glob
  if (src.startsWith('/Main/assets')) {
    // Remove leading slash for glob
    const relPath = src.replace(/^\//, '');
    // Vite import.meta.glob eager
    const images = import.meta.glob('/Main/assets/**/*', { eager: true, as: 'url' });
    // Try direct match
    if (images['/' + relPath]) return images['/' + relPath];
    if (images[src]) return images[src];
    // Try without leading slash
    if (images[relPath]) return images[relPath];
  }
  // Otherwise, return as-is (for public/ or external)
  return src;
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
