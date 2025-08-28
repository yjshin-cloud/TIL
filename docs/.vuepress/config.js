// 사이트 전역 설정 함수를 불러옵니다.
import { defineUserConfig } from 'vuepress'
// 개발/빌드를 담당하는 Vite 번들러를 사용합니다.
import { viteBundler } from '@vuepress/bundler-vite'
// 기본 테마(UI)를 사용합니다.
import { defaultTheme } from '@vuepress/theme-default'
// 상단 검색창 플러그인입니다.
import { searchPlugin } from '@vuepress/plugin-search'

// Node.js의 파일/경로 모듈을 불러옵니다. (폴더 스캔용)
import fs from 'fs'
import path from 'path'

// 배포(프로덕션) 여부를 확인합니다. (배포 시 /TIL/, 로컬에선 /)
const isProd = process.env.NODE_ENV === 'production'

// 문서 루트(리포의 docs/)의 절대 경로를 구합니다.
const DOCS = path.resolve(process.cwd(), 'docs')

// ──────────────────────────────
// [핵심 유틸] URL/경로 정규화
// ──────────────────────────────

// URL을 항상 슬래시로 감싼 형태로 만듭니다. 예) 'Cloud' → '/Cloud/'
const normalizeUrlDir = (u) =>
    '/' + String(u).replace(/^\/+|\/+$/g, '') + '/'

// URL('/Cloud/')을 파일시스템 경로('<repo>/docs/Cloud')로 바꿉니다.
const urlToAbsFsDir = (urlDir) => {
    // 앞뒤 슬래시 제거 → 'Cloud'
    const clean = String(urlDir).replace(/^\/+|\/+$/g, '')
    // 'Cloud/AWS' → ['Cloud','AWS'] 로 나눠서 안전하게 결합
    const segs = clean ? clean.split('/') : []
    return path.join(DOCS, ...segs)
}

// 파일명(예: hello-world) → 보기 좋은 제목(Hello World)
const toTitle = (s) =>
    s.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

// ──────────────────────────────
// [핵심] 폴더를 재귀적으로 스캔해서 사이드바 아이템을 만듭니다.
// ──────────────────────────────
function scan(urlDir) {
    // URL 디렉터리를 '/Cloud/' 같은 형태로 강제 보정합니다.
    const dirUrl = normalizeUrlDir(urlDir)
    // 실제 디스크 경로: <repo>/docs/Cloud
    const abs = urlToAbsFsDir(dirUrl)

    // 폴더가 없으면 빈 배열을 반환합니다.
    if (!fs.existsSync(abs)) return []

    // 현재 폴더 안의 항목들을 읽습니다(파일/디렉터리 구분 포함).
    const entries = fs.readdirSync(abs, { withFileTypes: true })
    // 알파벳순으로 정렬(보기가 좋음)
    entries.sort((a, b) => a.name.localeCompare(b.name, 'en'))

    // 사이드바에 넣을 아이템들을 담습니다.
    const items = []

    // 1) 폴더 루트 문서(README.md / index.md)가 있으면 폴더 링크를 먼저 추가
    const readme = ['README.md', 'index.md'].find((f) =>
        fs.existsSync(path.join(abs, f))
    )
    if (readme) {
        // 폴더 자체로 이동하는 링크(예: '/Cloud/')
        items.push(dirUrl)
    }

    // 2) 같은 폴더 안의 개별 md 파일들(README/index 제외)을 추가
    for (const e of entries) {
        if (
            e.isFile() &&
            e.name.toLowerCase().endsWith('.md') &&
            !/^readme\.md$/i.test(e.name) &&
            !/^index\.md$/i.test(e.name)
        ) {
            const name = e.name.slice(0, -3)        // '.md' 제거
            const title = toTitle(name)             // 보기 좋은 제목
            items.push({
                text: title,                          // 사이드바에 보일 이름
                link: `${dirUrl}${name}.html`,        // 문서 링크(프로덕션에서도 안전)
            })
        }
    }

    // 3) 하위 폴더들을 재귀적으로 처리합니다. (숨김폴더/언더스코어/도트 제외)
    for (const e of entries) {
        if (e.isDirectory() && !e.name.startsWith('.') && !e.name.startsWith('_')) {
            const childUrl = normalizeUrlDir(dirUrl + e.name) // '/Cloud/AWS/'
            const children = scan(childUrl)                   // 하위 스캔
            if (children.length === 0) continue               // 비어있으면 생략
            items.push({
                text: toTitle(e.name),   // 그룹 제목
                collapsible: true,       // 접기 가능
                collapsed: false,        // 기본 펼침
                children,                // 하위 항목들
            })
        }
    }

    return items
}

// 전역(모든 페이지에서 동일) 사이드바: 최상위 섹션 고정 + 내부는 자동 스캔
const globalSidebar = [
    { text: 'Cloud',        collapsible: true, collapsed: false, children: scan('Cloud') },
    { text: 'DB',           collapsible: true, collapsed: false, children: scan('DB') },
    { text: 'Edu',          collapsible: true, collapsed: false, children: scan('Edu') },
    { text: 'OS',           collapsible: true, collapsed: false, children: scan('OS') },
    { text: 'Programming',  collapsible: true, collapsed: false, children: scan('Programming_Languages') },
]

// ──────────────────────────────
// VuePress 설정
// ──────────────────────────────
export default defineUserConfig({
    base: isProd ? '/TIL/' : '/',                 // dev: '/', prod: '/TIL/'
    lang: 'ko-KR',                                // 한국어
    title: 'YJ Shin TIL Blog',                    // 사이트 제목
    description: 'Today I Learned',               // 설명

    bundler: viteBundler({
        viteOptions: {
            clearScreen: false,
            server: { host: 'localhost', port: 8080, strictPort: true, open: true },
            build: { chunkSizeWarningLimit: 1024 },
        },
    }),

    theme: defaultTheme({
        navbar: [
            { text: '홈', link: '/' },                                // 홈
            { text: 'GitHub', link: 'https://github.com/yjshin-cloud/TIL' }, // 저장소
            { text: 'Blog', link: 'https://milooy.github.io/TIL' },            // 참고 블로그(변경 가능)
        ],
        docsRepo: 'yjshin-cloud/TIL',  // '이 페이지 수정' 링크용
        docsBranch: 'main',
        docsDir: 'docs',
        editLink: true,
        lastUpdated: true,
        contributors: true,

        // 🔥 전역 자동 사이드바(폴더 스캔 결과)
        sidebar: globalSidebar,

        // 한국어 라벨
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

    plugins: [
        searchPlugin({
            locales: { '/': { placeholder: '검색' } },
            maxSuggestions: 10,
        }),
    ],
})
