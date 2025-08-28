// 사이트 전역 설정을 만드는 함수입니다.
import { defineUserConfig } from 'vuepress'
// 개발/빌드를 담당하는 Vite 번들러를 씁니다.
import { viteBundler } from '@vuepress/bundler-vite'
// 기본 테마(UI 구성: 상단바/사이드바 등)를 사용합니다.
import { defaultTheme } from '@vuepress/theme-default'
// 검색창 기능을 켜는 플러그인입니다.
import { searchPlugin } from '@vuepress/plugin-search'

// Node.js의 파일/경로 모듈을 불러옵니다(폴더를 스캔하기 위해 필요).
import fs from 'fs'
import path from 'path'

// 배포(프로덕션) 여부를 확인합니다. (배포 시 /TIL/, 로컬에선 /)
const isProd = process.env.NODE_ENV === 'production'

// 문서 루트의 절대 경로를 계산합니다. (예: <repo>/docs)
const DOCS = path.resolve(process.cwd(), 'docs')

// 파일/폴더 이름을 보기 좋은 제목으로 바꿉니다. (언더스코어/하이픈 → 공백)
const toTitle = (s) =>
    s.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

// 주어진 폴더 URL(예: '/Cloud/') 아래의 사이드바 항목을 재귀적으로 만들어줍니다.
function scan(dirUrl) {
    // dirUrl은 항상 슬래시로 끝나게 합니다. (경로 결합 실수 방지)
    if (!dirUrl.endsWith('/')) dirUrl += '/'

    // 실제 디스크상의 절대 경로를 만듭니다. (예: <repo>/docs/Cloud/)
    const abs = path.join(DOCS, dirUrl)

    // 폴더가 없으면 빈 배열을 반환합니다. (안전장치)
    if (!fs.existsSync(abs)) return []

    // 현재 폴더의 파일/하위폴더 목록을 읽습니다.
    const entries = fs.readdirSync(abs, { withFileTypes: true })

    // 사이드바에 넣을 항목들을 담을 배열입니다.
    const items = []

    // 1) 폴더의 README.md 또는 index.md가 있으면, 폴더 루트 링크를 첫 번째로 추가합니다.
    const readme = ['README.md', 'index.md'].find((f) =>
        fs.existsSync(path.join(abs, f))
    )
    if (readme) {
        // 폴더 자체로 이동하는 링크(예: '/Cloud/')
        items.push(dirUrl)
    }

    // 2) 현재 폴더의 “개별 md 파일들”을 추가합니다. (README는 제외)
    for (const e of entries) {
        // 파일이면서 .md 이고, README/index 가 아닌 것만 골라냅니다.
        if (
            e.isFile() &&
            e.name.toLowerCase().endsWith('.md') &&
            !/^readme\.md$/i.test(e.name) &&
            !/^index\.md$/i.test(e.name)
        ) {
            // 파일명에서 .md 제거
            const name = e.name.slice(0, -3)
            // 사람이 읽기 좋은 제목으로 변환 (파일명 기반)
            const title = toTitle(name)
            // VuePress의 문서 링크 형식(예: '/Cloud/My-Post.html')
            items.push({
                text: title,               // 사이드바에 보일 글자
                link: `${dirUrl}${name}.html`, // 해당 문서로 이동
            })
        }
    }

    // 3) 하위 폴더들을 처리합니다. (숨김폴더/밑줄시작/점시작은 제외)
    for (const e of entries) {
        if (
            e.isDirectory() &&
            !e.name.startsWith('.') &&
            !e.name.startsWith('_')
        ) {
            // 하위 폴더의 경로(예: '/Cloud/AWS/')
            const childUrl = `${dirUrl}${e.name}/`
            // 하위 폴더도 재귀적으로 스캔해서 children을 만듭니다.
            const children = scan(childUrl)
            // children이 하나도 없으면(실제 md가 없으면) 건너뜁니다.
            if (children.length === 0) continue
            // 접고 펼칠 수 있는 그룹으로 추가합니다.
            items.push({
                text: toTitle(e.name),  // 그룹 제목
                collapsible: true,      // 접기 가능
                collapsed: false,       // 기본 펼치기
                children,               // 하위 항목들
            })
        }
    }

    // 완성된 항목 배열을 반환합니다.
    return items
}

// 전역(모든 페이지에서 동일) 사이드바를 구성합니다.
// 각 최상위 섹션은 고정으로 두고, 내부는 scan()으로 자동 생성합니다.
const globalSidebar = [
    { text: 'Cloud', collapsible: true, collapsed: false, children: scan('/Cloud/') },
    { text: 'DB', collapsible: true, collapsed: false, children: scan('/DB/') },
    { text: 'Edu', collapsible: true, collapsed: false, children: scan('/Edu/') },
    { text: 'OS', collapsible: true, collapsed: false, children: scan('/OS/') },
    {
        text: 'Programming',
        collapsible: true,
        collapsed: false,
        children: scan('/Programming_Languages/'),
    },
]

// 여기서부터 VuePress 설정을 export 합니다.
export default defineUserConfig({
    // dev는 '/', 배포는 '/TIL/' 로 열리게 합니다.
    base: isProd ? '/TIL/' : '/',
    // 한국어
    lang: 'ko-KR',
    // 사이트 제목
    title: 'YJ Shin TIL Blog',
    // 사이트 설명
    description: 'Today I Learned',

    // Vite 번들러 옵션
    bundler: viteBundler({
        viteOptions: {
            clearScreen: false,
            server: { host: 'localhost', port: 8080, strictPort: true, open: true },
            build: { chunkSizeWarningLimit: 1024 },
        },
    }),

    // 테마/사이드바/라벨 등 UI 설정
    theme: defaultTheme({
        // 상단 네비게이션
        navbar: [
            { text: '홈', link: '/' }, // 홈으로 이동
            { text: 'GitHub', link: 'https://github.com/yjshin-cloud/TIL' }, // 저장소
            { text: 'Blog', link: 'https://milooy.github.io/TIL' },          // 참고 블로그(원하면 변경)
        ],

        // GitHub 편집 링크 관련 설정
        docsRepo: 'yjshin-cloud/TIL',
        docsBranch: 'main',
        docsDir: 'docs',
        editLink: true,
        lastUpdated: true,
        contributors: true,

        // 🔥 전역 사이드바로 “자동 생성된 트리”를 그대로 사용합니다.
        sidebar: globalSidebar,

        // 한국어 라벨(404 등)
        locales: {
            '/': {
                selectLanguageName: '한국어',
                editLinkText: '이 페이지 수정',
                lastUpdatedText: '최근 수정',
                contributorsText: '기여자',
                notFound: ['여기에 페이지가 없어요.', '주소를 다시 확인해 주세요.'],
                backToHome: '홈으로 가기',
                toggleColorMode: '색상 모드',
                toggleSidebar: '사이드바',
            },
        },
    }),

    // 검색 플러그인
    plugins: [
        searchPlugin({
            locales: { '/': { placeholder: '검색' } }, // 검색창 placeholder
            maxSuggestions: 10,                        // 제안 최대 개수
        }),
    ],
})
