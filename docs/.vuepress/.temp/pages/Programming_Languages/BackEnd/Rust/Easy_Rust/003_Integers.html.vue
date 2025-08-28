<template><div><h1 id="🔢-rust-정수-타입-integer-types" tabindex="-1"><a class="header-anchor" href="#🔢-rust-정수-타입-integer-types"><span>🔢 Rust 정수 타입 (Integer Types)</span></a></h1>
<p>Rust는 다른 언어(Java, Python, JavaScript 등)와 달리 정수 타입(Integer Types) 을 매우 세분화해서 제공합니다.
이 덕분에 프로그램에서 메모리 크기, 음수 허용 여부 등을 명확히 지정할 수 있습니다.</p>
<h2 id="_1️⃣-정수-타입-구분" tabindex="-1"><a class="header-anchor" href="#_1️⃣-정수-타입-구분"><span>1️⃣ 정수 타입 구분</span></a></h2>
<table>
<thead>
<tr>
<th>구분</th>
<th>설명</th>
<th>예시</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Signed 정수 (iN)</strong></td>
<td>음수/양수 모두 표현 가능</td>
<td><code v-pre>i8</code>, <code v-pre>i16</code>, <code v-pre>i32</code>, <code v-pre>i64</code>, <code v-pre>i128</code>, <code v-pre>isize</code></td>
</tr>
<tr>
<td><strong>Unsigned 정수 (uN)</strong></td>
<td>음수 없음, 0 이상만 표현</td>
<td><code v-pre>u8</code>, <code v-pre>u16</code>, <code v-pre>u32</code>, <code v-pre>u64</code>, <code v-pre>u128</code>, <code v-pre>usize</code></td>
</tr>
</tbody>
</table>
<h2 id="_2️⃣-비트-크기와-범위" tabindex="-1"><a class="header-anchor" href="#_2️⃣-비트-크기와-범위"><span>2️⃣ 비트 크기와 범위</span></a></h2>
<table>
<thead>
<tr>
<th>타입</th>
<th>크기</th>
<th>값의 범위</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>i8</strong></td>
<td>8비트</td>
<td>-128 ~ 127</td>
</tr>
<tr>
<td><strong>u8</strong></td>
<td>8비트</td>
<td>0 ~ 255</td>
</tr>
<tr>
<td><strong>i16</strong></td>
<td>16비트</td>
<td>-32,768 ~ 32,767</td>
</tr>
<tr>
<td><strong>u16</strong></td>
<td>16비트</td>
<td>0 ~ 65,535</td>
</tr>
<tr>
<td><strong>i32</strong></td>
<td>32비트</td>
<td>-2,147,483,648 ~ 2,147,483,647</td>
</tr>
<tr>
<td><strong>u32</strong></td>
<td>32비트</td>
<td>0 ~ 4,294,967,295</td>
</tr>
<tr>
<td><strong>i64</strong></td>
<td>64비트</td>
<td>-2^63 ~ 2^63 - 1</td>
</tr>
<tr>
<td><strong>u64</strong></td>
<td>64비트</td>
<td>0 ~ 2^64 - 1</td>
</tr>
<tr>
<td><strong>i128</strong></td>
<td>128비트</td>
<td>매우 큰 범위</td>
</tr>
<tr>
<td><strong>u128</strong></td>
<td>128비트</td>
<td>매우 큰 범위</td>
</tr>
<tr>
<td><strong>isize</strong></td>
<td>시스템 종속</td>
<td>32비트 시스템 = i32<br>64비트 시스템 = i64</td>
</tr>
<tr>
<td><strong>usize</strong></td>
<td>시스템 종속</td>
<td>32비트 시스템 = u32<br>64비트 시스템 = u64</td>
</tr>
</tbody>
</table>
<h2 id="_3️⃣-signed-vs-unsigned" tabindex="-1"><a class="header-anchor" href="#_3️⃣-signed-vs-unsigned"><span>3️⃣ Signed vs Unsigned</span></a></h2>
<p>Signed (i) : +와 - 모두 허용
예) i32 → -10, 0, 42</p>
<p>Unsigned (u) : - 불가능, 0 이상만 허용
예) u32 → 0, 10, 255</p>
<p>예를 들어 나이(age) 같은 값은 음수가 될 수 없으므로 u8이나 u16을 쓰는 게 적절합니다.</p>
<h2 id="_4️⃣-기본-타입-default" tabindex="-1"><a class="header-anchor" href="#_4️⃣-기본-타입-default"><span>4️⃣ 기본 타입 (Default)</span></a></h2>
<p>fn main() {
let x = 42; // 타입 지정 안 하면 i32가 기본
let y: u8 = 200; // 명시적으로 타입 지정
println!(&quot;x = {}, y = {}&quot;, x, y);
}</p>
<p>Rust에서 정수를 선언할 때 기본 타입은 i32</p>
<p>타입을 명시하지 않으면 i32로 컴파일됨</p>
<h2 id="_5️⃣-시스템-종속-타입" tabindex="-1"><a class="header-anchor" href="#_5️⃣-시스템-종속-타입"><span>5️⃣ 시스템 종속 타입</span></a></h2>
<p>isize, usize 는 컴퓨터 아키텍처(32bit / 64bit)에 따라 크기가 달라짐</p>
<p>주로 메모리 주소, 포인터 크기 등과 관련된 연산에서 사용</p>
<h2 id="📊-mermaid-시각화" tabindex="-1"><a class="header-anchor" href="#📊-mermaid-시각화"><span>📊 Mermaid 시각화</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">flowchart</span> TD</span>
<span class="line">    A<span class="token text string">[정수 타입]</span> <span class="token arrow operator">--></span> B<span class="token text string">[Signed 정수 iN]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> C<span class="token text string">[Unsigned 정수 uN]</span></span>
<span class="line"></span>
<span class="line">    B <span class="token arrow operator">--></span> B1<span class="token text string">[i8: -128 ~ 127]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> B2<span class="token text string">[i16: -32,768 ~ 32,767]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> B3<span class="token text string">[i32: 기본 타입, 많이 사용]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> B4<span class="token text string">[i64]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> B5<span class="token text string">[i128]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> B6<span class="token text string">[isize: 시스템 종속]</span></span>
<span class="line"></span>
<span class="line">    C <span class="token arrow operator">--></span> C1<span class="token text string">[u8: 0 ~ 255]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> C2<span class="token text string">[u16: 0 ~ 65,535]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> C3<span class="token text string">[u32]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> C4<span class="token text string">[u64]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> C5<span class="token text string">[u128]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> C6<span class="token text string">[usize: 시스템 종속]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📝-핵심-요약" tabindex="-1"><a class="header-anchor" href="#📝-핵심-요약"><span>📝 핵심 요약</span></a></h2>
<p>Rust는 정수 타입을 세분화하여 메모리 효율성을 높임</p>
<p>Signed(i) : 음수/양수 모두 가능</p>
<p>Unsigned(u) : 음수 불가능, 0 이상만 가능</p>
<p>기본 정수 타입은 i32</p>
<p>isize/usize 는 시스템 아키텍처(32bit/64bit)에 따라 달라짐</p>
<h2 id="📊-rust-vs-go-정수-타입-비교" tabindex="-1"><a class="header-anchor" href="#📊-rust-vs-go-정수-타입-비교"><span>📊 Rust vs Go 정수 타입 비교</span></a></h2>
<table>
<thead>
<tr>
<th>항목</th>
<th>Rust</th>
<th>Go</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Signed 정수</strong></td>
<td><code v-pre>i8</code>, <code v-pre>i16</code>, <code v-pre>i32</code>, <code v-pre>i64</code>, <code v-pre>i128</code>, <code v-pre>isize</code></td>
<td><code v-pre>int8</code>, <code v-pre>int16</code>, <code v-pre>int32</code>, <code v-pre>int64</code>, <code v-pre>int</code></td>
</tr>
<tr>
<td><strong>Unsigned 정수</strong></td>
<td><code v-pre>u8</code>, <code v-pre>u16</code>, <code v-pre>u32</code>, <code v-pre>u64</code>, <code v-pre>u128</code>, <code v-pre>usize</code></td>
<td><code v-pre>uint8</code>(=byte), <code v-pre>uint16</code>, <code v-pre>uint32</code>, <code v-pre>uint64</code>, <code v-pre>uint</code></td>
</tr>
<tr>
<td><strong>기본 타입</strong></td>
<td><code v-pre>i32</code></td>
<td><code v-pre>int</code> (32bit 또는 64bit)</td>
</tr>
<tr>
<td><strong>플랫폼 종속 타입</strong></td>
<td><code v-pre>isize</code>, <code v-pre>usize</code> (아키텍처에 따라 크기 결정)</td>
<td><code v-pre>int</code>, <code v-pre>uint</code> (아키텍처에 따라 크기 결정)</td>
</tr>
<tr>
<td><strong>최대 크기 지원</strong></td>
<td>128비트 (<code v-pre>i128</code>, <code v-pre>u128</code>)</td>
<td>64비트 (<code v-pre>int64</code>, <code v-pre>uint64</code>)</td>
</tr>
<tr>
<td><strong>문자 관련 타입</strong></td>
<td><code v-pre>char</code> (4바이트 유니코드)</td>
<td><code v-pre>rune</code>(=int32), <code v-pre>byte</code>(=uint8)</td>
</tr>
<tr>
<td><strong>타입 안정성</strong></td>
<td>엄격, 암묵적 변환 불가</td>
<td>비교적 단순, 변환 필요 시 명시적 처리</td>
</tr>
</tbody>
</table>
<p>##📌 코드 예시 비교
✅ Rust</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">fn main() {</span>
<span class="line">    let a: i32 = -10;</span>
<span class="line">    let b: u8 = 200;</span>
<span class="line">    let c = 100; // 기본 i32</span>
<span class="line">    println!("a = {}, b = {}, c = {}", a, b, c);</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>✅ Go</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">package main</span>
<span class="line">import "fmt"</span>
<span class="line"></span>
<span class="line">func main() {</span>
<span class="line">    var a int32 = -10</span>
<span class="line">    var b uint8 = 200</span>
<span class="line">    c := 100 // 기본 int</span>
<span class="line">    fmt.Println("a =", a, "b =", b, "c =", c)</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📊-mermaid-시각화-–-rust-vs-go-정수-타입-비교" tabindex="-1"><a class="header-anchor" href="#📊-mermaid-시각화-–-rust-vs-go-정수-타입-비교"><span>📊 Mermaid 시각화 – Rust vs Go 정수 타입 비교</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">flowchart</span> TD</span>
<span class="line">    A<span class="token text string">[Rust 정수 타입]</span> <span class="token arrow operator">--></span> B<span class="token text string">[i8, i16, i32, i64, i128]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> C<span class="token text string">[u8, u16, u32, u64, u128]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> D<span class="token text string">[isize, usize]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> E<span class="token text string">[기본 타입: i32]</span></span>
<span class="line"></span>
<span class="line">    F<span class="token text string">[Go 정수 타입]</span> <span class="token arrow operator">--></span> G<span class="token text string">[int8, int16, int32, int64]</span></span>
<span class="line">    F <span class="token arrow operator">--></span> H<span class="token text string">[uint8, uint16, uint32, uint64]</span></span>
<span class="line">    F <span class="token arrow operator">--></span> I<span class="token text string">[int, uint - 플랫폼 종속]</span></span>
<span class="line">    F <span class="token arrow operator">--></span> J<span class="token text string">[rune = int32]</span></span>
<span class="line">    F <span class="token arrow operator">--></span> K<span class="token text string">[byte = uint8]</span></span>
<span class="line">    F <span class="token arrow operator">--></span> L<span class="token text string">[기본 타입: int]</span></span>
<span class="line"></span>
<span class="line">    A <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span> <span class="token label property">비교</span> <span class="token arrow operator">.-></span></span> F</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📝-핵심-요약-1" tabindex="-1"><a class="header-anchor" href="#📝-핵심-요약-1"><span>📝 핵심 요약</span></a></h2>
<p>Rust → 더 다양한 정수 타입 제공 (i128, u128까지 지원)</p>
<p>Go → 단순한 타입 체계, 기본적으로 int와 uint 중심</p>
<p>Rust는 엄격한 타입 안전성, Go는 실용적 단순성에 초점</p>
<h2 id="⚖️-rust-vs-go-정수-타입-–-실무-선택-가이드" tabindex="-1"><a class="header-anchor" href="#⚖️-rust-vs-go-정수-타입-–-실무-선택-가이드"><span>⚖️ Rust vs Go 정수 타입 – 실무 선택 가이드</span></a></h2>
<h3 id="✅-rust가-더-적절한-경우" tabindex="-1"><a class="header-anchor" href="#✅-rust가-더-적절한-경우"><span>✅ Rust가 더 적절한 경우</span></a></h3>
<h4 id="시스템-프로그래밍-임베디드-개발" tabindex="-1"><a class="header-anchor" href="#시스템-프로그래밍-임베디드-개발"><span>시스템 프로그래밍 / 임베디드 개발</span></a></h4>
<p>Rust는 i8 ~ i128, u8 ~ u128, isize/usize까지 세분화된 타입 제공</p>
<p>메모리 제어와 성능 최적화가 필요한 저수준 프로그래밍에 강함</p>
<h4 id="c-c-대체재로-적합" tabindex="-1"><a class="header-anchor" href="#c-c-대체재로-적합"><span>C/C++ 대체재로 적합</span></a></h4>
<h4 id="안전성-중심-개발" tabindex="-1"><a class="header-anchor" href="#안전성-중심-개발"><span>안전성 중심 개발</span></a></h4>
<p>Rust는 타입 혼합 연산 불가, 반드시 명시적 변환 필요</p>
<p>런타임 에러보다 컴파일 타임 안전성 보장</p>
<p>금융, 블록체인, 보안 소프트웨어에 유리</p>
<h4 id="대규모-데이터-처리" tabindex="-1"><a class="header-anchor" href="#대규모-데이터-처리"><span>대규모 데이터 처리</span></a></h4>
<p>초대형 숫자(i128, u128) 지원 → 고정밀 연산 가능</p>
<p>과학 계산, 암호학 등 큰 정수 계산에 적합</p>
<h3 id="✅-go가-더-적절한-경우" tabindex="-1"><a class="header-anchor" href="#✅-go가-더-적절한-경우"><span>✅ Go가 더 적절한 경우</span></a></h3>
<h4 id="백엔드-서버-웹-서비스" tabindex="-1"><a class="header-anchor" href="#백엔드-서버-웹-서비스"><span>백엔드 서버 / 웹 서비스</span></a></h4>
<p>Go의 정수 타입은 단순 (int, uint, int64 중심)</p>
<p>대부분의 웹 서비스 로직에 64비트 정수면 충분</p>
<p>오히려 Rust처럼 타입이 많으면 복잡도가 증가</p>
<h4 id="빠른-개발-사이클" tabindex="-1"><a class="header-anchor" href="#빠른-개발-사이클"><span>빠른 개발 사이클</span></a></h4>
<p>Go는 개발자 경험(DX) 중시 → 타입 고민 줄이고 빠르게 코딩 가능</p>
<p>스타트업, 프로토타입, 마이크로서비스 개발에 적합</p>
<h4 id="클라우드-분산-시스템" tabindex="-1"><a class="header-anchor" href="#클라우드-분산-시스템"><span>클라우드/분산 시스템</span></a></h4>
<p>Go는 goroutine + 채널 기반 동시성 지원</p>
<h4 id="정수-타입-단순화로-네트워크-분산-환경-코드-작성이-더-수월" tabindex="-1"><a class="header-anchor" href="#정수-타입-단순화로-네트워크-분산-환경-코드-작성이-더-수월"><span>정수 타입 단순화로 네트워크, 분산 환경 코드 작성이 더 수월</span></a></h4>
<p>📊 정리 비교</p>
<table>
<thead>
<tr>
<th>상황</th>
<th>Rust</th>
<th>Go</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>시스템 프로그래밍</strong></td>
<td>✅ 저수준 메모리 제어 필요</td>
<td>❌</td>
</tr>
<tr>
<td><strong>임베디드 / IoT</strong></td>
<td>✅ 세밀한 타입 제어</td>
<td>❌</td>
</tr>
<tr>
<td><strong>금융 / 보안 / 블록체인</strong></td>
<td>✅ 정밀 연산, 안전성</td>
<td>❌</td>
</tr>
<tr>
<td><strong>웹 서비스 / API 서버</strong></td>
<td>❌</td>
<td>✅ 단순 int로 충분</td>
</tr>
<tr>
<td><strong>클라우드 / 분산 처리</strong></td>
<td>❌</td>
<td>✅ goroutine, 단순 타입 구조</td>
</tr>
<tr>
<td><strong>프로토타입 / 빠른 개발</strong></td>
<td>❌</td>
<td>✅ 빠른 개발 사이클</td>
</tr>
</tbody>
</table>
<h2 id="📝-핵심-요약-2" tabindex="-1"><a class="header-anchor" href="#📝-핵심-요약-2"><span>📝 핵심 요약</span></a></h2>
<p>Rust → “성능 + 안전성 + 세밀한 타입 제어”가 필요할 때 최적</p>
<p>Go → “생산성 + 단순성 + 네트워크/분산 처리”가 필요할 때 최적</p>
</div></template>


