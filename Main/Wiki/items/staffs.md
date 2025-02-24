
## Magic Staffs
<div style="display: flex; align-items: center;">
  <img src="/Main/assets/staff.png" alt="Example Image" width="64">
  <img src="/Main/assets/ice_staff.png" alt="Example Image" width="64">
  <img src="/Main/assets/flender_staff.png" alt="Example Image" width="64">
  <img src="/Main/assets/flame_staff.png" alt="Example Image" width="64">
</div>

### Info
There are 4 staff types. These staffs use manna. Some staffs have 2 attacks, while some only have 1.

A staff will loose manna as it's being used, but manna can be refilled to a staff if it's repaired with soul in an anvil.

Soul is dropped from undead mobs.
### Where to find
Magic Staffs are found by trading with a Lonely Wizard. This mob spawns in a house in forest biomes.
## Process to find
<div style="display: flex; align-items: center;">
    <img src="/Main/assets/upgraded_flame_rune.png" alt="Example Image" width="64">
    <img src="/Main/assets/upgraded_ice_rune.png" alt="Example Image" width="64">
    <img src="/Main/assets/rune.png" alt="Example Image" width="64">
    <img src="/Main/assets/protection_rune.png" alt="Example Image" width="64">
</div>

### Where to find
Players are required to find runes, which can be found in chests around the overworld and nether. For instance, the flame rune is found in nether chests.

Once you have your runes, you can buy a magic staff from the Lonely Wizard.

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
  {
    label: 'Level 3 - Journeyman',
    buttons: [
      {
        inputItems: [{ image: 'rune', quantity: 2, toolTip: 'Basic Rune' }, { image: 'upgraded_flame_rune', toolTip: 'Flame Rune' }],
        outputItem: { image: 'flame_staff', toolTip: 'Staff' },
      },
    ],
  },
  {
    label: 'Level 4 - Expert',
    buttons: [
      {
        inputItems: [{ image: 'rune', quantity: 3, toolTip: 'Basic Rune' }, { image: 'protection_rune', toolTip: 'Flender Rune' }],
        outputItem: { image: 'flender_staff', toolTip: 'Staff' },
      },
    ],
  },
]" />


## Mana
Staffs have mana, and it lets you use your staff! Mana is the durability on your staff, can they can be filled up using an anvil and some soul!
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