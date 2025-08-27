// VuePress v2 (CommonJS)
const { defineUserConfig } = require('vuepress')
const { viteBundler } = require('@vuepress/bundler-vite')
const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = defineUserConfig({
    // GitHub Pages 프로젝트 주소: https://yjshin-cloud.github.io/TIL/
    base: '/TIL/',

    lang: 'ko-KR',
    title: 'YJ Shin TIL Blog',
    description: 'Today I Learned - 클라우드 엔지니어링과 프로그래밍 학습 기록',

    bundler: viteBundler(),

    theme: defaultTheme({
        navbar: [
            { text: '🏠 홈', link: '/' },
            { text: '☁️ 클라우드', link: '/Cloud/' },
            { text: '🗄️ 데이터베이스', link: '/DB/' },
            { text: '🎓 교육', link: '/Edu/' },
            { text: '💻 운영체제', link: '/OS/' },
            { text: '🔧 프로그래밍', link: '/Programming_Languages/' },
            { text: '📚 GitHub', link: 'https://github.com/yjshin-cloud/TIL' },
        ],

        // ✅ 폴더 구조 기반 자동 사이드바
        //   각 디렉터리의 README.md(또는 index.md)가 목차의 루트가 됩니다.
        sidebar: 'structure',

        // 편집 링크/메타(선택)
        repo: 'yjshin-cloud/TIL',
        docsRepo: 'yjshin-cloud/TIL',
        docsBranch: 'main',
        docsDir: 'documents',
        editLink: true,

        lastUpdated: true,
        contributors: true,
    }),

    plugins: [
        searchPlugin({ maxSuggestions: 10 }),
    ],
})
