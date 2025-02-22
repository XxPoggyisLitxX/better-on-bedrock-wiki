<template>
  <div class="anvil-wrapper" ref="anvil">
    <input type="text" v-model="outputTooltipText" placeholder="Enter Text" class="tooltip-textbox" />
    <div class="anvil-container">
      <div class="anvil" :style="{ backgroundImage: `url(/Main/assets/UI/smithing_background.png)` }">
        <div class="input-slots">
          <div v-for="(slot, index) in inputSlots" :key="index" class="input-slot"
            :style="{ backgroundImage: `url(/Main/assets/UI/crafting_grid_texture.png)`, left: (inputLeft * 1.7) + (index * 130) + 10 + 'px', top: (inputTop * 1.7) - 20 + 'px' }"
            @mouseover="showTooltip(index, $event)" @mousemove="moveTooltip(index, $event)"
            @mouseleave="hideTooltip(index)">
            <div v-if="slot.currentItem" class="input-item" :style="{ backgroundImage: `url(${slot.currentItem})` }">
            </div>
            <div v-if="index === 0" class="durability-bar">
              <div class="durability-bar-shadow"></div>
              <div class="durability-bar-overlay" :style="inputDurabilityStyle(index)"></div>
            </div>
            <div v-if="overlays[index].visible" class="overlay"></div>
          </div>
          <div class="image-between-inputs"
            :style="{ backgroundImage: `url(/Main/assets/UI/anvil_addition.png)`, left: (inputLeft * 1.7) + 80 + 'px', top: (inputTop * 1.75) - 20 + 'px' }">
          </div>
          <div class="anvil-hammer"
            :style="{ backgroundImage: `url(/Main/assets/UI/anvil_hammer.png)`, left: (inputLeft * 1.7) + 0 + 'px', top: (inputTop * 1.1) - 80 + 'px' }">
          </div>
          <div class="output-arrow"
            :style="{ backgroundImage: `url(/Main/assets/UI/crafting_output_arrow.png)`, left: (inputLeft * 1) + 250 + 'px', top: (inputTop * 1.7) - 20 + 'px' }">
          </div>
        </div>
        <div class="output-slot"
          :style="{ left: (outputLeft * 1.25) + 10 + 'px', top: (outputTop * 1.7) - 20 + 'px', backgroundImage: `url(/Main/assets/UI/crafting_grid_texture.png)` }"
          @mouseover="showOutputTooltip($event)" @mousemove="moveOutputTooltip($event)"
          @mouseleave="hideOutputTooltip()">
          <div v-if="currentOutput" class="output-item" :style="{ backgroundImage: `url(${currentOutput})` }"></div>
          <div class="durability-bar">
            <div class="durability-bar-shadow"></div>
            <div class="durability-bar-overlay" :style="outputDurabilityStyle"></div>
          </div>
          <div v-if="outputOverlay.visible" class="overlay"></div>
        </div>
      </div>
    </div>
    <ToolTip v-for="(tooltip, index) in inputTooltips" :key="index" :text="tooltip" :visible="tooltips[index].visible"
      :x="tooltips[index].x" :y="tooltips[index].y" />
    <ToolTip :text="outputTooltip.text" :visible="outputTooltip.visible" :x="outputTooltip.x" :y="outputTooltip.y" />
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, computed } from 'vue';
import ToolTip from './ToolTip.vue';

const props = defineProps({
  inputItems: { type: Array, default: () => Array(2).fill(null) },
  outputItems: { type: Array, default: () => [] },
  inputLeft: { type: Number, default: 22 },
  inputTop: { type: Number, default: 85.8 },
  outputLeft: { type: Number, default: 300 },
  outputTop: { type: Number, default: 94.6 },
  cycleInterval: { type: Number, default: 2000 },
  inputTooltips: {
    type: Array,
    default: () => Array(2).fill("")
  },
  outputTooltip: {
    type: String,
    default: ""
  }
});

const overlays = reactive(Array(2).fill(null).map(() => ({ visible: false })));
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

const tooltips = reactive(Array(2).fill(null).map(() => ({ visible: false, text: '', x: 0, y: 0 })));
const outputTooltip = reactive({ visible: false, text: '', x: 0, y: 0 });
const outputTooltipText = ref('Staff');


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
    outputTooltip.text = outputTooltipText.value;
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
  const anvilRect = document.querySelector('.anvil-wrapper').getBoundingClientRect();
  tooltip.x = event.clientX - anvilRect.left + 10;
  tooltip.y = event.clientY - anvilRect.top - 20;
};

const inputDurability = reactive([{ value: 0.5 }, { value: 0 }]);
const outputDurability = ref(0.75);

const inputDurabilityStyle = (index) => {
  const durability = inputDurability[index].value;
  let backgroundImage;
  if (durability > 0.5) {
    backgroundImage = 'url(/Main/assets/UI/durability.png)';
  } else if (durability > 0.2) {
    backgroundImage = 'url(/Main/assets/UI/durability_medium.png)';
  } else {
    backgroundImage = 'url(/Main/assets/UI/durability_low.png)';
  }
  return {
    width: `${durability * 52}px`,
    backgroundImage
  };
};

const outputDurabilityStyle = computed(() => {
  const durability = outputDurability.value;
  let backgroundImage;
  if (durability > 0.5) {
    backgroundImage = 'url(/Main/assets/UI/durability.png)';
  } else if (durability > 0.2) {
    backgroundImage = 'url(/Main/assets/UI/durability_medium.png)';
  } else {
    backgroundImage = 'url(/Main/assets/UI/durability_low.png)';
  }
  return {
    width: `${durability * 52}px`,
    backgroundImage
  };
});

const inputSlots = reactive(Array(2).fill(null).map(() => ({ currentItem: null, itemIndex: 0 })));
const outputIndex = ref(0);

const currentOutput = computed(() => {
  if (props.outputItems && props.outputItems.length > 0) {
    return props.outputItems[outputIndex.value];
  }
  return null;
});

onMounted(() => {
  initializeInputSlots();
  startInputShuffling();
  startOutputCycling();
});

const initializeInputSlots = () => {
  props.inputItems.forEach((items, index) => {
    if (items && items.length > 0) {
      inputSlots[index].currentItem = items[0];
    }
  });
};

const startInputShuffling = () => {
  setInterval(() => {
    props.inputItems.forEach((items, index) => {
      if (items && items.length > 1) {
        inputSlots[index].itemIndex = (inputSlots[index].itemIndex + 1) % items.length;
        inputSlots[index].currentItem = items[inputSlots[index].itemIndex];
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
</script>

<style scoped>
@font-face {
  font-family: 'YourCustomFont';
  src: url('/Main/assets/UI/Minecraftia-Regular.ttf') format('woff2');
  font-weight: 700;
  font-style: normal;
}

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

.tooltip-textbox {
  position: absolute;
  top: 56px;
  left: 150px;
  width: 320px;
  height: 46px;
  padding: 15px 5px 5px 5px;
  z-index: 1000;
  image-rendering: pixelated;
  background-size:cover;
  background-image: url('/Main/assets/UI/text_field.png');
  font-family: 'YourCustomFont', sans-serif;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 14px;
}

.tooltip-textbox::placeholder {
  color: lightgrey;
}

.tooltip-textbox::-webkit-input-placeholder {
  color: lightgrey;
}

.tooltip-textbox::-moz-placeholder {
  color: lightgrey;
  opacity: 1;
}

.tooltip-textbox:-ms-input-placeholder {
  color: lightgrey;
}

.tooltip-textbox::-ms-input-placeholder {
  color: lightgrey;
}

.anvil-wrapper {
  position: relative;
  overflow: visible;
}

.anvil-container {
  width: 504.9px;
  height: 269.28px;
  position: relative;
}

.anvil {
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

.input-slot,
.output-slot {
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

.image-between-inputs {
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  width: 51.84px;
  height: 51.84px;
}

.anvil-hammer {
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  width: 91.84px;
  height: 91.84px;
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

.input-item,
.output-item {
  width: 80%;
  height: 80%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.durability-bar {
  position: absolute;
  bottom: 5px;
  left: 9px;
  width: 52px;
  height: 12px;
  display: flex;
  align-items: center;
}

.durability-bar-shadow {
  position: absolute;
  width: 46px;
  height: 8px;
  background-image: url('/Main/assets/UI/durability_shadow.png');
}

.durability-bar-overlay {
  position: absolute;
  height: 6px;
  background-image: url('/Main/assets/UI/durability.png');
}
</style>