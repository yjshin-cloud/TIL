<template><div><h1 id="apache-tomcat-완벽-가이드-🚀" tabindex="-1"><a class="header-anchor" href="#apache-tomcat-완벽-가이드-🚀"><span>Apache Tomcat 완벽 가이드 🚀</span></a></h1>
<h2 id="📋-목차" tabindex="-1"><a class="header-anchor" href="#📋-목차"><span>📋 목차</span></a></h2>
<ol>
<li><a href="#apache-tomcat%EC%9D%B4%EB%9E%80">Apache Tomcat이란?</a></li>
<li><a href="#%EC%A3%BC%EC%9A%94-%ED%8A%B9%EC%A7%95">주요 특징</a></li>
<li><a href="#%EC%8B%9C%EC%8A%A4%ED%85%9C-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98">시스템 아키텍처</a></li>
<li><a href="#%EC%84%A4%EC%B9%98-%EB%B0%8F-%EC%84%A4%EC%A0%95">설치 및 설정</a></li>
<li><a href="#%EA%B8%B0%EB%B3%B8-%EA%B5%AC%EC%84%B1-%EC%9A%94%EC%86%8C">기본 구성 요소</a></li>
<li><a href="#%EC%8B%A4%EC%8A%B5-%EC%98%88%EC%A0%9C">실습 예제</a></li>
<li><a href="#%ED%8A%B8%EB%9F%AC%EB%B8%94%EC%8A%88%ED%8C%85">트러블슈팅</a></li>
</ol>
<hr>
<h2 id="apache-tomcat이란-🤔" tabindex="-1"><a class="header-anchor" href="#apache-tomcat이란-🤔"><span>Apache Tomcat이란? 🤔</span></a></h2>
<p>Apache Tomcat은 <strong>웹 서버</strong>와 <strong>서블릿 컨테이너</strong>의 역할을 하는 오픈소스 소프트웨어입니다.</p>
<h3 id="쉬운-비유로-이해하기" tabindex="-1"><a class="header-anchor" href="#쉬운-비유로-이해하기"><span>쉬운 비유로 이해하기</span></a></h3>
<ul>
<li><strong>식당</strong>으로 비유하면, Tomcat은 <strong>주방장</strong>입니다</li>
<li>**손님(브라우저)**이 **주문(HTTP 요청)**을 하면</li>
<li>**주방장(Tomcat)**이 **요리(Java 웹 애플리케이션)**를 만들어</li>
<li>**서빙(HTTP 응답)**해주는 역할을 합니다</li>
</ul>
<hr>
<h2 id="주요-특징-✨" tabindex="-1"><a class="header-anchor" href="#주요-특징-✨"><span>주요 특징 ✨</span></a></h2>
<table>
<thead>
<tr>
<th>특징</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>경량성</strong></td>
<td>가볍고 빠른 성능</td>
</tr>
<tr>
<td><strong>표준 준수</strong></td>
<td>Java EE 표준을 완벽 지원</td>
</tr>
<tr>
<td><strong>무료</strong></td>
<td>완전한 오픈소스</td>
</tr>
<tr>
<td><strong>안정성</strong></td>
<td>전 세계에서 검증된 안정성</td>
</tr>
<tr>
<td><strong>확장성</strong></td>
<td>다양한 플러그인과 확장 가능</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="시스템-아키텍처-🏗️" tabindex="-1"><a class="header-anchor" href="#시스템-아키텍처-🏗️"><span>시스템 아키텍처 🏗️</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">[웹 브라우저]</span> <span class="token arrow operator">--></span><span class="token label property">|HTTP 요청|</span> B<span class="token text string">[Apache Tomcat]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> C<span class="token text string">[Catalina&lt;br/>서블릿 엔진]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> D<span class="token text string">[Coyote&lt;br/>HTTP 커넥터]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> E<span class="token text string">[Jasper&lt;br/>JSP 엔진]</span></span>
<span class="line">    </span>
<span class="line">    F<span class="token text string">[웹 애플리케이션]</span> <span class="token arrow operator">--></span> G<span class="token text string">[Servlet]</span></span>
<span class="line">    F <span class="token arrow operator">--></span> H<span class="token text string">[JSP]</span></span>
<span class="line">    F <span class="token arrow operator">--></span> I<span class="token text string">[HTML/CSS/JS]</span></span>
<span class="line">    </span>
<span class="line">    C <span class="token arrow operator">--></span> F</span>
<span class="line">    </span>
<span class="line">    B <span class="token arrow operator">--></span><span class="token label property">|HTTP 응답|</span> A</span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">style</span> A <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e1f5fe</span></span>
<span class="line">    <span class="token keyword">style</span> B <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#fff3e0</span></span>
<span class="line">    <span class="token keyword">style</span> C <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f3e5f5</span></span>
<span class="line">    <span class="token keyword">style</span> D <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e8f5e8</span></span>
<span class="line">    <span class="token keyword">style</span> E <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#fff8e1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="핵심-구성-요소-설명" tabindex="-1"><a class="header-anchor" href="#핵심-구성-요소-설명"><span>핵심 구성 요소 설명</span></a></h3>
<ol>
<li>
<p><strong>Catalina</strong> 🐱</p>
<ul>
<li>Tomcat의 핵심 서블릿 엔진</li>
<li>Java 코드를 실행하는 &quot;두뇌&quot; 역할</li>
</ul>
</li>
<li>
<p><strong>Coyote</strong> 🐺</p>
<ul>
<li>HTTP 요청을 받고 응답을 보내는 &quot;문지기&quot; 역할</li>
<li>다양한 프로토콜 지원 (HTTP/1.1, HTTP/2, AJP)</li>
</ul>
</li>
<li>
<p><strong>Jasper</strong> 🌸</p>
<ul>
<li>JSP 파일을 Java 코드로 변환하는 &quot;번역가&quot; 역할</li>
</ul>
</li>
</ol>
<hr>
<h2 id="설치-및-설정-⚙️" tabindex="-1"><a class="header-anchor" href="#설치-및-설정-⚙️"><span>설치 및 설정 ⚙️</span></a></h2>
<h3 id="_1-다운로드" tabindex="-1"><a class="header-anchor" href="#_1-다운로드"><span>1. 다운로드</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 공식 사이트에서 다운로드</span></span>
<span class="line"><span class="token comment"># https://tomcat.apache.org/download-10.cgi</span></span>
<span class="line"><span class="token function">wget</span> https://downloads.apache.org/tomcat/tomcat-10/v10.1.x/bin/apache-tomcat-10.1.x.tar.gz</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-압축-해제-및-설치" tabindex="-1"><a class="header-anchor" href="#_2-압축-해제-및-설치"><span>2. 압축 해제 및 설치</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 압축 파일 해제 (파일을 풀어내는 작업)</span></span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-xzf</span> apache-tomcat-10.1.x.tar.gz</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 적절한 위치로 이동 (프로그램을 원하는 폴더에 배치)</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">mv</span> apache-tomcat-10.1.x /opt/tomcat</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 실행 권한 부여 (프로그램이 실행될 수 있도록 허가)</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">chmod</span> +x /opt/tomcat/bin/*.sh</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-환경변수-설정" tabindex="-1"><a class="header-anchor" href="#_3-환경변수-설정"><span>3. 환경변수 설정</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># ~/.bashrc 파일에 추가</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">CATALINA_HOME</span><span class="token operator">=</span>/opt/tomcat    <span class="token comment"># Tomcat 설치 경로를 시스템에 알려줌</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/lib/jvm/java-11-openjdk    <span class="token comment"># Java 위치를 시스템에 알려줌</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$CATALINA_HOME</span>/bin    <span class="token comment"># Tomcat 명령어를 어디서든 사용 가능하게 함</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-서비스-시작" tabindex="-1"><a class="header-anchor" href="#_4-서비스-시작"><span>4. 서비스 시작</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># Tomcat 서버 시작 (식당 문을 여는 것)</span></span>
<span class="line"><span class="token variable">$CATALINA_HOME</span>/bin/startup.sh</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 또는 직접 실행</span></span>
<span class="line"><span class="token variable">$CATALINA_HOME</span>/bin/catalina.sh run</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="기본-구성-요소-🔧" tabindex="-1"><a class="header-anchor" href="#기본-구성-요소-🔧"><span>기본 구성 요소 🔧</span></a></h2>
<h3 id="폴더-구조" tabindex="-1"><a class="header-anchor" href="#폴더-구조"><span>폴더 구조</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">[CATALINA_HOME]</span> <span class="token arrow operator">--></span> B<span class="token text string">[bin/]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> C<span class="token text string">[conf/]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> D<span class="token text string">[lib/]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> E<span class="token text string">[logs/]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> F<span class="token text string">[webapps/]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> G<span class="token text string">[work/]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> H<span class="token text string">[temp/]</span></span>
<span class="line">    </span>
<span class="line">    B <span class="token arrow operator">--></span> B1<span class="token text string">[startup.sh&lt;br/>서버 시작 스크립트]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> B2<span class="token text string">[shutdown.sh&lt;br/>서버 종료 스크립트]</span></span>
<span class="line">    </span>
<span class="line">    C <span class="token arrow operator">--></span> C1<span class="token text string">[server.xml&lt;br/>서버 설정 파일]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> C2<span class="token text string">[web.xml&lt;br/>웹 애플리케이션 설정]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> C3<span class="token text string">[tomcat-users.xml&lt;br/>사용자 계정 설정]</span></span>
<span class="line">    </span>
<span class="line">    F <span class="token arrow operator">--></span> F1<span class="token text string">[ROOT/&lt;br/>기본 웹 애플리케이션]</span></span>
<span class="line">    F <span class="token arrow operator">--></span> F2<span class="token text string">[manager/&lt;br/>관리 도구]</span></span>
<span class="line">    F <span class="token arrow operator">--></span> F3<span class="token text string">[your-app/&lt;br/>사용자 애플리케이션]</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">style</span> A <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#ff9800</span></span>
<span class="line">    <span class="token keyword">style</span> F <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#4caf50</span></span>
<span class="line">    <span class="token keyword">style</span> C <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#2196f3</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="주요-설정-파일" tabindex="-1"><a class="header-anchor" href="#주요-설정-파일"><span>주요 설정 파일</span></a></h3>
<h4 id="server-xml-서버의-기본-설정" tabindex="-1"><a class="header-anchor" href="#server-xml-서버의-기본-설정"><span>server.xml (서버의 기본 설정)</span></a></h4>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code class="language-xml"><span class="line"><span class="token comment">&lt;!-- 포트 8080에서 HTTP 요청을 받겠다는 설정 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Connector</span> <span class="token attr-name">port</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>8080<span class="token punctuation">"</span></span> </span>
<span class="line">           <span class="token attr-name">protocol</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTTP/1.1<span class="token punctuation">"</span></span> </span>
<span class="line">           <span class="token attr-name">connectionTimeout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20000<span class="token punctuation">"</span></span> </span>
<span class="line">           <span class="token attr-name">redirectPort</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>8443<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 가상 호스트 설정 (도메인별로 다른 애플리케이션 실행) --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Host</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>localhost<span class="token punctuation">"</span></span> </span>
<span class="line">      <span class="token attr-name">appBase</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>webapps<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">unpackWARs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> </span>
<span class="line">      <span class="token attr-name">autoDeploy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Host</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="web-xml-웹-애플리케이션의-공통-설정" tabindex="-1"><a class="header-anchor" href="#web-xml-웹-애플리케이션의-공통-설정"><span>web.xml (웹 애플리케이션의 공통 설정)</span></a></h4>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code class="language-xml"><span class="line"><span class="token comment">&lt;!-- 모든 JSP 파일을 JSP 서블릿으로 처리하겠다는 설정 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-mapping</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">></span></span>jsp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">></span></span>*.jsp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-mapping</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 기본 페이지 설정 (주소창에 파일명 없이 접속했을 때 보여줄 페이지) --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>welcome-file-list</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>welcome-file</span><span class="token punctuation">></span></span>index.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>welcome-file</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>welcome-file</span><span class="token punctuation">></span></span>index.jsp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>welcome-file</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>welcome-file-list</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="실습-예제-💻" tabindex="-1"><a class="header-anchor" href="#실습-예제-💻"><span>실습 예제 💻</span></a></h2>
<h3 id="_1-간단한-서블릿-만들기" tabindex="-1"><a class="header-anchor" href="#_1-간단한-서블릿-만들기"><span>1. 간단한 서블릿 만들기</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// HelloServlet.java</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>           <span class="token comment">// 서블릿 관련 기본 클래스들을 사용하기 위해 import</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>      <span class="token comment">// HTTP 관련 서블릿 클래스들을 사용하기 위해 import</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>                 <span class="token comment">// 입출력 관련 클래스들을 사용하기 위해 import</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// @WebServlet: 이 클래스가 서블릿이며, "/hello" 주소로 접근 가능하다고 알려줌</span></span>
<span class="line"><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">"/hello"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// doGet: GET 방식으로 요청이 왔을 때 실행되는 메서드</span></span>
<span class="line">    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> </span>
<span class="line">            <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 응답의 콘텐츠 타입을 HTML로 설정하고, 한글 깨짐 방지를 위해 UTF-8 인코딩 설정</span></span>
<span class="line">        response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">"text/html;charset=UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 웹 페이지에 글을 쓸 수 있는 도구(PrintWriter) 가져오기</span></span>
<span class="line">        <span class="token class-name">PrintWriter</span> out <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// HTML 페이지 작성 시작</span></span>
<span class="line">        out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"&lt;html>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"&lt;head>&lt;title>Hello Servlet&lt;/title>&lt;/head>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"&lt;body>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"&lt;h1>안녕하세요! 첫 번째 서블릿입니다.&lt;/h1>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"&lt;p>현재 시간: "</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span>Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"&lt;/p>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"&lt;/body>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"&lt;/html>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-jsp-페이지-만들기" tabindex="-1"><a class="header-anchor" href="#_2-jsp-페이지-만들기"><span>2. JSP 페이지 만들기</span></a></h3>
<div class="language-jsp line-numbers-mode" data-highlighter="prismjs" data-ext="jsp"><pre v-pre><code class="language-jsp"><span class="line">&lt;!-- hello.jsp --&gt;</span>
<span class="line">&lt;%-- JSP 페이지의 기본 설정: 한글 사용, HTML 형태로 출력 --%&gt;</span>
<span class="line">&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;</span>
<span class="line"></span>
<span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">    &lt;title&gt;Hello JSP&lt;/title&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">    &lt;h1&gt;JSP로 만든 첫 번째 페이지&lt;/h1&gt;</span>
<span class="line">    </span>
<span class="line">    &lt;%-- Java 코드를 JSP 안에서 실행하기 (스크립틀릿) --%&gt;</span>
<span class="line">    &lt;% </span>
<span class="line">        String name = &quot;멋쟁이사자처럼&quot;;  // 변수 선언</span>
<span class="line">        int count = 10;                  // 숫자 변수 선언</span>
<span class="line">    %&gt;</span>
<span class="line">    </span>
<span class="line">    &lt;%-- 변수 값을 HTML에 출력하기 (표현식) --%&gt;</span>
<span class="line">    &lt;p&gt;안녕하세요, &lt;%= name %&gt;!&lt;/p&gt;</span>
<span class="line">    &lt;p&gt;방문자 수: &lt;%= count %&gt;&lt;/p&gt;</span>
<span class="line">    </span>
<span class="line">    &lt;%-- 조건문 사용하기 --%&gt;</span>
<span class="line">    &lt;% if(count &gt; 5) { %&gt;</span>
<span class="line">        &lt;p style=&quot;color: blue;&quot;&gt;많은 방문자가 있네요!&lt;/p&gt;</span>
<span class="line">    &lt;% } else { %&gt;</span>
<span class="line">        &lt;p style=&quot;color: red;&quot;&gt;방문자가 적습니다.&lt;/p&gt;</span>
<span class="line">    &lt;% } %&gt;</span>
<span class="line">    </span>
<span class="line">    &lt;%-- 반복문으로 목록 만들기 --%&gt;</span>
<span class="line">    &lt;h3&gt;숫자 목록:&lt;/h3&gt;</span>
<span class="line">    &lt;ul&gt;</span>
<span class="line">        &lt;% for(int i = 1; i &lt;= 5; i++) { %&gt;</span>
<span class="line">            &lt;li&gt;번호 &lt;%= i %&gt;&lt;/li&gt;</span>
<span class="line">        &lt;% } %&gt;</span>
<span class="line">    &lt;/ul&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-웹-애플리케이션-구조" tabindex="-1"><a class="header-anchor" href="#_3-웹-애플리케이션-구조"><span>3. 웹 애플리케이션 구조</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">[mywebapp/]</span> <span class="token arrow operator">--></span> B<span class="token text string">[WEB-INF/]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> C<span class="token text string">[index.html]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> D<span class="token text string">[hello.jsp]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> E<span class="token text string">[css/]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> F<span class="token text string">[js/]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> G<span class="token text string">[images/]</span></span>
<span class="line">    </span>
<span class="line">    B <span class="token arrow operator">--></span> B1<span class="token text string">[web.xml&lt;br/>애플리케이션 설정]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> B2<span class="token text string">[classes/&lt;br/>컴파일된 Java 클래스]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> B3<span class="token text string">[lib/&lt;br/>외부 라이브러리 JAR 파일]</span></span>
<span class="line">    </span>
<span class="line">    E <span class="token arrow operator">--></span> E1<span class="token text string">[style.css]</span></span>
<span class="line">    F <span class="token arrow operator">--></span> F1<span class="token text string">[script.js]</span></span>
<span class="line">    G <span class="token arrow operator">--></span> G1<span class="token text string">[logo.png]</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">style</span> A <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#4caf50</span></span>
<span class="line">    <span class="token keyword">style</span> B <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#ff9800</span></span>
<span class="line">    <span class="token keyword">style</span> C <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#2196f3</span></span>
<span class="line">    <span class="token keyword">style</span> D <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#9c27b0</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="트러블슈팅-🔍" tabindex="-1"><a class="header-anchor" href="#트러블슈팅-🔍"><span>트러블슈팅 🔍</span></a></h2>
<h3 id="자주-발생하는-문제와-해결책" tabindex="-1"><a class="header-anchor" href="#자주-발생하는-문제와-해결책"><span>자주 발생하는 문제와 해결책</span></a></h3>
<h4 id="_1-포트-충돌-문제" tabindex="-1"><a class="header-anchor" href="#_1-포트-충돌-문제"><span>1. 포트 충돌 문제</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 문제: Address already in use: bind 에러</span></span>
<span class="line"><span class="token comment"># 해결: 사용 중인 포트 확인 및 종료</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 8080 포트를 사용하는 프로세스 찾기</span></span>
<span class="line"><span class="token function">netstat</span> <span class="token parameter variable">-tulpn</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">8080</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 해당 프로세스 종료</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token punctuation">[</span>프로세스ID<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 또는 Tomcat 설정에서 다른 포트 사용</span></span>
<span class="line"><span class="token comment"># server.xml에서 Connector port="8090"으로 변경</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-메모리-부족-문제" tabindex="-1"><a class="header-anchor" href="#_2-메모리-부족-문제"><span>2. 메모리 부족 문제</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># catalina.sh 파일에 JVM 옵션 추가</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_OPTS</span><span class="token operator">=</span><span class="token string">"-Xms512m -Xmx1024m -XX:PermSize=256m -XX:MaxPermSize=512m"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># -Xms: 시작 메모리 크기</span></span>
<span class="line"><span class="token comment"># -Xmx: 최대 메모리 크기  </span></span>
<span class="line"><span class="token comment"># -XX:PermSize: 영구 저장소 초기 크기</span></span>
<span class="line"><span class="token comment"># -XX:MaxPermSize: 영구 저장소 최대 크기</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-한글-깨짐-문제" tabindex="-1"><a class="header-anchor" href="#_3-한글-깨짐-문제"><span>3. 한글 깨짐 문제</span></a></h4>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code class="language-xml"><span class="line"><span class="token comment">&lt;!-- server.xml의 Connector에 URIEncoding 추가 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Connector</span> <span class="token attr-name">port</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>8080<span class="token punctuation">"</span></span> </span>
<span class="line">           <span class="token attr-name">protocol</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTTP/1.1<span class="token punctuation">"</span></span></span>
<span class="line">           <span class="token attr-name">URIEncoding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span></span>
<span class="line">           <span class="token attr-name">connectionTimeout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20000<span class="token punctuation">"</span></span> </span>
<span class="line">           <span class="token attr-name">redirectPort</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>8443<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="로그-확인하기" tabindex="-1"><a class="header-anchor" href="#로그-확인하기"><span>로그 확인하기</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># Tomcat 로그 실시간 확인</span></span>
<span class="line"><span class="token function">tail</span> <span class="token parameter variable">-f</span> <span class="token variable">$CATALINA_HOME</span>/logs/catalina.out</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 특정 날짜의 로그 확인</span></span>
<span class="line"><span class="token function">cat</span> <span class="token variable">$CATALINA_HOME</span>/logs/catalina.2024-01-15.log</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="성능-최적화-팁-⚡" tabindex="-1"><a class="header-anchor" href="#성능-최적화-팁-⚡"><span>성능 최적화 팁 ⚡</span></a></h2>
<h3 id="_1-커넥터-튜닝" tabindex="-1"><a class="header-anchor" href="#_1-커넥터-튜닝"><span>1. 커넥터 튜닝</span></a></h3>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code class="language-xml"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Connector</span> <span class="token attr-name">port</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>8080<span class="token punctuation">"</span></span> </span>
<span class="line">           <span class="token attr-name">protocol</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTTP/1.1<span class="token punctuation">"</span></span></span>
<span class="line">           <span class="token attr-name">maxConnections</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span>     <span class="token attr-name">&lt;!--</span> <span class="token attr-name">최대</span> <span class="token attr-name">동시</span> <span class="token attr-name">연결</span> <span class="token attr-name">수</span> <span class="token attr-name">--</span><span class="token punctuation">></span></span></span>
<span class="line">           maxThreads="100"         <span class="token comment">&lt;!-- 최대 처리 스레드 수 --></span></span>
<span class="line">           minSpareThreads="10"     <span class="token comment">&lt;!-- 최소 대기 스레드 수 --></span></span>
<span class="line">           acceptCount="50"         <span class="token comment">&lt;!-- 대기 큐 크기 --></span></span>
<span class="line">           connectionTimeout="20000" /></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-jvm-튜닝" tabindex="-1"><a class="header-anchor" href="#_2-jvm-튜닝"><span>2. JVM 튜닝</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_OPTS</span><span class="token operator">=</span><span class="token string">"-server -Xms2g -Xmx4g -XX:NewRatio=3 -XX:+UseG1GC"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># -server: 서버 모드로 실행 (최적화 우선)</span></span>
<span class="line"><span class="token comment"># -Xms2g: 시작 힙 메모리 2GB</span></span>
<span class="line"><span class="token comment"># -Xmx4g: 최대 힙 메모리 4GB  </span></span>
<span class="line"><span class="token comment"># -XX:NewRatio=3: Young:Old 영역 비율 1:3</span></span>
<span class="line"><span class="token comment"># -XX:+UseG1GC: G1 가비지 컬렉터 사용</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="보안-설정-🔒" tabindex="-1"><a class="header-anchor" href="#보안-설정-🔒"><span>보안 설정 🔒</span></a></h2>
<h3 id="_1-관리자-계정-설정" tabindex="-1"><a class="header-anchor" href="#_1-관리자-계정-설정"><span>1. 관리자 계정 설정</span></a></h3>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code class="language-xml"><span class="line"><span class="token comment">&lt;!-- tomcat-users.xml --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tomcat-users</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token comment">&lt;!-- 관리자 역할 정의 --></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>role</span> <span class="token attr-name">rolename</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>admin-gui<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>role</span> <span class="token attr-name">rolename</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>manager-gui<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">&lt;!-- 관리자 사용자 생성 (강력한 비밀번호 사용 필수!) --></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>user</span> <span class="token attr-name">username</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>admin<span class="token punctuation">"</span></span> </span>
<span class="line">        <span class="token attr-name">password</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>강력한비밀번호123!<span class="token punctuation">"</span></span> </span>
<span class="line">        <span class="token attr-name">roles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>admin-gui,manager-gui<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tomcat-users</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-불필요한-기본-앱-제거" tabindex="-1"><a class="header-anchor" href="#_2-불필요한-기본-앱-제거"><span>2. 불필요한 기본 앱 제거</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 보안을 위해 기본 예제 애플리케이션 삭제</span></span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">$CATALINA_HOME</span>/webapps/docs</span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">$CATALINA_HOME</span>/webapps/examples</span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">$CATALINA_HOME</span>/webapps/host-manager</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="마무리-🎯" tabindex="-1"><a class="header-anchor" href="#마무리-🎯"><span>마무리 🎯</span></a></h2>
<p>Apache Tomcat은 Java 웹 개발의 핵심 도구입니다. 이 가이드를 통해 기본적인 설치부터 실제 웹 애플리케이션 개발까지의 전 과정을 이해하실 수 있을 것입니다.</p>
<h3 id="다음-단계-학습-로드맵" tabindex="-1"><a class="header-anchor" href="#다음-단계-학습-로드맵"><span>다음 단계 학습 로드맵</span></a></h3>
<ol>
<li><strong>Spring Framework</strong> 학습</li>
<li><strong>데이터베이스 연동</strong> (JDBC, JPA)</li>
<li><strong>RESTful API</strong> 개발</li>
<li><strong>Docker</strong>를 이용한 배포</li>
<li><strong>클라우드 서비스</strong> 연동</li>
</ol>
<h3 id="유용한-참고-자료" tabindex="-1"><a class="header-anchor" href="#유용한-참고-자료"><span>유용한 참고 자료</span></a></h3>
<ul>
<li><a href="https://tomcat.apache.org/tomcat-10.0-doc/" target="_blank" rel="noopener noreferrer">Apache Tomcat 공식 문서</a></li>
<li><a href="https://docs.oracle.com/javase/tutorial/" target="_blank" rel="noopener noreferrer">Oracle Java 튜토리얼</a></li>
<li><a href="https://spring.io/guides" target="_blank" rel="noopener noreferrer">Spring 공식 가이드</a></li>
</ul>
<hr>
<p><strong>🚀 Happy Coding! 멋쟁이사자처럼과 함께 성장해요!</strong></p>
</div></template>


