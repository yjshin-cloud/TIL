import{_ as n,c as a,a as i,o as l}from"./app-D9gGdB3y.js";const e={};function d(c,s){return l(),a("div",null,[...s[0]||(s[0]=[i(`<h1 id="🦀-rust-기초-강의-정리-주석-comment-과-변수-경고-처리" tabindex="-1"><a class="header-anchor" href="#🦀-rust-기초-강의-정리-주석-comment-과-변수-경고-처리"><span>🦀 Rust 기초 강의 정리 - 주석(Comment)과 변수 경고 처리</span></a></h1><hr><h2 id="📌-핵심-요약" tabindex="-1"><a class="header-anchor" href="#📌-핵심-요약"><span>📌 핵심 요약</span></a></h2><ul><li><p><strong>주석(Comment)</strong></p><ul><li><code>//</code> → 한 줄 주석 (간단한 설명에 사용)</li><li><code>/* ... */</code> → 여러 줄 주석 (긴 설명이나 코드 블록 문서화에 사용)</li><li>주석은 실행되지 않고, <strong>사람이 읽을 수 있는 설명</strong>으로만 존재</li></ul></li><li><p><strong>변수 관련 경고</strong></p><ul><li>변수를 선언했지만 사용하지 않으면 <strong>경고(warning)</strong> 발생</li><li>필요 없다면 변수명 앞에 <code>_</code>를 붙여 경고를 없앨 수 있음</li><li>예:<div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs"><pre><code class="language-rust"><span class="line"><span class="token keyword">let</span> _x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// _를 붙이면 사용하지 않아도 경고가 사라짐</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul></li><li><p><strong>경고 무시하기</strong></p><ul><li>러스트는 매우 친절해서 작은 문제도 알려줌</li><li>하지만 초보자라면 경고를 무시하지 말고, 왜 생겼는지 이해하는 것이 중요</li></ul></li><li><p><strong>코드 가독성</strong></p><ul><li>변수 이름은 의미 있는 단어를 사용할 것</li><li>한국어 변수명도 가능하지만, 협업 시 영어 변수명이 더 일반적임</li></ul></li></ul><hr><h2 id="📊-흐름-이해-mermaid-다이어그램" tabindex="-1"><a class="header-anchor" href="#📊-흐름-이해-mermaid-다이어그램"><span>📊 흐름 이해 (Mermaid 다이어그램)</span></a></h2><div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre><code class="language-mermaid"><span class="line">mindmap</span>
<span class="line">  root<span class="token text string">((Rust 기초))</span></span>
<span class="line">    주석<span class="token text string">(Comment)</span></span>
<span class="line">      한 줄 주석 //</span>
<span class="line">        코드 설명·짧은 메모</span>
<span class="line">      여러 줄 주석 /* ... */</span>
<span class="line">        긴 설명·코드 블록</span>
<span class="line">      문서화 주석 ///</span>
<span class="line">        자동 문서화·API 설명</span>
<span class="line">    변수</span>
<span class="line">      선언</span>
<span class="line">        사용 안 하면 Warning</span>
<span class="line">          _ 언더스코어 붙이면 Warning 제거</span>
<span class="line">    코드 스타일</span>
<span class="line">      좋은 변수명 → 가독성 ↑</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>💻 코드 예제 (라인별 주석 설명) // 프로그램의 진입점: main 함수</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">fn main() {</span>
<span class="line">    // let 키워드로 변수 x 선언 (값은 5)</span>
<span class="line">    // 하지만 이 변수는 사용하지 않았기 때문에 warning 발생</span>
<span class="line">    let x = 5;</span>
<span class="line"></span>
<span class="line">    // 변수명 앞에 &#39;_&#39;를 붙여서 선언</span>
<span class="line">    // 사용하지 않아도 warning이 발생하지 않음</span>
<span class="line">    let _y = 10;</span>
<span class="line"></span>
<span class="line">    // 한 줄 주석 예시: &quot;Hello, world!&quot;를 출력</span>
<span class="line">    println!(&quot;Hello, world!&quot;); </span>
<span class="line"></span>
<span class="line">    /* </span>
<span class="line">       여러 줄 주석 예시:</span>
<span class="line">       - 아래 println은 &quot;Rust 배우기&quot;라는 문장을 출력함</span>
<span class="line">       - 실제 코드 실행과는 무관하게 설명만 달 수 있음</span>
<span class="line">    */</span>
<span class="line">    println!(&quot;Rust 배우기&quot;);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">fn main() {</span>
<span class="line">    // x라는 변수를 선언하고 5라는 값을 저장</span>
<span class="line">    let x = 5;</span>
<span class="line"></span>
<span class="line">    /* </span>
<span class="line">       여러 줄 주석:</span>
<span class="line">       y 변수를 선언하고 10을 저장.</span>
<span class="line">       이 주석은 여러 줄에 걸쳐 설명할 때 유용.</span>
<span class="line">    */</span>
<span class="line">    let y = 10;</span>
<span class="line"></span>
<span class="line">    /// 문서화 주석:</span>
<span class="line">    /// add 함수는 두 숫자를 더한 결과를 반환합니다.</span>
<span class="line">    /// # 예시</span>
<span class="line">    /// \`\`\`</span>
<span class="line">    /// let result = add(2, 3);</span>
<span class="line">    /// assert_eq!(result, 5);</span>
<span class="line">    /// \`\`\`</span>
<span class="line">    fn add(a: i32, b: i32) -&gt; i32 {</span>
<span class="line">        a + b</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // println! 매크로로 결과 출력</span>
<span class="line">    println!(&quot;x + y = {}&quot;, add(x, y));</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🌟 초보자를 위한 팁</p><p>주석은 &quot;다른 개발자(또는 미래의 나)&quot;에게 설명하는 메모장 같은 것.</p><p>러스트의 경고 시스템은 &quot;더 안전하고 깔끔한 코드&quot;를 만드는 데 도움을 줌.</p><p>처음에는 불편할 수 있지만, 이 습관 덕분에 오류 없는 코드를 작성할 수 있음.</p><p>코드를 작성할 때는 항상 가독성 있는 변수명을 사용하세요.</p><p>// : 짧은 메모 → 코드 옆에 설명 남길 때 사용</p><p>/* ... */ : 긴 설명 → 여러 줄 막을 때 사용</p><p>/// : 문서화 주석 → 함수나 라이브러리 설명 (자동 문서 생성 가능)</p><p>👉 Rust에서는 단순 주석(//)과 문서화 주석(///)을 구분해서 쓰는 습관이 중요합니다. 👉 특히 협업 시 ///를 잘 활용하면 API 문서가 자동으로 생성되어 개발 효율이 높아집니다.</p>`,19)])])}const r=n(e,[["render",d]]),t=JSON.parse('{"path":"/Programming_Languages/BackEnd/Rust/Easy_Rust/002_Comments.html","title":"🦀 Rust 기초 강의 정리 - 주석(Comment)과 변수 경고 처리","lang":"ko-KR","frontmatter":{},"git":{"updatedTime":1756307520000,"contributors":[{"name":"yjshin-cloud","username":"yjshin-cloud","email":"yjshin.cloud@gmail.com","commits":1,"url":"https://github.com/yjshin-cloud"},{"name":"yjshin.cloud","username":"","email":"yjshin.cloud@gmail.com","commits":1}],"changelog":[{"hash":"a25b1690258363e622bea4ff5ccd8e22aaa7ddef","time":1756307520000,"email":"yjshin.cloud@gmail.com","author":"yjshin.cloud","message":"TEST4"},{"hash":"f20bbb17995d86032050801b522bbf5784c18758","time":1755773489000,"email":"yjshin.cloud@gmail.com","author":"yjshin-cloud","message":"Create 002_Comments.md"}]},"filePathRelative":"Programming_Languages/BackEnd/Rust/Easy_Rust/002_Comments.md"}');export{r as comp,t as data};
