import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/better-on-bedrock-wiki/",
  title: "Better on Bedrock",
  description: "Official Wiki",
  head: [
    // ...other meta tags
    ['link', { rel: 'icon', href: '/facicon.ico' }] // Adjust the href to your favicon file name
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    logo: '/tite.png',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present XxPoggyisLitxX'
    },
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Home', link: '/index' },
          { text: 'Beginner Guide', link: '/api-beginner-guide' },
          { text: 'Items', link: '/items' },
          { text: 'Blocks', link: '/blocks' },
          { text: 'Mobs', link: '/mobs' },
          { text: 'Recipes', link: '/recipes' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XxPoggyisLitxX' },
      { icon: 'discord', link: 'https://discord.gg/AxTZ7727AR' }
    ]
  }
})
