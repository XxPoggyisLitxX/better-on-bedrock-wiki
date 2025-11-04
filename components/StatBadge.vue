<template>
  <div class="stats" :style="{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }">
    <div v-for="(s,i) in items" :key="i" class="stat">
      <div class="num">{{ s.value }}</div>
      <div class="txt">{{ s.label }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items:{ type:Array, default:()=>[] }
})
</script>

<style scoped>
.stats {
  display: grid;
  gap: .75rem;
  justify-content: center;
  margin: 0 auto;
  max-width: 600px;
}
@media (max-width: 700px){ .stats{ grid-template-columns: 1fr; } }
.stat{
  text-align:center;
  background: var(--vp-c-bg-soft);
  border:1px solid var(--vp-c-divider);
  border-radius: .875rem;
  padding: .75rem;
}
.num{ font-size: 1.75rem; line-height:1; }
.txt{ opacity:.8; margin-top:.25rem; }
</style>
