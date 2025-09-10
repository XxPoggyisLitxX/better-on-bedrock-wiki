<template>
  <div class="video">
    <iframe
      :src="computedSrc"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  id: { type:String, required:true },
  start: { type:Number, default: 0 }
})
const computedSrc = computed(()=>`https://www.youtube.com/embed/${props.id}?rel=0&modestbranding=1&start=${props.start}`)
</script>

<style scoped>
.video{
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  background: #000;
}
.video iframe{ width: 100%; height: 100%; display: block; }
</style>
