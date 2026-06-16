import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'CWMDA',
  base: process.env.GITHUB_PAGES === 'true' ? '/CWMDA-docs/' : '/',
  description: '单细胞云平台使用说明文档',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ['superpowers/**'],
  ignoreDeadLinks: [/\.docx(?:$|\?)/, /\/General\//, /\/Software\//],
  vite: {
    assetsInclude: ['**/*.PNG', '**/*.docx', '**/*.pdf', '**/*.script']
  },
  themeConfig: {
    logo: '/public-logo.png',
    siteTitle: false,
    nav: [
      { text: '指南', link: '/guide/getting-started' },
      { text: '平台入口', link: 'https://cosmicdatahub.cwmda.com:9000/#/home' }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      label: '本页目录',
      level: [2, 3]
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    sidebar: [
      { text: '开始分析', link: '/guide/getting-started' },
      { text: '基础分析', link: '/guide/basic-analysis' },
      { text: '细胞注释', link: '/guide/cell-annotation' },
      { text: '画图工具', link: '/guide/visualisation' },
      { text: '特征分析', link: '/guide/module-score' },
      { text: '差异富集', link: '/guide/differential-enrichment' },
      { text: '亚群选择', link: '/guide/subset' },
      { text: '高级分析', link: '/guide/advanced-analysis' },
      { text: '辅助信息', link: '/guide/metadata' },
      { text: '结果总览', link: '/guide/report' },
      { text: '我的数据', link: '/guide/datas' },
      { text: '我的数据库', link: '/guide/my-database' },
      { text: '我的基因集', link: '/guide/my-genesets' },
      { text: '参数模板', link: '/guide/parameters' },
      { text: '个人信息', link: '/guide/user-info' },
      { text: '个性化分析', link: '/guide/notebooks' },
      { text: 'CosmicData Hub', link: '/guide/cosmicdata-hub' }
    ]
  }
});
