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
    {text: 'Items', link:'/Main/Wiki/items'},
    {text: 'Blocks', link:'/Main/Wiki/blocks'},
    {text: 'Mobs', link:'/Main/Wiki/mobs'},
    {text: 'Structures', link:'/Main/Wiki/structures'},
    {text: 'Back To Home', link:'/'}
  ]}]

const beginnerGuide = [{text: 'Beginners Guides',
  items:[
    {text: 'How to install', link: '/Main/BeginnersGuide/how-to-install'},
    {text: 'Adding to your world', link:'/Main/BeginnersGuide/adding-to-world'},
    {text: 'Config', link:'/Main/BeginnersGuide/config'},
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
    logo: 'https://github.com/XxPoggyisLitxX/better-on-bedrock-wiki/blob/main/Main/assets/title.png',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Poggy'
    },
    search: {
      provider: 'local'
    },
    sidebar: {
      '/Main/Changelogs/Updates': versionUpdates,
      '/Main/Wiki': mainWiki,
      '/Main/BeginnersGuide': beginnerGuide
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XxPoggyisLitxX' },
      { icon: 'discord', link: 'https://discord.gg/AxTZ7727AR' }
    ]
  }
})
