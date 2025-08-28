<template><div><h1 id="멋사-19일차-til-dom-bom-비동기-프로그래밍-📚" tabindex="-1"><a class="header-anchor" href="#멋사-19일차-til-dom-bom-비동기-프로그래밍-📚"><span>멋사 19일차 TIL - DOM &amp; BOM &amp; 비동기 프로그래밍 📚</span></a></h1>
<h2 id="📅-학습-날짜" tabindex="-1"><a class="header-anchor" href="#📅-학습-날짜"><span>📅 학습 날짜</span></a></h2>
<p><strong>2025년 8월 25일 (월)</strong></p>
<h2 id="📝-오늘-배운-내용-요약" tabindex="-1"><a class="header-anchor" href="#📝-오늘-배운-내용-요약"><span>📝 오늘 배운 내용 요약</span></a></h2>
<ul>
<li>🌳 <strong>오전</strong>: DOM (Document Object Model) - 웹페이지 요소 조작</li>
<li>🌐 <strong>오후</strong>: BOM (Browser Object Model) - 브라우저 제어</li>
<li>🚀 <strong>오후</strong>: 비동기 프로그래밍 - Promise, async/await</li>
</ul>
<hr>
<h2 id="🌳-dom-document-object-model" tabindex="-1"><a class="header-anchor" href="#🌳-dom-document-object-model"><span>🌳 DOM (Document Object Model)</span></a></h2>
<h3 id="dom이-뭔가요" tabindex="-1"><a class="header-anchor" href="#dom이-뭔가요"><span>DOM이 뭔가요?</span></a></h3>
<p>DOM은 <strong>웹페이지의 HTML을 JavaScript로 조작할 수 있게 해주는 도구</strong>입니다.
쉽게 말해, 웹페이지의 내용을 프로그램으로 바꾸거나 추가할 수 있게 해줍니다.</p>
<h3 id="🔧-주요-기능들" tabindex="-1"><a class="header-anchor" href="#🔧-주요-기능들"><span>🔧 주요 기능들</span></a></h3>
<h4 id="_1-요소-찾기" tabindex="-1"><a class="header-anchor" href="#_1-요소-찾기"><span>1. 요소 찾기</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// ID로 찾기 (가장 많이 사용)</span></span>
<span class="line"><span class="token keyword">const</span> button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myButton'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 클래스명으로 찾기</span></span>
<span class="line"><span class="token keyword">const</span> items <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">'item'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// CSS 선택자로 찾기 (편리함)</span></span>
<span class="line"><span class="token keyword">const</span> title <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#title'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> allButtons <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'.btn'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-요소-만들고-추가하기" tabindex="-1"><a class="header-anchor" href="#_2-요소-만들고-추가하기"><span>2. 요소 만들고 추가하기</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 새로운 요소 만들기</span></span>
<span class="line"><span class="token keyword">const</span> newDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">newDiv<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">'안녕하세요!'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 페이지에 추가하기</span></span>
<span class="line">document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>newDiv<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-요소-삭제하기" tabindex="-1"><a class="header-anchor" href="#_3-요소-삭제하기"><span>3. 요소 삭제하기</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 요소 삭제</span></span>
<span class="line">element<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="💡-실제-활용-예제" tabindex="-1"><a class="header-anchor" href="#💡-실제-활용-예제"><span>💡 실제 활용 예제</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 버튼을 클릭하면 새로운 아이템이 추가되는 코드</span></span>
<span class="line"><span class="token keyword">const</span> addButton <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'add-btn'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> itemList <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'item-list'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> textInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'text-input'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">addButton<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> newItem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'li'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    newItem<span class="token punctuation">.</span>textContent <span class="token operator">=</span> textInput<span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>
<span class="line">    itemList<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>newItem<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    textInput<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span> <span class="token comment">// 입력창 비우기</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="🌐-bom-browser-object-model" tabindex="-1"><a class="header-anchor" href="#🌐-bom-browser-object-model"><span>🌐 BOM (Browser Object Model)</span></a></h2>
<h3 id="bom이-뭔가요" tabindex="-1"><a class="header-anchor" href="#bom이-뭔가요"><span>BOM이 뭔가요?</span></a></h3>
<p>BOM은 <strong>브라우저 자체를 JavaScript로 제어할 수 있게 해주는 도구</strong>입니다.
새 창을 열거나, 페이지를 이동하거나, 브라우저 정보를 알아낼 수 있습니다.</p>
<h3 id="🔧-주요-객체들" tabindex="-1"><a class="header-anchor" href="#🔧-주요-객체들"><span>🔧 주요 객체들</span></a></h3>
<h4 id="_1-window-객체-브라우저-창-제어" tabindex="-1"><a class="header-anchor" href="#_1-window-객체-브라우저-창-제어"><span>1. window 객체 - 브라우저 창 제어</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 알림창 띄우기</span></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'안녕하세요!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 확인/취소 선택하기</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">'정말 삭제하시겠습니까?'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 사용자 입력받기</span></span>
<span class="line"><span class="token keyword">const</span> name <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'이름을 입력하세요:'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-location-객체-현재-페이지-url-정보" tabindex="-1"><a class="header-anchor" href="#_2-location-객체-현재-페이지-url-정보"><span>2. location 객체 - 현재 페이지 URL 정보</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 현재 페이지 주소 확인</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 다른 페이지로 이동</span></span>
<span class="line">location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">'https://www.google.com'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 페이지 새로고침</span></span>
<span class="line">location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-navigator-객체-브라우저-정보" tabindex="-1"><a class="header-anchor" href="#_3-navigator-객체-브라우저-정보"><span>3. navigator 객체 - 브라우저 정보</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 브라우저 종류 확인</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 언어 설정 확인</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>language<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 예: "ko-KR"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 인터넷 연결 상태 확인</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>onLine<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true/false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-타이머-함수들" tabindex="-1"><a class="header-anchor" href="#_4-타이머-함수들"><span>4. 타이머 함수들</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 3초 후에 한 번 실행</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'3초가 지났습니다!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2초마다 반복 실행</span></span>
<span class="line"><span class="token keyword">const</span> timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'2초마다 실행됩니다!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 타이머 정지</span></span>
<span class="line"><span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="🚀-비동기-프로그래밍" tabindex="-1"><a class="header-anchor" href="#🚀-비동기-프로그래밍"><span>🚀 비동기 프로그래밍</span></a></h2>
<h3 id="비동기가-뭔가요" tabindex="-1"><a class="header-anchor" href="#비동기가-뭔가요"><span>비동기가 뭔가요?</span></a></h3>
<p><strong>기다리지 않고 다른 일도 동시에 하는 프로그래밍 방식</strong>입니다.</p>
<h4 id="🏪-실생활-예시" tabindex="-1"><a class="header-anchor" href="#🏪-실생활-예시"><span>🏪 실생활 예시</span></a></h4>
<ul>
<li><strong>동기</strong>: 은행에서 번호표 뽑고 순서 기다리기</li>
<li><strong>비동기</strong>: 온라인 주문하고 배송 기다리면서 다른 일하기</li>
</ul>
<h3 id="📱-javascript에서의-비동기-처리" tabindex="-1"><a class="header-anchor" href="#📱-javascript에서의-비동기-처리"><span>📱 JavaScript에서의 비동기 처리</span></a></h3>
<h4 id="_1-promise-약속-같은-것" tabindex="-1"><a class="header-anchor" href="#_1-promise-약속-같은-것"><span>1. Promise - 약속 같은 것</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 피자 주문하는 함수 (시간이 걸림)</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">orderPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'🍕 피자 주문 중...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> success <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0.2</span><span class="token punctuation">;</span> <span class="token comment">// 80% 확률로 성공</span></span>
<span class="line">            </span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'🍕 맛있는 피자 완성!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">'😢 재료가 떨어졌습니다'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Promise 사용하기</span></span>
<span class="line"><span class="token function">orderPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'성공:'</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'실패:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-async-await-더-쉬운-방법-추천-⭐" tabindex="-1"><a class="header-anchor" href="#_2-async-await-더-쉬운-방법-추천-⭐"><span>2. async/await - 더 쉬운 방법 (추천! ⭐)</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 위와 같은 기능을 더 쉽게</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">buyPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'피자 주문 시작!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">orderPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 피자가 올 때까지 기다림</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'받은 피자:'</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'맛있게 먹겠습니다! 🍽️'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'주문 실패:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'다른 음식을 주문해야겠네요...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">buyPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🌤️-실제-활용-예제-날씨-정보-가져오기" tabindex="-1"><a class="header-anchor" href="#🌤️-실제-활용-예제-날씨-정보-가져오기"><span>🌤️ 실제 활용 예제 - 날씨 정보 가져오기</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 날씨 API 호출하는 함수</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getWeather</span><span class="token punctuation">(</span><span class="token parameter">city</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>city<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">의 날씨 확인 중...</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 실제로는 진짜 API를 호출합니다</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> weather <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">city</span><span class="token operator">:</span> city<span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">temperature</span><span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">30</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">condition</span><span class="token operator">:</span> <span class="token string">'맑음'</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token function">resolve</span><span class="token punctuation">(</span>weather<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 여러 도시 날씨를 동시에 확인</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">checkMultipleWeather</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> cities <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'서울'</span><span class="token punctuation">,</span> <span class="token string">'부산'</span><span class="token punctuation">,</span> <span class="token string">'대구'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 모든 도시의 날씨를 동시에 요청</span></span>
<span class="line">        <span class="token keyword">const</span> weatherPromises <span class="token operator">=</span> cities<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">city</span> <span class="token operator">=></span> <span class="token function">getWeather</span><span class="token punctuation">(</span>city<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> results <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>weatherPromises<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        results<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">weather</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>weather<span class="token punctuation">.</span>city<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>weather<span class="token punctuation">.</span>temperature<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">°C, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>weather<span class="token punctuation">.</span>condition<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'날씨 정보 가져오기 실패:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">checkMultipleWeather</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="🎯-오늘의-핵심-정리" tabindex="-1"><a class="header-anchor" href="#🎯-오늘의-핵심-정리"><span>🎯 오늘의 핵심 정리</span></a></h2>
<h3 id="dom-오전-학습" tabindex="-1"><a class="header-anchor" href="#dom-오전-학습"><span>DOM (오전 학습)</span></a></h3>
<ul>
<li><strong>웹페이지 조작</strong>: HTML 요소를 찾고, 추가하고, 삭제하기</li>
<li><strong>이벤트 처리</strong>: 버튼 클릭, 키보드 입력 등에 반응하기</li>
<li><strong>동적 웹페이지</strong>: 사용자와 상호작용하는 웹사이트 만들기</li>
</ul>
<h3 id="bom-오후-학습" tabindex="-1"><a class="header-anchor" href="#bom-오후-학습"><span>BOM (오후 학습)</span></a></h3>
<ul>
<li><strong>브라우저 제어</strong>: 새 창, 알림창, 페이지 이동</li>
<li><strong>브라우저 정보</strong>: 사용자 환경 확인하기</li>
<li><strong>타이머</strong>: 일정 시간 후 코드 실행하기</li>
</ul>
<h3 id="비동기-프로그래밍-오후-학습" tabindex="-1"><a class="header-anchor" href="#비동기-프로그래밍-오후-학습"><span>비동기 프로그래밍 (오후 학습)</span></a></h3>
<ul>
<li><strong>효율적 처리</strong>: 기다리는 시간에 다른 일하기</li>
<li><strong>Promise</strong>: 미래에 완료될 작업 약속하기</li>
<li><strong>async/await</strong>: 비동기 코드를 동기처럼 쉽게 작성하기</li>
</ul>
<hr>
<h2 id="💪-내일-할-일" tabindex="-1"><a class="header-anchor" href="#💪-내일-할-일"><span>💪 내일 할 일</span></a></h2>
<ul>
<li>[ ] DOM 조작 연습 프로젝트 만들기</li>
<li>[ ] 실제 웹 API와 연동해보기</li>
<li>[ ] 비동기 처리 더 깊이 공부하기</li>
</ul>
<hr>
<h2 id="🤔-어려웠던-점" tabindex="-1"><a class="header-anchor" href="#🤔-어려웠던-점"><span>🤔 어려웠던 점</span></a></h2>
<ol>
<li><strong>비동기 개념</strong>: 처음에는 코드 실행 순서가 헷갈렸음</li>
<li><strong>Promise 체이닝</strong>: <code v-pre>.then()</code> 연결하는 방법이 복잡했음</li>
<li><strong>에러 처리</strong>: try/catch 사용하는 타이밍</li>
</ol>
<h2 id="💡-깨달은-점" tabindex="-1"><a class="header-anchor" href="#💡-깨달은-점"><span>💡 깨달은 점</span></a></h2>
<ol>
<li><strong>async/await가 Promise보다 훨씬 이해하기 쉬움</strong></li>
<li><strong>DOM 조작으로 정말 동적인 웹페이지를 만들 수 있음</strong></li>
<li><strong>비동기 처리는 사용자 경험을 크게 개선함</strong></li>
</ol>
<h2 id="📚-추가-공부하면-좋을-것들" tabindex="-1"><a class="header-anchor" href="#📚-추가-공부하면-좋을-것들"><span>📚 추가 공부하면 좋을 것들</span></a></h2>
<ul>
<li>Fetch API로 실제 서버와 통신하기</li>
<li>이벤트 위임(Event Delegation) 패턴</li>
<li>웹 컴포넌트(Web Components)</li>
<li>RxJS 같은 반응형 프로그래밍 라이브러리</li>
</ul>
<hr>
<h2 id="🔗-관련-학습-자료" tabindex="-1"><a class="header-anchor" href="#🔗-관련-학습-자료"><span>🔗 관련 학습 자료</span></a></h2>
<ul>
<li>📚 <strong><a href="https://github.com/yjshin-cloud/TIL/blob/main/Programming_Languages/FrontEnd/JS/DOM%26BOM.md" target="_blank" rel="noopener noreferrer">DOM &amp; BOM 상세 가이드</a></strong> - 오늘 학습한 DOM과 BOM의 완전 가이드</li>
<li>🚀 <strong><a href="https://github.com/yjshin-cloud/TIL/blob/main/Programming_Languages/FrontEnd/JS/ASYNC.md" target="_blank" rel="noopener noreferrer">비동기 프로그래밍 완벽 정리</a></strong> - Promise와 async/await 마스터하기</li>
</ul>
<p><em>오늘도 고생했다! 내일은 더 재미있는 프로젝트를 만들어보자! 🎉</em></p>
</div></template>


