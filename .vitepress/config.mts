import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Slight CSS",
  description: "A minimal CSS library for implementing components through a specific HTML structure and features.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        text: 'Quickstart',
        items: [
          { text: 'Intro', link: '/docs/guide/index' },
          { text: 'Install', link: '/docs/guide/install' }
        ]
      },
      {
        text: 'Components',
        items: [
          {
            text: 'Form Components',
            items: [
              { text: '滑块 Switcher', link: '/docs/components/form/switcher' },
            ]
          },
          {
            text: 'Reaction Components',
            items: [
              { text: '下拉菜单 Dropdown', link: '/docs/components/reaction/dropdown' },
            ]
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
