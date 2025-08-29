<template><div><h1 id="spring-web-mvc-완전정복-가이드" tabindex="-1"><a class="header-anchor" href="#spring-web-mvc-완전정복-가이드"><span>Spring Web MVC 완전정복 가이드</span></a></h1>
<h2 id="🎯-학습-목표" tabindex="-1"><a class="header-anchor" href="#🎯-학습-목표"><span>🎯 학습 목표</span></a></h2>
<ul>
<li><strong>MVC 아키텍처 패턴</strong>의 개념과 흐름을 완벽히 이해하기</li>
<li><strong>Spring Web MVC</strong>의 핵심 컴포넌트 역할을 파악하기</li>
<li><strong>JSP와 Thymeleaf</strong>를 활용한 동적 웹 페이지 개발하기</li>
<li><strong>실무에서 활용되는 패턴</strong>과 베스트 프랙티스 익히기</li>
</ul>
<hr>
<h2 id="📚-목차" tabindex="-1"><a class="header-anchor" href="#📚-목차"><span>📚 목차</span></a></h2>
<ol>
<li><a href="#1-mvc-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98-%ED%8C%A8%ED%84%B4-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0">MVC 아키텍처 패턴 이해하기</a></li>
<li><a href="#2-spring-web-mvc-%ED%95%B5%EC%8B%AC-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8">Spring Web MVC 핵심 컴포넌트</a></li>
<li><a href="#3-jsp-%EA%B8%B0%EB%B0%98-%EC%9B%B9-%EA%B0%9C%EB%B0%9C">JSP 기반 웹 개발</a></li>
<li><a href="#4-jsp-%EC%8B%AC%ED%99%94-%EA%B8%B0%EC%88%A0">JSP 심화 기술</a></li>
<li><a href="#5-thymeleaf-%ED%85%9C%ED%94%8C%EB%A6%BF-%EC%97%94%EC%A7%84">Thymeleaf 템플릿 엔진</a></li>
<li><a href="#6-%ED%98%84%EC%97%85-%EC%A0%81%EC%9A%A9-%EC%82%AC%EB%A1%80%EC%99%80-%EB%B2%A0%EC%8A%A4%ED%8A%B8-%ED%94%84%EB%9E%99%ED%8B%B0%EC%8A%A4">현업 적용 사례와 베스트 프랙티스</a></li>
</ol>
<hr>
<h2 id="_1-mvc-아키텍처-패턴-이해하기" tabindex="-1"><a class="header-anchor" href="#_1-mvc-아키텍처-패턴-이해하기"><span>1. MVC 아키텍처 패턴 이해하기</span></a></h2>
<h3 id="🎨-mvc란-무엇인가" tabindex="-1"><a class="header-anchor" href="#🎨-mvc란-무엇인가"><span>🎨 MVC란 무엇인가?</span></a></h3>
<p>MVC(Model-View-Controller)는 애플리케이션을 세 가지 역할로 구분하는 소프트웨어 디자인 패턴입니다. 각 컴포넌트의 <strong>역할을 명확히 분리</strong>하여 코드의 재사용성을 높이고 유지보수를 용이하게 만듭니다.</p>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    User<span class="token text string">[👤 사용자]</span> <span class="token arrow operator">--></span><span class="token label property">|요청|</span> Controller<span class="token text string">[🎮 Controller]</span></span>
<span class="line">    Controller <span class="token arrow operator">--></span><span class="token label property">|데이터 처리 요청|</span> Model<span class="token text string">[📊 Model]</span></span>
<span class="line">    Model <span class="token arrow operator">--></span><span class="token label property">|처리된 데이터|</span> Controller</span>
<span class="line">    Controller <span class="token arrow operator">--></span><span class="token label property">|데이터 전달|</span> View<span class="token text string">[🖼️ View]</span></span>
<span class="line">    View <span class="token arrow operator">--></span><span class="token label property">|HTML 응답|</span> User</span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">subgraph</span> <span class="token string">"MVC 구성 요소"</span></span>
<span class="line">        Controller</span>
<span class="line">        Model</span>
<span class="line">        View</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="📋-각-컴포넌트의-역할" tabindex="-1"><a class="header-anchor" href="#📋-각-컴포넌트의-역할"><span>📋 각 컴포넌트의 역할</span></a></h3>
<table>
<thead>
<tr>
<th>컴포넌트</th>
<th>역할</th>
<th>예시</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Model</strong></td>
<td>데이터와 비즈니스 로직 담당</td>
<td><code v-pre>UserService</code>, <code v-pre>UserDTO</code>, <code v-pre>UserRepository</code></td>
</tr>
<tr>
<td><strong>View</strong></td>
<td>사용자 인터페이스(UI) 담당</td>
<td>JSP 파일, Thymeleaf 템플릿</td>
</tr>
<tr>
<td><strong>Controller</strong></td>
<td>요청과 응답의 중개자 역할</td>
<td><code v-pre>@Controller</code> 클래스</td>
</tr>
</tbody>
</table>
<h3 id="🔄-mvc-처리-흐름" tabindex="-1"><a class="header-anchor" href="#🔄-mvc-처리-흐름"><span>🔄 MVC 처리 흐름</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">sequenceDiagram</span></span>
<span class="line">    <span class="token keyword">participant</span> U as 사용자</span>
<span class="line">    <span class="token keyword">participant</span> C as Controller</span>
<span class="line">    <span class="token keyword">participant</span> M as Model</span>
<span class="line">    <span class="token keyword">participant</span> V as View</span>
<span class="line">    </span>
<span class="line">    U<span class="token arrow operator">->></span>C<span class="token operator">:</span> 1. HTTP 요청</span>
<span class="line">    C<span class="token arrow operator">->></span>M<span class="token operator">:</span> 2. 비즈니스 로직 호출</span>
<span class="line">    M<span class="token arrow operator">-->></span>C<span class="token operator">:</span> 3. 처리 결과 반환</span>
<span class="line">    C<span class="token arrow operator">->></span>V<span class="token operator">:</span> 4. View에 데이터 전달</span>
<span class="line">    V<span class="token arrow operator">-->></span>U<span class="token operator">:</span> 5. HTML 응답</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="💡-controller의-주요-책임" tabindex="-1"><a class="header-anchor" href="#💡-controller의-주요-책임"><span>💡 Controller의 주요 책임</span></a></h3>
<ol>
<li><strong>사용자 요청 수신</strong>: HTTP 요청을 받아 분석</li>
<li><strong>비즈니스 로직 호출</strong>: 요청에 맞는 Model 메서드 실행</li>
<li><strong>응답 생성</strong>: Model 결과를 View에 전달하여 응답 생성</li>
</ol>
<hr>
<h2 id="_2-spring-web-mvc-핵심-컴포넌트" tabindex="-1"><a class="header-anchor" href="#_2-spring-web-mvc-핵심-컴포넌트"><span>2. Spring Web MVC 핵심 컴포넌트</span></a></h2>
<h3 id="🏗️-spring-web-mvc-아키텍처" tabindex="-1"><a class="header-anchor" href="#🏗️-spring-web-mvc-아키텍처"><span>🏗️ Spring Web MVC 아키텍처</span></a></h3>
<p>Spring Web MVC는 <strong>DispatcherServlet</strong>이 모든 요청을 받아 처리하는 <strong>Front Controller 패턴</strong>을 사용합니다.</p>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> LR</span>
<span class="line">    Client<span class="token text string">[클라이언트]</span> <span class="token arrow operator">--></span><span class="token label property">|HTTP 요청|</span> DS<span class="token text string">[DispatcherServlet]</span></span>
<span class="line">    DS <span class="token arrow operator">--></span><span class="token label property">|Handler 찾기|</span> HM<span class="token text string">[HandlerMapping]</span></span>
<span class="line">    HM <span class="token arrow operator">--></span><span class="token label property">|Controller 반환|</span> DS</span>
<span class="line">    DS <span class="token arrow operator">--></span><span class="token label property">|요청 처리|</span> Controller<span class="token text string">[Controller]</span></span>
<span class="line">    Controller <span class="token arrow operator">--></span><span class="token label property">|ModelAndView|</span> DS</span>
<span class="line">    DS <span class="token arrow operator">--></span><span class="token label property">|View 찾기|</span> VR<span class="token text string">[ViewResolver]</span></span>
<span class="line">    VR <span class="token arrow operator">--></span><span class="token label property">|View 반환|</span> DS</span>
<span class="line">    DS <span class="token arrow operator">--></span><span class="token label property">|렌더링|</span> View<span class="token text string">[View]</span></span>
<span class="line">    View <span class="token arrow operator">--></span><span class="token label property">|HTML 응답|</span> Client</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🔧-핵심-컴포넌트-상세-설명" tabindex="-1"><a class="header-anchor" href="#🔧-핵심-컴포넌트-상세-설명"><span>🔧 핵심 컴포넌트 상세 설명</span></a></h3>
<h4 id="_1-dispatcherservlet-전면-컨트롤러" tabindex="-1"><a class="header-anchor" href="#_1-dispatcherservlet-전면-컨트롤러"><span>1. <strong>DispatcherServlet</strong> (전면 컨트롤러)</span></a></h4>
<ul>
<li>모든 HTTP 요청의 <strong>진입점</strong></li>
<li>요청을 분석하여 적절한 Handler에 위임</li>
<li><strong>설정 예시</strong>:</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code class="language-xml"><span class="line"><span class="token comment">&lt;!-- web.xml --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">></span></span>dispatcher<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-class</span><span class="token punctuation">></span></span>org.springframework.web.servlet.DispatcherServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-class</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-handlermapping-핸들러-매핑" tabindex="-1"><a class="header-anchor" href="#_2-handlermapping-핸들러-매핑"><span>2. <strong>HandlerMapping</strong> (핸들러 매핑)</span></a></h4>
<ul>
<li>요청 URL을 처리할 <strong>Controller를 찾는 역할</strong></li>
<li><code v-pre>@RequestMapping</code> 어노테이션 기반으로 매핑</li>
</ul>
<h4 id="_3-controller-컨트롤러" tabindex="-1"><a class="header-anchor" href="#_3-controller-컨트롤러"><span>3. <strong>Controller</strong> (컨트롤러)</span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token annotation punctuation">@Controller</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span></span>
<span class="line">    </span>
<span class="line">    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/users/register"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">showRegisterForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">"user/registerForm"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"/users/register"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token annotation punctuation">@ModelAttribute</span> <span class="token class-name">User</span> user<span class="token punctuation">,</span> <span class="token class-name">Model</span> model<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 비즈니스 로직 처리</span></span>
<span class="line">        userService<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">"user"</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">"redirect:/users"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-viewresolver-뷰-리졸버" tabindex="-1"><a class="header-anchor" href="#_4-viewresolver-뷰-리졸버"><span>4. <strong>ViewResolver</strong> (뷰 리졸버)</span></a></h4>
<ul>
<li>Controller가 반환한 <strong>논리적 뷰 이름</strong>을 실제 뷰 파일로 변환</li>
<li>예시: <code v-pre>&quot;user/list&quot;</code> → <code v-pre>/WEB-INF/views/user/list.jsp</code></li>
</ul>
<h4 id="_5-view-뷰" tabindex="-1"><a class="header-anchor" href="#_5-view-뷰"><span>5. <strong>View</strong> (뷰)</span></a></h4>
<ul>
<li>Model 데이터를 사용하여 <strong>최종 HTML 응답</strong> 생성</li>
</ul>
<h3 id="📝-주요-어노테이션" tabindex="-1"><a class="header-anchor" href="#📝-주요-어노테이션"><span>📝 주요 어노테이션</span></a></h3>
<table>
<thead>
<tr>
<th>어노테이션</th>
<th>역할</th>
<th>사용 예시</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>@Controller</code></td>
<td>컨트롤러 클래스 지정</td>
<td><code v-pre>@Controller public class UserController</code></td>
</tr>
<tr>
<td><code v-pre>@GetMapping</code></td>
<td>GET 요청 매핑</td>
<td><code v-pre>@GetMapping(&quot;/users&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@PostMapping</code></td>
<td>POST 요청 매핑</td>
<td><code v-pre>@PostMapping(&quot;/users/add&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@RequestParam</code></td>
<td>요청 파라미터 바인딩</td>
<td><code v-pre>@RequestParam String name</code></td>
</tr>
<tr>
<td><code v-pre>@ModelAttribute</code></td>
<td>폼 데이터를 객체에 바인딩</td>
<td><code v-pre>@ModelAttribute User user</code></td>
</tr>
</tbody>
</table>
<hr>
<h2 id="_3-jsp-기반-웹-개발" tabindex="-1"><a class="header-anchor" href="#_3-jsp-기반-웹-개발"><span>3. JSP 기반 웹 개발</span></a></h2>
<h3 id="🌐-jsp란" tabindex="-1"><a class="header-anchor" href="#🌐-jsp란"><span>🌐 JSP란?</span></a></h3>
<p>JSP(JavaServer Pages)는 <strong>HTML 문서 안에 자바 코드를 삽입</strong>하여 동적인 웹 페이지를 생성하는 기술입니다.</p>
<h3 id="📖-jsp-기본-문법" tabindex="-1"><a class="header-anchor" href="#📖-jsp-기본-문법"><span>📖 JSP 기본 문법</span></a></h3>
<h4 id="_1-스크립틀릿" tabindex="-1"><a class="header-anchor" href="#_1-스크립틀릿"><span>1. <strong>스크립틀릿</strong> <code v-pre>&lt;% ... %&gt;</code></span></a></h4>
<div class="language-jsp line-numbers-mode" data-highlighter="prismjs" data-ext="jsp"><pre v-pre><code class="language-jsp"><span class="line">&lt;%</span>
<span class="line">    String name = &quot;홍길동&quot;;</span>
<span class="line">    System.out.println(&quot;이름: &quot; + name);</span>
<span class="line">%&gt;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-표현식" tabindex="-1"><a class="header-anchor" href="#_2-표현식"><span>2. <strong>표현식</strong> <code v-pre>&lt;%= ... %&gt;</code></span></a></h4>
<div class="language-jsp line-numbers-mode" data-highlighter="prismjs" data-ext="jsp"><pre v-pre><code class="language-jsp"><span class="line">&lt;p&gt;안녕하세요, &lt;%= name %&gt;님!&lt;/p&gt;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_3-선언문" tabindex="-1"><a class="header-anchor" href="#_3-선언문"><span>3. <strong>선언문</strong> <code v-pre>&lt;%! ... %&gt;</code></span></a></h4>
<div class="language-jsp line-numbers-mode" data-highlighter="prismjs" data-ext="jsp"><pre v-pre><code class="language-jsp"><span class="line">&lt;%!</span>
<span class="line">    private int count = 0;</span>
<span class="line">    public String getMessage() {</span>
<span class="line">        return &quot;Welcome&quot;;</span>
<span class="line">    }</span>
<span class="line">%&gt;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="💡-현대적-jsp-개발-권장사항" tabindex="-1"><a class="header-anchor" href="#💡-현대적-jsp-개발-권장사항"><span>💡 현대적 JSP 개발 권장사항</span></a></h3>
<blockquote>
<p><strong>⚠️ 주의</strong>: 스크립틀릿 사용을 지양하고, **EL(Expression Language)**과 <strong>JSTL(JSP Standard Tag Library)</strong> 사용을 권장합니다.</p>
</blockquote>
<h3 id="🏗️-실습-회원-가입-시스템" tabindex="-1"><a class="header-anchor" href="#🏗️-실습-회원-가입-시스템"><span>🏗️ 실습: 회원 가입 시스템</span></a></h3>
<h4 id="_1-user-dto-클래스" tabindex="-1"><a class="header-anchor" href="#_1-user-dto-클래스"><span>1. User DTO 클래스</span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> userId<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// getter/setter 생략</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-usercontroller" tabindex="-1"><a class="header-anchor" href="#_2-usercontroller"><span>2. UserController</span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token annotation punctuation">@Controller</span></span>
<span class="line"><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/users"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span></span>
<span class="line">    </span>
<span class="line">    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/register"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">showRegisterForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">"user/registerForm"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"/register"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token annotation punctuation">@ModelAttribute</span> <span class="token class-name">User</span> user<span class="token punctuation">,</span> <span class="token class-name">Model</span> model<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 사용자 등록 처리 로직</span></span>
<span class="line">        model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">"user"</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">"user/registerResult"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-회원-가입-폼-registerform-jsp" tabindex="-1"><a class="header-anchor" href="#_3-회원-가입-폼-registerform-jsp"><span>3. 회원 가입 폼 (<code v-pre>registerForm.jsp</code>)</span></a></h4>
<div class="language-jsp line-numbers-mode" data-highlighter="prismjs" data-ext="jsp"><pre v-pre><code class="language-jsp"><span class="line">&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; %&gt;</span>
<span class="line">&lt;html&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">    &lt;title&gt;회원 가입&lt;/title&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">    &lt;h2&gt;회원 가입&lt;/h2&gt;</span>
<span class="line">    &lt;form action=&quot;/users/register&quot; method=&quot;post&quot;&gt;</span>
<span class="line">        &lt;label&gt;아이디: &lt;input type=&quot;text&quot; name=&quot;userId&quot; required&gt;&lt;/label&gt;&lt;br&gt;</span>
<span class="line">        &lt;label&gt;비밀번호: &lt;input type=&quot;password&quot; name=&quot;password&quot; required&gt;&lt;/label&gt;&lt;br&gt;</span>
<span class="line">        &lt;label&gt;이름: &lt;input type=&quot;text&quot; name=&quot;name&quot; required&gt;&lt;/label&gt;&lt;br&gt;</span>
<span class="line">        &lt;button type=&quot;submit&quot;&gt;가입하기&lt;/button&gt;</span>
<span class="line">    &lt;/form&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-가입-결과-페이지-registerresult-jsp" tabindex="-1"><a class="header-anchor" href="#_4-가입-결과-페이지-registerresult-jsp"><span>4. 가입 결과 페이지 (<code v-pre>registerResult.jsp</code>)</span></a></h4>
<div class="language-jsp line-numbers-mode" data-highlighter="prismjs" data-ext="jsp"><pre v-pre><code class="language-jsp"><span class="line">&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; %&gt;</span>
<span class="line">&lt;html&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">    &lt;title&gt;가입 완료&lt;/title&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">    &lt;h2&gt;가입이 완료되었습니다!&lt;/h2&gt;</span>
<span class="line">    &lt;p&gt;아이디: ${user.userId}&lt;/p&gt;</span>
<span class="line">    &lt;p&gt;이름: ${user.name}&lt;/p&gt;</span>
<span class="line">    &lt;a href=&quot;/users&quot;&gt;회원 목록 보기&lt;/a&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_4-jsp-심화-기술" tabindex="-1"><a class="header-anchor" href="#_4-jsp-심화-기술"><span>4. JSP 심화 기술</span></a></h2>
<h3 id="🔄-include-기능-활용" tabindex="-1"><a class="header-anchor" href="#🔄-include-기능-활용"><span>🔄 Include 기능 활용</span></a></h3>
<p>여러 JSP 페이지에서 <strong>공통 부분을 재사용</strong>하기 위한 기능입니다.</p>
<h4 id="📋-include-방식-비교" tabindex="-1"><a class="header-anchor" href="#📋-include-방식-비교"><span>📋 Include 방식 비교</span></a></h4>
<table>
<thead>
<tr>
<th>방식</th>
<th>문법</th>
<th>특징</th>
<th>권장도</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>지시어 방식</strong></td>
<td><code v-pre>&lt;%@ include file=&quot;...&quot; %&gt;</code></td>
<td>컴파일 시점 포함 (정적)</td>
<td>👥 제한적</td>
</tr>
<tr>
<td><strong>액션 태그 방식</strong></td>
<td><code v-pre>&lt;jsp:include page=&quot;...&quot; /&gt;</code></td>
<td>실행 시점 포함 (동적)</td>
<td>⭐ <strong>권장</strong></td>
</tr>
</tbody>
</table>
<h4 id="🏗️-실습-공통-레이아웃-적용" tabindex="-1"><a class="header-anchor" href="#🏗️-실습-공통-레이아웃-적용"><span>🏗️ 실습: 공통 레이아웃 적용</span></a></h4>
<p><strong>헤더 파일</strong> (<code v-pre>header.jsp</code>)</p>
<div class="language-jsp line-numbers-mode" data-highlighter="prismjs" data-ext="jsp"><pre v-pre><code class="language-jsp"><span class="line">&lt;header&gt;</span>
<span class="line">    &lt;h1&gt;회원 관리 시스템&lt;/h1&gt;</span>
<span class="line">    &lt;nav&gt;</span>
<span class="line">        &lt;a href=&quot;/members&quot;&gt;회원 목록&lt;/a&gt; |</span>
<span class="line">        &lt;a href=&quot;/members/add&quot;&gt;회원 등록&lt;/a&gt;</span>
<span class="line">    &lt;/nav&gt;</span>
<span class="line">&lt;/header&gt;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>메인 페이지</strong>에서 헤더 포함</p>
<div class="language-jsp line-numbers-mode" data-highlighter="prismjs" data-ext="jsp"><pre v-pre><code class="language-jsp"><span class="line">&lt;html&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">    &lt;title&gt;회원 목록&lt;/title&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">    &lt;jsp:include page=&quot;../common/header.jsp&quot; /&gt;</span>
<span class="line">    </span>
<span class="line">    &lt;main&gt;</span>
<span class="line">        &lt;!-- 페이지별 고유 내용 --&gt;</span>
<span class="line">    &lt;/main&gt;</span>
<span class="line">    </span>
<span class="line">    &lt;jsp:include page=&quot;../common/footer.jsp&quot; /&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🔀-forward-vs-redirect" tabindex="-1"><a class="header-anchor" href="#🔀-forward-vs-redirect"><span>🔀 Forward vs Redirect</span></a></h3>
<p>웹 애플리케이션에서 <strong>페이지 이동 방식</strong>에 대한 이해는 매우 중요합니다.</p>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    <span class="token keyword">subgraph</span> <span class="token string">"Forward (서버 내부 이동)"</span></span>
<span class="line">        A1<span class="token text string">[클라이언트 요청]</span> <span class="token arrow operator">--></span> B1<span class="token text string">[서버]</span></span>
<span class="line">        B1 <span class="token arrow operator">--></span> C1<span class="token text string">[다른 JSP로 위임]</span></span>
<span class="line">        C1 <span class="token arrow operator">--></span> D1<span class="token text string">[응답 생성]</span></span>
<span class="line">        D1 <span class="token arrow operator">--></span> E1<span class="token text string">[클라이언트에 응답]</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">subgraph</span> <span class="token string">"Redirect (클라이언트 재요청)"</span></span>
<span class="line">        A2<span class="token text string">[클라이언트 요청]</span> <span class="token arrow operator">--></span> B2<span class="token text string">[서버]</span></span>
<span class="line">        B2 <span class="token arrow operator">--></span> C2<span class="token text string">[302 응답 + 새 URL]</span></span>
<span class="line">        C2 <span class="token arrow operator">--></span> D2<span class="token text string">[클라이언트]</span></span>
<span class="line">        D2 <span class="token arrow operator">--></span> E2<span class="token text string">[새 URL로 재요청]</span></span>
<span class="line">        E2 <span class="token arrow operator">--></span> F2<span class="token text string">[서버 응답]</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="📊-forward-vs-redirect-상세-비교" tabindex="-1"><a class="header-anchor" href="#📊-forward-vs-redirect-상세-비교"><span>📊 Forward vs Redirect 상세 비교</span></a></h4>
<table>
<thead>
<tr>
<th>구분</th>
<th>Forward</th>
<th>Redirect</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>실행 주체</strong></td>
<td>서버 (WAS)</td>
<td>클라이언트 (브라우저)</td>
</tr>
<tr>
<td><strong>URL 변경</strong></td>
<td>❌ 변경되지 않음</td>
<td>✅ 변경됨</td>
</tr>
<tr>
<td><strong>요청 객체</strong></td>
<td>동일한 요청 유지</td>
<td>새로운 요청 생성</td>
</tr>
<tr>
<td><strong>요청 횟수</strong></td>
<td>1회</td>
<td>2회</td>
</tr>
<tr>
<td><strong>속도</strong></td>
<td>⚡ 빠름</td>
<td>🐢 상대적으로 느림</td>
</tr>
<tr>
<td><strong>주요 용도</strong></td>
<td>단순 조회, 내부 흐름 제어</td>
<td>데이터 변경 후 화면 전환</td>
</tr>
<tr>
<td><strong>Spring 반환</strong></td>
<td><code v-pre>return &quot;forward:/some/url&quot;;</code></td>
<td><code v-pre>return &quot;redirect:/some/url&quot;;</code></td>
</tr>
</tbody>
</table>
<h4 id="🎯-언제-어떤-방식을-사용할까" tabindex="-1"><a class="header-anchor" href="#🎯-언제-어떤-방식을-사용할까"><span>🎯 언제 어떤 방식을 사용할까?</span></a></h4>
<ul>
<li><strong>Forward 사용 시기</strong>: 단순 조회, 오류 페이지 이동</li>
<li><strong>Redirect 사용 시기</strong>: 데이터 등록/수정/삭제 후 목록 페이지 이동 (중복 제출 방지)</li>
</ul>
<h3 id="🏷️-el-expression-language" tabindex="-1"><a class="header-anchor" href="#🏷️-el-expression-language"><span>🏷️ EL (Expression Language)</span></a></h3>
<p>JSP에서 데이터를 더 <strong>간결하게 표현</strong>하기 위한 언어입니다.</p>
<h4 id="📝-el-기본-문법" tabindex="-1"><a class="header-anchor" href="#📝-el-기본-문법"><span>📝 EL 기본 문법</span></a></h4>
<div class="language-jsp line-numbers-mode" data-highlighter="prismjs" data-ext="jsp"><pre v-pre><code class="language-jsp"><span class="line">&lt;!-- 기존 스크립틀릿 방식 --&gt;</span>
<span class="line">&lt;%= request.getAttribute(&quot;userName&quot;) %&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- EL 방식 (권장) --&gt;</span>
<span class="line">${userName}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="🔧-el-주요-기능" tabindex="-1"><a class="header-anchor" href="#🔧-el-주요-기능"><span>🔧 EL 주요 기능</span></a></h4>
<table>
<thead>
<tr>
<th>기능</th>
<th>문법</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>속성 접근</strong></td>
<td><code v-pre>${attributeName}</code></td>
<td>Model의 속성값 접근</td>
</tr>
<tr>
<td><strong>객체 프로퍼티</strong></td>
<td><code v-pre>${user.name}</code></td>
<td><code v-pre>user.getName()</code> 자동 호출</td>
</tr>
<tr>
<td><strong>연산</strong></td>
<td><code v-pre>${price * 1.1}</code></td>
<td>산술 연산 가능</td>
</tr>
<tr>
<td><strong>조건 판단</strong></td>
<td><code v-pre>${count &gt; 10}</code></td>
<td>비교 연산</td>
</tr>
<tr>
<td><strong>빈 값 확인</strong></td>
<td><code v-pre>${empty userList}</code></td>
<td>null/빈 컬렉션 체크</td>
</tr>
</tbody>
</table>
<h3 id="🏷️-jstl-jsp-standard-tag-library" tabindex="-1"><a class="header-anchor" href="#🏷️-jstl-jsp-standard-tag-library"><span>🏷️ JSTL (JSP Standard Tag Library)</span></a></h3>
<p>자주 사용되는 로직을 <strong>스크립틀릿 없이 태그 형태</strong>로 사용할 수 있게 만든 표준 라이브러리입니다.</p>
<h4 id="🔧-jstl-설정" tabindex="-1"><a class="header-anchor" href="#🔧-jstl-설정"><span>🔧 JSTL 설정</span></a></h4>
<div class="language-jsp line-numbers-mode" data-highlighter="prismjs" data-ext="jsp"><pre v-pre><code class="language-jsp"><span class="line">&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p><strong>⚠️ Spring Boot 3 주의사항</strong>: Jakarta EE 사용으로 URI가 변경되었습니다.</p>
</blockquote>
<h4 id="📋-jstl-주요-태그" tabindex="-1"><a class="header-anchor" href="#📋-jstl-주요-태그"><span>📋 JSTL 주요 태그</span></a></h4>
<p><strong>조건문</strong></p>
<div class="language-jsp line-numbers-mode" data-highlighter="prismjs" data-ext="jsp"><pre v-pre><code class="language-jsp"><span class="line">&lt;c:if test=&quot;${user.age &gt;= 18}&quot;&gt;</span>
<span class="line">    &lt;p&gt;성인 사용자입니다.&lt;/p&gt;</span>
<span class="line">&lt;/c:if&gt;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>반복문</strong></p>
<div class="language-jsp line-numbers-mode" data-highlighter="prismjs" data-ext="jsp"><pre v-pre><code class="language-jsp"><span class="line">&lt;c:forEach items=&quot;${userList}&quot; var=&quot;user&quot; varStatus=&quot;status&quot;&gt;</span>
<span class="line">    &lt;tr&gt;</span>
<span class="line">        &lt;td&gt;${status.index + 1}&lt;/td&gt;</span>
<span class="line">        &lt;td&gt;${user.name}&lt;/td&gt;</span>
<span class="line">        &lt;td&gt;${user.email}&lt;/td&gt;</span>
<span class="line">    &lt;/tr&gt;</span>
<span class="line">&lt;/c:forEach&gt;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="🏗️-실습-회원-목록-페이지" tabindex="-1"><a class="header-anchor" href="#🏗️-실습-회원-목록-페이지"><span>🏗️ 실습: 회원 목록 페이지</span></a></h4>
<div class="language-jsp line-numbers-mode" data-highlighter="prismjs" data-ext="jsp"><pre v-pre><code class="language-jsp"><span class="line">&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; %&gt;</span>
<span class="line">&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;</span>
<span class="line"></span>
<span class="line">&lt;html&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">    &lt;title&gt;회원 목록&lt;/title&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">    &lt;jsp:include page=&quot;../common/header.jsp&quot; /&gt;</span>
<span class="line">    </span>
<span class="line">    &lt;main&gt;</span>
<span class="line">        &lt;h2&gt;회원 목록&lt;/h2&gt;</span>
<span class="line">        </span>
<span class="line">        &lt;c:if test=&quot;${empty memberList}&quot;&gt;</span>
<span class="line">            &lt;p&gt;등록된 회원이 없습니다.&lt;/p&gt;</span>
<span class="line">        &lt;/c:if&gt;</span>
<span class="line">        </span>
<span class="line">        &lt;c:if test=&quot;${not empty memberList}&quot;&gt;</span>
<span class="line">            &lt;table border=&quot;1&quot;&gt;</span>
<span class="line">                &lt;thead&gt;</span>
<span class="line">                    &lt;tr&gt;</span>
<span class="line">                        &lt;th&gt;번호&lt;/th&gt;</span>
<span class="line">                        &lt;th&gt;아이디&lt;/th&gt;</span>
<span class="line">                        &lt;th&gt;이름&lt;/th&gt;</span>
<span class="line">                    &lt;/tr&gt;</span>
<span class="line">                &lt;/thead&gt;</span>
<span class="line">                &lt;tbody&gt;</span>
<span class="line">                    &lt;c:forEach items=&quot;${memberList}&quot; var=&quot;member&quot; varStatus=&quot;status&quot;&gt;</span>
<span class="line">                        &lt;tr&gt;</span>
<span class="line">                            &lt;td&gt;${status.index + 1}&lt;/td&gt;</span>
<span class="line">                            &lt;td&gt;${member.userId}&lt;/td&gt;</span>
<span class="line">                            &lt;td&gt;${member.name}&lt;/td&gt;</span>
<span class="line">                        &lt;/tr&gt;</span>
<span class="line">                    &lt;/c:forEach&gt;</span>
<span class="line">                &lt;/tbody&gt;</span>
<span class="line">            &lt;/table&gt;</span>
<span class="line">        &lt;/c:if&gt;</span>
<span class="line">        </span>
<span class="line">        &lt;p&gt;&lt;a href=&quot;/members/add&quot;&gt;새 회원 등록&lt;/a&gt;&lt;/p&gt;</span>
<span class="line">    &lt;/main&gt;</span>
<span class="line">    </span>
<span class="line">    &lt;jsp:include page=&quot;../common/footer.jsp&quot; /&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_5-thymeleaf-템플릿-엔진" tabindex="-1"><a class="header-anchor" href="#_5-thymeleaf-템플릿-엔진"><span>5. Thymeleaf 템플릿 엔진</span></a></h2>
<h3 id="🆚-jsp-vs-thymeleaf-비교" tabindex="-1"><a class="header-anchor" href="#🆚-jsp-vs-thymeleaf-비교"><span>🆚 JSP vs Thymeleaf 비교</span></a></h3>
<p>Spring Boot 3.x부터는 <strong>Thymeleaf가 기본 뷰 기술</strong>로 권장됩니다.</p>
<h4 id="📊-상세-비교표" tabindex="-1"><a class="header-anchor" href="#📊-상세-비교표"><span>📊 상세 비교표</span></a></h4>
<table>
<thead>
<tr>
<th>구분</th>
<th>JSP</th>
<th>Thymeleaf</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>핵심 개념</strong></td>
<td>HTML에 Java 코드 삽입</td>
<td>HTML 태그에 <code v-pre>th:*</code> 속성 추가</td>
</tr>
<tr>
<td><strong>실행 방식</strong></td>
<td>서블릿으로 변환 및 컴파일</td>
<td>템플릿 파서가 HTML 분석 처리</td>
</tr>
<tr>
<td><strong>템플릿 형태</strong></td>
<td>스크립틀릿 포함으로 순수 HTML 아님</td>
<td><strong>내추럴 템플릿</strong>: 브라우저에서 직접 열어도 정상</td>
</tr>
<tr>
<td><strong>Spring Boot</strong></td>
<td>WAR 패키징 + 외부 WAS 필요</td>
<td><strong>JAR 단독 실행 가능</strong> (권장)</td>
</tr>
<tr>
<td><strong>주요 문법</strong></td>
<td>EL + JSTL</td>
<td><code v-pre>th:text</code>, <code v-pre>th:if</code>, <code v-pre>th:each</code> 등</td>
</tr>
</tbody>
</table>
<h3 id="🔒-jsp의-보안-문제와-해결책" tabindex="-1"><a class="header-anchor" href="#🔒-jsp의-보안-문제와-해결책"><span>🔒 JSP의 보안 문제와 해결책</span></a></h3>
<h4 id="⚠️-문제점" tabindex="-1"><a class="header-anchor" href="#⚠️-문제점"><span>⚠️ 문제점</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">http://서버주소/user/list.jsp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>컨트롤러를 거치지 않고 뷰에 직접 접근 가능</li>
<li>데이터가 없어서 화면이 깨지거나 오류 발생</li>
</ul>
<h4 id="✅-해결책" tabindex="-1"><a class="header-anchor" href="#✅-해결책"><span>✅ 해결책</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">/WEB-INF/views/user/list.jsp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><code v-pre>/WEB-INF/</code> 하위는 외부 URL 직접 접근 차단</li>
<li>오직 <code v-pre>DispatcherServlet</code>을 통한 서버 내부 Forward만 허용</li>
</ul>
<h3 id="🧩-thymeleaf-레이아웃-기능" tabindex="-1"><a class="header-anchor" href="#🧩-thymeleaf-레이아웃-기능"><span>🧩 Thymeleaf 레이아웃 기능</span></a></h3>
<h4 id="_1-조각-fragment-정의" tabindex="-1"><a class="header-anchor" href="#_1-조각-fragment-정의"><span>1. <strong>조각(Fragment) 정의</strong></span></a></h4>
<p><strong>헤더 조각</strong> (<code v-pre>_layout/header.html</code>)</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span> <span class="token attr-name"><span class="token namespace">th:</span>fragment</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header-fragment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>회원 관리 시스템<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/css/style.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-조각-포함-방법" tabindex="-1"><a class="header-anchor" href="#_2-조각-포함-방법"><span>2. <strong>조각 포함 방법</strong></span></a></h4>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span> <span class="token attr-name"><span class="token namespace">th:</span>replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>~{_layout/header :: header-fragment}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token comment">&lt;!-- 페이지 내용 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="📋-조각-포함-방식-비교" tabindex="-1"><a class="header-anchor" href="#📋-조각-포함-방식-비교"><span>📋 조각 포함 방식 비교</span></a></h4>
<table>
<thead>
<tr>
<th>속성</th>
<th>동작</th>
<th>사용 예시</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>th:insert</code></td>
<td>태그 <strong>내부에</strong> 프래그먼트 삽입</td>
<td><code v-pre>&lt;div th:insert=&quot;...&quot;&gt;</code></td>
</tr>
<tr>
<td><code v-pre>th:replace</code></td>
<td>태그 <strong>자체를</strong> 프래그먼트로 대체</td>
<td><code v-pre>&lt;head th:replace=&quot;...&quot;&gt;</code></td>
</tr>
</tbody>
</table>
<h3 id="🔧-thymeleaf-핵심-속성" tabindex="-1"><a class="header-anchor" href="#🔧-thymeleaf-핵심-속성"><span>🔧 Thymeleaf 핵심 속성</span></a></h3>
<h4 id="📝-주요-th-속성들" tabindex="-1"><a class="header-anchor" href="#📝-주요-th-속성들"><span>📝 주요 <code v-pre>th:*</code> 속성들</span></a></h4>
<table>
<thead>
<tr>
<th>속성</th>
<th>역할</th>
<th>사용 예시</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>th:text</code></td>
<td>텍스트 내용 설정</td>
<td><code v-pre>&lt;p th:text=&quot;${user.name}&quot;&gt;기본값&lt;/p&gt;</code></td>
</tr>
<tr>
<td><code v-pre>th:if</code></td>
<td>조건부 렌더링</td>
<td><code v-pre>&lt;div th:if=&quot;${not #lists.isEmpty(userList)}&quot;&gt;</code></td>
</tr>
<tr>
<td><code v-pre>th:each</code></td>
<td>반복문</td>
<td><code v-pre>&lt;tr th:each=&quot;user : ${userList}&quot;&gt;</code></td>
</tr>
<tr>
<td><code v-pre>th:object</code></td>
<td>폼 객체 바인딩</td>
<td><code v-pre>&lt;form th:object=&quot;${member}&quot;&gt;</code></td>
</tr>
<tr>
<td><code v-pre>th:field</code></td>
<td>폼 필드 바인딩</td>
<td><code v-pre>&lt;input th:field=&quot;*{name}&quot;&gt;</code></td>
</tr>
<tr>
<td><code v-pre>th:href</code></td>
<td>링크 URL 설정</td>
<td><code v-pre>&lt;a th:href=&quot;@{/members}&quot;&gt;목록&lt;/a&gt;</code></td>
</tr>
</tbody>
</table>
<h3 id="🏗️-실습-thymeleaf-회원-관리-시스템" tabindex="-1"><a class="header-anchor" href="#🏗️-실습-thymeleaf-회원-관리-시스템"><span>🏗️ 실습: Thymeleaf 회원 관리 시스템</span></a></h3>
<h4 id="_1-회원-등록-폼-members-add-html" tabindex="-1"><a class="header-anchor" href="#_1-회원-등록-폼-members-add-html"><span>1. <strong>회원 등록 폼</strong> (<code v-pre>members/add.html</code>)</span></a></h4>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span> <span class="token attr-name"><span class="token namespace">th:</span>replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>~{_layout/header :: header-fragment}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container mt-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>회원 등록<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span></span>
<span class="line">        </span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name"><span class="token namespace">th:</span>action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/members/add}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>object</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${member}<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userId<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>아이디<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>field</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>*{userId}<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">            </span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>이름<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>field</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>*{name}<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">            </span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>이메일<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>field</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>*{email}<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">            </span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>등록하기<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/members}<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-secondary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>목록으로<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-회원-목록-members-list-html" tabindex="-1"><a class="header-anchor" href="#_2-회원-목록-members-list-html"><span>2. <strong>회원 목록</strong> (<code v-pre>members/list.html</code>)</span></a></h4>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span> <span class="token attr-name"><span class="token namespace">th:</span>replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>~{_layout/header :: header-fragment}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container mt-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex justify-content-between align-items-center mb-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>회원 목록<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/members/add}<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>새 회원 등록<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">&lt;!-- 빈 목록 처리 --></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${#lists.isEmpty(memberList)}<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alert alert-info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            등록된 회원이 없습니다.</span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">&lt;!-- 회원 목록 테이블 --></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${not #lists.isEmpty(memberList)}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table table-striped<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-dark<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line">                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>번호<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span></span>
<span class="line">                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>아이디<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span></span>
<span class="line">                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>이름<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span></span>
<span class="line">                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>이메일<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span></span>
<span class="line">                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>등록일<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span></span>
<span class="line">                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span></span>
<span class="line">                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name"><span class="token namespace">th:</span>each</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>member, status : ${memberList}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${status.index + 1}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${member.userId}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>user01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${member.name}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>홍길동<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${member.email}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>hong@example.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${#temporals.format(member.createdAt, 'yyyy-MM-dd')}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2024-08-28<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-컨트롤러-membercontroller-java" tabindex="-1"><a class="header-anchor" href="#_3-컨트롤러-membercontroller-java"><span>3. <strong>컨트롤러</strong> (<code v-pre>MemberController.java</code>)</span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token annotation punctuation">@Controller</span></span>
<span class="line"><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/members"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MemberController</span> <span class="token punctuation">{</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">MemberService</span> memberService<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token annotation punctuation">@GetMapping</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token class-name">Model</span> model<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Member</span><span class="token punctuation">></span></span> memberList <span class="token operator">=</span> memberService<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">"memberList"</span><span class="token punctuation">,</span> memberList<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">"members/list"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/add"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">addForm</span><span class="token punctuation">(</span><span class="token class-name">Model</span> model<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">"member"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Member</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">"members/add"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"/add"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token annotation punctuation">@ModelAttribute</span> <span class="token class-name">Member</span> member<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        memberService<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>member<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">"redirect:/members"</span><span class="token punctuation">;</span> <span class="token comment">// PRG 패턴</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🎯-modelattribute와-객체-바인딩" tabindex="-1"><a class="header-anchor" href="#🎯-modelattribute와-객체-바인딩"><span>🎯 @ModelAttribute와 객체 바인딩</span></a></h3>
<h4 id="💡-핵심-개념" tabindex="-1"><a class="header-anchor" href="#💡-핵심-개념"><span>💡 핵심 개념</span></a></h4>
<ol>
<li><strong>Controller</strong>: <code v-pre>@ModelAttribute</code>로 폼 데이터를 DTO 객체로 자동 바인딩</li>
<li><strong>Thymeleaf</strong>: <code v-pre>th:object</code>와 <code v-pre>th:field</code>로 객체와 폼 필드를 연결</li>
</ol>
<h4 id="🔄-바인딩-과정" tabindex="-1"><a class="header-anchor" href="#🔄-바인딩-과정"><span>🔄 바인딩 과정</span></a></h4>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> LR</span>
<span class="line">    A<span class="token text string">["HTML Form"]</span> <span class="token arrow operator">--></span><span class="token label property">|"th:field"|</span> B<span class="token text string">["Member DTO"]</span></span>
<span class="line">    B <span class="token arrow operator">--></span><span class="token label property">|"@ModelAttribute"|</span> C<span class="token text string">["Controller Method"]</span></span>
<span class="line">    C <span class="token arrow operator">--></span><span class="token label property">|"비즈니스 로직"|</span> D<span class="token text string">["Service Layer"]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="📝-th-field의-장점" tabindex="-1"><a class="header-anchor" href="#📝-th-field의-장점"><span>📝 <code v-pre>th:field</code>의 장점</span></a></h4>
<ul>
<li><strong>자동 생성</strong>: <code v-pre>id</code>, <code v-pre>name</code>, <code v-pre>value</code> 속성을 자동 생성</li>
<li><strong>코드 간소화</strong>: 중복 코드 제거</li>
<li><strong>타입 안전성</strong>: 컴파일 타임에 필드명 검증</li>
</ul>
<p><strong>기존 방식</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${member.name}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Thymeleaf 방식</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>field</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>*{name}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token comment">&lt;!-- 자동으로 id="name" name="name" value="..." 생성 --></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
</div></template>


