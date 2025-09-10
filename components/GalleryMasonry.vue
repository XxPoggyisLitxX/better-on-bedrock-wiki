<template>
  <section class="masonry">
    <div v-for="(img,i) in images" :key="i" class="item">
      <img :src="img.src" :alt="img.alt || 'Screenshot'" loading="lazy" />
      <figcaption v-if="img.caption">{{ img.caption }}</figcaption>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  images:{ type:Array, default:()=>[] }
})
</script>

<style scoped>
.masonry{
  columns: 3 320px;
  column-gap: .75rem;
}
.item{
  break-inside: avoid;
  margin-bottom: .75rem;
  border-radius: .875rem;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}
.item img{ width: 100%; display: block; }
figcaption{
  font-size: .85rem;
  padding: .5rem .75rem;
  opacity: .85;
}
</style>
