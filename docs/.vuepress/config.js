const base = require('./configs/base')
module.exports = {
  base: base,

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.ico' }]
  ],
  themeConfig: {
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        sidebar: {
          '/guide/': [
            {
              text: '指南',
              children: [
                '/guide/README.md',
                '/guide/function-list.md',
                "/guide/file-naming-convention.md",
                "/guide/built-in-syntax.md",
                '/guide/function-planning.md',
                '/guide/contact-us.md',
                '/guide/participation-and-contribution.md',
              ],
            },
          ],
        },
      },
      '/en/': {
        selectLanguageName: 'English',
      },

    },
    logo: '/images/logo128.ico',
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'ezasse',
      description: 'SQL脚本自动执行器',
    },
    '/en/': {
      lang: 'en-US',
      title: 'ezasse',
      description: 'Easy automatic SQL script executor',
    },

  },

}
