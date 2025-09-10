<template>
  <section class="hero" :style="bgStyle">
    <div class="backdrop"></div>
    <div class="wrap">
      <span v-if="badge" class="badge">{{ badge }}</span>
      <h1 class="title">{{ title }}</h1>
      <p class="subtitle">{{ subtitle }}</p>
      <div class="actions">
        <slot name="actions" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  badge: { type: String, default: '' },
  image: { type: String, required: true },
  height: { type: [Number, String], default: 520 },
})

function resolveImg(src) {
  if (src.startsWith('/Main/assets')) {
    const relPath = src.replace(/^\//, '');
    const images = import.meta.glob('/Main/assets/**/*', { eager: true, as: 'url' });
    if (images['/' + relPath]) return images['/' + relPath];
    if (images[src]) return images[src];
    if (images[relPath]) return images[relPath];
  }
  return src;
}

const bgStyle = computed(() => ({
  '--hero-img': `url(${resolveImg(props.image)})`,
  minHeight: typeof props.height === 'number' ? props.height + 'px' : props.height
}))
</script>

<style scoped>
.hero{
  position: relative;
  display: grid;
  place-items: center;
  background-image: var(--hero-img);
  background-size: cover;
  background-position: center;
  overflow: hidden;
}
.backdrop{
  position:absolute; inset:0;
  background: linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.45));
  backdrop-filter: blur(2px);
}
.wrap{
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 1.25rem;
  text-align: center;
  color: #fff;
}
.badge{
  display: inline-block;
  padding: .375rem .625rem;
  font-size: .825rem;
  border-radius: 999px;
  background: rgba(255,255,255,.15);
  border: 1px solid rgba(255,255,255,.25);
  backdrop-filter: blur(6px);
}
.title{
  font-size: clamp(2.25rem, 4vw, 3.5rem);
  margin: .75rem 0;
  line-height: 1.05;
  letter-spacing: .2px;
}
.subtitle{
  opacity: .95;
  font-size: clamp(1rem, 1.6vw, 1.25rem);
  max-width: 60ch;
  margin: 0 auto 1rem;
}
.actions{
  margin-top: .75rem;
  display: flex;
  gap: .75rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
