import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '刀刀博客',
  description: '与其感慨路难行，不如马上出发',
  lang: 'zh-CN',
  base: '/',
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
            { text: 'MySQL', link: '/posts/mysql' },
            { text: '计算机网络', link: '/posts/计算机网络/' },
            { text: '音视频处理', link: '/posts/音视频/' }
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
