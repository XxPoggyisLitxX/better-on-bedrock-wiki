# Brewing Stand UI

<BrewingStand
  :outputs="[
    'https://minecraft.wiki/images/Water_Bottle_JE2_BE2.png?acae5',
    'https://minecraft.wiki/images/Water_Bottle_JE2_BE2.png?acae5',
    'https://minecraft.wiki/images/Water_Bottle_JE2_BE2.png?acae5'
  ]"
  input=https://minecraft.wiki/images/thumb/Nether_Wart_%28item%29_JE2_BE1.png/150px-Nether_Wart_%28item%29_JE2_BE1.png?65953
  fuel="https://minecraft.wiki/images/Blaze_Powder_JE2_BE1.png?b5dec"
  :fuelTooltip="'Blaze Powder'"
  :inputTooltips="['Nether Wart']"
  :outputTooltips="[`<span class='tooltip-title'>Awkward Potion</span><br><span class='tooltip-property' style='color: grey; text-shadow: 3px 3px 0px #292929;'>No Effects</span>`, `<span class='tooltip-title'>Awkward Potion</span><br><span class='tooltip-property' style='color: grey; text-shadow: 3px 3px 0px #292929;'>No Effects</span>`, `<span class='tooltip-title'>Awkward Potion</span><br><span class='tooltip-property' style='color: grey; text-shadow: 3px 3px 0px #292929;'>No Effects</span>`]"
>
</BrewingStand>


# Furnace UI

<Furnace
  input="/Main/assets/stardust_nugget.png"
  fuel="https://minecraft.wiki/images/Coal_JE4_BE3.png?165e9"
  output="/Main/assets/star_dust.png"
  outputText=""
  :inputTooltips="['Stardust Nugget']"
  :fuelTooltips="['Fuel']"
  :outputTooltips="['Stardust']"
/>

# Crafting UI With Shuffling Items
<ShufflingCraftingTable
  :gridItems="[
    [{ image: '/Main/assets/deer_hide.png', name: 'Deer Hide' }], // Item objects with name property
    [{ image: '/Main/assets/string_belt.png', name: 'String Belt' }],
    [
      { image: 'https://minecraft.wiki/images/Copper_Ingot_JE2_BE1.png?0d410', name: 'Copper Ingot' },
      { image: 'https://minecraft.wiki/images/Diamond_JE3_BE3.png?99d00', name: 'Diamond' },
      { image: 'https://minecraft.wiki/images/Netherite_Ingot_JE1_BE2.png?79364', name: 'Netherite Ingot' }
    ],
    [{ image: '/Main/assets/string_belt.png', name: 'String Belt' }],
    [{ image: '/Main/assets/UI/chest.png', name: 'Chest' }],
    [{ image: '/Main/assets/string_belt.png', name: 'String Belt' }],
    [
      { image: 'https://minecraft.wiki/images/Copper_Ingot_JE2_BE1.png?0d410', name: 'Copper Ingot' },
      { image: 'https://minecraft.wiki/images/Diamond_JE3_BE3.png?99d00', name: 'Diamond' },
      { image: 'https://minecraft.wiki/images/Netherite_Ingot_JE1_BE2.png?79364', name: 'Netherite Ingot' }
    ],
    [{ image: '/Main/assets/string_belt.png', name: 'String Belt' }],
    [{ image: '/Main/assets/deer_hide.png', name: 'Deer Hide' }]
  ]"
  :outputItems="[
    { image: '/Main/assets/backpack.png', name: 'Backpack' },
    { image: '/Main/assets/backpack_uncommon.png', name: 'Uncommon Backpack' },
    { image: '/Main/assets/backpack_large.png', name: 'Large Backpack' }
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
    { image: '/Main/assets/stardust_upgrade.png' },
    { image: 'https://minecraft.wiki/images/thumb/Deepslate_%28UD%29_JE3.png/120px-Deepslate_%28UD%29_JE3.png?7635f' },
    { image: 'https://minecraft.wiki/images/thumb/Deepslate_%28UD%29_JE3.png/120px-Deepslate_%28UD%29_JE3.png?7635f' },
    { image: '/Main/assets/stardust_ingot.png' },
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
  output="/Main/assets/stardust_upgrade.png"
  outputText="2"
  outputSlotText="Stardust Upgrade Template"
  :outputTooltips="[
     `<span class='tooltip-title' style='color: yellow; text-shadow: 3px 3px 0px #3e3e15;'>Stardust Upgrade</span><br><br><span class='tooltip-property' style='color: lightgrey; text-shadow: 3px 3px 0px #292929;'>Applies to:</span><br><span class='tooltip-value' style='color: #5454fc; text-shadow: 3px 3px 0px #15153e;'>‎‎ Diamond Equipment</span><br><span class='tooltip-property' style='color: lightgrey; text-shadow: 3px 3px 0px #292929;'>Ingredients:</span><br><span class='tooltip-value' style='color: #5454fc; text-shadow: 3px 3px 0px #15153e;'>‎‎ Netherite Ingot</span>`,
  ]"
/>

# Smithing UI
<ShufflingSmithingTable
  background="/Main/assets/UI/smithing_background.png"
  :inputItems="[
    ['/Main/assets/stardust_upgrade.png'],
    ['/Main/assets/UI/diamond_sword.png', '/Main/assets/UI/diamond_pickaxe.png', '/Main/assets/UI/diamond_axe.png', '/Main/assets/UI/diamond_shovel.png', '/Main/assets/UI/diamond_hoe.png', '/Main/assets/UI/diamond_helmet.png', '/Main/assets/UI/diamond_chestplate.png', '/Main/assets/UI/diamond_leggings.png', '/Main/assets/UI/diamond_boots.png'],
    ['https://minecraft.wiki/images/Netherite_Ingot_JE1_BE2.png?79364']
  ]"
  :inputTooltips="[
`<span class='tooltip-title' style='color: yellow; text-shadow: 3px 3px 0px #3e3e15;'>Stardust Upgrade</span><br><br><span class='tooltip-property' style='color: lightgrey; text-shadow: 3px 3px 0px #292929;'>Applies to:</span><br><span class='tooltip-value' style='color: #5454fc; text-shadow: 3px 3px 0px #15153e;'>‎‎ Diamond Equipment</span><br><span class='tooltip-property' style='color: lightgrey; text-shadow: 3px 3px 0px #292929;'>Ingredients:</span><br><span class='tooltip-value' style='color: #5454fc; text-shadow: 3px 3px 0px #15153e;'>‎‎ Netherite Ingot</span>`,
    `<span class='tooltip-title'>Diamond Equipment</span>`,
    `<span class='tooltip-title'>Netherite Ingot</span>`
  ]"
  :outputItems="['/Main/assets/stardust_sword.png', '/Main/assets/stardust_pickaxe.png', '/Main/assets/stardust_axe.png', '/Main/assets/stardust_shovel.png', '/Main/assets/stardust_hoe.png', '/Main/assets/stardust_helmet.png', '/Main/assets/stardust_chestplate.png', '/Main/assets/stardust_leggings.png', '/Main/assets/stardust_boots.png']"
  :outputTooltip="`<span>Stardust Equipment</span>`"
  hammer="/Main/assets/UI/smithing_hammer.png"
  arrow="/Main/assets/UI/crafting_output_arrow.png"
  inputSlot="/Main/assets/UI/crafting_grid_texture.png"
  outputSlot="/Main/assets/UI/crafting_grid_texture.png"
  :cycleInterval="1500"
/>

# Anvil UI
<Anvil
  :inputItems="[
    ['/Main/assets/staff.png', '/Main/assets/ice_staff.png', '/Main/assets/flender_staff.png', '/Main/assets/flame_staff.png'],
    ['/Main/assets/soul_star.png']
  ]"
  :inputTooltips="[
    `Staff`,
    `Soul Star`
  ]"
  :outputItems="['/Main/assets/staff.png', '/Main/assets/ice_staff.png', '/Main/assets/flender_staff.png', '/Main/assets/flame_staff.png']"
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
        inputItems: [{ image: '/Main/assets/rune.png', quantity: 3, toolTip: 'Basic Rune' }],
        outputItem: { image: '/Main/assets/staff.png', toolTip: 'Staff' },
      },
    ],
  },
  {
    label: 'Level 2 - Apprentice',
    buttons: [
      {
        inputItems: [{ image: '/Main/assets/rune.png', quantity: 2, toolTip: 'Basic Rune' }, { image: '/Main/assets/upgraded_ice_rune.png', toolTip: 'Ice Rune' }],
        outputItem: { image: '/Main/assets/ice_staff.png', toolTip: 'Staff' },
      },
    ],
  },
  {
    label: 'Level 3 - Journeyman',
    buttons: [
      {
        inputItems: [{ image: '/Main/assets/rune.png', quantity: 2, toolTip: 'Basic Rune' }, { image: '/Main/assets/upgraded_flame_rune.png', toolTip: 'Flame Rune' }],
        outputItem: { image: '/Main/assets/flame_staff.png', toolTip: 'Staff' },
      },
    ],
  },
  {
    label: 'Level 4 - Expert',
    buttons: [
      {
        inputItems: [{ image: '/Main/assets/rune.png', quantity: 3, toolTip: 'Basic Rune' }, { image: '/Main/assets/protection_rune.png', toolTip: 'Flender Rune' }],
        outputItem: { image: '/Main/assets/flender_staff.png', toolTip: 'Staff' },
      },
    ],
  },
]" />