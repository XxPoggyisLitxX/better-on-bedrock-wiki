<template>
  <figure class="slideshow" :style="{'--ratio': ratio}">
    <div
      class="viewport"
      @mouseenter="onHover(true)"
      @mouseleave="onHover(false)"
      @pointerdown="onStart"
      @pointermove="onMove"
      @pointerup="onEnd"
      @pointercancel="onEnd"
      @pointerleave="onEnd"
    >
      <div class="track" :style="trackStyle">
        <div v-for="(it, i) in resolvedItems" :key="i" class="slide">
          <img :src="it.src" :alt="it.alt || it.caption || ('Slide ' + (i+1))" loading="lazy" />
          <figcaption v-if="i === index && it.caption" class="overlay-caption">{{ it.caption }}</figcaption>
        </div>
      </div>

      <!-- arrows -->
      <button
        v-if="showControls && arrows"
        class="nav left"
        type="button"
        aria-label="Previous"
        @click="prev"
      >‹</button>
      <button
        v-if="showControls && arrows"
        class="nav right"
        type="button"
        aria-label="Next"
        @click="next"
      >›</button>

      <!-- dots -->
      <div v-if="showControls && indicators" class="dots">
        <button
          v-for="(it, i) in resolvedItems"
          :key="'dot-'+i"
          class="dot"
          :class="{ active: i === index }"
          type="button"
          :aria-label="`Go to slide ${i+1}`"
          @click="go(i)"
        />
      </div>
    </div>
  </figure>
</template>

<script setup>
import { computed, onMounted, onBeforeUnmount, ref, watch } from 'vue'

const props = defineProps({
  items: { type: Array, required: true },
  aspect: { type: String, default: '21/9' },
  autoplay: { type: Boolean, default: true },
  interval: { type: Number, default: 3500 },
  arrows: { type: Boolean, default: true },
  indicators: { type: Boolean, default: true },
  pauseOnHover: { type: Boolean, default: false }
})

// Resolve image helper compatible with Vite build, supports extension-less imports
function resolveImg(src) {
  if (!src || typeof src !== 'string') return src

  // Work with both "/Main/assets" and "Main/assets"
  const isMain = src.startsWith('/Main/assets') || src.startsWith('Main/assets')
  if (isMain) {
    const relPath = src.replace(/^\//, '')
    const images = import.meta.glob('/Main/assets/**/*', { eager: true, as: 'url' })

    // Direct matches
    if (images['/' + relPath]) return images['/' + relPath]
    if (images[src]) return images[src]
    if (images[relPath]) return images[relPath]

    // If no extension provided, try common ones
    const name = relPath.split('/').pop() || ''
    const hasExt = /\.[a-zA-Z0-9]+$/.test(name)
    if (!hasExt) {
      const exts = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.avif', '.svg']
      for (const ext of exts) {
        const withExt = relPath + ext
        if (images['/' + withExt]) return images['/' + withExt]
        if (images[withExt]) return images[withExt]
      }
      // Fallback: index.{ext} inside folder
      for (const ext of exts) {
        const idx = relPath.replace(/\/+$/, '') + '/index' + ext
        if (images['/' + idx]) return images['/' + idx]
        if (images[idx]) return images[idx]
      }
    }
  }
  return src
}

// Normalize and resolve item src values (supports strings or {src,...} objects)
const resolvedItems = computed(() => {
  if (!Array.isArray(props.items)) return []
  return props.items.map((it) => {
    if (it && typeof it === 'object') {
      return { ...it, src: resolveImg(it.src) }
    }
    return { src: resolveImg(String(it)), alt: '', caption: '' }
  })
})

const index = ref(0)
const hovering = ref(false)
let timer = null

const length = computed(() => resolvedItems.value.length)
const showControls = computed(() => length.value > 1)

const ratio = computed(() => {
  const [w, h] = String(props.aspect).split('/').map(Number)
  if (!w || !h) return '56.25%'
  return `${(h / w) * 100}%`
})

const trackStyle = computed(() => ({
  transform: `translateX(${-index.value * 100}%)`
}))

function next() { if (length.value) index.value = (index.value + 1) % length.value }
function prev() { if (length.value) index.value = (index.value - 1 + length.value) % length.value }
function go(i)   { if (i >= 0 && i < length.value) index.value = i }

function clear() { if (timer) { clearInterval(timer); timer = null } }
function start() {
  clear()
  if (!showControls.value) return
  if (!props.autoplay) return
  if (props.pauseOnHover && hovering.value) return
  timer = setInterval(next, props.interval)
}
function onHover(h) {
  hovering.value = h
  if (props.pauseOnHover) { h ? clear() : start() }
}
watch([() => props.autoplay, () => props.interval, showControls, () => props.items], start, { immediate: true })
onMounted(start)
onBeforeUnmount(clear)

/* swipe */
const startX = ref(null)
const dragging = ref(false)
function onStart(e){ startX.value = e.clientX; dragging.value = true }
function onMove(){ if (!dragging.value || startX.value == null) return }
function onEnd(e){
  if (!dragging.value) return
  const dx = (e?.clientX ?? startX.value) - startX.value
  if (Math.abs(dx) > 40) { dx < 0 ? next() : prev() }
  dragging.value = false; startX.value = null
}
</script>

<style scoped>
.slideshow {
  display: grid;
  gap: .35rem;
  border-radius: 16px;
  background: transparent;
  box-shadow: 0 10px 30px rgb(0 0 0 / .25);
  overflow: hidden;
}

/* Aspect box */
.viewport {
  position: relative;
  width: 100%;
  padding-bottom: var(--ratio, 56.25%);
  background: var(--vp-c-bg-soft);
  overflow: hidden;
  border-radius: 16px;
}

/* Slides */
.track {
  position: absolute;
  inset: 0;
  display: flex;
  transition: transform .35s ease;
  will-change: transform;
}
.slide { min-width: 100%; height: 100%; position: relative; }
.slide img { display: block; width: 100%; height: 100%; object-fit: cover; }

/* Arrows */
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px; height: 44px; border-radius: 50%;
  border: none; background: rgba(20,20,20,.7); color: #fff;
  font-size: 28px; line-height: 1;
  display: grid; place-items: center; cursor: pointer;
  z-index: 4;
}
.nav.left  { left: 10px; }
.nav.right { right: 10px; }

/* Overlay caption */
.overlay-caption {
  position: absolute;
  left: .75rem;
  bottom: 2.1rem;
  background: rgba(0,0,0,.35);
  color: #fff;
  padding: .5rem 1rem;
  border-radius: .1rem;
  font-size: .95rem;
  opacity: .95;
  z-index: 3;
  max-width: 80%;
  box-shadow: 0 2px 8px rgba(0,0,0,.18);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Dots */
.dots {
  position: absolute;
  left: 0; right: 0; bottom: .6rem;
  display: flex; justify-content: center; gap: .4rem;
  z-index: 5;
  pointer-events: auto;
}
.dot {
  width: 8px; height: 8px; border-radius: 999px;
  background: rgba(255,255,255,.35); border: 0; padding: 0;
}
.dot.active { background: rgba(255,255,255,.9); }
</style>