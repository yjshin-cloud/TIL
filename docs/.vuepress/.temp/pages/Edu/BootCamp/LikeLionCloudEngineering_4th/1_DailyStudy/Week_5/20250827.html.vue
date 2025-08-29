<template><div><h1 id="멋쟁이사자처럼-21일차-📚" tabindex="-1"><a class="header-anchor" href="#멋쟁이사자처럼-21일차-📚"><span>멋쟁이사자처럼 21일차 📚</span></a></h1>
<h2 id="spring-core-jsp-완벽-정리" tabindex="-1"><a class="header-anchor" href="#spring-core-jsp-완벽-정리"><span>Spring Core &amp; JSP 완벽 정리</span></a></h2>
<blockquote>
<p>2025년 8월 27일 학습 내용 - DI/IoC와 MVC 패턴의 이해</p>
</blockquote>
<hr>
<h2 id="📋-목차" tabindex="-1"><a class="header-anchor" href="#📋-목차"><span>📋 목차</span></a></h2>
<ol>
<li><a href="#1-%EC%98%A4%EB%8A%98-%EB%B0%B0%EC%9A%B4-%ED%95%B5%EC%8B%AC-%EB%82%B4%EC%9A%A9">오늘 배운 핵심 내용</a></li>
<li><a href="#2-spring-core-%EA%B8%B0%EC%B4%88-%EA%B0%9C%EB%85%90">Spring Core 기초 개념</a></li>
<li><a href="#3-diioc-%EC%8B%A4%EC%8A%B5-%EC%BD%94%EB%93%9C-%EB%B6%84%EC%84%9D">DI/IoC 실습 코드 분석</a></li>
<li><a href="#4-spring-mvc%EC%99%80-jsp">Spring MVC와 JSP</a></li>
<li><a href="#5-%ED%98%84%EC%97%85-%EC%A0%81%EC%9A%A9-%EC%82%AC%EB%A1%80">현업 적용 사례</a></li>
<li><a href="#6-%ED%95%99%EC%8A%B5-%EC%A0%95%EB%A6%AC-%EB%B0%8F-%EB%8B%A4%EC%9D%8C-%EB%8B%A8%EA%B3%84">학습 정리 및 다음 단계</a></li>
</ol>
<hr>
<h2 id="_1-오늘-배운-핵심-내용" tabindex="-1"><a class="header-anchor" href="#_1-오늘-배운-핵심-내용"><span>1. 오늘 배운 핵심 내용</span></a></h2>
<h3 id="🎯-학습-목표-달성도" tabindex="-1"><a class="header-anchor" href="#🎯-학습-목표-달성도"><span>🎯 학습 목표 달성도</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">pie</span> title 오늘 학습한 내용 비중</span>
<span class="line">    <span class="token string">"Spring Core (DI/IoC)"</span> <span class="token operator">:</span> 40</span>
<span class="line">    <span class="token string">"JSP 기본 문법"</span> <span class="token operator">:</span> 25</span>
<span class="line">    <span class="token string">"Spring MVC 패턴"</span> <span class="token operator">:</span> 25</span>
<span class="line">    <span class="token string">"현업 트렌드"</span> <span class="token operator">:</span> 10</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="✨-핵심-키워드" tabindex="-1"><a class="header-anchor" href="#✨-핵심-키워드"><span>✨ 핵심 키워드</span></a></h3>
<ul>
<li><strong>IoC (Inversion of Control)</strong> - 제어의 역전</li>
<li><strong>DI (Dependency Injection)</strong> - 의존성 주입</li>
<li><strong>MVC 패턴</strong> - Model-View-Controller</li>
<li><strong>Spring Container</strong> - 빈(Bean) 관리</li>
<li><strong>JSP</strong> - JavaServer Pages</li>
</ul>
<hr>
<h2 id="_2-spring-core-기초-개념" tabindex="-1"><a class="header-anchor" href="#_2-spring-core-기초-개념"><span>2. Spring Core 기초 개념</span></a></h2>
<h3 id="_2-1-spring-framework란-🌱" tabindex="-1"><a class="header-anchor" href="#_2-1-spring-framework란-🌱"><span>2.1 Spring Framework란? 🌱</span></a></h3>
<p>Spring은 <strong>Java 기반 엔터프라이즈 애플리케이션 개발 프레임워크</strong>입니다.
복잡한 기업용 애플리케이션을 쉽게 개발할 수 있도록 도와주는 도구입니다.</p>
<h3 id="_2-2-ioc-제어의-역전-이해하기" tabindex="-1"><a class="header-anchor" href="#_2-2-ioc-제어의-역전-이해하기"><span>2.2 IoC (제어의 역전) 이해하기</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> LR</span>
<span class="line">    <span class="token keyword">subgraph</span> <span class="token string">"기존 방식"</span></span>
<span class="line">        A1<span class="token text string">[개발자]</span> <span class="token arrow operator">--></span><span class="token label property">|직접 생성|</span> B1<span class="token text string">[객체]</span></span>
<span class="line">        B1 <span class="token arrow operator">--></span><span class="token label property">|직접 관리|</span> C1<span class="token text string">[의존성]</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">subgraph</span> <span class="token string">"IoC 방식"</span></span>
<span class="line">        A2<span class="token text string">[Spring Container]</span> <span class="token arrow operator">--></span><span class="token label property">|자동 생성|</span> B2<span class="token text string">[객체]</span></span>
<span class="line">        B2 <span class="token arrow operator">--></span><span class="token label property">|자동 관리|</span> C2<span class="token text string">[의존성]</span></span>
<span class="line">        D2<span class="token text string">[개발자]</span> <span class="token arrow operator">--></span><span class="token label property">|사용만|</span> B2</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">style</span> A1 <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#ffcdd2</span></span>
<span class="line">    <span class="token keyword">style</span> A2 <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#c8e6c9</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="🔄-제어의-역전이란" tabindex="-1"><a class="header-anchor" href="#🔄-제어의-역전이란"><span>🔄 제어의 역전이란?</span></a></h4>
<ul>
<li><strong>기존 방식</strong>: 개발자가 직접 객체를 생성하고 관리</li>
<li><strong>IoC 방식</strong>: Spring 컨테이너가 객체 생성과 관리를 담당</li>
<li><strong>장점</strong>: 객체 간의 결합도 ⬇️, 유연성 ⬆️, 테스트 용이성 ⬆️</li>
</ul>
<h3 id="_2-3-di-의존성-주입-상세-분석" tabindex="-1"><a class="header-anchor" href="#_2-3-di-의존성-주입-상세-분석"><span>2.3 DI (의존성 주입) 상세 분석</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">[OrderService]</span> <span class="token arrow operator">--></span><span class="token label property">|의존|</span> B<span class="token text string">[MemoryRepo]</span></span>
<span class="line">    C<span class="token text string">[Spring Container]</span> <span class="token arrow operator">--></span><span class="token label property">|주입|</span> A</span>
<span class="line">    C <span class="token arrow operator">--></span><span class="token label property">|관리|</span> B</span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">style</span> A <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e3f2fd</span></span>
<span class="line">    <span class="token keyword">style</span> B <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f3e5f5</span></span>
<span class="line">    <span class="token keyword">style</span> C <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#c8e6c9</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="💉-의존성-주입-방식-비교" tabindex="-1"><a class="header-anchor" href="#💉-의존성-주입-방식-비교"><span>💉 의존성 주입 방식 비교</span></a></h4>
<table>
<thead>
<tr>
<th>방식</th>
<th>코드 예시</th>
<th>현업 사용도</th>
<th>장단점</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>생성자 주입</strong> ⭐⭐⭐</td>
<td><code v-pre>public Service(Repository repo)</code></td>
<td>90%</td>
<td>불변성 보장, 필수 의존성</td>
</tr>
<tr>
<td><strong>세터 주입</strong> ⭐</td>
<td><code v-pre>@Autowired setRepo()</code></td>
<td>8%</td>
<td>선택적 의존성</td>
</tr>
<tr>
<td><strong>필드 주입</strong> ❌</td>
<td><code v-pre>@Autowired private repo</code></td>
<td>2%</td>
<td>테스트 어려움</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="_3-di-ioc-실습-코드-분석" tabindex="-1"><a class="header-anchor" href="#_3-di-ioc-실습-코드-분석"><span>3. DI/IoC 실습 코드 분석</span></a></h2>
<h3 id="_3-1-spring-container-동작-흐름" tabindex="-1"><a class="header-anchor" href="#_3-1-spring-container-동작-흐름"><span>3.1 Spring Container 동작 흐름</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">sequenceDiagram</span></span>
<span class="line">    <span class="token keyword">participant</span> App as SpringCore.main<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">participant</span> Container as Spring Container</span>
<span class="line">    <span class="token keyword">participant</span> Config as AppConfig</span>
<span class="line">    <span class="token keyword">participant</span> Service as OrderService</span>
<span class="line">    <span class="token keyword">participant</span> Repo as MemoryRepo</span>
<span class="line">    </span>
<span class="line">    App<span class="token arrow operator">->></span>Container<span class="token operator">:</span> 1. 컨테이너 생성</span>
<span class="line">    Container<span class="token arrow operator">->></span>Config<span class="token operator">:</span> 2. 설정 클래스 읽기</span>
<span class="line">    Config<span class="token arrow operator">->></span>Container<span class="token operator">:</span> 3. @ComponentScan 실행</span>
<span class="line">    Container<span class="token arrow operator">->></span>Repo<span class="token operator">:</span> 4. MemoryRepo 빈 생성</span>
<span class="line">    Container<span class="token arrow operator">->></span>Service<span class="token operator">:</span> 5. OrderService 빈 생성</span>
<span class="line">    Container<span class="token arrow operator">->></span>Service<span class="token operator">:</span> 6. MemoryRepo 주입</span>
<span class="line">    App<span class="token arrow operator">->></span>Container<span class="token operator">:</span> 7. OrderService 조회</span>
<span class="line">    Container<span class="token arrow operator">->></span>App<span class="token operator">:</span> 8. 주입된 빈 반환</span>
<span class="line">    App<span class="token arrow operator">->></span>Service<span class="token operator">:</span> 9. 비즈니스 로직 실행</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-핵심-코드-구조" tabindex="-1"><a class="header-anchor" href="#_3-2-핵심-코드-구조"><span>3.2 핵심 코드 구조</span></a></h3>
<h4 id="📝-메인-클래스-springcore-java" tabindex="-1"><a class="header-anchor" href="#📝-메인-클래스-springcore-java"><span>📝 메인 클래스 (SpringCore.java)</span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringCore</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 🔥 IoC 실현: 개발자가 직접 객체 생성하지 않음</span></span>
<span class="line">        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">AnnotationConfigApplicationContext</span> context <span class="token operator">=</span> </span>
<span class="line">                <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">AppConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            </span>
<span class="line">            <span class="token comment">// 🔥 DI 실현: 이미 의존성이 주입된 상태로 받아옴</span></span>
<span class="line">            <span class="token class-name">OrderService</span> orderService <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">OrderService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            orderService<span class="token punctuation">.</span><span class="token function">processOrder</span><span class="token punctuation">(</span><span class="token string">"Spring 학습 예제"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="⚙️-설정-클래스-appconfig-java" tabindex="-1"><a class="header-anchor" href="#⚙️-설정-클래스-appconfig-java"><span>⚙️ 설정 클래스 (AppConfig.java)</span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token annotation punctuation">@Configuration</span>  <span class="token comment">// 스프링 설정 클래스</span></span>
<span class="line"><span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token string">"com.example.demo"</span><span class="token punctuation">)</span>  <span class="token comment">// 빈 자동 스캔</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">AppConfig</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// @ComponentScan으로 자동 빈 등록</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="🏪-저장소-클래스-memoryrepo-java" tabindex="-1"><a class="header-anchor" href="#🏪-저장소-클래스-memoryrepo-java"><span>🏪 저장소 클래스 (MemoryRepo.java)</span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token annotation punctuation">@Component</span>  <span class="token comment">// 스프링이 관리하는 빈으로 등록</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">MemoryRepo</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token class-name">String</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"메모리에 저장: "</span> <span class="token operator">+</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="🎯-서비스-클래스-orderservice-java" tabindex="-1"><a class="header-anchor" href="#🎯-서비스-클래스-orderservice-java"><span>🎯 서비스 클래스 (OrderService.java)</span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token annotation punctuation">@Component</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">OrderService</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">MemoryRepo</span> memoryRepo<span class="token punctuation">;</span>  <span class="token comment">// final로 불변성 보장</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 🔥 생성자 주입 (권장 방식)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">OrderService</span><span class="token punctuation">(</span><span class="token class-name">MemoryRepo</span> memoryRepo<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>memoryRepo <span class="token operator">=</span> memoryRepo<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">processOrder</span><span class="token punctuation">(</span><span class="token class-name">String</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"주문 처리: "</span> <span class="token operator">+</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        memoryRepo<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 주입받은 의존성 사용</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_4-spring-mvc와-jsp" tabindex="-1"><a class="header-anchor" href="#_4-spring-mvc와-jsp"><span>4. Spring MVC와 JSP</span></a></h2>
<h3 id="_4-1-mvc-패턴의-이해" tabindex="-1"><a class="header-anchor" href="#_4-1-mvc-패턴의-이해"><span>4.1 MVC 패턴의 이해</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">[사용자 요청]</span> <span class="token arrow operator">--></span> B<span class="token text string">[Controller]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> C<span class="token text string">[Model&lt;br/>비즈니스 로직]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> D<span class="token text string">[View&lt;br/>JSP 렌더링]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> E<span class="token text string">[사용자 응답]</span></span>
<span class="line">    </span>
<span class="line">    F<span class="token text string">[URL Mapping]</span> <span class="token arrow operator">--></span> B</span>
<span class="line">    B <span class="token arrow operator">--></span> G<span class="token text string">[데이터 처리]</span></span>
<span class="line">    G <span class="token arrow operator">--></span> H<span class="token text string">[ViewResolver]</span></span>
<span class="line">    H <span class="token arrow operator">--></span> D</span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">style</span> B <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e3f2fd</span></span>
<span class="line">    <span class="token keyword">style</span> C <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e8f5e8</span></span>
<span class="line">    <span class="token keyword">style</span> D <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#fff3e0</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-spring-web-mvc-동작-원리" tabindex="-1"><a class="header-anchor" href="#_4-2-spring-web-mvc-동작-원리"><span>4.2 Spring Web MVC 동작 원리</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">sequenceDiagram</span></span>
<span class="line">    <span class="token keyword">participant</span> User as 사용자</span>
<span class="line">    <span class="token keyword">participant</span> DS as DispatcherServlet</span>
<span class="line">    <span class="token keyword">participant</span> Controller as UserController</span>
<span class="line">    <span class="token keyword">participant</span> Model as User DTO</span>
<span class="line">    <span class="token keyword">participant</span> View as JSP</span>
<span class="line">    </span>
<span class="line">    User<span class="token arrow operator">->></span>DS<span class="token operator">:</span> GET /register</span>
<span class="line">    DS<span class="token arrow operator">->></span>Controller<span class="token operator">:</span> @GetMapping 호출</span>
<span class="line">    Controller<span class="token arrow operator">->></span>DS<span class="token operator">:</span> <span class="token string">"user/registerForm"</span> 반환</span>
<span class="line">    DS<span class="token arrow operator">->></span>View<span class="token operator">:</span> registerForm.jsp 렌더링</span>
<span class="line">    View<span class="token arrow operator">->></span>User<span class="token operator">:</span> HTML 응답</span>
<span class="line">    </span>
<span class="line">    User<span class="token arrow operator">->></span>DS<span class="token operator">:</span> POST /register <span class="token text string">(폼 데이터)</span></span>
<span class="line">    DS<span class="token arrow operator">->></span>Controller<span class="token operator">:</span> @PostMapping 호출</span>
<span class="line">    Controller<span class="token arrow operator">->></span>Model<span class="token operator">:</span> @ModelAttribute 바인딩</span>
<span class="line">    Model<span class="token arrow operator">->></span>Controller<span class="token operator">:</span> User 객체 생성</span>
<span class="line">    Controller<span class="token arrow operator">->></span>DS<span class="token operator">:</span> <span class="token string">"user/registerResult"</span> 반환</span>
<span class="line">    DS<span class="token arrow operator">->></span>View<span class="token operator">:</span> registerResult.jsp 렌더링</span>
<span class="line">    View<span class="token arrow operator">->></span>User<span class="token operator">:</span> 결과 HTML 응답</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-실습-코드-구조" tabindex="-1"><a class="header-anchor" href="#_4-3-실습-코드-구조"><span>4.3 실습 코드 구조</span></a></h3>
<h4 id="🎮-컨트롤러-usercontroller-java" tabindex="-1"><a class="header-anchor" href="#🎮-컨트롤러-usercontroller-java"><span>🎮 컨트롤러 (UserController.java)</span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token annotation punctuation">@Controller</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// GET 요청: 폼 페이지 표시</span></span>
<span class="line">    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/register"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">registerForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">"user/registerForm"</span><span class="token punctuation">;</span>  <span class="token comment">// JSP 파일명</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// POST 요청: 폼 데이터 처리</span></span>
<span class="line">    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"/register"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">registerUser</span><span class="token punctuation">(</span><span class="token annotation punctuation">@ModelAttribute</span> <span class="token class-name">User</span> user<span class="token punctuation">,</span> <span class="token class-name">Model</span> model<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">"user"</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// JSP에 데이터 전달</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">"user/registerResult"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="📄-jsp-폼-registerform-jsp" tabindex="-1"><a class="header-anchor" href="#📄-jsp-폼-registerform-jsp"><span>📄 JSP 폼 (registerForm.jsp)</span></a></h4>
<div class="language-jsp line-numbers-mode" data-highlighter="prismjs" data-ext="jsp"><pre v-pre><code class="language-jsp"><span class="line">&lt;form action=&quot;/register&quot; method=&quot;post&quot;&gt;</span>
<span class="line">    &lt;input type=&quot;text&quot; name=&quot;userId&quot; required&gt;     &lt;!-- User.userId와 매핑 --&gt;</span>
<span class="line">    &lt;input type=&quot;password&quot; name=&quot;password&quot; required&gt; &lt;!-- User.password와 매핑 --&gt;</span>
<span class="line">    &lt;input type=&quot;text&quot; name=&quot;userName&quot; required&gt;   &lt;!-- User.userName와 매핑 --&gt;</span>
<span class="line">    &lt;input type=&quot;submit&quot; value=&quot;가입하기&quot;&gt;</span>
<span class="line">&lt;/form&gt;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="📄-jsp-결과-registerresult-jsp" tabindex="-1"><a class="header-anchor" href="#📄-jsp-결과-registerresult-jsp"><span>📄 JSP 결과 (registerResult.jsp)</span></a></h4>
<div class="language-jsp line-numbers-mode" data-highlighter="prismjs" data-ext="jsp"><pre v-pre><code class="language-jsp"><span class="line">&lt;p&gt;아이디: ${user.userId}&lt;/p&gt;      &lt;!-- EL 표현식 사용 --&gt;</span>
<span class="line">&lt;p&gt;이름: ${user.userName}&lt;/p&gt;     &lt;!-- Model에서 전달받은 데이터 --&gt;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_5-현업-적용-사례" tabindex="-1"><a class="header-anchor" href="#_5-현업-적용-사례"><span>5. 현업 적용 사례</span></a></h2>
<h3 id="_5-1-현업에서의-spring-기술-스택" tabindex="-1"><a class="header-anchor" href="#_5-1-현업에서의-spring-기술-스택"><span>5.1 현업에서의 Spring 기술 스택</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">pie</span> title 2024-2025 현업 Spring 기술 사용 비중</span>
<span class="line">    <span class="token string">"Spring Boot + React/Vue"</span> <span class="token operator">:</span> 45</span>
<span class="line">    <span class="token string">"Spring Boot + Thymeleaf"</span> <span class="token operator">:</span> 30</span>
<span class="line">    <span class="token string">"Spring Boot + JSP (레거시)"</span> <span class="token operator">:</span> 20</span>
<span class="line">    <span class="token string">"기타 프레임워크"</span> <span class="token operator">:</span> 5</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-기업-규모별-기술-선택" tabindex="-1"><a class="header-anchor" href="#_5-2-기업-규모별-기술-선택"><span>5.2 기업 규모별 기술 선택</span></a></h3>
<table>
<thead>
<tr>
<th>기업 규모</th>
<th>주요 기술 스택</th>
<th>선택 이유</th>
<th>개발자 요구사항</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>대기업</strong></td>
<td>Spring Boot + React</td>
<td>복잡한 비즈니스 로직, 확장성</td>
<td>Full-Stack 개발 능력</td>
</tr>
<tr>
<td><strong>중견기업</strong></td>
<td>Spring Boot + Thymeleaf</td>
<td>빠른 개발, 유지보수성</td>
<td>Spring MVC 숙련도</td>
</tr>
<tr>
<td><strong>스타트업</strong></td>
<td>Spring Boot + Vue.js</td>
<td>모던 UX, 빠른 프로토타입</td>
<td>최신 기술 적응력</td>
</tr>
<tr>
<td><strong>공공기관</strong></td>
<td>Spring + JSP</td>
<td>기존 시스템 호환성</td>
<td>레거시 시스템 경험</td>
</tr>
</tbody>
</table>
<h3 id="_5-3-현업에서-선호하는-개발-패턴" tabindex="-1"><a class="header-anchor" href="#_5-3-현업에서-선호하는-개발-패턴"><span>5.3 현업에서 선호하는 개발 패턴</span></a></h3>
<h4 id="🏗️-계층형-아키텍처-가장-일반적" tabindex="-1"><a class="header-anchor" href="#🏗️-계층형-아키텍처-가장-일반적"><span>🏗️ 계층형 아키텍처 (가장 일반적)</span></a></h4>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">["Controller Layer\n웹 요청 처리"]</span> <span class="token arrow operator">--></span> B<span class="token text string">["Service Layer\n비즈니스 로직"]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> C<span class="token text string">["Repository Layer\n데이터 접근"]</span></span>
<span class="line">    </span>
<span class="line">    A1<span class="token text string">["@Controller\n@RestController"]</span> <span class="token arrow operator">--></span> A</span>
<span class="line">    B1<span class="token text string">["@Service\n@Transactional"]</span> <span class="token arrow operator">--></span> B</span>
<span class="line">    C1<span class="token text string">["@Repository\nJPA/MyBatis"]</span> <span class="token arrow operator">--></span> C</span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">style</span> A <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e3f2fd</span></span>
<span class="line">    <span class="token keyword">style</span> B <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e8f5e8</span></span>
<span class="line">    <span class="token keyword">style</span> C <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#fff3e0</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="💼-실제-현업-코드-스타일" tabindex="-1"><a class="header-anchor" href="#💼-실제-현업-코드-스타일"><span>💼 실제 현업 코드 스타일</span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// ✅ 현업에서 선호하는 방식</span></span>
<span class="line"><span class="token annotation punctuation">@RestController</span></span>
<span class="line"><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/api/users"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 생성자 주입 (권장)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">UserController</span><span class="token punctuation">(</span><span class="token class-name">UserService</span> userService<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>userService <span class="token operator">=</span> userService<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/{id}"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">ResponseEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserDto</span><span class="token punctuation">></span></span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">UserDto</span> user <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token class-name">ResponseEntity</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token annotation punctuation">@Service</span></span>
<span class="line"><span class="token annotation punctuation">@Transactional</span>  <span class="token comment">// 트랜잭션 관리 필수</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">UserRepository</span> userRepository<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">UserService</span><span class="token punctuation">(</span><span class="token class-name">UserRepository</span> userRepository<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>userRepository <span class="token operator">=</span> userRepository<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">UserDto</span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">User</span> user <span class="token operator">=</span> userRepository<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">orElseThrow</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token keyword">new</span> <span class="token class-name">UserNotFoundException</span><span class="token punctuation">(</span><span class="token string">"User not found"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token class-name">UserDto</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-현업-개발자가-되기-위한-핵심-스킬" tabindex="-1"><a class="header-anchor" href="#_5-4-현업-개발자가-되기-위한-핵심-스킬"><span>5.4 현업 개발자가 되기 위한 핵심 스킬</span></a></h3>
<h4 id="🎯-필수-역량-우선순위별" tabindex="-1"><a class="header-anchor" href="#🎯-필수-역량-우선순위별"><span>🎯 필수 역량 (우선순위별)</span></a></h4>
<ol>
<li><strong>Spring Boot</strong> 기반 개발 ⭐⭐⭐⭐⭐</li>
<li><strong>RESTful API</strong> 설계 및 개발 ⭐⭐⭐⭐⭐</li>
<li><strong>JPA/Hibernate</strong> 데이터베이스 처리 ⭐⭐⭐⭐</li>
<li><strong>Spring Security</strong> 인증/권한 처리 ⭐⭐⭐⭐</li>
<li><strong>프론트엔드 기술</strong> (React/Vue) ⭐⭐⭐</li>
</ol>
<h4 id="📊-현업에서-자주-사용하는-어노테이션" tabindex="-1"><a class="header-anchor" href="#📊-현업에서-자주-사용하는-어노테이션"><span>📊 현업에서 자주 사용하는 어노테이션</span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// 계층별 어노테이션 (사용 빈도순)</span></span>
<span class="line"><span class="token annotation punctuation">@Service</span>        <span class="token comment">// ⭐⭐⭐⭐⭐ 가장 많이 사용</span></span>
<span class="line"><span class="token annotation punctuation">@RestController</span> <span class="token comment">// ⭐⭐⭐⭐⭐ API 개발 필수</span></span>
<span class="line"><span class="token annotation punctuation">@Repository</span>     <span class="token comment">// ⭐⭐⭐⭐ 데이터 접근</span></span>
<span class="line"><span class="token annotation punctuation">@Controller</span>     <span class="token comment">// ⭐⭐ 전통적인 웹 개발</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 웹 관련 (API 개발 필수)</span></span>
<span class="line"><span class="token annotation punctuation">@GetMapping</span>     <span class="token comment">// ⭐⭐⭐⭐⭐</span></span>
<span class="line"><span class="token annotation punctuation">@PostMapping</span>    <span class="token comment">// ⭐⭐⭐⭐⭐</span></span>
<span class="line"><span class="token annotation punctuation">@RequestBody</span>    <span class="token comment">// ⭐⭐⭐⭐⭐ JSON 처리</span></span>
<span class="line"><span class="token annotation punctuation">@PathVariable</span>   <span class="token comment">// ⭐⭐⭐⭐ URL 매개변수</span></span>
<span class="line"><span class="token annotation punctuation">@RequestParam</span>   <span class="token comment">// ⭐⭐⭐ 쿼리 파라미터</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 설정 관련</span></span>
<span class="line"><span class="token annotation punctuation">@Configuration</span>  <span class="token comment">// ⭐⭐⭐ 설정 클래스</span></span>
<span class="line"><span class="token annotation punctuation">@ComponentScan</span>  <span class="token comment">// ⭐⭐⭐ 빈 스캔</span></span>
<span class="line"><span class="token annotation punctuation">@Transactional</span>  <span class="token comment">// ⭐⭐⭐⭐⭐ 트랜잭션 관리</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_6-학습-정리-및-다음-단계" tabindex="-1"><a class="header-anchor" href="#_6-학습-정리-및-다음-단계"><span>6. 학습 정리 및 다음 단계</span></a></h2>
<h3 id="_6-1-오늘-배운-내용-요약" tabindex="-1"><a class="header-anchor" href="#_6-1-오늘-배운-내용-요약"><span>6.1 오늘 배운 내용 요약</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line">mindmap</span>
<span class="line">  root<span class="token text string">((Spring Core 학습))</span></span>
<span class="line">    IoC/DI</span>
<span class="line">      제어의 역전</span>
<span class="line">      의존성 주입</span>
<span class="line">      생성자 주입 권장</span>
<span class="line">    Spring Container</span>
<span class="line">      빈 관리</span>
<span class="line">      자동 스캔</span>
<span class="line">      설정 클래스</span>
<span class="line">    MVC 패턴</span>
<span class="line">      Controller</span>
<span class="line">      Model</span>
<span class="line">      View <span class="token text string">(JSP)</span></span>
<span class="line">    현업 트렌드</span>
<span class="line">      Spring Boot</span>
<span class="line">      REST API</span>
<span class="line">      React/Vue 조합</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-학습-성과-체크리스트" tabindex="-1"><a class="header-anchor" href="#_6-2-학습-성과-체크리스트"><span>6.2 학습 성과 체크리스트</span></a></h3>
<ul>
<li>[ ] <strong>IoC와 DI의 차이점</strong> 설명할 수 있다</li>
<li>[ ] <strong>Spring Container</strong>의 동작 원리를 이해한다</li>
<li>[ ] <strong>@Component, @Service</strong> 등 애너테이션의 역할을 안다</li>
<li>[ ] <strong>생성자 주입</strong>을 왜 권장하는지 안다</li>
<li>[ ] <strong>MVC 패턴</strong>의 각 역할을 구분할 수 있다</li>
<li>[ ] <strong>JSP EL 표현식</strong>을 사용할 수 있다</li>
<li>[ ] <strong>현업에서 선호하는 기술</strong>을 파악했다</li>
</ul>
<h3 id="_6-3-다음-학습-로드맵" tabindex="-1"><a class="header-anchor" href="#_6-3-다음-학습-로드맵"><span>6.3 다음 학습 로드맵</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">[현재: Spring Core + JSP&lt;br/>✅ 완료]</span> <span class="token arrow operator">--></span> B<span class="token text string">[다음: Spring Boot 기초&lt;br/>📚 학습 예정]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> C<span class="token text string">[Spring Data JPA&lt;br/>데이터베이스 연동]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> D<span class="token text string">[Spring Security&lt;br/>인증/보안]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> E<span class="token text string">[REST API 개발&lt;br/>JSON 응답]</span></span>
<span class="line">    E <span class="token arrow operator">--></span> F<span class="token text string">[프론트엔드 연동&lt;br/>React/Vue]</span></span>
<span class="line">    F <span class="token arrow operator">--></span> G<span class="token text string">[현업 개발자&lt;br/>🎯 최종 목표]</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">style</span> A <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#c8e6c9</span></span>
<span class="line">    <span class="token keyword">style</span> B <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#ffeb3b</span></span>
<span class="line">    <span class="token keyword">style</span> G <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f44336</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-실무-준비를-위한-추천-학습-순서" tabindex="-1"><a class="header-anchor" href="#_6-4-실무-준비를-위한-추천-학습-순서"><span>6.4 실무 준비를 위한 추천 학습 순서</span></a></h3>
<h4 id="📚-단기-목표-1-2주" tabindex="-1"><a class="header-anchor" href="#📚-단기-목표-1-2주"><span>📚 단기 목표 (1-2주)</span></a></h4>
<ol>
<li><strong>Spring Boot</strong> 기본 설정 및 프로젝트 구성</li>
<li><strong>Thymeleaf</strong> 템플릿 엔진 (JSP 대체)</li>
<li><strong>Spring Data JPA</strong> 기초</li>
</ol>
<h4 id="🚀-중기-목표-1-2개월" tabindex="-1"><a class="header-anchor" href="#🚀-중기-목표-1-2개월"><span>🚀 중기 목표 (1-2개월)</span></a></h4>
<ol>
<li><strong>RESTful API</strong> 설계 및 개발</li>
<li><strong>Spring Security</strong> 인증 시스템</li>
<li><strong>단위 테스트</strong> 작성법</li>
</ol>
<h4 id="🌟-장기-목표-3-6개월" tabindex="-1"><a class="header-anchor" href="#🌟-장기-목표-3-6개월"><span>🌟 장기 목표 (3-6개월)</span></a></h4>
<ol>
<li><strong>프론트엔드 기술</strong> (React/Vue.js)</li>
<li><strong>마이크로서비스</strong> 아키텍처</li>
<li><strong>클라우드 배포</strong> (AWS/Docker)</li>
</ol>
<h3 id="_6-5-현업-면접-대비-핵심-질문" tabindex="-1"><a class="header-anchor" href="#_6-5-현업-면접-대비-핵심-질문"><span>6.5 현업 면접 대비 핵심 질문</span></a></h3>
<h4 id="💡-자주-나오는-면접-질문들" tabindex="-1"><a class="header-anchor" href="#💡-자주-나오는-면접-질문들"><span>💡 자주 나오는 면접 질문들</span></a></h4>
<ol>
<li>
<p><strong>IoC와 DI의 차이점은 무엇인가요?</strong></p>
<ul>
<li>IoC: 제어의 역전, 객체 생성/관리를 컨테이너가 담당</li>
<li>DI: 의존성 주입, 필요한 객체를 외부에서 넣어주는 방식</li>
</ul>
</li>
<li>
<p><strong>생성자 주입을 권장하는 이유는?</strong></p>
<ul>
<li>불변성 보장 (final 키워드 사용 가능)</li>
<li>필수 의존성 보장 (생성 시점에 주입)</li>
<li>테스트 용이성 (Mock 객체 주입 쉬움)</li>
</ul>
</li>
<li>
<p><strong>@Component와 @Service의 차이점은?</strong></p>
<ul>
<li>기능상 동일 (둘 다 @Component의 특수화)</li>
<li>@Service: 비즈니스 로직임을 명시, 가독성 향상</li>
<li>계층별 역할 구분으로 유지보수성 증대</li>
</ul>
</li>
</ol>
<hr>
<h2 id="🎉-마무리" tabindex="-1"><a class="header-anchor" href="#🎉-마무리"><span>🎉 마무리</span></a></h2>
<p>오늘은 <strong>Spring의 핵심인 IoC/DI</strong>와 <strong>MVC 패턴</strong>을 JSP와 함께 학습했습니다.
비록 JSP는 레거시 기술이지만, Spring MVC의 동작 원리를 이해하는 데 매우 유용한 학습 도구였습니다.</p>
<h3 id="💪-앞으로의-학습-방향" tabindex="-1"><a class="header-anchor" href="#💪-앞으로의-학습-방향"><span>💪 앞으로의 학습 방향</span></a></h3>
<ul>
<li>JSP는 기초 학습용으로만 활용</li>
<li><strong>Spring Boot + Thymeleaf</strong> 또는 <strong>React/Vue</strong>로 발전</li>
<li><strong>현업에서 요구하는 기술 스택</strong> 중심 학습</li>
</ul>
<h3 id="🌟-오늘의-한줄-정리" tabindex="-1"><a class="header-anchor" href="#🌟-오늘의-한줄-정리"><span>🌟 오늘의 한줄 정리</span></a></h3>
<blockquote>
<p><strong>&quot;개발자가 객체를 직접 관리하지 않고, Spring이 대신 관리해주는 것이 IoC/DI의 핵심이다!&quot;</strong></p>
</blockquote>
<hr>
<p><strong>다음 학습 목표</strong>: Spring Boot 프로젝트 생성 및 Thymeleaf 템플릿 엔진 학습 🚀</p>
<blockquote>
<p>💡 <strong>Tip</strong>: 오늘 배운 내용을 바탕으로 간단한 Spring Boot 프로젝트를 만들어보세요!
실습을 통해 이론을 체화하는 것이 가장 효과적인 학습 방법입니다.</p>
</blockquote>
</div></template>


