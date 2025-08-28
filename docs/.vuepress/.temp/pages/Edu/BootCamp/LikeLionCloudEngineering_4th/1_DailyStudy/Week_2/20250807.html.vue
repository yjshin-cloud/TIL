<template><div><h1 id="🔗-자바-의존성과-배포-완벽-가이드" tabindex="-1"><a class="header-anchor" href="#🔗-자바-의존성과-배포-완벽-가이드"><span>🔗 자바 의존성과 배포 완벽 가이드</span></a></h1>
<blockquote>
<p><strong>코딩 1~2주차 초보자를 위한 친절한 설명서</strong></p>
</blockquote>
<hr>
<h2 id="📚-목차" tabindex="-1"><a class="header-anchor" href="#📚-목차"><span>📚 목차</span></a></h2>
<ol>
<li><a href="#%EC%9D%98%EC%A1%B4%EC%84%B1dependency%EC%9D%B4%EB%9E%80">의존성(Dependency)이란?</a></li>
<li><a href="#%EB%AA%A8%EB%93%88-%ED%8C%A8%ED%82%A4%EC%A7%80-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC">모듈, 패키지, 라이브러리, 프레임워크</a></li>
<li><a href="#maven%EA%B3%BC-%EC%9D%98%EC%A1%B4%EC%84%B1-%EA%B4%80%EB%A6%AC">Maven과 의존성 관리</a></li>
<li><a href="#%EB%B0%B0%ED%8F%ACdeployment-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0">배포(Deployment) 이해하기</a></li>
<li><a href="#docker%EC%99%80-%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-%EB%B0%B0%ED%8F%AC">Docker와 클라우드 배포</a></li>
<li><a href="#%EC%8B%A4%EC%A0%84-%EC%98%88%EC%A0%9C-%EC%B1%97%EB%B4%87-%EB%A7%8C%EB%93%A4%EA%B8%B0">실전 예제: 챗봇 만들기</a></li>
</ol>
<hr>
<h2 id="🔗-의존성-dependency-이란" tabindex="-1"><a class="header-anchor" href="#🔗-의존성-dependency-이란"><span>🔗 의존성(Dependency)이란?</span></a></h2>
<h3 id="🏠-집-짓기로-이해하는-의존성" tabindex="-1"><a class="header-anchor" href="#🏠-집-짓기로-이해하는-의존성"><span>🏠 집 짓기로 이해하는 의존성</span></a></h3>
<p>집을 지을 때 모든 걸 처음부터 만들까요?</p>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TB</span>
<span class="line">    A<span class="token text string">[집 짓기 프로젝트]</span> <span class="token arrow operator">--></span> B<span class="token text string">[직접 만들기]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> C<span class="token text string">[기존 재료 활용하기]</span></span>
<span class="line">    </span>
<span class="line">    B <span class="token arrow operator">--></span> D<span class="token text string">[벽돌 직접 만들기 📅 6개월]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> E<span class="token text string">[창문 직접 만들기 📅 3개월]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> F<span class="token text string">[문 직접 만들기 📅 2개월]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> G<span class="token text string">[총 11개월 소요 😱]</span></span>
<span class="line">    </span>
<span class="line">    C <span class="token arrow operator">--></span> H<span class="token text string">[벽돌 구매 📅 1일]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> I<span class="token text string">[창문 구매 📅 1일]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> J<span class="token text string">[문 구매 📅 1일]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> K<span class="token text string">[총 1주일 소요 😊]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>의존성이란?</strong></p>
<ul>
<li>이미 만들어진 것을 가져다 쓰는 것</li>
<li>내가 직접 만들지 않고 다른 사람이 만든 코드를 사용</li>
<li><code v-pre>import</code> 문으로 외부 코드를 가져오는 행위</li>
</ul>
<h3 id="💡-실생활-예제-http-요청하기" tabindex="-1"><a class="header-anchor" href="#💡-실생활-예제-http-요청하기"><span>💡 실생활 예제: HTTP 요청하기</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// ❌ 직접 구현 (2~3달 걸림)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyHttpClient</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// TCP 소켓 연결</span></span>
<span class="line">    <span class="token comment">// HTTP 프로토콜 구현</span></span>
<span class="line">    <span class="token comment">// SSL/TLS 보안 처리</span></span>
<span class="line">    <span class="token comment">// 헤더 파싱</span></span>
<span class="line">    <span class="token comment">// ... 수천 줄의 코드</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ✅ 의존성 활용 (5분)</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpClient</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpRequest</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">HttpClient</span> client <span class="token operator">=</span> <span class="token class-name">HttpClient</span><span class="token punctuation">.</span><span class="token function">newHttpClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 끝! 바로 사용 가능</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="📦-모듈-패키지-라이브러리-프레임워크" tabindex="-1"><a class="header-anchor" href="#📦-모듈-패키지-라이브러리-프레임워크"><span>📦 모듈, 패키지, 라이브러리, 프레임워크</span></a></h2>
<h3 id="🧩-레고-블록으로-이해하기" tabindex="-1"><a class="header-anchor" href="#🧩-레고-블록으로-이해하기"><span>🧩 레고 블록으로 이해하기</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">[레고 조각 = 모듈]</span> <span class="token arrow operator">--></span> B<span class="token text string">[레고 세트 = 패키지]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> C<span class="token text string">[테마별 컬렉션 = 라이브러리]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> D<span class="token text string">[레고 놀이 규칙 = 프레임워크]</span></span>
<span class="line">    </span>
<span class="line">    A <span class="token arrow operator">--></span> A1<span class="token text string">[클래스, 메서드]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> B1<span class="token text string">[관련 기능들의 묶음]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> C1<span class="token text string">[특정 목적의 도구 모음]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> D1<span class="token text string">[개발 방식을 강제하는 틀]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🔍-각각의-차이점" tabindex="-1"><a class="header-anchor" href="#🔍-각각의-차이점"><span>🔍 각각의 차이점</span></a></h3>
<h4 id="_1️⃣-모듈-module" tabindex="-1"><a class="header-anchor" href="#_1️⃣-모듈-module"><span>1️⃣ <strong>모듈 (Module)</strong></span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// 하나의 기능을 담은 코드 뭉치</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2️⃣-패키지-package" tabindex="-1"><a class="header-anchor" href="#_2️⃣-패키지-package"><span>2️⃣ <strong>패키지 (Package)</strong></span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// 관련된 모듈들의 묶음 (폴더 구조)</span></span>
<span class="line">com<span class="token punctuation">.</span>mycompany<span class="token punctuation">.</span>utils</span>
<span class="line">├── <span class="token class-name">Calculator</span><span class="token punctuation">.</span>java</span>
<span class="line">├── <span class="token class-name">StringUtil</span><span class="token punctuation">.</span>java</span>
<span class="line">└── <span class="token class-name">DateUtil</span><span class="token punctuation">.</span>java</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3️⃣-라이브러리-library" tabindex="-1"><a class="header-anchor" href="#_3️⃣-라이브러리-library"><span>3️⃣ <strong>라이브러리 (Library)</strong></span></a></h4>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> LR</span>
<span class="line">    A<span class="token text string">[Jackson 라이브러리]</span> <span class="token arrow operator">--></span> B<span class="token text string">[JSON 변환]</span></span>
<span class="line">    C<span class="token text string">[Apache Commons]</span> <span class="token arrow operator">--></span> D<span class="token text string">[유틸리티 모음]</span></span>
<span class="line">    E<span class="token text string">[JUnit]</span> <span class="token arrow operator">--></span> F<span class="token text string">[테스트 도구]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>특징:</strong></p>
<ul>
<li><strong>내장 라이브러리</strong>: 자바에 기본 포함 (예: <code v-pre>String</code>, <code v-pre>ArrayList</code>)</li>
<li><strong>외장 라이브러리</strong>: 직접 다운로드해야 함 (예: Jackson, Spring)</li>
<li><strong>동시 사용 가능</strong>: 여러 JSON 라이브러리를 함께 사용 가능</li>
</ul>
<h4 id="_4️⃣-프레임워크-framework" tabindex="-1"><a class="header-anchor" href="#_4️⃣-프레임워크-framework"><span>4️⃣ <strong>프레임워크 (Framework)</strong></span></a></h4>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">[Spring Framework]</span> <span class="token arrow operator">--></span> B<span class="token text string">[웹 개발 규칙 강제]</span></span>
<span class="line">    C<span class="token text string">[React]</span> <span class="token arrow operator">--></span> D<span class="token text string">[UI 개발 방식 강제]</span></span>
<span class="line">    E<span class="token text string">[Django]</span> <span class="token arrow operator">--></span> F<span class="token text string">[Python 웹 개발 강제]</span></span>
<span class="line">    </span>
<span class="line">    G<span class="token text string">[특징]</span> <span class="token arrow operator">--></span> H<span class="token text string">[하나만 선택해야 함]</span></span>
<span class="line">    G <span class="token arrow operator">--></span> I<span class="token text string">[개발 방식을 정해줌]</span></span>
<span class="line">    G <span class="token arrow operator">--></span> J<span class="token text string">[생태계가 큼]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>라이브러리 vs 프레임워크</strong></p>
<ul>
<li><strong>라이브러리</strong>: &quot;내가 도구를 선택해서 사용&quot; 🛠️</li>
<li><strong>프레임워크</strong>: &quot;정해진 방식대로 개발해야 함&quot; 📋</li>
</ul>
<hr>
<h2 id="📋-maven과-의존성-관리" tabindex="-1"><a class="header-anchor" href="#📋-maven과-의존성-관리"><span>📋 Maven과 의존성 관리</span></a></h2>
<h3 id="🛒-쇼핑몰로-이해하는-maven" tabindex="-1"><a class="header-anchor" href="#🛒-쇼핑몰로-이해하는-maven"><span>🛒 쇼핑몰로 이해하는 Maven</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TB</span>
<span class="line">    A<span class="token text string">[개발자]</span> <span class="token arrow operator">--></span> B<span class="token text string">[Maven Central Repository]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> C<span class="token text string">[Jackson 라이브러리]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> D<span class="token text string">[Spring 프레임워크]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> E<span class="token text string">[JUnit 테스트 도구]</span></span>
<span class="line">    </span>
<span class="line">    F<span class="token text string">[pom.xml]</span> <span class="token arrow operator">--></span> G<span class="token text string">[의존성 목록 작성]</span></span>
<span class="line">    G <span class="token arrow operator">--></span> H<span class="token text string">[Maven이 자동 다운로드]</span></span>
<span class="line">    H <span class="token arrow operator">--></span> I<span class="token text string">[프로젝트에서 바로 사용]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="📝-pom-xml-파일-예제" tabindex="-1"><a class="header-anchor" href="#📝-pom-xml-파일-예제"><span>📝 pom.xml 파일 예제</span></a></h3>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code class="language-xml"><span class="line"><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">></span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>my-chatbot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token comment">&lt;!-- JSON 처리 라이브러리 --></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.fasterxml.jackson.core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>jackson-databind<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.15.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">&lt;!-- 환경변수 처리 --></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>io.github.cdimascio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>dotenv-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">&lt;!-- Google AI 라이브러리 --></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.google.ai<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>generativeai<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🔄-maven-동작-과정" tabindex="-1"><a class="header-anchor" href="#🔄-maven-동작-과정"><span>🔄 Maven 동작 과정</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">sequenceDiagram</span></span>
<span class="line">    <span class="token keyword">participant</span> D as 개발자</span>
<span class="line">    <span class="token keyword">participant</span> M as Maven</span>
<span class="line">    <span class="token keyword">participant</span> R as Maven Central</span>
<span class="line">    <span class="token keyword">participant</span> P as 프로젝트</span>
<span class="line">    </span>
<span class="line">    D<span class="token arrow operator">->></span>M<span class="token operator">:</span> mvn compile 실행</span>
<span class="line">    M<span class="token arrow operator">->></span>R<span class="token operator">:</span> 의존성 다운로드 요청</span>
<span class="line">    R<span class="token arrow operator">-->></span>M<span class="token operator">:</span> JAR 파일들 전송</span>
<span class="line">    M<span class="token arrow operator">->></span>P<span class="token operator">:</span> lib 폴더에 라이브러리 설치</span>
<span class="line">    M<span class="token arrow operator">-->></span>D<span class="token operator">:</span> 빌드 완료!</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="🚀-배포-deployment-이해하기" tabindex="-1"><a class="header-anchor" href="#🚀-배포-deployment-이해하기"><span>🚀 배포(Deployment) 이해하기</span></a></h2>
<h3 id="🍕-피자-배달로-이해하는-배포" tabindex="-1"><a class="header-anchor" href="#🍕-피자-배달로-이해하는-배포"><span>🍕 피자 배달로 이해하는 배포</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> LR</span>
<span class="line">    A<span class="token text string">[피자 만들기 = 코딩]</span> <span class="token arrow operator">--></span> B<span class="token text string">[포장하기 = 빌드]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> C<span class="token text string">[배달하기 = 배포]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> D<span class="token text string">[고객이 먹기 = 사용자 접속]</span></span>
<span class="line">    </span>
<span class="line">    A <span class="token arrow operator">--></span> A1<span class="token text string">[레시피 작성]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> B1<span class="token text string">[JAR/WAR 파일 생성]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> C1<span class="token text string">[서버에 업로드]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> D1<span class="token text string">[웹사이트 접속 가능]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🎯-배포가-어려운-이유" tabindex="-1"><a class="header-anchor" href="#🎯-배포가-어려운-이유"><span>🎯 배포가 어려운 이유</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line">mindmap</span>
<span class="line">  root<span class="token text string">((배포의 어려움))</span></span>
<span class="line">    너무 많은 방법들</span>
<span class="line">      FTP</span>
<span class="line">      Git</span>
<span class="line">      Docker</span>
<span class="line">      Kubernetes</span>
<span class="line">      PaaS <span class="token text string">(Vercel, Render)</span></span>
<span class="line">    복잡한 설정</span>
<span class="line">      네트워크 설정</span>
<span class="line">      보안 권한</span>
<span class="line">      데이터베이스 연결</span>
<span class="line">      환경변수 관리</span>
<span class="line">    CS 전공도 어려워함</span>
<span class="line">      학교에서 안 가르침</span>
<span class="line">      실무 경험 필요</span>
<span class="line">      계속 변화하는 기술</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="📊-전통적인-배포-vs-현대적-배포" tabindex="-1"><a class="header-anchor" href="#📊-전통적인-배포-vs-현대적-배포"><span>📊 전통적인 배포 vs 현대적 배포</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TB</span>
<span class="line">    <span class="token keyword">subgraph</span> <span class="token string">"전통적 배포 (어려움 😰)"</span></span>
<span class="line">        A1<span class="token text string">[Java 코드]</span> <span class="token arrow operator">--></span> A2<span class="token text string">[WAR/JAR 빌드]</span></span>
<span class="line">        A2 <span class="token arrow operator">--></span> A3<span class="token text string">[서버 직접 설정]</span></span>
<span class="line">        A3 <span class="token arrow operator">--></span> A4<span class="token text string">[Tomcat 설치]</span></span>
<span class="line">        A4 <span class="token arrow operator">--></span> A5<span class="token text string">[데이터베이스 설정]</span></span>
<span class="line">        A5 <span class="token arrow operator">--></span> A6<span class="token text string">[네트워크 설정]</span></span>
<span class="line">        A6 <span class="token arrow operator">--></span> A7<span class="token text string">[보안 설정]</span></span>
<span class="line">        A7 <span class="token arrow operator">--></span> A8<span class="token text string">[배포 완료]</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">subgraph</span> <span class="token string">"현대적 배포 (쉬움 😊)"</span></span>
<span class="line">        B1<span class="token text string">[Java 코드]</span> <span class="token arrow operator">--></span> B2<span class="token text string">[Dockerfile 작성]</span></span>
<span class="line">        B2 <span class="token arrow operator">--></span> B3<span class="token text string">[GitHub에 업로드]</span></span>
<span class="line">        B3 <span class="token arrow operator">--></span> B4<span class="token text string">[Render/Vercel에서 자동 배포]</span></span>
<span class="line">        B4 <span class="token arrow operator">--></span> B5<span class="token text string">[배포 완료!]</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="🐳-docker와-클라우드-배포" tabindex="-1"><a class="header-anchor" href="#🐳-docker와-클라우드-배포"><span>🐳 Docker와 클라우드 배포</span></a></h2>
<h3 id="📦-docker란-이사-상자-비유" tabindex="-1"><a class="header-anchor" href="#📦-docker란-이사-상자-비유"><span>📦 Docker란? - 이사 상자 비유</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TB</span>
<span class="line">    A<span class="token text string">[이사하기]</span> <span class="token arrow operator">--></span> B<span class="token text string">[물건 하나씩 옮기기 😰]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> C<span class="token text string">[이사 상자 사용하기 😊]</span></span>
<span class="line">    </span>
<span class="line">    B <span class="token arrow operator">--></span> B1<span class="token text string">[옷걸이, 책, 그릇...]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> B2<span class="token text string">[하나씩 포장]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> B3<span class="token text string">[하나씩 운반]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> B4<span class="token text string">[새 집에서 하나씩 정리]</span></span>
<span class="line">    </span>
<span class="line">    C <span class="token arrow operator">--></span> C1<span class="token text string">[모든 물건을 상자에 담기]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> C2<span class="token text string">[상자째로 운반]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> C3<span class="token text string">[새 집에서 상자 열기]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Docker = 애플리케이션 이사 상자</strong></p>
<ul>
<li>코드, 라이브러리, 설정 등을 하나로 묶음</li>
<li>어떤 컴퓨터에서든 동일하게 실행</li>
<li>&quot;내 컴퓨터에서는 잘 되는데?&quot; 문제 해결</li>
</ul>
<h3 id="🌐-클라우드-서비스-소개" tabindex="-1"><a class="header-anchor" href="#🌐-클라우드-서비스-소개"><span>🌐 클라우드 서비스 소개</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">[클라우드 서비스]</span> <span class="token arrow operator">--></span> B<span class="token text string">[PaaS - 플랫폼형]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> C<span class="token text string">[IaaS - 인프라형]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> D<span class="token text string">[SaaS - 소프트웨어형]</span></span>
<span class="line">    </span>
<span class="line">    B <span class="token arrow operator">--></span> B1<span class="token text string">[Render, Vercel, Heroku]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> B2<span class="token text string">[코드만 올리면 끝]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> B3<span class="token text string">[초보자 추천 👍]</span></span>
<span class="line">    </span>
<span class="line">    C <span class="token arrow operator">--></span> C1<span class="token text string">[AWS EC2, GCP, Azure]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> C2<span class="token text string">[서버 직접 관리]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> C3<span class="token text string">[고급 사용자용]</span></span>
<span class="line">    </span>
<span class="line">    D <span class="token arrow operator">--></span> D1<span class="token text string">[Gmail, Notion, Slack]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> D2<span class="token text string">[완성된 서비스]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> D3<span class="token text string">[개발자용 아님]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🚀-간단한-배포-과정-render-사용" tabindex="-1"><a class="header-anchor" href="#🚀-간단한-배포-과정-render-사용"><span>🚀 간단한 배포 과정 (Render 사용)</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">sequenceDiagram</span></span>
<span class="line">    <span class="token keyword">participant</span> D as 개발자</span>
<span class="line">    <span class="token keyword">participant</span> G as GitHub</span>
<span class="line">    <span class="token keyword">participant</span> R as Render</span>
<span class="line">    <span class="token keyword">participant</span> U as 사용자</span>
<span class="line">    </span>
<span class="line">    D<span class="token arrow operator">->></span>D<span class="token operator">:</span> Java 프로젝트 완성</span>
<span class="line">    D<span class="token arrow operator">->></span>D<span class="token operator">:</span> Dockerfile 작성</span>
<span class="line">    D<span class="token arrow operator">->></span>G<span class="token operator">:</span> 코드 업로드</span>
<span class="line">    G<span class="token arrow operator">->></span>R<span class="token operator">:</span> 자동 연동</span>
<span class="line">    R<span class="token arrow operator">->></span>R<span class="token operator">:</span> 자동 빌드 &amp; 배포</span>
<span class="line">    R<span class="token arrow operator">-->></span>D<span class="token operator">:</span> 배포 완료 알림</span>
<span class="line">    U<span class="token arrow operator">->></span>R<span class="token operator">:</span> 웹사이트 접속</span>
<span class="line">    R<span class="token arrow operator">-->></span>U<span class="token operator">:</span> 애플리케이션 응답</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="📋-dockerfile-예제" tabindex="-1"><a class="header-anchor" href="#📋-dockerfile-예제"><span>📋 Dockerfile 예제</span></a></h3>
<div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker"><pre v-pre><code class="language-docker"><span class="line"><span class="token comment"># Java 환경 준비</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">FROM</span> openjdk:17-jdk-slim</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 작업 디렉토리 설정</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># JAR 파일 복사</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">COPY</span> target/my-app.jar app.jar</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 포트 설정</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">EXPOSE</span> 8080</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 애플리케이션 실행</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">"java"</span>, <span class="token string">"-jar"</span>, <span class="token string">"app.jar"</span>]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="🤖-실전-예제-챗봇-만들기" tabindex="-1"><a class="header-anchor" href="#🤖-실전-예제-챗봇-만들기"><span>🤖 실전 예제: 챗봇 만들기</span></a></h2>
<h3 id="📋-의존성-설정" tabindex="-1"><a class="header-anchor" href="#📋-의존성-설정"><span>📋 의존성 설정</span></a></h3>
<p><strong>pom.xml에서 필요한 라이브러리들</strong></p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code class="language-xml"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- Google AI 라이브러리 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.google.ai<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>generativeai<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">&lt;!-- 환경변수 관리 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>io.github.cdimascio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>dotenv-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">&lt;!-- JSON 처리 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.fasterxml.jackson.core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>jackson-databind<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.15.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🔐-환경변수-관리-env-파일" tabindex="-1"><a class="header-anchor" href="#🔐-환경변수-관리-env-파일"><span>🔐 환경변수 관리 (.env 파일)</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># .env 파일 (비밀 정보 저장)</span></span>
<span class="line"><span class="token assign-left variable">GEMINI_API_KEY</span><span class="token operator">=</span>your_api_key_here</span>
<span class="line"><span class="token assign-left variable">SYSTEM_INSTRUCTION</span><span class="token operator">=</span><span class="token number">200</span>자 이내로, 중학생도 이해할 수 있게, 꾸미는 문법 없이 평문으로.</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="💻-챗봇-코드-구조" tabindex="-1"><a class="header-anchor" href="#💻-챗봇-코드-구조"><span>💻 챗봇 코드 구조</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">[Application.java]</span> <span class="token arrow operator">--></span> B<span class="token text string">[환경변수 로드]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> C<span class="token text string">[GeminiClient 초기화]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> D<span class="token text string">[사용자 입력 대기]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> E<span class="token text string">[AI API 호출]</span></span>
<span class="line">    E <span class="token arrow operator">--></span> F<span class="token text string">[응답 출력]</span></span>
<span class="line">    F <span class="token arrow operator">--></span> D</span>
<span class="line">    </span>
<span class="line">    G<span class="token text string">[.env 파일]</span> <span class="token arrow operator">--></span> B</span>
<span class="line">    H<span class="token text string">[pom.xml]</span> <span class="token arrow operator">--></span> I<span class="token text string">[의존성 다운로드]</span></span>
<span class="line">    I <span class="token arrow operator">--></span> C</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🎯-핵심-코드-분석" tabindex="-1"><a class="header-anchor" href="#🎯-핵심-코드-분석"><span>🎯 핵심 코드 분석</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 1. 환경변수 로드 (비밀 정보 보호)</span></span>
<span class="line">        <span class="token class-name">Dotenv</span> dotenv <span class="token operator">=</span> <span class="token class-name">Dotenv</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">String</span> systemInstruction <span class="token operator">=</span> dotenv<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"SYSTEM_INSTRUCTION"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 2. AI 클라이언트 초기화</span></span>
<span class="line">        <span class="token class-name">GeminiClient</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GeminiClient</span><span class="token punctuation">(</span></span>
<span class="line">            <span class="token class-name">GeminiModel</span><span class="token punctuation">.</span>gemini_2_0_flash<span class="token punctuation">,</span></span>
<span class="line">            systemInstruction</span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 3. 사용자와 대화</span></span>
<span class="line">        <span class="token class-name">Scanner</span> sc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"질문 : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">String</span> input <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            </span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>input<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">"종료"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">            </span>
<span class="line">            <span class="token class-name">String</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">chat</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="🌟-앞으로-배울-기술들" tabindex="-1"><a class="header-anchor" href="#🌟-앞으로-배울-기술들"><span>🌟 앞으로 배울 기술들</span></a></h2>
<h3 id="🗺️-학습-로드맵" tabindex="-1"><a class="header-anchor" href="#🗺️-학습-로드맵"><span>🗺️ 학습 로드맵</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">[현재: 자바 기초]</span> <span class="token arrow operator">--></span> B<span class="token text string">[다음: Spring Boot]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> C<span class="token text string">[Docker 컨테이너화]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> D<span class="token text string">[AWS 클라우드]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> E<span class="token text string">[Kubernetes 오케스트레이션]</span></span>
<span class="line">    </span>
<span class="line">    B <span class="token arrow operator">--></span> B1<span class="token text string">[웹 애플리케이션 제작]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> C1<span class="token text string">[배포 자동화]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> D1<span class="token text string">[확장 가능한 인프라]</span></span>
<span class="line">    E <span class="token arrow operator">--></span> E1<span class="token text string">[대규모 서비스 운영]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="☁️-aws-핵심-서비스-소개" tabindex="-1"><a class="header-anchor" href="#☁️-aws-핵심-서비스-소개"><span>☁️ AWS 핵심 서비스 소개</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line">mindmap</span>
<span class="line">  root<span class="token text string">((AWS 서비스))</span></span>
<span class="line">    컴퓨팅</span>
<span class="line">      EC2 <span class="token text string">(가상 서버)</span></span>
<span class="line">      Lambda <span class="token text string">(서버리스)</span></span>
<span class="line">    스토리지</span>
<span class="line">      S3 <span class="token text string">(파일 저장소)</span></span>
<span class="line">      RDS <span class="token text string">(데이터베이스)</span></span>
<span class="line">    네트워킹</span>
<span class="line">      CloudFront <span class="token text string">(CDN)</span></span>
<span class="line">      Route 53 <span class="token text string">(DNS)</span></span>
<span class="line">    보안</span>
<span class="line">      IAM <span class="token text string">(권한 관리)</span></span>
<span class="line">      Certificate Manager</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🔧-도구별-사용-시기" tabindex="-1"><a class="header-anchor" href="#🔧-도구별-사용-시기"><span>🔧 도구별 사용 시기</span></a></h3>
<table>
<thead>
<tr>
<th>도구</th>
<th>언제 사용?</th>
<th>난이도</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Render/Vercel</strong></td>
<td>개인 프로젝트, 학습용</td>
<td>⭐</td>
</tr>
<tr>
<td><strong>Docker</strong></td>
<td>팀 프로젝트, 일관된 환경</td>
<td>⭐⭐</td>
</tr>
<tr>
<td><strong>AWS EC2</strong></td>
<td>본격적인 서비스 운영</td>
<td>⭐⭐⭐</td>
</tr>
<tr>
<td><strong>Kubernetes</strong></td>
<td>대규모 마이크로서비스</td>
<td>⭐⭐⭐⭐⭐</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="🎯-실습-과제-및-다음-단계" tabindex="-1"><a class="header-anchor" href="#🎯-실습-과제-및-다음-단계"><span>🎯 실습 과제 및 다음 단계</span></a></h2>
<h3 id="✅-이번-주-목표" tabindex="-1"><a class="header-anchor" href="#✅-이번-주-목표"><span>✅ 이번 주 목표</span></a></h3>
<ul>
<li>[x] 의존성 개념 이해하기</li>
<li>[x] Maven으로 라이브러리 추가하기</li>
<li>[x] 환경변수로 비밀정보 관리하기</li>
<li>[x] 간단한 챗봇 만들기</li>
<li>[ ] GitHub에 코드 업로드하기</li>
<li>[ ] Render로 첫 배포 경험하기</li>
</ul>
<h3 id="🚀-다음-주-학습-계획" tabindex="-1"><a class="header-anchor" href="#🚀-다음-주-학습-계획"><span>🚀 다음 주 학습 계획</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">gantt</span></span>
<span class="line">    title 다음 4주 학습 계획</span>
<span class="line">    dateFormat  YYYY-MM-DD</span>
<span class="line">    section Week 1</span>
<span class="line">    Spring Boot 기초    <span class="token operator">:</span>2025-01-08, 7d</span>
<span class="line">    section Week 2  </span>
<span class="line">    데이터베이스 연동    <span class="token operator">:</span>2025-01-15, 7d</span>
<span class="line">    section Week 3</span>
<span class="line">    Docker 컨테이너화   <span class="token operator">:</span>2025-01-22, 7d</span>
<span class="line">    section Week 4</span>
<span class="line">    AWS 배포 실습       <span class="token operator">:</span>2025-01-29, 7d</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="💡-실습-프로젝트-아이디어" tabindex="-1"><a class="header-anchor" href="#💡-실습-프로젝트-아이디어"><span>💡 실습 프로젝트 아이디어</span></a></h3>
<ol>
<li><strong>할일 관리 API</strong> - Spring Boot + 데이터베이스</li>
<li><strong>날씨 알림 봇</strong> - 외부 API 연동 + 스케줄링</li>
<li><strong>간단한 블로그</strong> - 웹 인터페이스 + 파일 업로드</li>
<li><strong>실시간 채팅</strong> - WebSocket + Redis</li>
</ol>
<hr>
<h2 id="📝-정리-및-핵심-포인트" tabindex="-1"><a class="header-anchor" href="#📝-정리-및-핵심-포인트"><span>📝 정리 및 핵심 포인트</span></a></h2>
<h3 id="🔑-핵심-개념-정리" tabindex="-1"><a class="header-anchor" href="#🔑-핵심-개념-정리"><span>🔑 핵심 개념 정리</span></a></h3>
<table>
<thead>
<tr>
<th>개념</th>
<th>한 줄 요약</th>
<th>실생활 비유</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>의존성</strong></td>
<td>남이 만든 코드를 가져다 쓰기</td>
<td>완제품 구매하기</td>
</tr>
<tr>
<td><strong>라이브러리</strong></td>
<td>특정 목적의 도구 모음</td>
<td>요리 도구 세트</td>
</tr>
<tr>
<td><strong>프레임워크</strong></td>
<td>개발 방식을 정해주는 틀</td>
<td>요리 레시피책</td>
</tr>
<tr>
<td><strong>배포</strong></td>
<td>내 코드를 남들이 쓸 수 있게 하기</td>
<td>가게 오픈하기</td>
</tr>
<tr>
<td><strong>Docker</strong></td>
<td>애플리케이션 포장 기술</td>
<td>이사 상자</td>
</tr>
</tbody>
</table>
<h3 id="🎯-실무에서-중요한-이유" tabindex="-1"><a class="header-anchor" href="#🎯-실무에서-중요한-이유"><span>🎯 실무에서 중요한 이유</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> LR</span>
<span class="line">    A<span class="token text string">[의존성 관리]</span> <span class="token arrow operator">--></span> B<span class="token text string">[개발 속도 향상]</span></span>
<span class="line">    C<span class="token text string">[적절한 배포]</span> <span class="token arrow operator">--></span> D<span class="token text string">[서비스 안정성]</span></span>
<span class="line">    E<span class="token text string">[클라우드 활용]</span> <span class="token arrow operator">--></span> F<span class="token text string">[확장성 확보]</span></span>
<span class="line">    </span>
<span class="line">    B <span class="token arrow operator">--></span> G<span class="token text string">[빠른 출시]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> H<span class="token text string">[사용자 만족]</span></span>
<span class="line">    F <span class="token arrow operator">--></span> I<span class="token text string">[비즈니스 성공]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🚨-주의사항-및-팁" tabindex="-1"><a class="header-anchor" href="#🚨-주의사항-및-팁"><span>🚨 주의사항 및 팁</span></a></h3>
<h4 id="⚠️-피해야-할-실수들" tabindex="-1"><a class="header-anchor" href="#⚠️-피해야-할-실수들"><span>⚠️ 피해야 할 실수들</span></a></h4>
<ul>
<li><strong>의존성 지옥</strong>: 너무 많은 라이브러리 사용</li>
<li><strong>버전 충돌</strong>: 라이브러리 간 호환성 문제</li>
<li><strong>비밀정보 노출</strong>: API 키를 코드에 직접 작성</li>
<li><strong>무료 서비스 의존</strong>: 중요한 서비스를 무료 플랜으로만 운영</li>
</ul>
<h4 id="💡-성공하는-개발자의-습관" tabindex="-1"><a class="header-anchor" href="#💡-성공하는-개발자의-습관"><span>💡 성공하는 개발자의 습관</span></a></h4>
<ul>
<li>📚 <strong>공식 문서 읽기</strong>: Stack Overflow보다 공식 문서 우선</li>
<li>🔍 <strong>점진적 학습</strong>: 한 번에 모든 기술을 배우려 하지 않기</li>
<li>🤝 <strong>커뮤니티 활용</strong>: GitHub, Reddit, Discord에서 질문하기</li>
<li>🔄 <strong>꾸준한 실습</strong>: 이론보다는 직접 만들어보기</li>
</ul>
<hr>
<h2 id="🎉-마무리" tabindex="-1"><a class="header-anchor" href="#🎉-마무리"><span>🎉 마무리</span></a></h2>
<p>축하합니다! 이제 여러분은 <strong>의존성 관리</strong>와 <strong>배포</strong>의 기본 개념을 이해했습니다! 🎊</p>
<h3 id="🌟-여러분이-이룬-성취" tabindex="-1"><a class="header-anchor" href="#🌟-여러분이-이룬-성취"><span>🌟 여러분이 이룬 성취</span></a></h3>
<ul>
<li>✅ 복잡한 HTTP 통신을 라이브러리로 간단하게 처리</li>
<li>✅ Maven으로 프로젝트 의존성 체계적 관리</li>
<li>✅ 환경변수로 보안 정보 안전하게 관리</li>
<li>✅ AI 챗봇이라는 실용적인 프로젝트 완성</li>
<li>✅ 배포의 전체적인 흐름과 미래 학습 방향 파악</li>
</ul>
<h3 id="🚀-다음-도전" tabindex="-1"><a class="header-anchor" href="#🚀-다음-도전"><span>🚀 다음 도전</span></a></h3>
<p>이제 여러분은 단순한 <strong>코딩 초보자</strong>에서 <strong>시스템을 이해하는 개발자</strong>로 한 단계 성장했습니다!</p>
<p>다음 단계에서는:</p>
<ul>
<li>🌐 <strong>Spring Boot</strong>로 웹 애플리케이션 만들기</li>
<li>🗄️ <strong>데이터베이스</strong> 연동하여 데이터 영속화</li>
<li>🐳 <strong>Docker</strong>로 어디서든 실행되는 애플리케이션 패키징</li>
<li>☁️ <strong>AWS</strong>로 실제 사용자들이 접근할 수 있는 서비스 운영</li>
</ul>
<p><strong>기억하세요</strong>: 모든 대단한 개발자도 여러분과 같은 과정을 거쳤습니다! 💪</p>
<p>계속 도전하고, 실패를 두려워하지 말고, 꾸준히 성장해 나가세요! 🌱➡️🌳</p>
</div></template>


