<template>
  <div class="smithing-table-wrapper" ref="smithingTable">
    <div class="smithing-table-container">
      <div class="smithing-table" :style="{ backgroundImage: `url(${backgroundImageUrl})` }">
        <div class="input-slots">
          <div v-for="(slot, index) in inputSlots" :key="index" class="input-slot" 
               :style="{ backgroundImage: `url(${inputSlotImageUrl})`, left: (inputLeft * 1.7) + (index * 59.84) + 'px', top: (inputTop * 1.7) + 'px' }"
               @mouseover="showTooltip(index, $event)" 
               @mousemove="moveTooltip(index, $event)" 
               @mouseleave="hideTooltip(index)">
            <div v-if="slot.currentItem" class="input-item" :style="{ backgroundImage: `url(${inputImageUrls[index]})` }"></div>
             <div v-if="overlays[index].visible" class="overlay"></div>
          </div>
          <div class="output-arrow" :style="{ backgroundImage: `url(${arrowImageUrl})`, left: (inputLeft * 1.7) + 36 * 2.8 * 1.7 + 18.7 + 'px', top: (inputTop * 1.7) + 'px' }"></div>
        </div>
        <div class="output-slot" :style="{ left: (outputLeft * 1.7) + 'px', top: (outputTop * 1.7) + 'px', backgroundImage: `url(${outputSlotImageUrl})` }"
             @mouseover="showOutputTooltip($event)" 
             @mousemove="moveOutputTooltip($event)" 
             @mouseleave="hideOutputTooltip()">
          <div v-if="currentOutput" class="output-item" :style="{ backgroundImage: `url(${currentOutputImageUrl})` }"></div>
           <div v-if="outputOverlay.visible" class="overlay"></div>
        </div>
        <div class="hammer" :style="{ backgroundImage: `url(${hammerImageUrl})`, left: (hammerLeft * 1.7) + 'px', top: (hammerTop * 1.7) + 'px' }"></div>
      </div>
    </div>
    <ToolTip v-for="(tooltip, index) in inputTooltips" :key="index" :text="tooltip" :visible="tooltips[index].visible" :x="tooltips[index].x" :y="tooltips[index].y" />
    <ToolTip :text="outputTooltip.text" :visible="outputTooltip.visible" :x="outputTooltip.x" :y="outputTooltip.y" />
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, computed, watch } from 'vue';
import ToolTip from './ToolTip.vue';

const props = defineProps({
  background: { type: String, required: true },
  inputItems: { type: Array, default: () => Array(3).fill(null) },
  outputItems: { type: Array, default: () => [] },
  inputLeft: { type: Number, default: 22 },
  inputTop: { type: Number, default: 85.8 },
  outputLeft: { type: Number, default: 209 },
  outputTop: { type: Number, default: 94.6 },
  hammerLeft: { type: Number, default: 22 },
  hammerTop: { type: Number, default: 22 },
  cycleInterval: { type: Number, default: 2000 },
  inputTooltips: {
    type: Array,
    default: () => Array(3).fill("")
  },
  outputTooltip: {
    type: String,
    default: ""
  }
});

const overlays = reactive(Array(3).fill(null).map(() => ({ visible: false })));
const outputOverlay = reactive({ visible: false });

const showOverlay = (index) => {
  overlays[index].visible = true;
};

const hideOverlay = (index) => {
  overlays[index].visible = false;
};

const showOutputOverlay = () => {
  outputOverlay.visible = true;
};

const hideOutputOverlay = () => {
  outputOverlay.visible = false;
};

const tooltips = reactive(Array(3).fill(null).map(() => ({ visible: false, text: '', x: 0, y: 0 })));
const outputTooltip = reactive({ visible: false, text: '', x: 0, y: 0 });

const showTooltip = (index, event) => {
  const slot = inputSlots[index];
  if (slot && slot.currentItem) {
    tooltips[index].text = props.inputTooltips[index];
    tooltips[index].visible = true;
    updateTooltipPosition(tooltips[index], event);
    showOverlay(index);
  }
};

const moveTooltip = (index, event) => {
  if (tooltips[index].visible) {
    updateTooltipPosition(tooltips[index], event);
  }
};

const hideTooltip = (index) => {
  tooltips[index].visible = false;
  hideOverlay(index)
};

const showOutputTooltip = (event) => {
  if (currentOutput.value) {
    outputTooltip.text = props.outputTooltip;
    outputTooltip.visible = true;
    updateTooltipPosition(outputTooltip, event);
    showOutputOverlay();
  }
};

const moveOutputTooltip = (event) => {
  if (outputTooltip.visible) {
    updateTooltipPosition(outputTooltip, event);
  }
};

const hideOutputTooltip = () => {
  outputTooltip.visible = false;
  hideOutputOverlay()
};

const updateTooltipPosition = (tooltip, event) => {
  const smithingTableRect = document.querySelector('.smithing-table-wrapper').getBoundingClientRect();
  tooltip.x = event.clientX - smithingTableRect.left + 10;
  tooltip.y = event.clientY - smithingTableRect.top - 20;
};

const inputSlots = reactive(Array(3).fill(null).map(() => ({ currentItem: null, itemIndex: 0, items: [] })));
const outputIndex = ref(0);

const currentOutput = computed(() => {
  if (props.outputItems && props.outputItems.length > 0) {
    return props.outputItems[outputIndex.value];
  }
  return null;
});

const currentOutputImageUrl = computed(() => {
  const item = currentOutput.value;
  if (item) {
    return item.startsWith('http') ? item : new URL(`/Main/assets/${item}.png`, import.meta.url).href;
  }
  return '';
});

const backgroundImageUrl = computed(() => new URL(`/Main/assets/UI/crafting_ui.png`, import.meta.url).href);
const hammerImageUrl = computed(() => new URL(`/Main/assets/UI/smithing_hammer.png`, import.meta.url).href);
const inputSlotImageUrl = computed(() => new URL(`/Main/assets/UI/crafting_grid_texture.png`, import.meta.url).href);
const outputSlotImageUrl = computed(() => new URL(`/Main/assets/UI/crafting_grid_texture.png`, import.meta.url).href);
const arrowImageUrl = computed(() => new URL(`/Main/assets/UI/crafting_output_arrow.png`, import.meta.url).href);

const inputImageUrls = computed(() => inputSlots.map(slot => {
  const item = slot.currentItem;
  if (item) {
    return item.startsWith('http') ? item : new URL(`/Main/assets/${item}.png`, import.meta.url).href;
  }
  return '';
}));

const initializeInputSlots = () => {
  props.inputItems.forEach((items, index) => {
    if (items && items.length > 0) {
      inputSlots[index].items = items;
      inputSlots[index].currentItem = items[0];
    }
  });
};

const startInputShuffling = () => {
  setInterval(() => {
    inputSlots.forEach((slot, index) => {
      if (slot.items && slot.items.length > 1) {
        slot.itemIndex = (slot.itemIndex + 1) % slot.items.length;
        slot.currentItem = slot.items[slot.itemIndex];
      }
    });
  }, props.cycleInterval);
};

const startOutputCycling = () => {
  if (props.outputItems && props.outputItems.length > 1) {
    setInterval(() => {
      outputIndex.value = (outputIndex.value + 1) % props.outputItems.length;
    }, props.cycleInterval);
  }
};

onMounted(() => {
  initializeInputSlots();
  startInputShuffling();
  startOutputCycling();
});
</script>

<style scoped>
.overlay {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.15);
  pointer-events: none;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.smithing-table-wrapper {
  position: relative;
  overflow: visible;
}

.smithing-table-container {
  width: 504.9px;
  height: 269.28px;
  position: relative;
}

.smithing-table {
  width: 100%;
  height: 100%;
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
  width: 61.84px;
  height: 61.84px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 90%;
  height: 90%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>