import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
    base: isProd ? '/TIL/' : '/',
    lang: 'ko-KR',
    title: 'YJ Shin TIL Blog',
    description: 'Today I Learned',
    bundler: viteBundler({
        viteOptions: {
            clearScreen: false,
            server: {
                host: 'localhost', // ⬅️ 여기!
                port: 8080,
                strictPort: true,
                open: true,
            },
            build: { chunkSizeWarningLimit: 1024 },
        },
    }),
    theme: defaultTheme({
        navbar: [
            { text: '홈', link: '/' },
            { text: 'GitHub', link: 'https://github.com/yjshin-cloud/TIL' },
            { text: 'Blog', link: 'https://velog.io/@yjshin/posts' },
        ],
        sidebar: 'auto',
        docsRepo: 'yjshin-cloud/TIL',
        docsBranch: 'main',
        docsDir: 'docs',
        editLink: true,
        lastUpdated: true,
        contributors: true,
    }),
    plugins: [searchPlugin({ maxSuggestions: 10 })],
})
