<template>
  <div class="container" style="position: relative;">
    <div class="crafting-table-container" ref="craftingTable">
      <div class="crafting-table" :style="{ backgroundImage: `url(/Main/assets/UI/crafting_ui.png)` }">
        <div class="center-container">
          <div class="grid">
            <div
              v-for="(slot, index) in gridSlots"
              :key="index"
              class="grid-item"
              :style="{ backgroundImage: `url(/Main/assets/UI/crafting_grid_texture.png)`, 'background-size': 'cover' }"
              @mouseover="showTooltip(slot.currentItem, $event, index)"
              @mousemove="moveTooltip($event)"
              @mouseleave="hideTooltip(index)"
              :class="{ 'overlayed': gridOverlays[index] }"
            >
              <div v-if="slot.currentItem" class="item-image" :style="{ backgroundImage: `url(${slot.currentItem.image})` }"></div>
            </div>
          </div>
          <div class="arrow" :style="{ backgroundImage: `url(/Main/assets/UI/crafting_output_arrow.png)` }"></div>
          <div
            class="output-slot"
            :style="{ backgroundImage: `url(/Main/assets/UI/crafting_output_slot.png)` }"
            @mouseover="showTooltip(currentOutput, $event, 'output')"
            @mousemove="moveTooltip($event)"
            @mouseleave="hideTooltip('output')"
            :class="{ 'overlayed': outputOverlay }"
          >
            <div v-if="currentOutput" class="output-item" :style="{ backgroundImage: `url(${currentOutput.image})` }"></div>
            <div v-if="outputText" class="output-text">{{ outputText }}</div>
          </div>
        </div>
      </div>
    </div>
    <ToolTip :text="tooltipText" :visible="tooltipVisible" :x="tooltipX" :y="tooltipY" />
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, computed } from 'vue';
import ToolTip from './ToolTip.vue';

const props = defineProps({
  gridItems: {
    type: Array,
    required: true,
  },
  outputItems: {
    type: Array,
    default: () => [],
  },
  outputText: {
    type: String,
    default: '',
  },
  cycleInterval: {
    type: Number,
    default: 2000,
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

const gridSlots = reactive([]);

onMounted(() => {
  initializeGridSlots();
  startShuffling();
  startOutputCycling();
});

const initializeGridSlots = () => {
  gridSlots.length = 0;
  props.gridItems.forEach((items, index) => {
    const slotItems = [];
    if (Array.isArray(items)) {
      items.forEach(item => {
        slotItems.push(item);
      });
    } else {
      slotItems.push(items);
    }
    gridSlots.push({ currentItem: slotItems[0], itemIndex: 0, items: slotItems });
  });
};

const startShuffling = () => {
  setInterval(() => {
    props.gridItems.forEach((items, index) => {
      if (items && items.length > 1) {
        gridSlots[index].itemIndex = (gridSlots[index].itemIndex + 1) % items.length;
        gridSlots[index].currentItem = items[gridSlots[index].itemIndex];
      }
    });
  }, props.cycleInterval);
};

const outputIndex = ref(0);

const tooltipText = ref('');
const tooltipVisible = ref(false);
const tooltipX = ref(0);
const tooltipY = ref(0);
const craftingTable = ref(null);

const gridOverlays = reactive(Array(9).fill(false));
const outputOverlay = ref(false);

const currentOutput = computed(() => {
  if (props.outputItems && props.outputItems.length > 0) {
    return props.outputItems[outputIndex.value];
  }
  return null;
});

const startOutputCycling = () => {
  if (props.outputItems && props.outputItems.length > 1) {
    setInterval(() => {
      outputIndex.value = (outputIndex.value + 1) % props.outputItems.length;
    }, props.cycleInterval);
  }
};

const showTooltip = (item, event, index) => {
  if (typeof index === 'number') {
    gridOverlays[index] = true;
  } else if (index === 'output') {
    outputOverlay.value = true;
  }

  if (item) {
    tooltipText.value = props.inputTooltips[index] || item.name;
    tooltipVisible.value = true;
    updateTooltipPosition(event);
  } else if (index === 'output' && currentOutput.value) {
    tooltipText.value = props.outputTooltips[0] || currentOutput.value.name;
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