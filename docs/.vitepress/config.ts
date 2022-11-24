const sidebar = {
    '/': [
            { text: '快速开始', link: '/' },
            {
            text: '通用',
            children: [
                { text: 'Button 按钮', link: '/components/button/' },
            ]
            }
        ] 
}
const config = {
    title: "🔨  Common-UI",
    description: "组件库搭建模型",
    themeConfig: {
        sidebar
    },
    markdown: {
        config: (md) => {
        // 添加DemoBlock插槽
        const { demoBlockPlugin } = require('vitepress-theme-demoblock')
        md.use(demoBlockPlugin)
        }
    }
}

export default config