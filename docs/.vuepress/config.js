const { defineUserConfig } = require('vuepress')
const { viteBundler } = require('@vuepress/bundler-vite')
const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = defineUserConfig({
    base: '/TIL/',
    lang: 'ko-KR',
    title: 'YJ Shin TIL Blog',
    description: 'Today I Learned',
    bundler: viteBundler(),
    theme: defaultTheme({
        navbar: [
            { text: '홈', link: '/' },
            { text: 'Cloud', link: '/Cloud/' },
            { text: 'DB', link: '/DB/' },
            { text: 'Edu', link: '/Edu/' },
            { text: 'OS', link: '/OS/' },
            { text: 'Programming', link: '/Programming_Languages/' },
            { text: 'GitHub', link: 'https://github.com/yjshin-cloud/TIL' },
        ],
        sidebar: 'structure',
        repo: 'yjshin-cloud/TIL',
        docsRepo: 'yjshin-cloud/TIL',
        docsBranch: 'main',
        docsDir: 'docs',
        editLink: true,
        lastUpdated: true,
        contributors: true,
    }),
    plugins: [searchPlugin()]
})
