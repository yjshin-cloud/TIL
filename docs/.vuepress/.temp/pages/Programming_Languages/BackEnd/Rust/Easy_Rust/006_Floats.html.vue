<template><div><h1 id="🦀-rust-easy-rust-006-—-floats-실수형" tabindex="-1"><a class="header-anchor" href="#🦀-rust-easy-rust-006-—-floats-실수형"><span>🦀 Rust Easy Rust 006 — Floats (실수형)</span></a></h1>
<h2 id="📌-floats란" tabindex="-1"><a class="header-anchor" href="#📌-floats란"><span>📌 Floats란?</span></a></h2>
<ul>
<li><strong>Floats(부동소수점 수)</strong>: 소수점을 포함한 숫자를 표현할 수 있는 자료형</li>
<li>Rust에서는 대표적으로 두 가지 타입 제공:
<ul>
<li><strong>f32</strong> → 32비트(4바이트), 단정밀도</li>
<li><strong>f64</strong> → 64비트(8바이트), 배정밀도 (기본)</li>
</ul>
</li>
</ul>
<hr>
<h2 id="🎬-학습-타임라인-요약" tabindex="-1"><a class="header-anchor" href="#🎬-학습-타임라인-요약"><span>🎬 학습 타임라인 요약</span></a></h2>
<ul>
<li><strong>(00:01)</strong> Rust에서 숫자 타입을 다루는 기본 개념 소개</li>
<li><strong>(01:05)</strong> 큰 수를 다룰 경우 <code v-pre>f64</code> 같은 큰 범위 실수가 필요</li>
<li><strong>(02:08)</strong> <code v-pre>f32</code> vs <code v-pre>f64</code> 비교<br>
→ <code v-pre>f64</code>가 두 배의 바이트를 사용하지만 정확도와 안정성이 높음</li>
<li><strong>(03:17)</strong> 실수를 정수로 변환 시, 소수점 절삭/반올림 때문에 예상치 못한 결과 발생 가능</li>
</ul>
<hr>
<h2 id="🧮-rust-코드-예시" tabindex="-1"><a class="header-anchor" href="#🧮-rust-코드-예시"><span>🧮 Rust 코드 예시</span></a></h2>
<div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs"><pre v-pre><code class="language-rust"><span class="line"><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// f64: 기본 실수형 (더 정밀)</span></span>
<span class="line">    <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">9.9_f64</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">9.2_f64</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">"x: {}, y: {}"</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// f32: 메모리는 적지만 정확도는 낮음</span></span>
<span class="line">    <span class="token keyword">let</span> a<span class="token punctuation">:</span> <span class="token keyword">f32</span> <span class="token operator">=</span> <span class="token number">3.1415926535</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">"a (f32): {}"</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 정수 변환 주의</span></span>
<span class="line">    <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">9.6_f64</span> <span class="token keyword">as</span> <span class="token keyword">i32</span><span class="token punctuation">;</span> <span class="token comment">// 결과: 9</span></span>
<span class="line">    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">"9.6을 정수로 변환: {}"</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔍-mermaid-시각화-–-float-타입-비교" tabindex="-1"><a class="header-anchor" href="#🔍-mermaid-시각화-–-float-타입-비교"><span>🔍 Mermaid 시각화 – Float 타입 비교</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">flowchart</span> TD</span>
<span class="line">    A<span class="token text string">["Number types"]</span> <span class="token arrow operator">--></span> B<span class="token text string">["Integer"]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> C<span class="token text string">["Float"]</span></span>
<span class="line"></span>
<span class="line">    C <span class="token arrow operator">--></span> D<span class="token text string">["f32 - 4 bytes"]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> E<span class="token text string">["f64 - 8 bytes - default"]</span></span>
<span class="line"></span>
<span class="line">    D <span class="token arrow operator">--></span> F<span class="token text string">["Lower precision - saves memory"]</span></span>
<span class="line">    E <span class="token arrow operator">--></span> G<span class="token text string">["Higher precision - commonly used"]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="💡-초보자를-위한-쉬운-설명" tabindex="-1"><a class="header-anchor" href="#💡-초보자를-위한-쉬운-설명"><span>💡 초보자를 위한 쉬운 설명</span></a></h2>
<p>정수(i32, i64)는 소수점 없는 숫자만 저장</p>
<p>실수(f32, f64)는 소수점 있는 숫자를 저장</p>
<p>기본적으로 f64가 자동 선택됨 → 정확도가 더 필요하기 때문</p>
<p>정수로 변환할 땐 소수점 이하가 잘려나감 → 꼭 주의!</p>
<h2 id="🏢-현업에서는-어떻게-쓸까" tabindex="-1"><a class="header-anchor" href="#🏢-현업에서는-어떻게-쓸까"><span>🏢 현업에서는 어떻게 쓸까?</span></a></h2>
<p>f64 →</p>
<p>과학/공학 계산 (물리 시뮬레이션, 금융 서비스 이자율 계산 등)</p>
<p>정밀한 계산이 필요한 머신러닝, 데이터 분석</p>
<p>f32 →</p>
<p>메모리 최적화가 필요한 환경 (게임 그래픽, 임베디드 시스템)</p>
<p>GPU 연산에서 속도를 높이기 위해 사용됨</p>
<h2 id="📌-핵심-정리" tabindex="-1"><a class="header-anchor" href="#📌-핵심-정리"><span>📌 핵심 정리</span></a></h2>
<p>Rust 실수 기본 타입은 f64 (정확성 중시)</p>
<p>f32는 메모리를 줄일 수 있지만 오차 발생 가능</p>
<p>정수 변환 시 값이 잘려서 예상치 못한 결과가 나올 수 있음</p>
<p>현업에서는 정확도와 성능의 균형에 따라 f32/f64를 선택함</p>
</div></template>


