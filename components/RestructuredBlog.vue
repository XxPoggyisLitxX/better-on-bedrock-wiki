<template>
  <div class="blog-container">
    <!-- Hero -->
    <section class="hero" data-aos="fade-up">
      <img class="hero-logo" src="/Main/assets/blogs/bobupdat.png" alt="Restructured Logo" />
      <p class="hero-text">
        <strong>Better on Bedrock: Restructured</strong> brings biome-aware structures, stunning villages, new mineshafts, and revamped boss arenas — powered by Jigsaw magic.
      </p>
    </section>

    <!-- Sections -->
    <FeatureSection
      v-for="(section, index) in sections"
      :key="index"
      v-bind="section"
      :reverse="index % 2 !== 0"
    />

    <!-- Call to Action -->
    <section class="call-to-action-section" data-aos="zoom-in">
      <h3>Stay Tuned for Restructured!</h3>
      <p>
        The <strong>Better on Bedrock: Restructured</strong> update is coming soon!
        Keep an eye on our channels for the official release announcement.
      </p>
      <a href="YOUR_SOCIAL_LINK" class="download-button">Follow for Updates</a>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Feature section definition
const sections = [
  {
    title: '🌸 New Biome-Specific Villages',
    subtitle: 'Explore vibrant new villages like Cherry Grove, Jungle, and Swamp!',
    images: [
      {
        src: '/Main/assets/blogs/cherry_village.png',
        caption: 'A calm, elegant village nestled in blooming cherry groves.',
      },
      {
        src: '/Main/assets/blogs/jungle_village.png',
        caption: 'Exploration vibes run deep within the lush, wild jungle.',
      },
      {
        src: '/Main/assets/blogs/pillage_camp.png',
        caption: 'A fresh take on Pillager presence — hostile and haunting.',
      },
    ],
  },
  {
    title: '⛏️ New Mineshaft',
    subtitle:
      'Delve into dangerous depth with expanded layouts, secret paths, and fresh designs.',
    images: [
      {
        src: '/Main/assets/blogs/mineshaft.png',
        caption: 'Brave the depths in these fresh, winding mineshafts.',
      },
    ],
  },
  {
    title: '⚔️ Overhauled Boss Arenas',
    subtitle:
      'The Willager and Enchanter bosses now spawn in larger, more thematic arenas.',
    images: [
      {
        src: '/Main/assets/blogs/willager_boss.png',
        caption: 'The Willager’s domain is now more fearsome than ever.',
      },
      {
        src: '/Main/assets/blogs/enchanter_boss.png',
        caption: 'Face off against the Enchanter in a redesigned structure.',
      },
    ],
  },
  {
    title: '🌍 Terrain-Aware Structure Overhauls',
    subtitle:
      'Structures now adapt better to terrain — from elevation to biome, it’s smarter!',
    images: [
      {
        src: '/Main/assets/blogs/trader_outpost.png',
        caption: 'Structures like the Trader Outpost now fit more naturally into the world.',
      },
    ],
  },
]

onMounted(() => {
  AOS.init()
})
</script>

<style scoped>
.blog-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  color: #eee;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
}
.hero-logo {
  max-width: 100%;
  height: auto;
}
.hero-text {
  font-size: 1.1rem;
  margin-top: 1rem;
}

/* Scoped call-to-action button already in your global CSS */
</style>
