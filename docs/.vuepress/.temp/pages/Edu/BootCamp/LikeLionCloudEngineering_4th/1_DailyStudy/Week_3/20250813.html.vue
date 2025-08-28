<template><div><h1 id="mysql-8-0-완전-복습-가이드-📚" tabindex="-1"><a class="header-anchor" href="#mysql-8-0-완전-복습-가이드-📚"><span>MySQL 8.0 완전 복습 가이드 📚</span></a></h1>
<h2 id="_1-환경-설정-및-기본-개념" tabindex="-1"><a class="header-anchor" href="#_1-환경-설정-및-기본-개념"><span>1. 환경 설정 및 기본 개념</span></a></h2>
<h3 id="_1-1-개발-환경-설정" tabindex="-1"><a class="header-anchor" href="#_1-1-개발-환경-설정"><span>1.1 개발 환경 설정</span></a></h3>
<ul>
<li><strong>DBeaver</strong>: 데이터베이스 관리 도구 (GUI 환경)</li>
<li><strong>Aiven</strong>: 클라우드 MySQL 서비스</li>
<li><strong>MySQL 8.0.x</strong>: 오픈소스 관계형 데이터베이스</li>
</ul>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token comment">-- 기본 연결 테스트</span></span>
<span class="line"><span class="token keyword">SELECT</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">SELECT</span> VERSION<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">DATABASE</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-rdbms-기본-개념" tabindex="-1"><a class="header-anchor" href="#_1-2-rdbms-기본-개념"><span>1.2 RDBMS 기본 개념</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">[RDBMS&lt;br/>관계형 데이터베이스 관리 시스템]</span> <span class="token arrow operator">--></span> B<span class="token text string">[테이블]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> C<span class="token text string">[스키마]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> D<span class="token text string">[SQL]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> E<span class="token text string">[행/Row/Record]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> F<span class="token text string">[열/Column/Field]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> G<span class="token text string">[데이터 구조 정의]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> H<span class="token text string">[DQL - 조회]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> I<span class="token text string">[DML - 조작]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> J<span class="token text string">[DDL - 정의]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>RDBMS 비유</strong>: 엑셀 스프레드시트 모음집</p>
<ul>
<li><strong>데이터베이스</strong>: 하나의 엑셀 파일</li>
<li><strong>테이블</strong>: 엑셀 시트 하나</li>
<li><strong>행(Row)</strong>: 엑셀의 한 줄</li>
<li><strong>열(Column)</strong>: 엑셀의 세로 컬럼</li>
</ul>
<h2 id="_2-dql-data-query-language-데이터-조회" tabindex="-1"><a class="header-anchor" href="#_2-dql-data-query-language-데이터-조회"><span>2. DQL (Data Query Language) - 데이터 조회</span></a></h2>
<h3 id="_2-1-기본-조회-select" tabindex="-1"><a class="header-anchor" href="#_2-1-기본-조회-select"><span>2.1 기본 조회 (SELECT)</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token comment">-- 전체 데이터 조회</span></span>
<span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> 테이블명<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 특정 컬럼 조회</span></span>
<span class="line"><span class="token keyword">SELECT</span> column1<span class="token punctuation">,</span> column2 <span class="token keyword">FROM</span> 테이블명<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 테이블 구조 확인</span></span>
<span class="line"><span class="token keyword">DESC</span> 테이블명<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 중복 제거</span></span>
<span class="line"><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> column1 <span class="token keyword">FROM</span> 테이블명<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-조건부-조회-where" tabindex="-1"><a class="header-anchor" href="#_2-2-조건부-조회-where"><span>2.2 조건부 조회 (WHERE)</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token comment">-- 기본 조건</span></span>
<span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> products <span class="token keyword">WHERE</span> price <span class="token operator">></span> <span class="token number">1000</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 복합 조건</span></span>
<span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> products </span>
<span class="line"><span class="token keyword">WHERE</span> price <span class="token operator">BETWEEN</span> <span class="token number">1000</span> <span class="token operator">AND</span> <span class="token number">5000</span> </span>
<span class="line"><span class="token operator">AND</span> category <span class="token operator">=</span> <span class="token string">'electronics'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 패턴 매칭</span></span>
<span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> customers <span class="token keyword">WHERE</span> name <span class="token operator">LIKE</span> <span class="token string">'김%'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-그룹화-및-집계-group-by-having" tabindex="-1"><a class="header-anchor" href="#_2-3-그룹화-및-집계-group-by-having"><span>2.3 그룹화 및 집계 (GROUP BY, HAVING)</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token comment">-- 그룹별 집계</span></span>
<span class="line"><span class="token keyword">SELECT</span> category<span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">AVG</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">FROM</span> products </span>
<span class="line"><span class="token keyword">GROUP</span> <span class="token keyword">BY</span> category<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 그룹 조건</span></span>
<span class="line"><span class="token keyword">SELECT</span> category<span class="token punctuation">,</span> <span class="token function">AVG</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">FROM</span> products </span>
<span class="line"><span class="token keyword">GROUP</span> <span class="token keyword">BY</span> category</span>
<span class="line"><span class="token keyword">HAVING</span> <span class="token function">AVG</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">2000</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>GROUP BY 비유</strong>: 반 학생들을 성별로 나눠서 각각의 평균 키 구하기</p>
<h3 id="_2-4-정렬-및-제한-order-by-limit" tabindex="-1"><a class="header-anchor" href="#_2-4-정렬-및-제한-order-by-limit"><span>2.4 정렬 및 제한 (ORDER BY, LIMIT)</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token comment">-- 정렬</span></span>
<span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> products <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> price <span class="token keyword">DESC</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 상위 N개 조회</span></span>
<span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> products <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> price <span class="token keyword">DESC</span> <span class="token keyword">LIMIT</span> <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 페이징 (건너뛰기)</span></span>
<span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> products <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> price <span class="token keyword">DESC</span> <span class="token keyword">LIMIT</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-join-테이블-연결" tabindex="-1"><a class="header-anchor" href="#_3-join-테이블-연결"><span>3. JOIN - 테이블 연결</span></a></h2>
<h3 id="_3-1-join-개념-시각화" tabindex="-1"><a class="header-anchor" href="#_3-1-join-개념-시각화"><span>3.1 JOIN 개념 시각화</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> LR</span>
<span class="line">    A<span class="token text string">[학생 테이블]</span> <span class="token arrow operator">--></span> C<span class="token text string">[INNER JOIN&lt;br/>교집합]</span></span>
<span class="line">    B<span class="token text string">[성적 테이블]</span> <span class="token arrow operator">--></span> C</span>
<span class="line">    A <span class="token arrow operator">--></span> D<span class="token text string">[LEFT JOIN&lt;br/>학생 기준 전체]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> D</span>
<span class="line">    A <span class="token arrow operator">--></span> E<span class="token text string">[RIGHT JOIN&lt;br/>성적 기준 전체]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> E</span>
<span class="line">    A <span class="token arrow operator">--></span> F<span class="token text string">[FULL JOIN&lt;br/>합집합]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> F</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-join-유형별-예제" tabindex="-1"><a class="header-anchor" href="#_3-2-join-유형별-예제"><span>3.2 JOIN 유형별 예제</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token comment">-- INNER JOIN (교집합)</span></span>
<span class="line"><span class="token keyword">SELECT</span> s<span class="token punctuation">.</span>name<span class="token punctuation">,</span> g<span class="token punctuation">.</span>score</span>
<span class="line"><span class="token keyword">FROM</span> students s</span>
<span class="line"><span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> grades g <span class="token keyword">ON</span> s<span class="token punctuation">.</span>student_id <span class="token operator">=</span> g<span class="token punctuation">.</span>student_id<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- LEFT JOIN (왼쪽 테이블 기준 전체)</span></span>
<span class="line"><span class="token keyword">SELECT</span> s<span class="token punctuation">.</span>name<span class="token punctuation">,</span> g<span class="token punctuation">.</span>score</span>
<span class="line"><span class="token keyword">FROM</span> students s</span>
<span class="line"><span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> grades g <span class="token keyword">ON</span> s<span class="token punctuation">.</span>student_id <span class="token operator">=</span> g<span class="token punctuation">.</span>student_id<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- CROSS JOIN (카테시안 곱)</span></span>
<span class="line"><span class="token keyword">SELECT</span> s<span class="token punctuation">.</span>name<span class="token punctuation">,</span> c<span class="token punctuation">.</span>course_name</span>
<span class="line"><span class="token keyword">FROM</span> students s</span>
<span class="line"><span class="token keyword">CROSS</span> <span class="token keyword">JOIN</span> courses c<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>JOIN 비유</strong>:</p>
<ul>
<li><strong>INNER JOIN</strong>: 양쪽 모두 일치하는 것만 (교집합)</li>
<li><strong>LEFT JOIN</strong>: 왼쪽은 무조건, 오른쪽은 있으면 (왼쪽 기준)</li>
<li><strong>CROSS JOIN</strong>: 모든 조합 만들기 (A×B)</li>
</ul>
<h2 id="_4-dml-data-manipulation-language-데이터-조작" tabindex="-1"><a class="header-anchor" href="#_4-dml-data-manipulation-language-데이터-조작"><span>4. DML (Data Manipulation Language) - 데이터 조작</span></a></h2>
<h3 id="_4-1-데이터-삽입-insert" tabindex="-1"><a class="header-anchor" href="#_4-1-데이터-삽입-insert"><span>4.1 데이터 삽입 (INSERT)</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token comment">-- 단일 행 삽입</span></span>
<span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> products <span class="token punctuation">(</span>name<span class="token punctuation">,</span> price<span class="token punctuation">,</span> category<span class="token punctuation">)</span> </span>
<span class="line"><span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'노트북'</span><span class="token punctuation">,</span> <span class="token number">150000</span><span class="token punctuation">,</span> <span class="token string">'electronics'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 다중 행 삽입</span></span>
<span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> products <span class="token punctuation">(</span>name<span class="token punctuation">,</span> price<span class="token punctuation">,</span> category<span class="token punctuation">)</span> </span>
<span class="line"><span class="token keyword">VALUES</span> </span>
<span class="line">    <span class="token punctuation">(</span><span class="token string">'마우스'</span><span class="token punctuation">,</span> <span class="token number">30000</span><span class="token punctuation">,</span> <span class="token string">'electronics'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token string">'키보드'</span><span class="token punctuation">,</span> <span class="token number">80000</span><span class="token punctuation">,</span> <span class="token string">'electronics'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-데이터-수정-update" tabindex="-1"><a class="header-anchor" href="#_4-2-데이터-수정-update"><span>4.2 데이터 수정 (UPDATE)</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token comment">-- 조건부 수정</span></span>
<span class="line"><span class="token keyword">UPDATE</span> products </span>
<span class="line"><span class="token keyword">SET</span> price <span class="token operator">=</span> <span class="token number">140000</span> </span>
<span class="line"><span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">'노트북'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 다중 컬럼 수정</span></span>
<span class="line"><span class="token keyword">UPDATE</span> products </span>
<span class="line"><span class="token keyword">SET</span> price <span class="token operator">=</span> price <span class="token operator">*</span> <span class="token number">1.1</span><span class="token punctuation">,</span> category <span class="token operator">=</span> <span class="token string">'premium_electronics'</span></span>
<span class="line"><span class="token keyword">WHERE</span> price <span class="token operator">></span> <span class="token number">100000</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-데이터-삭제-delete" tabindex="-1"><a class="header-anchor" href="#_4-3-데이터-삭제-delete"><span>4.3 데이터 삭제 (DELETE)</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token comment">-- 조건부 삭제</span></span>
<span class="line"><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> products <span class="token keyword">WHERE</span> price <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 전체 삭제 (주의!)</span></span>
<span class="line"><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> products<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-ddl-data-definition-language-구조-정의" tabindex="-1"><a class="header-anchor" href="#_5-ddl-data-definition-language-구조-정의"><span>5. DDL (Data Definition Language) - 구조 정의</span></a></h2>
<h3 id="_5-1-테이블-생성-create" tabindex="-1"><a class="header-anchor" href="#_5-1-테이블-생성-create"><span>5.1 테이블 생성 (CREATE)</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> products <span class="token punctuation">(</span></span>
<span class="line">    id <span class="token keyword">INT</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span></span>
<span class="line">    name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span></span>
<span class="line">    price <span class="token keyword">DECIMAL</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    category <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    created_at <span class="token keyword">TIMESTAMP</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_TIMESTAMP</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-테이블-수정-alter" tabindex="-1"><a class="header-anchor" href="#_5-2-테이블-수정-alter"><span>5.2 테이블 수정 (ALTER)</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token comment">-- 컬럼 추가</span></span>
<span class="line"><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> products <span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> description <span class="token keyword">TEXT</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 컬럼 수정</span></span>
<span class="line"><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> products <span class="token keyword">MODIFY</span> <span class="token keyword">COLUMN</span> name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 컬럼 삭제</span></span>
<span class="line"><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> products <span class="token keyword">DROP</span> <span class="token keyword">COLUMN</span> description<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-테이블-삭제-drop" tabindex="-1"><a class="header-anchor" href="#_5-3-테이블-삭제-drop"><span>5.3 테이블 삭제 (DROP)</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token comment">-- 테이블 삭제</span></span>
<span class="line"><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> products<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-트랜잭션-transaction-데이터-안전성" tabindex="-1"><a class="header-anchor" href="#_6-트랜잭션-transaction-데이터-안전성"><span>6. 트랜잭션 (Transaction) - 데이터 안전성</span></a></h2>
<h3 id="_6-1-acid-속성" tabindex="-1"><a class="header-anchor" href="#_6-1-acid-속성"><span>6.1 ACID 속성</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">[ACID]</span> <span class="token arrow operator">--></span> B<span class="token text string">[Atomicity&lt;br/>원자성]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> C<span class="token text string">[Consistency&lt;br/>일관성]</span>  </span>
<span class="line">    A <span class="token arrow operator">--></span> D<span class="token text string">[Isolation&lt;br/>격리성]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> E<span class="token text string">[Durability&lt;br/>지속성]</span></span>
<span class="line">    </span>
<span class="line">    B <span class="token arrow operator">--></span> B1<span class="token text string">[전부 실행 or 전부 취소]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> C1<span class="token text string">[제약조건 유지]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> D1<span class="token text string">[트랜잭션 간 간섭 방지]</span></span>
<span class="line">    E <span class="token arrow operator">--></span> E1<span class="token text string">[커밋 후 영구 저장]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ACID 비유</strong>: 은행 계좌 이체</p>
<ul>
<li><strong>원자성</strong>: 출금과 입금이 모두 성공하거나 모두 실패</li>
<li><strong>일관성</strong>: 총 금액은 변하지 않음</li>
<li><strong>격리성</strong>: 다른 이체가 동시에 방해하지 않음</li>
<li><strong>지속성</strong>: 완료된 이체는 영구적으로 기록</li>
</ul>
<h3 id="_6-2-트랜잭션-제어" tabindex="-1"><a class="header-anchor" href="#_6-2-트랜잭션-제어"><span>6.2 트랜잭션 제어</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token comment">-- 수동 트랜잭션 시작</span></span>
<span class="line"><span class="token keyword">START</span> <span class="token keyword">TRANSACTION</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 여러 작업 수행</span></span>
<span class="line"><span class="token keyword">UPDATE</span> accounts <span class="token keyword">SET</span> balance <span class="token operator">=</span> balance <span class="token operator">-</span> <span class="token number">1000</span> <span class="token keyword">WHERE</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">UPDATE</span> accounts <span class="token keyword">SET</span> balance <span class="token operator">=</span> balance <span class="token operator">+</span> <span class="token number">1000</span> <span class="token keyword">WHERE</span> id <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 커밋 (확정)</span></span>
<span class="line"><span class="token keyword">COMMIT</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 또는 롤백 (취소)</span></span>
<span class="line"><span class="token comment">-- ROLLBACK;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-락-lock-종류" tabindex="-1"><a class="header-anchor" href="#_6-3-락-lock-종류"><span>6.3 락(Lock) 종류</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">[트랜잭션 락]</span> <span class="token arrow operator">--></span> B<span class="token text string">[공유 락&lt;br/>Shared Lock]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> C<span class="token text string">[배타 락&lt;br/>Exclusive Lock]</span></span>
<span class="line">    </span>
<span class="line">    B <span class="token arrow operator">--></span> B1<span class="token text string">[읽기 허용&lt;br/>쓰기 금지]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> C1<span class="token text string">[모든 접근 금지]</span></span>
<span class="line">    </span>
<span class="line">    D<span class="token text string">[락 전략]</span> <span class="token arrow operator">--></span> E<span class="token text string">[비관적 락&lt;br/>Pessimistic]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> F<span class="token text string">[낙관적 락&lt;br/>Optimistic]</span></span>
<span class="line">    </span>
<span class="line">    E <span class="token arrow operator">--></span> E1<span class="token text string">[미리 락 획득]</span></span>
<span class="line">    F <span class="token arrow operator">--></span> F1<span class="token text string">[충돌 시 사후 검증]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-데이터-무결성과-정규화" tabindex="-1"><a class="header-anchor" href="#_7-데이터-무결성과-정규화"><span>7. 데이터 무결성과 정규화</span></a></h2>
<h3 id="_7-1-무결성-종류" tabindex="-1"><a class="header-anchor" href="#_7-1-무결성-종류"><span>7.1 무결성 종류</span></a></h3>
<table>
<thead>
<tr>
<th>무결성 유형</th>
<th>설명</th>
<th>예시</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>개체 무결성</strong></td>
<td>PK는 중복되지 않음</td>
<td>학번은 유일해야 함</td>
</tr>
<tr>
<td><strong>참조 무결성</strong></td>
<td>FK는 존재하는 PK만 참조</td>
<td>존재하지 않는 학과 참조 금지</td>
</tr>
<tr>
<td><strong>도메인 무결성</strong></td>
<td>컬럼 제약조건 준수</td>
<td>나이는 양수, 이메일 형식 준수</td>
</tr>
</tbody>
</table>
<h3 id="_7-2-정규화-기본-개념" tabindex="-1"><a class="header-anchor" href="#_7-2-정규화-기본-개념"><span>7.2 정규화 기본 개념</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">[정규화]</span> <span class="token arrow operator">--></span> B<span class="token text string">[제1정규형&lt;br/>1NF]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> C<span class="token text string">[제2정규형&lt;br/>2NF]</span>  </span>
<span class="line">    A <span class="token arrow operator">--></span> D<span class="token text string">[제3정규형&lt;br/>3NF]</span></span>
<span class="line">    </span>
<span class="line">    B <span class="token arrow operator">--></span> B1<span class="token text string">[원자값만 허용&lt;br/>리스트 형태 금지]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> C1<span class="token text string">[부분 함수 종속 제거]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> D1<span class="token text string">[이행 함수 종속 제거]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>정규화 비유</strong>: 서랍장 정리</p>
<ul>
<li><strong>1정규형</strong>: 한 칸에 한 종류의 물건만</li>
<li><strong>2정규형</strong>: 관련 있는 것들끼리 분리</li>
<li><strong>3정규형</strong>: 직접적 관련성만 유지</li>
</ul>
<h2 id="_8-실전-문제-해결" tabindex="-1"><a class="header-anchor" href="#_8-실전-문제-해결"><span>8. 실전 문제 해결</span></a></h2>
<h3 id="_8-1-leetcode-예제" tabindex="-1"><a class="header-anchor" href="#_8-1-leetcode-예제"><span>8.1 LeetCode 예제</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token comment">-- 문제: 저지방이면서 재활용 가능한 제품 찾기</span></span>
<span class="line"><span class="token keyword">SELECT</span> product_id </span>
<span class="line"><span class="token keyword">FROM</span> Products</span>
<span class="line"><span class="token keyword">WHERE</span> low_fats <span class="token operator">=</span> <span class="token string">'Y'</span> <span class="token operator">AND</span> recyclable <span class="token operator">=</span> <span class="token string">'Y'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-성능-최적화-팁" tabindex="-1"><a class="header-anchor" href="#_8-2-성능-최적화-팁"><span>8.2 성능 최적화 팁</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token comment">-- 인덱스 활용</span></span>
<span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">INDEX</span> idx_price <span class="token keyword">ON</span> products<span class="token punctuation">(</span>price<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- JOIN 순서 최적화 (ON 조건을 WHERE보다 먼저)</span></span>
<span class="line"><span class="token keyword">SELECT</span> p<span class="token punctuation">.</span>name<span class="token punctuation">,</span> c<span class="token punctuation">.</span>category_name</span>
<span class="line"><span class="token keyword">FROM</span> products p</span>
<span class="line"><span class="token keyword">JOIN</span> categories c <span class="token keyword">ON</span> p<span class="token punctuation">.</span>category_id <span class="token operator">=</span> c<span class="token punctuation">.</span>id  <span class="token comment">-- 먼저 처리</span></span>
<span class="line"><span class="token keyword">WHERE</span> p<span class="token punctuation">.</span>price <span class="token operator">></span> <span class="token number">1000</span><span class="token punctuation">;</span>  <span class="token comment">-- 나중에 처리</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-용어-정리표" tabindex="-1"><a class="header-anchor" href="#_9-용어-정리표"><span>9. 용어 정리표</span></a></h2>
<table>
<thead>
<tr>
<th>용어</th>
<th>영어 원문</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>DQL</strong></td>
<td>Data Query Language</td>
<td>데이터 조회 언어 (SELECT)</td>
</tr>
<tr>
<td><strong>DML</strong></td>
<td>Data Manipulation Language</td>
<td>데이터 조작 언어 (INSERT, UPDATE, DELETE)</td>
</tr>
<tr>
<td><strong>DDL</strong></td>
<td>Data Definition Language</td>
<td>데이터 정의 언어 (CREATE, ALTER, DROP)</td>
</tr>
<tr>
<td><strong>PK</strong></td>
<td>Primary Key</td>
<td>기본키 (고유 식별자)</td>
</tr>
<tr>
<td><strong>FK</strong></td>
<td>Foreign Key</td>
<td>외래키 (다른 테이블 참조)</td>
</tr>
<tr>
<td><strong>ACID</strong></td>
<td>Atomicity, Consistency, Isolation, Durability</td>
<td>트랜잭션 4대 속성</td>
</tr>
</tbody>
</table>
<h2 id="_10-데드락-방지-전략" tabindex="-1"><a class="header-anchor" href="#_10-데드락-방지-전략"><span>10. 데드락 방지 전략</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">sequenceDiagram</span></span>
<span class="line">    <span class="token keyword">participant</span> A as 트랜잭션 A</span>
<span class="line">    <span class="token keyword">participant</span> B as 트랜잭션 B</span>
<span class="line">    <span class="token keyword">participant</span> X as 테이블 X</span>
<span class="line">    <span class="token keyword">participant</span> Y as 테이블 Y</span>
<span class="line">    </span>
<span class="line">    A<span class="token arrow operator">->></span>X<span class="token operator">:</span> 락 획득 ✓</span>
<span class="line">    B<span class="token arrow operator">->></span>Y<span class="token operator">:</span> 락 획득 ✓</span>
<span class="line">    A<span class="token arrow operator">->></span>Y<span class="token operator">:</span> 락 요청 ⏳</span>
<span class="line">    B<span class="token arrow operator">->></span>X<span class="token operator">:</span> 락 요청 ⏳</span>
<span class="line">    <span class="token keyword">Note over</span> A,B<span class="token operator">:</span> 데드락 발생!</span>
<span class="line">    <span class="token keyword">Note over</span> A,B<span class="token operator">:</span> MySQL이 하나를 롤백</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>데드락 비유</strong>: 좁은 다리에서 양쪽에서 차가 만나는 상황</p>
<ul>
<li><strong>해결책</strong>: 한쪽이 후진하여 길을 양보</li>
</ul>
<hr>
</div></template>


