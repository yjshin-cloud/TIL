<template><div><h1 id="🌟-go-언어-기초-if-else-그리고-variable-expression" tabindex="-1"><a class="header-anchor" href="#🌟-go-언어-기초-if-else-그리고-variable-expression"><span>🌟 Go 언어 기초: <code v-pre>if</code>, <code v-pre>else</code>, 그리고 Variable Expression</span></a></h1>
<blockquote>
<p>📺 강의 영상: <a href="https://www.youtube.com/watch?v=ed5E-8GbEZo" target="_blank" rel="noopener noreferrer">#1 6 If with a Twist</a><br>
📝 대상: Go 언어를 처음 배우는 초보자</p>
</blockquote>
<hr>
<h2 id="📌-강의-개요" tabindex="-1"><a class="header-anchor" href="#📌-강의-개요"><span>📌 강의 개요</span></a></h2>
<ul>
<li>이번 강의에서는 Go 언어의 <code v-pre>if</code>, <code v-pre>else</code> 문법을 다룹니다.</li>
<li>JavaScript, Python 등 다른 언어와 비교해 <strong>Go만의 깔끔한 문법</strong>을 이해할 수 있습니다.</li>
<li>특히 <strong>variable expression</strong>이라는 Go의 특별한 기능을 소개합니다.</li>
</ul>
<hr>
<h2 id="🧩-핵심-포인트-정리" tabindex="-1"><a class="header-anchor" href="#🧩-핵심-포인트-정리"><span>🧩 핵심 포인트 정리</span></a></h2>
<h3 id="_1️⃣-기본-if-사용법-00-00" tabindex="-1"><a class="header-anchor" href="#_1️⃣-기본-if-사용법-00-00"><span>1️⃣ 기본 <code v-pre>if</code> 사용법 (00:00~)</span></a></h3>
<ul>
<li>Go의 <code v-pre>if</code> 문은 괄호 <code v-pre>()</code>가 필요 없음.</li>
<li>Python처럼 콜론(<code v-pre>:</code>)도 필요 없음.</li>
<li>직관적이고 간결하게 작성 가능.</li>
</ul>
<hr>
<h3 id="_2️⃣-예시-함수-canidrink-00-42" tabindex="-1"><a class="header-anchor" href="#_2️⃣-예시-함수-canidrink-00-42"><span>2️⃣ 예시 함수: <code v-pre>canIDrink</code> (00:42~)</span></a></h3>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go"><pre v-pre><code class="language-go"><span class="line"><span class="token keyword">func</span> <span class="token function">canIDrink</span><span class="token punctuation">(</span>age <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> age <span class="token operator">&lt;</span> <span class="token number">18</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>나이가 18 미만이면 false, 아니면 true를 반환.</p>
<p>else 없이도 코드 작성 가능 → 더 깔끔한 구조.</p>
<p>3️⃣ Go의 특별한 기능: Variable Expression (01:48~)</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go"><pre v-pre><code class="language-go"><span class="line"><span class="token keyword">func</span> <span class="token function">canIDrink</span><span class="token punctuation">(</span>age <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> koreanAge <span class="token operator">:=</span> age <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span> koreanAge <span class="token operator">&lt;</span> <span class="token number">18</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>if 조건문 앞에서 변수를 선언하고, 해당 변수로 조건 검사 가능.</p>
<p>koreanAge := age + 2 → 한국식 나이 계산 예시.</p>
<p>이렇게 선언한 변수는 해당 if 블록에서만 사용 가능.</p>
<p>✅ 장점:</p>
<p>코드 가독성 향상.</p>
<p>“이 변수는 if 조건에서만 사용된다”는 의도를 분명히 전달.</p>
<p>4️⃣ else는 꼭 필요할까?</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go"><pre v-pre><code class="language-go"><span class="line"><span class="token keyword">if</span> age <span class="token operator">&lt;</span> <span class="token number">18</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>⬇️ Go 스타일로 더 깔끔하게 작성:</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go"><pre v-pre><code class="language-go"><span class="line"><span class="token keyword">if</span> age <span class="token operator">&lt;</span> <span class="token number">18</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>if 블록에서 return으로 끝나면 else는 생략해도 무방.</p>
<p>불필요한 중첩을 줄여 코드가 단순해짐.</p>
<h2 id="📊-동작-흐름-mermaid-다이어그램" tabindex="-1"><a class="header-anchor" href="#📊-동작-흐름-mermaid-다이어그램"><span>📊 동작 흐름 (Mermaid 다이어그램)</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">flowchart</span> TD</span>
<span class="line">    A<span class="token text string">[입력: age]</span> <span class="token arrow operator">--></span> B<span class="token text string">[koreanAge := age + 2]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> C<span class="token text string">{ koreanAge &lt; 18 ? }</span></span>
<span class="line">    C <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">Yes</span> <span class="token arrow operator">--></span></span> D<span class="token text string">[return false]</span></span>
<span class="line">    C <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">No</span> <span class="token arrow operator">--></span></span> E<span class="token text string">[return true]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🎯-정리-03-35" tabindex="-1"><a class="header-anchor" href="#🎯-정리-03-35"><span>🎯 정리 (03:35~)</span></a></h2>
<p>Go의 if는 단순하면서도 강력한 문법.</p>
<p>다른 언어와 달리 if 안에서 변수를 선언하고 활용 가능.</p>
<p>else는 선택 사항 → 코드가 더 깔끔해짐.</p>
<p>다음 강의에서는 Switch 문을 다룸.</p>
<h2 id="📚-더-알아보기" tabindex="-1"><a class="header-anchor" href="#📚-더-알아보기"><span>📚 더 알아보기</span></a></h2>
<p>Glasp에서 Go 언어와 관련된 학습 노트를 더 찾아보세요:</p>
<p>👉 Learn more on Glasp</p>
</div></template>


