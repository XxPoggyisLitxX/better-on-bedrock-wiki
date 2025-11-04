<template>
  <section class="grid">
    <div class="chips" v-if="filters?.length">
      <button
        v-for="f in ['All', ...filters]"
        :key="f"
        class="chip"
        :class="{ active: active === f }"
        @click="active = f"
      >{{ f }}</button>
    </div>

    <div class="wrap">
      <article
        v-for="(c,i) in shown"
        :key="i"
        class="card"
      >
        <img :src="c.src" :alt="c.alt || c.caption" />
        <footer v-if="c.caption">{{ c.caption }}</footer>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
const props = defineProps({
  items: { type: Array, required: true },       // {src, alt, caption, tag}
  filters: { type: Array, default: () => [] }   // ['Combat','Utility','Exploration']
})
const active = ref('All')
const shown = computed(() => active.value === 'All' ? props.items : props.items.filter(i => i.tag === active.value))
</script>

<style scoped>
.grid{display:grid;gap:1rem}
.chips{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:.25rem}
.chip{background:var(--vp-c-bg-soft);border:1px solid var(--vp-c-divider);padding:.35rem .7rem;border-radius:999px}
.chip.active{background:var(--vp-c-brand-1);color:#fff;border-color:transparent}
.wrap{columns:1;column-gap:1rem}
@media(min-width:700px){.wrap{columns:2}}
@media(min-width:1100px){.wrap{columns:3}}
.card{break-inside:avoid;background:var(--vp-c-bg-soft);border-radius:12px;overflow:hidden;margin:0 0 1rem;box-shadow:0 6px 20px rgb(0 0 0 / .18)}
.card img{display:block;width:100%;height:auto}
.card footer{padding:.5rem .75rem;font-size:.9rem;opacity:.9}
</style>
