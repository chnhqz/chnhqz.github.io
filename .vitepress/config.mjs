import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '刀刀博客',
  description: '与其感慨路难行，不如马上出发',
  lang: 'zh-CN',
  base: '/',
  vite: {
    build: {
      rollupOptions: {
        external: [/Users\/huangqiuzhao\/blog\/source\/.*/]
      }
    }
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' }
    ],
    sidebar: {
      '/posts/': [
        {
          text: '💻 技术学习',
          items: [
            { text: 'C语言', link: '/posts/c/' },
            { text: 'C++', link: '/posts/cpp/' },
            { text: 'Linux系统', link: '/posts/linux/linux-md' },
            { text: 'MySQL', link: '/posts/mysql' }
          ]
        },
        {
          text: '📖 读书笔记',
          items: [
            { text: '《让时间陪你慢慢变富》', link: '/posts/lixiaolai-dt-index' },
            { text: '《文明、现代化、价值投资与中国》', link: '/posts/lilu-book-index' },
            { text: '《黑天鹅》深度解读系列', link: '/posts/black-swan-series-index' },
            { text: '股市趋势技术分析的盲区', link: '/posts/stock-technical-analysis-critique' },
            { text: 'DCF现金流折现模型', link: '/posts/dcf-model-learning' },
            { text: '巴菲特', link: '/posts/buffett-series-index' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chnhqz' }
    ],
    footer: {
      message: '刀刀博客',
      copyright: 'Copyright © 2024'
    }
  }
})
