<template><div><h1 id="📘-go-언어-강의-요약-—-switch-문-1-7-switch" tabindex="-1"><a class="header-anchor" href="#📘-go-언어-강의-요약-—-switch-문-1-7-switch"><span>📘 Go 언어 강의 요약 — Switch 문 (#1 7 Switch)</span></a></h1>
<p>이 문서는 Go 언어의 <strong>switch 문법</strong>을 정리한 자료입니다.<br>
Java, C, JavaScript, PHP에 익숙한 사람은 금방 이해할 수 있고, Python에는 없는 문법입니다.<br>
비전공자도 이해할 수 있도록 <strong>한 줄씩 주석</strong>과 함께 예제를 설명합니다.</p>
<hr>
<h2 id="🎯-핵심-요약" tabindex="-1"><a class="header-anchor" href="#🎯-핵심-요약"><span>🎯 핵심 요약</span></a></h2>
<ul>
<li><strong>(00:01)</strong> Go에서 switch는 값을 조건별로 체크하여 결과를 반환한다.</li>
<li><strong>(00:54)</strong> 여러 개의 <code v-pre>if-else</code> 문을 대체해 코드 가독성을 높인다.</li>
<li><strong>(01:51)</strong> switch 바로 뒤에서 변수를 선언해 사용할 수 있다.</li>
<li><strong>(02:00 전후)</strong> Go의 기본 요소(if-else, function, variables, naked return, defer 등)를 복습 완료.</li>
<li><strong>(02:38)</strong> 다음 강의에서는 Go만의 고유 기능에 대해 다룬다고 예고.</li>
</ul>
<hr>
<h2 id="🧑‍💻-go-switch-예제-코드" tabindex="-1"><a class="header-anchor" href="#🧑‍💻-go-switch-예제-코드"><span>🧑‍💻 Go Switch 예제 코드</span></a></h2>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go"><pre v-pre><code class="language-go"><span class="line"><span class="token keyword">package</span> main <span class="token comment">// 패키지 이름을 정의 (Go 프로그램의 시작점은 항상 main 패키지)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// main 함수: Go 프로그램의 실행 시작 지점</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    age <span class="token operator">:=</span> <span class="token number">18</span> <span class="token comment">// 변수 age를 선언하고 18 값을 할당</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">switch</span> <span class="token punctuation">{</span> <span class="token comment">// switch 문 시작</span></span>
<span class="line">    <span class="token keyword">case</span> age <span class="token operator">&lt;</span> <span class="token number">18</span><span class="token punctuation">:</span> <span class="token comment">// age가 18보다 작을 경우</span></span>
<span class="line">        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"false"</span><span class="token punctuation">)</span> <span class="token comment">// 조건에 맞으면 "false" 출력</span></span>
<span class="line">    <span class="token keyword">case</span> age <span class="token operator">==</span> <span class="token number">18</span><span class="token punctuation">:</span> <span class="token comment">// age가 정확히 18일 경우</span></span>
<span class="line">        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"true"</span><span class="token punctuation">)</span> <span class="token comment">// 조건에 맞으면 "true" 출력</span></span>
<span class="line">    <span class="token keyword">case</span> age <span class="token operator">></span> <span class="token number">50</span><span class="token punctuation">:</span> <span class="token comment">// age가 50보다 클 경우</span></span>
<span class="line">        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"false"</span><span class="token punctuation">)</span> <span class="token comment">// 조건에 맞으면 "false" 출력</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token comment">// 위 조건들에 해당하지 않는 경우</span></span>
<span class="line">        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"false"</span><span class="token punctuation">)</span> <span class="token comment">// 기본적으로 "false" 출력</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📝-한-줄씩-상세-설명" tabindex="-1"><a class="header-anchor" href="#📝-한-줄씩-상세-설명"><span>📝 한 줄씩 상세 설명</span></a></h2>
<table>
<thead>
<tr>
<th>코드</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>package main</code></td>
<td>Go 프로그램의 진입점을 담는 패키지 정의</td>
</tr>
<tr>
<td><code v-pre>func main() {</code></td>
<td>실행이 시작되는 main 함수 정의</td>
</tr>
<tr>
<td><code v-pre>age := 18</code></td>
<td>나이를 의미하는 변수 <code v-pre>age</code> 선언 및 값 18 할당</td>
</tr>
<tr>
<td><code v-pre>switch {</code></td>
<td>switch 문 시작, 여러 조건을 순차적으로 검사</td>
</tr>
<tr>
<td><code v-pre>case age &lt; 18:</code></td>
<td>age가 18보다 작은 경우 실행될 코드</td>
</tr>
<tr>
<td><code v-pre>println(&quot;false&quot;)</code></td>
<td>결과로 <code v-pre>&quot;false&quot;</code> 문자열 출력</td>
</tr>
<tr>
<td><code v-pre>case age == 18:</code></td>
<td>age가 18과 같은 경우 실행될 코드</td>
</tr>
<tr>
<td><code v-pre>println(&quot;true&quot;)</code></td>
<td>결과로 <code v-pre>&quot;true&quot;</code> 문자열 출력</td>
</tr>
<tr>
<td><code v-pre>case age &gt; 50:</code></td>
<td>age가 50보다 큰 경우 실행될 코드</td>
</tr>
<tr>
<td><code v-pre>println(&quot;false&quot;)</code></td>
<td>결과로 <code v-pre>&quot;false&quot;</code> 문자열 출력</td>
</tr>
<tr>
<td><code v-pre>default:</code></td>
<td>위 조건에 해당하지 않는 경우 실행</td>
</tr>
<tr>
<td><code v-pre>println(&quot;false&quot;)</code></td>
<td>결과로 <code v-pre>&quot;false&quot;</code> 문자열 출력</td>
</tr>
<tr>
<td><code v-pre>}</code></td>
<td>switch 문 종료</td>
</tr>
</tbody>
</table>
<h2 id="🔎-mermaid-시각화-switch-흐름도" tabindex="-1"><a class="header-anchor" href="#🔎-mermaid-시각화-switch-흐름도"><span>🔎 Mermaid 시각화 (Switch 흐름도)</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">flowchart</span> TD</span>
<span class="line">    A<span class="token text string">[시작: age 변수 설정]</span> <span class="token arrow operator">--></span> B<span class="token text string">{switch 검사}</span></span>
<span class="line">    B <span class="token arrow operator">--></span><span class="token label property">|age &lt; 18|</span> C<span class="token text string">["false 출력"]</span></span>
<span class="line">    B <span class="token arrow operator">--></span><span class="token label property">|age == 18|</span> D<span class="token text string">["true 출력"]</span></span>
<span class="line">    B <span class="token arrow operator">--></span><span class="token label property">|age > 50|</span> E<span class="token text string">["false 출력"]</span></span>
<span class="line">    B <span class="token arrow operator">--></span><span class="token label property">|그 외|</span> F<span class="token text string">["false 출력"]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> G<span class="token text string">[종료]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> G</span>
<span class="line">    E <span class="token arrow operator">--></span> G</span>
<span class="line">    F <span class="token arrow operator">--></span> G</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="✅-요약-정리" tabindex="-1"><a class="header-anchor" href="#✅-요약-정리"><span>✅ 요약 정리</span></a></h2>
<p>Go의 switch는 여러 if-else를 간단히 대체할 수 있는 구조이다.</p>
<p>특정 값에 따라 다른 결과를 출력하거나 동작하게 만들 수 있다.</p>
<p>switch 내에서 변수를 선언하고 즉시 활용 가능하다.</p>
<p>코드 가독성과 유지보수성을 크게 높여준다.</p>
</div></template>


