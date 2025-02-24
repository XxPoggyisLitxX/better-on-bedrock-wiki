# Brewing Stand UI

<BrewingStand
  :outputs="[
    'potion_bottle_corrupt',
    'potion_bottle_corrupt',
    'potion_bottle_corrupt'
  ]"
  input=star_dust
  fuel="blaze_powder"
  :fuelTooltip="'Blaze Powder'"
  :inputTooltips="['Nether Wart']"
  :outputTooltips="[`<span class='tooltip-title'>Awkward Potion</span><br><span class='tooltip-property' style='color: grey; text-shadow: 3px 3px 0px #292929;'>No Effects</span>`, `<span class='tooltip-title'>Awkward Potion</span><br><span class='tooltip-property' style='color: grey; text-shadow: 3px 3px 0px #292929;'>No Effects</span>`, `<span class='tooltip-title'>Awkward Potion</span><br><span class='tooltip-property' style='color: grey; text-shadow: 3px 3px 0px #292929;'>No Effects</span>`]"
>
</BrewingStand>


# Furnace UI

<Furnace
  input="stardust_nugget"
  fuel="https://minecraft.wiki/images/Coal_JE4_BE3.png?165e9"
  output="star_dust"
  outputText=""
  :inputTooltips="['Stardust Nugget']"
  :fuelTooltips="['Fuel']"
  :outputTooltips="['Stardust']"
/>

# Crafting UI With Shuffling Items
<ShufflingCraftingTable
  :gridItems="[
    [{ image: 'deer_hide', name: 'Deer Hide' }], // Item objects with name property
    [{ image: 'string_belt', name: 'String Belt' }],
    [
      { image: 'https://minecraft.wiki/images/Copper_Ingot_JE2_BE1.png?0d410', name: 'Copper Ingot' },
      { image: 'https://minecraft.wiki/images/Diamond_JE3_BE3.png?99d00', name: 'Diamond' },
      { image: 'https://minecraft.wiki/images/Netherite_Ingot_JE1_BE2.png?79364', name: 'Netherite Ingot' }
    ],
    [{ image: 'string_belt', name: 'String Belt' }],
    [{ image: 'chest', name: 'Chest' }],
    [{ image: 'string_belt', name: 'String Belt' }],
    [
      { image: 'https://minecraft.wiki/images/Copper_Ingot_JE2_BE1.png?0d410', name: 'Copper Ingot' },
      { image: 'https://minecraft.wiki/images/Diamond_JE3_BE3.png?99d00', name: 'Diamond' },
      { image: 'https://minecraft.wiki/images/Netherite_Ingot_JE1_BE2.png?79364', name: 'Netherite Ingot' }
    ],
    [{ image: 'string_belt', name: 'String Belt' }],
    [{ image: 'deer_hide', name: 'Deer Hide' }]
  ]"
  :outputItems="[
    { image: 'backpack', name: 'Backpack' },
    { image: 'backpack_uncommon', name: 'Uncommon Backpack' },
    { image: 'backpack_large', name: 'Large Backpack' }
  ]"
  :outputTooltips="[
    `<span class='tooltip-title'>Backpack</span>`,
    `<span class='tooltip-title'>Uncommon Backpack</span>`,
    `<span class='tooltip-title'>Large Backpack</span>`
  ]"
  outputText=""
  :cycleInterval="1500"
/>

# Crafting UI
<CraftingTable
  :grid="[
    { image: 'https://minecraft.wiki/images/thumb/Deepslate_%28UD%29_JE3.png/120px-Deepslate_%28UD%29_JE3.png?7635f' },
    { image: 'stardust_upgrade' },
    { image: 'https://minecraft.wiki/images/thumb/Deepslate_%28UD%29_JE3.png/120px-Deepslate_%28UD%29_JE3.png?7635f' },
    { image: 'https://minecraft.wiki/images/thumb/Deepslate_%28UD%29_JE3.png/120px-Deepslate_%28UD%29_JE3.png?7635f' },
    { image: 'stardust_ingot' },
    { image: 'https://minecraft.wiki/images/thumb/Deepslate_%28UD%29_JE3.png/120px-Deepslate_%28UD%29_JE3.png?7635f' },
    { image: 'https://minecraft.wiki/images/thumb/Deepslate_%28UD%29_JE3.png/120px-Deepslate_%28UD%29_JE3.png?7635f' },
    { image: 'https://minecraft.wiki/images/thumb/Deepslate_%28UD%29_JE3.png/120px-Deepslate_%28UD%29_JE3.png?7635f' },
    { image: 'https://minecraft.wiki/images/thumb/Deepslate_%28UD%29_JE3.png/120px-Deepslate_%28UD%29_JE3.png?7635f' }
  ]"
  :inputTooltips="[
    `<span class='tooltip-title'>Deepslate</span>`,
    `<span class='tooltip-title' style='color: yellow; text-shadow: 3px 3px 0px #3e3e15;'>Stardust Upgrade</span><br><br><span class='tooltip-property' style='color: lightgrey; text-shadow: 3px 3px 0px #292929;'>Applies to:</span><br><span class='tooltip-value' style='color: #5454fc; text-shadow: 3px 3px 0px #15153e;'>‎‎ Diamond Equipment</span><br><span class='tooltip-property' style='color: lightgrey; text-shadow: 3px 3px 0px #292929;'>Ingredients:</span><br><span class='tooltip-value' style='color: #5454fc; text-shadow: 3px 3px 0px #15153e;'>‎‎ Netherite Ingot</span>`,
    `<span class='tooltip-title'>Deepslate</span>`,
    `<span class='tooltip-title'>Deepslate</span>`,
    `<span class='tooltip-title'>Stardust Ingot</span>`,
    `<span class='tooltip-title'>Deepslate</span>`,
    `<span class='tooltip-title'>Deepslate</span>`,
    `<span class='tooltip-title'>Deepslate</span>`,
    `<span class='tooltip-title'>Deepslate</span>`
  ]"
  output="stardust_upgrade"
  outputText="2"
  outputSlotText="Stardust Upgrade Template"
  :outputTooltips="[
     `<span class='tooltip-title' style='color: yellow; text-shadow: 3px 3px 0px #3e3e15;'>Stardust Upgrade</span><br><br><span class='tooltip-property' style='color: lightgrey; text-shadow: 3px 3px 0px #292929;'>Applies to:</span><br><span class='tooltip-value' style='color: #5454fc; text-shadow: 3px 3px 0px #15153e;'>‎‎ Diamond Equipment</span><br><span class='tooltip-property' style='color: lightgrey; text-shadow: 3px 3px 0px #292929;'>Ingredients:</span><br><span class='tooltip-value' style='color: #5454fc; text-shadow: 3px 3px 0px #15153e;'>‎‎ Netherite Ingot</span>`,
  ]"
/>

# Smithing UI
<ShufflingSmithingTable
  background="UI/smithing_background"
  :inputItems="[
    ['stardust_upgrade'],
    ['diamond_sword', 'diamond_pickaxe', 'diamond_axe', 'diamond_shovel', 'diamond_hoe', 'diamond_helmet', 'diamond_chestplate', 'diamond_leggings', 'diamond_boots'],
    ['netherite_ingot']
  ]"
  :inputTooltips="[
`<span class='tooltip-title' style='color: yellow; text-shadow: 3px 3px 0px #3e3e15;'>Stardust Upgrade</span><br><br><span class='tooltip-property' style='color: lightgrey; text-shadow: 3px 3px 0px #292929;'>Applies to:</span><br><span class='tooltip-value' style='color: #5454fc; text-shadow: 3px 3px 0px #15153e;'>‎‎ Diamond Equipment</span><br><span class='tooltip-property' style='color: lightgrey; text-shadow: 3px 3px 0px #292929;'>Ingredients:</span><br><span class='tooltip-value' style='color: #5454fc; text-shadow: 3px 3px 0px #15153e;'>‎‎ Netherite Ingot</span>`,
    `<span class='tooltip-title'>Diamond Equipment</span>`,
    `<span class='tooltip-title'>Netherite Ingot</span>`
  ]"
  :outputItems="['stardust_sword', 'stardust_pickaxe', 'stardust_axe', 'stardust_shovel', 'stardust_hoe', 'stardust_helmet', 'stardust_chestplate', 'stardust_leggings', 'stardust_boots']"
  :outputTooltip="`<span>Stardust Equipment</span>`"
  :cycleInterval="1500"
/>

# Anvil UI
<Anvil
  :inputItems="[
    ['staff', 'ice_staff', 'flender_staff', 'flame_staff'],
    ['soul_star']
  ]"
  :inputTooltips="[
    `Staff`,
    `Soul Star`
  ]"
  :outputItems="['staff', 'ice_staff', 'flender_staff', 'flame_staff']"
  :outputTooltip="`Staff`"
  imageBetweenInputs="/Main/assets/UI/anvil_addition.png"
  :cycleInterval="1500"
/>

# Trading UI

<Trading :tiers="[
  {
    label: 'Level 1 - Novice',
    buttons: [
      {
        inputItems: [{ image: 'rune', quantity: 3, toolTip: 'Basic Rune' }],
        outputItem: { image: 'staff', toolTip: 'Staff' },
      },
    ],
  },
  {
    label: 'Level 2 - Apprentice',
    buttons: [
      {
        inputItems: [{ image: 'rune', quantity: 2, toolTip: 'Basic Rune' }, { image: 'upgraded_ice_rune', toolTip: 'Ice Rune' }],
        outputItem: { image: 'ice_staff', toolTip: 'Staff' },
      },
    ],
  },
]" />