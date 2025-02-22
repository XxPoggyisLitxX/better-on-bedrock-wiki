## Blade of the Nether
<div style="display: flex; align-items: center;">
  <img src="/Main/assets/blade_of_the_nether.png" alt="Example Image" width="64">
</div>

### Info
This item wields the power of the nether. Any mob that you hit with this sword, will be set on fire.

::: info
This item does 12 attack Damage, and has 1243 durability. This item can be repaired with a Fiery Ingot, which can be crafted.
:::

### Where to find
This item is found by killing the Shielded Pyroclast.

## Nether Gauntlet
<div style="display: flex; align-items: center;">
  <img src="/Main/assets/empty_gauntlet.png" alt="Example Image" width="64">
</div>

### Info
This item requires 3 stones to function. You don't need all 3, and you can add them in any order.

### Where to find
This item is found by killing a Withered Samurai.
### Stone Usage
- Green Stone
  * When the player sneaks and they use the item, it will shoot a wither skull.
- Yellow Stone
  * When the player charges the item, it will shoot a Pyroclast Shield

  ## Ghost Necklace
<div style="display: flex; align-items: center;">
  <img src="/Main/assets/fixed_ghost_necklace.png" alt="Example Image" width="64">
</div>

### Info
This item makes any player a ghost for 10 seconds. After 10 seconds, the player returns to normal. You are required to have soul in your offhand in order for this item to work. Simply use your interaction button to use the item!

::: info
This does not work in Hardcore mode!
:::

### Where to find
This item can be crafting with the recipe below:
<CraftingTable
  background="/Main/assets/UI/crafting_ui.png"
  arrow="/Main/assets/UI/crafting_output_arrow.png"
  gridSlot="/Main/assets/UI/crafting_grid_texture.png"
  :grid="[
    {  image: '/Main/assets/ghost_necklace_fragment.png' },
    {  image: '/Main/assets/ghost_necklace_fragment.png' },
    {  image: null },
    {  image: '/Main/assets/ghost_necklace_fragment.png' },
    {  image: '/Main/assets/ghost_necklace_fragment.png' },
    {  image: null },
    {  image: null },
    {  image: null },
    {  image: null }
  ]"
  :inputTooltips="[
    `<span class='tooltip-title'>Ghost Necklace Fragment</span>`,
    `<span class='tooltip-title'>Ghost Necklace Fragment</span>`,
    null,
    `<span class='tooltip-title'>Ghost Necklace Fragment</span>`,
    `<span class='tooltip-title'>Ghost Necklace Fragment</span>`,
    null,
    null,
    null,
    null
  ]"
  output="/Main/assets/fixed_ghost_necklace.png"
  outputSlot="/Main/assets/UI/crafting_output_slot.png"
  outputText=""
  outputSlotText="Ghost Necklace"
/>

The item can also be repaired when broken.
<CraftingTable
  background="/Main/assets/UI/crafting_ui.png"
  arrow="/Main/assets/UI/crafting_output_arrow.png"
  gridSlot="/Main/assets/UI/crafting_grid_texture.png"
  :grid="[
    {  image: null },
    {  image: 'https://minecraft.wiki/images/Gold_Ingot_JE4_BE2.png?80cd6' },
    {  image: null },
    {  image: 'https://minecraft.wiki/images/Gold_Ingot_JE4_BE2.png?80cd6' },
    {  image: '/Main/assets/borken_ghost_necklace.png' },
    {  image: 'https://minecraft.wiki/images/Gold_Ingot_JE4_BE2.png?80cd6' },
    {  image: null },
    {  image: 'https://minecraft.wiki/images/Gold_Ingot_JE4_BE2.png?80cd6' },
    {  image: null }
  ]"
  :inputTooltips="[
    null,
    `<span class='tooltip-title'>Gold Ingot</span>`,
    null,
    `<span class='tooltip-title'>Gold Ingot</span>`,
    `<span class='tooltip-title'>Broken Ghost Necklace</span>`,
    `<span class='tooltip-title'>Gold Ingot</span>`,
    null,
    `<span class='tooltip-title'>Gold Ingot</span>`,
    null
  ]"
  output="/Main/assets/fixed_ghost_necklace.png"
  outputSlot="/Main/assets/UI/crafting_output_slot.png"
  outputText=""
  outputSlotText="Ghost Necklace"
/>