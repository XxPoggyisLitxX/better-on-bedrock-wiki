<template>
  <section class="zigzag">
    <article
      v-for="(s, i) in sections"
      :key="i"
      class="row"
      :class="{ reverse: alternate && (i % 2 === 1) }"
    >
      <!-- MEDIA -->
      <div class="media">
        
        <ImageSlideshow
          v-if="s.card?.items || s.items"
          class="slideshow"
          :items="s.card?.items || s.items"
          :aspect="s.aspect ?? mediaAspect"
          :autoplay="s.autoplay ?? true"
          :interval="s.interval ?? 3500"
          :arrows="s.arrows ?? true"
          :indicators="s.indicators ?? true"
          pause-on-hover
        />
        <img v-else :src="s.src" :alt="s.alt || 'image'" loading="lazy" />
      </div>

      <!-- TEXT -->
      <div class="copy">
        <h3 v-if="s.title" class="h3">{{ s.title }}</h3>
        <p v-if="s.description" v-html="s.description"></p>

        <ul v-if="s.bullets && s.bullets.length" class="bullets">
          <li v-for="(b, j) in s.bullets" :key="j">{{ b }}</li>
        </ul>

        <div v-if="s.cta" class="actions">
          <a :href="s.cta.href" class="vp-button brand" target="_blank" rel="noopener">
            {{ s.cta.label }}
          </a>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup>
import ImageSlideshow from './ImageSlideshow.vue'

defineProps({
  sections: { type: Array, required: true },
  alternate: { type: Boolean, default: true },
  mediaAspect: { type: String, default: '21/9' }
})
</script>

<style scoped>
 
.zigzag { display: grid; gap: 3rem; margin: 0 auto; }

.row {
  display: grid;
  gap: 2rem;
  align-items: center;
  grid-template-columns: 1fr; /* mobile stacks */
}

/* Desktop: 2 columns; flip order for .reverse */
@media (min-width: 1024px) {
  .row {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  }
  
  .row .media { order: 1; }
  .row .copy  { order: 2; justify-self: start; text-align: left; }

  
  .row.reverse .media { order: 2; }
  .row.reverse .copy  { 
    order: 1;
    justify-self: end;     /* <<< hugs the center so it sits next to the image */
    text-align: right;      /* keep readability */
  }
}

 
.media {
  border-radius: 16px;
  overflow: hidden;
  background: transparent;
  box-shadow: 0 10px 30px rgb(0 0 0 / 0.25);
}

.media :deep(img),
.media :deep(video) { display: block; width: 100%; height: 100%; }

 
.copy       { max-width: 65ch; }
.h3         { margin: 0 0 .5rem; font-size: clamp(1.25rem, 1.1vw + 1rem, 1.6rem); }
.copy p     { opacity: .9; margin: .5rem 0 0; }
.bullets    { margin: .75rem 0 0; padding-left: 1.1rem; display: grid; gap: .25rem; }
.actions    { margin-top: 1rem; }

/* Explicit mobile stack */
@media (max-width: 1023.98px) {
  .row { grid-template-columns: 1fr; }
}
</style>
