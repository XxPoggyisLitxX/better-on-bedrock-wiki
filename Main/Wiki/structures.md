---
title: Better on Bedrock — Structures
description: Overhauled structures, new villages, sprawling mineshafts, eerie dungeons, and updated arenas to explore.
wide: true
---

<!-- HERO -->
<ParallaxHero
    title="Structures"
    subtitle="New structures, new villages, sprawling mineshafts, eerie dungeons, and new boss arenas to explore."
    badge="Better on Bedrock — Structures"
    image="/Main/assets/blogs/Preview4"
>
    <template #actions>
        <a class="vp-button brand" href="https://www.youtube.com/watch?v=-diO8nHSVZ4" target="_blank" rel="noopener">Watch Trailer</a>
    </template>
</ParallaxHero>

<Callout type="warning" title="Work in Progress">
    This page is still being worked on — some information may be incomplete or subject to change. Additional details and updates will be added soon.
</Callout>

## Villages, Reimagined
Cherry blossoms, lush jungles, swamp mists, and dry mesas! Each village is crafted to feel native to its biome.

<ZigZagShowcase
    :sections="[
        {
            title: 'Jungle Village',
            description: 'A cozy village under the leaves and bamboo everywhere, with lanterns on the streets and nature taking part in civilization',
            card: {
                title: 'Jungle Village',
                items: [
                    { src: '/Main/assets/blogs/jungle_01', caption: 'Town Center' },
                    { src: '/Main/assets/blogs/jungle_02', caption: 'Village Layout' },
                    { src: '/Main/assets/blogs/jungle_03', caption: 'Blacksmith' }
                ]
            }
        },
        {
            title: 'Cherry Village',
            description: 'A beautiful Chinese-inspired village within the Cherry Groves. It is a cozy little town under a shower of pink petals. Wooden porches and the calm environment make it an easy place to trade and chill.',
            card: {
                title: 'Cherry Village',
                items: [
                    { src: '/Main/assets/blogs/cherry_01', caption: 'Town Center' },
                    { src: '/Main/assets/blogs/cherry_02', caption: 'Village Street View' },
                    { src: '/Main/assets/blogs/cherry_03', caption: 'Village Layout' }
                ]
            }
        },
        {
            title: 'Swamp Village',
            description: 'Who ever thought villagers could live within the soggy swamps? A pretty neat village deep withing the swamps where Villagers do science on the mushrooms.',
            card: {
                title: 'Cherry Village',
                items: [
                    { src: '/Main/assets/blogs/swamp_01', caption: 'Town Center' },
                    { src: '/Main/assets/blogs/swamp_02', caption: 'Village Street View' },
                    { src: '/Main/assets/blogs/swamp_03', caption: 'Village Layout' }
                ]
            }
        },
        {
            title: 'Mesa Village',
            description: 'Inspired by the Wild-West times. This village keeps the feel and look as if it existed since the Wild-west era. This village features its own unique layout to try and stay true to Wild-west villages.',
            card: {
                title: 'Cherry Village',
                items: [
                    { src: '/Main/assets/blogs/mesa_01', caption: 'Town Center' },
                    { src: '/Main/assets/blogs/mesa_02', caption: 'Village Street View' },
                    { src: '/Main/assets/blogs/mesa_03', caption: 'Village Layout' }
                ]
            }
        }
    ]"
/>

## Waystones
I wonder what these ancient stones are capable of... They are awaiting your command.

<ZigZagShowcase
    :sections="[
        {
            title: 'Waystone Hut (Plains)',
            description: '',
            card: {
                items: [
                    { src:'/Main/assets/structures/waystone.plains.png' }
                ]
            }
        },
        {
            title: 'Waystone Hut (Birch)',
            description: '',
            card: {
                items: [
                    { src:'/Main/assets/structures/waystone.birch.png' }
                ]
            }
        },
        {
            title: 'Waystone Tower',
            description: '',
            card: {
                items: [
                    { src: '/Main/assets/structures/waystone_tower' }
                ]
            }
        }
    ]"
/>

## Boss Arenas
<ZigZagShowcase
    :sections="[
        {
            title: 'Willager Arena!',
            description: 'A more fearsome battleground, with a totaly not suspicous chest.',
            card: {
                items: [
                    { src:'/Main/assets/blogs/willager_boss' }
                ]
            }
        },
        {
            title: 'Enchanter Arena!',
            description: 'The Enchanter returns with a new venue.',
            card: {
                items: [
                    { src:'/Main/assets/blogs/enchanter_boss' }
                ]
            }
        }
    ]"
/>

## Below the Surface: Mineshafts
<ZigZagShowcase
    :sections="[
        {
            title: 'Below the Surface: Mineshafts',
            description: 'Wider routes, sightlines, better loot paths.',
            card: {
                title: 'Jungle Village',
                items: [
                    { src:'/Main/assets/blogs/mineshaft' },
                    { src:'/Main/assets/blogs/mineshaft_01' },
                    { src:'/Main/assets/blogs/mineshaft_02' },
                ]
            }
        }
    ]"
/>

## Overworld Structures
<ZigZagShowcase
    :sections="[
        {
            title: 'Well Dungeon!',
            description: 'The Well Dungeon has been rebuilt from the ground-up to feature proper random generation. This means that most rooms and spawners will be random for each one you find! The Well Dungeon is below any Blackstone Well you find on the overworld surface!',
            card: {
                items: [
                    { src:'/Main/assets/structures/well' },
                    { src:'/Main/assets/structures/well_dungeon' },
                    { src:'/Main/assets/blogs/well_dungeon' },
                ]
            }
        },
        {
            title: 'Adventurer Camp',
            description: '',
            card: {
                items: [
                    { src: '/Main/assets/blogs/adventure_camp' },
                    { src: '/Main/assets/structures/adventurer_house' }
                ]
            }
        },
        {
            title: 'Pillager Camp',
            description: '',
            card: {
                items: [
                    { src: '/Main/assets/blogs/pillage_camp' },
                ]
            }
        },
        {
            title: 'Trader Outpost',
            description: 'This is the hideout for the Goblin Trader. He has some goodies, and a Bounty Board!',
            card: {
                items: [
                    { src:'/Main/assets/blogs/trader_outpost' }
                ]
            }
        },
        {
            title: 'Pillager Ship',
            description: '',
            card: {
                items: [
                    { src:'/Main/assets/blogs/pillage_ship' }
                ]
            }
        },
        {
            title: 'Trial Digsite',
            description: '',
            card: {
                items: [
                    { src: '/Main/assets/blogs/trail_digsite' },
                    { src: '/Main/assets/structures/trial_digsite' }
                ]
            }
        },
        {
            title: 'Lonely Wizard\'s house',
            description: 'This is where you will find the lonely wizard, whom you can trade runes with in exchange for magic staffs.',
            card: {
                items: [
                    { src: '/Main/assets/structures/wizard_house' }
                ]
            }
        },
        {
            title: 'Temple',
            description: '',
            card: {
                items: [
                    { src: '/Main/assets/structures/temple' }
                ]
            }
        },
        {
            title: 'Towers',
            description: '',
            card: {
                items: [
                    { src: '/Main/assets/structures/tower' },
                    { src: '/Main/assets/structures/enchant_tower' },
                    { src: '/Main/assets/structures/river_tower' },
                    { src: '/Main/assets/structures/battle_tower' },
                    { src: '/Main/assets/structures/pillager_tower' },
                ]
            }
        },
    ]"
/>

## Nether Structures
<ZigZagShowcase
    :sections="[
        {
            title: 'Blackstone Castle',
            description: 'This is where you will find the Withered Samurai.',
            card: {
                items: [
                    { src:'/Main/assets/structures/samurai.1.png' },
                    { src:'/Main/assets/structures/samurai.2.png' },
                ]
            }
        },
        {
            title: 'Shielded Pyroclast Arena',
            description: 'This is where you will find the Inferior AKA the Shielded Pyroclast.',
            card: {
                items: [
                    { src:'/Main/assets/structures/inferior' },
                ]
            }
        }
    ]"
/>

## The End Structures
<ZigZagShowcase
    :sections="[
        {
            title: 'Seeker Structure',
            description: 'This is where you will find the seeker, Are you willing to take your chances?',
            card: {
                items: [
                    { src:'/Main/assets/structures/seeker' }
                ]
            }
        },
        {
            title: 'Voided Ruins',
            description: 'How could someone live like this... I wonder who created such thing.',
            card: {
                items: [
                    { src:'/Main/assets/structures/voided_statue' }
                ]
            }
        },
        {
            title: 'Fungal Tower',
            description: 'A Home to the fungi.',
            card: {
                items: [
                    { src:'/Main/assets/structures/fungal_tower' }
                ]
            }
        },
    ]"
/>

<br />
What are you waiting for? Jump in now to experience a brand new world of Better on Bedrock!

## FAQ

### Can I locate Better on Bedrock structures?
Yes, you can! Just use the `/locate structure` command to find them. Locator maps are planned.