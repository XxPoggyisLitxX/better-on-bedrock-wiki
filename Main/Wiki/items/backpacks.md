
## Backpacks
<div style="display: flex; align-items: center;">
  <img src="/Main/assets/backpack.png" alt="Example Image" width="64"> <img src="/Main/assets/backpack_uncommon.png" alt="Example Image" width="64">
  <img src="/Main/assets/backpack_large.png" alt="Example Image" width="64">
</div>

### Info
Backpacks are utility items that can provide extra inventory space. They are useful when you need to carry a lot of items with you.
### Where to find
Backpacks can be crafted. There are 3 sized of backpacks: `small`, `medium` and `large`. Each backpack has its own recipe shown below


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

Backpacks can be shared to other player. When your backpack has 32 stone, and you give that backpacks to another player, they will see the 32 stone. You can hold more than one of the same backpack type.

## How to use
Pressing the use or interaction button while holding the Backpack will open the Backpack inventory. Players can not store Backpacks inside other Backpacks.

The Backpack is not available when the player is moving


## Deer Hide 
### Info
<div style="display: flex; align-items: center;">
  <img src="/Main/assets/deer_hide.png" alt="Example Image" width="32">
</div>

Deer Hide is an item dropped from Deer

### Where to find
This item is found by killing Deer


## Stronger String
<div style="display: flex; align-items: center;">
  <img src="/Main/assets/string_belt.png" alt="Example Image" width="64">
</div>

### Info
This item is used to craft backpacks
<CraftingTable
  :grid="[
    {  image: 'https://minecraft.wiki/images/thumb/String_JE2_BE2.png/150px-String_JE2_BE2.png?25d69' },
    {  image: 'deer_hide' },
    {  image: 'https://minecraft.wiki/images/thumb/String_JE2_BE2.png/150px-String_JE2_BE2.png?25d69' },
    {  image: 'deer_hide' },
    {  image: 'https://minecraft.wiki/images/thumb/String_JE2_BE2.png/150px-String_JE2_BE2.png?25d69' },
    {  image: 'deer_hide' },
    {  image: 'https://minecraft.wiki/images/thumb/String_JE2_BE2.png/150px-String_JE2_BE2.png?25d69' },
    {  image: 'deer_hide' },
    {  image: 'https://minecraft.wiki/images/thumb/String_JE2_BE2.png/150px-String_JE2_BE2.png?25d69' }
  ]"
  :inputTooltips="[
    `<span class='tooltip-title'>String</span>`,
    `<span class='tooltip-title'>Deer Hide</span>`,
    `<span class='tooltip-title'>String</span>`,
    `<span class='tooltip-title'>Deer Hide</span>`,
    `<span class='tooltip-title'>String</span>`,
    `<span class='tooltip-title'>Deer Hide</span>`,
    `<span class='tooltip-title'>String</span>`,
    `<span class='tooltip-title'>Deer Hide</span>`,
    `<span class='tooltip-title'>String</span>`
  ]"
  output="string_belt"
  outputText="4"
  outputSlotText="Stronger String"
/>
