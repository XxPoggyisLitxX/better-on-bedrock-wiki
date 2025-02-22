# Better on Bedrock: Tools
This page will go over tools in the Add-On, and each tool tier.

## Tool & Armor Tiers
Better on Bedrock adds a few new tiers of tools and armor. We will list them in order, from weakest to strongest.
- Leather
- Wooden Tools
- Stone Tools
- Copper Armor & Tools
- Iron Armor & Tools
- Corstinite Armor & Tools
- Diamond Armor & Tools
- Netherite Armor & Tools
- Endrite Tools
- Starust Armor & Tools

## Stardust
<ImageShuffler
  :images="[
    '/Main/assets/stardust_ingot.png',
    '/Main/assets/stardust_nugget.png',
    '/Main/assets/stardust_helmet.png',
    '/Main/assets/stardust_chestplate.png',
    '/Main/assets/stardust_leggings.png',
    '/Main/assets/stardust_boots.png',
    '/Main/assets/stardust_sword.png',
    '/Main/assets/stardust_pickaxe.png',
    '/Main/assets/stardust_axe.png',
    '/Main/assets/stardust_shovel.png',
    '/Main/assets/stardust_hoe.png'
  ]"
/>


### Info
Stardust is a new armor and tool tier for Better on Bedrock, and it is better than Netherite.
### How to obtain
Getting stardust is pretty easy. All you do is mine the stardust ore which will drop a stardust nugget. You smelt this nugget to get stardust. You use stardust to craft a stardust ingot.

<Furnace
  input="/Main/assets/stardust_nugget.png"
  fuel="https://minecraft.wiki/images/Coal_JE4_BE3.png?165e9"
  output="/Main/assets/star_dust.png"
  outputText=""
  :inputTooltips="['Stardust Nugget']"
  :fuelTooltips="['Fuel']"
  :outputTooltips="['Stardust']"
/>

<CraftingTable
  background="/Main/assets/UI/crafting_ui.png"
  arrow="/Main/assets/UI/crafting_output_arrow.png"
  gridSlot="/Main/assets/UI/crafting_grid_texture.png"
  :grid="[
    {  image: 'https://minecraft.wiki/images/Diamond_JE3_BE3.png?99d00' },
    {  image: 'https://minecraft.wiki/images/Gold_Ingot_JE4_BE2.png?80cd6' },
    {  image: 'https://minecraft.wiki/images/Diamond_JE3_BE3.png?99d00' },
    {  image: '/Main/assets/star_dust.png' },
    {  image: 'https://minecraft.wiki/images/Gold_Ingot_JE4_BE2.png?80cd6' },
    {  image: '/Main/assets/star_dust.png' },
    {  image: '/Main/assets/star_dust.png' },
    {  image: '/Main/assets/star_dust.png' },
    {  image: '/Main/assets/star_dust.png' }
  ]"
  :inputTooltips="[
    `<span class='tooltip-title'>Diamond</span>`,
    `<span class='tooltip-title'>Gold Ingot</span>`,
    `<span class='tooltip-title'>Diamond</span>`,
    `<span class='tooltip-title'>Stardust</span>`,
    `<span class='tooltip-title'>Gold Ingot Ingot</span>`,
    `<span class='tooltip-title'>Stardust</span>`,
    `<span class='tooltip-title'>Stardust</span>`,
    `<span class='tooltip-title'>Stardust</span>`,
    `<span class='tooltip-title'>Stardust</span>`
  ]"
  output="/Main/assets/stardust_ingot.png"
  outputSlot="/Main/assets/UI/crafting_output_slot.png"
  outputText="4"
  outputSlotText="Stardust Ingot"
/>

We're not done yet! You are then required to find a stardust upgrade template, which you can find in bastion treasure chests. You can duplicate these templates!

<CraftingTable
  background="/Main/assets/UI/crafting_ui.png"
  arrow="/Main/assets/UI/crafting_output_arrow.png"
  gridSlot="/Main/assets/UI/crafting_grid_texture.png"
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
    `<span class='tooltip-title' style='color: yellow; text-shadow: 4px 4px 2px #3e3e15;'>Stardust Upgrade</span><br><br><span class='tooltip-property' style='color: lightgrey; text-shadow: 4px 4px 2px #292929;'>Applies to:</span><br><span class='tooltip-value' style='color: #5454fc; text-shadow: 4px 4px 2px #15153e;'>‎‎ Diamond Equipment</span><br><span class='tooltip-property' style='color: lightgrey; text-shadow: 4px 4px 2px #292929;'>Ingredients:</span><br><span class='tooltip-value' style='color: #5454fc; text-shadow: 4px 4px 2px #15153e;'>‎‎ Netherite Ingot</span>`,
    `<span class='tooltip-title'>Deepslate</span>`,
    `<span class='tooltip-title'>Deepslate</span>`,
    `<span class='tooltip-title'>Stardust Ingot</span>`,
    `<span class='tooltip-title'>Deepslate</span>`,
    `<span class='tooltip-title'>Deepslate</span>`,
    `<span class='tooltip-title'>Deepslate</span>`,
    `<span class='tooltip-title'>Deepslate</span>`
  ]"
  output="/Main/assets/stardust_upgrade.png"
  outputSlot="/Main/assets/UI/crafting_output_slot.png"
  outputText="2"
  outputSlotText="Stardust Upgrade Template"
  :outputTooltips="[
     `<span class='tooltip-title' style='color: yellow; text-shadow: 4px 4px 2px #3e3e15;'>Stardust Upgrade</span><br><br><span class='tooltip-property' style='color: lightgrey; text-shadow: 4px 4px 2px #292929;'>Applies to:</span><br><span class='tooltip-value' style='color: #5454fc; text-shadow: 4px 4px 2px #15153e;'>‎‎ Diamond Equipment</span><br><span class='tooltip-property' style='color: lightgrey; text-shadow: 4px 4px 2px #292929;'>Ingredients:</span><br><span class='tooltip-value' style='color: #5454fc; text-shadow: 4px 4px 2px #15153e;'>‎‎ Netherite Ingot</span>`,
  ]"
/>

Upgrading your diamond tools and armor to stardust requires a smithing table and a netherite ingot.
<ShufflingSmithingTable
  background="/Main/assets/UI/smithing_background.png"
  :inputItems="[
    ['/Main/assets/stardust_upgrade.png'],
    ['/Main/assets/UI/diamond_sword.png', '/Main/assets/UI/diamond_pickaxe.png', '/Main/assets/UI/diamond_axe.png', '/Main/assets/UI/diamond_shovel.png', '/Main/assets/UI/diamond_hoe.png', '/Main/assets/UI/diamond_helmet.png', '/Main/assets/UI/diamond_chestplate.png', '/Main/assets/UI/diamond_leggings.png', '/Main/assets/UI/diamond_boots.png'],
    ['https://minecraft.wiki/images/Netherite_Ingot_JE1_BE2.png?79364']
  ]"
  :inputTooltips="[
`<span class='tooltip-title' style='color: yellow; text-shadow: 4px 4px 2px #3e3e15;'>Stardust Upgrade</span><br><br><span class='tooltip-property' style='color: lightgrey; text-shadow: 4px 4px 2px #292929;'>Applies to:</span><br><span class='tooltip-value' style='color: #5454fc; text-shadow: 4px 4px 2px #15153e;'>‎‎ Diamond Equipment</span><br><span class='tooltip-property' style='color: lightgrey; text-shadow: 4px 4px 2px #292929;'>Ingredients:</span><br><span class='tooltip-value' style='color: #5454fc; text-shadow: 4px 4px 2px #15153e;'>‎‎ Netherite Ingot</span>`,
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

::: info
The reason we chose diamond equipment instead of netherite, is because smithing recipes in Minecraft Bedrock is really limiting. The recipes are based on item tags. While netherite armor can be upgraded to stardust, netherite tools can not because they lack the `"minecraft:transformable_items"` item tag.

We are also forced to use netherite ingots inside the `addition` slot, because the netherite ingot is the only item allowed in that slot. While we can make it so other ingots can go in that slot via tags, the recipe will fail because the only item allowed for smithing to work is in fact, the netherite ingot.
:::

A full set of Stardust Armor will grant you with Health Boost II and Resistance II

## Corstinite
<div style="display: flex; align-items: center;">
    <img src="/Main/assets/armor/corstinite.png" alt="Example Image" width="128">
</div>

## Amethyst
A full set of Amethyst Armor will apply knockback to any mob that attacks the player.
<div style="display: flex; align-items: center;">
    <img src="/Main/assets/armor/amethyst.png" alt="Example Image" width="128">
</div>


## Copper
An Armor Tier before Iron.
<div style="display: flex; align-items: center;">
    <img src="/Main/assets/armor/copper_armor.png" alt="Example Image" width="128">
</div>


## Shulker
A full set of Shulker Armor will make Enderman and Shulkers passive towards you.
<div style="display: flex; align-items: center;">
    <img src="/Main/assets/armor/shulker_armor.png" alt="Example Image" width="128">
</div>

## Stardust
<div style="display: flex; align-items: center;">
    <img src="/Main/assets/armor/stardust.png" alt="Example Image" width="128">
</div>

