
<template>
  <div class="container" style="position: relative;">
    <div class="crafting-table-container" ref="craftingTable">
      <div class="crafting-table" :style="{ backgroundImage: `url(/Main/assets/UI/crafting_ui.png)` }">
        <div class="center-container">
          <div class="grid">
            <div
              v-for="(item, index) in grid"
              :key="index"
              class="grid-item"
              :style="{ backgroundImage: `url(/Main/assets/UI/crafting_grid_texture.png)`, 'background-size': 'cover' }"
              @mouseover="showTooltip(item, $event, index)"
              @mousemove="moveTooltip($event)"
              @mouseleave="hideTooltip(index)"
              :class="{ 'overlayed': gridOverlays[index] }"
            >
              <div v-if="item && item.image" class="item-image" :style="{ backgroundImage: `url(${item.image})` }"></div>
            </div>
          </div>
          <div class="arrow" :style="{ backgroundImage: `url(/Main/assets/UI/crafting_output_arrow.png)` }"></div>
          <div
            class="output-slot"
            :style="{ backgroundImage: `url(/Main/assets/UI/crafting_output_slot.png)` }"
            @mouseover="showTooltip(output, $event, 'output')"
            @mousemove="moveTooltip($event)"
            @mouseleave="hideTooltip('output')"
            :class="{ 'overlayed': outputOverlay }"
          >
            <div v-if="output" class="output-item" :style="{ backgroundImage: `url(${output})` }"></div>
            <div v-if="outputText" class="output-text">{{ outputText }}</div>
          </div>
        </div>
      </div>
    </div>
    <ToolTip :text="tooltipText" :visible="tooltipVisible" :x="tooltipX" :y="tooltipY" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import ToolTip from './ToolTip.vue';

const props = defineProps({
  grid: {
    type: Array,
    default: () => Array(9).fill(null),
  },
  output: {
    type: String,
    default: null,
  },
  outputText: {
    type: String,
    default: '',
  },
  outputSlotText: {
    type: String,
    default: '',
  },
  inputTooltips: {
    type: Array,
    default: () => Array(9).fill(''),
  },
  outputTooltips: {
    type: Array,
    default: () => [],
  },
});

const tooltipText = ref('');
const tooltipVisible = ref(false);
const tooltipX = ref(0);
const tooltipY = ref(0);

const craftingTable = ref(null);

const gridOverlays = reactive(Array(9).fill(false));
const outputOverlay = ref(false);

const showTooltip = (item, event, index) => {
  if (typeof index === 'number') {
    gridOverlays[index] = true;
  } else if (index === 'output') {
    outputOverlay.value = true;
  }

  if (item && item.image) {
    tooltipText.value = props.inputTooltips[index] || item.name;
    tooltipVisible.value = true;
    updateTooltipPosition(event);
  } else if (index === 'output' && props.output) {
    tooltipText.value = props.outputTooltips[0] || props.outputSlotText;
    tooltipVisible.value = true;
    updateTooltipPosition(event);
  } else if (index === 'output' && props.outputSlotText && !props.output) {
    tooltipText.value = props.outputSlotText;
    tooltipVisible.value = true;
    updateTooltipPosition(event);
  }
};

const hideTooltip = (index) => {
  tooltipVisible.value = false;
  if (typeof index === 'number') {
    gridOverlays[index] = false;
  } else if (index === 'output') {
    outputOverlay.value = false;
  }
};


const updateTooltipPosition = (event) => { 
  if (!craftingTable.value) return;

  const rect = craftingTable.value.parentElement.getBoundingClientRect();
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
</script>

<style scoped>
@font-face {
  font-family: 'MinecraftFont';
  src: url('/Main/assets/UI/Minecraftia-Regular.ttf') format('woff2');
}

.crafting-table-container {
  position: relative;
  width: 528px;
  height: 261px;
}

.crafting-table {
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0px;
  width: 180px;
  height: 180px;
  image-rendering: pixelated;
  margin-right: 42px;
}

.grid-item {
  width: 98%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-image {
  width: 90%;
  height: 90%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.arrow {
  width: 67.5px;
  height: 45px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  image-rendering: pixelated;
  margin-left: 1.5px;
  margin-right: 42px;
}

.output-slot {
  width: 78px;
  height: 78px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.output-item {
  width: 70%;
  height: 70%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.output-text {
  font-family: 'MinecraftFont', sans-serif;
  color: #e6e6e6;
  position: absolute;
  top: 75%;
  left: 78%;
  font-size: x-large;
  transform: translateX(-50%);
  white-space: nowrap;
  text-shadow: 3px 3px 0 #424242;
}
.overlayed {
  position: relative;
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
</style>