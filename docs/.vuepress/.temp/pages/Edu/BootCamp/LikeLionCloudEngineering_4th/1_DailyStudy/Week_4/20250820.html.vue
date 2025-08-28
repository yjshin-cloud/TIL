<template><div><h1 id="css-선택자와-타이포그래피-완벽-가이드" tabindex="-1"><a class="header-anchor" href="#css-선택자와-타이포그래피-완벽-가이드"><span>CSS 선택자와 타이포그래피 완벽 가이드</span></a></h1>
<h2 id="📋-목차" tabindex="-1"><a class="header-anchor" href="#📋-목차"><span>📋 목차</span></a></h2>
<ol>
<li><a href="#css-%EC%84%A0%ED%83%9D%EC%9E%90-%EA%B8%B0%EC%B4%88">CSS 선택자 기초</a></li>
<li><a href="#css-%EC%84%A0%ED%83%9D%EC%9E%90-%EC%A2%85%EB%A5%98">CSS 선택자 종류</a></li>
<li><a href="#css-%ED%83%80%EC%9D%B4%ED%8F%AC%EA%B7%B8%EB%9E%98%ED%94%BC">CSS 타이포그래피</a></li>
<li><a href="#%EC%8B%A4%EC%8A%B5-%EC%BD%94%EB%93%9C-%EB%B6%84%EC%84%9D">실습 코드 분석</a></li>
</ol>
<hr>
<h2 id="css-선택자-기초" tabindex="-1"><a class="header-anchor" href="#css-선택자-기초"><span>CSS 선택자 기초</span></a></h2>
<h3 id="🎯-선택자란" tabindex="-1"><a class="header-anchor" href="#🎯-선택자란"><span>🎯 선택자란?</span></a></h3>
<p>CSS 선택자(Selector)는 <strong>어떤 HTML 요소에 어떤 스타일을 줄지 지목하는 표현식</strong>입니다.</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code class="language-css"><span class="line"><span class="token comment">/* 선택자 문법 */</span></span>
<span class="line"><span class="token selector">선택자</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">속성</span><span class="token punctuation">:</span> 값<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">속성</span><span class="token punctuation">:</span> 값<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="📊-css-선택자-관계도" tabindex="-1"><a class="header-anchor" href="#📊-css-선택자-관계도"><span>📊 CSS 선택자 관계도</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">[CSS 선택자]</span> <span class="token arrow operator">--></span> B<span class="token text string">[기본 선택자]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> C<span class="token text string">[속성 선택자]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> D<span class="token text string">[결합자]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> E<span class="token text string">[그룹 선택자]</span></span>
<span class="line">    </span>
<span class="line">    B <span class="token arrow operator">--></span> B1<span class="token text string">["태그 선택자 - 예: h1, p, div"]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> B2<span class="token text string">["클래스 선택자 - 예: .className"]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> B3<span class="token text string">["아이디 선택자 - 예: #idName"]</span></span>
<span class="line">    </span>
<span class="line">    C <span class="token arrow operator">--></span> C1<span class="token text string">["속성값 선택자 - 예: input[type=password]"]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> C2<span class="token text string">["링크 타겟 선택자 - 예: a[target=_blank]"]</span></span>
<span class="line">    </span>
<span class="line">    D <span class="token arrow operator">--></span> D1<span class="token text string">["자손 선택자 - 예: .parent .child"]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> D2<span class="token text string">["자식 선택자 - 예: .parent > .child"]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> D3<span class="token text string">["인접 형제 - 예: h3 + p"]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> D4<span class="token text string">["일반 형제 - 예: h3 ~ p"]</span></span>
<span class="line">    </span>
<span class="line">    E <span class="token arrow operator">--></span> E1<span class="token text string">["다중 선택자 - 예: h3, .lead"]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="css-선택자-종류" tabindex="-1"><a class="header-anchor" href="#css-선택자-종류"><span>CSS 선택자 종류</span></a></h2>
<h3 id="_1️⃣-기본-선택자" tabindex="-1"><a class="header-anchor" href="#_1️⃣-기본-선택자"><span>1️⃣ 기본 선택자</span></a></h3>
<h4 id="태그-선택자" tabindex="-1"><a class="header-anchor" href="#태그-선택자"><span>태그 선택자</span></a></h4>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code class="language-css"><span class="line"><span class="token comment">/* HTML 태그 이름을 그대로 사용 */</span></span>
<span class="line"><span class="token selector">h1</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>           <span class="token comment">/* 글자색을 파란색으로 */</span></span>
<span class="line">    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>     <span class="token comment">/* 글자 두께를 굵게 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">p</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>          <span class="token comment">/* 모든 p 태그의 글자색을 검은색으로 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="클래스-선택자" tabindex="-1"><a class="header-anchor" href="#클래스-선택자"><span>클래스 선택자 (.)</span></a></h4>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code class="language-css"><span class="line"><span class="token comment">/* 마침표(.) + class 속성값 */</span></span>
<span class="line"><span class="token selector">.alert</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>            <span class="token comment">/* .alert 클래스를 가진 요소의 글자색을 빨간색으로 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.lead</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>          <span class="token comment">/* .lead 클래스를 가진 요소의 글자색을 초록색으로 */</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>       <span class="token comment">/* 글자 크기를 18px로 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="아이디-선택자" tabindex="-1"><a class="header-anchor" href="#아이디-선택자"><span>아이디 선택자 (#)</span></a></h4>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code class="language-css"><span class="line"><span class="token comment">/* 샵(#) + id 속성값 */</span></span>
<span class="line"><span class="token selector">#brand</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>           <span class="token comment">/* id가 brand인 요소의 글자색을 파란색으로 */</span></span>
<span class="line">    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>     <span class="token comment">/* 글자 두께를 굵게 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🔍-id-vs-class-차이점" tabindex="-1"><a class="header-anchor" href="#🔍-id-vs-class-차이점"><span>🔍 id vs class 차이점</span></a></h3>
<table>
<thead>
<tr>
<th>구분</th>
<th>id</th>
<th>class</th>
</tr>
</thead>
<tbody>
<tr>
<td>문서 내 사용</td>
<td>고유 (한 번만)</td>
<td>재사용 가능</td>
</tr>
<tr>
<td>선택자</td>
<td><code v-pre>#idName</code></td>
<td><code v-pre>.className</code></td>
</tr>
<tr>
<td>특이도</td>
<td>높음 (유지보수 시 주의)</td>
<td>낮음 (권장)</td>
</tr>
<tr>
<td>실무 활용</td>
<td>JavaScript 식별용</td>
<td>스타일링 기본 단위</td>
</tr>
</tbody>
</table>
<h3 id="_2️⃣-속성-선택자" tabindex="-1"><a class="header-anchor" href="#_2️⃣-속성-선택자"><span>2️⃣ 속성 선택자</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code class="language-css"><span class="line"><span class="token comment">/* 특정 속성을 기준으로 선택 */</span></span>
<span class="line"><span class="token selector">input[type="password"]</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> lightgray<span class="token punctuation">;</span>  <span class="token comment">/* 비밀번호 입력칸의 배경색을 연한 회색으로 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">a[target="_blank"]</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>   <span class="token comment">/* 새 창으로 열리는 링크에 밑줄 추가 */</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>                <span class="token comment">/* 글자색을 보라색으로 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3️⃣-그룹-선택자" tabindex="-1"><a class="header-anchor" href="#_3️⃣-그룹-선택자"><span>3️⃣ 그룹 선택자</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code class="language-css"><span class="line"><span class="token comment">/* 쉼표(,)로 여러 선택자를 동시에 적용 */</span></span>
<span class="line"><span class="token selector">h3, .lead</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>          <span class="token comment">/* h3 태그와 .lead 클래스 모두에게 초록색 적용 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4️⃣-결합자-combinator" tabindex="-1"><a class="header-anchor" href="#_4️⃣-결합자-combinator"><span>4️⃣ 결합자 (Combinator)</span></a></h3>
<h4 id="자손-선택자-공백" tabindex="-1"><a class="header-anchor" href="#자손-선택자-공백"><span>자손 선택자 (공백)</span></a></h4>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code class="language-css"><span class="line"><span class="token comment">/* .section 안의 모든 .note (깊이 상관없음) */</span></span>
<span class="line"><span class="token selector">.section .note</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> gray<span class="token punctuation">;</span>           <span class="token comment">/* .section 내부의 모든 .note 클래스 요소를 회색으로 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="자식-선택자" tabindex="-1"><a class="header-anchor" href="#자식-선택자"><span>자식 선택자 (&gt;)</span></a></h4>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code class="language-css"><span class="line"><span class="token comment">/* .section의 바로 아래 자식인 .note만 */</span></span>
<span class="line"><span class="token selector">.section > .note</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> lightyellow<span class="token punctuation">;</span>  <span class="token comment">/* .section의 직계 자식 .note만 연한 노란 배경 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="인접-형제-선택자" tabindex="-1"><a class="header-anchor" href="#인접-형제-선택자"><span>인접 형제 선택자 (+)</span></a></h4>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code class="language-css"><span class="line"><span class="token comment">/* h3 바로 다음에 오는 첫 번째 p */</span></span>
<span class="line"><span class="token selector">h3 + p</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>    <span class="token comment">/* h3 바로 다음 p를 기울임체로 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="일반-형제-선택자" tabindex="-1"><a class="header-anchor" href="#일반-형제-선택자"><span>일반 형제 선택자 (~)</span></a></h4>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code class="language-css"><span class="line"><span class="token comment">/* h3 뒤에 오는 모든 p */</span></span>
<span class="line"><span class="token selector">h3 ~ p</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">border-top</span><span class="token punctuation">:</span> 1px dashed black<span class="token punctuation">;</span>  <span class="token comment">/* h3 뒤의 모든 p 위쪽에 점선 테두리 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="css-타이포그래피" tabindex="-1"><a class="header-anchor" href="#css-타이포그래피"><span>CSS 타이포그래피</span></a></h2>
<h3 id="🔄-상속-inheritance" tabindex="-1"><a class="header-anchor" href="#🔄-상속-inheritance"><span>🔄 상속 (Inheritance)</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TB</span>
<span class="line">    A<span class="token text string">[부모 요소&lt;br/>color: green&lt;br/>font-size: 18px]</span> <span class="token arrow operator">--></span> B<span class="token text string">[자식 요소&lt;br/>상속받음]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> C<span class="token text string">[손자 요소&lt;br/>color: red로 덮어쓰기]</span></span>
<span class="line">    </span>
<span class="line">    D<span class="token text string">[상속되는 속성]</span> <span class="token arrow operator">--></span> D1<span class="token text string">[color]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> D2<span class="token text string">[font-family]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> D3<span class="token text string">[font-size]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> D4<span class="token text string">[line-height]</span></span>
<span class="line">    </span>
<span class="line">    E<span class="token text string">[상속되지 않는 속성]</span> <span class="token arrow operator">--></span> E1<span class="token text string">[border]</span></span>
<span class="line">    E <span class="token arrow operator">--></span> E2<span class="token text string">[margin]</span></span>
<span class="line">    E <span class="token arrow operator">--></span> E3<span class="token text string">[padding]</span></span>
<span class="line">    E <span class="token arrow operator">--></span> E4<span class="token text string">[width/height]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="상속-예시" tabindex="-1"><a class="header-anchor" href="#상속-예시"><span>상속 예시</span></a></h4>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code class="language-css"><span class="line"><span class="token selector">.ancestor</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>          <span class="token comment">/* 자식들에게 상속됨 */</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>       <span class="token comment">/* 자식들에게 상속됨 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.grandchild</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>            <span class="token comment">/* 조상에게서 받은 green을 red로 덮어쓰기 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.ancestor-box</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">border</span><span class="token punctuation">:</span> 2px solid orange<span class="token punctuation">;</span>  <span class="token comment">/* 자식들에게 상속되지 않음 */</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>             <span class="token comment">/* 자식들에게 상속되지 않음 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="📏-사이즈-단위" tabindex="-1"><a class="header-anchor" href="#📏-사이즈-단위"><span>📏 사이즈 단위</span></a></h3>
<h4 id="단위별-특징" tabindex="-1"><a class="header-anchor" href="#단위별-특징"><span>단위별 특징</span></a></h4>
<table>
<thead>
<tr>
<th>단위</th>
<th>설명</th>
<th>특징</th>
<th>예시</th>
</tr>
</thead>
<tbody>
<tr>
<td>px</td>
<td>픽셀 (절대 단위)</td>
<td>화면 크기와 무관한 고정값</td>
<td><code v-pre>font-size: 24px;</code></td>
</tr>
<tr>
<td>em</td>
<td>부모 기준 배수</td>
<td>부모 크기에 따라 변동됨</td>
<td><code v-pre>font-size: 2em;</code></td>
</tr>
<tr>
<td>rem</td>
<td>html 기준 배수</td>
<td>root 크기 기준으로 안정적</td>
<td><code v-pre>font-size: 1.5rem;</code></td>
</tr>
<tr>
<td>%</td>
<td>부모 대비 비율</td>
<td>반응형 디자인에 유용</td>
<td><code v-pre>font-size: 120%;</code></td>
</tr>
</tbody>
</table>
<h4 id="em-vs-rem-비교" tabindex="-1"><a class="header-anchor" href="#em-vs-rem-비교"><span>em vs rem 비교</span></a></h4>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code class="language-css"><span class="line"><span class="token selector">html</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>       <span class="token comment">/* rem의 기준값 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.parent</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>       <span class="token comment">/* em의 기준값 (이 요소의 자식들에게) */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.child-em</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>        <span class="token comment">/* 부모(20px) × 2 = 40px */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.child-rem</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>       <span class="token comment">/* html(16px) × 2 = 32px */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🔤-글꼴-속성" tabindex="-1"><a class="header-anchor" href="#🔤-글꼴-속성"><span>🔤 글꼴 속성</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code class="language-css"><span class="line"><span class="token comment">/* 글꼴 계열 지정 */</span></span>
<span class="line"><span class="token selector">.font-family-serif</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token property">font-family</span><span class="token punctuation">:</span> Georgia<span class="token punctuation">,</span> <span class="token string">"Times New Roman"</span><span class="token punctuation">,</span> serif<span class="token punctuation">;</span>  <span class="token comment">/* 세리프체 (장식 있음) */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.font-family-sans</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token property">font-family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>       <span class="token comment">/* 산세리프체 (깔끔함) */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 글자 두께 */</span></span>
<span class="line"><span class="token selector">.weight-normal</span> <span class="token punctuation">{</span> <span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span> <span class="token punctuation">}</span>              <span class="token comment">/* 보통 두께 (400) */</span></span>
<span class="line"><span class="token selector">.weight-bold</span> <span class="token punctuation">{</span> <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span> <span class="token punctuation">}</span>                  <span class="token comment">/* 굵은 두께 (700) */</span></span>
<span class="line"><span class="token selector">.weight-900</span> <span class="token punctuation">{</span> <span class="token property">font-weight</span><span class="token punctuation">:</span> 900<span class="token punctuation">;</span> <span class="token punctuation">}</span>                    <span class="token comment">/* 가장 굵은 두께 */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 기타 속성 */</span></span>
<span class="line"><span class="token selector">.italic</span> <span class="token punctuation">{</span> <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span> <span class="token punctuation">}</span>                      <span class="token comment">/* 기울임체 */</span></span>
<span class="line"><span class="token selector">.lineheight</span> <span class="token punctuation">{</span> <span class="token property">line-height</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span> <span class="token punctuation">}</span>                      <span class="token comment">/* 줄 간격 2배 */</span></span>
<span class="line"><span class="token selector">.spacing</span> <span class="token punctuation">{</span> <span class="token property">letter-spacing</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span> <span class="token punctuation">}</span>                    <span class="token comment">/* 글자 간격 4px */</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🌐-웹폰트-web-font" tabindex="-1"><a class="header-anchor" href="#🌐-웹폰트-web-font"><span>🌐 웹폰트 (Web Font)</span></a></h3>
<h4 id="font-face로-웹폰트-선언" tabindex="-1"><a class="header-anchor" href="#font-face로-웹폰트-선언"><span>@font-face로 웹폰트 선언</span></a></h4>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code class="language-css"><span class="line"><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'PartialSansKR-Regular'</span><span class="token punctuation">;</span>              <span class="token comment">/* 폰트 이름 정의 */</span></span>
<span class="line">    <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'폰트파일경로.woff2'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'woff2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">/* 폰트 파일 경로와 형식 */</span></span>
<span class="line">    <span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>                                <span class="token comment">/* 폰트 두께 */</span></span>
<span class="line">    <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>                                 <span class="token comment">/* 폰트 스타일 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="웹폰트-적용" tabindex="-1"><a class="header-anchor" href="#웹폰트-적용"><span>웹폰트 적용</span></a></h4>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code class="language-css"><span class="line"><span class="token selector">body.webfont</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'PartialSansKR-Regular'</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>  <span class="token comment">/* 웹폰트 적용, 없으면 sans-serif */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* form 요소들은 별도 지정 필요 */</span></span>
<span class="line"><span class="token selector">input, textarea, button</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'PartialSansKR-Regular'</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>  <span class="token comment">/* 폼 요소에도 웹폰트 적용 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="스타일시트-적용-방법" tabindex="-1"><a class="header-anchor" href="#스타일시트-적용-방법"><span>스타일시트 적용 방법</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> LR</span>
<span class="line">    A<span class="token text string">[CSS 적용 방법]</span> <span class="token arrow operator">--></span> B<span class="token text string">[인라인 스타일]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> C<span class="token text string">[내부 스타일]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> D<span class="token text string">[외부 스타일]</span></span>
<span class="line">    </span>
<span class="line">    B <span class="token arrow operator">--></span> B1<span class="token text string">["&amp;lt;h1 style='color:red'&amp;gt;"]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> B2<span class="token text string">[특정 요소만 빠른 수정]</span></span>
<span class="line">    </span>
<span class="line">    C <span class="token arrow operator">--></span> C1<span class="token text string">["&amp;lt;style&amp;gt; ... &amp;lt;/style&amp;gt;"]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> C2<span class="token text string">[head 태그 안에 작성]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> C3<span class="token text string">[학습/소규모 프로젝트]</span></span>
<span class="line">    </span>
<span class="line">    D <span class="token arrow operator">--></span> D1<span class="token text string">["&amp;lt;link rel='stylesheet' href='style.css'&amp;gt;"]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> D2<span class="token text string">[별도 CSS 파일]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> D3<span class="token text string">[실무에서 권장]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="적용-방법별-특징" tabindex="-1"><a class="header-anchor" href="#적용-방법별-특징"><span>적용 방법별 특징</span></a></h3>
<ol>
<li><strong>인라인 스타일</strong>: 요소 안 <code v-pre>style</code> 속성 (특정 요소만 빠르게 수정할 때)</li>
<li><strong>내부 스타일</strong>: <code v-pre>&lt;head&gt;</code> 안 <code v-pre>&lt;style&gt;</code> 태그 (학습이나 소규모 프로젝트에 적합)</li>
<li><strong>외부 스타일</strong>: 별도 <code v-pre>.css</code> 파일을 <code v-pre>link</code>로 연결 (실무에서 가장 권장)</li>
</ol>
<hr>
<h2 id="실습-코드-분석" tabindex="-1"><a class="header-anchor" href="#실습-코드-분석"><span>실습 코드 분석</span></a></h2>
<h3 id="html-구조-분석" tabindex="-1"><a class="header-anchor" href="#html-구조-분석"><span>HTML 구조 분석</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ko<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>                          <span class="token comment">&lt;!-- 한글 지원을 위한 UTF-8 인코딩 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>CSS 선택자 실습<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>                  <span class="token comment">&lt;!-- 브라우저 탭에 표시될 제목 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token comment">/* 여기에 CSS 코드가 들어감 */</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>brand<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>CSS 선택자 실습<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>             <span class="token comment">&lt;!-- id 선택자 대상 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lead<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>클래스 기반으로...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>           <span class="token comment">&lt;!-- class 선택자 대상 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alert<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>이건 경고 문구입니다.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>       <span class="token comment">&lt;!-- class 선택자 대상 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css-코드-상세-분석" tabindex="-1"><a class="header-anchor" href="#css-코드-상세-분석"><span>CSS 코드 상세 분석</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code class="language-css"><span class="line"><span class="token comment">/* STEP 1. 기본 선택자 */</span></span>
<span class="line"><span class="token selector">#brand</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>           <span class="token comment">/* id가 brand인 요소의 글자색을 파란색으로 */</span></span>
<span class="line">    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>     <span class="token comment">/* 글자 두께를 굵게 만들기 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.alert</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>            <span class="token comment">/* alert 클래스 요소의 글자색을 빨간색으로 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">h3, .lead</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>          <span class="token comment">/* h3 태그와 lead 클래스 모두 초록색으로 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* STEP 2. 속성 선택자 */</span></span>
<span class="line"><span class="token selector">input[type="password"]</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> lightgray<span class="token punctuation">;</span>  <span class="token comment">/* 비밀번호 입력 필드의 배경을 연한 회색으로 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">a[target="_blank"]</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>   <span class="token comment">/* 새 창 링크에 밑줄 표시 */</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>                <span class="token comment">/* 글자색을 보라색으로 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* STEP 3. 결합자 */</span></span>
<span class="line"><span class="token selector">.section .note</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> gray<span class="token punctuation">;</span>           <span class="token comment">/* section 클래스 안의 모든 note 클래스를 회색으로 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.section > .note</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> lightyellow<span class="token punctuation">;</span>  <span class="token comment">/* section의 직계 자식 note만 연한 노란 배경 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">h3 + p</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>    <span class="token comment">/* h3 바로 다음 p 태그를 기울임체로 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">h3 ~ p</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token property">border-top</span><span class="token punctuation">:</span> 1px dashed black<span class="token punctuation">;</span>  <span class="token comment">/* h3 뒤의 모든 p 태그 위에 점선 테두리 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="💡-학습-팁" tabindex="-1"><a class="header-anchor" href="#💡-학습-팁"><span>💡 학습 팁</span></a></h2>
<h3 id="선택자-우선순위-특이도" tabindex="-1"><a class="header-anchor" href="#선택자-우선순위-특이도"><span>선택자 우선순위 (특이도)</span></a></h3>
<ol>
<li><strong>인라인 스타일</strong> (1000점)</li>
<li><strong>ID 선택자</strong> (100점)</li>
<li><strong>클래스 선택자</strong> (10점)</li>
<li><strong>태그 선택자</strong> (1점)</li>
</ol>
<h3 id="실무-권장사항" tabindex="-1"><a class="header-anchor" href="#실무-권장사항"><span>실무 권장사항</span></a></h3>
<ul>
<li><strong>클래스 선택자</strong>를 주로 사용 (재사용성 ↑, 유지보수성 ↑)</li>
<li><strong>ID 선택자</strong>는 JavaScript 식별용으로 활용</li>
<li><strong>외부 CSS 파일</strong> 사용으로 HTML과 CSS 분리</li>
<li><strong>의미있는 클래스명</strong> 사용 (예: <code v-pre>.alert</code>, <code v-pre>.button-primary</code>)</li>
</ul>
<h3 id="디버깅-도구" tabindex="-1"><a class="header-anchor" href="#디버깅-도구"><span>디버깅 도구</span></a></h3>
<ul>
<li>브라우저 개발자 도구 (F12)에서 요소 검사</li>
<li>CSS 선택자 연습 게임: <a href="https://flukeout.github.io/" target="_blank" rel="noopener noreferrer">CSS Diner</a></li>
</ul>
<hr>
<h2 id="🎯-실습-과제" tabindex="-1"><a class="header-anchor" href="#🎯-실습-과제"><span>🎯 실습 과제</span></a></h2>
<ol>
<li><strong>기본 선택자</strong> 연습하기</li>
<li><strong>결합자</strong>로 복잡한 구조 선택하기</li>
<li><strong>웹폰트</strong> 적용해보기</li>
<li><strong>반응형</strong> 폰트 크기 만들어보기</li>
</ol>
</div></template>


