<template>
  <div class="trading-ui">
    <div class="scroll-container">
      <div v-for="(tier, index) in tiers" :key="index" class="tier-row">
        <div class="tier-label">{{ tier.label }}</div>
        <div v-for="(button, buttonIndex) in tier.buttons" :key="buttonIndex" class="button-container">
          <button class="item-button" @click="playSound">
            <div class="item-container">
              <div class="input-items">
                <div
                  v-for="(item, itemIndex) in button.inputItems"
                  :key="itemIndex"
                  class="item"
                  @mouseover="showTooltip(item.toolTip, $event)"
                  @mousemove="moveTooltip($event)"
                  @mouseleave="hideTooltip"
                >
                  <img
                    :src="getImageURL(item.image)"
                    alt="Item"
                    class="item-image"
                  />
                  <span class="item-quantity" v-if="item.quantity">{{ item.quantity }}</span>
                </div>
              </div>
              <div class="arrow"></div>
              <div
                class="output-item"
                @mouseover="showTooltip(button.outputItem.toolTip, $event)"
                @mousemove="moveTooltip($event)"
                @mouseleave="hideTooltip"
                :style="{ backgroundImage: `url(${getImageURL(button.outputItem.image)})`, backgroundSize: 'cover' }"
              >
                <img :src="getImageURL(button.outputItem.image)" alt="Output Item" class="item-image" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
    <ToolTip :text="tooltip.text" :visible="tooltip.visible" :x="tooltip.x" :y="tooltip.y" />
    <audio ref="buttonSound" :src="buttonSoundSrc"></audio>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue';
import ToolTip from './ToolTip.vue';

const assets = import.meta.glob('/Main/assets/**/*', { eager: true });

const props = defineProps({
  tiers: {
    type: Array,
    required: true,
  },
});

const tooltip = reactive({ visible: false, text: '', x: 0, y: 0 });
const buttonSound = ref(null);

const outputArrow = new URL('/Main/assets/UI/crafting_output_arrow.png', import.meta.url).href;
const buttonSoundSrc = new URL('/Main/assets/music/minecraft_click.mp3', import.meta.url).href;

const getImageURL = (imagePath) => {
  if (!imagePath) return null;
  if (imagePath.startsWith("https://")) {
    return imagePath;
  }
  const assetPath = imagePath.startsWith('/Main/assets/item/') ? imagePath : `/Main/assets/${imagePath}.png`;
  return assets[assetPath] ? assets[assetPath].default : null;
};

const showTooltip = (text, event) => {
  tooltip.text = text;
  tooltip.visible = true;
  updateTooltipPosition(event);
};

const moveTooltip = (event) => {
  if (tooltip.visible) {
    updateTooltipPosition(event);
  }
};

const hideTooltip = () => {
  tooltip.visible = false;
};

const updateTooltipPosition = (event) => {
  const tradingRect = document.querySelector('.trading-ui').getBoundingClientRect();
  tooltip.x = event.clientX - tradingRect.left + 10;
  tooltip.y = event.clientY - tradingRect.top - 20;
};

const playSound = () => {
  const soundClone = buttonSound.value.cloneNode();
  soundClone.play();
};
</script>

<style scoped>
@font-face {
  font-family: 'YourCustomFont';
  src: url('/Main/assets/UI/Minecraftia-Regular.ttf') format('woff2');
  font-weight: 700;
  font-style: normal;
}

.trading-ui {
  background-image: url('/Main/assets/UI/trading_background.png');
  background-size: cover;
  padding: 20px;
  image-rendering: pixelated;
  width: 351px;
  height: 550px;
  max-height: 550px;
  font-family: 'YourCustomFont', sans-serif;
  position: relative;
}

.scroll-container {
  height: 100%;
  overflow-y: auto;
  padding-top: 10px;
}

.scroll-container::-webkit-scrollbar {
  width: 12px;
}

.scroll-container::-webkit-scrollbar-track {
  background: url('/Main/assets/UI/scroller.png');
  background-size: cover;
}

.scroll-container::-webkit-scrollbar-thumb {
  background: url('/Main/assets/UI/scroller.png');
  background-size: cover;
  border-radius: 6px;
}

.scroll-container {
  scrollbar-width: thin;
  scrollbar-color: url('/Main/assets/UI/scroller.png') url('/Main/assets/UI/scroller.png');
}

.tier-row {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border-radius: 5px;
}

.tier-label {
  font-weight: bold;
  color: white;
  margin-bottom: 6;
  font-size: 1.2em;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.7);
}

.item-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.item-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/Main/assets/UI/trading_button.png');
  background-size: contain;
  padding: 10px;
  width: 90%;
  height: 57px;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
}

.item-button:hover {
  background-image: url('/Main/assets/UI/trading_button_hover.png');
}

.item-button:active {
  background-image: url('/Main/assets/UI/trading_button_pressed.png');
}

.input-items {
  display: flex;
  align-items: center;
  margin-right: auto;
}

.output-item {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.item {
  position: relative;
  margin-right: 10px;
}

.item-image {
  width: 40px;
  height: 40px;
}

.item-quantity {
  position: absolute;
  bottom: -8px;
  right: -5px;
  color: white;
  padding: 2px 5px;
  border-radius: 3px;
  font-size: large;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.7);
}

.arrow {
  margin: 0 15px;
  display: flex;
  align-items: center;
  width: 45px;
  height: 30px;
  background-image: url('/Main/assets/UI/crafting_output_arrow.png');
  background-size: contain;
  background-repeat: no-repeat;
}

.arrow-image {
  width: 45px;
  height: 30px;
}

.tooltip {
  position: absolute;
  z-index: 1000;
  color: white;
  padding: 5px;
  pointer-events: none;
}
</style>