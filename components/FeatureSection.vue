<template>
  <section class="feature-section" :data-aos="reverse ? 'fade-left' : 'fade-right'">
    <h2 class="section-title">{{ title }}</h2>
    <p class="section-subtitle">{{ subtitle }}</p>
    <div class="image-grid">
      <div class="image-item" v-for="(image, i) in images" :key="i">
        <img :src="image.src" :alt="image.caption" />
        <p class="image-caption">{{ image.caption }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  images: Array,
  reverse: Boolean,
})
</script>

<style scoped>
.feature-section {
  margin: 3rem 0;
}
.section-title {
  font-size: 1.6rem;
  font-weight: bold;
}
.section-subtitle {
  font-size: 1.1rem;
  margin-bottom: 1rem;
}
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
.image-item {
  text-align: center;
}
.image-item img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.image-item img:hover {
  transform: scale(1.02);
}
.image-caption {
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color: #bbb;
}
</style>
