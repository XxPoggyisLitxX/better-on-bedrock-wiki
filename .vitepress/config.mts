import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/better-on-bedrock-wiki/",
  title: "Better on Bedrock",
  description: "Official Wiki",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    logo: '/assets/tite.png',
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
          { text: 'Blocks', link: '/blocks' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XxPoggyisLitxX' },
      { icon: 'discord', link: 'https://discord.gg/AxTZ7727AR' }
    ]
  }
})
