// VuePress v2 (CommonJS 스타일)
const { defineUserConfig } = require('vuepress')
const { viteBundler } = require('@vuepress/bundler-vite')
const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = defineUserConfig({
    // GitHub Pages 프로젝트 사이트 주소: https://yjshin-cloud.github.io/TIL/
    // 반드시 base를 '/TIL/' 로!
    base: '/TIL/',

    lang: 'ko-KR',
    title: 'YJ Shin TIL Blog',
    description: 'Today I Learned - 클라우드 엔지니어링과 프로그래밍 학습 기록',

    // v2는 dist 경로가 기본적으로 documents/.vuepress/dist 이므로 dest는 생략 권장
    bundler: viteBundler(),

    theme: defaultTheme({
        // v2: navbar
        navbar: [
            { text: '🏠 홈', link: '/' },
            { text: '☁️ 클라우드', link: '/Cloud/' },
            { text: '🗄️ 데이터베이스', link: '/DB/' },
            { text: '🎓 교육', link: '/Edu/' },
            { text: '💻 운영체제', link: '/OS/' },
            { text: '🔧 프로그래밍', link: '/Programming_Languages/' },
            { text: '📚 GitHub', link: 'https://github.com/yjshin-cloud/TIL' },
        ],

        // v2: sidebar (명시형)
        sidebar: {
            '/Cloud/': [
                {
                    text: '☁️ 클라우드',
                    collapsible: false,
                    children: [
                        '/Cloud/README.md',
                        {
                            text: 'AWS',
                            collapsible: false,
                            children: [
                                '/Cloud/AWS/',
                                '/Cloud/AWS/Service/',
                            ],
                        },
                    ],
                },
            ],
            '/DB/': [
                {
                    text: '🗄️ 데이터베이스',
                    collapsible: false,
                    children: ['/DB/README.md'],
                },
            ],
            '/Edu/': [
                {
                    text: '🎓 교육 과정',
                    collapsible: false,
                    children: [
                        '/Edu/README.md',
                        {
                            text: 'BootCamp',
                            collapsible: false,
                            children: [
                                '/Edu/BootCamp/README.md',
                                {
                                    text: 'LikeLion Cloud Engineering 4th',
                                    collapsible: false,
                                    children: [
                                        '/Edu/BootCamp/LikeLionCloudEngineering_4th/README.md',
                                        '/Edu/BootCamp/LikeLionCloudEngineering_4th/0_Memoir/',
                                        '/Edu/BootCamp/LikeLionCloudEngineering_4th/1_DailyStudy/',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
            '/OS/': [
                {
                    text: '💻 운영체제',
                    collapsible: false,
                    children: ['/OS/README.md'],
                },
            ],
            '/Programming_Languages/': [
                {
                    text: '🔧 프로그래밍 언어',
                    collapsible: false,
                    children: [
                        '/Programming_Languages/README.md',
                        {
                            text: 'FrontEnd',
                            collapsible: false,
                            children: ['/Programming_Languages/FrontEnd/'],
                        },
                        {
                            text: 'BackEnd',
                            collapsible: false,
                            children: [
                                '/Programming_Languages/BackEnd/README.md',
                                {
                                    text: 'Go',
                                    collapsible: false,
                                    children: [
                                        '/Programming_Languages/BackEnd/Go/README.md',
                                        '/Programming_Languages/BackEnd/Go/NomadCoders/',
                                    ],
                                },
                                {
                                    text: 'Rust',
                                    collapsible: false,
                                    children: [
                                        '/Programming_Languages/BackEnd/Rust/README.md',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        // GitHub 편집 링크/리포 정보
        repo: 'yjshin-cloud/TIL',
        docsRepo: 'yjshin-cloud/TIL',
        docsBranch: 'main',
        docsDir: 'documents',
        editLink: true,
        // editLinkPattern: ':repo/edit/:branch/:path', // 필요시 사용

        // 페이지 하단 메타
        lastUpdated: true,
        contributors: true,
    }),

    // v2 플러그인
    plugins: [
        searchPlugin({
            maxSuggestions: 10,
        }),
    ],
})
