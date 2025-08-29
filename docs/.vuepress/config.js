import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";

const base = process.env.GITHUB_PAGES === "true" ? "/TIL/" : "/";

export default defineUserConfig({
  base,
  lang: "ko-KR",
  title: "YJ Shin TIL Blog",
  description: "Today I Learned",
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      { text: "홈", link: "/" },
      { text: "GitHub", link: "https://github.com/yjshin-cloud/TIL" },
      { text: "Blog", link: "https://milooy.github.io/TIL" },
    ],
    sidebar: {
      "/": [
        {
          text: "Sections",
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
    docsRepo: "yjshin-cloud/TIL",
    docsBranch: "main",
    docsDir: "docs",
    editLink: true,
    lastUpdated: true,
    contributors: true,
  }),
  plugins: [searchPlugin({ maxSuggestions: 10 })],
});
