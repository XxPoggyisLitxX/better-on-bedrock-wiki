<template>
  <div class="smithing-table" :style="{ backgroundImage: `url(${background})` }">
    <div class="input-slots">
      <div v-for="(i, index) in 3" :key="index" class="input-slot" :style="{ backgroundImage: `url(${inputSlot})`, left: (inputLeft * 1.7) + (index * 59.84) + 'px', top: (inputTop * 1.7) + 'px' }">
        <div v-if="inputs[index]" class="input-item" :style="{ backgroundImage: `url(${inputs[index]})` }"></div>
      </div>
      <div class="output-arrow" :style="{ backgroundImage: `url(${arrow})`, left: (inputLeft * 1.7) + 36 * 2.8 * 1.7 + 18.7 + 'px', top: (inputTop * 1.7) + 'px' }"></div>
    </div>
    <div class="output-slot" :style="{ left: (outputLeft * 1.7) + 'px', top: (outputTop * 1.7) + 'px', backgroundImage: `url(${outputSlot})` }">
      <div v-if="output" class="output-item" :style="{ backgroundImage: `url(${output})` }"></div>
    </div>
    <div class="hammer" :style="{ backgroundImage: `url(${hammer})`, left: (hammerLeft * 1.7) + 'px', top: (hammerTop * 1.7) + 'px' }"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  background: { type: String, required: true },
  inputs: { type: Array, default: () => Array(3).fill(null) },
  output: { type: String, default: null },
  hammer: { type: String, required: true },
  inputSlot: { type: String, required: true },
  outputSlot: { type: String, required: true },
  arrow: { type: String, required: true },
  inputLeft: { type: Number, default: 22 },
  inputTop: { type: Number, default: 85.8 },
  outputLeft: { type: Number, default: 209 },
  outputTop: { type: Number, default: 94.6 },
  hammerLeft: { type: Number, default: 22 },
  hammerTop: { type: Number, default: 22 },
});
</script>

<style scoped>
.smithing-table {
  width: 504.9px;
  height: 269.28px;
  background-size: cover;
  position: relative;
  image-rendering: pixelated;
}

.input-slots {
  display: flex;
  position: relative;
  top: 14.96px;
}

.input-slot, .output-slot {
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  width: 59.84px;
  height: 59.84px;
}

.output-arrow {
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  width: 84.15px;
  height: 56.1px;
  top: -14.96px;
}

.hammer {
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  margin-top: -14.96px;
  width: 112.2px;
  height: 115.94px;
}

.input-item, .output-item {
  width: 94%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>