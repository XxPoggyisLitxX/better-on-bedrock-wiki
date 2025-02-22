<template>
    <div class="enchanted-item" :style="{ width: width + 'px', height: height + 'px' }">
      <img :src="itemImage" alt="Item" class="item-image">
      <div class="glint-overlay" :style="glintStyle"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      itemImage: {
        type: String,
        required: true,
      },
      width: {
        type: Number,
        default: 64,
      },
      height: {
        type: Number,
        default: 64,
      },
      glintImage: {
        type: String,
        required: true,
      },
      glintSpeed: {
        type: Number,
        default: 2.0,
      },
      glintAngle: {
        type: Number,
        default: 45,
      },
    },
    data() {
      return {
        glintPosition: 0,
        animationFrameId: null,
      };
    },
    computed: {
      glintStyle() {
        const angleRad = (this.glintAngle * Math.PI) / 180;
        const xOffset = Math.cos(angleRad) * this.glintPosition;
        const yOffset = Math.sin(angleRad) * this.glintPosition;
  
        return {
          backgroundImage: `url(${this.glintImage})`,
          backgroundSize: `${2 * Math.sqrt(this.width * this.width + this.height * this.height)}px auto`,
          backgroundPosition: `${xOffset}px ${yOffset}px`,
          width: '100%',
          height: '100%',
        };
      },
    },
    mounted() {
      const itemImg = new Image();
      itemImg.src = this.itemImage;
      itemImg.onload = () => {
        this.createMask();
        this.startAnimation();
      };
      const glintImg = new Image();
      glintImg.src = this.glintImage;
    },
    beforeUnmount() {
      cancelAnimationFrame(this.animationFrameId);
    },
    methods: {
      createMask() {
        const itemImage = this.$el.querySelector('.item-image');
        const glintOverlay = this.$el.querySelector('.glint-overlay');
  
        const canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        const ctx = canvas.getContext('2d');
  
        ctx.drawImage(itemImage, 0, 0, this.width, this.height);
        const imageData = ctx.getImageData(0, 0, this.width, this.height);
        const data = imageData.data;
  
        for (let i = 0; i < data.length; i += 4) {
          const alpha = data[i + 3];
          if (alpha === 0) {
            data[i] = 0;
            data[i + 1] = 0;
            data[i + 2] = 0;
          }
        }
        ctx.putImageData(imageData, 0, 0);
  
        glintOverlay.style.maskImage = `url(${canvas.toDataURL()})`;
        glintOverlay.style.maskMode = 'alpha';
        glintOverlay.style.webkitMaskImage = `url(${canvas.toDataURL()})`;
        glintOverlay.style.webkitMaskMode = 'alpha';
        glintOverlay.style.backgroundColor = 'transparent';
        glintOverlay.style.mixBlendMode = 'screen';
      },
      startAnimation() {
        const updateGlintPosition = () => {
          this.glintPosition += this.glintSpeed;
          if (this.glintPosition > 600) {
            this.glintPosition = 0;
          }
          this.animationFrameId = requestAnimationFrame(updateGlintPosition);
        };
        this.animationFrameId = requestAnimationFrame(updateGlintPosition);
      },
    },
  };
  </script>
  
  <style scoped>
  .enchanted-item {
    position: relative;
    overflow: hidden;
  }
  .item-image {
    width: 100%;
    height: 100%;
    display: block;
  }
  .glint-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 0.75;
  }
  </style>