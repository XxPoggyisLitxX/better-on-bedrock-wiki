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
/* Base Layout */
.zigzag { 
  display: grid; 
  gap: 4rem; /* Gives clear separation between sections */
  margin: 0 auto; 
}

.row {
  display: grid;
  gap: 1.5rem; /* Tighter gap between image and text on mobile */
  align-items: center;
  grid-template-columns: 1fr; /* Mobile stacks by default */
}

/* Media container and Image fixes */
.media {
  border-radius: 16px;
  overflow: hidden;
  background: transparent;
  box-shadow: 0 10px 30px rgb(0 0 0 / 0.25);
}

.media :deep(img),
.media :deep(video) { 
  display: block; 
  width: 100%; 
  height: 100%; 
  object-fit: cover; /* Prevents image squishing/stretching */
}

/* Text & Copy fixes */
.copy { 
  width: 100%;
  max-width: min(100%, 65ch); /* Prevents horizontal scrolling on small phones */
}

.h3 { 
  margin: 0 0 .5rem; 
  font-size: clamp(1.25rem, 1.1vw + 1rem, 1.6rem); 
}

.copy p { 
  opacity: .9; 
  margin: .5rem 0 0; 
}

.bullets { 
  margin: .75rem 0 0; 
  padding-left: 1.1rem; 
  display: grid; 
  gap: .25rem; 
}

.actions { margin-top: 1rem; }

/* MOBILE SPECIFIC POLISH */
@media (max-width: 1023.98px) {
  /* Center everything on mobile for a cleaner look */
  .copy {
    margin: 0 auto;
    text-align: center;
  }
  
  /* Keep bullets left-aligned but center the list itself */
  .bullets {
    text-align: left;
    display: inline-grid;
    margin-top: 1rem;
  }

  /* Center the button */
  .actions {
    display: flex;
    justify-content: center;
  }
}

/* DESKTOP (2 COLUMNS) */
@media (min-width: 1024px) {
  .zigzag { gap: 3rem; }
  .row {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
    gap: 2rem;
  }
  
  /* Default Order: Image Left, Text Right */
  .row .media { order: 1; }
  .row .copy  { order: 2; justify-self: start; text-align: left; }

  /* Reverse Order: Text Left, Image Right */
  .row.reverse .media { order: 2; }
  .row.reverse .copy  { 
    order: 1;
    justify-self: end; /* Hugs the center so it sits next to the image */
    text-align: right; /* Keeps readability attached to the image */
  }

  /* Reset bullets for right-aligned text so they don't look weird */
  .row.reverse .bullets {
    justify-items: end;
    padding-left: 0;
    padding-right: 1.1rem;
  }
}
</style>