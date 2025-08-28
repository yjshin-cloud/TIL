<template><div><h1 id="go-함수의-두-가지-핵심-기능" tabindex="-1"><a class="header-anchor" href="#go-함수의-두-가지-핵심-기능"><span>Go 함수의 두 가지 핵심 기능:</span></a></h1>
<h2 id="naked-return과-defer" tabindex="-1"><a class="header-anchor" href="#naked-return과-defer"><span>naked return과 defer</span></a></h2>
<p>Go 언어의 함수 기능 중 코드의 간결함과 안정성을 높여주는 두 가지 핵심 기능을 살펴봅니다.</p>
<p>naked return: 반환할 변수를 미리 선언하면 return 키워드만으로 자동 반환</p>
<p>defer: 함수가 종료 직전 실행할 코드를 예약</p>
<h1 id="📌-핵심-요약-타임스탬프" tabindex="-1"><a class="header-anchor" href="#📌-핵심-요약-타임스탬프"><span>📌 핵심 요약 (타임스탬프)</span></a></h1>
<p>(00:00) naked return: 함수 선언부에 반환 변수의 이름+타입을 명시하면 return만으로 자동 반환</p>
<p>(01:03) 반환 변수는 이미 정의되었으므로 :=가 아니라 =로 값을 업데이트해야 함</p>
<p>(01:50) return length, uppercase처럼 명시도 가능하지만, naked return은 간결성이 장점</p>
<p>(02:54) 함수가 길어질수록 무슨 값이 반환되는지 추적이 어려움 → 명시적 반환 선호하는 개발자 많음【gitconnected.com】【boldlygo.tech】</p>
<p>(03:40) defer: 함수 종료 직전 실행 예약. 주로 파일 닫기·로그 남기기에 활용【everythingcoding.in】【medium.com】</p>
<p>(04:28) 예시: &quot;I'm done&quot; 메시지가 함수 종료 직후 출력 → defer 실행 시점이 명확히 드러남</p>
<h1 id="🎯-개념-한눈에-보기-mermaid-시각화" tabindex="-1"><a class="header-anchor" href="#🎯-개념-한눈에-보기-mermaid-시각화"><span>🎯 개념 한눈에 보기 (Mermaid 시각화)</span></a></h1>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">sequenceDiagram</span></span>
<span class="line">    <span class="token keyword">participant</span> M as main<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">participant</span> F as lenAndUpper<span class="token text string">(name)</span></span>
<span class="line">    <span class="token keyword">Note over</span> F<span class="token operator">:</span> 반환 변수 선언 <span class="token text string">(length, uppercase)</span></span>
<span class="line">    M<span class="token arrow operator">->></span>F<span class="token operator">:</span> 호출<span class="token text string">(name="NICO")</span></span>
<span class="line">    F<span class="token arrow operator">->></span>F<span class="token operator">:</span> length = len<span class="token text string">(name)</span></span>
<span class="line">    F<span class="token arrow operator">->></span>F<span class="token operator">:</span> uppercase = strings.ToUpper<span class="token text string">(name)</span></span>
<span class="line">    F<span class="token arrow operator">-->></span>F<span class="token operator">:</span> defer fmt.Println<span class="token text string">("I'm done")</span> 예약</span>
<span class="line">    F<span class="token arrow operator">-->></span>M<span class="token operator">:</span> return <span class="token text string">(naked return)</span></span>
<span class="line">    <span class="token keyword">Note over</span> F<span class="token operator">:</span> 함수 종료 직후 defer 실행</span>
<span class="line">    F<span class="token arrow operator">-->></span>M<span class="token operator">:</span> <span class="token text string">(콘솔)</span> <span class="token string">"I'm done"</span> 출력</span>
<span class="line">    M<span class="token arrow operator">-->></span>M<span class="token operator">:</span> 결과 출력 <span class="token text string">(length, uppercase)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>📝 예제 1: naked return + defer (한 줄씩 주석)</p>
<p>핵심: 반환값 이름을 선언해두면 return만 써도 자동 반환,
defer는 함수 종료 직후 실행할 코드를 예약합니다.</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">package main // Go 프로그램의 진입점(메인 패키지)입니다.</span>
<span class="line"></span>
<span class="line">import ( // 외부 패키지 불러오기</span>
<span class="line">	"fmt"    // 화면에 출력할 수 있는 기능 제공</span>
<span class="line">	"strings" // 문자열을 대문자로 바꾸는 등 문자열 처리 기능 제공</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">// name을 입력받아 length(길이)와 uppercase(대문자 문자열)를 반환합니다.</span>
<span class="line">func lenAndUpper(name string) (length int, uppercase string) {</span>
<span class="line">	// 함수가 끝난 직후 실행할 코드를 예약합니다.</span>
<span class="line">	defer fmt.Println("I'm done") </span>
<span class="line"></span>
<span class="line">	// 반환 변수 length에 문자열 길이 저장</span>
<span class="line">	length = len(name) </span>
<span class="line">	// 반환 변수 uppercase에 문자열을 대문자로 변환하여 저장</span>
<span class="line">	uppercase = strings.ToUpper(name) </span>
<span class="line"></span>
<span class="line">	// naked return: 반환 변수 이름 생략 → 자동으로 length, uppercase 반환</span>
<span class="line">	return</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">func main() {</span>
<span class="line">	// lenAndUpper 호출 후 반환된 값을 변수에 저장</span>
<span class="line">	totalLength, upper := lenAndUpper("NICO") </span>
<span class="line">	// 결과 출력: 4 NICO</span>
<span class="line">	fmt.Println(totalLength, upper) </span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>📝 예제 2: 명시적 return 방식 비교 (한 줄씩 주석)</p>
<p>핵심: 반환값을 직접 return length, uppercase처럼 써주면
코드 읽는 사람이 어떤 값이 반환되는지 직관적으로 알 수 있습니다.</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">package main // 메인 패키지 선언: 실행 가능한 프로그램임을 의미</span>
<span class="line"></span>
<span class="line">import ( </span>
<span class="line">	"fmt"    // 출력 기능</span>
<span class="line">	"strings" // 문자열 변환 기능</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">// 반환 변수 이름은 생략, 대신 타입만 명시 (int, string)</span>
<span class="line">func lenAndUpperExplicit(name string) (int, string) {</span>
<span class="line">	// 함수 종료 직후 실행할 로그 예약</span>
<span class="line">	defer fmt.Println("I'm done (explicit)")</span>
<span class="line"></span>
<span class="line">	// 지역 변수 선언 후 문자열 길이 계산</span>
<span class="line">	length := len(name) </span>
<span class="line">	// 지역 변수 선언 후 문자열을 대문자로 변환</span>
<span class="line">	uppercase := strings.ToUpper(name) </span>
<span class="line"></span>
<span class="line">	// 명시적으로 어떤 값을 반환하는지 표시</span>
<span class="line">	return length, uppercase</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">func main() {</span>
<span class="line">	// 함수 호출 후 반환값을 변수에 저장</span>
<span class="line">	l, u := lenAndUpperExplicit("NICO")</span>
<span class="line">	// 결과 출력: 4 NICO</span>
<span class="line">	fmt.Println(l, u)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="⚖️-언제-써야-할까-실무-감각" tabindex="-1"><a class="header-anchor" href="#⚖️-언제-써야-할까-실무-감각"><span>⚖️ 언제 써야 할까? (실무 감각)</span></a></h1>
<h2 id="✅-naked-return" tabindex="-1"><a class="header-anchor" href="#✅-naked-return"><span>✅ naked return</span></a></h2>
<p>장점: 코드가 짧고 간결해짐</p>
<p>단점: 함수가 길어지면 가독성 저하 → 팀 스타일 가이드에 따라 선택【reddit.com】【dev.to】</p>
<h2 id="✅-defer" tabindex="-1"><a class="header-anchor" href="#✅-defer"><span>✅ defer</span></a></h2>
<p>장점: 리소스 정리·안정성 보장</p>
<p>파일/DB 연결 닫기</p>
<p>로그 출력</p>
<p>네트워크 요청 종료 처리</p>
<p>특징: 함수가 정상 종료되든, 에러로 중간 반환되든, 심지어 panic이 나도 실행됨【stackoverflow.com】</p>
<h1 id="📌-최종-요약" tabindex="-1"><a class="header-anchor" href="#📌-최종-요약"><span>📌 최종 요약</span></a></h1>
<p>naked return: 반환값 이름을 함수 시그니처에 미리 지정 → return만으로 자동 반환</p>
<p>defer: 함수 종료 직전 실행할 코드를 예약 → 리소스 정리 및 후처리에 최적화</p>
<p>두 기능 모두 코드의 생산성과 안정성을 높이지만,</p>
<p>naked return은 가독성 저하 우려로 짧은 함수에만 추천</p>
<p>defer는 리소스 해제·정리 코드에 반드시 활용</p>
<p>🔗 Learn more on Glasp: https://glasp.co/reader?url=https://www.youtube.com/watch?v=O_fR4eVS_aU</p>
</div></template>


