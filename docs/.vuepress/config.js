const base = require('./configs/base')
// const {backToTopPlugin} = require('@vuepress/plugin-back-to-top')
module.exports = {
  base: base,

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  head: [
    ['link', {rel: 'icon', href: '/images/logo.ico'}],
    ['script', {}, `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?bcc86a06ac49afdc9601498a55dc52e3";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `]
  ],
  // plugins: [
  //   backToTopPlugin(),
  // ],
  themeConfig: {
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        sidebar: {
          '/guide/': [
            {
              text: '快速入门',
              children: [
                '/guide/base/README.md',
                '/guide/base/function-list.md',
              ],
            },
            {
              text: '详细介绍',
              children: [
                '/guide/detail/config.md',
                '/guide/detail/file-naming-convention.md',
                "/guide/detail/built-in-syntax.md",
                '/guide/detail/function-planning.md',
              ]
            },
            {
              text: '扩展',
              children: [
                '/guide/expand/customer-checker.md',
                '/guide/expand/customer-executor.md'
              ],
            },
            {
              text: '联系我们',
              children: [
                '/guide/end/contact-us.md',
                '/guide/end/participation-and-contribution.md',
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
