import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LTech team AI Toolbox',
  description: 'Internal catalog of AI scripts and reusable code',
  base: '/ltech-team-ai-toolbox/',
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Releases', link: 'https://github.com/YOUR-USERNAME-OR-ORG/team-ai-toolbox/releases' }
    ],
    sidebar: [
      {
        text: 'Available Tools',
        items: [
          { text: 'My First Tool', link: '/tools/my-first-tool/' }
        ]
      }
    ]
  }
})
