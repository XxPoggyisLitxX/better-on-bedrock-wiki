import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/better-on-bedrock-wiki/",
  title: "Better on Bedrock",
  description: "Official Wiki",
  head: [['link', { rel: 'icon', href: '/facicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/index' }
    ],
    logo: '/assets/title_small.png',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present XxPoggyisLitxX'
    },
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Topics',
        items: [
          { text: 'Home', link: '/index' },
          { text: 'Beginner Guide', link: '/beginner-guide' },
          { text: 'Items', link: '/items' },
          { text: 'Blocks', link: '/blocks' },
          { text: 'Mobs', link: '/mobs' },
          { text: 'Recipes', link: '/recipes' },
          { text: 'Structures', link: '/structures' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XxPoggyisLitxX' },
      { icon: 'discord', link: 'https://discord.gg/AxTZ7727AR' }
    ]
  }
})
