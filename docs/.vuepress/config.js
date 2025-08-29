import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";

// GitHub Actions 빌드에서만 '/TIL/' 사용 (개발 서버에선 '/')
const base = process.env.GITHUB_PAGES === "true" ? "/TIL/" : "/";

export default defineUserConfig({
  base,
  lang: "ko-KR",
  title: "YJ Shin TIL Blog",
  description: "Today I Learned",
  bundler: viteBundler(),

  theme: defaultTheme({
    // 상단 메뉴
    navbar: [
      { text: "홈", link: "/" },
      { text: "GitHub", link: "https://github.com/yjshin-cloud/TIL" },
      { text: "Blog", link: "https://milooy.github.io/TIL" },
    ],

    // 루트(홈)에서는 섹션 링크, 섹션 내부는 자동 구조
    sidebar: {
      "/": [
        {
          text: "Sections",
          collapsible: false,
          children: [
            "/Cloud/",
            "/DB/",
            "/Edu/",
            "/OS/",
            "/Programming_Languages/",
          ],
        },
      ],
      "/Cloud/": "structure",
      "/DB/": "structure",
      "/Edu/": "structure",
      "/OS/": "structure",
      "/Programming_Languages/": "structure",
    },

    editLink: true,
    lastUpdated: true,
    contributors: true,
    docsRepo: "yjshin-cloud/TIL",
    docsBranch: "main",
    docsDir: "docs",
  }),

  plugins: [searchPlugin({ maxSuggestions: 10 })],
});
