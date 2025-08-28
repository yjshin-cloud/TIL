<template><div><h1 id="go-언어-강의-1-arrays-slices" tabindex="-1"><a class="header-anchor" href="#go-언어-강의-1-arrays-slices"><span>Go 언어 강의 #1: Arrays &amp; Slices</span></a></h1>
<h2 id="🧠-학습-목표" tabindex="-1"><a class="header-anchor" href="#🧠-학습-목표"><span>🧠 학습 목표</span></a></h2>
<ul>
<li>Go 언어의 배열(Array)과 슬라이스(Slice)의 차이 이해</li>
<li>배열 선언, 사용법, 한계 파악</li>
<li>슬라이스의 유연성 및 <code v-pre>append()</code> 함수 활용법 익히기</li>
</ul>
<hr>
<h2 id="⏱️-요약-타임라인" tabindex="-1"><a class="header-anchor" href="#⏱️-요약-타임라인"><span>⏱️ 요약 타임라인</span></a></h2>
<h3 id="✅-00-01-go의-배열-array" tabindex="-1"><a class="header-anchor" href="#✅-00-01-go의-배열-array"><span>✅ (00:01) Go의 배열 (Array)</span></a></h3>
<ul>
<li>배열은 <strong>고정된 길이</strong>를 가짐</li>
<li>선언 시, 길이와 타입을 명시해야 함<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go"><pre v-pre><code class="language-go"><span class="line"><span class="token keyword">var</span> names <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">string</span></span>
<span class="line">names<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"nico"</span></span>
<span class="line">names<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"lynn"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p>길이를 초과하면 에러 발생</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go"><pre v-pre><code class="language-go"><span class="line">names<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"error"</span> <span class="token comment">// ❌ Index out of range</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>✅ (01:33) 슬라이스 (Slice)의 소개
배열과 유사하지만 길이를 정하지 않아도 됨</p>
<p>동적 확장 가능한 구조</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go"><pre v-pre><code class="language-go"><span class="line">names <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"nico"</span><span class="token punctuation">,</span> <span class="token string">"lynn"</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>✅ (02:30) append() 함수 사용법
슬라이스에 요소 추가는 append() 사용</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go"><pre v-pre><code class="language-go"><span class="line">names <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>names<span class="token punctuation">,</span> <span class="token string">"dal"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>원본 slice는 변경되지 않으며, 새로운 slice 반환</p>
<p>✅ (03:20) 출력 확인</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go"><pre v-pre><code class="language-go"><span class="line">fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>names<span class="token punctuation">)</span>로 현재 slice 확인</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="🔍-array-vs-slice" tabindex="-1"><a class="header-anchor" href="#🔍-array-vs-slice"><span>🔍 Array vs Slice</span></a></h2>
<table>
<thead>
<tr>
<th>항목</th>
<th>배열 (Array)</th>
<th>슬라이스 (Slice)</th>
</tr>
</thead>
<tbody>
<tr>
<td>길이</td>
<td>고정</td>
<td>가변</td>
</tr>
<tr>
<td>선언 방식</td>
<td><code v-pre>[5]string</code></td>
<td><code v-pre>[]string</code></td>
</tr>
<tr>
<td>요소 추가</td>
<td>불가능 (고정 크기 초과시 에러)</td>
<td>가능 (<code v-pre>append()</code> 함수 사용)</td>
</tr>
<tr>
<td>메모리</td>
<td>고정 크기만큼 미리 할당</td>
<td>필요 시 메모리 자동 확장</td>
</tr>
</tbody>
</table>
<h2 id="📊-mermaid-다이어그램-array와-slice-비교" tabindex="-1"><a class="header-anchor" href="#📊-mermaid-다이어그램-array와-slice-비교"><span>📊 Mermaid 다이어그램: Array와 Slice 비교</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line"></span>
<span class="line">  Array<span class="token text string">["배열 (Array)"]</span></span>
<span class="line">  FixedLength<span class="token text string">["길이 고정"]</span></span>
<span class="line">  DeclareSize<span class="token text string">["초기 선언 시 크기 지정 필요"]</span></span>
<span class="line">  NoAdd<span class="token text string">["요소 추가 불가"]</span></span>
<span class="line"></span>
<span class="line">  Slice<span class="token text string">["슬라이스 (Slice)"]</span></span>
<span class="line">  FlexibleLength<span class="token text string">["길이 가변"]</span></span>
<span class="line">  NoInitialSize<span class="token text string">["초기 크기 지정 불필요"]</span></span>
<span class="line">  CanAppend<span class="token text string">["append()로 요소 추가 가능"]</span></span>
<span class="line">  ReturnsNew<span class="token text string">["새로운 slice 반환"]</span></span>
<span class="line"></span>
<span class="line">  Array <span class="token arrow operator">--></span> FixedLength</span>
<span class="line">  Array <span class="token arrow operator">--></span> DeclareSize</span>
<span class="line">  Array <span class="token arrow operator">--></span> NoAdd</span>
<span class="line"></span>
<span class="line">  Slice <span class="token arrow operator">--></span> FlexibleLength</span>
<span class="line">  Slice <span class="token arrow operator">--></span> NoInitialSize</span>
<span class="line">  Slice <span class="token arrow operator">--></span> CanAppend</span>
<span class="line">  CanAppend <span class="token arrow operator">--></span> ReturnsNew</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="code-review" tabindex="-1"><a class="header-anchor" href="#code-review"><span>Code Review</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">package main // 이 파일이 실행 가능한 프로그램(패키지의 시작점)임을 Go에게 알림</span>
<span class="line"></span>
<span class="line">import (</span>
<span class="line">	"fmt" // fmt는 출력(print)을 도와주는 기본 제공 기능 (package)</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">func main() { // main 함수는 Go 프로그램이 실행될 때 가장 먼저 호출되는 부분</span>
<span class="line">	names := []string{"nico", "lynn", "dal"} </span>
<span class="line">	// names라는 이름의 "슬라이스"를 선언함</span>
<span class="line">	// 슬라이스는 문자열(string)들의 목록(리스트)임</span>
<span class="line">	// 지금은 "nico", "lynn", "dal" 이라는 3개의 이름이 들어있음</span>
<span class="line"></span>
<span class="line">	names = append(names, "flynn")</span>
<span class="line">	// append 함수는 슬라이스에 새로운 요소를 추가할 때 사용됨</span>
<span class="line">	// 여기서는 "flynn"이라는 이름을 기존 슬라이스에 추가하고</span>
<span class="line">	// 그 결과를 다시 names에 저장함 (원래 슬라이스를 직접 수정하지 않기 때문)</span>
<span class="line"></span>
<span class="line">	fmt.Println(names)</span>
<span class="line">	// 최종적으로 names 슬라이스의 모든 요소를 출력함</span>
<span class="line">	// 결과: [nico lynn dal flynn]</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🧠-참고-포인트-비전공자를-위한-쉬운-설명" tabindex="-1"><a class="header-anchor" href="#🧠-참고-포인트-비전공자를-위한-쉬운-설명"><span>🧠 참고 포인트 (비전공자를 위한 쉬운 설명)</span></a></h3>
<p>슬라이스(slice): 여러 개의 데이터를 한꺼번에 담을 수 있는 &quot;그릇&quot;. 파이썬의 리스트(list), 자바스크립트의 배열(array)과 비슷함.</p>
<p>append(): 그릇에 새로운 걸 &quot;붙인다&quot;는 의미. 기존에 있던 데이터는 그대로 두고, 새로운 데이터를 추가하는 함수.</p>
<p>fmt.Println(): 현재 그릇 안에 뭐가 들어 있는지 화면에 보여주는 역할.</p>
<hr>
<h2 id="💡-개발-팁" tabindex="-1"><a class="header-anchor" href="#💡-개발-팁"><span>💡 개발 팁</span></a></h2>
<p>배열은 특별한 상황이 아니라면 거의 사용하지 않음</p>
<p>실무에서는 대부분 슬라이스(slice) 를 사용함</p>
<p>append() 함수는 기존 slice를 변경하지 않고, 새로운 slice를 반환하는 점 유의</p>
<h2 id="📚-추가-참고" tabindex="-1"><a class="header-anchor" href="#📚-추가-참고"><span>📚 추가 참고</span></a></h2>
<ul>
<li><a href="https://read.glasp.co" target="_blank" rel="noopener noreferrer">Glasp: Arrays vs Slices 개념 정리</a></li>
<li><a href="https://go.dev/blog/slices" target="_blank" rel="noopener noreferrer">Go 공식 문서 - Slices</a></li>
<li><a href="https://dev.to/shrsv/mastering-go-slices-a-deep-dive-from-zero-to-hero-1n97" target="_blank" rel="noopener noreferrer">Go 언어 슬라이스 심화 설명 (Dev.to)</a></li>
</ul>
</div></template>


