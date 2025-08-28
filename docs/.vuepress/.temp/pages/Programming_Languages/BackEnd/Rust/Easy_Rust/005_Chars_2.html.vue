<template><div><h1 id="🦀-rust-문자열과-바이트-문자-개수-이해하기" tabindex="-1"><a class="header-anchor" href="#🦀-rust-문자열과-바이트-문자-개수-이해하기"><span>🦀 Rust 문자열과 바이트/문자 개수 이해하기</span></a></h1>
<p>Rust에서는 문자열을 다룰 때 <strong>바이트 단위 길이</strong>와 <strong>문자 단위 길이</strong>가 다를 수 있어요.<br>
특히 유니코드 문자는 <strong>1바이트가 아닌 여러 바이트로 표현</strong>되기 때문에 주의가 필요합니다.</p>
<hr>
<h2 id="🗝️-핵심-개념" tabindex="-1"><a class="header-anchor" href="#🗝️-핵심-개념"><span>🗝️ 핵심 개념</span></a></h2>
<ul>
<li><strong>바이트(Byte)</strong>: 메모리에서 실제 차지하는 크기. (<code v-pre>len()</code> 메서드로 확인)</li>
<li><strong>문자(Char)</strong>: 사람이 인식하는 글자 수. (<code v-pre>chars().count()</code> 메서드로 확인)</li>
<li>Rust의 <code v-pre>String</code>은 <strong>UTF-8 인코딩</strong>을 사용 → 한글, 이모지 등은 여러 바이트로 저장됨.</li>
</ul>
<hr>
<h2 id="🔍-예제-코드" tabindex="-1"><a class="header-anchor" href="#🔍-예제-코드"><span>🔍 예제 코드</span></a></h2>
<div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs"><pre v-pre><code class="language-rust"><span class="line"><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> d2 <span class="token operator">=</span> <span class="token string">"좋다😊"</span><span class="token punctuation">;</span> <span class="token comment">// 한글 2글자 + 이모지 1개</span></span>
<span class="line">    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">"바이트 길이: {}"</span><span class="token punctuation">,</span> d2<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// 출력: 7</span></span>
<span class="line">    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">"문자 개수: {}"</span><span class="token punctuation">,</span> d2<span class="token punctuation">.</span><span class="token function">chars</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 출력: 3</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📌-설명" tabindex="-1"><a class="header-anchor" href="#📌-설명"><span>📌 설명:</span></a></h2>
<p>&quot;좋&quot; → 3바이트</p>
<p>&quot;다&quot; → 3바이트</p>
<p>&quot;😊&quot; → 1바이트 이상 (UTF-8에서 4바이트)</p>
<p>총합 = 7바이트</p>
<p>하지만 사람이 보는 문자는 총 3개</p>
<h2 id="🎨-mermaid-시각화" tabindex="-1"><a class="header-anchor" href="#🎨-mermaid-시각화"><span>🎨 Mermaid 시각화</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">flowchart</span> LR</span>
<span class="line">    A<span class="token text string">[문자열 예시 좋다 플러스 이모지]</span><span class="token punctuation">;</span></span>
<span class="line">    B<span class="token text string">[바이트 길이 len]</span><span class="token punctuation">;</span></span>
<span class="line">    C<span class="token text string">[문자 개수 chars count]</span><span class="token punctuation">;</span></span>
<span class="line">    D<span class="token text string">[총 7 바이트]</span><span class="token punctuation">;</span></span>
<span class="line">    E<span class="token text string">[총 3 문자]</span><span class="token punctuation">;</span></span>
<span class="line">    F<span class="token text string">[UTF8 특징]</span><span class="token punctuation">;</span></span>
<span class="line">    G<span class="token text string">[한글 보통 3바이트]</span><span class="token punctuation">;</span></span>
<span class="line">    H<span class="token text string">[이모지 보통 4바이트]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    A <span class="token arrow operator">--></span> B<span class="token punctuation">;</span></span>
<span class="line">    A <span class="token arrow operator">--></span> C<span class="token punctuation">;</span></span>
<span class="line">    B <span class="token arrow operator">--></span> D<span class="token punctuation">;</span></span>
<span class="line">    C <span class="token arrow operator">--></span> E<span class="token punctuation">;</span></span>
<span class="line">    A <span class="token arrow operator">--></span> F<span class="token punctuation">;</span></span>
<span class="line">    F <span class="token arrow operator">--></span> G<span class="token punctuation">;</span></span>
<span class="line">    F <span class="token arrow operator">--></span> H<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="✨-핵심-요약" tabindex="-1"><a class="header-anchor" href="#✨-핵심-요약"><span>✨ 핵심 요약</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">len() → 메모리 기준 바이트 수 반환</span>
<span class="line">chars().count() → 사람이 보는 글자 수 반환</span>
<span class="line">한글/이모지는 바이트 수가 크므로 len()과 chars().count() 값이 다를 수 있음</span>
<span class="line">문자열 처리 시 어떤 기준(바이트 vs 문자)을 쓸지 주의해야 함</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


