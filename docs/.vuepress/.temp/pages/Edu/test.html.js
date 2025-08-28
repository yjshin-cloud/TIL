import comp from "C:/likelion/workspace/TIL/docs/.vuepress/.temp/pages/Edu/test.html.vue"
const data = JSON.parse("{\"path\":\"/Edu/test.html\",\"title\":\"\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1756307520000,\"contributors\":[{\"name\":\"yjshin-cloud\",\"username\":\"yjshin-cloud\",\"email\":\"yjshin.cloud@gmail.com\",\"commits\":2,\"url\":\"https://github.com/yjshin-cloud\"},{\"name\":\"yjshin.cloud\",\"username\":\"\",\"email\":\"yjshin.cloud@gmail.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"a25b1690258363e622bea4ff5ccd8e22aaa7ddef\",\"time\":1756307520000,\"email\":\"yjshin.cloud@gmail.com\",\"author\":\"yjshin.cloud\",\"message\":\"TEST4\"},{\"hash\":\"354e8645579aa88ea3af0617ef1b6e306e468510\",\"time\":1755005245000,\"email\":\"yjshin.cloud@gmail.com\",\"author\":\"yjshin-cloud\",\"message\":\"Create test.md\"},{\"hash\":\"69ab45df4decde9253183da36aeb4fcf4add1aa1\",\"time\":1754835287000,\"email\":\"yjshin.cloud@gmail.com\",\"author\":\"yjshin-cloud\",\"message\":\"Create TEST.MD\"}]},\"filePathRelative\":\"Edu/test.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
