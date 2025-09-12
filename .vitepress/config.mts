import { defineConfig } from 'vitepress'

const versionUpdates = [{text: 'Changelog Version' , 
  items:[
    {text: 'Back To Home', link:'/'},
    {text:'v1.0.5.5' , link: '/Main/Changelogs/Updates/v1.0.5/v1.0.5.5.md'},
    {text:'v1.0.5.2' , link: '/Main/Changelogs/Updates/v1.0.5/v1.0.5.2.md'},
    {text:'v1.0.5.1' , link: '/Main/Changelogs/Updates/v1.0.5/v1.0.5.1.md'},
    {text:'v1.0.5 ( Ender Depths )' , link: '/Main/Changelogs/Updates/v1.0.5/v1.0.5.md'},
    {text:'v1.0.4.5', link: '/Main/Changelogs/Updates/v1.0.4/v1.0.4.5.md'},
    {text:'v1.0.4 ( Reworked )', link: '/Main/Changelogs/Updates//v1.0.4/v1.0.4.md'},
    {text:'v1.0.3.8', link: '/Main/Changelogs/Updates/v1.0.3/v1.0.3.8.md'},
    {text:'v1.0.3.4', link: '/Main/Changelogs/Updates/v1.0.3/v1.0.3.4.md'},
    {text:'v1.0.3 ( Nether Arise ) ', link: '/Main/Changelogs/Updates/v1.0.3/v1.0.3.md'},
    {text:'v1.0.2.8', link: '/Main/Changelogs/Updates/v1.0.2/v1.0.2.8.md'},
    {text:'v1.0.2.6', link: '/Main/Changelogs/Updates/v1.0.2/v1.0.2.6.md'},
    {text:'v1.0.2.4', link: '/Main/Changelogs/Updates/v1.0.2/v1.0.2.4.md'},
    {text:'v1.0.2.3.1', link: '/Main/Changelogs/Updates/v1.0.2/v1.0.2.3.1.md'},
    {text:'v1.0.2.2', link: '/Main/Changelogs/Updates/v1.0.2/v1.0.2.2.md'},
    {text:'v1.0.2.1', link: '/Main/Changelogs/Updates/v1.0.2/v1.0.2.1.md'},
    {text:'v1.0.2 ( Over The Overworld )', link: '/Main/Changelogs/Updates/v1.0.2/v1.0.2.md'},
    {text:'v1.0.1.14', link: '/Main/Changelogs/Updates/v1.0.1/v1.0.1.14.md'},
    {text:'v1.0.1.13', link: '/Main/Changelogs/Updates/v1.0.1/v1.0.1.13.md'},
    {text:'v1.0.1.12', link: '/Main/Changelogs/Updates/v1.0.1/v1.0.1.12.md'},
    {text:'v1.0.1', link: '/Main/Changelogs/Updates/v1.0.1/v1.0.1.md'},
    {text:'v1.0.0', link: '/Main/Changelogs/Updates/v1.0.0.md'},
    {text: 'Back To Home', link:'/'}
  ]}]


const mainWiki = [{text: 'Topics',
   items:[
    {text: 'Items', link:'/Main/Wiki/items/main'},
    {text: 'Blocks', link:'/Main/Wiki/blocks/main'},
    {text: 'Mobs', link:'/Main/Wiki/mobs'},
    {text: 'Structures', link:'/Main/Wiki/structures'},
    {text: 'Music', link:'/Main/Wiki/music/main'},
    {text: 'Back To Home', link:'/'}
  ]}]

  const itemWiki = [{text: 'Topics',
    items:[
     {text: 'Food', link:'/Main/Wiki/items/food'},
     {text: 'Tools & Armor', link:'/Main/Wiki/items/tools_armor'},
     {text: 'Trophies', link:'/Main/Wiki/items/trophies'},
     {text: 'Quests & Bounties', link:'/Main/Wiki/items/quests_bounties'},
     {text: 'Enchantments', link:'/Main/Wiki/items/enchantments'},
     {text: 'Eyes', link:'/Main/Wiki/items/eyes'},
     {text: 'Potions', link:'/Main/Wiki/items/potions'},
     {text: 'Backpacks', link:'/Main/Wiki/items/backpacks'},
     {text: 'Staffs', link:'/Main/Wiki/items/staffs'},
     {text: 'Back To Home', link:'/'}
   ]}]

const beginnerGuide = [{text: 'Beginners Guides',
  items:[
    {text: 'How to install', link: '/Main/BeginnersGuide/how-to-install'},
    {text: 'Adding to your world', link:'/Main/BeginnersGuide/adding-to-world'},
    {text: 'Config & starter items', link:'/Main/BeginnersGuide/starter-items.md'},
    {text: 'Back To Home', link:'/'}
  ]
}]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "Better on Bedrock",
  description: "Official Wiki",
  head: [['link', { rel: 'icon', href: 'https://github.com/XxPoggyisLitxX/better-on-bedrock-wiki/raw/refs/heads/main/Main/assets/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/index' }
    ],
    logo: 'https://github.com/XxPoggyisLitxX/better-on-bedrock-wiki/raw/refs/heads/main/Main/assets/title.png',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Poggy'
    },
    search: {
      provider: 'local'
    },
    sidebar: {
      '/Main/better-on-bedrock-v1.0': versionUpdates,
      '/Main/Wiki': mainWiki,
      '/Main/BeginnersGuide': beginnerGuide,
      '/Main/Wiki/items/food': itemWiki,
      '/Main/Wiki/items/tools_armor': itemWiki,
      '/Main/Wiki/items/quests_bounties': itemWiki,
      '/Main/Wiki/items/trophies': itemWiki,
      '/Main/Wiki/items/enchantments': itemWiki,
      '/Main/Wiki/items/eyes': itemWiki,
      '/Main/Wiki/items/potions': itemWiki,
      '/Main/Wiki/items/backpacks': itemWiki,
      '/Main/Wiki/items/staffs': itemWiki
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XxPoggyisLitxX' },
      { icon: 'discord', link: 'https://discord.gg/AxTZ7727AR' }
    ]
  }
})
