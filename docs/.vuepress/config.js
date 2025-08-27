// docs/.vuepress/config.js
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
            { text: 'GitHub', link: 'https://github.com/yjshin-cloud/TIL' }
        ],

        // ⬇️ 폴더 구조 자동 사이드바
        sidebar: 'structure',

        // 편집 링크 정확도 향상(문서 루트가 docs 이므로)
        repo: 'yjshin-cloud/TIL',
        docsRepo: 'yjshin-cloud/TIL',
        docsBranch: 'main',
        docsDir: 'docs',

        editLink: true,
        lastUpdated: true,
        contributors: true,
    }),

    plugins: [searchPlugin({ maxSuggestions: 10 })],
})
