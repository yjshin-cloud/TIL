<template><div><h1 id="📘-go-언어-반복문-정리-for-range-args" tabindex="-1"><a class="header-anchor" href="#📘-go-언어-반복문-정리-for-range-args"><span>📘 Go 언어 반복문 정리: for, range, args</span></a></h1>
<h2 id="🚀-핵심-개념-요약" tabindex="-1"><a class="header-anchor" href="#🚀-핵심-개념-요약"><span>🚀 핵심 개념 요약</span></a></h2>
<p>Go 언어에는 오직 for 반복문만 존재한다. (forEach, for in, for of 없음)</p>
<p>가변 인자(...)를 통해 여러 값을 함수에 전달할 수 있다.</p>
<p>range를 사용하면 배열(Array), 슬라이스(Slice), 맵(Map) 등을 순회할 수 있다.</p>
<p>range는 기본적으로 **인덱스(index)**와 **값(value)**를 함께 반환한다.</p>
<p>필요 없는 값은 _(언더스코어)를 사용해 무시할 수 있다.</p>
<p>for와 range 조합으로 누적 합 같은 연산을 간단히 구현할 수 있다.</p>
<h2 id="⏱️-타임스탬프별-설명" tabindex="-1"><a class="header-anchor" href="#⏱️-타임스탬프별-설명"><span>⏱️ 타임스탬프별 설명</span></a></h2>
<p>(00:00) 오직 for!</p>
<p>Go에서는 반복문이 단 하나 → for</p>
<p>단순하지만 강력함</p>
<p>(00:58) 가변 인자 활용</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">func superAdd(numbers ...int) int {</span>
<span class="line">    total := 0</span>
<span class="line">    for _, number := range numbers {</span>
<span class="line">        total += number</span>
<span class="line">    }</span>
<span class="line">    return total</span>
<span class="line">}</span>
<span class="line">result := superAdd(1, 2, 3, 4, 5, 6)</span>
<span class="line">fmt.Println(result) // 출력: 21</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(02:00) range 사용하기</p>
<p>range는 배열, 슬라이스, 맵 등에서 반복 처리를 도와줌</p>
<p>JavaScript의 forEach와 유사</p>
<p>(03:06) 인덱스와 값 출력</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">numbers := []int{1, 2, 3, 4, 5, 6}</span>
<span class="line">for i, v := range numbers {</span>
<span class="line">    fmt.Println(i, v)</span>
<span class="line">}</span>
<span class="line">// 출력:</span>
<span class="line">// 0 1</span>
<span class="line">// 1 2</span>
<span class="line">// 2 3</span>
<span class="line">// ...</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(04:14) 인덱스 무시하기</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">for _, v := range numbers {</span>
<span class="line">    fmt.Println(v) // 인덱스 무시</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(04:57) 누적 합 구하기</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">total := 0</span>
<span class="line">for _, v := range numbers {</span>
<span class="line">    total += v</span>
<span class="line">}</span>
<span class="line">fmt.Println(total) // 출력: 21</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔍-for-range-동작-원리" tabindex="-1"><a class="header-anchor" href="#🔍-for-range-동작-원리"><span>🔍 for &amp; range 동작 원리</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"></span>
<span class="line"><span class="token keyword">flowchart</span> TD</span>
<span class="line">    A<span class="token text string">[배열/슬라이스 생성]</span> <span class="token arrow operator">--></span> B<span class="token text string">[range 반복 시작]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> C<span class="token text string">[인덱스 반환]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> D<span class="token text string">[값 반환]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> E<span class="token text string">[필요 시 사용]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> F<span class="token text string">[필요 없으면 _ 로 무시]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> G<span class="token text string">[변수에 저장]</span></span>
<span class="line">    G <span class="token arrow operator">--></span> H<span class="token text string">[연산 처리 - 예: 누적 합]</span></span>
<span class="line">    H <span class="token arrow operator">--></span> I<span class="token text string">[최종 결과 반환]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="💡-초보자를-위한-tip" tabindex="-1"><a class="header-anchor" href="#💡-초보자를-위한-tip"><span>💡 초보자를 위한 Tip</span></a></h2>
<p>Go 언어에서는 for 하나만 알아도 모든 반복문 구현 가능!</p>
<p>range는 매우 자주 쓰이는 패턴 → 인덱스와 값 모두 활용 가능</p>
<p>불필요한 값은 _ 처리하는 습관을 들이면 깔끔한 코드 작성 가능</p>
<p>배열, 슬라이스, 맵 모두 range와 궁합이 좋다</p>
<p>👉 다음 학습: if와 else로 조건문 배우기!</p>
</div></template>


