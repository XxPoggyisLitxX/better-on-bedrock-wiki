# Better on Bedrock Block Wiki
:::info
This wiki is a work-in-progress. More info/updates coming soon!
:::

Need help with how to use a block or how to find them along with their uses? This wiki has your back. Select the topic you want from the sidebar or search the block name!

**Note**: <u>When the wiki refers to `Use` or `Interact`, keep in mind that it refers to `right-click`, `LT/L2`, `Tap`.
</u>

![image](/Main/assets/bob-rebrand.png)

## Bounty Board

<div style="display: flex; align-items: center;">
  <img src="/Main/assets/bounty_board.png" alt="Example Image" width="64">
</div>

### Info

The Bounty Board is a block that is provides a Bounty Scroll. This block can not be mined or obtained. This block is found inside of a Trader Outpost, which is a rare structure in the overworld.

This block is intractable. Once the player interacts on the block, it will drop a Bounty Scroll!

Refer to [this page](https://poggy.org/Main/Wiki/items/quests_bounties.html#bounties) to learn more about the Bounty Scroll.

## Waystone

<div style="display: flex; align-items: center;">
  <img src="/Main/assets/waystone.png" alt="Example Image" width="64">
</div>

### Info

Waystones are a neat way for players to travel from point A to point B. It costs XP to travel from one Waystone to another, and extra XP if you travel across dimensions.

### How to use

Waystones can be toggled to either be global or private. Global means if Waystone A was saved with "Global" being enabled, anyone in that world will see the Waystone, and they would be able to teleport to it, which is honestly pretty great for multiplayer worlds!

<div style="display: flex; align-items: center;">
  <img src="/Main/assets/waypoint_marker.png" alt="Example Image" width="64">
</div>

### Recipe for the Waystone Key
<CraftingTable
  background="/Main/assets/UI/crafting_ui.png"
  arrow="/Main/assets/UI/crafting_output_arrow.png"
  gridSlot="/Main/assets/UI/crafting_grid_texture.png"
  :grid="[
    {  image: '/Main/assets/ender_tear.png' },
    {  image: 'https://minecraft.wiki/images/Gold_Ingot_JE4_BE2.png?80cd6' },
    {  image: '/Main/assets/ender_tear.png' },
    {  image: 'https://minecraft.wiki/images/Gold_Ingot_JE4_BE2.png?80cd6' },
    {  image: 'https://minecraft.wiki/images/thumb/Ender_Pearl_JE3_BE2.png/150px-Ender_Pearl_JE3_BE2.png?829a7' },
    {  image: 'https://minecraft.wiki/images/Gold_Ingot_JE4_BE2.png?80cd6' },
    {  image: '/Main/assets/ender_tear.png' },
    {  image: 'https://minecraft.wiki/images/Gold_Ingot_JE4_BE2.png?80cd6' },
    {  image: '/Main/assets/ender_tear.png' }
  ]"
  :inputTooltips="[
    `<span class='tooltip-title'>Ender Tear</span>`,
    `<span class='tooltip-title'>Gold Ingot</span>`,
    `<span class='tooltip-title'>Ender Tear</span>`,
    `Gold Ingot`,
    `<span class='tooltip-title'>Ender Pearl</span>`,
    `Gold Ingot`,
    `<span class='tooltip-title'>Ender Tear</span>`,
    `<span class='tooltip-title'>Gold Ingot</span>`,
    `<span class='tooltip-title'>Ender Tear</span>`
  ]"
  output="/Main/assets/waypoint_marker.png"
  outputSlot="/Main/assets/UI/crafting_output_slot.png"
  outputText=""
  outputSlotText="Waystone Key"
/>

The Waystone Key can also be used to access the Waystone menu from any location in the world.

### How to find

This block is found inside a Waystone Tower or Crafting.
### Recipe:

<CraftingTable
  background="/Main/assets/UI/crafting_ui.png"
  arrow="/Main/assets/UI/crafting_output_arrow.png"
  gridSlot="/Main/assets/UI/crafting_grid_texture.png"
  :grid="[
    {  image: 'https://minecraft.wiki/images/Iron_Ingot_JE3_BE2.png?849cb' },
    {  image: 'https://minecraft.wiki/images/thumb/Ender_Pearl_JE3_BE2.png/150px-Ender_Pearl_JE3_BE2.png?829a7' },
    {  image: 'https://minecraft.wiki/images/Iron_Ingot_JE3_BE2.png?849cb' },
    {  image: null },
    {  image: '/Main/assets/ender_tear.png' },
    {  image: null },
    {  image: 'https://minecraft.wiki/images/Iron_Ingot_JE3_BE2.png?849cb' },
    {  image: 'https://minecraft.wiki/images/Iron_Ingot_JE3_BE2.png?849cb' },
    {  image: 'https://minecraft.wiki/images/Iron_Ingot_JE3_BE2.png?849cb' }
  ]"
  :inputTooltips="[
    `<span class='tooltip-title'>Iron Ingot</span>`,
    `<span class='tooltip-title'>Ender Pearl</span>`,
    `<span class='tooltip-title'>Iron Ingot</span>`,
    ``,
    `<span class='tooltip-title'>Ender Tear</span>`,
    ``,
    `<span class='tooltip-title'>Iron Ingot</span>`,
    `<span class='tooltip-title'>Iron Ingot</span>`,
    `<span class='tooltip-title'>Iron Ingot</span>`
  ]"
  output="/Main/assets/waystone.png"
  outputSlot="/Main/assets/UI/crafting_output_slot.png"
  outputText="2"
  outputSlotText="Waystone"
/>

## Miner Bench

<div style="display: flex; align-items: center;">
  <img src="/Main/assets/blocks/enchant_table.png" alt="Example Image" width="128">
</div>

<CraftingTable
  background="/Main/assets/UI/crafting_ui.png"
  arrow="/Main/assets/UI/crafting_output_arrow.png"
  gridSlot="/Main/assets/UI/crafting_grid_texture.png"
  :grid="[
    { image: null },
    { image: null },
    { image: null },
    { image: '/Main/assets/tin_ingot.png' },
    { image: '/Main/assets/item/book.png' },
    { image: '/Main/assets/tin_ingot.png' },
    { image: 'https://minecraft.wiki/images/thumb/Oak_Planks.png/150px-Oak_Planks.png?d9efa' },
    { image: 'https://minecraft.wiki/images/thumb/Oak_Planks.png/150px-Oak_Planks.png?d9efa' },
    { image: 'https://minecraft.wiki/images/thumb/Oak_Planks.png/150px-Oak_Planks.png?d9efa' }
  ]"
  :inputTooltips="[
    ``,
    ``,
    ``,
    `Tin Ingot`,
    `Book`,
    `Tin Ingot`,
    `Planks`,
    `Planks`,
    `Planks`
  ]"
  output="/Main/assets/blocks/enchant_table.png"
  outputSlot="/Main/assets/UI/crafting_output_slot.png"
  outputText=""
  outputSlotText="Stardust Upgrade Template"
  :outputTooltips="[
     `Miner's Bench`,
  ]"
/>

### Info

The Miner Bench is a block that allows you to add custom enchantments to your tools. Each enchanted book is labelled the tool it can be added to.

### How to use

To use the Miner Bench, you need to hold either a `pickaxe`, `axe`, `hoe` or `shears` and use the block. This will prompt a UI with instructions to follow.

### How to find

This block is found via Crafting