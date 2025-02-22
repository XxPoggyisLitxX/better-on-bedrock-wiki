<template>
  <div class="container" style="position: relative;">
    <div class="brewing-stand-container" ref="brewingStand">
      <div class="brewing-stand" :style="{ backgroundImage: `url(/Main/assets/UI/brewing_stand.png)` }">
        <div class="center-container">
          <div class="input-slot" :style="{ backgroundImage: `url(/Main/assets/UI/brewing_input.png)` }" @mouseover="showTooltip(input, $event, 'input')" @mousemove="moveTooltip($event)" @mouseleave="hideTooltip('input')" :class="{ 'overlayed': inputOverlay }">
            <slot name="input" :input="input" :show-tooltip="showTooltip" :move-tooltip="moveTooltip" :hide-tooltip="hideTooltip" :tooltip="props.inputTooltips[0]">
              <div v-if="input" class="input-item" :style="{ backgroundImage: `url(${input})` }"></div>
            </slot>
          </div>
          <div class="progress-bubbles-container" :style="{ backgroundImage: `url(/Main/assets/UI/brew_bubbles_empty.png)` }">
            <div class="progress-bubbles" :style="{ backgroundImage: `url(${currentBubbleFrame})` }"></div>
          </div>
          <div class="brew-fuel" :style="{ backgroundImage: `url(/Main/assets/UI/fuel_length.png)` }"></div>
          <div class="brew-pipe" :style="{ backgroundImage: `url(/Main/assets/UI/brew_pipe.png)` }"></div>
          <div class="fuel-slot" :style="{ backgroundImage: `url(/Main/assets/UI/fuel_slot.png)` }" @mouseover="showTooltip(fuel, $event, 'fuel')" @mousemove="moveTooltip($event)" @mouseleave="hideTooltip('fuel')" :class="{ 'overlayed': fuelOverlay }">
            <slot name="fuel" :fuel="fuel" :show-tooltip="showTooltip" :move-tooltip="moveTooltip" :hide-tooltip="hideTooltip" :tooltip="props.fuelTooltip">
              <div v-if="fuel" class="fuel-item" :style="{ backgroundImage: `url(${fuel})` }"></div>
            </slot>
          </div>
          <div class="pipe" :style="{ backgroundImage: `url(/Main/assets/UI/brew_output_arrow.png)` }"></div>
          <div class="output-slots">
            <div v-for="(output, index) in outputs" :key="index" :class="['output-slot', `output-slot-${index}`, { 'overlayed': outputOverlays[index] }]" :style="{ backgroundImage: `url(/Main/assets/UI/output_slot_${index}.png)` }" @mouseover="showTooltip(output, $event, index)" @mousemove="moveTooltip($event)" @mouseleave="hideTooltip(index)">
              <div v-if="output" class="output-item" :style="{ backgroundImage: `url(${output})` }"></div>
            </div>
          </div>
          <div class="progress-arrow" :style="{ backgroundImage: `url(/Main/assets/UI/brew_progress.png)` }"></div>
        </div>
      </div>
    </div>
    <ToolTip :text="tooltipText" :visible="tooltipVisible" :x="tooltipX" :y="tooltipY" />
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue';
import ToolTip from './ToolTip.vue';

const props = defineProps({
  input: {
    type: String,
    default: null,
  },
  outputs: {
    type: Array,
    default: () => Array(3).fill(null),
  },
  inputTooltips: {
    type: Array,
    default: () => [],
  },
  outputTooltips: {
    type: Array,
    default: () => [],
  },
  fuel: {
    type: String,
    default: null,
  },
  fuelTooltip: {
    type: String,
    default: '',
  },
});

const tooltipText = ref('');
const tooltipVisible = ref(false);
const tooltipX = ref(0);
const tooltipY = ref(0);

const brewingStand = ref(null);

const inputOverlay = ref(false);
const outputOverlays = reactive(Array(3).fill(false));
const fuelOverlay = ref(false);

const bubbleFrames = [
  '/Main/assets/UI/brew_bubbles_0.png',
  '/Main/assets/UI/brew_bubbles_1.png',
  '/Main/assets/UI/brew_bubbles_2.png',
  '/Main/assets/UI/brew_bubbles_3.png',
  '/Main/assets/UI/brew_bubbles_4.png',
  '/Main/assets/UI/brew_bubbles_5.png',
  '/Main/assets/UI/brew_bubbles_6.png',
];

const currentFrameIndex = ref(0);
const currentBubbleFrame = computed(() => bubbleFrames[currentFrameIndex.value]);

const showTooltip = (item, event, index) => {
  if (index === 'input') {
    inputOverlay.value = true;
  } else if (index === 'fuel') {
    fuelOverlay.value = true;
  } else if (typeof index === 'number') {
    outputOverlays[index] = true;
  }

  if (item) {
    tooltipText.value = (index === 'input' ? props.inputTooltips[0] : index === 'fuel' ? props.fuelTooltip : props.outputTooltips[index]) || item.name;
    tooltipVisible.value = true;
    updateTooltipPosition(event);
  }
};

const hideTooltip = (index) => {
  tooltipVisible.value = false;
  if (index === 'input') {
    inputOverlay.value = false;
  } else if (index === 'fuel') {
    fuelOverlay.value = false;
  } else if (typeof index === 'number') {
    outputOverlays[index] = false;
  }
};

const updateTooltipPosition = (event) => {
  if (!brewingStand.value) return;

  const rect = brewingStand.value.parentElement.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  const offsetX = 10;
  const offsetY = 20;

  tooltipX.value = mouseX + offsetX;
  tooltipY.value = mouseY + offsetY;
};

const moveTooltip = (event) => {
  if (tooltipVisible.value) {
    updateTooltipPosition(event);
  }
};

let animationInterval;

const startAnimation = (speed) => {
  animationInterval = setInterval(() => {
    currentFrameIndex.value = (currentFrameIndex.value + 1) % bubbleFrames.length;
  }, speed);
};

const stopAnimation = () => {
  clearInterval(animationInterval);
};

onMounted(() => {
  startAnimation(100);
});

onUnmounted(() => {
  stopAnimation();
});
</script>

<style scoped>
@font-face {
  font-family: 'MinecraftFont';
  src: url('/Main/assets/UI/Minecraftia-Regular.ttf') format('woff2');
}

.brewing-stand-container {
  position: relative;
  width: 432px;
  height: 332px;
}

.brewing-stand {
  width: 100%;
  height: 100%;
  background-size: cover;
  position: relative;
  image-rendering: pixelated;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
}

.center-container {
  position: relative;
  width: 628px;
  height: 261px;
  left: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.input-slot {
  width: 54px;
  height: 54px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 42px;
}

.progress-bubbles-container {
  width: 36px;
  height: 97px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  left: 140px; 
  bottom: calc(50% - 40px);
  transform: translateY(-50%);
}

.progress-bubbles {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
}

.brew-fuel {
  width: 54px;
  height: 12px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  left: 135px;
  bottom: calc(50% - 13px);
  transform: translateY(-50%);
}

.fuel-slot {
  width: 54px;
  height: 54px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  left: 17px;
  bottom: calc(50% - -8px);
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.fuel-item {
  width: 90%;
  height: 90%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.brew-pipe {
  width: 78px;
  height: 60px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  left: 57px;
  bottom: calc(50% - 37px);
  transform: translateY(-50%);
}

.progress-arrow {
  width: 27px;
  height: 84px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  left: 250px; 
  bottom: calc(50% - 35px);
  transform: translateY(-50%);
}

.pipe {
  width: 84px;
  height: 72px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.output-slots {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 10px;
}

.output-slot {
  width: 64px;
  height: 64px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 5px;
}

.output-slot-0 {
  bottom: 44.5px;
}

.output-slot-1 {
  bottom: 21px;
}

.output-slot-2 {
  bottom: 43px;
}

.input-item, .output-item {
  width: 90%;
  height: 90%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.overlayed::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.14);
  pointer-events: none;
}

@media (max-width: 768px) {
  .progress-bubbles-container {
    left: 140px;
    bottom: calc(50% - 20px);
  }

  .progress-arrow {
    left: 280px;
    bottom: calc(50% - 20px);
  }
}

@media (max-width: 480px) {
  .progress-bubbles-container {
    left: 100px;
    bottom: calc(50% - 10px);
  }

  .progress-arrow {
    left: 240px;
    bottom: calc(50% - 10px);
  }
}
</style>