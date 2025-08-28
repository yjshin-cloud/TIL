<template><div><h1 id="📘-go-언어-struct-정리" tabindex="-1"><a class="header-anchor" href="#📘-go-언어-struct-정리"><span>📘 Go 언어 Struct 정리</span></a></h1>
<h2 id="🕐-학습-타임라인" tabindex="-1"><a class="header-anchor" href="#🕐-학습-타임라인"><span>🕐 학습 타임라인</span></a></h2>
<ul>
<li><strong>00:00 ~</strong> Struct 개념 소개 (Object와 유사, Map보다 유연)</li>
<li><strong>01:03 ~</strong> Struct 정의 (<code v-pre>type person struct { ... }</code>)</li>
<li><strong>01:51 ~</strong> 값 할당 방법 #1 (순서대로 값 기입)</li>
<li><strong>02:42 ~</strong> 값 할당 방법 #2 (필드명 지정하여 명확히 기입)</li>
<li><strong>03:44 ~</strong> 혼용 불가: &quot;순서 방식&quot;과 &quot;필드 지정 방식&quot;은 동시에 사용 불가</li>
<li><strong>04:34 ~</strong> Go에는 Constructor 없음 (직접 초기화 필요)</li>
<li><strong>05:35 ~</strong> Struct 실습 프로젝트 예고 (Dictionary, Bank Account, URL Checker)</li>
<li><strong>06:20 ~</strong> 향후 고급 주제: Channels &amp; Goroutines</li>
</ul>
<hr>
<h2 id="🧩-struct란" tabindex="-1"><a class="header-anchor" href="#🧩-struct란"><span>🧩 Struct란?</span></a></h2>
<ul>
<li><strong>구조체(Struct)</strong> = 여러 자료형을 묶어 하나의 새로운 <strong>사용자 정의 타입</strong>을 만드는 도구</li>
<li><strong>Map</strong>과 달리, 필드의 타입이 고정되어 있고 이름이 명확함</li>
<li><strong>클래스(class)</strong>, <strong>객체(object)</strong> 개념이 없는 Go에서 <strong>객체지향적 모델링</strong>의 핵심 수단</li>
</ul>
<hr>
<h2 id="📜-struct-정의와-사용법" tabindex="-1"><a class="header-anchor" href="#📜-struct-정의와-사용법"><span>📜 Struct 정의와 사용법</span></a></h2>
<h3 id="_1-struct-정의" tabindex="-1"><a class="header-anchor" href="#_1-struct-정의"><span>1. Struct 정의</span></a></h3>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go"><pre v-pre><code class="language-go"><span class="line"><span class="token comment">// person이라는 구조체 정의</span></span>
<span class="line"><span class="token keyword">type</span> person <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">    name    <span class="token builtin">string</span>   <span class="token comment">// 이름</span></span>
<span class="line">    age     <span class="token builtin">int</span>      <span class="token comment">// 나이</span></span>
<span class="line">    favFood <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token comment">// 좋아하는 음식 리스트</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-struct-생성-및-초기화" tabindex="-1"><a class="header-anchor" href="#_2-struct-생성-및-초기화"><span>2. Struct 생성 및 초기화</span></a></h3>
<p>방법 ① 순서대로 값 할당</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go"><pre v-pre><code class="language-go"><span class="line">nico <span class="token operator">:=</span> person<span class="token punctuation">{</span><span class="token string">"nico"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"kimchi"</span><span class="token punctuation">,</span> <span class="token string">"ramen"</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>방법 ② 필드명 지정 (가독성 ↑)</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go"><pre v-pre><code class="language-go"><span class="line">nico <span class="token operator">:=</span> person<span class="token punctuation">{</span></span>
<span class="line">    name<span class="token punctuation">:</span>    <span class="token string">"nico"</span><span class="token punctuation">,</span></span>
<span class="line">    age<span class="token punctuation">:</span>     <span class="token number">18</span><span class="token punctuation">,</span></span>
<span class="line">    favFood<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"kimchi"</span><span class="token punctuation">,</span> <span class="token string">"ramen"</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="⚠️-주의" tabindex="-1"><a class="header-anchor" href="#⚠️-주의"><span>⚠️ 주의:</span></a></h2>
<p>순서 방식과 필드명 방식은 혼용 불가!</p>
<p>둘 중 하나만 택해야 함.</p>
<h2 id="📊-mermaid-시각화" tabindex="-1"><a class="header-anchor" href="#📊-mermaid-시각화"><span>📊 Mermaid 시각화</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">classDiagram</span></span>
<span class="line">    <span class="token keyword">class</span> person <span class="token punctuation">{</span></span>
<span class="line">        string name</span>
<span class="line">        int age</span>
<span class="line">        []string favFood</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>note for person &quot;사용자 정의 타입: name, age, favFood를 포함&quot;
</code></pre>
<h2 id="🏗️-struct와-메서드" tabindex="-1"><a class="header-anchor" href="#🏗️-struct와-메서드"><span>🏗️ Struct와 메서드</span></a></h2>
<p>Go에서는 struct에 **메서드(method)**를 붙일 수 있음</p>
<p>하지만 **생성자(constructor)**는 없음 → 직접 초기화해야 함</p>
<p>다른 언어 대비 특징:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">Python: __init__</span>
<span class="line"></span>
<span class="line">JavaScript: constructor()</span>
<span class="line"></span>
<span class="line">Go: 없음 (직접 값 넣어야 함)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🛠️-현업에서-struct-활용-사례" tabindex="-1"><a class="header-anchor" href="#🛠️-현업에서-struct-활용-사례"><span>🛠️ 현업에서 Struct 활용 사례</span></a></h2>
<p>데이터 모델링</p>
<p>사용자(User), 주문(Order), 상품(Product) 등 도메인 개체 정의</p>
<p>예: 웹 서비스의 API Request/Response 모델</p>
<p>DB 연동 (ORM)</p>
<p>GORM 같은 ORM 라이브러리에서 테이블 스키마와 매핑</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go"><pre v-pre><code class="language-go"><span class="line"><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">    ID    <span class="token builtin">uint</span>   <span class="token string">`gorm:"primaryKey"`</span></span>
<span class="line">    Name  <span class="token builtin">string</span></span>
<span class="line">    Email <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JSON 직렬화/역직렬화</p>
<p>API 서버 개발 시 JSON ↔ Struct 변환</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go"><pre v-pre><code class="language-go"><span class="line"><span class="token keyword">type</span> ApiResponse <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">    Status  <span class="token builtin">string</span> <span class="token string">`json:"status"`</span></span>
<span class="line">    Message <span class="token builtin">string</span> <span class="token string">`json:"message"`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>마이크로서비스 구조</p>
<p>Struct를 통해 서비스 간 데이터 교환 포맷 정의</p>
<p>예: Kafka, gRPC 메시지 구조 설계</p>
<p>테스트 코드 작성</p>
<p>Mock 데이터 생성 시 struct 활용 → 안정적인 단위 테스트 가능</p>
<h2 id="📌-정리" tabindex="-1"><a class="header-anchor" href="#📌-정리"><span>📌 정리</span></a></h2>
<p>Struct는 Go 언어에서 객체지향적 모델링의 핵심</p>
<p>값 초기화 방식은 두 가지 → 필드명 지정 방식이 가독성 높음</p>
<p>Constructor 없음, 메서드는 struct에 붙일 수 있음</p>
<p>현업에서는 데이터 모델링, DB 매핑, JSON 처리, 마이크로서비스, 테스트에 널리 사용됨</p>
<p>이후 Channels &amp; Goroutines와 결합되어 Go의 진정한 힘 발휘 🚀</p>
</div></template>


