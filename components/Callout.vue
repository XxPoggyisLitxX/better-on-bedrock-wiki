<template>
  <aside class="callout" :class="tone">
    <strong class="label">{{ label }}</strong>
    <div class="body"><slot /></div>
  </aside>
</template>

<script setup>
const props = defineProps({
  tone: { type:String, default: 'tip' },
  label: { type:String, default: 'Heads up' }
})
</script>

<style scoped>
.callout{
  border: 1px solid var(--vp-c-divider);
  border-left-width: .35rem;
  padding: .875rem .875rem .875rem 1rem;
  border-radius: .5rem;
  background: var(--vp-c-bg-soft);
}
.callout.tip{ border-left-color: var(--vp-c-brand-1); }
.callout.warn{ border-left-color: #f59e0b; }
.callout.danger{ border-left-color: #ef4444; }
.label{ display:block; margin-bottom: .25rem; }
.body{ opacity:.95; }
</style>
