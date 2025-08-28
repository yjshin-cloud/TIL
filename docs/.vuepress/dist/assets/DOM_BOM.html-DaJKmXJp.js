import{_ as s,c as a,a as p,o as e}from"./app-D9gGdB3y.js";const t={};function l(i,n){return e(),a("div",null,[...n[0]||(n[0]=[p(`<h1 id="javascript-dom-bom-완벽-가이드-📚" tabindex="-1"><a class="header-anchor" href="#javascript-dom-bom-완벽-가이드-📚"><span>JavaScript DOM &amp; BOM 완벽 가이드 📚</span></a></h1><h2 id="목차" tabindex="-1"><a class="header-anchor" href="#목차"><span>목차</span></a></h2><ol><li><a href="#1-dom%EA%B3%BC-bom-%EA%B0%9C%EB%85%90-%EC%9D%B4%ED%95%B4">DOM과 BOM 개념 이해</a></li><li><a href="#2-dom-%EA%B5%AC%EC%A1%B0%EC%99%80-%EC%9E%91%EB%8F%99-%EC%9B%90%EB%A6%AC">DOM 구조와 작동 원리</a></li><li><a href="#3-dom-%EC%A1%B0%EC%9E%91-%EC%8B%A4%EC%8A%B5">DOM 조작 실습</a></li><li><a href="#4-bom-%EA%B0%9C%EB%85%90%EA%B3%BC-%ED%99%9C%EC%9A%A9">BOM 개념과 활용</a></li></ol><hr><h2 id="_1-dom과-bom-개념-이해" tabindex="-1"><a class="header-anchor" href="#_1-dom과-bom-개념-이해"><span>1. DOM과 BOM 개념 이해</span></a></h2><h3 id="dom-document-object-model-이란-🌳" tabindex="-1"><a class="header-anchor" href="#dom-document-object-model-이란-🌳"><span>DOM (Document Object Model)이란? 🌳</span></a></h3><ul><li><strong>문서 객체 모델</strong>: HTML과 XML 문서를 프로그래밍 언어로 조작할 수 있게 해주는 인터페이스</li><li>웹 페이지의 <strong>구조화된 표현</strong>을 제공하여 JavaScript가 HTML 요소들을 찾고, 변경하고, 삭제할 수 있게 함</li><li>문서를 <strong>트리 구조</strong>로 표현하여 각 요소에 접근 가능</li></ul><h3 id="bom-browser-object-model-이란-🌐" tabindex="-1"><a class="header-anchor" href="#bom-browser-object-model-이란-🌐"><span>BOM (Browser Object Model)이란? 🌐</span></a></h3><ul><li><strong>브라우저 객체 모델</strong>: 브라우저의 창(window)과 관련된 객체들을 제어하는 모델</li><li>브라우저의 <strong>창, 탭, 주소창, 히스토리</strong> 등을 JavaScript로 제어</li><li>DOM과 달리 <strong>표준이 없어</strong> 브라우저마다 조금씩 다름</li></ul><div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">[웹 브라우저]</span> <span class="token arrow operator">--&gt;</span> B<span class="token text string">[BOM - Browser Object Model]</span></span>
<span class="line">    A <span class="token arrow operator">--&gt;</span> C<span class="token text string">[DOM - Document Object Model]</span></span>
<span class="line">    </span>
<span class="line">    B <span class="token arrow operator">--&gt;</span> D<span class="token text string">[window 객체]</span></span>
<span class="line">    B <span class="token arrow operator">--&gt;</span> E<span class="token text string">[location 객체]</span></span>
<span class="line">    B <span class="token arrow operator">--&gt;</span> F<span class="token text string">[history 객체]</span></span>
<span class="line">    B <span class="token arrow operator">--&gt;</span> G<span class="token text string">[navigator 객체]</span></span>
<span class="line">    B <span class="token arrow operator">--&gt;</span> H<span class="token text string">[screen 객체]</span></span>
<span class="line">    </span>
<span class="line">    C <span class="token arrow operator">--&gt;</span> I<span class="token text string">[document 객체]</span></span>
<span class="line">    C <span class="token arrow operator">--&gt;</span> J<span class="token text string">[HTML 요소들]</span></span>
<span class="line">    C <span class="token arrow operator">--&gt;</span> K<span class="token text string">[이벤트]</span></span>
<span class="line">    C <span class="token arrow operator">--&gt;</span> L<span class="token text string">[스타일]</span></span>
<span class="line">    </span>
<span class="line">    I <span class="token arrow operator">--&gt;</span> M<span class="token text string">[getElementsById]</span></span>
<span class="line">    I <span class="token arrow operator">--&gt;</span> N<span class="token text string">[querySelector]</span></span>
<span class="line">    I <span class="token arrow operator">--&gt;</span> O<span class="token text string">[createElement]</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">style</span> A <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e1f5fe</span></span>
<span class="line">    <span class="token keyword">style</span> B <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#fff3e0</span></span>
<span class="line">    <span class="token keyword">style</span> C <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f3e5f5</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dom-vs-bom-주요-차이점" tabindex="-1"><a class="header-anchor" href="#dom-vs-bom-주요-차이점"><span>DOM vs BOM 주요 차이점</span></a></h3><table><thead><tr><th>구분</th><th>DOM</th><th>BOM</th></tr></thead><tbody><tr><td><strong>정의</strong></td><td>문서 객체 모델</td><td>브라우저 객체 모델</td></tr><tr><td><strong>주 객체</strong></td><td><code>document</code></td><td><code>window</code></td></tr><tr><td><strong>담당 영역</strong></td><td>HTML 문서 내용</td><td>브라우저 창과 환경</td></tr><tr><td><strong>표준화</strong></td><td>W3C 표준 존재</td><td>표준 없음 (브라우저마다 차이)</td></tr><tr><td><strong>주요 기능</strong></td><td>요소 추가/삭제/수정</td><td>새 창 열기, 주소 변경, 알림</td></tr></tbody></table><hr><h2 id="_2-dom-구조와-작동-원리" tabindex="-1"><a class="header-anchor" href="#_2-dom-구조와-작동-원리"><span>2. DOM 구조와 작동 원리</span></a></h2><h3 id="dom-트리-구조-🌲" tabindex="-1"><a class="header-anchor" href="#dom-트리-구조-🌲"><span>DOM 트리 구조 🌲</span></a></h3><div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    A<span class="token text string">[Document]</span> <span class="token arrow operator">--&gt;</span> B<span class="token text string">[html]</span></span>
<span class="line">    B <span class="token arrow operator">--&gt;</span> C<span class="token text string">[head]</span></span>
<span class="line">    B <span class="token arrow operator">--&gt;</span> D<span class="token text string">[body]</span></span>
<span class="line">    </span>
<span class="line">    C <span class="token arrow operator">--&gt;</span> E<span class="token text string">[title]</span></span>
<span class="line">    C <span class="token arrow operator">--&gt;</span> F<span class="token text string">[meta]</span></span>
<span class="line">    </span>
<span class="line">    D <span class="token arrow operator">--&gt;</span> G<span class="token text string">[div]</span></span>
<span class="line">    D <span class="token arrow operator">--&gt;</span> H<span class="token text string">[script]</span></span>
<span class="line">    </span>
<span class="line">    G <span class="token arrow operator">--&gt;</span> I<span class="token text string">[h1]</span></span>
<span class="line">    G <span class="token arrow operator">--&gt;</span> J<span class="token text string">[p]</span></span>
<span class="line">    G <span class="token arrow operator">--&gt;</span> K<span class="token text string">[button]</span></span>
<span class="line">    </span>
<span class="line">    I <span class="token arrow operator">--&gt;</span> L<span class="token text string">[&quot;텍스트: 제목&quot;]</span></span>
<span class="line">    J <span class="token arrow operator">--&gt;</span> M<span class="token text string">[&quot;텍스트: 내용&quot;]</span></span>
<span class="line">    K <span class="token arrow operator">--&gt;</span> N<span class="token text string">[&quot;텍스트: 클릭&quot;]</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">style</span> A <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#ffebee</span></span>
<span class="line">    <span class="token keyword">style</span> B <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#fff3e0</span></span>
<span class="line">    <span class="token keyword">style</span> C <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e8f5e8</span></span>
<span class="line">    <span class="token keyword">style</span> D <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e8f5e8</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dom-조작의-핵심-메서드들" tabindex="-1"><a class="header-anchor" href="#dom-조작의-핵심-메서드들"><span>DOM 조작의 핵심 메서드들</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">// 1. 요소 선택하기 (Finding Elements)</span></span>
<span class="line"><span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myId&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// ID로 찾기</span></span>
<span class="line"><span class="token keyword">const</span> elements <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&#39;myClass&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 클래스로 찾기</span></span>
<span class="line"><span class="token keyword">const</span> element2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#myId&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// CSS 선택자로 찾기</span></span>
<span class="line"><span class="token keyword">const</span> elements2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.myClass&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// CSS 선택자로 모두 찾기</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2. 요소 생성하기 (Creating Elements)</span></span>
<span class="line"><span class="token keyword">const</span> newDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// 새로운 div 요소 생성</span></span>
<span class="line">newDiv<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;새로운 내용&#39;</span><span class="token punctuation">;</span>                    <span class="token comment">// 텍스트 내용 설정</span></span>
<span class="line">newDiv<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">&#39;new-class&#39;</span><span class="token punctuation">;</span>                        <span class="token comment">// 클래스 설정</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3. 요소 추가하기 (Adding Elements)</span></span>
<span class="line">parentElement<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>newDiv<span class="token punctuation">)</span><span class="token punctuation">;</span>                     <span class="token comment">// 마지막 자식으로 추가</span></span>
<span class="line">parentElement<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>newDiv<span class="token punctuation">,</span> referenceElement<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 특정 위치에 추가</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 4. 요소 삭제하기 (Removing Elements)</span></span>
<span class="line">element<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                                      <span class="token comment">// 요소 자체를 삭제</span></span>
<span class="line">parentElement<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>childElement<span class="token punctuation">)</span><span class="token punctuation">;</span>              <span class="token comment">// 자식 요소 삭제</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_3-dom-조작-실습" tabindex="-1"><a class="header-anchor" href="#_3-dom-조작-실습"><span>3. DOM 조작 실습</span></a></h2><h3 id="동적-요소-추가-삭제-예제-분석" tabindex="-1"><a class="header-anchor" href="#동적-요소-추가-삭제-예제-분석"><span>동적 요소 추가/삭제 예제 분석</span></a></h3><p>다음은 실습 파일에서 가져온 핵심 코드입니다:</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code class="language-html"><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ko<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>요소 추가 및 삭제 실습<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token comment">/* 스타일링 코드 - 사용자 인터페이스를 예쁘게 만들기 위함 */</span></span>
<span class="line">        <span class="token selector">body</span> <span class="token punctuation">{</span> </span>
<span class="line">            <span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif<span class="token punctuation">;</span>  <span class="token comment">/* 글꼴을 산세리프로 설정 */</span></span>
<span class="line">            <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>            <span class="token comment">/* 바깥쪽 여백 20픽셀 */</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token selector">.container</span> <span class="token punctuation">{</span> </span>
<span class="line">            <span class="token property">max-width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>         <span class="token comment">/* 최대 너비 500픽셀 */</span></span>
<span class="line">            <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>             <span class="token comment">/* 가운데 정렬 */</span></span>
<span class="line">            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>   <span class="token comment">/* 회색 테두리 */</span></span>
<span class="line">            <span class="token property">padding</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>            <span class="token comment">/* 안쪽 여백 25픽셀 */</span></span>
<span class="line">            <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>       <span class="token comment">/* 모서리 둥글게 */</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token selector">.controls</span> <span class="token punctuation">{</span> </span>
<span class="line">            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>            <span class="token comment">/* 플렉스 레이아웃 사용 */</span></span>
<span class="line">            <span class="token property">gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>               <span class="token comment">/* 요소 간 간격 10픽셀 */</span></span>
<span class="line">            <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>     <span class="token comment">/* 아래쪽 여백 20픽셀 */</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token selector">#item-input</span> <span class="token punctuation">{</span> </span>
<span class="line">            <span class="token property">flex-grow</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>            <span class="token comment">/* 남은 공간을 모두 차지 */</span></span>
<span class="line">            <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>           <span class="token comment">/* 안쪽 여백 10픽셀 */</span></span>
<span class="line">            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ddd<span class="token punctuation">;</span>  <span class="token comment">/* 연한 회색 테두리 */</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token selector">button</span> <span class="token punctuation">{</span> </span>
<span class="line">            <span class="token property">padding</span><span class="token punctuation">:</span> 10px 15px<span class="token punctuation">;</span>      <span class="token comment">/* 위아래 10px, 좌우 15px 여백 */</span></span>
<span class="line">            <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>            <span class="token comment">/* 테두리 없음 */</span></span>
<span class="line">            <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>            <span class="token comment">/* 텍스트 색상 흰색 */</span></span>
<span class="line">            <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>         <span class="token comment">/* 마우스 오버 시 포인터 커서 */</span></span>
<span class="line">            <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>      <span class="token comment">/* 모서리 둥글게 */</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token selector">#add-btn</span> <span class="token punctuation">{</span> <span class="token property">background-color</span><span class="token punctuation">:</span> dodgerblue<span class="token punctuation">;</span> <span class="token punctuation">}</span>      <span class="token comment">/* 추가 버튼 파란색 */</span></span>
<span class="line">        <span class="token selector">#remove-first-btn</span> <span class="token punctuation">{</span> <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">/* 첫 삭제 버튼 주황색 */</span></span>
<span class="line">        <span class="token selector">#remove-last-btn</span> <span class="token punctuation">{</span> <span class="token property">background-color</span><span class="token punctuation">:</span> crimson<span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">/* 마지막 삭제 버튼 빨간색 */</span></span>
<span class="line">        </span>
<span class="line">        <span class="token selector">#item-list li</span> <span class="token punctuation">{</span> </span>
<span class="line">            <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>                    <span class="token comment">/* 각 리스트 아이템 여백 */</span></span>
<span class="line">            <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #eee<span class="token punctuation">;</span>    <span class="token comment">/* 아래쪽 구분선 */</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token selector">#item-list li:first-child</span> <span class="token punctuation">{</span> </span>
<span class="line">            <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>                <span class="token comment">/* 첫 번째 아이템 굵게 */</span></span>
<span class="line">            <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>                     <span class="token comment">/* 첫 번째 아이템 초록색 */</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token selector">#item-list li:last-child</span> <span class="token punctuation">{</span> </span>
<span class="line">            <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>                <span class="token comment">/* 마지막 아이템 굵게 */</span></span>
<span class="line">            <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>                       <span class="token comment">/* 마지막 아이템 빨간색 */</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>동적 요소 추가 및 삭제<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">&lt;!-- 사용자 입력을 받는 컨트롤 영역 --&gt;</span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>controls<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item-input<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>추가할 아이템 내용 입력...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add-btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>추가<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">&lt;!-- 삭제 버튼들 --&gt;</span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>remove-first-btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>첫 아이템 삭제<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>remove-last-btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>마지막 아이템 삭제<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">&lt;!-- 아이템들이 표시될 리스트 --&gt;</span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item-list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>(기본 아이템)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        /* ========================================================================</span>
<span class="line">         * 🎯 DOM 요소 동적 제어 (생성, 추가, 삭제)</span>
<span class="line">         * ========================================================================</span>
<span class="line">         * </span>
<span class="line">         * JavaScript의 가장 강력한 기능 중 하나는 HTML 문서를 실시간으로 변경하는 것입니다.</span>
<span class="line">         * &#39;createElement&#39;로 새 요소를 만들고, &#39;appendChild&#39;로 문서에 추가하며,</span>
<span class="line">         * &#39;remove&#39;로 기존 요소를 제거하여 사용자와 상호작용하는 동적인 페이지를 만들 수 있습니다.</span>
<span class="line">         */</span>
<span class="line"></span>
<span class="line">        // --- 1단계: 조작에 필요한 HTML 요소들 미리 선택하기 ---</span>
<span class="line">        const list = document.getElementById(&#39;item-list&#39;);           // 아이템들이 들어갈 ul 요소</span>
<span class="line">        const itemInput = document.getElementById(&#39;item-input&#39;);     // 사용자 입력을 받을 input 요소</span>
<span class="line">        const addBtn = document.getElementById(&#39;add-btn&#39;);           // 추가 기능: 모든 아이템 삭제 버튼</span>
<span class="line">const clearAllBtn = document.createElement(&#39;button&#39;);</span>
<span class="line">clearAllBtn.textContent = &#39;모든 아이템 삭제&#39;;</span>
<span class="line">clearAllBtn.style.backgroundColor = &#39;#d32f2f&#39;;</span>
<span class="line">clearAllBtn.style.color = &#39;white&#39;;</span>
<span class="line">clearAllBtn.style.border = &#39;none&#39;;</span>
<span class="line">clearAllBtn.style.padding = &#39;10px 15px&#39;;</span>
<span class="line">clearAllBtn.style.borderRadius = &#39;5px&#39;;</span>
<span class="line">clearAllBtn.style.cursor = &#39;pointer&#39;;</span>
<span class="line">clearAllBtn.style.marginTop = &#39;10px&#39;;</span>
<span class="line">clearAllBtn.style.marginRight = &#39;10px&#39;;</span>
<span class="line"></span>
<span class="line">clearAllBtn.addEventListener(&#39;click&#39;, () =&gt; {</span>
<span class="line">    if (itemCount === 0) {</span>
<span class="line">        alert(&#39;삭제할 아이템이 없습니다.&#39;);</span>
<span class="line">        return;</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    const shouldDelete = confirm(\`정말로 모든 아이템(\${itemCount}개)을 삭제하시겠습니까?\\n이 작업은 되돌릴 수 없습니다.\`);</span>
<span class="line">    if (shouldDelete) {</span>
<span class="line">        // 모든 자식 요소 제거</span>
<span class="line">        while (list.firstChild) {</span>
<span class="line">            list.removeChild(list.firstChild);</span>
<span class="line">        }</span>
<span class="line">        updateItemCount();</span>
<span class="line">        </span>
<span class="line">        // BOM 활용: 페이지 새로고침 여부 묻기</span>
<span class="line">        setTimeout(() =&gt; {</span>
<span class="line">            const shouldRefresh = confirm(&#39;모든 아이템이 삭제되었습니다. 페이지를 새로고침하시겠습니까?&#39;);</span>
<span class="line">            if (shouldRefresh) {</span>
<span class="line">                location.reload(); // 페이지 새로고침 (BOM 사용)</span>
<span class="line">            }</span>
<span class="line">        }, 500);</span>
<span class="line">    }</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">// 현재 URL 정보 표시 버튼 (BOM 활용 예제)</span>
<span class="line">const showInfoBtn = document.createElement(&#39;button&#39;);</span>
<span class="line">showInfoBtn.textContent = &#39;페이지 정보 보기&#39;;</span>
<span class="line">showInfoBtn.style.backgroundColor = &#39;#1976d2&#39;;</span>
<span class="line">showInfoBtn.style.color = &#39;white&#39;;</span>
<span class="line">showInfoBtn.style.border = &#39;none&#39;;</span>
<span class="line">showInfoBtn.style.padding = &#39;10px 15px&#39;;</span>
<span class="line">showInfoBtn.style.borderRadius = &#39;5px&#39;;</span>
<span class="line">showInfoBtn.style.cursor = &#39;pointer&#39;;</span>
<span class="line">showInfoBtn.style.marginTop = &#39;10px&#39;;</span>
<span class="line"></span>
<span class="line">showInfoBtn.addEventListener(&#39;click&#39;, () =&gt; {</span>
<span class="line">    // BOM의 여러 객체들을 활용하여 정보 수집</span>
<span class="line">    const pageInfo = \`</span>
<span class="line">📄 페이지 정보:</span>
<span class="line">• URL: \${location.href}</span>
<span class="line">• 도메인: \${location.hostname}</span>
<span class="line">• 경로: \${location.pathname}</span>
<span class="line">• 프로토콜: \${location.protocol}</span>
<span class="line"></span>
<span class="line">🖥️ 브라우저 정보:</span>
<span class="line">• 사용자 에이전트: \${navigator.userAgent}</span>
<span class="line">• 언어: \${navigator.language}</span>
<span class="line">• 플랫폼: \${navigator.platform}</span>
<span class="line">• 온라인 상태: \${navigator.onLine ? &#39;연결됨&#39; : &#39;연결 안됨&#39;}</span>
<span class="line"></span>
<span class="line">🖱️ 화면 정보:</span>
<span class="line">• 화면 크기: \${screen.width} × \${screen.height}</span>
<span class="line">• 사용 가능 크기: \${screen.availWidth} × \${screen.availHeight}</span>
<span class="line">• 브라우저 창 크기: \${window.innerWidth} × \${window.innerHeight}</span>
<span class="line"></span>
<span class="line">⏰ 현재 시간: \${new Date().toLocaleString(&#39;ko-KR&#39;)}</span>
<span class="line">    \`;</span>
<span class="line">    </span>
<span class="line">    alert(pageInfo);</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">// 버튼들을 컨테이너에 추가</span>
<span class="line">const buttonContainer = document.querySelector(&#39;.container&#39;);</span>
<span class="line">buttonContainer.appendChild(clearAllBtn);</span>
<span class="line">buttonContainer.appendChild(showInfoBtn);</span>
<span class="line"></span>
<span class="line">// 키보드 단축키 추가 (BOM의 이벤트 활용)</span>
<span class="line">document.addEventListener(&#39;keydown&#39;, (event) =&gt; {</span>
<span class="line">    // Ctrl + A: 아이템 추가에 포커스</span>
<span class="line">    if (event.ctrlKey &amp;&amp; event.key === &#39;a&#39;) {</span>
<span class="line">        event.preventDefault(); // 기본 &quot;모두 선택&quot; 동작 방지</span>
<span class="line">        itemInput.focus();</span>
<span class="line">        itemInput.select(); // 입력창 내용 모두 선택</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    // Ctrl + D: 모든 아이템 삭제</span>
<span class="line">    if (event.ctrlKey &amp;&amp; event.key === &#39;d&#39;) {</span>
<span class="line">        event.preventDefault(); // 기본 &quot;북마크 추가&quot; 동작 방지</span>
<span class="line">        clearAllBtn.click();</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    // F1: 도움말 표시</span>
<span class="line">    if (event.key === &#39;F1&#39;) {</span>
<span class="line">        event.preventDefault();</span>
<span class="line">        const helpText = \`</span>
<span class="line">🔥 단축키 도움말:</span>
<span class="line"></span>
<span class="line">• Enter: 아이템 추가</span>
<span class="line">• Ctrl + A: 입력창에 포커스</span>
<span class="line">• Ctrl + D: 모든 아이템 삭제</span>
<span class="line">• F1: 이 도움말 표시</span>
<span class="line">• F5: 페이지 새로고침</span>
<span class="line"></span>
<span class="line">💡 사용 팁:</span>
<span class="line">• 입력창에 텍스트를 입력하고 Enter를 누르면 빠르게 추가됩니다.</span>
<span class="line">• 각 아이템 옆의 ❌ 버튼으로 개별 삭제가 가능합니다.</span>
<span class="line">• 같은 내용의 아이템을 추가하려 하면 확인 메시지가 나타납니다.</span>
<span class="line">        \`;</span>
<span class="line">        alert(helpText);</span>
<span class="line">    }</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">// 페이지 떠날 때 확인 (사용자가 실수로 페이지를 닫는 것을 방지)</span>
<span class="line">window.addEventListener(&#39;beforeunload&#39;, (event) =&gt; {</span>
<span class="line">    if (itemCount &gt; 1) { // 기본 아이템 외에 추가된 아이템이 있으면</span>
<span class="line">        event.preventDefault();</span>
<span class="line">        event.returnValue = &#39;&#39;; // Chrome에서 필요</span>
<span class="line">        return &#39;&#39;; // 다른 브라우저에서 필요</span>
<span class="line">    }</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">// 초기 개수 설정</span>
<span class="line">updateItemCount();</span>
<span class="line"></span>
<span class="line">/* </span>
<span class="line"> * 🎓 학습 포인트 정리:</span>
<span class="line"> * </span>
<span class="line"> * 1. DOM 조작:</span>
<span class="line"> *    - createElement(): 새 요소 생성</span>
<span class="line"> *    - appendChild(): 요소 추가</span>
<span class="line"> *    - remove(), removeChild(): 요소 삭제</span>
<span class="line"> *    - textContent, innerHTML: 내용 설정</span>
<span class="line"> *    - style 속성: 스타일 동적 변경</span>
<span class="line"> * </span>
<span class="line"> * 2. BOM 활용:</span>
<span class="line"> *    - window.alert(), confirm(), prompt(): 사용자 상호작용</span>
<span class="line"> *    - location: URL 정보 및 페이지 이동</span>
<span class="line"> *    - navigator: 브라우저 정보</span>
<span class="line"> *    - screen: 화면 정보</span>
<span class="line"> *    - setTimeout(), setInterval(): 타이머 함수</span>
<span class="line"> * </span>
<span class="line"> * 3. 이벤트 처리:</span>
<span class="line"> *    - addEventListener(): 이벤트 리스너 등록</span>
<span class="line"> *    - 키보드 이벤트, 마우스 이벤트</span>
<span class="line"> *    - event.preventDefault(): 기본 동작 방지</span>
<span class="line"> *    - event.stopPropagation(): 이벤트 버블링 방지</span>
<span class="line"> * </span>
<span class="line"> * 4. 프로그래밍 패턴:</span>
<span class="line"> *    - 함수 분리를 통한 코드 재사용성</span>
<span class="line"> *    - 입력 검증 및 오류 처리</span>
<span class="line"> *    - 사용자 경험 개선 (확인 메시지, 단축키 등)</span>
<span class="line"> */</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_6-고급-활용-예제" tabindex="-1"><a class="header-anchor" href="#_6-고급-활용-예제"><span>6. 고급 활용 예제</span></a></h2><h3 id="실시간-시계-만들기-dom-bom-종합" tabindex="-1"><a class="header-anchor" href="#실시간-시계-만들기-dom-bom-종합"><span>실시간 시계 만들기 (DOM + BOM 종합)</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">/*</span>
<span class="line"> * 🕐 실시간 시계 만들기 예제</span>
<span class="line"> * DOM 조작과 BOM의 타이머 함수를 조합한 실용적인 예제</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 시계를 표시할 요소 생성</span></span>
<span class="line"><span class="token keyword">const</span> clockContainer <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">clockContainer<span class="token punctuation">.</span>style<span class="token punctuation">.</span>cssText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">    position: fixed;</span>
<span class="line">    top: 20px;</span>
<span class="line">    right: 20px;</span>
<span class="line">    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);</span>
<span class="line">    color: white;</span>
<span class="line">    padding: 15px 20px;</span>
<span class="line">    border-radius: 10px;</span>
<span class="line">    font-family: &#39;Courier New&#39;, monospace;</span>
<span class="line">    font-size: 18px;</span>
<span class="line">    font-weight: bold;</span>
<span class="line">    box-shadow: 0 4px 15px rgba(0,0,0,0.3);</span>
<span class="line">    z-index: 1000;</span>
<span class="line"></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// body에 시계 추가</span></span>
<span class="line">document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>clockContainer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 시간 업데이트 함수</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">updateClock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">const</span> year <span class="token operator">=</span> now<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> month <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> date <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> hours <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> minutes <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> seconds <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">const</span> timeString <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>year<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>month<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>date<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;br&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>hours<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>minutes<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>seconds<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">    clockContainer<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> timeString<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 1초마다 시계 업데이트</span></span>
<span class="line"><span class="token function">setInterval</span><span class="token punctuation">(</span>updateClock<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">updateClock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 즉시 한 번 실행</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="로컬-스토리지-활용-예제" tabindex="-1"><a class="header-anchor" href="#로컬-스토리지-활용-예제"><span>로컬 스토리지 활용 예제</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">/*</span>
<span class="line"> * 💾 로컬 스토리지를 활용한 데이터 저장</span>
<span class="line"> * (주의: Claude.ai 환경에서는 localStorage가 지원되지 않으므로 </span>
<span class="line"> *  실제 웹 환경에서만 동작합니다)</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 실제 웹 환경에서 사용할 수 있는 코드 예제:</span></span>
<span class="line"><span class="token comment">/*</span>
<span class="line">// 아이템들을 로컬 스토리지에 저장하는 함수</span>
<span class="line">function saveItemsToStorage() {</span>
<span class="line">    const items = Array.from(list.children).map(li =&gt; </span>
<span class="line">        li.textContent.replace(&#39;❌&#39;, &#39;&#39;).trim()</span>
<span class="line">    );</span>
<span class="line">    localStorage.setItem(&#39;todoItems&#39;, JSON.stringify(items));</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 로컬 스토리지에서 아이템들을 불러오는 함수</span>
<span class="line">function loadItemsFromStorage() {</span>
<span class="line">    const saved = localStorage.getItem(&#39;todoItems&#39;);</span>
<span class="line">    if (saved) {</span>
<span class="line">        const items = JSON.parse(saved);</span>
<span class="line">        items.forEach(itemText =&gt; {</span>
<span class="line">            if (itemText) {</span>
<span class="line">                const newLi = document.createElement(&#39;li&#39;);</span>
<span class="line">                newLi.textContent = itemText;</span>
<span class="line">                // 삭제 버튼 추가 로직...</span>
<span class="line">                list.appendChild(newLi);</span>
<span class="line">            }</span>
<span class="line">        });</span>
<span class="line">        updateItemCount();</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 페이지 로드 시 저장된 아이템들 불러오기</span>
<span class="line">window.addEventListener(&#39;load&#39;, loadItemsFromStorage);</span>
<span class="line"></span>
<span class="line">// 아이템 추가/삭제 시마다 저장</span>
<span class="line">// (기존 addItem 함수와 삭제 함수들에 saveItemsToStorage() 추가)</span>
<span class="line">*/</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 메모리 기반 저장소 (localStorage 대체용)</span></span>
<span class="line"><span class="token keyword">let</span> memoryStorage <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">setItem</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">getItem</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">removeItem</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">delete</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">clear</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 메모리 저장소를 활용한 아이템 저장/불러오기</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">saveItemsToMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> items <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">li</span> <span class="token operator">=&gt;</span> </span>
<span class="line">        li<span class="token punctuation">.</span>textContent<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;❌&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    memoryStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;todoItems&#39;</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;아이템들이 메모리에 저장되었습니다:&#39;</span><span class="token punctuation">,</span> items<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">loadItemsFromMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> saved <span class="token operator">=</span> memoryStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;todoItems&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>saved<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>saved<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;메모리에서 아이템들을 불러왔습니다:&#39;</span><span class="token punctuation">,</span> items<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> items<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_7-성능-최적화-팁" tabindex="-1"><a class="header-anchor" href="#_7-성능-최적화-팁"><span>7. 성능 최적화 팁</span></a></h2><h3 id="dom-조작-최적화" tabindex="-1"><a class="header-anchor" href="#dom-조작-최적화"><span>DOM 조작 최적화</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">/*</span>
<span class="line"> * 🚀 성능 최적화 팁들</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ❌ 나쁜 예: 반복문에서 DOM을 여러 번 조작</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">addMultipleItemsBad</span><span class="token punctuation">(</span><span class="token parameter">items</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    items<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> li <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        li<span class="token punctuation">.</span>textContent <span class="token operator">=</span> item<span class="token punctuation">;</span></span>
<span class="line">        list<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>li<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 매번 DOM 업데이트 발생</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ✅ 좋은 예: DocumentFragment 사용으로 성능 개선</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">addMultipleItemsGood</span><span class="token punctuation">(</span><span class="token parameter">items</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> fragment <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createDocumentFragment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    items<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> li <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        li<span class="token punctuation">.</span>textContent <span class="token operator">=</span> item<span class="token punctuation">;</span></span>
<span class="line">        fragment<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>li<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 메모리상에서만 작업</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    list<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>fragment<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 한 번에 DOM 업데이트</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 사용 예제</span></span>
<span class="line"><span class="token keyword">const</span> sampleItems <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;아이템 1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;아이템 2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;아이템 3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;아이템 4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;아이템 5&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">addMultipleItemsGood</span><span class="token punctuation">(</span>sampleItems<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="이벤트-위임-event-delegation" tabindex="-1"><a class="header-anchor" href="#이벤트-위임-event-delegation"><span>이벤트 위임 (Event Delegation)</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">/*</span>
<span class="line"> * 🎯 이벤트 위임을 통한 성능 개선</span>
<span class="line"> * 각 아이템마다 이벤트 리스너를 추가하는 대신,</span>
<span class="line"> * 부모 요소에 하나의 리스너만 추가하여 관리</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 부모 요소(list)에 이벤트 리스너 등록</span></span>
<span class="line">list<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 클릭된 요소가 삭제 버튼인지 확인</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>textContent <span class="token operator">===</span> <span class="token string">&#39;❌&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> listItem <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>parentElement<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> itemText <span class="token operator">=</span> listItem<span class="token punctuation">.</span>textContent<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;❌&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">const</span> shouldDelete <span class="token operator">=</span> <span class="token function">confirm</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>itemText<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;을(를) 삭제하시겠습니까?</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>shouldDelete<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            listItem<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token function">updateItemCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token function">saveItemsToMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 메모리에 저장</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_8-디버깅과-문제-해결" tabindex="-1"><a class="header-anchor" href="#_8-디버깅과-문제-해결"><span>8. 디버깅과 문제 해결</span></a></h2><h3 id="자주-발생하는-오류들" tabindex="-1"><a class="header-anchor" href="#자주-발생하는-오류들"><span>자주 발생하는 오류들</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">/*</span>
<span class="line"> * 🐛 자주 발생하는 오류들과 해결 방법</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 1. null 참조 오류</span></span>
<span class="line"><span class="token comment">// ❌ 문제: 요소를 찾지 못했을 때</span></span>
<span class="line"><span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;nonExistentId&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">element<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;텍스트&#39;</span><span class="token punctuation">;</span> <span class="token comment">// TypeError: Cannot set property &#39;textContent&#39; of null</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ✅ 해결: 요소 존재 여부 확인</span></span>
<span class="line"><span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;someId&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    element<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;텍스트&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;요소를 찾을 수 없습니다: someId&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2. 타이밍 문제</span></span>
<span class="line"><span class="token comment">// ❌ 문제: DOM이 로드되기 전에 접근</span></span>
<span class="line">document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myElement&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">;</span> <span class="token comment">// null 오류 가능</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ✅ 해결: DOM 로드 완료 후 실행</span></span>
<span class="line">document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;DOMContentLoaded&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myElement&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 또는 window.onload 사용</span></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 모든 리소스(이미지, 스타일시트 등)가 로드된 후 실행</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myElement&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3. 이벤트 리스너 중복 등록 방지</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">setupEventListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ❌ 문제: 함수가 여러 번 호출되면 이벤트 리스너가 중복 등록됨</span></span>
<span class="line">    button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> handleClick<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// ✅ 해결: 기존 리스너 제거 후 새로 등록</span></span>
<span class="line">    button<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> handleClick<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> handleClick<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 4. 메모리 누수 방지</span></span>
<span class="line"><span class="token keyword">let</span> timer<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">startTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 기존 타이머가 있다면 정리</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;타이머 실행 중...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">stopTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 페이지를 떠날 때 정리</span></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;beforeunload&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">stopTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="디버깅-도구-활용" tabindex="-1"><a class="header-anchor" href="#디버깅-도구-활용"><span>디버깅 도구 활용</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">/*</span>
<span class="line"> * 🔍 디버깅에 유용한 기법들</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 1. console 객체 활용</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;일반 로그:&#39;</span><span class="token punctuation">,</span> variable<span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">// 일반 정보</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;경고 메시지:&#39;</span><span class="token punctuation">,</span> warning<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">// 경고</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;에러 메시지:&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// 에러</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>                         <span class="token comment">// 배열/객체를 표 형태로 출력</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&#39;성능측정&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                     <span class="token comment">// 성능 측정 시작</span></span>
<span class="line"><span class="token comment">// ... 측정하고 싶은 코드 ...</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">&#39;성능측정&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                  <span class="token comment">// 성능 측정 종료</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2. 요소 검사</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">inspectElement</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">&#39;요소 정보:&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;태그명:&#39;</span><span class="token punctuation">,</span> element<span class="token punctuation">.</span>tagName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ID:&#39;</span><span class="token punctuation">,</span> element<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;클래스:&#39;</span><span class="token punctuation">,</span> element<span class="token punctuation">.</span>className<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;내용:&#39;</span><span class="token punctuation">,</span> element<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;스타일:&#39;</span><span class="token punctuation">,</span> window<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;부모:&#39;</span><span class="token punctuation">,</span> element<span class="token punctuation">.</span>parentElement<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;자식들:&#39;</span><span class="token punctuation">,</span> element<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">groupEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3. DOM 트리 시각화</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">visualizeDOMTree</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> depth <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> indent <span class="token operator">=</span> <span class="token string">&#39;  &#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>depth<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>indent<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>element<span class="token punctuation">.</span>tagName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>element<span class="token punctuation">.</span>id <span class="token operator">?</span> <span class="token string">&#39;#&#39;</span> <span class="token operator">+</span> element<span class="token punctuation">.</span>id <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>element<span class="token punctuation">.</span>className <span class="token operator">?</span> <span class="token string">&#39;.&#39;</span> <span class="token operator">+</span> element<span class="token punctuation">.</span>className<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>element<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">child</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">visualizeDOMTree</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> depth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 사용 예: visualizeDOMTree(document.body);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_9-마무리-및-추가-학습-자료" tabindex="-1"><a class="header-anchor" href="#_9-마무리-및-추가-학습-자료"><span>9. 마무리 및 추가 학습 자료</span></a></h2><h3 id="핵심-요약" tabindex="-1"><a class="header-anchor" href="#핵심-요약"><span>핵심 요약</span></a></h3><div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre><code class="language-mermaid"><span class="line">mindmap</span>
<span class="line">  root<span class="token text string">((JavaScript DOM &amp; BOM))</span></span>
<span class="line">    DOM</span>
<span class="line">      요소 선택</span>
<span class="line">        getElementById</span>
<span class="line">        querySelector</span>
<span class="line">        getElementsByClassName</span>
<span class="line">      요소 조작</span>
<span class="line">        createElement</span>
<span class="line">        appendChild</span>
<span class="line">        remove</span>
<span class="line">        textContent</span>
<span class="line">        innerHTML</span>
<span class="line">      이벤트 처리</span>
<span class="line">        addEventListener</span>
<span class="line">        이벤트 객체</span>
<span class="line">        이벤트 위임</span>
<span class="line">    BOM</span>
<span class="line">      window 객체</span>
<span class="line">        alert, confirm</span>
<span class="line">        setTimeout, setInterval</span>
<span class="line">        open, close</span>
<span class="line">      location 객체</span>
<span class="line">        href, reload</span>
<span class="line">        hostname, pathname</span>
<span class="line">      navigator 객체</span>
<span class="line">        userAgent</span>
<span class="line">        language</span>
<span class="line">        onLine</span>
<span class="line">      history 객체</span>
<span class="line">        back, forward</span>
<span class="line">        go</span>
<span class="line">    최적화</span>
<span class="line">      DocumentFragment</span>
<span class="line">      이벤트 위임</span>
<span class="line">      성능 측정</span>
<span class="line">      메모리 관리</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="다음-단계-학습-주제" tabindex="-1"><a class="header-anchor" href="#다음-단계-학습-주제"><span>다음 단계 학습 주제</span></a></h3><ol><li><p><strong>ES6+ 문법과 DOM</strong></p><ul><li>Arrow Functions와 이벤트 처리</li><li>Template Literals와 HTML 생성</li><li>Destructuring과 요소 속성 관리</li></ul></li><li><p><strong>고급 DOM 조작</strong></p><ul><li>Shadow DOM</li><li>Custom Elements</li><li>Web Components</li></ul></li><li><p><strong>비동기 프로그래밍과 DOM</strong></p><ul><li>Fetch API와 동적 콘텐츠 로딩</li><li>Promise/async-await와 DOM 조작</li><li>무한 스크롤, 지연 로딩</li></ul></li><li><p><strong>성능 최적화</strong></p><ul><li>Virtual DOM 개념</li><li>Intersection Observer API</li><li>메모리 프로파일링</li></ul></li></ol><h3 id="연습-문제" tabindex="-1"><a class="header-anchor" href="#연습-문제"><span>연습 문제</span></a></h3><ol><li><strong>초급</strong>: 간단한 할 일 목록 만들기</li><li><strong>중급</strong>: 드래그 앤 드롭으로 순서 변경 가능한 목록</li><li><strong>고급</strong>: 무한 스크롤이 있는 이미지 갤러리</li><li><strong>심화</strong>: 단일 페이지 애플리케이션(SPA) 라우터 구현</li></ol><h3 id="유용한-참고-자료" tabindex="-1"><a class="header-anchor" href="#유용한-참고-자료"><span>유용한 참고 자료</span></a></h3><ul><li><a href="https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model" target="_blank" rel="noopener noreferrer">MDN Web Docs - DOM</a></li><li><a href="https://developer.mozilla.org/ko/docs/Web/API/Window" target="_blank" rel="noopener noreferrer">MDN Web Docs - BOM</a></li><li><a href="https://ko.javascript.info/dom-nodes" target="_blank" rel="noopener noreferrer">JavaScript.info - DOM 조작</a></li><li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer">웹 접근성 가이드라인</a></li></ul><hr><blockquote><p>💡 <strong>학습 팁</strong>: DOM과 BOM은 실습을 통해 익히는 것이 가장 효과적입니다. 작은 프로젝트부터 시작하여 점진적으로 복잡한 기능을 추가해보세요!</p></blockquote><hr><p><em>이 가이드는 2025년 8월 25일 기준으로 작성되었습니다. 웹 표준은 지속적으로 발전하므로 최신 정보는 공식 문서를 참조하시기 바랍니다.</em> 버튼</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const removeFirstBtn = document.getElementById(&#39;remove-first-btn&#39;); // 첫 아이템 삭제 버튼</span>
<span class="line">        const removeLastBtn = document.getElementById(&#39;remove-last-btn&#39;);   // 마지막 아이템 삭제 버튼</span>
<span class="line"></span>
<span class="line">        // --- 2단계: &#39;추가&#39; 버튼에 클릭 이벤트 설정 ---</span>
<span class="line">        addBtn.addEventListener(&#39;click&#39;, () =&gt; {</span>
<span class="line">            // 사용자가 입력한 텍스트를 가져오고 앞뒤 공백을 제거</span>
<span class="line">            const newItemText = itemInput.value.trim();</span>
<span class="line">            </span>
<span class="line">            // 입력값이 비어있지 않은 경우에만 아이템을 추가</span>
<span class="line">            if (newItemText !== &#39;&#39;) {</span>
<span class="line">                /* 💡 Part 1: document.createElement(&#39;태그이름&#39;)으로 요소 생성하기</span>
<span class="line">                 * - 메모리상에 지정된 태그(예: &#39;li&#39;, &#39;div&#39;)의 새로운 HTML 요소 객체를 만듭니다.</span>
<span class="line">                 * - 이 단계에서는 아직 화면에 보이지 않습니다. (재료만 준비한 상태)</span>
<span class="line">                 */</span>
<span class="line">                const newLi = document.createElement(&#39;li&#39;);  // 새로운 li 요소 생성</span>
<span class="line">                </span>
<span class="line">                // 생성된 요소에 내용(textContent)을 채워 넣습니다.</span>
<span class="line">                newLi.textContent = newItemText;</span>
<span class="line">                </span>
<span class="line">                /* 💡 Part 2: 부모요소.appendChild(자식요소)로 DOM에 추가하기</span>
<span class="line">                 * - 생성된 요소(newLi)를 부모 요소(list)의 마지막 자식으로 추가합니다.</span>
<span class="line">                 * - 이 코드가 실행되는 순간, 새로운 요소가 화면에 나타납니다. (준비한 재료를 조립)</span>
<span class="line">                 */</span>
<span class="line">                list.appendChild(newLi);</span>
<span class="line">                </span>
<span class="line">                // 사용자 편의를 위해 입력창을 비우고 다시 포커스를 줍니다.</span>
<span class="line">                itemInput.value = &#39;&#39;;      // 입력창 내용 지우기</span>
<span class="line">                itemInput.focus();         // 입력창에 다시 포커스 주기</span>
<span class="line">            } else {</span>
<span class="line">                // 입력값이 없으면 사용자에게 알림</span>
<span class="line">                alert(&#39;추가할 아이템의 내용을 입력해주세요!&#39;);</span>
<span class="line">            }</span>
<span class="line">        });</span>
<span class="line"></span>
<span class="line">        // 입력창에서 Enter 키를 눌렀을 때도 추가 버튼이 클릭되도록 처리</span>
<span class="line">        itemInput.addEventListener(&#39;keyup&#39;, (event) =&gt; {</span>
<span class="line">            if (event.key === &#39;Enter&#39;) {   // Enter 키가 눌렸다면</span>
<span class="line">                addBtn.click();            // 추가 버튼 클릭 이벤트 실행</span>
<span class="line">            }</span>
<span class="line">        });</span>
<span class="line"></span>
<span class="line">        /* 💡 Part 3: 요소.remove()로 DOM에서 삭제하기</span>
<span class="line">         * - 선택된 요소를 DOM 트리에서 완전히 제거합니다.</span>
<span class="line">         * - 사용이 간편하고 직관적입니다.</span>
<span class="line">         */</span>
<span class="line"></span>
<span class="line">        // --- 3단계: &#39;첫 아이템 삭제&#39; 버튼에 클릭 이벤트 설정 ---</span>
<span class="line">        removeFirstBtn.addEventListener(&#39;click&#39;, () =&gt; {</span>
<span class="line">            // list.firstElementChild: list의 첫 번째 자식 요소를 선택합니다.</span>
<span class="line">            const firstItem = list.firstElementChild;</span>
<span class="line">            </span>
<span class="line">            if (firstItem) {           // 첫 번째 자식이 존재하면</span>
<span class="line">                firstItem.remove();    // 제거합니다.</span>
<span class="line">            } else {</span>
<span class="line">                alert(&#39;삭제할 아이템이 없습니다.&#39;);</span>
<span class="line">            }</span>
<span class="line">        });</span>
<span class="line"></span>
<span class="line">        // --- 4단계: &#39;마지막 아이템 삭제&#39; 버튼에 클릭 이벤트 설정 ---</span>
<span class="line">        removeLastBtn.addEventListener(&#39;click&#39;, () =&gt; {</span>
<span class="line">            // list.lastElementChild: list의 마지막 자식 요소를 선택합니다.</span>
<span class="line">            const lastItem = list.lastElementChild;</span>
<span class="line">            </span>
<span class="line">            if (lastItem) {            // 마지막 자식이 존재하면</span>
<span class="line">                lastItem.remove();     // 제거합니다.</span>
<span class="line">            } else {</span>
<span class="line">                alert(&#39;삭제할 아이템이 없습니다.&#39;);</span>
<span class="line">            }</span>
<span class="line">        });</span>
<span class="line">    &lt;/script&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dom-조작-과정-시각화" tabindex="-1"><a class="header-anchor" href="#dom-조작-과정-시각화"><span>DOM 조작 과정 시각화</span></a></h3><div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre><code class="language-mermaid"><span class="line"><span class="token keyword">sequenceDiagram</span></span>
<span class="line">    <span class="token keyword">participant</span> User as 👤 사용자</span>
<span class="line">    <span class="token keyword">participant</span> Input as 📝 입력창</span>
<span class="line">    <span class="token keyword">participant</span> JS as ⚡ JavaScript</span>
<span class="line">    <span class="token keyword">participant</span> DOM as 🌳 DOM</span>
<span class="line">    <span class="token keyword">participant</span> Browser as 🖥️ 브라우저</span>
<span class="line"></span>
<span class="line">    User<span class="token arrow operator">-&gt;&gt;</span>Input<span class="token operator">:</span> 텍스트 입력</span>
<span class="line">    User<span class="token arrow operator">-&gt;&gt;</span>JS<span class="token operator">:</span> <span class="token string">&quot;추가&quot;</span> 버튼 클릭</span>
<span class="line">    JS<span class="token arrow operator">-&gt;&gt;</span>JS<span class="token operator">:</span> input.value 읽기</span>
<span class="line">    JS<span class="token arrow operator">-&gt;&gt;</span>DOM<span class="token operator">:</span> createElement<span class="token text string">(&#39;li&#39;)</span></span>
<span class="line">    DOM<span class="token arrow operator">-&gt;&gt;</span>JS<span class="token operator">:</span> 새 li 요소 반환</span>
<span class="line">    JS<span class="token arrow operator">-&gt;&gt;</span>DOM<span class="token operator">:</span> newLi.textContent 설정</span>
<span class="line">    JS<span class="token arrow operator">-&gt;&gt;</span>DOM<span class="token operator">:</span> list.appendChild<span class="token text string">(newLi)</span></span>
<span class="line">    DOM<span class="token arrow operator">-&gt;&gt;</span>Browser<span class="token operator">:</span> 화면 업데이트</span>
<span class="line">    Browser<span class="token arrow operator">-&gt;&gt;</span>User<span class="token operator">:</span> 새 아이템 표시</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_4-bom-개념과-활용" tabindex="-1"><a class="header-anchor" href="#_4-bom-개념과-활용"><span>4. BOM 개념과 활용</span></a></h2><h3 id="bom의-주요-객체들" tabindex="-1"><a class="header-anchor" href="#bom의-주요-객체들"><span>BOM의 주요 객체들</span></a></h3><div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> LR</span>
<span class="line">    A<span class="token text string">[window 객체]</span> <span class="token arrow operator">--&gt;</span> B<span class="token text string">[document]</span></span>
<span class="line">    A <span class="token arrow operator">--&gt;</span> C<span class="token text string">[location]</span></span>
<span class="line">    A <span class="token arrow operator">--&gt;</span> D<span class="token text string">[history]</span></span>
<span class="line">    A <span class="token arrow operator">--&gt;</span> E<span class="token text string">[navigator]</span></span>
<span class="line">    A <span class="token arrow operator">--&gt;</span> F<span class="token text string">[screen]</span></span>
<span class="line">    A <span class="token arrow operator">--&gt;</span> G<span class="token text string">[setTimeout/setInterval]</span></span>
<span class="line">    </span>
<span class="line">    B <span class="token arrow operator">--&gt;</span> B1<span class="token text string">[DOM 조작]</span></span>
<span class="line">    C <span class="token arrow operator">--&gt;</span> C1<span class="token text string">[URL 제어]</span></span>
<span class="line">    D <span class="token arrow operator">--&gt;</span> D1<span class="token text string">[페이지 히스토리]</span></span>
<span class="line">    E <span class="token arrow operator">--&gt;</span> E1<span class="token text string">[브라우저 정보]</span></span>
<span class="line">    F <span class="token arrow operator">--&gt;</span> F1<span class="token text string">[화면 정보]</span></span>
<span class="line">    G <span class="token arrow operator">--&gt;</span> G1<span class="token text string">[타이머 함수]</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">style</span> A <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#ffcdd2</span></span>
<span class="line">    <span class="token keyword">style</span> B <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f8bbd9</span></span>
<span class="line">    <span class="token keyword">style</span> C <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#e1bee7</span></span>
<span class="line">    <span class="token keyword">style</span> D <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#d1c4e9</span></span>
<span class="line">    <span class="token keyword">style</span> E <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#c5cae9</span></span>
<span class="line">    <span class="token keyword">style</span> F <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#bbdefb</span></span>
<span class="line">    <span class="token keyword">style</span> G <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#b2dfdb</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bom-활용-예제" tabindex="-1"><a class="header-anchor" href="#bom-활용-예제"><span>BOM 활용 예제</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">// 1. window 객체 - 브라우저 창 제어</span></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;안녕하세요!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                    <span class="token comment">// 경고창 표시</span></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">&#39;정말로 삭제하시겠습니까?&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// 확인창 표시</span></span>
<span class="line"><span class="token keyword">const</span> userInput <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&#39;이름을 입력하세요:&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 입력창 표시</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 새 창 열기</span></span>
<span class="line"><span class="token keyword">const</span> newWindow <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token string">&#39;https://www.google.com&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// URL</span></span>
<span class="line">    <span class="token string">&#39;_blank&#39;</span><span class="token punctuation">,</span>                  <span class="token comment">// 창 이름 (_blank는 새 탭)</span></span>
<span class="line">    <span class="token string">&#39;width=800,height=600&#39;</span>     <span class="token comment">// 창 옵션</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2. location 객체 - 현재 페이지 URL 정보와 제어</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 현재 페이지의 전체 URL</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>hostname<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 도메인 이름 (예: www.google.com)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 경로 부분 (예: /search)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>search<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 쿼리 문자열 (예: ?q=javascript)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 페이지 이동</span></span>
<span class="line">location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&#39;https://www.naver.com&#39;</span><span class="token punctuation">;</span>        <span class="token comment">// 새 페이지로 이동</span></span>
<span class="line">location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                              <span class="token comment">// 페이지 새로고침</span></span>
<span class="line">location<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;https://www.daum.net&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// 히스토리 없이 페이지 교체</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3. history 객체 - 브라우저 히스토리 제어</span></span>
<span class="line">history<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// 뒤로 가기 (브라우저 뒤로 가기 버튼과 같음)</span></span>
<span class="line">history<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// 앞으로 가기</span></span>
<span class="line">history<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// 2단계 뒤로 가기</span></span>
<span class="line">history<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">// 1단계 앞으로 가기</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 4. navigator 객체 - 브라우저 정보</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 브라우저 정보 문자열</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>language<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 브라우저 언어 (예: ko-KR)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>platform<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 운영체제 정보</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>onLine<span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// 인터넷 연결 상태 (true/false)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 5. screen 객체 - 사용자 화면 정보</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span>width<span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">// 화면 너비 (픽셀)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// 화면 높이 (픽셀)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span>availWidth<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// 사용 가능한 화면 너비</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span>availHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 사용 가능한 화면 높이</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 6. 타이머 함수들</span></span>
<span class="line"><span class="token comment">// setTimeout: 일정 시간 후 한 번 실행</span></span>
<span class="line"><span class="token keyword">const</span> timeoutId <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;3초 후에 실행됩니다!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3000ms = 3초</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// setInterval: 일정 시간마다 반복 실행</span></span>
<span class="line"><span class="token keyword">const</span> intervalId <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;2초마다 반복 실행됩니다!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2000ms = 2초</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 타이머 취소</span></span>
<span class="line"><span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeoutId<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// setTimeout 취소</span></span>
<span class="line"><span class="token function">clearInterval</span><span class="token punctuation">(</span>intervalId<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// setInterval 취소</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,65)])])}const o=s(t,[["render",l]]),u=JSON.parse('{"path":"/Programming_Languages/FrontEnd/JS/DOM_BOM.html","title":"JavaScript DOM & BOM 완벽 가이드 📚","lang":"ko-KR","frontmatter":{},"git":{"updatedTime":1756341293000,"contributors":[{"name":"yjshin-cloud","username":"yjshin-cloud","email":"yjshin.cloud@gmail.com","commits":1,"url":"https://github.com/yjshin-cloud"},{"name":"yjshin.cloud","username":"","email":"yjshin.cloud@gmail.com","commits":2}],"changelog":[{"hash":"3911126b4a8313145fda193ff928652a5a71f75e","time":1756341293000,"email":"yjshin.cloud@gmail.com","author":"yjshin.cloud","message":"test 9"},{"hash":"a25b1690258363e622bea4ff5ccd8e22aaa7ddef","time":1756307520000,"email":"yjshin.cloud@gmail.com","author":"yjshin.cloud","message":"TEST4"},{"hash":"d07046d76b9328fb41136ce739865cfdebde4fef","time":1756121352000,"email":"yjshin.cloud@gmail.com","author":"yjshin-cloud","message":"Create DOM&#x26;BOM.md"}]},"filePathRelative":"Programming_Languages/FrontEnd/JS/DOM&BOM.md"}');export{o as comp,u as data};
