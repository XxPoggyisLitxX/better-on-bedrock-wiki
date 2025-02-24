
## Smeared Pearl
<div style="display: flex; align-items: center;">
  <img src="/Main/assets/smeared_pearl.png" alt="Example Image" width="64">
</div>

### Info
The Smeared Pearl is a new projectile item that works the same as an ender pearl, only difference is that the cooldown is reduced and you take no damage once you  teleported.
### Where to find
This item is found via Crafting

## Resistance Potion
<div style="display: flex; align-items: center;">
  <img src="/Main/assets/potion_bottle_resistance.png" alt="Example Image" width="64">
</div>

### Info
This item is a new potion. This potion when drank will give you Resistance for 60 Seconds. It has a unique way to be obtained.
### Where to find
<div style="display: flex; align-items: center;">
  <img src="/Main/assets/potion_bottle_corrupt.png" alt="Example Image" width="64">
  <img src="/Main/assets/smeared_pearl.png" alt="Example Image" width="64">
  <img src="/Main/assets/blackstone_crumb.png" alt="Example Image" width="64">
</div>
Below are screenshots showing the brewing recipe. They will be labelled with what ingredients are needed.

This potion will be harder to obtain, since Better on Bedrock update 1.0.3.2 changed the way you obtain Blackstone Crumbs.

<BrewingStand
   input="smeared_pearl"
  :outputs="[
    'potion_bottle_corrupt',
    'potion_bottle_corrupt',
    'potion_bottle_corrupt'
  ]"
  :inputTooltips="['Smeared Pearl']"
  fuel="blaze_powder"
  :fuelTooltip="'Blaze Powder'"
  :outputTooltips="[
  `<span class='tooltip-title'>Corrupted Potion</span><br><span class='tooltip-property' style='color: grey; text-shadow: 3px 3px 0px #292929;'>No Effects</span>`, 
  `<span class='tooltip-title'>Corrupted Potion</span><br><span class='tooltip-property' style='color: grey; text-shadow: 3px 3px 0px #292929;'>No Effects</span>`, 
  `<span class='tooltip-title'>Corrupted Potion</span><br><span class='tooltip-property' style='color: grey; text-shadow: 3px 3px 0px #292929;'>No Effects</span>`]"
>
</BrewingStand>


Items Needed: 
- Awkward Potion
- Smeared Pearl

<BrewingStand
  :outputs="[
    'potion_bottle_resistance',
    'potion_bottle_resistance',
    'potion_bottle_resistance'
  ]"
  :inputTooltips="['Combined Elements']"
  fuel="blaze_powder"
  :fuelTooltip="'Blaze Powder'"
  :outputTooltips="[
  `<span class='tooltip-title'>Potion Of Resistance</span><br><span class='tooltip-property' style='color: grey; text-shadow: 3px 3px 0px #292929;'>No Effects</span>`, 
  `<span class='tooltip-title'>Potion Of Resistance</span><br><span class='tooltip-property' style='color: grey; text-shadow: 3px 3px 0px #292929;'>No Effects</span>`, 
  `<span class='tooltip-title'>Potion Of Resistance</span><br><span class='tooltip-property' style='color: grey; text-shadow: 3px 3px 0px #292929;'>No Effects</span>`]"
>
 <template #input="{ input, showTooltip, moveTooltip, hideTooltip, tooltip }">
    <EnchantedItem
      itemImage="combined_elements"
      :width="50"
      :height="50"
      :glintSpeed="0.75"
      :glintAngle= -45
      @mouseover="showTooltip(tooltip, $event, 'input')"
      @mousemove="moveTooltip($event)"
      @mouseleave="hideTooltip('input')"
    />
  </template>
</BrewingStand>

Items Needed: 
- Corrupted Potion
- Blackstone Crumb


## Rage Potion
<div style="display: flex; align-items: center;">
  <img src="/Main/assets/rage_potion.png" alt="Example Image" width="64">
</div>

### Info
The rage potion is a new type of potion which gives the player 4 effects!
- Speed
- Strength
- Haste
- Absorption

To get a potion of rage, you need to brew them. The ingredients are:
- Awkward Potion
- Schroom Sample (These are found in the end)

<BrewingStand
  input="schroom_sample"
  :outputs="[
    'rage_potion',
    'rage_potion',
    'rage_potion'
  ]"
  :inputTooltips="['Schroom Sample']"
  fuel="blaze_powder"
  :fuelTooltip="'Blaze Powder'"
  :outputTooltips="[
  `<span class='tooltip-title'>Potion Of Resistance</span><br><span class='tooltip-property' style='color: grey; text-shadow: 3px 3px 0px #292929;'>Speed II (0:30)</span><br><span class='tooltip-property' style='color: grey; text-shadow: 3px 3px 0px #292929;'>Haste IV (0:30)</span><br><span class='tooltip-property' style='color: grey; text-shadow: 3px 3px 0px #292929;'>Strength III (0:30)</span><br><span class='tooltip-property' style='color: grey; text-shadow: 3px 3px 0px #292929;'>Absorption IV (0:30)</span>`, 
  `<span class='tooltip-title'>Potion Of Resistance</span><br><span class='tooltip-property' style='color: grey; text-shadow: 3px 3px 0px #292929;'>Speed II (0:30)</span><br><span class='tooltip-property' style='color: grey; text-shadow: 3px 3px 0px #292929;'>Haste IV (0:30)</span><br><span class='tooltip-property' style='color: grey; text-shadow: 3px 3px 0px #292929;'>Strength III (0:30)</span><br><span class='tooltip-property' style='color: grey; text-shadow: 3px 3px 0px #292929;'>Absorption IV (0:30)</span>`, 
  `<span class='tooltip-title'>Potion Of Resistance</span><br><span class='tooltip-property' style='color: grey; text-shadow: 3px 3px 0px #292929;'>Speed II (0:30)</span><br><span class='tooltip-property' style='color: grey; text-shadow: 3px 3px 0px #292929;'>Haste IV (0:30)</span><br><span class='tooltip-property' style='color: grey; text-shadow: 3px 3px 0px #292929;'>Strength III (0:30)</span><br><span class='tooltip-property' style='color: grey; text-shadow: 3px 3px 0px #292929;'>Absorption IV (0:30)</span>`]"
>
</BrewingStand>
