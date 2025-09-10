<template>
  <div class="carousel">
    <div class="carousel-images">
      <img :src="images[current]" alt="carousel image" class="carousel-img" />
    </div>
    <button class="carousel-btn prev" @click="prev">&#10094;</button>
    <button class="carousel-btn next" @click="next">&#10095;</button>
    <div class="carousel-indicators">
      <span
        v-for="(img, idx) in images"
        :key="idx"
        :class="['indicator', { active: idx === current }]"
        @click="goTo(idx)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCarousel',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      current: 0
    };
  },
  methods: {
    next() {
      this.current = (this.current + 1) % this.images.length;
    },
    prev() {
      this.current = (this.current - 1 + this.images.length) % this.images.length;
    },
    goTo(idx) {
      this.current = idx;
    }
  }
};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: auto;
  overflow: hidden;
}
.carousel-images {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
}
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.4);
  color: #fff;
  border: none;
  font-size: 2rem;
  padding: 0 12px;
  cursor: pointer;
  z-index: 2;
  border-radius: 50%;
}
.prev {
  left: 10px;
}
.next {
  right: 10px;
}
.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}
.indicator {
  width: 12px;
  height: 12px;
  background: #ccc;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;
}
.indicator.active {
  background: #333;
}
</style>
