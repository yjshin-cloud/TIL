<template><div><h1 id="⚖️-aws-auto-scaling-완벽-가이드" tabindex="-1"><a class="header-anchor" href="#⚖️-aws-auto-scaling-완벽-가이드"><span>⚖️ AWS Auto Scaling 완벽 가이드</span></a></h1>
<h2 id="_1️⃣-aws-auto-scaling-이란" tabindex="-1"><a class="header-anchor" href="#_1️⃣-aws-auto-scaling-이란"><span>1️⃣ AWS Auto Scaling 이란?</span></a></h2>
<p>AWS Auto Scaling은
트래픽이나 부하(Load)에 따라 EC2 인스턴스의 개수를 자동으로 늘리거나 줄이는 서비스입니다.</p>
<p>👉 쉽게 말해,
“손님이 많으면 서버를 자동으로 늘리고, 손님이 적으면 줄여서 비용을 절약하는 기능” 이에요.</p>
<h2 id="_2️⃣-auto-scaling의-핵심-개념" tabindex="-1"><a class="header-anchor" href="#_2️⃣-auto-scaling의-핵심-개념"><span>2️⃣ Auto Scaling의 핵심 개념</span></a></h2>
<p>Scaling Out 🚀 → 트래픽이 많아질 때 서버 개수 증가</p>
<p>Scaling In 📉 → 트래픽이 줄어들면 서버 개수 감소</p>
<p>Scaling Policy ⚙️ → 어떤 조건에서 서버를 늘리거나 줄일지 정의</p>
<p>Auto Scaling Group (ASG) 👥 → Auto Scaling이 관리하는 서버 그룹</p>
<h2 id="_3️⃣-auto-scaling-아키텍처-개념도" tabindex="-1"><a class="header-anchor" href="#_3️⃣-auto-scaling-아키텍처-개념도"><span>3️⃣ Auto Scaling 아키텍처 개념도</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    User<span class="token text string">[사용자]</span> <span class="token arrow operator">--></span> ALB<span class="token text string">[Application Load Balancer]</span></span>
<span class="line">    ALB <span class="token arrow operator">--></span> ASG<span class="token text string">[Auto Scaling Group]</span></span>
<span class="line">    ASG <span class="token arrow operator">--></span> EC2_1<span class="token text string">[EC2 인스턴스 #1]</span></span>
<span class="line">    ASG <span class="token arrow operator">--></span> EC2_2<span class="token text string">[EC2 인스턴스 #2]</span></span>
<span class="line">    ASG <span class="token arrow operator">--></span> EC2_3<span class="token text string">[EC2 인스턴스 #3]</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">subgraph</span> Monitoring</span>
<span class="line">        CW<span class="token text string">[Amazon CloudWatch]</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    CW <span class="token arrow operator">--></span> ASG</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📝-설명" tabindex="-1"><a class="header-anchor" href="#📝-설명"><span>📝 설명</span></a></h2>
<p>사용자는 로드 밸런서(ALB) 를 통해 접속</p>
<p>로드 밸런서는 트래픽을 여러 EC2 인스턴스로 분산</p>
<p>Auto Scaling Group은 CloudWatch 모니터링 데이터를 기반으로</p>
<p>서버가 부족하면 새로운 EC2 자동 생성</p>
<p>서버가 과하면 불필요한 EC2 종료</p>
<h2 id="_4️⃣-auto-scaling의-장점" tabindex="-1"><a class="header-anchor" href="#_4️⃣-auto-scaling의-장점"><span>4️⃣ Auto Scaling의 장점</span></a></h2>
<p>📈 확장성 (Scalability) → 사용량에 맞춰 서버 자동 확장</p>
<p>💰 비용 효율성 (Cost Efficiency) → 필요할 때만 서버 사용, 비용 절감</p>
<p>🛡️ 가용성 (High Availability) → 장애 발생 시 새 인스턴스 자동 생성</p>
<p>⚡ 운영 자동화 (Automation) → 관리 부담 최소화</p>
<h2 id="_5️⃣-auto-scaling-동작-흐름-step-by-step" tabindex="-1"><a class="header-anchor" href="#_5️⃣-auto-scaling-동작-흐름-step-by-step"><span>5️⃣ Auto Scaling 동작 흐름 (Step by Step)</span></a></h2>
<p>CloudWatch가 CPU 사용률 80% 초과 감지</p>
<p>Auto Scaling Group이 새로운 EC2 인스턴스를 추가 생성 (Scaling Out)</p>
<p>트래픽이 줄어 CPU 사용률이 30% 이하로 내려감</p>
<p>Auto Scaling Group이 불필요한 EC2 인스턴스를 종료 (Scaling In)</p>
<h2 id="_6️⃣-auto-scaling-실습-포인트" tabindex="-1"><a class="header-anchor" href="#_6️⃣-auto-scaling-실습-포인트"><span>6️⃣ Auto Scaling 실습 포인트</span></a></h2>
<p>EC2 Launch Template 생성 (서버 설정값)</p>
<p>Auto Scaling Group 생성 (최소/최대/원하는 서버 개수 설정)</p>
<p>CloudWatch 알람 연결 (예: CPU 70% 이상 → 서버 추가)</p>
<p>로드 밸런서와 연결 (사용자 트래픽 자동 분산)</p>
<h2 id="✅-정리" tabindex="-1"><a class="header-anchor" href="#✅-정리"><span>✅ 정리</span></a></h2>
<p>AWS Auto Scaling은 서버 개수를 자동으로 늘리고 줄여주는 서비스입니다.</p>
<p>손님이 몰리면 서버 늘리고 🚀</p>
<p>한가하면 서버 줄여서 비용 절감 💰</p>
<p>장애가 나도 자동 복구 🛡️</p>
<ul>
<li>참고 링크 : https://velog.io/@yjshin/AWS-Auto-Scaling</li>
</ul>
<p>👉 스타트업부터 대기업까지 모든 규모의 웹 서비스 운영에 필수적인 기능입니다.</p>
</div></template>


