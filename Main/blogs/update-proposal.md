---
outline: deep
title: Better on Bedrock — The Structure Update Proposal
description: Overhauled structures, new villages, sprawling mineshafts, eerie dungeons, and updated arenas to explore.
wide: true
---




<!-- HERO -->
<ParallaxHero
  title="The Structure Update"
  subtitle="Overhauled structures, new villages, sprawling mineshafts, eerie dungeons, and updated arenas to explore."
  badge="Better on Bedrock v1.2 — Restructured"
  image="/Main/assets/blogs/Preview4"
>
  <template #actions>
    <a class="vp-button brand" href="https://www.youtube.com/watch?v=kSI09tXAavM" target="_blank" rel="noopener">Watch Teasers</a>
  </template>
</ParallaxHero>

<div style="text-align: center; margin: 2rem 0;">
  <h2 style="margin-bottom: 0.5rem;">What is Restructured?</h2>
  <p style="font-size: 1.15rem; max-width: 600px; margin: 0 auto;">
    Restructured is a deep pass on world generation &amp; structures using jigsaw tech, aiming for more variety, fewer odd placements, and more memorable journeys.
  </p>
</div>

<StatBadge :items="[
  { value: '25+', label: 'New/Overhauled Structures' },
  { value: '4', label: 'Biome Villages' },
  { value: '2', label: 'New Dungeons' }
]" />


<!--
<FeatureGrid :features="[
  { icon: '🏘️', title: 'Biome-Specific Villages', description: 'Cherry Groves, Jungles, Swamps and Mesa villages now match their biomes for stronger fantasy and better gameplay.' },
  { icon: '⛏️', title: 'New Mineshaft', description: 'Vanilla mineshafts but bigger!' },
  { icon: '⚔️', title: 'Overhauled Boss Arenas', description: 'Smarter spaces for the Willager, Enchanter and other bosses' },
  { icon: '🗺️', title: 'Locate Structures', description: 'Use /locate structure or locator maps to find Better on Bedrock structures.' },
  { icon: '🌄', title: 'Terrain-Aware Generation', description: 'Restructured focuses on natural placement and seamless blending with terrain.' },
  { icon: '🥾', title: 'Pillager Camps', description: 'Ambush points and tactical bases spice up survival routes.' }
]" />
-->

## Villages, Reimagined

Cherry blossoms, lush jungles, swamp mists, and dry mesa's! Each village is crafted to feel native to its biome.


<!--
<MansoryCard
  :cards="[ 
    { 
      title: 'Jungle Village', 
      items: [ 
        { src: '/Main/assets/blogs/jungle_01', caption: 'Town Center' }, 
        { src: '/Main/assets/blogs/jungle_02', caption: 'Jungle Village Layout' }, 
        { src: '/Main/assets/blogs/jungle_03', caption: 'Blacksmith' } 
      ] 
    }, 
    { 
      title: 'Swamp Village', 
      items: [ 
        { src: '/Main/assets/blogs/swamp_01', caption: 'Swamp Village Layout' }, 
        { src: '/Main/assets/blogs/swamp_02', caption: 'Swamp Village street view' }, 
        { src: '/Main/assets/blogs/swamp_03', caption: 'Swamp Village street view' } 
      ] 
    }, 
    { 
      title: 'Cherry Village', 
      items: [ 
        { src: '/Main/assets/blogs/cherry_01', caption: 'Town Center' }, 
        { src: '/Main/assets/blogs/cherry_02', caption: 'Cherry Village street view' }, 
        { src: '/Main/assets/blogs/cherry_03', caption: 'Cherry Village Layout' } 
      ] 
    }, 
    { 
      title: 'Mesa Village', 
      items: [ 
        { src: '/Main/assets/blogs/mesa_01', caption: 'Dense canopy pathways' }, 
        { src: '/Main/assets/blogs/mesa_02', caption: 'Homes above the roots' }, 
        { src: '/Main/assets/blogs/mesa_03', caption: 'Night in the treetops' } 
      ] 
    } 
  ]"
/>
-->

<ZigZagShowcase
  :sections="[
    {
      title: 'Jungle Village',
      description: 'A cozy village under the leaves and bamboo everywhere, with lanterns on the streets and nature taking part in civilization',
      card: {
        title: 'Jungle Village',
        items: [
          { src: '/Main/assets/blogs/jungle_01', caption: 'Town Center' },
          { src: '/Main/assets/blogs/jungle_02', caption: 'Jungle Village Layout' },
          { src: '/Main/assets/blogs/jungle_03', caption: 'Blacksmith' }
        ]
      }
    },
    {
      title: 'Cherry Village',
      description: 'A beautiful Chinese-inspired village within the Cherry Groves. It is a cozy little town under a shower of pink petals. Wooden porches and the calm environment make it an easy place to trade and chill.',
      card: {
        title: 'Cherry Village',
        items: [
          { src: '/Main/assets/blogs/cherry_01', caption: 'Town Center' },
          { src: '/Main/assets/blogs/cherry_02', caption: 'Cherry Village street view' },
          { src: '/Main/assets/blogs/cherry_03', caption: 'Cherry Village Layout' }
        ]
      }
    },
     {
      title: 'Swamp Village',
      description: 'Who ever thought villagers could live within the soggy swamps? A pretty neat village deep withing the swamps where Villagers do science on the mushrooms.',
      card: {
        title: 'Cherry Village',
        items: [
          { src: '/Main/assets/blogs/swamp_01', caption: 'Town Center' },
          { src: '/Main/assets/blogs/swamp_02', caption: 'Cherry Village street view' },
          { src: '/Main/assets/blogs/swamp_03', caption: 'Cherry Village Layout' }
        ]
      }
    },
     {
      title: 'Mesa Village',
      description: 'Inspired by the Wild-West times. This village keeps the feel and look as if it existed since the Wild-west era. This village features its own unique layout to try and stay true to Wild-west villages.',
      card: {
        title: 'Cherry Village',
        items: [
          { src: '/Main/assets/blogs/mesa_01', caption: 'Town Center' },
          { src: '/Main/assets/blogs/mesa_02', caption: 'Cherry Village street view' },
          { src: '/Main/assets/blogs/mesa_03', caption: 'Cherry Village Layout' }
        ]
      }
    }
  ]"
/>




## Below the Surface: Mineshafts

<FeatureSection
  title="Below the Surface: Mineshafts"
  subtitle="Wider routes, sightlines, better loot paths."
  :bullets="['Broader corridors', 'Lantern waypoints', 'Safer intersections']"
  :images="[{src:'/Main/assets/blogs/mineshaft_02', caption:'New Mineshaft'}]"
/>


## Boss Arenas, Overhauled

<ZigZagShowcase
  :sections="[
    {
      title: 'Overhauled Willager Arena!',
      description: 'A more fearsome battleground, with a totaly not suspicous chest.',
      card: {
        title: 'Jungle Village',
        items: [
            { src:'/Main/assets/blogs/willager_boss'}
        ]
      }
    },
     {
      title: 'Overhauled Enchanter Arena!',
      description: 'The Enchanter returns with a new venue.',
      card: {
        title: 'Jungle Village',
        items: [
            { src:'/Main/assets/blogs/enchanter_boss'}
        ]
      }
    }
  ]"
/>


## Terrain-Aware Overhauls

<FeatureSection
  title="Terrain-aware Structures!"
  subtitle="Structures blend in with the terrain better than ever thanks to Jigsaw Blocks! This Trader Outpost consists of 3 seperate pieces."
  :bullets="['More adaptive to the terrain', 'No more structures cutting through terrain']"
  :images="[{src:'/Main/assets/blogs/trader_outpost', caption:'New Mineshaft'}]"
/>

## Randomly Generated Dungeons!

<ZigZagShowcase
  :sections="[
    {
      title: 'Well Dungeon!',
      description: 'The Well Dungeon has been rebuilt from the ground-up to feature proper random generation. This means that most rooms and spawners will be random for each one you find! The Well Dungeon is below any Blackstone Well you find on the overworld surface!',
      card: {
        title: 'Jungle Village',
        items: [
            { src:'/Main/assets/blogs/well_dungeon', caption:'Well Dungeon'}
        ]
      }
    }
  ]"
/>

## Overhauled Structures - A Glimpes!

<ZigZagShowcase
  :sections="[
    {
      title: 'Overhauled Structures!',
      description: 'Some early looks at all of our new and overhauled structures!',
      card: {
        title: 'Jungle Village',
        items: [
            { src:'/Main/assets/blogs/adventure_camp', caption:'Adventure Camp'},
            { src:'/Main/assets/blogs/pillage_ship', caption:'Pillager Ship'},
            { src:'/Main/assets/blogs/birch_waystone', caption:'Waystone Hut (Birch)'},
            { src:'/Main/assets/blogs/trail_digsite', caption:'Trail Digsite'}
        ]
      }
    }
  ]"
/>

### What are you waiting for? Jump in now to experience a brand new world of Better on Bedrock!

## FAQ

### Can I locate Better on Bedrock structures?
Yes! Use `/locate structure` to find them. Locator maps are planned.

---
