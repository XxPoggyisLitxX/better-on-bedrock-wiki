<template>
  <section class="grid">
    <article v-for="(f, i) in features" :key="i" class="card">
      <div class="icon" aria-hidden="true">{{ f.icon }}</div>
      <h3 class="card-title">{{ f.title }}</h3>
      <p class="card-desc">{{ f.description }}</p>
      <slot name="extra" :item="f" />
    </article>
  </section>
</template>

<script setup>
const props = defineProps({
  features: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.grid{
  --cols: 3;
  display: grid;
  grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
  gap: 1rem;
}
@media (max-width: 1024px){ .grid{ --cols: 2; } }
@media (max-width: 640px){ .grid{ --cols: 1; } }
.card{
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 1.25rem;
  padding: 1rem;
  transition: transform .2s ease, background .2s ease;
}
.card:hover{ transform: translateY(-2px); }
.icon{
  font-size: 1.25rem;
  width: 2.25rem; height: 2.25rem;
  display: grid; place-items: center;
  border-radius: .75rem;
  background: var(--vp-c-default-soft);
  margin-bottom: .5rem;
}
.card-title{
  margin: .25rem 0 .35rem;
  font-size: 1.05rem;
}
.card-desc{
  opacity: .9;
  line-height: 1.55;
}
</style>
