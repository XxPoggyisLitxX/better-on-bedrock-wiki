<template>
  <div v-if="visible" :style="tooltipStyle" class="tooltip">
    <div class="tooltip-border">
      <div class="tooltip-background">
        <div class="tooltip-content">
          <span v-html="text"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  text: { type: String, required: true },
  visible: { type: Boolean, required: true },
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  styles: { type: Object, default: () => {} }
});

const tooltipStyle = computed(() => ({
  top: `${props.y}px`,
  left: `${props.x}px`,
}));

const dynamicStyles = computed(() => {
  const generatedStyles = {};
  for (const selector in props.styles) {
    for (const property in props.styles[selector]) {
      generatedStyles[selector] = generatedStyles[selector] || {};
      generatedStyles[selector][property] = props.styles[selector][property];
    }
  }
  return generatedStyles;
});
</script>

<style scoped>
.tooltip {
  position: absolute;
  z-index: 1000;
  pointer-events: none;
  font-family: 'MinecraftFont', sans-serif;
  font-size: 14px;
  white-space: pre-line;
  display: flex;
  transition: top 0.1s, left 0.1s;
}

.tooltip-content {
  color: #fcfcfc;
  text-shadow: 3px 3px 0px #3e3e3e;
  font-size: large;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: none;
  text-rendering: optimizeSpeed;
}

.tooltip-border {
  display: flex;
  padding: 4px;
  background-color: #2c0863;
  border-radius: 4px;
}

.tooltip-background {
  background-color: #1b0c1b;
  padding: 6px;
  border-radius: 2px;
}

.tooltip-content span {
  color: #fcfcfc;
}

.tooltip-title {
  font-weight: bold;
  color: yellow;
  text-shadow: 1px 1px 0px #b3b300;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: none;
  text-rendering: optimizeSpeed;
}

.tooltip-property {
  color: lightgrey;
  text-shadow: 1px 1px 0px #a9a9a9;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: none;
  text-rendering: optimizeSpeed;
}

.tooltip-value {
  color: #5454fc;
  text-shadow: 1px 1px 0px #2a2a7d;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: none;
  text-rendering: optimizeSpeed;
}
</style>