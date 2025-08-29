<template><div><h1 id="🚀-4주차-회고록-jdbc와-웹-개발-기초-마스터하기" tabindex="-1"><a class="header-anchor" href="#🚀-4주차-회고록-jdbc와-웹-개발-기초-마스터하기"><span>🚀 4주차 회고록: JDBC와 웹 개발 기초 마스터하기</span></a></h1>
<blockquote>
<p><strong>멋쟁이 사자처럼 클라우드 엔지니어링 4기</strong> | 4주차 (8/18 ~ 8/20)<br>
<strong>주제</strong>: Java Database Connectivity &amp; CSS 선택자/타이포그래피</p>
</blockquote>
<h2 id="📅-주차별-학습-현황" tabindex="-1"><a class="header-anchor" href="#📅-주차별-학습-현황"><span>📅 주차별 학습 현황</span></a></h2>
<h3 id="🗓️-전체-부트캠프-진행상황" tabindex="-1"><a class="header-anchor" href="#🗓️-전체-부트캠프-진행상황"><span>🗓️ 전체 부트캠프 진행상황</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line">timeline</span>
<span class="line">    title 멋쟁이 사자처럼 4기 부트캠프 진행 현황</span>
<span class="line">    July 2025 <span class="token operator">:</span> 오리엔테이션, Java 기초</span>
<span class="line">    August 2025 <span class="token operator">:</span> 객체지향 프로그래밍, 컬렉션 프레임워크</span>
<span class="line">    August 2025 <span class="token operator">:</span> 예외 처리, 파일 입출력, 람다식 &amp; 스트림</span>
<span class="line">    August 2025 <span class="token operator">:</span> JDBC 기초, 보안 &amp; DAO 패턴, CSS 선택자</span>
<span class="line">    August 2025 <span class="token text string">(예정)</span> <span class="token operator">:</span> Spring Framework</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="📊-4주차-상세-학습-진행도" tabindex="-1"><a class="header-anchor" href="#📊-4주차-상세-학습-진행도"><span>📊 4주차 상세 학습 진행도</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">gantt</span></span>
<span class="line">    title 4주차 일별 학습 성과</span>
<span class="line">    dateFormat  YYYY-MM-DD</span>
<span class="line">    section 8/18 <span class="token text string">(일)</span></span>
<span class="line">    환경 설정           <span class="token operator">:</span>done,    setup, 2025-08-18, 4h</span>
<span class="line">    JDBC 기초           <span class="token operator">:</span>done,    jdbc-basic, 2025-08-18, 6h</span>
<span class="line">    CRUD 실습           <span class="token operator">:</span>done,    crud, 2025-08-18, 2h</span>
<span class="line">    section 8/19 <span class="token text string">(월)</span></span>
<span class="line">    SQL Injection 학습   <span class="token operator">:</span>done,    security, 2025-08-19, 4h</span>
<span class="line">    PreparedStatement   <span class="token operator">:</span>done,    prepared, 2025-08-19, 3h</span>
<span class="line">    DAO 패턴 구현       <span class="token operator">:</span>done,    dao, 2025-08-19, 5h</span>
<span class="line">    section 8/20 <span class="token text string">(화)</span></span>
<span class="line">    CSS 선택자          <span class="token operator">:</span>done,    css-selector, 2025-08-20, 4h</span>
<span class="line">    타이포그래피        <span class="token operator">:</span>done,    typography, 2025-08-20, 3h</span>
<span class="line">    실습 &amp; 정리         <span class="token operator">:</span>done,    practice, 2025-08-20, 5h</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="📊-학습-성과-상세-분석" tabindex="-1"><a class="header-anchor" href="#📊-학습-성과-상세-분석"><span>📊 학습 성과 상세 분석</span></a></h2>
<h3 id="🎯-일일-학습-성과-측정" tabindex="-1"><a class="header-anchor" href="#🎯-일일-학습-성과-측정"><span>🎯 일일 학습 성과 측정</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> LR</span>
<span class="line">    <span class="token keyword">subgraph</span> <span class="token string">"8/18 (일) - JDBC 기초"</span></span>
<span class="line">        A1<span class="token text string">[환경 설정&lt;br/>✅ 완료]</span> <span class="token arrow operator">--></span> A2<span class="token text string">[DB 연결&lt;br/>✅ 완료]</span></span>
<span class="line">        A2 <span class="token arrow operator">--></span> A3<span class="token text string">[기본 CRUD&lt;br/>✅ 완료]</span></span>
<span class="line">        A3 <span class="token arrow operator">--></span> A4<span class="token text string">[try-with-resources&lt;br/>✅ 완료]</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">subgraph</span> <span class="token string">"8/19 (월) - 보안 &amp; 패턴"</span></span>
<span class="line">        B1<span class="token text string">[SQL Injection 이해&lt;br/>✅ 완료]</span> <span class="token arrow operator">--></span> B2<span class="token text string">[PreparedStatement&lt;br/>✅ 완료]</span></span>
<span class="line">        B2 <span class="token arrow operator">--></span> B3<span class="token text string">[DAO 패턴 설계&lt;br/>✅ 완료]</span></span>
<span class="line">        B3 <span class="token arrow operator">--></span> B4<span class="token text string">[복잡한 JOIN&lt;br/>🔄 진행중]</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">subgraph</span> <span class="token string">"8/20 (화) - CSS 기초"</span></span>
<span class="line">        C1<span class="token text string">[선택자 종류&lt;br/>✅ 완료]</span> <span class="token arrow operator">--></span> C2<span class="token text string">[타이포그래피&lt;br/>✅ 완료]</span></span>
<span class="line">        C2 <span class="token arrow operator">--></span> C3<span class="token text string">[웹폰트 적용&lt;br/>✅ 완료]</span></span>
<span class="line">        C3 <span class="token arrow operator">--></span> C4<span class="token text string">[반응형 디자인&lt;br/>📝 다음주]</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="💯-학습-효율성-분석" tabindex="-1"><a class="header-anchor" href="#💯-학습-효율성-분석"><span>💯 학습 효율성 분석</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">pie</span> title 4주차 시간 배분</span>
<span class="line">    <span class="token string">"실습 코딩"</span> <span class="token operator">:</span> 60</span>
<span class="line">    <span class="token string">"이론 학습"</span> <span class="token operator">:</span> 25</span>
<span class="line">    <span class="token string">"문제 해결"</span> <span class="token operator">:</span> 10</span>
<span class="line">    <span class="token string">"정리 및 복습"</span> <span class="token operator">:</span> 5</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🔄-3주차-→-4주차-발전-비교" tabindex="-1"><a class="header-anchor" href="#🔄-3주차-→-4주차-발전-비교"><span>🔄 3주차 → 4주차 발전 비교</span></a></h3>
<table>
<thead>
<tr>
<th>측면</th>
<th>3주차 수준</th>
<th>4주차 수준</th>
<th>향상도</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>코드 품질</strong></td>
<td>기능 구현 중심</td>
<td>보안 + 구조화 중심</td>
<td>⬆️ <strong>40%</strong></td>
</tr>
<tr>
<td><strong>문제 해결</strong></td>
<td>검색 의존</td>
<td>독립적 디버깅</td>
<td>⬆️ <strong>60%</strong></td>
</tr>
<tr>
<td><strong>설계 사고</strong></td>
<td>절차적 사고</td>
<td>객체지향 + 패턴</td>
<td>⬆️ <strong>80%</strong></td>
</tr>
<tr>
<td><strong>학습 속도</strong></td>
<td>개념 이해 중심</td>
<td>실무 적용 중심</td>
<td>⬆️ <strong>30%</strong></td>
</tr>
</tbody>
</table>
<h3 id="📚-지식-체계화-정도" tabindex="-1"><a class="header-anchor" href="#📚-지식-체계화-정도"><span>📚 지식 체계화 정도</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line">mindmap</span>
<span class="line">  root<span class="token text string">((4주차 지식 체계))</span></span>
<span class="line">    Java 백엔드</span>
<span class="line">      JDBC 완전 이해</span>
<span class="line">        Connection 관리</span>
<span class="line">        SQL 실행 패턴</span>
<span class="line">        트랜잭션 제어</span>
<span class="line">      보안 의식</span>
<span class="line">        SQL Injection 방지</span>
<span class="line">        PreparedStatement 활용</span>
<span class="line">        입력값 검증</span>
<span class="line">      설계 패턴</span>
<span class="line">        DAO 패턴 구현</span>
<span class="line">        DTO 활용</span>
<span class="line">        인터페이스 추상화</span>
<span class="line">    </span>
<span class="line">    웹 프론트엔드</span>
<span class="line">      CSS 선택자 마스터</span>
<span class="line">        기본 선택자</span>
<span class="line">        복합 선택자</span>
<span class="line">        특이도 이해</span>
<span class="line">      타이포그래피</span>
<span class="line">        폰트 속성</span>
<span class="line">        웹폰트 적용</span>
<span class="line">        가독성 최적화</span>
<span class="line">      </span>
<span class="line">    개발 도구</span>
<span class="line">      Maven 프로젝트 관리</span>
<span class="line">      IntelliJ IDEA 숙련</span>
<span class="line">      Git 버전 관리</span>
<span class="line">      브라우저 개발자 도구</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🛠️-개발-환경-및-도구-숙련도" tabindex="-1"><a class="header-anchor" href="#🛠️-개발-환경-및-도구-숙련도"><span>🛠️ 개발 환경 및 도구 숙련도</span></a></h2>
<h3 id="💻-사용-기술-스택" tabindex="-1"><a class="header-anchor" href="#💻-사용-기술-스택"><span>💻 사용 기술 스택</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TB</span>
<span class="line">    <span class="token keyword">subgraph</span> <span class="token string">"Backend"</span></span>
<span class="line">        A1<span class="token text string">[Java 17]</span> <span class="token arrow operator">--></span> A2<span class="token text string">[JDBC API]</span></span>
<span class="line">        A2 <span class="token arrow operator">--></span> A3<span class="token text string">[Maven]</span></span>
<span class="line">        A3 <span class="token arrow operator">--></span> A4<span class="token text string">[MySQL]</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">subgraph</span> <span class="token string">"Frontend"</span></span>
<span class="line">        B1<span class="token text string">[HTML5]</span> <span class="token arrow operator">--></span> B2<span class="token text string">[CSS3]</span></span>
<span class="line">        B2 <span class="token arrow operator">--></span> B3<span class="token text string">[웹폰트]</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">subgraph</span> <span class="token string">"Tools"</span></span>
<span class="line">        C1<span class="token text string">[IntelliJ IDEA]</span> <span class="token arrow operator">--></span> C2<span class="token text string">[Git]</span></span>
<span class="line">        C2 <span class="token arrow operator">--></span> C3<span class="token text string">[브라우저 DevTools]</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">subgraph</span> <span class="token string">"Database"</span></span>
<span class="line">        D1<span class="token text string">[Aiven MySQL]</span> <span class="token arrow operator">--></span> D2<span class="token text string">[SQL Workbench]</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🎯-도구별-숙련도-현황" tabindex="-1"><a class="header-anchor" href="#🎯-도구별-숙련도-현황"><span>🎯 도구별 숙련도 현황</span></a></h3>
<table>
<thead>
<tr>
<th>도구</th>
<th>3주차 수준</th>
<th>4주차 수준</th>
<th>주요 개선사항</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>IntelliJ IDEA</strong></td>
<td>⭐⭐⭐</td>
<td>⭐⭐⭐⭐</td>
<td>디버거 활용, 플러그인 설정</td>
</tr>
<tr>
<td><strong>Git</strong></td>
<td>⭐⭐</td>
<td>⭐⭐⭐</td>
<td>브랜치 전략, 커밋 메시지 규칙</td>
</tr>
<tr>
<td><strong>SQL</strong></td>
<td>⭐⭐</td>
<td>⭐⭐⭐⭐</td>
<td>JOIN, 서브쿼리, 트랜잭션</td>
</tr>
<tr>
<td><strong>Maven</strong></td>
<td>⭐</td>
<td>⭐⭐⭐</td>
<td>의존성 관리, 빌드 라이프사이클</td>
</tr>
</tbody>
</table>
<h3 id="📁-프로젝트-구조-발전" tabindex="-1"><a class="header-anchor" href="#📁-프로젝트-구조-발전"><span>📁 프로젝트 구조 발전</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">4주차 프로젝트 구조 (체계화된 패키지)</span>
<span class="line">├── src/main/java/</span>
<span class="line">│   ├── dao/                    # 데이터 접근 계층</span>
<span class="line">│   │   ├── MemberDAO.java     # 인터페이스</span>
<span class="line">│   │   └── JdbcMemberDAO.java # 구현체</span>
<span class="line">│   ├── dto/                   # 데이터 전송 객체</span>
<span class="line">│   │   ├── Member.java</span>
<span class="line">│   │   └── Product.java</span>
<span class="line">│   ├── config/               # 설정 관리</span>
<span class="line">│   │   └── DatabaseConfig.java</span>
<span class="line">│   └── main/</span>
<span class="line">│       └── Application.java  # 메인 클래스</span>
<span class="line">├── src/main/resources/</span>
<span class="line">│   └── database.properties   # DB 설정</span>
<span class="line">└── pom.xml                   # Maven 설정</span>
<span class="line"></span>
<span class="line">vs</span>
<span class="line"></span>
<span class="line">3주차 프로젝트 구조 (단순한 구조)</span>
<span class="line">├── src/</span>
<span class="line">│   └── Main.java            # 모든 코드가 한 파일에</span>
<span class="line">└── 기타 파일들...</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="📈-주차별-누적-학습량-비교" tabindex="-1"><a class="header-anchor" href="#📈-주차별-누적-학습량-비교"><span>📈 주차별 누적 학습량 비교</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">pie</span> title 주차별 실습 시간 비율</span>
<span class="line">    <span class="token string">"1주차 (22시간)"</span> <span class="token operator">:</span> 22</span>
<span class="line">    <span class="token string">"2주차 (28시간)"</span> <span class="token operator">:</span> 28</span>
<span class="line">    <span class="token string">"3주차 (26시간)"</span> <span class="token operator">:</span> 26</span>
<span class="line">    <span class="token string">"4주차 (25시간)"</span> <span class="token operator">:</span> 25</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🎯-기술-스택-발전도" tabindex="-1"><a class="header-anchor" href="#🎯-기술-스택-발전도"><span>🎯 기술 스택 발전도</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">[1주차: Java 기초]</span> <span class="token arrow operator">--></span> B<span class="token text string">[2주차: OOP]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> C<span class="token text string">[3주차: 고급 문법]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> D<span class="token text string">[4주차: DB 연동]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> E<span class="token text string">[5주차: Framework]</span></span>
<span class="line">    </span>
<span class="line">    A1<span class="token text string">[변수, 조건문, 반복문&lt;br/>메서드, 배열]</span> <span class="token arrow operator">--></span> A</span>
<span class="line">    B1<span class="token text string">[클래스, 상속&lt;br/>다형성, 캡슐화]</span> <span class="token arrow operator">--></span> B</span>
<span class="line">    C1<span class="token text string">[예외 처리, I/O&lt;br/>람다식, 스트림]</span> <span class="token arrow operator">--></span> C</span>
<span class="line">    D1<span class="token text string">[JDBC, SQL&lt;br/>보안, DAO 패턴]</span> <span class="token arrow operator">--></span> D</span>
<span class="line">    E1<span class="token text string">[Spring Boot&lt;br/>DI, AOP]</span> <span class="token arrow operator">--></span> E</span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">style</span> A <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#ffebee</span></span>
<span class="line">    <span class="token keyword">style</span> B <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#fce4ec</span></span>
<span class="line">    <span class="token keyword">style</span> C <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f3e5f5</span></span>
<span class="line">    <span class="token keyword">style</span> D <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e8eaf6<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>3px</span></span>
<span class="line">    <span class="token keyword">style</span> E <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e3f2fd</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="🔍-상세-학습-리뷰" tabindex="-1"><a class="header-anchor" href="#🔍-상세-학습-리뷰"><span>🔍 상세 학습 리뷰</span></a></h2>
<h3 id="🗄️-jdbc-java-database-connectivity" tabindex="-1"><a class="header-anchor" href="#🗄️-jdbc-java-database-connectivity"><span>🗄️ JDBC (Java Database Connectivity)</span></a></h3>
<h4 id="📈-학습-곡선" tabindex="-1"><a class="header-anchor" href="#📈-학습-곡선"><span>📈 학습 곡선</span></a></h4>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">[데이터베이스 이론]</span> <span class="token arrow operator">--></span> B<span class="token text string">[JDBC 4대 객체 이해]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> C<span class="token text string">[기본 CRUD 구현]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> D<span class="token text string">[보안 위험성 인식]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> E<span class="token text string">[PreparedStatement 활용]</span></span>
<span class="line">    E <span class="token arrow operator">--></span> F<span class="token text string">[DAO 패턴 적용]</span></span>
<span class="line">    F <span class="token arrow operator">--></span> G<span class="token text string">[트랜잭션 관리]</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">style</span> A <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#ffebee</span></span>
<span class="line">    <span class="token keyword">style</span> B <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#fce4ec</span></span>
<span class="line">    <span class="token keyword">style</span> C <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f3e5f5</span></span>
<span class="line">    <span class="token keyword">style</span> D <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e8eaf6</span></span>
<span class="line">    <span class="token keyword">style</span> E <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e3f2fd</span></span>
<span class="line">    <span class="token keyword">style</span> F <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e0f2f1</span></span>
<span class="line">    <span class="token keyword">style</span> G <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e8f5e8</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="🎯-핵심-개념-이해도" tabindex="-1"><a class="header-anchor" href="#🎯-핵심-개념-이해도"><span>🎯 핵심 개념 이해도</span></a></h4>
<p><strong>완전 이해한 개념 ✅</strong></p>
<ul>
<li>JDBC 4대 핵심 객체 (DriverManager, Connection, PreparedStatement, ResultSet)</li>
<li>try-with-resources를 통한 자동 자원 관리</li>
<li>기본 CRUD 작업 (Create, Read, Update, Delete)</li>
<li>SQL Injection 공격 원리와 방지법</li>
</ul>
<p><strong>보완이 필요한 개념 📝</strong></p>
<ul>
<li>복잡한 JOIN 쿼리 처리</li>
<li>Batch 처리를 통한 성능 최적화</li>
<li>Connection Pool 활용법</li>
<li>트랜잭션 격리 수준 (Isolation Level)</li>
</ul>
<h4 id="💡-가장-인상깊었던-학습-포인트" tabindex="-1"><a class="header-anchor" href="#💡-가장-인상깊었던-학습-포인트"><span>💡 가장 인상깊었던 학습 포인트</span></a></h4>
<p><strong>1. SQL Injection의 실제 위험성</strong></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// ❌ 위험한 코드</span></span>
<span class="line"><span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"SELECT * FROM users WHERE username='"</span> <span class="token operator">+</span> userInput <span class="token operator">+</span> <span class="token string">"'"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ✅ 안전한 코드  </span></span>
<span class="line"><span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"SELECT * FROM users WHERE username=?"</span><span class="token punctuation">;</span></span>
<span class="line">ps<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> userInput<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. DAO 패턴의 구조화 효과</strong></p>
<ul>
<li>코드 재사용성 증대</li>
<li>비즈니스 로직과 데이터 접근 로직 분리</li>
<li>테스트 코드 작성 용이성</li>
</ul>
<p><strong>3. Java 17 Record 활용</strong></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// 전통적인 방법 대신</span></span>
<span class="line"><span class="token keyword">record</span> <span class="token class-name">Member</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">,</span> <span class="token class-name">String</span> username<span class="token punctuation">,</span> <span class="token class-name">String</span> email<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 자동으로 getter, equals, hashCode, toString 생성!</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🎨-css-선택자와-타이포그래피" tabindex="-1"><a class="header-anchor" href="#🎨-css-선택자와-타이포그래피"><span>🎨 CSS 선택자와 타이포그래피</span></a></h3>
<h4 id="📊-선택자-이해도-매트릭스" tabindex="-1"><a class="header-anchor" href="#📊-선택자-이해도-매트릭스"><span>📊 선택자 이해도 매트릭스</span></a></h4>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> LR</span>
<span class="line">    A<span class="token text string">[CSS 선택자]</span> <span class="token arrow operator">--></span> B<span class="token text string">[기본 선택자]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> C<span class="token text string">[속성 선택자]</span> </span>
<span class="line">    A <span class="token arrow operator">--></span> D<span class="token text string">[결합자]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> E<span class="token text string">[타이포그래피]</span></span>
<span class="line">    </span>
<span class="line">    B <span class="token arrow operator">--></span> B1<span class="token text string">[태그 선택자&lt;br/>✅ 완전이해]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> B2<span class="token text string">[클래스 선택자&lt;br/>✅ 완전이해]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> B3<span class="token text string">[ID 선택자&lt;br/>✅ 완전이해]</span></span>
<span class="line">    </span>
<span class="line">    C <span class="token arrow operator">--></span> C1<span class="token text string">[속성값 선택자&lt;br/>🔄 연습필요]</span></span>
<span class="line">    </span>
<span class="line">    D <span class="token arrow operator">--></span> D1<span class="token text string">[자손 선택자&lt;br/>✅ 완전이해]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> D2<span class="token text string">[자식 선택자&lt;br/>✅ 완전이해]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> D3<span class="token text string">[형제 선택자&lt;br/>🔄 연습필요]</span></span>
<span class="line">    </span>
<span class="line">    E <span class="token arrow operator">--></span> E1<span class="token text string">[폰트 속성&lt;br/>✅ 완전이해]</span></span>
<span class="line">    E <span class="token arrow operator">--></span> E2<span class="token text string">[웹폰트&lt;br/>🔄 연습필요]</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">style</span> B1 <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#c8e6c9</span></span>
<span class="line">    <span class="token keyword">style</span> B2 <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#c8e6c9</span></span>
<span class="line">    <span class="token keyword">style</span> B3 <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#c8e6c9</span></span>
<span class="line">    <span class="token keyword">style</span> C1 <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#fff3e0</span></span>
<span class="line">    <span class="token keyword">style</span> D1 <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#c8e6c9</span></span>
<span class="line">    <span class="token keyword">style</span> D2 <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#c8e6c9</span></span>
<span class="line">    <span class="token keyword">style</span> D3 <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#fff3e0</span></span>
<span class="line">    <span class="token keyword">style</span> E1 <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#c8e6c9</span></span>
<span class="line">    <span class="token keyword">style</span> E2 <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#fff3e0</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="🎯-css-학습-하이라이트" tabindex="-1"><a class="header-anchor" href="#🎯-css-학습-하이라이트"><span>🎯 CSS 학습 하이라이트</span></a></h4>
<p><strong>명확히 이해한 개념</strong></p>
<ul>
<li>기본 선택자 3종 (태그, 클래스, ID)</li>
<li>상속 개념과 특이도</li>
<li>단위별 특징 (px, em, rem, %)</li>
<li>결합자의 다양한 활용법</li>
</ul>
<p><strong>더 깊이 있게 학습하고 싶은 부분</strong></p>
<ul>
<li>CSS Grid와 Flexbox 레이아웃</li>
<li>반응형 디자인 (Media Query)</li>
<li>CSS 애니메이션과 트랜지션</li>
<li>CSS 전처리기 (Sass, Less)</li>
</ul>
<hr>
<h2 id="📈-개인-역량-발전-지표" tabindex="-1"><a class="header-anchor" href="#📈-개인-역량-발전-지표"><span>📈 개인 역량 발전 지표</span></a></h2>
<h3 id="🎯-핵심-역량별-성장도" tabindex="-1"><a class="header-anchor" href="#🎯-핵심-역량별-성장도"><span>🎯 핵심 역량별 성장도</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line">timeline</span>
<span class="line">    title 핵심 역량 성장 추이</span>
<span class="line">    Java 문법 <span class="token operator">:</span> 7점 → 8점</span>
<span class="line">    데이터베이스 <span class="token operator">:</span> 2점 → 8점</span>
<span class="line">    보안 의식 <span class="token operator">:</span> 3점 → 9점</span>
<span class="line">    설계 능력 <span class="token operator">:</span> 5점 → 7점</span>
<span class="line">    디버깅 <span class="token operator">:</span> 4점 → 7점</span>
<span class="line">    문제 해결 <span class="token operator">:</span> 6점 → 8점</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="📊-학습-패턴-분석" tabindex="-1"><a class="header-anchor" href="#📊-학습-패턴-분석"><span>📊 학습 패턴 분석</span></a></h3>
<h4 id="시간대별-집중도" tabindex="-1"><a class="header-anchor" href="#시간대별-집중도"><span>시간대별 집중도</span></a></h4>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line">timeline</span>
<span class="line">    title 시간대별 학습 효율성 <span class="token text string">(집중도 1~10)</span></span>
<span class="line">    오전 9시 <span class="token operator">:</span> 6</span>
<span class="line">    오전 11시 <span class="token operator">:</span> 9</span>
<span class="line">    오후 1시 <span class="token operator">:</span> 4</span>
<span class="line">    오후 3시 <span class="token operator">:</span> 8</span>
<span class="line">    오후 5시 <span class="token operator">:</span> 7</span>
<span class="line">    저녁 7시 <span class="token operator">:</span> 9</span>
<span class="line">    저녁 9시 <span class="token operator">:</span> 5</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>분석 결과:</strong></p>
<ul>
<li><strong>최고 효율</strong>: 오전 11시, 저녁 7시 (새로운 개념 학습에 적합)</li>
<li><strong>최저 효율</strong>: 오후 1시 (점심 후 집중력 저하)</li>
<li><strong>실습 적합</strong>: 오후 3-5시 (손이 잘 움직이는 시간)</li>
</ul>
<h3 id="🧩-문제-해결-능력-발전" tabindex="-1"><a class="header-anchor" href="#🧩-문제-해결-능력-발전"><span>🧩 문제 해결 능력 발전</span></a></h3>
<h4 id="에러-해결-시간-단축" tabindex="-1"><a class="header-anchor" href="#에러-해결-시간-단축"><span>에러 해결 시간 단축</span></a></h4>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> LR</span>
<span class="line">    A<span class="token text string">[3주차]</span> <span class="token arrow operator">--></span> A1<span class="token text string">[평균 45분]</span></span>
<span class="line">    B<span class="token text string">[4주차]</span> <span class="token arrow operator">--></span> B1<span class="token text string">[평균 20분]</span></span>
<span class="line">    </span>
<span class="line">    A1 <span class="token arrow operator">--></span> C<span class="token text string">[구글 검색 의존도: 90%]</span></span>
<span class="line">    B1 <span class="token arrow operator">--></span> D<span class="token text string">[구글 검색 의존도: 60%]</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">style</span> B1 <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#c8e6c9</span></span>
<span class="line">    <span class="token keyword">style</span> D <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#c8e6c9</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="자주-발생한-에러-top-3" tabindex="-1"><a class="header-anchor" href="#자주-발생한-에러-top-3"><span>자주 발생한 에러 TOP 3</span></a></h4>
<ol>
<li><strong>SQLException: Connection refused</strong> → 해결법 숙지 ✅</li>
<li><strong>CSS 특이도 충돌</strong> → 선택자 우선순위 이해 ✅</li>
<li><strong>NullPointerException in ResultSet</strong> → null 체크 습관화 ✅</li>
</ol>
<h3 id="🎭-학습-스타일-발견" tabindex="-1"><a class="header-anchor" href="#🎭-학습-스타일-발견"><span>🎭 학습 스타일 발견</span></a></h3>
<h4 id="나에게-맞는-학습-방법" tabindex="-1"><a class="header-anchor" href="#나에게-맞는-학습-방법"><span>나에게 맞는 학습 방법</span></a></h4>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">[이론 학습]</span> <span class="token arrow operator">--></span> B<span class="token text string">{실습 가능?}</span></span>
<span class="line">    B <span class="token arrow operator">--></span><span class="token label property">|Yes|</span> C<span class="token text string">[즉시 코딩]</span></span>
<span class="line">    B <span class="token arrow operator">--></span><span class="token label property">|No|</span> D<span class="token text string">[예시 코드 분석]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> E<span class="token text string">[에러 발생]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> E</span>
<span class="line">    E <span class="token arrow operator">--></span> F<span class="token text string">[디버깅 &amp; 해결]</span></span>
<span class="line">    F <span class="token arrow operator">--></span> G<span class="token text string">[개념 재정리]</span></span>
<span class="line">    G <span class="token arrow operator">--></span> H<span class="token text string">[다른 방법 시도]</span></span>
<span class="line">    H <span class="token arrow operator">--></span> I<span class="token text string">[완전 이해]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>발견한 나만의 학습 패턴:</strong></p>
<ul>
<li>🧠 <strong>이론 → 실습</strong> 순서보다 <strong>실습 → 이론</strong> 순서가 더 효과적</li>
<li>🐛 <strong>에러를 두려워하지 않고</strong> 적극적으로 마주하기</li>
<li>📝 <strong>손으로 직접 코딩</strong>할 때 기억력 증가</li>
<li>👥 <strong>동료와의 토론</strong>이 이해도를 크게 향상시킴</li>
</ul>
<h3 id="💫-성장-마인드셋-변화" tabindex="-1"><a class="header-anchor" href="#💫-성장-마인드셋-변화"><span>💫 성장 마인드셋 변화</span></a></h3>
<table>
<thead>
<tr>
<th>측면</th>
<th>3주차 마인드</th>
<th>4주차 마인드</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>에러에 대한 태도</strong></td>
<td>😰 두려움과 회피</td>
<td>😤 도전과 학습 기회</td>
</tr>
<tr>
<td><strong>코드 품질 기준</strong></td>
<td>💯 동작만 하면 OK</td>
<td>🏗️ 구조와 보안도 중요</td>
</tr>
<tr>
<td><strong>학습 속도 기대</strong></td>
<td>🏃‍♂️ 빨리 많이 배우고 싶음</td>
<td>🚶‍♂️ 깊이 있게 차근차근</td>
</tr>
<tr>
<td><strong>도움 요청</strong></td>
<td>😅 부끄럽고 미안함</td>
<td>🤝 적극적인 소통과 협력</td>
</tr>
</tbody>
</table>
<h3 id="🎖️-이번-주-mvp-순간들" tabindex="-1"><a class="header-anchor" href="#🎖️-이번-주-mvp-순간들"><span>🎖️ 이번 주 MVP 순간들</span></a></h3>
<h4 id="🥇-gold-sql-injection-완벽-이해" tabindex="-1"><a class="header-anchor" href="#🥇-gold-sql-injection-완벽-이해"><span>🥇 <strong>Gold</strong>: SQL Injection 완벽 이해</span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// 해킹 시연을 직접 성공한 순간의 소름...</span></span>
<span class="line"><span class="token class-name">String</span> maliciousInput <span class="token operator">=</span> <span class="token string">"'; DROP TABLE users; --"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 그리고 PreparedStatement로 완벽하게 방어한 순간의 뿌듯함!</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="🥈-silver-복잡한-dao-패턴-구현-성공" tabindex="-1"><a class="header-anchor" href="#🥈-silver-복잡한-dao-패턴-구현-성공"><span>🥈 <strong>Silver</strong>: 복잡한 DAO 패턴 구현 성공</span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// 인터페이스 → 구현체 → 의존성 주입까지 한 번에!</span></span>
<span class="line"><span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Member</span><span class="token punctuation">></span></span> member <span class="token operator">=</span> memberDAO<span class="token punctuation">.</span><span class="token function">findByEmail</span><span class="token punctuation">(</span>email<span class="token punctuation">,</span> conn<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="🥉-bronze-css-선택자로-복잡한-레이아웃-정리" tabindex="-1"><a class="header-anchor" href="#🥉-bronze-css-선택자로-복잡한-레이아웃-정리"><span>🥉 <strong>Bronze</strong>: CSS 선택자로 복잡한 레이아웃 정리</span></a></h4>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code class="language-css"><span class="line"><span class="token comment">/* 이런 복잡한 선택자를 스스럼없이 작성하게 된 자신에게 박수! */</span></span>
<span class="line"><span class="token selector">.section:nth-child(even) > .card:hover .card-title</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> #1976d2<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">``` ## 🚀 실전 프로젝트 및 포트폴리오</span>
<span class="line"></span>
<span class="line">### 💼 4주차 완성 프로젝트</span>
<span class="line"></span>
<span class="line">#### 📋 **Project 1<span class="token punctuation">:</span> 멤버십 관리 시스템**</span>
<span class="line">```mermaid</span>
<span class="line">graph TD</span>
<span class="line">    A[사용자 입력] --> B[MemberService]</span>
<span class="line">    B --> C[MemberDAO]</span>
<span class="line">    C --> D[<span class="token punctuation">(</span>MySQL DB<span class="token punctuation">)</span>]</span>
<span class="line">    </span>
<span class="line">    E[보안 계층] --> F[PreparedStatement]</span>
<span class="line">    F --> G[SQL Injection 방지]</span>
<span class="line">    </span>
<span class="line">    H[DTO 계층] --> I[Member Record]</span>
<span class="line">    I --> J[Type Safety]</span>
<span class="line">    </span>
<span class="line">    style B <span class="token property">fill</span><span class="token punctuation">:</span>#e3f2fd</span>
<span class="line">    style E <span class="token property">fill</span><span class="token punctuation">:</span>#ffebee</span>
<span class="line">    style H <span class="token property">fill</span><span class="token punctuation">:</span>#e8f5e8</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>주요 기능:</strong></p>
<ul>
<li>✅ 회원 등록 (중복 이메일 검증)</li>
<li>✅ 회원 조회 (ID/이메일 기반)</li>
<li>✅ 회원 정보 수정</li>
<li>✅ 회원 탈퇴 (Soft Delete)</li>
<li>✅ 등급별 권한 관리</li>
</ul>
<p><strong>사용 기술:</strong></p>
<ul>
<li>Java 17 (Record, Optional 활용)</li>
<li>JDBC + MySQL</li>
<li>DAO 패턴 + DTO 패턴</li>
<li>Maven 의존성 관리</li>
</ul>
<h4 id="🛒-project-2-간단한-주문-시스템" tabindex="-1"><a class="header-anchor" href="#🛒-project-2-간단한-주문-시스템"><span>🛒 <strong>Project 2: 간단한 주문 시스템</strong></span></a></h4>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">erDiagram</span></span>
<span class="line">    MEMBERS <span class="token punctuation">{</span></span>
<span class="line">        bigint id PK</span>
<span class="line">        varchar username</span>
<span class="line">        varchar email</span>
<span class="line">        varchar grade</span>
<span class="line">        timestamp created_at</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    PRODUCTS <span class="token punctuation">{</span></span>
<span class="line">        bigint id PK</span>
<span class="line">        varchar name</span>
<span class="line">        int price</span>
<span class="line">        timestamp created_at</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    ORDERS <span class="token punctuation">{</span></span>
<span class="line">        bigint id PK</span>
<span class="line">        bigint member_id FK</span>
<span class="line">        timestamp ordered_at</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    ORDER_ITEMS <span class="token punctuation">{</span></span>
<span class="line">        bigint id PK</span>
<span class="line">        bigint order_id FK</span>
<span class="line">        bigint product_id FK</span>
<span class="line">        int quantity</span>
<span class="line">        int unit_price</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    MEMBERS <span class="token arrow operator">||--o{</span> ORDERS <span class="token operator">:</span> <span class="token string">"주문"</span></span>
<span class="line">    ORDERS <span class="token arrow operator">||--o{</span> ORDER_ITEMS <span class="token operator">:</span> <span class="token string">"포함"</span></span>
<span class="line">    PRODUCTS <span class="token arrow operator">||--o{</span> ORDER_ITEMS <span class="token operator">:</span> <span class="token string">"주문됨"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>핵심 비즈니스 로직:</strong></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token annotation punctuation">@Transactional</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token class-name">Long</span> <span class="token function">placeOrder</span><span class="token punctuation">(</span><span class="token class-name">Long</span> memberId<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">></span></span> productQuantityMap<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 1. 회원 존재 확인</span></span>
<span class="line">    <span class="token comment">// 2. 상품 재고 확인  </span></span>
<span class="line">    <span class="token comment">// 3. 주문 헤더 생성</span></span>
<span class="line">    <span class="token comment">// 4. 주문 상품들 등록</span></span>
<span class="line">    <span class="token comment">// 5. 재고 차감</span></span>
<span class="line">    <span class="token comment">// 성공: commit() / 실패: rollback()</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="🎨-project-3-css-컴포넌트-라이브러리" tabindex="-1"><a class="header-anchor" href="#🎨-project-3-css-컴포넌트-라이브러리"><span>🎨 <strong>Project 3: CSS 컴포넌트 라이브러리</strong></span></a></h4>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code class="language-css"><span class="line"><span class="token comment">/* 재사용 가능한 카드 컴포넌트 */</span></span>
<span class="line"><span class="token selector">.card-system</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 기본 카드 스타일 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.card-system.card-primary > .card-header</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 프라이머리 테마 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.card-system.card-success > .card-header</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 성공 테마 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 반응형 타이포그래피 */</span></span>
<span class="line"><span class="token selector">.typography-responsive</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">clamp</span><span class="token punctuation">(</span>1rem<span class="token punctuation">,</span> 2.5vw<span class="token punctuation">,</span> 2rem<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="📊-프로젝트별-성과-지표" tabindex="-1"><a class="header-anchor" href="#📊-프로젝트별-성과-지표"><span>📊 프로젝트별 성과 지표</span></a></h3>
<table>
<thead>
<tr>
<th>프로젝트</th>
<th>코드 라인 수</th>
<th>완성도</th>
<th>재사용성</th>
<th>보안성</th>
<th>학습 효과</th>
</tr>
</thead>
<tbody>
<tr>
<td>멤버십 관리 시스템</td>
<td>~500줄</td>
<td>95%</td>
<td>⭐⭐⭐⭐</td>
<td>⭐⭐⭐⭐⭐</td>
<td>⭐⭐⭐⭐⭐</td>
</tr>
<tr>
<td>주문 시스템</td>
<td>~800줄</td>
<td>85%</td>
<td>⭐⭐⭐</td>
<td>⭐⭐⭐⭐</td>
<td>⭐⭐⭐⭐</td>
</tr>
<tr>
<td>CSS 라이브러리</td>
<td>~300줄</td>
<td>90%</td>
<td>⭐⭐⭐⭐⭐</td>
<td>⭐⭐⭐</td>
<td>⭐⭐⭐</td>
</tr>
</tbody>
</table>
<h3 id="🔗-github-포트폴리오-정리" tabindex="-1"><a class="header-anchor" href="#🔗-github-포트폴리오-정리"><span>🔗 GitHub 포트폴리오 정리</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">📁 4th-week-projects/</span>
<span class="line">├── 📁 membership-system/</span>
<span class="line">│   ├── 📄 README.md (프로젝트 소개)</span>
<span class="line">│   ├── 📁 src/main/java/</span>
<span class="line">│   ├── 📁 sql/ (DDL 스크립트)</span>
<span class="line">│   └── 📄 LEARNING.md (학습 과정)</span>
<span class="line">│</span>
<span class="line">├── 📁 order-system/</span>
<span class="line">│   ├── 📄 README.md</span>
<span class="line">│   ├── 📁 src/main/java/</span>
<span class="line">│   ├── 📁 database/</span>
<span class="line">│   └── 📸 screenshots/ (실행 화면)</span>
<span class="line">│</span>
<span class="line">└── 📁 css-components/</span>
<span class="line">    ├── 📄 index.html (데모 페이지)</span>
<span class="line">    ├── 📄 styles.css</span>
<span class="line">    └── 📸 preview/ (스타일 미리보기)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🎯-다음-주-연계-프로젝트-계획" tabindex="-1"><a class="header-anchor" href="#🎯-다음-주-연계-프로젝트-계획"><span>🎯 다음 주 연계 프로젝트 계획</span></a></h3>
<h4 id="🌟-통합-웹-애플리케이션-나만의-도서관" tabindex="-1"><a class="header-anchor" href="#🌟-통합-웹-애플리케이션-나만의-도서관"><span>🌟 <strong>통합 웹 애플리케이션</strong>: &quot;나만의 도서관&quot;</span></a></h4>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TB</span>
<span class="line">    <span class="token keyword">subgraph</span> <span class="token string">"Frontend (5주차)"</span></span>
<span class="line">        A<span class="token text string">[Spring Boot Web]</span></span>
<span class="line">        B<span class="token text string">[Thymeleaf Templates]</span> </span>
<span class="line">        C<span class="token text string">[Bootstrap CSS]</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">subgraph</span> <span class="token string">"Backend (4주차 연계)"</span></span>
<span class="line">        D<span class="token text string">[JDBC DAO 계층]</span></span>
<span class="line">        E<span class="token text string">[Book/Member Service]</span></span>
<span class="line">        F<span class="token text string">[MySQL Database]</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">subgraph</span> <span class="token string">"New Features (5주차)"</span></span>
<span class="line">        G<span class="token text string">[도서 대출/반납]</span></span>
<span class="line">        H<span class="token text string">[검색 기능]</span></span>
<span class="line">        I<span class="token text string">[통계 대시보드]</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    A <span class="token arrow operator">--></span> D</span>
<span class="line">    B <span class="token arrow operator">--></span> E</span>
<span class="line">    C <span class="token arrow operator">--></span> F</span>
<span class="line">    D <span class="token arrow operator">--></span> G</span>
<span class="line">    E <span class="token arrow operator">--></span> H</span>
<span class="line">    F <span class="token arrow operator">--></span> I</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>예상 기능:</strong></p>
<ul>
<li>📚 도서 등록/수정/삭제 (4주차 CRUD 응용)</li>
<li>👤 회원 관리 (4주차 DAO 패턴 확장)</li>
<li>📊 대출 현황 대시보드 (CSS + 차트)</li>
<li>🔍 도서 검색 (LIKE 쿼리 + 정렬)</li>
<li>📈 통계 리포트 (집계 함수 활용)</li>
</ul>
<h2 id="🎓-학습-성찰-및-향후-계획" tabindex="-1"><a class="header-anchor" href="#🎓-학습-성찰-및-향후-계획"><span>🎓 학습 성찰 및 향후 계획</span></a></h2>
<h3 id="🤔-깊이-있는-자기-반성" tabindex="-1"><a class="header-anchor" href="#🤔-깊이-있는-자기-반성"><span>🤔 깊이 있는 자기 반성</span></a></h3>
<h4 id="잘했던-점-keep" tabindex="-1"><a class="header-anchor" href="#잘했던-점-keep"><span>잘했던 점 (Keep)</span></a></h4>
<ol>
<li>
<p><strong>체계적인 학습 접근</strong></p>
<ul>
<li>이론 → 실습 → 응용 → 정리의 단계별 학습</li>
<li>매일 학습 내용을 문서화하는 습관</li>
<li>에러를 기록하고 해결 과정을 정리</li>
</ul>
</li>
<li>
<p><strong>보안 의식의 각성</strong></p>
<ul>
<li>SQL Injection을 직접 시연해보면서 위험성 체감</li>
<li>PreparedStatement 사용이 습관화됨</li>
<li>사용자 입력을 항상 의심하는 마인드셋 형성</li>
</ul>
</li>
<li>
<p><strong>설계 패턴에 대한 이해</strong></p>
<ul>
<li>DAO 패턴의 필요성을 몸소 체험</li>
<li>인터페이스 추상화의 장점 이해</li>
<li>코드 재사용성과 유지보수성 향상</li>
</ul>
</li>
</ol>
<h4 id="아쉬웠던-점-problem" tabindex="-1"><a class="header-anchor" href="#아쉬웠던-점-problem"><span>아쉬웠던 점 (Problem)</span></a></h4>
<ol>
<li>
<p><strong>시간 관리 미숙</strong></p>
<ul>
<li>환경 설정에 예상보다 많은 시간 소요</li>
<li>디버깅에 빠져서 다른 학습 계획 지연</li>
<li>완벽주義 성향으로 한 가지에 너무 매몰</li>
</ul>
</li>
<li>
<p><strong>기초 이론 부족</strong></p>
<ul>
<li>HTTP 프로토콜에 대한 이해 부족</li>
<li>데이터베이스 정규화 개념 미흡</li>
<li>네트워크 기초 지식 부족</li>
</ul>
</li>
<li>
<p><strong>협업 경험 부족</strong></p>
<ul>
<li>혼자 학습하는 시간이 대부분</li>
<li>코드 리뷰 경험 부족</li>
<li>팀 프로젝트 경험 필요</li>
</ul>
</li>
</ol>
<h4 id="개선-방향-try" tabindex="-1"><a class="header-anchor" href="#개선-방향-try"><span>개선 방향 (Try)</span></a></h4>
<ol>
<li>
<p><strong>5주차 시간 관리 전략</strong></p>
<ul>
<li>매일 오전에 학습 계획 수립</li>
<li>포모도로 기법으로 집중력 관리</li>
<li>디버깅 시간 제한 (1시간 이상 시 도움 요청)</li>
</ul>
</li>
<li>
<p><strong>기초 이론 보강 계획</strong></p>
<ul>
<li>HTTP/HTTPS 프로토콜 학습</li>
<li>데이터베이스 설계 이론 복습</li>
<li>네트워크 기초 온라인 강의 수강</li>
</ul>
</li>
<li>
<p><strong>협업 능력 향상</strong></p>
<ul>
<li>동료와 페어 프로그래밍 시도</li>
<li>코드 리뷰 문화 만들기</li>
<li>오픈소스 프로젝트 기여 준비</li>
</ul>
</li>
</ol>
<h3 id="📚-5주차-구체적-학습-로드맵" tabindex="-1"><a class="header-anchor" href="#📚-5주차-구체적-학습-로드맵"><span>📚 5주차 구체적 학습 로드맵</span></a></h3>
<h4 id="week-5-day-by-day-plan" tabindex="-1"><a class="header-anchor" href="#week-5-day-by-day-plan"><span>Week 5 Day-by-Day Plan</span></a></h4>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">gantt</span></span>
<span class="line">    title 5주차 상세 학습 계획</span>
<span class="line">    dateFormat  YYYY-MM-DD</span>
<span class="line">    section 8/21 <span class="token text string">(수)</span></span>
<span class="line">    Spring Boot 개념        <span class="token operator">:</span>spring-concept, 2025-08-21, 1d</span>
<span class="line">    첫 웹앱 만들기          <span class="token operator">:</span>first-webapp, 2025-08-21, 1d</span>
<span class="line">    section 8/22 <span class="token text string">(목)</span></span>
<span class="line">    의존성 주입 이해        <span class="token operator">:</span>di-concept, 2025-08-22, 1d</span>
<span class="line">    Controller 작성         <span class="token operator">:</span>controller, 2025-08-22, 1d</span>
<span class="line">    section 8/23 <span class="token text string">(금)</span></span>
<span class="line">    Thymeleaf 템플릿       <span class="token operator">:</span>thymeleaf, 2025-08-23, 1d</span>
<span class="line">    폼 처리                <span class="token operator">:</span>form-handling, 2025-08-23, 1d</span>
<span class="line">    section 주말</span>
<span class="line">    미니 프로젝트 완성     <span class="token operator">:</span>weekend-project, 2025-08-24, 2d</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="기술별-목표-설정" tabindex="-1"><a class="header-anchor" href="#기술별-목표-설정"><span>기술별 목표 설정</span></a></h4>
<table>
<thead>
<tr>
<th>기술</th>
<th>현재 수준</th>
<th>5주차 목표</th>
<th>측정 기준</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Spring Boot</strong></td>
<td>0%</td>
<td>70%</td>
<td>기본 웹앱 구동 + CRUD</td>
</tr>
<tr>
<td><strong>의존성 주입</strong></td>
<td>10%</td>
<td>80%</td>
<td>@Autowired 활용</td>
</tr>
<tr>
<td><strong>MVC 패턴</strong></td>
<td>30%</td>
<td>85%</td>
<td>Controller-Service-DAO 구조</td>
</tr>
<tr>
<td><strong>Thymeleaf</strong></td>
<td>0%</td>
<td>60%</td>
<td>동적 HTML 생성</td>
</tr>
<tr>
<td><strong>HTTP</strong></td>
<td>20%</td>
<td>70%</td>
<td>GET/POST 완벽 이해</td>
</tr>
</tbody>
</table>
<h3 id="🎯-최종-목표-풀스택-개발자로의-전환점" tabindex="-1"><a class="header-anchor" href="#🎯-최종-목표-풀스택-개발자로의-전환점"><span>🎯 최종 목표: 풀스택 개발자로의 전환점</span></a></h3>
<h4 id="_4주차에서-쌓은-기반" tabindex="-1"><a class="header-anchor" href="#_4주차에서-쌓은-기반"><span>4주차에서 쌓은 기반</span></a></h4>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> LR</span>
<span class="line">    A<span class="token text string">[Java 기초]</span> <span class="token arrow operator">--></span> B<span class="token text string">[JDBC 숙련]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> C<span class="token text string">[보안 의식]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> D<span class="token text string">[설계 패턴]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> E<span class="token text string">[웹 기초]</span></span>
<span class="line">    E <span class="token arrow operator">--></span> F<span class="token text string">[5주차 Spring]</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">style</span> F <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#ffeb3b<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>3px</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="개발자로서의-정체성-확립" tabindex="-1"><a class="header-anchor" href="#개발자로서의-정체성-확립"><span>개발자로서의 정체성 확립</span></a></h4>
<ul>
<li><strong>백엔드 개발자</strong>로서 데이터베이스 전문성 ✅</li>
<li><strong>보안 의식</strong>을 갖춘 안전한 개발자 ✅</li>
<li><strong>설계 패턴</strong>을 이해하는 구조적 사고력 ✅</li>
<li><strong>풀스택</strong>으로 발전할 수 있는 기초 소양 🔄</li>
</ul>
<h4 id="장기-비전-3개월-후" tabindex="-1"><a class="header-anchor" href="#장기-비전-3개월-후"><span>장기 비전 (3개월 후)</span></a></h4>
<ol>
<li><strong>Junior 개발자</strong> 수준의 실무 능력</li>
<li><strong>포트폴리오</strong> 3-5개 프로젝트 완성</li>
<li><strong>팀 프로젝트</strong> 경험 및 협업 능력</li>
<li><strong>클라우드 배포</strong> 경험 (AWS/GCP)</li>
</ol>
<hr>
<h2 id="🎉-마무리-4주차를-돌아보며" tabindex="-1"><a class="header-anchor" href="#🎉-마무리-4주차를-돌아보며"><span>🎉 마무리: 4주차를 돌아보며</span></a></h2>
<h3 id="💝-가장-소중한-깨달음들" tabindex="-1"><a class="header-anchor" href="#💝-가장-소중한-깨달음들"><span>💝 가장 소중한 깨달음들</span></a></h3>
<ol>
<li>
<p><strong>&quot;기술은 도구, 사고는 본질&quot;</strong></p>
<ul>
<li>JDBC든 Spring이든 결국 문제를 해결하는 도구</li>
<li>핵심은 문제를 분석하고 해결하는 사고 과정</li>
</ul>
</li>
<li>
<p><strong>&quot;보안은 기능만큼 중요하다&quot;</strong></p>
<ul>
<li>SQL Injection 체험으로 보안 의식 확립</li>
<li>개발자의 사회적 책임감 인식</li>
</ul>
</li>
<li>
<p><strong>&quot;패턴은 개발자들의 집단지성&quot;</strong></p>
<ul>
<li>DAO 패턴을 통한 코드 구조화의 힘</li>
<li>선배 개발자들의 경험이 담긴 소중한 유산</li>
</ul>
</li>
<li>
<p><strong>&quot;작은 것도 체계적으로&quot;</strong></p>
<ul>
<li>CSS 선택자 하나하나도 논리와 원리가 있음</li>
<li>기초가 탄탄해야 응용도 가능</li>
</ul>
</li>
</ol>
<h3 id="🚀-5주차를-향한-각오" tabindex="-1"><a class="header-anchor" href="#🚀-5주차를-향한-각오"><span>🚀 5주차를 향한 각오</span></a></h3>
<p>4주차에서 <strong>데이터베이스와 친해졌다면</strong>, 5주차에서는 <strong>웹과 친해질 차례</strong>입니다.</p>
<p>지금까지 배운 JDBC, DAO 패턴, 보안 의식을 바탕으로 실제 사용자가 사용할 수 있는 웹 애플리케이션을 만들어보겠습니다.</p>
<blockquote>
<p><strong>&quot;4주차의 기초 위에 5주차의 날개를 달자!&quot;</strong> 🦅</p>
</blockquote>
<p><strong>멋쟁이 사자처럼 4기, 화이팅!</strong> 🦁✨</p>
<hr>
<h3 id="📝-학습-일지-통계" tabindex="-1"><a class="header-anchor" href="#📝-학습-일지-통계"><span>📝 학습 일지 통계</span></a></h3>
<ul>
<li><strong>총 학습 시간</strong>: 25시간</li>
<li><strong>작성한 코드 라인</strong>: ~1,300줄</li>
<li><strong>해결한 에러</strong>: 23개</li>
<li><strong>새로 배운 개념</strong>: 47개</li>
<li><strong>완성한 프로젝트</strong>: 3개</li>
<li><strong>성장한 마음</strong>: ∞ (무한대)</li>
</ul>
<p><em>📅 작성일: 2025년 8월 20일</em><br>
<em>✍️ 작성자: 클라우드 엔지니어링 4기 수강생</em></p>
<h2 id="💪-학습-과정에서의-도전과-성장" tabindex="-1"><a class="header-anchor" href="#💪-학습-과정에서의-도전과-성장"><span>💪 학습 과정에서의 도전과 성장</span></a></h2>
<h3 id="😅-주요-난관과-해결-과정" tabindex="-1"><a class="header-anchor" href="#😅-주요-난관과-해결-과정"><span>😅 주요 난관과 해결 과정</span></a></h3>
<h4 id="🔥-day-1-8-18-환경-설정의-늪" tabindex="-1"><a class="header-anchor" href="#🔥-day-1-8-18-환경-설정의-늪"><span>🔥 <strong>Day 1 (8/18): 환경 설정의 늪</strong></span></a></h4>
<p><strong>문제 상황</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">❌ Maven 의존성 충돌</span>
<span class="line">❌ MySQL 연결 실패 (SSL 인증서 문제)  </span>
<span class="line">❌ .env 파일 인식 오류</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>해결 과정</strong></p>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> LR</span>
<span class="line">    A<span class="token text string">[문제 발생]</span> <span class="token arrow operator">--></span> B<span class="token text string">[구글 검색]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> C<span class="token text string">[공식 문서 확인]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> D<span class="token text string">[동료에게 질문]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> E<span class="token text string">[멘토 도움 요청]</span></span>
<span class="line">    E <span class="token arrow operator">--></span> F<span class="token text string">[해결!]</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">style</span> A <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#ffcdd2</span></span>
<span class="line">    <span class="token keyword">style</span> F <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#c8e6c9</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>얻은 교훈</strong></p>
<ul>
<li>환경 설정 시간을 충분히 확보해야 함</li>
<li>공식 문서를 먼저 참조하는 습관</li>
<li>에러 메시지를 정확히 읽고 분석하는 중요성</li>
</ul>
<h4 id="⚡-day-2-8-19-sql-injection-쇼크" tabindex="-1"><a class="header-anchor" href="#⚡-day-2-8-19-sql-injection-쇼크"><span>⚡ <strong>Day 2 (8/19): SQL Injection 쇼크</strong></span></a></h4>
<p><strong>충격적인 발견</strong></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// 이 코드가 얼마나 위험한지 몰랐었음...</span></span>
<span class="line"><span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"SELECT * FROM users WHERE name='"</span> <span class="token operator">+</span> userInput <span class="token operator">+</span> <span class="token string">"'"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>실제 체험한 공격</strong></p>
<ul>
<li>입력값: <code v-pre>admin'; DROP TABLE users; --</code></li>
<li>결과: 😱 <strong>전체 테이블 삭제 위기!</strong></li>
</ul>
<p><strong>보안 의식의 각성</strong></p>
<ul>
<li>모든 사용자 입력은 의심해야 한다</li>
<li>PreparedStatement는 선택이 아닌 필수</li>
<li>보안은 기능 구현만큼 중요하다</li>
</ul>
<h4 id="🏗️-day-3-8-20-구조화의-깨달음" tabindex="-1"><a class="header-anchor" href="#🏗️-day-3-8-20-구조화의-깨달음"><span>🏗️ <strong>Day 3 (8/20): 구조화의 깨달음</strong></span></a></h4>
<p><strong>Before: 절차적 사고</strong></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// 모든 코드가 main 메서드에...</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 100줄이 넘는 스파게티 코드 😵</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>After: 객체지향적 사고</strong></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// 역할별로 분리된 깔끔한 구조</span></span>
<span class="line"><span class="token class-name">MemberDAO</span> dao <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JdbcMemberDAO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">Member</span> member <span class="token operator">=</span> dao<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">,</span> connection<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🎯-일일-성취감-그래프" tabindex="-1"><a class="header-anchor" href="#🎯-일일-성취감-그래프"><span>🎯 일일 성취감 그래프</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line">xychart-beta</span>
<span class="line">    title <span class="token string">"일별 성취감 및 난이도 변화"</span></span>
<span class="line">    <span class="token arrow operator">x-</span>axis <span class="token text string">["8/18 아침", "8/18 오후", "8/19 아침", "8/19 오후", "8/20 아침", "8/20 오후"]</span></span>
<span class="line">    y-axis <span class="token string">"점수 (1~10)"</span> 0 <span class="token arrow operator">--></span> 10</span>
<span class="line">    line <span class="token text string">[3, 7, 4, 9, 6, 8]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🧠-학습-방법의-진화" tabindex="-1"><a class="header-anchor" href="#🧠-학습-방법의-진화"><span>🧠 학습 방법의 진화</span></a></h3>
<h4 id="_3주차-학습-패턴" tabindex="-1"><a class="header-anchor" href="#_3주차-학습-패턴"><span>3주차 학습 패턴</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">📖 이론 학습 → 🤔 이해 → 💻 실습 → ✅ 완료</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_4주차-학습-패턴-개선됨" tabindex="-1"><a class="header-anchor" href="#_4주차-학습-패턴-개선됨"><span>4주차 학습 패턴 (개선됨)</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">📖 이론 학습 → 🤔 이해 → 💻 실습 → 🐛 디버깅 → 🔄 리팩토링 → 📝 정리 → ✅ 완료</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>주요 개선점:</strong></p>
<ul>
<li><strong>디버깅 단계 추가</strong>: 에러를 두려워하지 않고 적극적으로 해결</li>
<li><strong>리팩토링 습관</strong>: 동작하는 코드에서 더 나은 코드로 개선</li>
<li><strong>정리 단계 강화</strong>: 학습한 내용을 문서화하고 체계화</li>
</ul>
<h3 id="💡-깨달음의-순간들" tabindex="-1"><a class="header-anchor" href="#💡-깨달음의-순간들"><span>💡 깨달음의 순간들</span></a></h3>
<h4 id="_1-보안은-개발자의-기본-소양" tabindex="-1"><a class="header-anchor" href="#_1-보안은-개발자의-기본-소양"><span>1. <strong>&quot;보안은 개발자의 기본 소양&quot;</strong></span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// 이 한 줄의 차이가 해킹 방지와 직결된다는 사실!</span></span>
<span class="line">ps<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> userInput<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ✅ 안전</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-패턴은-개발자들의-지혜" tabindex="-1"><a class="header-anchor" href="#_2-패턴은-개발자들의-지혜"><span>2. <strong>&quot;패턴은 개발자들의 지혜&quot;</strong></span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// DAO 패턴을 적용하니 코드가 이렇게 깔끔해질 수 있다니!</span></span>
<span class="line"><span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Member</span><span class="token punctuation">></span></span> member <span class="token operator">=</span> memberDAO<span class="token punctuation">.</span><span class="token function">findByEmail</span><span class="token punctuation">(</span>email<span class="token punctuation">,</span> conn<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-css도-프로그래밍이다" tabindex="-1"><a class="header-anchor" href="#_3-css도-프로그래밍이다"><span>3. <strong>&quot;CSS도 프로그래밍이다&quot;</strong></span></a></h4>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code class="language-css"><span class="line"><span class="token comment">/* 선택자 하나하나가 로직이었다 */</span></span>
<span class="line"><span class="token selector">.card-container > .card:nth-child(odd)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> #f5f5f5<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="📚-코드-작성-패턴-변화" tabindex="-1"><a class="header-anchor" href="#📚-코드-작성-패턴-변화"><span>📚 코드 작성 패턴 변화</span></a></h2>
<h3 id="before-vs-after" tabindex="-1"><a class="header-anchor" href="#before-vs-after"><span>BEFORE vs AFTER</span></a></h3>
<h4 id="🔄-jdbc-코드-스타일-변화" tabindex="-1"><a class="header-anchor" href="#🔄-jdbc-코드-스타일-변화"><span>🔄 JDBC 코드 스타일 변화</span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// BEFORE: 수동 자원 관리</span></span>
<span class="line"><span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">PreparedStatement</span> ps <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> user<span class="token punctuation">,</span> pass<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    ps <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 작업 수행</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>ps <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> ps<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>conn <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// AFTER: try-with-resources + DAO 패턴</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> user<span class="token punctuation">,</span> pass<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">MemberDAO</span> dao <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JdbcMemberDAO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> dao<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> conn<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="🎨-css-작성-스타일-변화" tabindex="-1"><a class="header-anchor" href="#🎨-css-작성-스타일-변화"><span>🎨 CSS 작성 스타일 변화</span></a></h4>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code class="language-css"><span class="line"><span class="token comment">/* BEFORE: 개별 선택자 남발 */</span></span>
<span class="line"><span class="token selector">.header-title</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.content-title</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.footer-title</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* AFTER: 그룹 선택자 활용 */</span></span>
<span class="line"><span class="token selector">.header-title, .content-title, .footer-title</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 또는 공통 클래스 생성 */</span></span>
<span class="line"><span class="token selector">.title-primary</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="🎯-실전-프로젝트-아이디어" tabindex="-1"><a class="header-anchor" href="#🎯-실전-프로젝트-아이디어"><span>🎯 실전 프로젝트 아이디어</span></a></h2>
<p>4주차 학습 내용을 바탕으로 구상한 미니 프로젝트들:</p>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line">mindmap</span>
<span class="line">  root<span class="token text string">((실전 프로젝트))</span></span>
<span class="line">    도서 관리 시스템</span>
<span class="line">      JDBC로 도서 CRUD</span>
<span class="line">      대출/반납 트랜잭션 처리</span>
<span class="line">      회원 등급별 권한 관리</span>
<span class="line">    </span>
<span class="line">    개인 블로그</span>
<span class="line">      글 작성/수정/삭제</span>
<span class="line">      카테고리별 분류</span>
<span class="line">      검색 기능 구현</span>
<span class="line">    </span>
<span class="line">    가계부 앱</span>
<span class="line">      수입/지출 기록</span>
<span class="line">      월별/카테고리별 통계</span>
<span class="line">      그래프 시각화</span>
<span class="line">    </span>
<span class="line">    CSS 컴포넌트 라이브러리</span>
<span class="line">      재사용 가능한 UI 요소</span>
<span class="line">      다양한 선택자 활용</span>
<span class="line">      반응형 디자인 적용</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="🌟-4주차-베스트-코드" tabindex="-1"><a class="header-anchor" href="#🌟-4주차-베스트-코드"><span>🌟 4주차 베스트 코드</span></a></h2>
<h3 id="🏆-가장-만족스러운-jdbc-코드" tabindex="-1"><a class="header-anchor" href="#🏆-가장-만족스러운-jdbc-코드"><span>🏆 가장 만족스러운 JDBC 코드</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 완벽한 DAO 패턴 구현 예시</span>
<span class="line"> * - 인터페이스로 추상화</span>
<span class="line"> * - try-with-resources로 안전한 자원 관리</span>
<span class="line"> * - PreparedStatement로 보안 강화</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JdbcMemberDAO</span> <span class="token keyword">implements</span> <span class="token class-name">MemberDAO</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token annotation punctuation">@Override</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Member</span><span class="token punctuation">></span></span> <span class="token function">findByEmail</span><span class="token punctuation">(</span><span class="token class-name">String</span> email<span class="token punctuation">,</span> <span class="token class-name">Connection</span> conn<span class="token punctuation">)</span> </span>
<span class="line">            <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"SELECT id, username, email, grade FROM members WHERE email = ?"</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">PreparedStatement</span> ps <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            ps<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> email<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            </span>
<span class="line">            <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> ps<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">return</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                </span>
<span class="line">                <span class="token keyword">return</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Member</span><span class="token punctuation">(</span></span>
<span class="line">                    rs<span class="token punctuation">.</span><span class="token function">getLong</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                    rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                    rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"email"</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                    rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"grade"</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🎨-가장-우아한-css-코드" tabindex="-1"><a class="header-anchor" href="#🎨-가장-우아한-css-코드"><span>🎨 가장 우아한 CSS 코드</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code class="language-css"><span class="line"><span class="token comment">/* 계층적 선택자와 상속을 활용한 깔끔한 스타일링 */</span></span>
<span class="line"><span class="token selector">.card-container</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'Noto Sans KR'</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.6<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.card-container .card</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #e0e0e0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.card-container .card > .card-header</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> #f5f5f5<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.card-container .card > .card-body</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 상태에 따른 스타일 변화 */</span></span>
<span class="line"><span class="token selector">.card-container .card.card-primary > .card-header</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> #1976d2<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="🔮-5주차-학습-계획" tabindex="-1"><a class="header-anchor" href="#🔮-5주차-학습-계획"><span>🔮 5주차 학습 계획</span></a></h2>
<h3 id="🎯-다음-주-목표" tabindex="-1"><a class="header-anchor" href="#🎯-다음-주-목표"><span>🎯 다음 주 목표</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">["4주차 완료"]</span> <span class="token arrow operator">--></span> B<span class="token text string">["5주차 시작"]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> C<span class="token text string">["Spring Framework 기초"]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> D<span class="token text string">["웹 애플리케이션 구조"]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> E<span class="token text string">["HTTP &amp; 서블릿"]</span></span>
<span class="line">    </span>
<span class="line">    C <span class="token arrow operator">--></span> C1<span class="token text string">["의존성 주입\nDependency Injection"]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> C2<span class="token text string">["스프링 컨테이너\nApplication Context"]</span></span>
<span class="line">    </span>
<span class="line">    D <span class="token arrow operator">--></span> D1<span class="token text string">["MVC 패턴\nModel-View-Controller"]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> D2<span class="token text string">["템플릿 엔진\nThymeleaf"]</span></span>
<span class="line">    </span>
<span class="line">    E <span class="token arrow operator">--></span> E1<span class="token text string">["HTTP 메서드\nGET, POST, PUT, DELETE"]</span></span>
<span class="line">    E <span class="token arrow operator">--></span> E2<span class="token text string">["요청/응답 처리\nRequest/Response"]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="📋-구체적-학습-계획" tabindex="-1"><a class="header-anchor" href="#📋-구체적-학습-계획"><span>📋 구체적 학습 계획</span></a></h3>
<table>
<thead>
<tr>
<th>우선순위</th>
<th>학습 주제</th>
<th>예상 소요시간</th>
<th>목표</th>
</tr>
</thead>
<tbody>
<tr>
<td>🔥 <strong>HIGH</strong></td>
<td>Spring Framework 개념</td>
<td>2일</td>
<td>의존성 주입 이해</td>
</tr>
<tr>
<td>🔥 <strong>HIGH</strong></td>
<td>Spring Boot 프로젝트 생성</td>
<td>1일</td>
<td>첫 웹 애플리케이션 구동</td>
</tr>
<tr>
<td>🟡 <strong>MID</strong></td>
<td>Thymeleaf 템플릿 엔진</td>
<td>1일</td>
<td>동적 HTML 생성</td>
</tr>
<tr>
<td>🟡 <strong>MID</strong></td>
<td>데이터 바인딩</td>
<td>1일</td>
<td>폼 처리 마스터</td>
</tr>
<tr>
<td>🟢 <strong>LOW</strong></td>
<td>REST API 기초</td>
<td>주말</td>
<td>JSON 응답 처리</td>
</tr>
</tbody>
</table>
<h3 id="🚀-도전-과제" tabindex="-1"><a class="header-anchor" href="#🚀-도전-과제"><span>🚀 도전 과제</span></a></h3>
<ol>
<li><strong>JDBC + Spring 연동</strong>: 4주차 DAO를 Spring Bean으로 전환</li>
<li><strong>웹 UI 구현</strong>: CSS로 학습한 내용을 실제 웹페이지에 적용</li>
<li><strong>Mini CRM 시스템</strong>: 회원 관리 웹 애플리케이션 제작</li>
<li><strong>GitHub 포트폴리오</strong>: 학습 프로젝트들을 체계적으로 정리</li>
</ol>
<hr>
<h2 id="💭-회고-및-다짐" tabindex="-1"><a class="header-anchor" href="#💭-회고-및-다짐"><span>💭 회고 및 다짐</span></a></h2>
<h3 id="🎉-이번-주-가장-뿌듯했던-순간" tabindex="-1"><a class="header-anchor" href="#🎉-이번-주-가장-뿌듯했던-순간"><span>🎉 이번 주 가장 뿌듯했던 순간</span></a></h3>
<ol>
<li>
<p><strong>SQL Injection 공격을 완전히 이해한 순간</strong><br>
보안이 단순히 '따라하기'가 아닌 '원리 이해'가 중요함을 깨달음</p>
</li>
<li>
<p><strong>DAO 패턴으로 복잡한 주문 시스템을 구현했을 때</strong><br>
객체지향 설계의 힘과 코드 구조화의 중요성 체감</p>
</li>
<li>
<p><strong>CSS 선택자로 복잡한 레이아웃을 깔끔하게 정리했을 때</strong><br>
작은 기술도 체계적으로 이해하면 강력한 도구가 됨을 실감</p>
</li>
</ol>
<h3 id="📈-성장한-부분" tabindex="-1"><a class="header-anchor" href="#📈-성장한-부분"><span>📈 성장한 부분</span></a></h3>
<ul>
<li><strong>문제 해결 능력</strong>: 에러 메시지를 보고 원인을 스스로 찾아내기</li>
<li><strong>코드 품질 의식</strong>: 단순 동작보다 안전하고 유지보수 가능한 코드 작성</li>
<li><strong>학습 방법론</strong>: 이론 → 실습 → 응용 → 정리의 체계적 학습 패턴 확립</li>
</ul>
<h3 id="🔥-다음-주-다짐" tabindex="-1"><a class="header-anchor" href="#🔥-다음-주-다짐"><span>🔥 다음 주 다짐</span></a></h3>
<ol>
<li>
<p><strong>Spring Framework 완전 정복하기</strong><br>
의존성 주입, AOP, 트랜잭션 등 핵심 개념을 확실히 이해하자</p>
</li>
<li>
<p><strong>풀스택 개발자로의 첫걸음</strong><br>
백엔드(JDBC)와 프론트엔드(CSS)를 아우르는 통합적 사고 기르기</p>
</li>
<li>
<p><strong>포트폴리오 프로젝트 시작</strong><br>
단순 예제가 아닌 실제 활용 가능한 애플리케이션 제작하기</p>
</li>
<li>
<p><strong>동료와의 협업 강화</strong><br>
코드 리뷰, 페어 프로그래밍 등을 통한 상호 성장</p>
</li>
</ol>
<hr>
<h2 id="🎊-마치며" tabindex="-1"><a class="header-anchor" href="#🎊-마치며"><span>🎊 마치며</span></a></h2>
<p>4주차를 돌이켜보면 <strong>기초 탄탄히 쌓기</strong>의 중요성을 다시 한번 느꼈습니다. JDBC라는 다소 오래된 기술이지만, 이를 통해 데이터베이스 연동의 본질을 이해할 수 있었고, CSS 선택자 학습을 통해 웹 개발의 세밀한 부분까지 신경쓰는 자세를 기를 수 있었습니다.</p>
<p>특히 <strong>보안에 대한 인식</strong>이 크게 변했습니다. SQL Injection 같은 공격을 실제로 구현해보면서, 개발자가 얼마나 신중해야 하는지 몸소 체험했습니다.</p>
<p>5주차에는 드디어 Spring Framework를 만나게 됩니다. 지금까지 학습한 Java 기초, 객체지향 프로그래밍, 데이터베이스 연동 지식들이 모두 하나로 연결되는 시점이 될 것 같아 기대가 큽니다!</p>
<blockquote>
<p><strong>&quot;기초가 탄탄해야 높이 올라갈 수 있다&quot;</strong><br>
4주차에서 얻은 가장 큰 교훈입니다. 🚀</p>
</blockquote>
<hr>
<p><em>📝 이 회고록은 멋쟁이 사자처럼 클라우드 엔지니어링 4기 4주차 학습 내용을 바탕으로 작성되었습니다.</em></p>
</div></template>


