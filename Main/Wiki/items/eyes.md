## Eyes of Ender
<div style="display: flex; align-items: center;">
    <img src="/Main/assets/willager_eye.png" alt="Example Image" width="64">
    <img src="/Main/assets/enchanter_eye.png" alt="Example Image" width="64">
    <img src="/Main/assets/lich_eye.png" alt="Example Image" width="64">
    <img src="/Main/assets/inferno_eye.png" alt="Example Image" width="64">
    <img src="/Main/assets/samurai_eye.png" alt="Example Image" width="64">
</div>
Progression to the end has changed. Players are required to defeat 3 bosses in the overworld, like the Willager, Enchantaegis, and Flender, and 2 bosses in the Nether, being the Shielded Pyroclast (Inferior) or the Withered Samurai.

Each boss drops an eye upon defeat, and the player uses these eyes to craft eyes of ender. They will receive 12 Eyes of Ender.

## Crafting Recipe:

<CraftingTable
  background="/Main/assets/UI/crafting_ui.png"
  arrow="/Main/assets/UI/crafting_output_arrow.png"
  gridSlot="/Main/assets/UI/crafting_grid_texture.png"
  :grid="[
    {  image: '/Main/assets/item/ender_pearl.png' },
    {  image: '/Main/assets/willager_eye.png' },
    {  image: '/Main/assets/enchanter_eye.png' },
    {  image: '/Main/assets/lich_eye.png' },
    {  image: '/Main/assets/inferno_eye.png' },
    {  image: '/Main/assets/samurai_eye.png' },
    {  image: null },
    {  image: null },
    {  image: null }
  ]"
  :inputTooltips="[
    `<span class='tooltip-title'>Ender Pearl</span>`,
   `<span class='tooltip-title'>Willager Eye</span>`,
    `<span class='tooltip-title'>Enchantaegis Eye</span>`,
    `<span class='tooltip-title'>Flender Eye</span>`,
    `<span class='tooltip-title'>Inferior Eye</span>`,
    `<span class='tooltip-title'>Samurai Eye</span>`
  ]"
  output="https://minecraft.wiki/images/thumb/Eye_of_Ender_JE2_BE2.png/150px-Eye_of_Ender_JE2_BE2.png?3e29b"
  outputSlot="/Main/assets/UI/crafting_output_slot.png"
  outputText="16"
  outputSlotText="Eyes Of Ender"
  :outputTooltips="[
     'Eyes Of Ender'
  ]"
/>