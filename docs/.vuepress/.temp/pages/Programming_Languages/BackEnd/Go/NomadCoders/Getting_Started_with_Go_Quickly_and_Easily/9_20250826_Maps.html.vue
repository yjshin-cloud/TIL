<template><div><h1 id="📘-go-언어-–-map-데이터-구조-정리" tabindex="-1"><a class="header-anchor" href="#📘-go-언어-–-map-데이터-구조-정리"><span>📘 Go 언어 – Map 데이터 구조 정리</span></a></h1>
<p>Go에서의 <strong>map</strong>은 Python의 <code v-pre>dict</code>나 JavaScript의 <code v-pre>object</code>와 유사하지만, <strong>타입이 명확히 정의되어야 하는</strong> 특징이 있어요.<br>
아래 정리를 통해 map의 개념을 이해해봅시다.</p>
<hr>
<h2 id="🗝️-map-기본-개념" tabindex="-1"><a class="header-anchor" href="#🗝️-map-기본-개념"><span>🗝️ Map 기본 개념</span></a></h2>
<ul>
<li><strong>Key-Value</strong> 구조로 데이터를 저장.</li>
<li>Key와 Value의 <strong>타입을 반드시 명시</strong>해야 함.</li>
<li>Key는 중복될 수 없으며, 고유해야 함.</li>
</ul>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go"><pre v-pre><code class="language-go"><span class="line"><span class="token comment">// map 생성 기본 형태</span></span>
<span class="line">nico <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"nico"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"age"</span><span class="token punctuation">:</span>  <span class="token string">"12"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>nico<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 출력: map[age:12 name:nico]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔄-map-순회-range-활용" tabindex="-1"><a class="header-anchor" href="#🔄-map-순회-range-활용"><span>🔄 Map 순회 (range 활용)</span></a></h2>
<p>range 키워드를 활용하면 map을 순회할 수 있어요.</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">for key, value := range nico {</span>
<span class="line">    fmt.Println(key, value)</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>key와 value 모두 출력</p>
<p>key만 출력하고 싶다면 value는 _ (언더스코어)로 무시 가능</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">for key := range nico {</span>
<span class="line">    fmt.Println(key)</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>➕ 요소 추가 &amp; 확인</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">// 요소 추가</span>
<span class="line">nico["hobby"] = "coding"</span>
<span class="line"></span>
<span class="line">// 존재 여부 확인</span>
<span class="line">value, exists := nico["age"]</span>
<span class="line">if exists {</span>
<span class="line">    fmt.Println("나이:", value)</span>
<span class="line">} else {</span>
<span class="line">    fmt.Println("해당 key 없음")</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🎨-mermaid-시각화" tabindex="-1"><a class="header-anchor" href="#🎨-mermaid-시각화"><span>🎨 Mermaid 시각화</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">flowchart</span> TD</span>
<span class="line">    A<span class="token text string">[Map 데이터 구조]</span> <span class="token arrow operator">--></span> B<span class="token text string">[Key: string]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> C<span class="token text string">[Value: string]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> D<span class="token text string">[중복 불가 Key]</span></span>
<span class="line">    A <span class="token arrow operator">--></span> E<span class="token text string">[Key 존재 여부 확인 가능]</span></span>
<span class="line"></span>
<span class="line">    B <span class="token arrow operator">--></span> F<span class="token text string">["예: 'name'"]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> G<span class="token text string">["예: 'age'"]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> H<span class="token text string">["예: 'nico'"]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> I<span class="token text string">["예: '12'"]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="⏱️-영상-요약-타임스탬프-포함" tabindex="-1"><a class="header-anchor" href="#⏱️-영상-요약-타임스탬프-포함"><span>⏱️ 영상 요약 (타임스탬프 포함)</span></a></h2>
<p>(00:00) Go에서 map은 Python의 dict나 JS object와 유사.</p>
<p>(00:10) map[string]string 형식으로 key-value 타입 명시.</p>
<p>(00:54) fmt.Println으로 출력 확인 (map[age:12 name:nico]).</p>
<p>(01:00) struct와의 차이도 언급 (추후 학습 예정).</p>
<p>(01:42) map은 key와 value 구조로 동작.</p>
<p>(02:00) 프로젝트에서 map, struct, slice 등을 종합적으로 활용 예정.</p>
<p>(02:20) range로 반복문 순회, key만/ value만 출력 가능.</p>
<p>(02:48) 요소 추가 및 존재 여부 확인 기능 있음.</p>
<h2 id="✨-핵심-포인트" tabindex="-1"><a class="header-anchor" href="#✨-핵심-포인트"><span>✨ 핵심 포인트</span></a></h2>
<p>Map은 Key-Value 저장소.</p>
<p>Key와 Value의 타입을 꼭 지정해야 함.</p>
<p>반복문(range) 활용, 추가/존재 확인 가능.</p>
<p>앞으로의 학습에서 struct, slice와 함께 활용하면 더 강력해짐.</p>
</div></template>


