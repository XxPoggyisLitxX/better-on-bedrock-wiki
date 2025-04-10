# Better on Bedrock: Tools
This page will go over tools in the Add-On, and each tool tier.

## Tool & Armor Tiers
Better on Bedrock adds a few new tiers of tools and armor. We will list them in order, from weakest to strongest.
- Leather Tier (Armor & tools)
- Wooden Tier (Only Tools)
- Stone Tier (Only tools)
- Copper Tier (Armor & Tools)
- Iron Tier (Armor & Tools)
- Corstinite Tier (Only Armor)
- Diamond Tier (Armor & Tools)
- Netherite Tier (Armor & Tools)
- Enderite Tier (Armor & Tools)
- Stardust Tier (Armor & Tools)

## Stardust
<ImageShuffler
  :images="[
    'stardust_ingot',
    'stardust_nugget',
    'stardust_helmet',
    'stardust_chestplate',
    'stardust_leggings',
    'stardust_boots',
    'stardust_sword',
    'stardust_pickaxe',
    'stardust_axe',
    'stardust_shovel',
    'stardust_hoe'
  ]"
/>


### Info
Stardust is a new armor and tool tier for Better on Bedrock, and it is better than Netherite.
### How to obtain
Getting stardust is pretty easy. All you do is mine the stardust ore which will drop a stardust nugget. You smelt this nugget to get stardust. You use stardust to craft a stardust ingot.

<Furnace
  input="stardust_nugget"
  fuel="https://minecraft.wiki/images/Coal_JE4_BE3.png?165e9"
  output="star_dust"
  outputText=""
  :inputTooltips="['Stardust Nugget']"
  :fuelTooltips="['Fuel']"
  :outputTooltips="['Stardust']"
/>

<CraftingTable
  :grid="[
    {  image: 'https://minecraft.wiki/images/Diamond_JE3_BE3.png?99d00' },
    {  image: 'https://minecraft.wiki/images/Gold_Ingot_JE4_BE2.png?80cd6' },
    {  image: 'https://minecraft.wiki/images/Diamond_JE3_BE3.png?99d00' },
    {  image: 'star_dust' },
    {  image: 'https://minecraft.wiki/images/Gold_Ingot_JE4_BE2.png?80cd6' },
    {  image: 'star_dust' },
    {  image: 'star_dust' },
    {  image: 'star_dust' },
    {  image: 'star_dust' }
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
  output="stardust_ingot"
  outputText="4"
  outputSlotText="Stardust Ingot"
/>

We're not done yet! You are then required to find a stardust upgrade template, which you can find in bastion treasure chests. You can duplicate these templates!

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

Upgrading your diamond tools and armor to stardust requires a smithing table and a netherite ingot.
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
Weaker than Iron, but essential at the early game.
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

