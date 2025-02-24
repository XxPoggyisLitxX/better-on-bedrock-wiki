<template>
  <div class="image-carousel">
    <img :src="resolvedImages[currentIndex]" alt="Carousel Image" class="carousel-image" />
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
      resolvedImages: [],
    };
  },
  mounted() {
    this.resolveImages();
    this.startCarousel();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    resolveImages() {
      this.resolvedImages = this.images.map(image => new URL(`/Main/assets/${image}.png`, import.meta.url).href);
    },
    startCarousel() {
      this.interval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.resolvedImages.length;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.image-carousel {
  display: flex;
}

.carousel-image {
  max-width: 10%;
  height: auto;
  transition: opacity 0.5s ease-in-out;
}
</style>