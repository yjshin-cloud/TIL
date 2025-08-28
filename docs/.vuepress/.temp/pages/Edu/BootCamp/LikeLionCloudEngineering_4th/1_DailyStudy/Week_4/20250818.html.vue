<template><div><h1 id="🎯-jdbc-학습-가이드-8월-18일-실습" tabindex="-1"><a class="header-anchor" href="#🎯-jdbc-학습-가이드-8월-18일-실습"><span>🎯 JDBC 학습 가이드 - 8월 18일 실습</span></a></h1>
<blockquote>
<p><strong>멋쟁이 사자처럼 14일차</strong> | Java Database Connectivity 완전 정복</p>
</blockquote>
<h2 id="📚-목차" tabindex="-1"><a class="header-anchor" href="#📚-목차"><span>📚 목차</span></a></h2>
<ol>
<li><a href="#jdbc%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80">JDBC란 무엇인가?</a></li>
<li><a href="#%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD-%EC%84%A4%EC%A0%95">개발 환경 설정</a></li>
<li><a href="#%ED%95%B5%EC%8B%AC-%EA%B0%9C%EB%85%90-%EC%9D%B4%ED%95%B4">핵심 개념 이해</a></li>
<li><a href="#%EC%8B%A4%EC%8A%B5-1-%EA%B8%B0%EB%B3%B8-crud-%EC%9E%91%EC%97%85">실습 1: 기본 CRUD 작업</a></li>
<li><a href="#%EC%8B%A4%EC%8A%B5-2-sql-injection-%EB%B3%B4%EC%95%88">실습 2: SQL Injection 보안</a></li>
<li><a href="#%EC%8B%A4%EC%8A%B5-3-dao-%ED%8C%A8%ED%84%B4-%EC%A0%81%EC%9A%A9">실습 3: DAO 패턴 적용</a></li>
<li><a href="#%EC%8B%A4%EC%8A%B5-4-%EB%B3%B5%EC%9E%A1%ED%95%9C-%EC%A3%BC%EB%AC%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C">실습 4: 복잡한 주문 시스템</a></li>
<li><a href="#%EB%A7%88%EB%AC%B4%EB%A6%AC">마무리</a></li>
</ol>
<hr>
<h2 id="🤔-jdbc란-무엇인가" tabindex="-1"><a class="header-anchor" href="#🤔-jdbc란-무엇인가"><span>🤔 JDBC란 무엇인가?</span></a></h2>
<p>**JDBC (Java Database Connectivity)**는 자바 프로그램에서 데이터베이스에 연결하고 SQL을 실행할 수 있게 해주는 표준 API입니다.</p>
<h3 id="🎯-왜-jdbc를-배워야-할까" tabindex="-1"><a class="header-anchor" href="#🎯-왜-jdbc를-배워야-할까"><span>🎯 왜 JDBC를 배워야 할까?</span></a></h3>
<ul>
<li><strong>데이터베이스 연동</strong>: 자바 애플리케이션이 MySQL, Oracle 등의 DB와 소통</li>
<li><strong>SQL 실행</strong>: SELECT, INSERT, UPDATE, DELETE 등 SQL 명령어 실행</li>
<li><strong>표준화</strong>: 어떤 데이터베이스를 사용하든 비슷한 방법으로 접근 가능</li>
</ul>
<hr>
<h2 id="⚙️-개발-환경-설정" tabindex="-1"><a class="header-anchor" href="#⚙️-개발-환경-설정"><span>⚙️ 개발 환경 설정</span></a></h2>
<h3 id="필요한-도구들" tabindex="-1"><a class="header-anchor" href="#필요한-도구들"><span>필요한 도구들</span></a></h3>
<ul>
<li><strong>Java 17</strong>: 최신 LTS 버전</li>
<li><strong>Maven</strong>: 프로젝트 관리 도구</li>
<li><strong>MySQL</strong>: 데이터베이스 (Aiven 클라우드 DB 사용)</li>
<li><strong>IntelliJ IDEA</strong>: 개발 환경</li>
</ul>
<h3 id="maven-설정-pom-xml" tabindex="-1"><a class="header-anchor" href="#maven-설정-pom-xml"><span>Maven 설정 (pom.xml)</span></a></h3>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code class="language-xml"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">"</span></span> </span>
<span class="line">         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span></span>
<span class="line">         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://maven.apache.org/POM/4.0.0 </span>
<span class="line">         http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">></span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>dev.example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>jdbc-demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.source</span><span class="token punctuation">></span></span>17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.source</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.target</span><span class="token punctuation">></span></span>17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.target</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project.build.sourceEncoding</span><span class="token punctuation">></span></span>UTF-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project.build.sourceEncoding</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token comment">&lt;!-- MySQL 드라이버 --></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mysql-connector-j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>9.4.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">&lt;!-- 환경변수 관리 --></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>io.github.cdimascio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>dotenv-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="환경변수-설정-env-파일" tabindex="-1"><a class="header-anchor" href="#환경변수-설정-env-파일"><span>환경변수 설정 (.env 파일)</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># Aiven에서 제공한 DB 접속 정보로 교체하세요</span></span>
<span class="line"><span class="token assign-left variable">DB_URL</span><span class="token operator">=</span>jdbc:mysql://<span class="token operator">&lt;</span>aiven-host<span class="token operator">></span>:<span class="token operator">&lt;</span>port<span class="token operator">></span>/<span class="token operator">&lt;</span>db-name<span class="token operator">></span>?allowPublicKeyRetrieval<span class="token operator">=</span>true</span>
<span class="line"><span class="token assign-left variable">DB_USER</span><span class="token operator">=</span><span class="token operator">&lt;</span>aiven-user<span class="token operator">></span></span>
<span class="line"><span class="token assign-left variable">DB_PASSWORD</span><span class="token operator">=</span><span class="token operator">&lt;</span>aiven-password<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="🧠-핵심-개념-이해" tabindex="-1"><a class="header-anchor" href="#🧠-핵심-개념-이해"><span>🧠 핵심 개념 이해</span></a></h2>
<h3 id="jdbc-4대-핵심-객체" tabindex="-1"><a class="header-anchor" href="#jdbc-4대-핵심-객체"><span>JDBC 4대 핵심 객체</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">[DriverManager]</span> <span class="token arrow operator">--></span> B<span class="token text string">[Connection]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> C<span class="token text string">[Statement/PreparedStatement]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> D<span class="token text string">[ResultSet]</span></span>
<span class="line">    </span>
<span class="line">    A1<span class="token text string">[드라이버 관리&lt;br/>DB 연결 생성]</span></span>
<span class="line">    B1<span class="token text string">[DB 연결 세션&lt;br/>트랜잭션 관리]</span></span>
<span class="line">    C1<span class="token text string">[SQL 실행&lt;br/>쿼리 처리]</span></span>
<span class="line">    D1<span class="token text string">[결과 집합&lt;br/>데이터 조회]</span></span>
<span class="line">    </span>
<span class="line">    A <span class="token arrow operator">-.-></span> A1</span>
<span class="line">    B <span class="token arrow operator">-.-></span> B1</span>
<span class="line">    C <span class="token arrow operator">-.-></span> C1</span>
<span class="line">    D <span class="token arrow operator">-.-></span> D1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="📝-객체별-역할" tabindex="-1"><a class="header-anchor" href="#📝-객체별-역할"><span>📝 객체별 역할</span></a></h3>
<table>
<thead>
<tr>
<th>객체</th>
<th>역할</th>
<th>주요 메서드</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>DriverManager</strong></td>
<td>JDBC 드라이버 관리, DB 연결 생성</td>
<td><code v-pre>getConnection()</code></td>
</tr>
<tr>
<td><strong>Connection</strong></td>
<td>DB 세션 관리, 트랜잭션 제어</td>
<td><code v-pre>setAutoCommit()</code>, <code v-pre>commit()</code>, <code v-pre>rollback()</code></td>
</tr>
<tr>
<td><strong>Statement</strong></td>
<td>SQL 문자열 직접 실행</td>
<td><code v-pre>executeUpdate()</code>, <code v-pre>executeQuery()</code></td>
</tr>
<tr>
<td><strong>PreparedStatement</strong></td>
<td>매개변수 바인딩으로 안전한 SQL 실행</td>
<td><code v-pre>setString()</code>, <code v-pre>setInt()</code>, <code v-pre>executeQuery()</code></td>
</tr>
<tr>
<td><strong>ResultSet</strong></td>
<td>SELECT 결과 집합 순회</td>
<td><code v-pre>next()</code>, <code v-pre>getString()</code>, <code v-pre>getInt()</code></td>
</tr>
</tbody>
</table>
<hr>
<h2 id="🚀-실습-1-기본-crud-작업" tabindex="-1"><a class="header-anchor" href="#🚀-실습-1-기본-crud-작업"><span>🚀 실습 1: 기본 CRUD 작업</span></a></h2>
<h3 id="_1단계-데이터베이스-연결하기" tabindex="-1"><a class="header-anchor" href="#_1단계-데이터베이스-연결하기"><span>1단계: 데이터베이스 연결하기</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// 필요한 라이브러리들을 불러옵니다</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>github<span class="token punctuation">.</span>cdimascio<span class="token punctuation">.</span>dotenv<span class="token punctuation">.</span></span><span class="token class-name">Dotenv</span></span><span class="token punctuation">;</span>  <span class="token comment">// .env 파일을 읽기 위한 라이브러리</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>                         <span class="token comment">// JDBC 관련 모든 클래스들</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BasicJDBCDemo</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 1️⃣ 환경변수(.env 파일)에서 데이터베이스 접속 정보를 가져옵니다</span></span>
<span class="line">        <span class="token comment">// 왜 환경변수를 사용할까? </span></span>
<span class="line">        <span class="token comment">// → 코드에 직접 비밀번호를 적으면 보안에 위험하기 때문입니다!</span></span>
<span class="line">        <span class="token class-name">Dotenv</span> dotenv <span class="token operator">=</span> <span class="token class-name">Dotenv</span><span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">// Dotenv 설정을 시작</span></span>
<span class="line">                              <span class="token punctuation">.</span><span class="token function">ignoreIfMissing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// .env 파일이 없어도 에러가 나지 않도록 설정</span></span>
<span class="line">                              <span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">// .env 파일을 실제로 읽어들임</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// .env 파일에서 각각의 값들을 가져와서 변수에 저장</span></span>
<span class="line">        <span class="token class-name">String</span> url <span class="token operator">=</span> dotenv<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"DB_URL"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// 데이터베이스 주소 (어디에 연결할지)</span></span>
<span class="line">        <span class="token class-name">String</span> user <span class="token operator">=</span> dotenv<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"DB_USER"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 사용자 이름 (누구로 로그인할지)</span></span>
<span class="line">        <span class="token class-name">String</span> pass <span class="token operator">=</span> dotenv<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"DB_PASSWORD"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 비밀번호 (어떤 비밀번호로 로그인할지)</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 2️⃣ try-with-resources 구문으로 데이터베이스에 연결합니다</span></span>
<span class="line">        <span class="token comment">// 이 구문을 사용하면 블록이 끝날 때 자동으로 연결을 끊어줍니다 (매우 중요!)</span></span>
<span class="line">        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> user<span class="token punctuation">,</span> pass<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">/*</span>
<span class="line">             * DriverManager.getConnection()의 역할:</span>
<span class="line">             * - MySQL 드라이버를 찾아서 로드</span>
<span class="line">             * - 주어진 URL, 사용자명, 비밀번호로 데이터베이스에 연결</span>
<span class="line">             * - 성공하면 Connection 객체를 반환</span>
<span class="line">             */</span></span>
<span class="line">            </span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"✅ 데이터베이스 연결 성공!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            </span>
<span class="line">            <span class="token comment">// 여기서 실제 SQL 작업들을 수행합니다</span></span>
<span class="line">            <span class="token comment">// (테이블 생성, 데이터 삽입, 조회 등)</span></span>
<span class="line">            </span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 데이터베이스 연결이나 SQL 실행 중 문제가 발생했을 때 실행됩니다</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"❌ 연결 실패: "</span> <span class="token operator">+</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 자세한 에러 정보를 출력</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// try-with-resources 덕분에 여기서 자동으로 conn.close()가 호출됩니다!</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2단계-테이블-생성-ddl" tabindex="-1"><a class="header-anchor" href="#_2단계-테이블-생성-ddl"><span>2단계: 테이블 생성 (DDL)</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// 3️⃣ 트랜잭션을 수동으로 관리하기 위해 자동 커밋을 끕니다</span></span>
<span class="line"><span class="token comment">// autoCommit이 true이면 SQL 하나 실행할 때마다 바로 저장됩니다</span></span>
<span class="line"><span class="token comment">// false로 설정하면 우리가 직접 commit()을 호출해야 저장됩니다</span></span>
<span class="line">conn<span class="token punctuation">.</span><span class="token function">setAutoCommit</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 4️⃣ DDL(Data Definition Language): 테이블의 구조를 정의하는 SQL</span></span>
<span class="line"><span class="token comment">// CREATE, DROP, ALTER 등이 DDL에 속합니다</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Statement</span> st <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">     * Statement 객체는 SQL 문자열을 그대로 실행하는 도구입니다</span>
<span class="line">     * - DDL처럼 고정된 SQL을 실행할 때 주로 사용</span>
<span class="line">     * - 사용자 입력이 들어가는 곳에는 사용하면 안됩니다 (보안 위험!)</span>
<span class="line">     */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 기존에 같은 이름의 테이블이 있다면 삭제합니다</span></span>
<span class="line">    <span class="token comment">// IF EXISTS를 붙이면 테이블이 없어도 에러가 나지 않습니다</span></span>
<span class="line">    st<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token string">"DROP TABLE IF EXISTS members"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 새로운 members 테이블을 생성합니다</span></span>
<span class="line">    st<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token triple-quoted-string string">"""</span>
<span class="line">        CREATE TABLE members (</span>
<span class="line">            id BIGINT PRIMARY KEY AUTO_INCREMENT,        -- 자동 증가하는 고유 번호 (기본키)</span>
<span class="line">            name VARCHAR(100) NOT NULL,                  -- 이름 (최대 100글자, 필수)</span>
<span class="line">            email VARCHAR(200) NOT NULL UNIQUE,          -- 이메일 (최대 200글자, 필수, 중복 불가)</span>
<span class="line">            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- 생성 시간 (자동으로 현재 시간 입력)</span>
<span class="line">        )</span>
<span class="line">    """</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">     * executeUpdate() 메서드:</span>
<span class="line">     * - INSERT, UPDATE, DELETE, CREATE, DROP 등에 사용</span>
<span class="line">     * - 영향받은 행의 수를 int로 반환 (CREATE, DROP은 0 반환)</span>
<span class="line">     * - SELECT에는 사용할 수 없음 (SELECT는 executeQuery() 사용)</span>
<span class="line">     */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"✅ 테이블 생성 완료!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3단계-데이터-삽입-dml" tabindex="-1"><a class="header-anchor" href="#_3단계-데이터-삽입-dml"><span>3단계: 데이터 삽입 (DML)</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// 5️⃣ DML(Data Manipulation Language): 데이터를 조작하는 SQL</span></span>
<span class="line"><span class="token comment">// INSERT, UPDATE, DELETE가 DML에 속합니다</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Statement</span> st <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">     * INSERT 문 설명:</span>
<span class="line">     * - INTO members(컬럼명들): 어떤 테이블의 어떤 컬럼에 넣을지 지정</span>
<span class="line">     * - VALUES (값들): 실제로 넣을 데이터들</span>
<span class="line">     * - id는 AUTO_INCREMENT라서 자동으로 1, 2, 3... 이렇게 들어갑니다</span>
<span class="line">     * - created_at은 DEFAULT CURRENT_TIMESTAMP라서 현재 시간이 자동으로 들어갑니다</span>
<span class="line">     */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 첫 번째 회원 정보 삽입</span></span>
<span class="line">    st<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token string">"INSERT INTO members(name, email) VALUES ('Alice','alice@example.com')"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 두 번째 회원 정보 삽입  </span></span>
<span class="line">    st<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token string">"INSERT INTO members(name, email) VALUES ('Bob','bob@example.com')"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 세 번째 회원 정보 삽입</span></span>
<span class="line">    st<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token string">"INSERT INTO members(name, email) VALUES ('Charlie','charlie@example.com')"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">     * 왜 여러 번 executeUpdate()를 호출했을까?</span>
<span class="line">     * - 간단한 예시이기 때문입니다</span>
<span class="line">     * - 실무에서는 PreparedStatement의 batch 기능을 사용해서 한 번에 처리합니다</span>
<span class="line">     * - 또는 반복문을 사용해서 더 효율적으로 처리합니다</span>
<span class="line">     */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"✅ 데이터 삽입 완료!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4단계-데이터-조회-select" tabindex="-1"><a class="header-anchor" href="#_4단계-데이터-조회-select"><span>4단계: 데이터 조회 (SELECT)</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// 6️⃣ SELECT: 데이터베이스에서 데이터를 조회하는 SQL</span></span>
<span class="line"><span class="token comment">// try-with-resources에 Statement와 ResultSet을 모두 선언합니다</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Statement</span> st <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">     <span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> st<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token string">"SELECT id, name, email, created_at FROM members ORDER BY id"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">     </span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">     * executeQuery() vs executeUpdate() 차이점:</span>
<span class="line">     * - executeQuery(): SELECT문에 사용, ResultSet을 반환 (데이터를 가져올 때)</span>
<span class="line">     * - executeUpdate(): INSERT, UPDATE, DELETE, CREATE, DROP에 사용, int를 반환 (데이터를 변경할 때)</span>
<span class="line">     */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"\n📋 회원 목록:"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 7️⃣ ResultSet으로 조회 결과를 하나씩 읽어옵니다</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">/*</span>
<span class="line">         * rs.next()의 동작 방식:</span>
<span class="line">         * - 처음에는 첫 번째 행 이전을 가리키고 있습니다</span>
<span class="line">         * - next()를 호출하면 다음 행으로 이동합니다</span>
<span class="line">         * - 더 이상 행이 없으면 false를 반환해서 while 루프가 종료됩니다</span>
<span class="line">         * </span>
<span class="line">         * 데이터 타입별 메서드:</span>
<span class="line">         * - rs.getLong(): BIGINT 컬럼값을 long으로 가져옴</span>
<span class="line">         * - rs.getString(): VARCHAR, TEXT 컬럼값을 String으로 가져옴  </span>
<span class="line">         * - rs.getInt(): INT 컬럼값을 int로 가져옴</span>
<span class="line">         * - rs.getTimestamp(): TIMESTAMP 컬럼값을 Timestamp로 가져옴</span>
<span class="line">         */</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 컬럼 이름으로 데이터를 가져와서 출력합니다</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"ID: %d | 이름: %s | 이메일: %s | 가입일: %s%n"</span><span class="token punctuation">,</span></span>
<span class="line">            rs<span class="token punctuation">.</span><span class="token function">getLong</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>           <span class="token comment">// id 컬럼의 값을 long으로 가져옴</span></span>
<span class="line">            rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>       <span class="token comment">// name 컬럼의 값을 String으로 가져옴</span></span>
<span class="line">            rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"email"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>      <span class="token comment">// email 컬럼의 값을 String으로 가져옴</span></span>
<span class="line">            rs<span class="token punctuation">.</span><span class="token function">getTimestamp</span><span class="token punctuation">(</span><span class="token string">"created_at"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// created_at 컬럼의 값을 Timestamp로 가져옴</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">/*</span>
<span class="line">         * printf()의 %d, %s, %n 의미:</span>
<span class="line">         * - %d: 정수(decimal) 출력</span>
<span class="line">         * - %s: 문자열(string) 출력  </span>
<span class="line">         * - %n: 줄바꿈 (운영체제에 맞는 줄바꿈 문자)</span>
<span class="line">         */</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 8️⃣ 모든 변경사항을 데이터베이스에 실제로 저장합니다</span></span>
<span class="line">conn<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/*</span>
<span class="line"> * 트랜잭션이란?</span>
<span class="line"> * - 여러 개의 SQL을 하나의 단위로 묶어서 처리하는 것</span>
<span class="line"> * - 모든 SQL이 성공하면 commit()으로 저장</span>
<span class="line"> * - 하나라도 실패하면 rollback()으로 모든 변경사항 취소</span>
<span class="line"> * - 은행 송금을 생각해보세요: 출금과 입금이 모두 성공해야 완료!</span>
<span class="line"> */</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="💡-try-with-resources가-뭔가요" tabindex="-1"><a class="header-anchor" href="#💡-try-with-resources가-뭔가요"><span>💡 try-with-resources가 뭔가요?</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// ❌ 전통적인 방법: 수동으로 자원 해제 (번거롭고 실수하기 쉬움)</span></span>
<span class="line"><span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 데이터베이스 연결</span></span>
<span class="line">    conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> user<span class="token punctuation">,</span> pass<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 실제 작업 수행</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">    </span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 에러 처리</span></span>
<span class="line">    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 반드시 연결을 끊어야 합니다 (메모리 누수 방지)</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>conn <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">            conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 수동으로 연결 해제</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ✅ try-with-resources 방법: 자동으로 자원 해제 (안전하고 간편함)</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> user<span class="token punctuation">,</span> pass<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">     * try-with-resources의 장점:</span>
<span class="line">     * 1. 자동 해제: 블록이 끝나면 자동으로 close() 호출</span>
<span class="line">     * 2. 예외 안전성: 에러가 나도 반드시 자원이 해제됨</span>
<span class="line">     * 3. 코드 간소화: finally 블록이 필요 없음</span>
<span class="line">     * </span>
<span class="line">     * 조건: AutoCloseable 인터페이스를 구현한 객체만 사용 가능</span>
<span class="line">     * → Connection, Statement, ResultSet 모두 이 조건을 만족합니다</span>
<span class="line">     */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 실제 작업 수행</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">    </span>
<span class="line"><span class="token punctuation">}</span> <span class="token comment">// 여기서 자동으로 conn.close() 호출됨!</span></span>
<span class="line"><span class="token comment">// 에러가 발생해도 반드시 close()가 호출되므로 안전합니다</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="🛡️-실습-2-sql-injection-보안" tabindex="-1"><a class="header-anchor" href="#🛡️-실습-2-sql-injection-보안"><span>🛡️ 실습 2: SQL Injection 보안</span></a></h2>
<h3 id="⚠️-위험한-코드-statement-사용" tabindex="-1"><a class="header-anchor" href="#⚠️-위험한-코드-statement-사용"><span>⚠️ 위험한 코드: Statement 사용</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// 🚨 절대 이렇게 하면 안 되는 위험한 코드입니다!</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 사용자가 입력한 값들 (웹 폼, 콘솔 입력 등에서 온 값)</span></span>
<span class="line"><span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">"admin' OR '1'='1"</span><span class="token punctuation">;</span>  <span class="token comment">// 악의적인 입력!</span></span>
<span class="line"><span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">"anything"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 위험한 방법: 사용자 입력을 직접 문자열에 붙여서 SQL 만들기</span></span>
<span class="line"><span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"SELECT * FROM users WHERE username='"</span> <span class="token operator">+</span> username <span class="token operator">+</span> <span class="token string">"' AND password='"</span> <span class="token operator">+</span> password <span class="token operator">+</span> <span class="token string">"'"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/*</span>
<span class="line"> * 실제로 만들어지는 SQL:</span>
<span class="line"> * SELECT * FROM users WHERE username='admin' OR '1'='1' AND password='anything'</span>
<span class="line"> * </span>
<span class="line"> * 문제점 분석:</span>
<span class="line"> * 1. username='admin' → admin 사용자를 찾거나</span>
<span class="line"> * 2. '1'='1' → 이 조건은 항상 참이므로</span>
<span class="line"> * 3. 결국 모든 사용자 정보가 조회됩니다!</span>
<span class="line"> * </span>
<span class="line"> * 이것이 바로 SQL Injection 공격입니다!</span>
<span class="line"> * 해커가 로그인 없이도 모든 데이터에 접근할 수 있게 됩니다.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 위험한 SQL 실행 (실제로는 하면 안 됩니다!)</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Statement</span> st <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">     <span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> st<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">     </span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"❌ 해킹 성공! 로그인 우회됨: "</span> <span class="token operator">+</span> rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 해커가 아무 비밀번호나 입력해도 로그인됩니다!</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="✅-안전한-코드-preparedstatement-사용" tabindex="-1"><a class="header-anchor" href="#✅-안전한-코드-preparedstatement-사용"><span>✅ 안전한 코드: PreparedStatement 사용</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// ✅ 이렇게 해야 안전합니다!</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 같은 악의적인 입력</span></span>
<span class="line"><span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">"admin' OR '1'='1"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">"anything"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 안전한 방법: ? 자리표시자(placeholder)를 사용한 SQL</span></span>
<span class="line"><span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"SELECT * FROM users WHERE username=? AND password=?"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">PreparedStatement</span> ps <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">     * PreparedStatement의 동작 원리:</span>
<span class="line">     * 1. SQL 구조를 미리 분석하고 컴파일 (prepare)</span>
<span class="line">     * 2. ? 자리에 들어갈 값들을 별도로 바인딩</span>
<span class="line">     * 3. 데이터베이스가 값을 '데이터'로만 처리, 'SQL 코드'로 인식하지 않음</span>
<span class="line">     */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 첫 번째 ?에 username 값을 안전하게 바인딩</span></span>
<span class="line">    ps<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> username<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 1번째 ? 자리에 username 넣기</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 두 번째 ?에 password 값을 안전하게 바인딩  </span></span>
<span class="line">    ps<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 2번째 ? 자리에 password 넣기</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">     * setString()이 하는 일:</span>
<span class="line">     * - 문자열 안의 특수문자들을 자동으로 이스케이프 처리</span>
<span class="line">     * - 'admin' OR '1'='1' → 'admin\' OR \'1\'=\'1\' </span>
<span class="line">     * - 결국 username으로 "admin' OR '1'='1" 라는 이상한 이름을 찾게 됨</span>
<span class="line">     * - 그런 사용자는 없으므로 로그인 실패!</span>
<span class="line">     */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"🔒 실행될 SQL: "</span> <span class="token operator">+</span> sql<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"🔒 파라미터: ["</span> <span class="token operator">+</span> username <span class="token operator">+</span> <span class="token string">", ******]"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> ps<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"✅ 정상 로그인: "</span> <span class="token operator">+</span> rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"❌ 로그인 실패 - 해킹 시도가 차단되었습니다!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🔄-statement-vs-preparedstatement-비교" tabindex="-1"><a class="header-anchor" href="#🔄-statement-vs-preparedstatement-비교"><span>🔄 Statement vs PreparedStatement 비교</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> LR</span>
<span class="line">    <span class="token keyword">subgraph</span> Statement <span class="token text string">[Statement - 위험]</span></span>
<span class="line">        A1<span class="token text string">[사용자 입력]</span> <span class="token arrow operator">--></span> A2<span class="token text string">[문자열 연결]</span></span>
<span class="line">        A2 <span class="token arrow operator">--></span> A3<span class="token text string">[SQL 실행]</span></span>
<span class="line">        A3 <span class="token arrow operator">--></span> A4<span class="token text string">[🚨 인젝션 취약]</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">subgraph</span> PreparedStatement <span class="token text string">[PreparedStatement - 안전]</span></span>
<span class="line">        B1<span class="token text string">[사용자 입력]</span> <span class="token arrow operator">--></span> B2<span class="token text string">[파라미터 바인딩]</span></span>
<span class="line">        B2 <span class="token arrow operator">--></span> B3<span class="token text string">[SQL 실행]</span></span>
<span class="line">        B3 <span class="token arrow operator">--></span> B4<span class="token text string">[✅ 인젝션 방지]</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="🏗️-실습-3-dao-패턴-적용" tabindex="-1"><a class="header-anchor" href="#🏗️-실습-3-dao-패턴-적용"><span>🏗️ 실습 3: DAO 패턴 적용</span></a></h2>
<h3 id="dao-패턴이란" tabindex="-1"><a class="header-anchor" href="#dao-패턴이란"><span>DAO 패턴이란?</span></a></h3>
<p>**DAO (Data Access Object)**는 데이터베이스 접근 로직을 별도 클래스로 분리하는 디자인 패턴입니다.</p>
<h3 id="📊-데이터베이스-설계" tabindex="-1"><a class="header-anchor" href="#📊-데이터베이스-설계"><span>📊 데이터베이스 설계</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">erDiagram</span></span>
<span class="line">    MEMBERS <span class="token punctuation">{</span></span>
<span class="line">        BIGINT id PK</span>
<span class="line">        VARCHAR username</span>
<span class="line">        VARCHAR email</span>
<span class="line">        VARCHAR grade</span>
<span class="line">        TIMESTAMP created_at</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    PRODUCTS <span class="token punctuation">{</span></span>
<span class="line">        BIGINT id PK</span>
<span class="line">        VARCHAR name</span>
<span class="line">        INT price</span>
<span class="line">        TIMESTAMP created_at</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    ORDERS <span class="token punctuation">{</span></span>
<span class="line">        BIGINT id PK</span>
<span class="line">        BIGINT member_id FK</span>
<span class="line">        TIMESTAMP ordered_at</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    ORDER_ITEMS <span class="token punctuation">{</span></span>
<span class="line">        BIGINT id PK</span>
<span class="line">        BIGINT order_id FK</span>
<span class="line">        BIGINT product_id FK</span>
<span class="line">        INT quantity</span>
<span class="line">        INT unit_price</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    MEMBERS <span class="token arrow operator">||--o{</span> ORDERS <span class="token operator">:</span> <span class="token string">"주문하다"</span></span>
<span class="line">    ORDERS <span class="token arrow operator">||--o{</span> ORDER_ITEMS <span class="token operator">:</span> <span class="token string">"포함하다"</span></span>
<span class="line">    PRODUCTS <span class="token arrow operator">||--o{</span> ORDER_ITEMS <span class="token operator">:</span> <span class="token string">"주문되다"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1단계-dto-data-transfer-object-정의" tabindex="-1"><a class="header-anchor" href="#_1단계-dto-data-transfer-object-정의"><span>1단계: DTO (Data Transfer Object) 정의</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// 📦 DTO란 데이터를 담아서 전달하는 상자 같은 객체입니다</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/*</span>
<span class="line"> * Java 17의 record 문법:</span>
<span class="line"> * - 예전에는 class를 만들고 getter, setter, equals, hashCode 등을 직접 작성해야 했음</span>
<span class="line"> * - record는 이 모든 것을 자동으로 만들어줍니다!</span>
<span class="line"> * - 불변(immutable) 객체: 한 번 만들어지면 값을 바꿀 수 없어서 안전함</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 회원 정보를 담는 DTO</span></span>
<span class="line"><span class="token keyword">record</span> <span class="token class-name">Member</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">,</span> <span class="token class-name">String</span> username<span class="token punctuation">,</span> <span class="token class-name">String</span> email<span class="token punctuation">,</span> <span class="token class-name">String</span> grade<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">     * 이 한 줄이 다음과 같은 코드를 자동 생성합니다:</span>
<span class="line">     * - private final Long id; (필드들)</span>
<span class="line">     * - public Long id() { return id; } (getter 메서드들)</span>
<span class="line">     * - public boolean equals(Object o) (동등성 비교)</span>
<span class="line">     * - public int hashCode() (해시코드)</span>
<span class="line">     * - public String toString() (문자열 변환)</span>
<span class="line">     * - 생성자: new Member(1L, "alice", "alice@example.com", "BASIC")</span>
<span class="line">     */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 상품 정보를 담는 DTO  </span></span>
<span class="line"><span class="token keyword">record</span> <span class="token class-name">Product</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> price<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// price는 원화 기준 정수</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 주문 헤더 정보를 담는 DTO</span></span>
<span class="line"><span class="token keyword">record</span> <span class="token class-name">OrderHeader</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">,</span> <span class="token class-name">Long</span> memberId<span class="token punctuation">,</span> <span class="token class-name">Timestamp</span> orderedAt<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 주문 상품 정보를 담는 DTO</span></span>
<span class="line"><span class="token keyword">record</span> <span class="token class-name">OrderItem</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">,</span> <span class="token class-name">Long</span> orderId<span class="token punctuation">,</span> <span class="token class-name">Long</span> productId<span class="token punctuation">,</span> <span class="token keyword">int</span> quantity<span class="token punctuation">,</span> <span class="token keyword">int</span> unitPrice<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 주문 요약 정보를 담는 DTO (여러 테이블을 JOIN한 결과)</span></span>
<span class="line"><span class="token keyword">record</span> <span class="token class-name">OrderSummary</span><span class="token punctuation">(</span><span class="token class-name">Long</span> orderId<span class="token punctuation">,</span> <span class="token class-name">String</span> memberName<span class="token punctuation">,</span> <span class="token keyword">int</span> itemCount<span class="token punctuation">,</span> <span class="token keyword">int</span> totalAmount<span class="token punctuation">,</span> <span class="token class-name">Timestamp</span> orderedAt<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">     * 이 DTO는 실제 테이블과 1:1 대응되지 않습니다</span>
<span class="line">     * 여러 테이블을 JOIN해서 나온 결과를 담기 위한 용도입니다</span>
<span class="line">     * 예: orders + members + order_items 테이블을 합쳐서 주문 요약 정보 생성</span>
<span class="line">     */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2단계-dao-인터페이스-정의" tabindex="-1"><a class="header-anchor" href="#_2단계-dao-인터페이스-정의"><span>2단계: DAO 인터페이스 정의</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// 🏗️ DAO (Data Access Object) 패턴이란?</span></span>
<span class="line"><span class="token comment">// 데이터베이스 접근 로직을 별도 클래스로 분리하는 설계 패턴입니다</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/*</span>
<span class="line"> * 왜 인터페이스를 먼저 정의할까?</span>
<span class="line"> * 1. 추상화: 구체적인 구현 방법을 숨기고, 무엇을 할 수 있는지만 정의</span>
<span class="line"> * 2. 확장성: 나중에 JDBC → JPA로 바꿔도 인터페이스는 그대로 사용 가능</span>
<span class="line"> * 3. 테스트: 가짜 구현체를 만들어서 테스트하기 쉬움</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 회원 데이터 접근을 담당하는 DAO 인터페이스</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">MemberDAO</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">     * save(): 새로운 회원을 데이터베이스에 저장</span>
<span class="line">     * - Member 객체를 받아서 INSERT 실행</span>
<span class="line">     * - 자동 생성된 ID를 Long으로 반환</span>
<span class="line">     * - Connection을 매개변수로 받는 이유: 트랜잭션 관리를 호출자가 담당</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token class-name">Long</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token class-name">Member</span> member<span class="token punctuation">,</span> <span class="token class-name">Connection</span> conn<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">     * findById(): ID로 특정 회원 한 명을 찾기</span>
<span class="line">     * - Optional&lt;Member>를 반환하는 이유: 해당 ID의 회원이 없을 수도 있으니까</span>
<span class="line">     * - Optional.empty(): 회원이 없을 때</span>
<span class="line">     * - Optional.of(member): 회원이 있을 때</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Member</span><span class="token punctuation">></span></span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">,</span> <span class="token class-name">Connection</span> conn<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">     * findAll(): 모든 회원 목록 가져오기</span>
<span class="line">     * - List&lt;Member>로 반환: 여러 명의 회원을 담은 리스트</span>
<span class="line">     * - 빈 리스트가 반환될 수 있음 (회원이 아무도 없을 때)</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Member</span><span class="token punctuation">></span></span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 상품 데이터 접근을 담당하는 DAO 인터페이스 (회원 DAO와 구조가 비슷함)</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">ProductDAO</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">Long</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token class-name">Product</span> product<span class="token punctuation">,</span> <span class="token class-name">Connection</span> conn<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Product</span><span class="token punctuation">></span></span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">,</span> <span class="token class-name">Connection</span> conn<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Product</span><span class="token punctuation">></span></span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 주문 데이터 접근을 담당하는 DAO 인터페이스</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">OrderDAO</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">     * placeOrder(): 주문하기 (복잡한 비즈니스 로직)</span>
<span class="line">     * - memberId: 누가 주문하는지</span>
<span class="line">     * - productIdToQty: 어떤 상품을 몇 개씩 주문하는지 (Map으로 표현)</span>
<span class="line">     *   예: {1L: 2, 3L: 1} → 상품1번을 2개, 상품3번을 1개</span>
<span class="line">     * - 여러 테이블에 데이터를 삽입해야 하므로 트랜잭션 필수!</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token class-name">Long</span> <span class="token function">placeOrder</span><span class="token punctuation">(</span><span class="token class-name">Long</span> memberId<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">></span></span> productIdToQty<span class="token punctuation">,</span> <span class="token class-name">Connection</span> conn<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">     * findOrderSummaries(): 주문 요약 목록 조회 (복잡한 JOIN 쿼리)</span>
<span class="line">     * - 여러 테이블을 JOIN해서 사람이 보기 좋은 형태로 데이터 조합</span>
<span class="line">     * - 주문번호, 주문자명, 주문 상품 개수, 총 금액 등을 한 번에 조회</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OrderSummary</span><span class="token punctuation">></span></span> <span class="token function">findOrderSummaries</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3단계-dao-구현체-작성" tabindex="-1"><a class="header-anchor" href="#_3단계-dao-구현체-작성"><span>3단계: DAO 구현체 작성</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// 🔧 실제로 JDBC를 사용해서 데이터베이스 작업을 수행하는 구현체</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">JdbcMemberDAO</span> <span class="token keyword">implements</span> <span class="token class-name">MemberDAO</span> <span class="token punctuation">{</span></span>
<span class="line">    </span>
<span class="line">    <span class="token annotation punctuation">@Override</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">Long</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token class-name">Member</span> m<span class="token punctuation">,</span> <span class="token class-name">Connection</span> conn<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// INSERT 후 자동 생성된 ID를 가져오는 SQL</span></span>
<span class="line">        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"INSERT INTO members(username, email, grade) VALUES(?, ?, ?)"</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">/*</span>
<span class="line">         * prepareStatement()에 두 번째 매개변수 설명:</span>
<span class="line">         * - Statement.RETURN_GENERATED_KEYS: 자동 증가된 ID 값을 반환하도록 설정</span>
<span class="line">         * - 이 설정이 없으면 INSERT 후에 생성된 ID를 알 수 없습니다</span>
<span class="line">         */</span></span>
<span class="line">        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">PreparedStatement</span> ps <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token class-name">Statement</span><span class="token punctuation">.</span><span class="token constant">RETURN_GENERATED_KEYS</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            </span>
<span class="line">            <span class="token comment">// ? 자리표시자에 실제 값들을 바인딩 (순서대로 1, 2, 3...)</span></span>
<span class="line">            ps<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> m<span class="token punctuation">.</span><span class="token function">username</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 첫 번째 ? 자리에 사용자명</span></span>
<span class="line">            ps<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> m<span class="token punctuation">.</span><span class="token function">email</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 두 번째 ? 자리에 이메일</span></span>
<span class="line">            ps<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> m<span class="token punctuation">.</span><span class="token function">grade</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 세 번째 ? 자리에 등급</span></span>
<span class="line">            </span>
<span class="line">            <span class="token comment">/*</span>
<span class="line">             * executeUpdate() 실행:</span>
<span class="line">             * - INSERT, UPDATE, DELETE에 사용하는 메서드</span>
<span class="line">             * - 영향받은 행의 개수를 int로 반환 (여기서는 1이 반환됨)</span>
<span class="line">             * - SELECT에는 executeQuery()를 사용해야 함!</span>
<span class="line">             */</span></span>
<span class="line">            ps<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            </span>
<span class="line">            <span class="token comment">// 자동 생성된 ID 값을 가져오기</span></span>
<span class="line">            <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> ps<span class="token punctuation">.</span><span class="token function">getGeneratedKeys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">/*</span>
<span class="line">                 * getGeneratedKeys(): </span>
<span class="line">                 * - AUTO_INCREMENT로 자동 생성된 키 값들을 ResultSet으로 반환</span>
<span class="line">                 * - 보통 ID 하나만 생성되므로 rs.next() 한 번만 호출</span>
<span class="line">                 * - rs.getLong(1): 첫 번째 컬럼(생성된 ID)을 long으로 가져옴</span>
<span class="line">                 */</span></span>
<span class="line">                rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">return</span> rs<span class="token punctuation">.</span><span class="token function">getLong</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 생성된 ID 반환</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token annotation punctuation">@Override</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Member</span><span class="token punctuation">></span></span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">,</span> <span class="token class-name">Connection</span> conn<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 특정 ID로 회원 한 명을 찾는 SQL</span></span>
<span class="line">        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"SELECT id, username, email, grade FROM members WHERE id = ?"</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">PreparedStatement</span> ps <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            ps<span class="token punctuation">.</span><span class="token function">setLong</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// ? 자리에 찾고자 하는 ID 값 바인딩</span></span>
<span class="line">            </span>
<span class="line">            <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> ps<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">/*</span>
<span class="line">                 * 조회 결과 처리:</span>
<span class="line">                 * - rs.next()가 false면 해당 ID의 회원이 없음 → Optional.empty() 반환</span>
<span class="line">                 * - rs.next()가 true면 회원이 존재 → Member 객체로 만들어서 Optional.of()로 감싸서 반환</span>
<span class="line">                 */</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">return</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 회원이 없을 때</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                </span>
<span class="line">                <span class="token comment">// 회원이 있을 때: ResultSet에서 데이터를 꺼내서 Member 객체 생성</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Member</span><span class="token punctuation">(</span></span>
<span class="line">                    rs<span class="token punctuation">.</span><span class="token function">getLong</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>           <span class="token comment">// id 컬럼값</span></span>
<span class="line">                    rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>   <span class="token comment">// username 컬럼값</span></span>
<span class="line">                    rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"email"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>      <span class="token comment">// email 컬럼값</span></span>
<span class="line">                    rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"grade"</span><span class="token punctuation">)</span>       <span class="token comment">// grade 컬럼값</span></span>
<span class="line">                <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token annotation punctuation">@Override</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Member</span><span class="token punctuation">></span></span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 모든 회원을 ID 순으로 정렬해서 가져오는 SQL</span></span>
<span class="line">        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"SELECT id, username, email, grade FROM members ORDER BY id"</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">PreparedStatement</span> ps <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">             <span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> ps<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">             </span>
<span class="line">            <span class="token comment">/*</span>
<span class="line">             * 여러 행의 결과를 처리하는 방법:</span>
<span class="line">             * 1. 빈 ArrayList 생성</span>
<span class="line">             * 2. while (rs.next()) 루프로 모든 행을 순회</span>
<span class="line">             * 3. 각 행마다 Member 객체를 만들어서 리스트에 추가</span>
<span class="line">             * 4. 완성된 리스트 반환</span>
<span class="line">             */</span></span>
<span class="line">             </span>
<span class="line">            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Member</span><span class="token punctuation">></span></span> members <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 회원들을 담을 빈 리스트</span></span>
<span class="line">            </span>
<span class="line">            <span class="token keyword">while</span> <span class="token punctuation">(</span>rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 다음 행이 있는 동안 반복</span></span>
<span class="line">                <span class="token comment">// 현재 행의 데이터로 Member 객체 생성</span></span>
<span class="line">                <span class="token class-name">Member</span> member <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Member</span><span class="token punctuation">(</span></span>
<span class="line">                    rs<span class="token punctuation">.</span><span class="token function">getLong</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                    rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                    rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"email"</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                    rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"grade"</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                </span>
<span class="line">                members<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>member<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 리스트에 추가</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            </span>
<span class="line">            <span class="token keyword">return</span> members<span class="token punctuation">;</span>  <span class="token comment">// 모든 회원이 담긴 리스트 반환</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="🎯-실습별-학습-포인트" tabindex="-1"><a class="header-anchor" href="#🎯-실습별-학습-포인트"><span>🎯 실습별 학습 포인트</span></a></h2>
<h3 id="📋-실습-1-기본-crud" tabindex="-1"><a class="header-anchor" href="#📋-실습-1-기본-crud"><span>📋 실습 1: 기본 CRUD</span></a></h3>
<p><strong>목표</strong>: JDBC 기본 사용법 익히기</p>
<p><strong>핵심 개념</strong>:</p>
<ul>
<li>Database 연결 방법</li>
<li>try-with-resources로 자원 관리</li>
<li>DDL, DML, SELECT 기본 실행</li>
</ul>
<p><strong>체크포인트</strong>:</p>
<ul>
<li>[ ] 데이터베이스 연결 성공</li>
<li>[ ] 테이블 생성 확인</li>
<li>[ ] 데이터 삽입/조회 확인</li>
</ul>
<h3 id="🔒-실습-2-sql-injection-보안" tabindex="-1"><a class="header-anchor" href="#🔒-실습-2-sql-injection-보안"><span>🔒 실습 2: SQL Injection 보안</span></a></h3>
<p><strong>목표</strong>: 보안 취약점 이해하고 방지하기</p>
<p><strong>위험한 입력 예시</strong>:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">username: admin' OR '1'='1</span>
<span class="line">password: anything</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>학습 포인트</strong>:</p>
<ul>
<li>Statement의 보안 위험성</li>
<li>PreparedStatement의 안전성</li>
<li>파라미터 바인딩의 중요성</li>
</ul>
<h3 id="🏛️-실습-3-dao-패턴" tabindex="-1"><a class="header-anchor" href="#🏛️-실습-3-dao-패턴"><span>🏛️ 실습 3: DAO 패턴</span></a></h3>
<p><strong>목표</strong>: 코드 구조화와 재사용성 향상</p>
<p><strong>아키텍처 흐름</strong>:</p>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">[Main 메서드]</span> <span class="token arrow operator">--></span> B<span class="token text string">[DAO 인터페이스]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> C<span class="token text string">[JDBC 구현체]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> D<span class="token text string">[Database]</span></span>
<span class="line">    </span>
<span class="line">    E<span class="token text string">[DTO]</span> <span class="token arrow operator">--></span> B</span>
<span class="line">    F<span class="token text string">[Connection]</span> <span class="token arrow operator">--></span> C</span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">style</span> A <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e1f5fe</span></span>
<span class="line">    <span class="token keyword">style</span> B <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f3e5f5</span></span>
<span class="line">    <span class="token keyword">style</span> C <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e8f5e8</span></span>
<span class="line">    <span class="token keyword">style</span> D <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#fff3e0</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>장점</strong>:</p>
<ul>
<li>코드 재사용성 증가</li>
<li>비즈니스 로직과 DB 로직 분리</li>
<li>테스트 용이성 향상</li>
<li>JPA 전환 시 구현체만 교체하면 됨</li>
</ul>
<hr>
<h2 id="🔄-jdbc-실행-흐름" tabindex="-1"><a class="header-anchor" href="#🔄-jdbc-실행-흐름"><span>🔄 JDBC 실행 흐름</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">sequenceDiagram</span></span>
<span class="line">    <span class="token keyword">participant</span> App as Java Application</span>
<span class="line">    <span class="token keyword">participant</span> DM as DriverManager</span>
<span class="line">    <span class="token keyword">participant</span> Conn as Connection</span>
<span class="line">    <span class="token keyword">participant</span> PS as PreparedStatement</span>
<span class="line">    <span class="token keyword">participant</span> DB as Database</span>
<span class="line">    </span>
<span class="line">    App<span class="token arrow operator">->></span>DM<span class="token operator">:</span> getConnection<span class="token text string">(url, user, pass)</span></span>
<span class="line">    DM<span class="token arrow operator">->></span>Conn<span class="token operator">:</span> 연결 생성</span>
<span class="line">    Conn<span class="token arrow operator">-->></span>App<span class="token operator">:</span> Connection 반환</span>
<span class="line">    </span>
<span class="line">    App<span class="token arrow operator">->></span>Conn<span class="token operator">:</span> prepareStatement<span class="token text string">(sql)</span></span>
<span class="line">    Conn<span class="token arrow operator">->></span>PS<span class="token operator">:</span> PreparedStatement 생성</span>
<span class="line">    PS<span class="token arrow operator">-->></span>App<span class="token operator">:</span> PreparedStatement 반환</span>
<span class="line">    </span>
<span class="line">    App<span class="token arrow operator">->></span>PS<span class="token operator">:</span> setString<span class="token text string">(1, "value")</span></span>
<span class="line">    App<span class="token arrow operator">->></span>PS<span class="token operator">:</span> executeQuery<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    PS<span class="token arrow operator">->></span>DB<span class="token operator">:</span> SQL 실행</span>
<span class="line">    DB<span class="token arrow operator">-->></span>PS<span class="token operator">:</span> ResultSet 반환</span>
<span class="line">    PS<span class="token arrow operator">-->></span>App<span class="token operator">:</span> 결과 반환</span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">Note over</span> App<span class="token operator">:</span> try-with-resources로&lt;br/>자동 자원 해제</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="💡-초보자를-위한-팁" tabindex="-1"><a class="header-anchor" href="#💡-초보자를-위한-팁"><span>💡 초보자를 위한 팁</span></a></h2>
<h3 id="🎯-기억해야-할-핵심-3가지" tabindex="-1"><a class="header-anchor" href="#🎯-기억해야-할-핵심-3가지"><span>🎯 기억해야 할 핵심 3가지</span></a></h3>
<ol>
<li><strong>try-with-resources 사용</strong>: 자원 해제를 자동화</li>
<li><strong>PreparedStatement 선택</strong>: 보안과 성능을 위해</li>
<li><strong>트랜잭션 관리</strong>: <code v-pre>setAutoCommit(false)</code>, <code v-pre>commit()</code>, <code v-pre>rollback()</code></li>
</ol>
<h2 id="💡-초보자를-위한-팁-1" tabindex="-1"><a class="header-anchor" href="#💡-초보자를-위한-팁-1"><span>💡 초보자를 위한 팁</span></a></h2>
<h3 id="🎯-기억해야-할-핵심-5가지" tabindex="-1"><a class="header-anchor" href="#🎯-기억해야-할-핵심-5가지"><span>🎯 기억해야 할 핵심 5가지</span></a></h3>
<ol>
<li>
<p><strong>try-with-resources 사용</strong>: 자원 해제를 자동화</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// ✅ 좋은 예시</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> user<span class="token punctuation">,</span> pass<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 작업 수행</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token comment">// 자동으로 연결 해제</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>PreparedStatement 선택</strong>: 보안과 성능을 위해</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// ❌ 위험: Statement + 문자열 연결</span></span>
<span class="line"><span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"SELECT * FROM users WHERE name='"</span> <span class="token operator">+</span> userName <span class="token operator">+</span> <span class="token string">"'"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ✅ 안전: PreparedStatement + 파라미터 바인딩</span></span>
<span class="line"><span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"SELECT * FROM users WHERE name=?"</span><span class="token punctuation">;</span></span>
<span class="line">ps<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> userName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>트랜잭션 관리</strong>: 데이터 일관성 보장</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line">conn<span class="token punctuation">.</span><span class="token function">setAutoCommit</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 수동 트랜잭션 시작</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 여러 SQL 작업 수행</span></span>
<span class="line">    conn<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 모든 작업 성공 시 저장</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    conn<span class="token punctuation">.</span><span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 실패 시 모든 변경사항 취소</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>예외 처리</strong>: SQLException 반드시 처리</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// 모든 JDBC 메서드는 SQLException을 던질 수 있음</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// JDBC 작업</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 에러 정보 출력</span></span>
<span class="line">    <span class="token comment">// 필요시 적절한 에러 처리 로직 추가</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>올바른 데이터 타입 매칭</strong>:</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// 데이터베이스 타입 → Java 타입 매칭</span></span>
<span class="line">rs<span class="token punctuation">.</span><span class="token function">getLong</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">// BIGINT → long</span></span>
<span class="line">rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// VARCHAR → String  </span></span>
<span class="line">rs<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token string">"price"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">// INT → int</span></span>
<span class="line">rs<span class="token punctuation">.</span><span class="token function">getTimestamp</span><span class="token punctuation">(</span><span class="token string">"date"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// TIMESTAMP → Timestamp</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="🚨-자주-하는-실수들과-해결책" tabindex="-1"><a class="header-anchor" href="#🚨-자주-하는-실수들과-해결책"><span>🚨 자주 하는 실수들과 해결책</span></a></h3>
<table>
<thead>
<tr>
<th>❌ 실수</th>
<th>✅ 해결책</th>
<th>📝 설명</th>
</tr>
</thead>
<tbody>
<tr>
<td>Connection을 수동으로 close()</td>
<td>try-with-resources 사용</td>
<td>자동으로 자원 해제됨</td>
</tr>
<tr>
<td>Statement로 사용자 입력 처리</td>
<td>PreparedStatement 사용</td>
<td>SQL Injection 방지</td>
</tr>
<tr>
<td>ResultSet에서 next() 없이 접근</td>
<td>while(rs.next()) 또는 if(rs.next())</td>
<td>첫 번째 행으로 이동 후 데이터 접근</td>
</tr>
<tr>
<td>executeQuery()와 executeUpdate() 혼동</td>
<td>SELECT는 Query, 나머지는 Update</td>
<td>Query는 데이터 조회, Update는 데이터 변경</td>
</tr>
<tr>
<td>트랜잭션 관리 누락</td>
<td>setAutoCommit(false) + commit/rollback</td>
<td>데이터 일관성 보장</td>
</tr>
</tbody>
</table>
<h3 id="✅-좋은-코딩-습관" tabindex="-1"><a class="header-anchor" href="#✅-좋은-코딩-습관"><span>✅ 좋은 코딩 습관</span></a></h3>
<p><strong>1. 의미있는 변수명 사용</strong></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// ❌ 나쁜 예시</span></span>
<span class="line"><span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">"SELECT * FROM m WHERE i = ?"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">PreparedStatement</span> p <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ✅ 좋은 예시  </span></span>
<span class="line"><span class="token class-name">String</span> findMemberSql <span class="token operator">=</span> <span class="token string">"SELECT * FROM members WHERE id = ?"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">PreparedStatement</span> findMemberStmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>findMemberSql<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. 주석으로 SQL의 의도 설명</strong></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// 회원 등급별 주문 통계를 조회하는 복잡한 쿼리</span></span>
<span class="line"><span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token triple-quoted-string string">"""</span>
<span class="line">    SELECT </span>
<span class="line">        m.grade,                           -- 회원 등급</span>
<span class="line">        COUNT(DISTINCT o.id) AS order_count,  -- 주문 건수</span>
<span class="line">        SUM(oi.quantity * oi.unit_price) AS total_sales  -- 총 매출액</span>
<span class="line">    FROM members m</span>
<span class="line">        LEFT JOIN orders o ON m.id = o.member_id</span>
<span class="line">        LEFT JOIN order_items oi ON o.id = oi.order_id</span>
<span class="line">    GROUP BY m.grade</span>
<span class="line">    ORDER BY total_sales DESC</span>
<span class="line">"""</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. 에러 상황에 대한 명확한 메시지</strong></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// JDBC 작업</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 구체적인 에러 메시지와 함께 로깅</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"회원 정보 저장 중 오류 발생: "</span> <span class="token operator">+</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"SQL State: "</span> <span class="token operator">+</span> e<span class="token punctuation">.</span><span class="token function">getSQLState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Error Code: "</span> <span class="token operator">+</span> e<span class="token punctuation">.</span><span class="token function">getErrorCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🎓-학습-단계별-체크리스트" tabindex="-1"><a class="header-anchor" href="#🎓-학습-단계별-체크리스트"><span>🎓 학습 단계별 체크리스트</span></a></h3>
<p><strong>🥉 초급 (현재 단계)</strong></p>
<ul>
<li>[ ] 데이터베이스 연결 성공</li>
<li>[ ] 기본 CRUD 작업 (CREATE, READ, UPDATE, DELETE)</li>
<li>[ ] try-with-resources 사용법 이해</li>
<li>[ ] PreparedStatement vs Statement 차이점 이해</li>
<li>[ ] ResultSet으로 조회 결과 처리</li>
</ul>
<p><strong>🥈 중급 (다음 목표)</strong></p>
<ul>
<li>[ ] 트랜잭션 관리 (commit/rollback)</li>
<li>[ ] DAO 패턴 구현</li>
<li>[ ] JOIN 쿼리 작성 및 처리</li>
<li>[ ] Batch 처리로 성능 최적화</li>
<li>[ ] 예외 처리 및 로깅</li>
</ul>
<p><strong>🥇 고급 (최종 목표)</strong></p>
<ul>
<li>[ ] Connection Pool 사용</li>
<li>[ ] Spring JDBC Template 활용</li>
<li>[ ] JPA/Hibernate 전환</li>
<li>[ ] 성능 튜닝 및 모니터링</li>
<li>[ ] 실제 웹 애플리케이션 연동</li>
</ul>
<hr>
<h2 id="🎓-마무리" tabindex="-1"><a class="header-anchor" href="#🎓-마무리"><span>🎓 마무리</span></a></h2>
<h3 id="다음-단계로-가기-위한-로드맵" tabindex="-1"><a class="header-anchor" href="#다음-단계로-가기-위한-로드맵"><span>다음 단계로 가기 위한 로드맵</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> LR</span>
<span class="line">    A<span class="token text string">[JDBC 기초]</span> <span class="token arrow operator">--></span> B<span class="token text string">[Spring JDBC]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> C<span class="token text string">[MyBatis]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> D<span class="token text string">[JPA/Hibernate]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> E<span class="token text string">[Spring Data JPA]</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">style</span> A <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#ffcdd2</span></span>
<span class="line">    <span class="token keyword">style</span> B <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f8bbd9</span></span>
<span class="line">    <span class="token keyword">style</span> C <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e1bee7</span></span>
<span class="line">    <span class="token keyword">style</span> D <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#d1c4e9</span></span>
<span class="line">    <span class="token keyword">style</span> E <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#c5cae9</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🔗-학습-자료-링크" tabindex="-1"><a class="header-anchor" href="#🔗-학습-자료-링크"><span>🔗 학습 자료 링크</span></a></h3>
<ul>
<li><strong>프로젝트</strong>: <a href="https://github.com/yjshin-cloud/250818_jbbc" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
</ul>
<h3 id="📝-오늘-배운-내용-최종-요약" tabindex="-1"><a class="header-anchor" href="#📝-오늘-배운-내용-최종-요약"><span>📝 오늘 배운 내용 최종 요약</span></a></h3>
<p><strong>🎯 핵심 학습 내용</strong></p>
<ol>
<li>
<p><strong>JDBC 기초</strong>: 자바에서 데이터베이스에 연결하고 SQL을 실행하는 표준 방법</p>
<ul>
<li>DriverManager로 연결 생성</li>
<li>Connection으로 세션 관리</li>
<li>Statement/PreparedStatement로 SQL 실행</li>
<li>ResultSet으로 결과 처리</li>
</ul>
</li>
<li>
<p><strong>보안</strong>: SQL Injection 공격 방지</p>
<ul>
<li>Statement의 위험성: 문자열 연결로 인한 코드 삽입 가능</li>
<li>PreparedStatement의 안전성: 파라미터 바인딩으로 안전한 처리</li>
<li>실무에서는 반드시 PreparedStatement 사용!</li>
</ul>
</li>
<li>
<p><strong>아키텍처</strong>: DAO 패턴으로 코드 구조화</p>
<ul>
<li>DTO: 데이터 전달 전용 객체 (Java 17 record 활용)</li>
<li>DAO Interface: 데이터 접근 메서드 정의</li>
<li>DAO Implementation: 실제 JDBC 구현체</li>
<li>장점: 코드 재사용성, 유지보수성, 테스트 용이성</li>
</ul>
</li>
<li>
<p><strong>실무 적용</strong>: 트랜잭션과 예외 처리</p>
<ul>
<li>setAutoCommit(false)로 수동 트랜잭션</li>
<li>commit()으로 저장, rollback()으로 취소</li>
<li>try-with-resources로 자동 자원 해제</li>
<li>SQLException 적절한 처리</li>
</ul>
</li>
</ol>
<p><strong>🚀 실무에서 이렇게 활용됩니다</strong></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// 전형적인 실무 코드 패턴</span></span>
<span class="line"><span class="token annotation punctuation">@Service</span>  <span class="token comment">// Spring Framework에서</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MemberService</span> <span class="token punctuation">{</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">MemberDAO</span> memberDAO<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token annotation punctuation">@Transactional</span>  <span class="token comment">// 선언적 트랜잭션 (Spring)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">Long</span> <span class="token function">registerMember</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">,</span> <span class="token class-name">String</span> email<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 비즈니스 로직: 중복 검사, 유효성 검증 등</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>memberDAO<span class="token punctuation">.</span><span class="token function">findByEmail</span><span class="token punctuation">(</span>email<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isPresent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">"이미 존재하는 이메일입니다"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// DAO를 통한 데이터 저장</span></span>
<span class="line">        <span class="token class-name">Member</span> newMember <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Member</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> username<span class="token punctuation">,</span> email<span class="token punctuation">,</span> <span class="token string">"BASIC"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> memberDAO<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>newMember<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>🔄 다음 학습 단계</strong></p>
<ol>
<li><strong>Spring JDBC</strong>: 더 간편한 JDBC 사용법</li>
<li><strong>MyBatis</strong>: SQL 매퍼 프레임워크</li>
<li><strong>JPA/Hibernate</strong>: 객체 관계 매핑 (ORM)</li>
<li><strong>Spring Data JPA</strong>: 코드 없이 데이터 접근</li>
</ol>
<hr>
<blockquote>
<p>💪 <strong>학습 완료!</strong> 이제 자바로 데이터베이스를 다루는 기초를 마스터했습니다. 다음 단계는 Spring Framework와 함께 더 효율적인 개발 방법을 익혀보세요!</p>
</blockquote>
</div></template>


