module.exports = {
    // 사이트 제목
    title: 'YJ Shin TIL Blog',

    // 사이트 설명
    description: 'Today I Learned - 클라우드 엔지니어링과 프로그래밍 학습 기록',

    // GitHub Pages 배포용 기본 URL
    base: '/TIL/',

    // 테마 설정
    themeConfig: {
        // 네비게이션 바
        navbar: [
            { text: '🏠 홈', link: '/' },
            { text: '☁️ 클라우드', link: '/Cloud/' },
            { text: '🗄️ 데이터베이스', link: '/DB/' },
            { text: '🎓 교육', link: '/Edu/' },
            { text: '💻 운영체제', link: '/OS/' },
            { text: '🔧 프로그래밍', link: '/Programming_Languages/' },
            { text: '📚 GitHub', link: 'https://github.com/yjshin-cloud/TIL' }
        ],

        // 사이드바 설정
        sidebar: {
            '/Cloud/': [
                {
                    text: '☁️ 클라우드',
                    children: [
                        '/Cloud/README.md',
                        {
                            text: 'AWS',
                            children: [
                                '/Cloud/AWS/',
                                '/Cloud/AWS/Service/'
                            ]
                        }
                    ]
                }
            ],
            '/DB/': [
                {
                    text: '🗄️ 데이터베이스',
                    children: [
                        '/DB/README.md'
                    ]
                }
            ],
            '/Edu/': [
                {
                    text: '🎓 교육 과정',
                    children: [
                        '/Edu/README.md',
                        {
                            text: 'BootCamp',
                            children: [
                                '/Edu/BootCamp/README.md',
                                {
                                    text: 'LikeLion Cloud Engineering 4th',
                                    children: [
                                        '/Edu/BootCamp/LikeLionCloudEngineering_4th/README.md',
                                        '/Edu/BootCamp/LikeLionCloudEngineering_4th/0_Memoir/',
                                        '/Edu/BootCamp/LikeLionCloudEngineering_4th/1_DailyStudy/'
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            '/OS/': [
                {
                    text: '💻 운영체제',
                    children: [
                        '/OS/README.md'
                    ]
                }
            ],
            '/Programming_Languages/': [
                {
                    text: '🔧 프로그래밍 언어',
                    children: [
                        '/Programming_Languages/README.md',
                        {
                            text: 'FrontEnd',
                            children: ['/Programming_Languages/FrontEnd/']
                        },
                        {
                            text: 'BackEnd',
                            children: [
                                '/Programming_Languages/BackEnd/README.md',
                                {
                                    text: 'Go',
                                    children: [
                                        '/Programming_Languages/BackEnd/Go/README.md',
                                        '/Programming_Languages/BackEnd/Go/NomadCoders/'
                                    ]
                                },
                                {
                                    text: 'Rust',
                                    children: [
                                        '/Programming_Languages/BackEnd/Rust/README.md'
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        // GitHub 저장소 정보
        repo: 'yjshin-cloud/TIL',

        // 수정 링크 활성화
        editLinks: true,
        editLinkText: '이 페이지 수정하기',

        // 마지막 업데이트 시간 표시
        lastUpdated: '마지막 업데이트'
    },

    // 빌드 디렉토리 설정
    dest: 'build',

    // 플러그인 설정
    plugins: [
        ['@vuepress/plugin-search', {
            searchMaxSuggestions: 10
        }]
    ]
}