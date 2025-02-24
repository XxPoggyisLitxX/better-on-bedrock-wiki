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
  :grid="[
    {  image: 'ender_pearl' },
    {  image: 'willager_eye' },
    {  image: 'enchanter_eye' },
    {  image: 'lich_eye' },
    {  image: 'inferno_eye' },
    {  image: 'samurai_eye' },
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
  output="ender_eye"
  outputText="16"
  outputSlotText="Eyes Of Ender"
  :outputTooltips="[
     'Eyes Of Ender'
  ]"
/>