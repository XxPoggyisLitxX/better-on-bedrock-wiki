<template>
    <div class="container" style="position: relative;">
        <div class="furnace-container" ref="furnace">
            <div class="furnace" :style="{ backgroundImage: `url(${background})` }">
                <div class="center-container">
                    <div class="input-fuel-container">
                        <div class="input-slot"
                            :style="{ backgroundImage: `url(${slot})` }"
                            @mouseover="showTooltip(input, $event, 'input')" @mousemove="moveTooltip($event)"
                            @mouseleave="hideTooltip('input')" :class="{ 'overlayed': inputOverlay }">
                            <div v-if="input" class="input-item" :style="{ backgroundImage: `url(${inputImage})` }"></div>
                        </div>
                        <div class="burning-sprite-container" :style="{ backgroundImage: `url(${burnEmpty})` }">
                            <div class="burning-sprite" :style="{ backgroundImage: `url(${currentBurningFrame})` }"></div>
                        </div>
                        <div class="fuel-slot"
                            :style="{ backgroundImage: `url(${slot})` }"
                            @mouseover="showTooltip(fuel, $event, 'fuel')" @mousemove="moveTooltip($event)"
                            @mouseleave="hideTooltip('fuel')" :class="{ 'overlayed': fuelOverlay }">
                            <div v-if="fuel" class="fuel-item" :style="{ backgroundImage: `url(${fuel})` }"></div>
                        </div>
                    </div>
                    <div class="arrow" :style="{ backgroundImage: `url(${outputArrow})` }">
                    </div>
                    <div class="output-slot"
                        :style="{ backgroundImage: `url(${slot})` }"
                        @mouseover="showTooltip(output, $event, 'output')" @mousemove="moveTooltip($event)"
                        @mouseleave="hideTooltip('output')" :class="{ 'overlayed': outputOverlay }">
                        <div v-if="output" class="output-item" :style="{ backgroundImage: `url(${outputImage})` }"></div>
                        <div v-if="outputText" class="output-text">{{ outputText }}</div>
                    </div>
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
    fuel: {
        type: String,
        default: null,
    },
    output: {
        type: String,
        default: null,
    },
    outputText: {
        type: String,
        default: '',
    },
    inputTooltips: {
        type: Array,
        default: () => [],
    },
    fuelTooltips: {
        type: Array,
        default: () => [],
    },
    outputTooltips: {
        type: Array,
        default: () => [],
    },
});

const background = new URL('/Main/assets/UI/furnace_background.png', import.meta.url).href;
const inputImage = computed(() => props.input ? new URL(`/Main/assets/${props.input}.png`, import.meta.url).href : null);
const slot = new URL('/Main/assets/UI/crafting_grid_texture.png', import.meta.url).href;
const outputImage = computed(() => props.output ? new URL(`/Main/assets/${props.output}.png`, import.meta.url).href : null);
const outputArrow = new URL('/Main/assets/UI/crafting_output_arrow.png', import.meta.url).href;
const burnEmpty = new URL('/Main/assets/UI/burn_empty.png', import.meta.url).href;

const tooltipText = ref('');
const tooltipVisible = ref(false);
const tooltipX = ref(0);
const tooltipY = ref(0);

const furnace = ref(null);

const inputOverlay = ref(false);
const fuelOverlay = ref(false);
const outputOverlay = ref(false);

const burningFrames = [
    'burn_progress_1',
    'burn_progress_2',
    'burn_progress_3',
    'burn_progress_4',
    'burn_progress_5',
    'burn_progress_6',
    'burn_progress_7',
    'burn_progress_8',
    'burn_progress_9',
    'burn_progress_10',
    'burn_progress_11',
    'burn_progress_12',
];

const currentFrameIndex = ref(0);
const currentBurningFrame = computed(() => new URL(`/Main/assets/UI/${burningFrames[currentFrameIndex.value]}.png`, import.meta.url).href);

const showTooltip = (item, event, index) => {
    if (index === 'input') {
        inputOverlay.value = true;
    } else if (index === 'fuel') {
        fuelOverlay.value = true;
    } else if (index === 'output') {
        outputOverlay.value = true;
    }

    if (item) {
        tooltipText.value = (index === 'input' ? props.inputTooltips[0] : index === 'fuel' ? props.fuelTooltips[0] : props.outputTooltips[0]) || item.name;
        tooltipVisible.value = true;
        updateTooltipPosition(event);
    } else if (index === 'output' && props.outputText && !props.output) {
        tooltipText.value = props.outputText;
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
    } else if (index === 'output') {
        outputOverlay.value = false;
    }
};

const updateTooltipPosition = (event) => {
    if (!furnace.value) return;

    const rect = furnace.value.parentElement.getBoundingClientRect();
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

let animationFrameId;

const startAnimation = (speed) => {
    stopAnimation();
    let lastTime = performance.now();
    const animate = (time) => {
        if (time - lastTime >= speed) {
            currentFrameIndex.value = (currentFrameIndex.value + 1) % burningFrames.length;
            lastTime = time;
        }
        animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
};

const stopAnimation = () => {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
};

onMounted(() => {
    startAnimation(500); 
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

.furnace-container {
    position: relative;
    width: 528px;
    height: 261px;
}

.furnace {
    width: 528px;
    height: 255px;
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

.input-fuel-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.input-slot,
.fuel-slot,
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
}

.burning-sprite-container {
    width: 43px;
    height: 43px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: 5px 0;
    position: relative;
}

.burning-sprite {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
}

.input-item,
.fuel-item,
.output-item {
    width: 70%;
    height: 70%;
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
    margin-left: 20px;
    margin-right: 20px;
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