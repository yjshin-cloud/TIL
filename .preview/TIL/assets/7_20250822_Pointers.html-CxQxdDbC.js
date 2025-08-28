import{_ as a,c as n,a as e,o as i}from"./app-D9gGdB3y.js";const l={};function p(r,s){return i(),n("div",null,[...s[0]||(s[0]=[e(`<h1 id="🔎-go-언어에서의-low-level-programming-포인터-기초" tabindex="-1"><a class="header-anchor" href="#🔎-go-언어에서의-low-level-programming-포인터-기초"><span>🔎 Go 언어에서의 Low-Level Programming (포인터 기초)</span></a></h1><p>Go는 고수준 언어이지만, &amp;(주소 연산자)와 *(포인터/역참조 연산자)를 통해 메모리 주소에 직접 접근하고 값을 변경하는 Low-Level Programming을 지원합니다. 이는 JavaScript, Python에서는 할 수 없는 부분이고, C 언어와 유사한 기능입니다.</p><h2 id="📌-1-값-복사-value-copy-vs-메모리-참조-memory-reference" tabindex="-1"><a class="header-anchor" href="#📌-1-값-복사-value-copy-vs-메모리-참조-memory-reference"><span>📌 1. 값 복사(Value Copy) vs 메모리 참조(Memory Reference)</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">package main</span>
<span class="line"></span>
<span class="line">import &quot;fmt&quot;</span>
<span class="line"></span>
<span class="line">func main() {</span>
<span class="line">    a := 2</span>
<span class="line">    b := a // 값 복사</span>
<span class="line">    fmt.Println(a, b) // 2 2</span>
<span class="line"></span>
<span class="line">    a = 10</span>
<span class="line">    fmt.Println(a, b) // 10 2 → b는 영향을 받지 않음</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="✅-설명" tabindex="-1"><a class="header-anchor" href="#✅-설명"><span>✅ 설명</span></a></h2><p>b := a 는 값을 복사하는 것</p><p>따라서 a 값을 변경해도 b에는 영향이 없음</p><h2 id="📌-2-메모리-주소-확인하기" tabindex="-1"><a class="header-anchor" href="#📌-2-메모리-주소-확인하기"><span>📌 2. 메모리 주소 확인하기</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">package main</span>
<span class="line"></span>
<span class="line">import &quot;fmt&quot;</span>
<span class="line"></span>
<span class="line">func main() {</span>
<span class="line">    a := 2</span>
<span class="line">    b := 2</span>
<span class="line">    fmt.Println(&amp;a, &amp;b) // 각 변수의 메모리 주소 출력</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="✅-출력-예시" tabindex="-1"><a class="header-anchor" href="#✅-출력-예시"><span>✅ 출력 예시</span></a></h2><p>0xc0000140a8 0xc0000140b0</p><p>&amp;a : 변수 a의 메모리 주소</p><p>&amp;b : 변수 b의 메모리 주소</p><p>서로 다른 메모리 공간에 저장되어 있음을 알 수 있음</p><h2 id="📌-3-포인터-변수-pointer-선언" tabindex="-1"><a class="header-anchor" href="#📌-3-포인터-변수-pointer-선언"><span>📌 3. 포인터 변수(pointer) 선언</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">package main</span>
<span class="line"></span>
<span class="line">import &quot;fmt&quot;</span>
<span class="line"></span>
<span class="line">func main() {</span>
<span class="line">    a := 2</span>
<span class="line">    b := &amp;a // b는 a의 메모리 주소를 저장</span>
<span class="line">    fmt.Println(a, *b) // 2 2</span>
<span class="line"></span>
<span class="line">    a = 10</span>
<span class="line">    fmt.Println(a, *b) // 10 10</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="✅-설명-1" tabindex="-1"><a class="header-anchor" href="#✅-설명-1"><span>✅ 설명</span></a></h2><p>b := &amp;a → b는 a의 주소를 저장 (포인터 변수)</p><p>*b → b가 가리키는 메모리 주소에 저장된 실제 값을 가져옴</p><p>따라서 a와 *b는 항상 같은 값을 가짐</p><h2 id="📌-4-포인터를-통한-값-변경" tabindex="-1"><a class="header-anchor" href="#📌-4-포인터를-통한-값-변경"><span>📌 4. 포인터를 통한 값 변경</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">package main</span>
<span class="line"></span>
<span class="line">import &quot;fmt&quot;</span>
<span class="line"></span>
<span class="line">func main() {</span>
<span class="line">    a := 2</span>
<span class="line">    b := &amp;a // b는 a의 주소</span>
<span class="line"></span>
<span class="line">    *b = 20 // b가 가리키는 메모리의 값을 변경</span>
<span class="line">    fmt.Println(a) // 20 → a의 값이 바뀜</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="✅-설명-2" tabindex="-1"><a class="header-anchor" href="#✅-설명-2"><span>✅ 설명</span></a></h2><p>*b = 20 은 b가 가리키는 주소(a)의 값을 20으로 변경</p><p>결과적으로 a의 값도 바뀜</p><h2 id="📊-mermaid-시각화" tabindex="-1"><a class="header-anchor" href="#📊-mermaid-시각화"><span>📊 Mermaid 시각화</span></a></h2><div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre><code class="language-mermaid"><span class="line"><span class="token keyword">flowchart</span> TD</span>
<span class="line">    A<span class="token text string">[&quot;a := 2&quot;]</span> <span class="token arrow operator">--&gt;</span> B<span class="token text string">[&quot;b := &amp;a (포인터)&quot;]</span></span>
<span class="line">    B <span class="token arrow operator">--&gt;</span> C<span class="token text string">[&quot;*b → 2 (a의 값)&quot;]</span></span>
<span class="line">    A <span class="token arrow operator">--&gt;</span> D<span class="token text string">[&quot;a = 10 변경&quot;]</span></span>
<span class="line">    D <span class="token arrow operator">--&gt;</span> C</span>
<span class="line">    C <span class="token arrow operator">--&gt;</span> E<span class="token text string">[&quot;*b도 10으로 변경됨&quot;]</span></span>
<span class="line">    E <span class="token arrow operator">--&gt;</span> F<span class="token text string">[&quot;포인터를 통해 메모리에 직접 접근 가능&quot;]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📝-핵심-요약" tabindex="-1"><a class="header-anchor" href="#📝-핵심-요약"><span>📝 핵심 요약</span></a></h2><p>&amp; : 변수의 메모리 주소를 반환</p><ul><li>: 해당 메모리 주소에 저장된 값을 조회/변경</li></ul><h3 id="🎯-포인터-사용-이유" tabindex="-1"><a class="header-anchor" href="#🎯-포인터-사용-이유"><span>🎯 포인터 사용 이유</span></a></h3><ol><li>불필요한 값 복사 방지</li></ol><ul><li>변수를 그대로 넘기면 값이 복사되지만, 포인터를 사용하면 원본을 직접 참조할 수 있음.</li></ul><ol start="2"><li>큰 데이터 구조 공유</li></ol><ul><li><p>배열, 구조체처럼 큰 데이터를 함수로 전달할 때 복사 비용이 큼.</p></li><li><p>포인터를 사용하면 같은 메모리 주소를 바라보므로 효율적임.</p></li></ul><ol start="3"><li>메모리 효율 및 성능 향상</li></ol><ul><li><p>불필요한 메모리 낭비를 줄이고, 빠른 실행을 가능하게 함.</p></li><li><p>특히 대규모 데이터 처리에서 큰 장점이 됨.</p></li></ul><div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre><code class="language-mermaid"><span class="line"><span class="token keyword">flowchart</span> TD</span>
<span class="line">    <span class="token comment">%% 값 복사 방식</span></span>
<span class="line">    <span class="token keyword">subgraph</span> A<span class="token text string">[값 복사 방식]</span></span>
<span class="line">        A1<span class="token text string">[데이터 생성]</span> <span class="token arrow operator">--&gt;</span> A2<span class="token text string">[새 변수에 값 복사]</span></span>
<span class="line">        A2 <span class="token arrow operator">--&gt;</span> A3<span class="token text string">[메모리에 별도 공간 차지]</span></span>
<span class="line">        A3 <span class="token arrow operator">--&gt;</span> A4<span class="token text string">[큰 데이터일 경우 비효율적]</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">%% 포인터 방식</span></span>
<span class="line">    <span class="token keyword">subgraph</span> B<span class="token text string">[포인터 방식]</span></span>
<span class="line">        B1<span class="token text string">[데이터 생성]</span> <span class="token arrow operator">--&gt;</span> B2<span class="token text string">[변수에 주소 저장]</span></span>
<span class="line">        B2 <span class="token arrow operator">--&gt;</span> B3<span class="token text string">[*를 통해 원본 값 접근]</span></span>
<span class="line">        B3 <span class="token arrow operator">--&gt;</span> B4<span class="token text string">[같은 메모리 참조 → 복사 없음]</span></span>
<span class="line">        B4 <span class="token arrow operator">--&gt;</span> B5<span class="token text string">[메모리 효율 및 성능 향상]</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">%% 비교 연결</span></span>
<span class="line">    A4 <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span> <span class="token label property">비교</span> <span class="token arrow operator">.-&gt;</span></span> B5</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="📌-해설" tabindex="-1"><a class="header-anchor" href="#📌-해설"><span>📌 해설</span></a></h3><ul><li>값 복사 방식 → 새로운 공간에 값이 복제됨 → 메모리 낭비 &amp; 성능 저하</li></ul><p>포인터 방식 → 기존 데이터의 주소만 공유 → 효율적이고 빠름</p><p>👉 정리하면, Go는 안전하면서도 포인터를 제공해서 C처럼 메모리를 다루되 복잡하지 않고 간단하게 Low-Level Programming을 할 수 있는 게 장점입니다.</p>`,42)])])}const c=a(l,[["render",p]]),d=JSON.parse('{"path":"/Programming_Languages/BackEnd/Go/NomadCoders/Getting_Started_with_Go_Quickly_and_Easily/7_20250822_Pointers.html","title":"🔎 Go 언어에서의 Low-Level Programming (포인터 기초)","lang":"ko-KR","frontmatter":{},"git":{"updatedTime":1756307520000,"contributors":[{"name":"yjshin-cloud","username":"yjshin-cloud","email":"yjshin.cloud@gmail.com","commits":1,"url":"https://github.com/yjshin-cloud"},{"name":"yjshin.cloud","username":"","email":"yjshin.cloud@gmail.com","commits":1}],"changelog":[{"hash":"a25b1690258363e622bea4ff5ccd8e22aaa7ddef","time":1756307520000,"email":"yjshin.cloud@gmail.com","author":"yjshin.cloud","message":"TEST4"},{"hash":"4562088e8f3d4c18546b78ab970d6c24cd9d7445","time":1755884141000,"email":"yjshin.cloud@gmail.com","author":"yjshin-cloud","message":"Create 7_20250822_Pointers.md"}]},"filePathRelative":"Programming_Languages/BackEnd/Go/NomadCoders/Getting_Started_with_Go_Quickly_and_Easily/7_20250822_Pointers.md"}');export{c as comp,d as data};
