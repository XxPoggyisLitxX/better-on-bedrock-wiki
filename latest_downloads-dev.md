# Better on Bedrock v1.2.0 Changelog

# 1.21.20 Stable Support!!

<div style="display: flex; align-items: center;">
  <img src="/Main/assets/bob-rebrand.png" alt="Example Image">
</div>

- Donate to my Ko-Fi: https://ko-fi.com/poggythefoxxo

## Changelog

# Better on Bedrock: Overhauled

## Overhauls & Additions

- Overhauled the Fire and Ice staffs
  - Fire Staff consists of 2 attacks, 1 of which are obtained with an Upgraded Fire Rune
    - While standing, use your interact button to shoot a fireball, which will spawn fireballs at the target where the origin fireball collided with
    - While using a basic rune, you will shoot a fire shockwave attack which deals decent damage to targets.
  - Ice Staff consists of 3 attacks, 2 of which are obtained with an Upgraded Ice Rune
    - While standing, holding the interact button will result in a Frost Breath attack. Any entity that collides with the beam will be dealt 3 damage each tick, and slowed down. The effect only lasts for 4 seconds before a large cooldown.
    - While crouching/sneaking, use your interact button to use the insta-frost attack, which will freeze entities in place and deal damage over time. This effect lasts for 5 seconds
- Added nutrition and saturation info to food items
- The Well Dungeon structure to include trial spawners and trial vaults
- Trees in the overworld will have falling leaves
  - This will be a config option to enable/disable for all players
  - Each leaf block has its own unique particles
- Some biomes has their own unique ambience
- Added night ambience for when it is night time
- Added a menu background when the pack is applied as a global resource pack
- Added a unique boss bar for each boss added by Better on Bedrock
- Updated Boss bars of vanilla Bosses
- Bosses added by Better on Bedrock now has improved animations
- Improved animations on some mobs added by Better on Bedrock
- Improved structures added by Better on Bedrock to involve combat
- Overhauled the first 2 quest tiers to be tutorial focused
- Changed Vanilla tool progression. This is mentioned within quests
- Added Lore.
- Updated the Waystone to emit particles when activated.
  - These particles change color based if the Waystone is global or not
- Updated the Pedestal to emit particles whenever a rare item is on display!
- Overhauled the Forest and Jungle biome
- Added a few new structures to some biomes
- Updated The End to have some ambient sounds based on the biome
- Updated the Cherry Grove to include Pandas, Ponds, Lavenders and Pink Hydrangeas
  - These ponds can sometime spawn with coral and sea grass
- Updated foliage of the Birch Forest to be orange
- Added a few new flowers to some biomes
- Re-added the Battle Tower from Better on Bedrock v1.0.2

## Reworks

- Updated the Waystone to no longer require the player to sneak to open a UI
- Updated Shielded Pyroclast with a brand new attack "Fireball Rain"
- Updated the seeker to now weaken the player on the "Beam Charged" attack.
- Reworked the method on how players obtain Stardust tools and armor.
  - Players are required to obtain an upgrade template to upgrade their diamond tools to stardust via a smithing table
- Nerfed damage caused by enchanted mobs
- Enchanted Skeleton shoots arrows at a slower rate
- Reduced the spawn rates of some nether mobs
- Reduced the attack damage of the Hell Hound
- Reduced the amount of wither skeletons that spawns during the samurai fight
  - Withered Samurai won't spawn withered skeletons as regularly
- Updated the Shielded Pyroclast to block projectiles
- Updated the Enchantaegis to attack less often
- Updated the Shielded Pyrocloast by tweaking some attacks
- Updated the Flender to break blocks it flies through
- Vanilla ores have been given a new "placement system" meaning some ores are more common in some biomes than others
- Updated the Congig menu to have some values enabled by default
- Nerfed the stardust ingot recipe to be easier to obtain for the new smithing recipe changes

## Bug Fixes

- Fixed a bug that prevents Illager Captains from dropping Ominous Bottles
- Fixed a bug that caused the Old Waystone to not work correctly
- Fixed a duplication bug with the Old Waystone
- Fixed a bug that prevent an Iron Axe to be used on a miner bench
- Fixed an issue with Stardust Leggings and Armor trims
- Removed redstone functionality from custom doors for Stable-APIs
- Fixed Vacant Door not dropping the door item
- Fixed an issue that prevent the Quetzacaw Egg from being hatched
- Fixed a few Typos and Grammar issues
- Fixed a bug where Vacant Tree Furr had the incorrect texture
- Fixed a bug that caused the backpack to play walking sfx
- Fixed a bug that prevented Toucans, Sparrows and Pigeons from spawning
- Fixed a bug that prevented logs to be stripped from some axes
- Updated Pillager loot to 1.21.0
- Updated the Void Totem to only work within the end
- Updated the Nether Waystone structure to include a Waystone instead of a "?" block for new chunks
- Updated Iron Golems to 1.21.0
- Fixed an issue that prevented deers from spawning
- Removed Duplicate Tuff blocks that were added in BoB v1.0.1
- Updated 1.21.0 loot tables to replace vanilla tools with BoB's vanilla tools

- Updated the Add-On to work properly in 1.21.0
- Fixed an issue where any item with durability would take damage when player attacked mobs or broke blocks while holding thes items
- Fixed a bug that caused unbreaking to not work on tools
- Updated tools added by the Add-On to use custom components
- Fixed a bug that caused the coconut to randomly flood player inventories
- Enchanted books added by the Add-On can no longer be stacked
- Mostly cleaned up the error console when loading a world
- Removed all instance of `console.warn` from scripts. This means for players who run a server or play with content errors enabled, won't have their console spammed with debug or test logs
- Full amethyst armor now grants its bonus effect [Bug]
- Fixed a bug that prevented Player Corpse to work properly
- Fixed up librarian villager trades
  - The chance to get a bought quest or any of the new enchantent is much lower
- Resolved some issues with the Waystone Key
- Fixed an issue that caused the pedestal to randomly loose items
- Fixed a bug that caused the Willager chest to not summon the Willager
- Fixed a bug that caused Amethys Armor to play sounds to all players
- Fixed a bug that allowed players to obtain loads of wool from the Dotted Sheep
- Fixed sounds for all end wood types
- Fixed the "?" block that appeared wihtin a structure
- Fixed a bug that allowed players to obtain a waystone block when using Silk Touch
  - This also fixed a duplication bug
- Updated Grape and Berry bushes to match vanilla generation
- Updated Peach and Orange leaves to follow vanilla behavior
- Voided boots now have their correct behavior thanks to a bug fixed from Mojang
- Updated Small Logs to be placed sideways
- Updated end logs to behave like vanilla logs
- Updated some food/seed items to work with composters. More will be added in the future!
  - Anenome Flower, Baguette, Baked Eggplant, Barley Seeds, Barley Straw, Bluegrod Flower, Cabbage Seeds, Grape Pie, Healthy Carrot
- Fixed a bug that caused Zombie Varients to hold items incorrectly
- Fixed a bug that prevented shovels from being used with effeciency
- Increased the drop rate of Gunpowder
- Fixed the problem where End fog stayed when player entered a different dimension
- Fixed a bug where End Fog didn't work as expected
- Commands such as /locate will now show in chat
- Fixed the following issues with the Friendly Quetzacaw
  - Once tamed, it will freely walk randomy
  - Once tamed, it can attack other hostile entities
  - Once tamed, it can **only be controlled with a Carrot On A Stick**
- Hell hounds will no longer attack Striders or Zoglins
- Reduced Hell Hound spawn rate
- Fixed a bug where Leafy Liberator could not use Mangrove Leaves
- Fixed a bug that caused flowers to not drop
- Fixed the visuals of ore blocks
- Fixed an issue where some mobs had no sounds
- Reduced the rates at which enchanted Pillages spawn (fix)
- Fixed a bug that caused end fog to stay when the player entered the overworld
- Fixed the rare instance where players could not craft lanterns and torches
- Fixed a bug that prevented players from upgrading their diamond tools
- Fixed the Enderman loottable to drop Ender Shards
- Fixed the issue with crafting tables missing their sounds
- Fixed a bug with birch leaves that prevented them to decay in rare cases
- Fixed a bug where birch trees created holes in the world
- Fixed an issue where Grapes and Blueberries could not be picked when they were placed in the world
- Fixed an issue where Tall Flowers would drop 2 items instead of 1
- Fixed a bug where the ship loot was not random
- Fixed a bug where the Poggy boss was stuck within a state during phase 2
- Fixed a bug that allowed players to kill Poggy in early phases
- Fixed the problem that allowed swords to break blocks in creative mode
- Fixed the issue where the Amethyst Axe could not be used on the Miner Bench
- Fixed a bug where Waystones sometime failed to remove a saved Waystone
- Fixed an issue where a structure loaded incorrectly
- Fixed tall grass not breaking in the end
- Fixed the bug where Peach Leaves dropped Orange Fruit
- Fixed a bug where fruit leaves dropped no loot
- Fixed a big that caused the Quetzacaw to have buggy movement
- Fixed an issue where Drowned dropped Gold Ingots instead of Copper Ingots
- Fixed the bug where some structures had "Enchanted Books" with no enchantments
- Fixed a bug that prevent player from collecting Grapes and Blueberries
- Fixed a bug where the Nether Amulet could not switch modes
- Fixed a bug where some tools were missing some behaviors
- Increased the max stack size of the following items to 64 (fix)
  - Soul
  - Nether Stones
- Updated the model texture of the Stardust Helmet (fix)
- Fixed a bug where the Quetzacaw Egg did not hatch
- Temporarily buffed the voiding boots to fix a bug (fix)
- Fixed a bug where Waystones won't drop the item when the top bit was mined
- Partly cleaned up the creative menu (fix)
- Fixed a bug where the Flasp didn't attack the player
- Fixed a big where Waystone towers in the End were common
- Fixed a problem where bone meal could not be used on crops
- Fixed an issue where all mobs had now sound at all
- Fixed a problem where players were unable to consume the Rage Potion
- Fixed an issue where the Ghost Necklace could not be used
- Fixed an issue where Dusk Planks behaved like leaves
- Fixed a problem with Stardust Shovels
  - They won't play a use animation.
  - They won't take damage
- Update Player Corpse to not take any form of Damage (fix)
- Fixed the issue where the Config UI would select the wrong values
  - Removed Starter Tools for balancing purposes
- Basic staff will be held correctly (fix)
- Fixed tools not playing the item break sfx
- Fixed a bug that prevented players from using the old Waystone block
- Fixed Hell Hounds appearing invisible
- Fixed an issue where the "Require Levels" text didn't appear when players used the Auto Smelter Button in the Miner Bench, when they didn't have enough levels
- Fixed a bug where Tall Flowers were unable to break correctly
- Fixed an issue where doors would play the incorrect sound effect
- Changed the behavior of the Hell Hound to spawn much less (fix)
- Nerfed the Flender's agro range for when it is in Fireball mode (fix)
- Fixed a bug that prevent Amethyst Armor from playing walking sounds
- Fixed a bug where Stardust Sword could be stacked
- Fixed an issue where Stardust Pickaxe could not be used on the Miner Bench
- Removed the End Lantern crafting recipe (fix)
