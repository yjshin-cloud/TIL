<template><div><h1 id="📚-rust-배우기-–-chars-문자" tabindex="-1"><a class="header-anchor" href="#📚-rust-배우기-–-chars-문자"><span>📚 Rust 배우기 – Chars (문자)</span></a></h1>
<p>영상: 프로그래밍 언어 러스트를 배웁시다! 004 Easy Rust in Korean: Chars</p>
<p>주제: Rust에서 char 타입을 이해하고 사용하는 방법</p>
<h2 id="✨-핵심-정리" tabindex="-1"><a class="header-anchor" href="#✨-핵심-정리"><span>✨ 핵심 정리</span></a></h2>
<p>🟢 char 타입은 Rust에서 문자(Unicode 단일 문자) 를 저장하는 타입</p>
<p>🟢 문자 리터럴은 'a', '한', '字' 와 같이 작은 따옴표 ' 를 사용</p>
<p>🟢 char는 사실 4바이트 (UTF-32) 크기를 가지며, 모든 유니코드 문자를 표현 가능</p>
<p>🟢 문자열 &quot;Hello&quot;는 여러 개의 char가 모여 있는 &amp;str 타입</p>
<p>🟢 반복문 for c in &quot;Hello&quot;.chars() 와 같이 .chars() 메서드를 사용해 문자열을 한 글자씩 순회 가능</p>
<p>🟢 char와 u8(바이트)은 다르며, char는 한 글자를 의미하고 u8은 1바이트 정수</p>
<h2 id="🛠️-rust-코드-예제" tabindex="-1"><a class="header-anchor" href="#🛠️-rust-코드-예제"><span>🛠️ Rust 코드 예제</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">fn main() {</span>
<span class="line">    // 문자 (char) 타입</span>
<span class="line">    let ch: char = 'A';  </span>
<span class="line">    println!("문자: {}", ch);</span>
<span class="line"></span>
<span class="line">    // 다양한 유니코드 문자 저장 가능</span>
<span class="line">    let korean = '한';</span>
<span class="line">    let chinese = '字';</span>
<span class="line">    let emoji = '😊';</span>
<span class="line"></span>
<span class="line">    println!("한글: {}, 한자: {}, 이모지: {}", korean, chinese, emoji);</span>
<span class="line"></span>
<span class="line">    // 문자열에서 chars()로 순회</span>
<span class="line">    for c in "Hello".chars() {</span>
<span class="line">        println!("{}", c);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="💡-출력-결과" tabindex="-1"><a class="header-anchor" href="#💡-출력-결과"><span>💡 출력 결과</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">문자: A</span>
<span class="line">한글: 한, 한자: 字, 이모지: 😊</span>
<span class="line">H</span>
<span class="line">e</span>
<span class="line">l</span>
<span class="line">l</span>
<span class="line">o</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🛠️-rust-실습-코드" tabindex="-1"><a class="header-anchor" href="#🛠️-rust-실습-코드"><span>🛠️ Rust 실습 코드</span></a></h2>
<h3 id="✅-핵심-요약" tabindex="-1"><a class="header-anchor" href="#✅-핵심-요약"><span>✅ 핵심 요약</span></a></h3>
<p>char는 유니코드 단일 문자를 담는 타입이며 4바이트 크기예요. (이모지 포함 🥳)</p>
<p>문자열은 여러 char이 모인 텍스트 조각으로, 항상 큰따옴표 &quot; 를 사용합니다.</p>
<p>char 리터럴은 작은따옴표 ' 를 사용합니다. ('A', '한', '😊')</p>
<p>'a' as u8 같이 정수형으로 캐스팅하면 유니코드 코드 포인트(ASCII 범위는 그대로) 값을 얻을 수 있어요.</p>
<p>println! 매크로로 출력할 때, 문자열은 반드시 큰따옴표가 필요합니다.</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">fn main() {                                      // 프로그램의 시작점: main 함수</span>
<span class="line"></span>
<span class="line">    // println!('Hello, world!');                // (잘못된 예시) 문자열에 작은따옴표 사용 → 컴파일 에러</span>
<span class="line">    // string은 무조건 ""으로 ''으로 입력하면 에러 발생</span>
<span class="line">    // help: if you meant to write a string literal, use double quotes</span>
<span class="line">    // error[E0762]: unterminated character literal</span>
<span class="line"></span>
<span class="line">    println!("Hello, world!");                   // (정상) 문자열은 큰따옴표(")를 사용해 출력</span>
<span class="line"></span>
<span class="line">    let first_letter = 'A';                      // char 리터럴: 작은따옴표(') 사용, 단일 문자 저장</span>
<span class="line">    // char 타입은 Rust에서 문자(Unicode 단일 문자)로 이모지도 됨</span>
<span class="line">    // char size = 4 bytes</span>
<span class="line">    println!("문자: {}", first_letter);          // 포맷 문자열에 {}로 값 삽입하여 출력</span>
<span class="line"></span>
<span class="line">    // 다양한 유니코드 문자 저장 가능</span>
<span class="line">    let korean = '한';                           // 한글 1글자 (유니코드)</span>
<span class="line">    let chinese = '字';                          // 한자 1글자 (유니코드)</span>
<span class="line">    let emoji = '😊';                            // 이모지 1개 (유니코드)</span>
<span class="line"></span>
<span class="line">    println!("한글: {}, 한자: {}, 이모지: {}",  // 여러 값을 한 번에 출력</span>
<span class="line">             korean, chinese, emoji);</span>
<span class="line"></span>
<span class="line">    // casting = simple type change using 'as'</span>
<span class="line">    let my_number = 'a' as u8;                   // 'a'의 유니코드(ASCII) 값(97)으로 캐스팅</span>
<span class="line">    println!("Hello, world! My number is {}",    // 숫자값 출력</span>
<span class="line">             my_number);</span>
<span class="line"></span>
<span class="line">    /*</span>
<span class="line">    // 결과 코드 :</span>
<span class="line">    Hello, world!</span>
<span class="line">    문자: A</span>
<span class="line">    한글: 한, 한자: 字, 이모지: 😊</span>
<span class="line">    Hello, world! My number is 97</span>
<span class="line">    */</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📊-mermaid-시각화-–-rust-문자열과-문자-관계" tabindex="-1"><a class="header-anchor" href="#📊-mermaid-시각화-–-rust-문자열과-문자-관계"><span>📊 Mermaid 시각화 – Rust 문자열과 문자 관계</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">flowchart</span> TD</span>
<span class="line">    A<span class="token text string">["문자열 (&amp;str)"]</span> <span class="token arrow operator">--></span> B<span class="token text string">["'H' (char)"]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> C<span class="token text string">["'e' (char)"]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> D<span class="token text string">["'l' (char)"]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> E<span class="token text string">["'l' (char)"]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> F<span class="token text string">["'o' (char)"]</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">subgraph</span> 설명</span>
<span class="line">    B <span class="token arrow operator">--></span> G<span class="token text string">["Unicode 단일 문자"]</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🧩-초보자-이해-포인트" tabindex="-1"><a class="header-anchor" href="#🧩-초보자-이해-포인트"><span>🧩 초보자 이해 포인트</span></a></h2>
<p>✅ char는 한 글자만 담을 수 있음 → 'A', '한', '😊'</p>
<p>✅ &amp;str (문자열)은 여러 char의 묶음 → &quot;Hello&quot;</p>
<p>✅ 문자열을 다룰 때 .chars()를 사용하면 글자를 하나씩 꺼낼 수 있음</p>
<p>✅ Rust의 char는 단순히 ASCII 문자만 담는 게 아니라 모든 유니코드 문자를 담을 수 있음</p>
<h2 id="📌-요약" tabindex="-1"><a class="header-anchor" href="#📌-요약"><span>📌 요약</span></a></h2>
<p>Rust의 char는 4바이트 유니코드 문자</p>
<p>작은 따옴표 '로 표현 ('A', '😊')</p>
<p>문자열은 여러 개의 char 모음 (&quot;Hello&quot;)</p>
<p>.chars() 메서드로 문자열을 한 글자씩 다룰 수 있음</p>
<p>👉 Learn more on Glasp: https://glasp.co/reader?url=https://www.youtube.com/watch?v=yR33X2Ik9W0</p>
</div></template>


