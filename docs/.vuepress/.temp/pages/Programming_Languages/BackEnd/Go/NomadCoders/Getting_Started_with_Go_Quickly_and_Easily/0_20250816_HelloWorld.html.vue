<template><div><h1 id="go-언어-hello-world-완벽-가이드-🚀" tabindex="-1"><a class="header-anchor" href="#go-언어-hello-world-완벽-가이드-🚀"><span>Go 언어 Hello World 완벽 가이드 🚀</span></a></h1>
<h2 id="📝-기본-코드-분석" tabindex="-1"><a class="header-anchor" href="#📝-기본-코드-분석"><span>📝 기본 코드 분석</span></a></h2>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go"><pre v-pre><code class="language-go"><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">"fmt"</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Hello world!"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🔍-코드-구성-요소-상세-분석" tabindex="-1"><a class="header-anchor" href="#🔍-코드-구성-요소-상세-분석"><span>🔍 코드 구성 요소 상세 분석</span></a></h3>
<h4 id="_1-package-main" tabindex="-1"><a class="header-anchor" href="#_1-package-main"><span>1. <code v-pre>package main</code></span></a></h4>
<ul>
<li><strong>역할</strong>: 패키지 선언부</li>
<li><strong>중요성</strong>: Go 프로그램의 <strong>진입점(Entry Point)</strong></li>
<li><strong>특징</strong>: <code v-pre>main</code> 패키지만이 실행 가능한 바이너리 파일을 생성</li>
<li><strong>다른 패키지</strong>: 라이브러리 형태로만 동작</li>
</ul>
<h4 id="_2-import-fmt" tabindex="-1"><a class="header-anchor" href="#_2-import-fmt"><span>2. <code v-pre>import &quot;fmt&quot;</code></span></a></h4>
<ul>
<li><strong>역할</strong>: 패키지 임포트</li>
<li><strong>fmt</strong>: <strong>Formatted I/O</strong> 표준 라이브러리</li>
<li><strong>기능</strong>: 콘솔 입출력 함수들 제공 (<code v-pre>Print</code>, <code v-pre>Println</code>, <code v-pre>Printf</code> 등)</li>
</ul>
<h4 id="_3-func-main" tabindex="-1"><a class="header-anchor" href="#_3-func-main"><span>3. <code v-pre>func main()</code></span></a></h4>
<ul>
<li><strong>역할</strong>: 메인 함수 (프로그램 실행 시작점)</li>
<li><strong>특징</strong>: Go 런타임이 자동으로 호출</li>
<li><strong>반환값</strong>: 없음 (void)</li>
</ul>
<h4 id="_4-fmt-println-hello-world" tabindex="-1"><a class="header-anchor" href="#_4-fmt-println-hello-world"><span>4. <code v-pre>fmt.Println(&quot;Hello world!&quot;)</code></span></a></h4>
<ul>
<li><strong>역할</strong>: 문자열 출력 + 자동 줄바꿈</li>
<li><strong>다른 옵션</strong>:
<ul>
<li><code v-pre>fmt.Print()</code>: 줄바꿈 없음</li>
<li><code v-pre>fmt.Printf()</code>: 포맷 문자열 사용</li>
</ul>
</li>
</ul>
<hr>
<h2 id="🏃‍♂️-실행-방법" tabindex="-1"><a class="header-anchor" href="#🏃‍♂️-실행-방법"><span>🏃‍♂️ 실행 방법</span></a></h2>
<h3 id="✅-사전-준비-go-설치-확인" tabindex="-1"><a class="header-anchor" href="#✅-사전-준비-go-설치-확인"><span>✅ 사전 준비: Go 설치 확인</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">go version</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="📁-파일-생성" tabindex="-1"><a class="header-anchor" href="#📁-파일-생성"><span>📁 파일 생성</span></a></h3>
<p><code v-pre>main.go</code> 파일에 코드 저장</p>
<h3 id="🚀-실행-방법-2가지" tabindex="-1"><a class="header-anchor" href="#🚀-실행-방법-2가지"><span>🚀 실행 방법 2가지</span></a></h3>
<h4 id="방법-1-직접-실행-개발-중-추천" tabindex="-1"><a class="header-anchor" href="#방법-1-직접-실행-개발-중-추천"><span>방법 1: 직접 실행 (개발 중 추천)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">go run main.go</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>컴파일 + 실행을 한 번에 처리</li>
<li>개발/테스트 단계에서 편리</li>
</ul>
<h4 id="방법-2-빌드-후-실행-배포용" tabindex="-1"><a class="header-anchor" href="#방법-2-빌드-후-실행-배포용"><span>방법 2: 빌드 후 실행 (배포용)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 1단계: 빌드</span></span>
<span class="line">go build main.go</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2단계: 실행</span></span>
<span class="line">./main        <span class="token comment"># macOS/Linux</span></span>
<span class="line">main.exe      <span class="token comment"># Windows</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="💡-추가-실행-팁" tabindex="-1"><a class="header-anchor" href="#💡-추가-실행-팁"><span>💡 추가 실행 팁</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 현재 디렉토리의 모든 Go 파일 실행</span></span>
<span class="line">go run <span class="token builtin class-name">.</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 특정 이름으로 빌드</span></span>
<span class="line">go build <span class="token parameter variable">-o</span> myprogram main.go</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="📊-프로그램-실행-흐름" tabindex="-1"><a class="header-anchor" href="#📊-프로그램-실행-흐름"><span>📊 프로그램 실행 흐름</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">[프로그램 시작]</span> <span class="token arrow operator">--></span> B<span class="token text string">{Go 런타임}</span></span>
<span class="line">    B <span class="token arrow operator">--></span> C<span class="token text string">[main 패키지 검색]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> D<span class="token text string">[main 함수 호출]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> E<span class="token text string">[fmt.Println 실행]</span></span>
<span class="line">    E <span class="token arrow operator">--></span> F<span class="token text string">[Hello world! 출력]</span></span>
<span class="line">    F <span class="token arrow operator">--></span> G<span class="token text string">[프로그램 종료]</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">style</span> A <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e1f5fe</span></span>
<span class="line">    <span class="token keyword">style</span> G <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f3e5f5</span></span>
<span class="line">    <span class="token keyword">style</span> E <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#fff3e0</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="🏗️-go-언어-프로젝트-구조" tabindex="-1"><a class="header-anchor" href="#🏗️-go-언어-프로젝트-구조"><span>🏗️ Go 언어 프로젝트 구조</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> LR</span>
<span class="line">    A<span class="token text string">[Go 프로젝트]</span> <span class="token arrow operator">--></span> B<span class="token text string">[package main]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> C<span class="token text string">[package library]</span></span>
<span class="line">    </span>
<span class="line">    B <span class="token arrow operator">--></span> D<span class="token text string">[실행 가능한 바이너리]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> E<span class="token text string">[재사용 가능한 라이브러리]</span></span>
<span class="line">    </span>
<span class="line">    B <span class="token arrow operator">--></span> F<span class="token text string">[main 함수 필수]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> G<span class="token text string">[main 함수 불필요]</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">style</span> B <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#c8e6c9</span></span>
<span class="line">    <span class="token keyword">style</span> C <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#ffcdd2</span></span>
<span class="line">    <span class="token keyword">style</span> D <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#dcedc8</span></span>
<span class="line">    <span class="token keyword">style</span> E <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f8bbd9</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="🔄-컴파일-vs-실행-프로세스-비교" tabindex="-1"><a class="header-anchor" href="#🔄-컴파일-vs-실행-프로세스-비교"><span>🔄 컴파일 vs 실행 프로세스 비교</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">flowchart</span> TD</span>
<span class="line">    <span class="token keyword">subgraph</span> <span class="token string">"go run (직접 실행)"</span></span>
<span class="line">        A1<span class="token text string">[main.go]</span> <span class="token arrow operator">--></span> B1<span class="token text string">[메모리에서 컴파일]</span></span>
<span class="line">        B1 <span class="token arrow operator">--></span> C1<span class="token text string">[즉시 실행]</span></span>
<span class="line">        C1 <span class="token arrow operator">--></span> D1<span class="token text string">[출력: Hello world!]</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">subgraph</span> <span class="token string">"go build (빌드 후 실행)"</span></span>
<span class="line">        A2<span class="token text string">[main.go]</span> <span class="token arrow operator">--></span> B2<span class="token text string">[컴파일]</span></span>
<span class="line">        B2 <span class="token arrow operator">--></span> C2<span class="token text string">[실행파일 생성]</span></span>
<span class="line">        C2 <span class="token arrow operator">--></span> D2<span class="token text string">[./main 실행]</span></span>
<span class="line">        D2 <span class="token arrow operator">--></span> E2<span class="token text string">[출력: Hello world!]</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">style</span> A1 <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e3f2fd</span></span>
<span class="line">    <span class="token keyword">style</span> A2 <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e3f2fd</span></span>
<span class="line">    <span class="token keyword">style</span> D1 <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e8f5e8</span></span>
<span class="line">    <span class="token keyword">style</span> E2 <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e8f5e8</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="🎯-go-언어의-핵심-특징" tabindex="-1"><a class="header-anchor" href="#🎯-go-언어의-핵심-특징"><span>🎯 Go 언어의 핵심 특징</span></a></h2>
<h3 id="✨-문법적-특징" tabindex="-1"><a class="header-anchor" href="#✨-문법적-특징"><span>✨ 문법적 특징</span></a></h3>
<ul>
<li><strong>세미콜론 불필요</strong>: 자동으로 삽입</li>
<li><strong>강타입 언어</strong>: 컴파일 시 타입 검사</li>
<li><strong>가비지 컬렉션</strong>: 자동 메모리 관리</li>
<li><strong>동시성 지원</strong>: 고루틴(Goroutine)으로 쉬운 병렬 처리</li>
</ul>
<h3 id="📦-패키지-시스템" tabindex="-1"><a class="header-anchor" href="#📦-패키지-시스템"><span>📦 패키지 시스템</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line">mindmap</span>
<span class="line">  root<span class="token text string">((Go 패키지))</span></span>
<span class="line">    표준 라이브러리</span>
<span class="line">      fmt <span class="token text string">(입출력)</span></span>
<span class="line">      net/http <span class="token text string">(웹서버)</span></span>
<span class="line">      os <span class="token text string">(운영체제)</span></span>
<span class="line">      json <span class="token text string">(JSON 처리)</span></span>
<span class="line">    사용자 정의</span>
<span class="line">      package main <span class="token text string">(실행용)</span></span>
<span class="line">      package utils <span class="token text string">(유틸리티)</span></span>
<span class="line">    외부 패키지</span>
<span class="line">      go mod <span class="token text string">(의존성 관리)</span></span>
<span class="line">      github.com <span class="token text string">(저장소)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="🚀-다음-단계-학습-로드맵" tabindex="-1"><a class="header-anchor" href="#🚀-다음-단계-학습-로드맵"><span>🚀 다음 단계 학습 로드맵</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">journey</span></span>
<span class="line">    title Go 언어 학습 여정</span>
<span class="line">    section 기초</span>
<span class="line">      Hello World<span class="token operator">:</span> 5<span class="token operator">:</span> 완료</span>
<span class="line">      변수와 상수<span class="token operator">:</span> 4<span class="token operator">:</span> 진행중</span>
<span class="line">      데이터 타입<span class="token operator">:</span> 3<span class="token operator">:</span> 예정</span>
<span class="line">    section 제어구조</span>
<span class="line">      조건문 <span class="token text string">(if/switch)</span><span class="token operator">:</span> 3<span class="token operator">:</span> 예정</span>
<span class="line">      반복문 <span class="token text string">(for)</span><span class="token operator">:</span> 3<span class="token operator">:</span> 예정</span>
<span class="line">    section 함수와 구조체</span>
<span class="line">      함수 정의<span class="token operator">:</span> 2<span class="token operator">:</span> 예정</span>
<span class="line">      구조체<span class="token operator">:</span> 2<span class="token operator">:</span> 예정</span>
<span class="line">    section 고급</span>
<span class="line">      고루틴<span class="token operator">:</span> 1<span class="token operator">:</span> 예정</span>
<span class="line">      채널<span class="token operator">:</span> 1<span class="token operator">:</span> 예정</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="💻-실습-예제" tabindex="-1"><a class="header-anchor" href="#💻-실습-예제"><span>💻 실습 예제</span></a></h2>
<h3 id="확장된-hello-world" tabindex="-1"><a class="header-anchor" href="#확장된-hello-world"><span>확장된 Hello World</span></a></h3>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go"><pre v-pre><code class="language-go"><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token string">"fmt"</span></span>
<span class="line">    <span class="token string">"time"</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Hello world!"</span><span class="token punctuation">)</span></span>
<span class="line">    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"현재 시간: %v\n"</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    name <span class="token operator">:=</span> <span class="token string">"Go 언어"</span></span>
<span class="line">    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"안녕하세요, %s!\n"</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="실행-결과" tabindex="-1"><a class="header-anchor" href="#실행-결과"><span>실행 결과</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">Hello world!</span>
<span class="line">현재 시간: 2025-08-16 15:30:45 +0900 KST</span>
<span class="line">안녕하세요, Go 언어!</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img width="405" height="67" alt="image" src="https://github.com/user-attachments/assets/6be62e67-7646-4016-8ad1-25d62adfa808" />
<hr>
<h2 id="📚-참고-자료" tabindex="-1"><a class="header-anchor" href="#📚-참고-자료"><span>📚 참고 자료</span></a></h2>
<ul>
<li><a href="https://golang.org/doc/" target="_blank" rel="noopener noreferrer">Go 공식 문서</a></li>
<li><a href="https://tour.golang.org/" target="_blank" rel="noopener noreferrer">Go Tour</a></li>
<li><a href="https://gobyexample.com/" target="_blank" rel="noopener noreferrer">Go by Example</a></li>
</ul>
<hr>
<blockquote>
<p>🎉 <strong>축하합니다!</strong> Go 언어의 첫 걸음을 성공적으로 완료했습니다!</p>
</blockquote>
</div></template>


