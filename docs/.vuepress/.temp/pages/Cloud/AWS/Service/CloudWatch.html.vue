<template><div><h1 id="📊-aws-cloudwatch-정리" tabindex="-1"><a class="header-anchor" href="#📊-aws-cloudwatch-정리"><span>📊 AWS CloudWatch 정리</span></a></h1>
<h2 id="_1️⃣-aws-cloudwatch란" tabindex="-1"><a class="header-anchor" href="#_1️⃣-aws-cloudwatch란"><span>1️⃣ AWS CloudWatch란?</span></a></h2>
<p>Amazon CloudWatch 는
AWS 리소스(EC2, RDS, Lambda 등)와 애플리케이션을 모니터링 및 로깅할 수 있는 서비스입니다.</p>
<h3 id="👉-쉽게-말해-aws-서비스들의-건강-상태를-실시간으로-지켜보고-문제가-생기면-알려주는-감시자-입니다" tabindex="-1"><a class="header-anchor" href="#👉-쉽게-말해-aws-서비스들의-건강-상태를-실시간으로-지켜보고-문제가-생기면-알려주는-감시자-입니다"><span><strong>👉 쉽게 말해, “AWS 서비스들의 건강 상태를 실시간으로 지켜보고, 문제가 생기면 알려주는 감시자” 입니다.</strong></span></a></h3>
<h2 id="_2️⃣-cloudwatch의-주요-기능" tabindex="-1"><a class="header-anchor" href="#_2️⃣-cloudwatch의-주요-기능"><span>2️⃣ CloudWatch의 주요 기능</span></a></h2>
<h3 id="📈-메트릭-metrics" tabindex="-1"><a class="header-anchor" href="#📈-메트릭-metrics"><span>📈 메트릭(Metrics)</span></a></h3>
<p>CPU, 메모리, 네트워크, 디스크 사용량 등 지표 수집</p>
<h3 id="📋-로그-log-수집-및-관리" tabindex="-1"><a class="header-anchor" href="#📋-로그-log-수집-및-관리"><span>📋 로그(Log) 수집 및 관리</span></a></h3>
<p>애플리케이션 로그, 시스템 로그를 중앙에서 관리</p>
<h3 id="🔔-알람-alarms" tabindex="-1"><a class="header-anchor" href="#🔔-알람-alarms"><span>🔔 알람(Alarms)</span></a></h3>
<p>특정 조건 발생 시 알림 (예: CPU &gt; 80% → Slack/Email로 알람)</p>
<h3 id="📊-대시보드-dashboards" tabindex="-1"><a class="header-anchor" href="#📊-대시보드-dashboards"><span>📊 대시보드(Dashboards)</span></a></h3>
<p>지표와 로그를 시각적으로 모니터링</p>
<h3 id="⚡-이벤트-events" tabindex="-1"><a class="header-anchor" href="#⚡-이벤트-events"><span>⚡ 이벤트(Events)</span></a></h3>
<p>AWS 리소스에서 발생하는 이벤트를 감지하고 자동으로 대응 (예: Auto Scaling 트리거)</p>
<h2 id="_3️⃣-cloudwatch-아키텍처-개념도" tabindex="-1"><a class="header-anchor" href="#_3️⃣-cloudwatch-아키텍처-개념도"><span>3️⃣ CloudWatch 아키텍처 개념도</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    <span class="token keyword">subgraph</span> AWS Services</span>
<span class="line">        EC2<span class="token text string">[EC2 Instances]</span></span>
<span class="line">        RDS<span class="token text string">[RDS Database]</span></span>
<span class="line">        Lambda<span class="token text string">[AWS Lambda]</span></span>
<span class="line">        S3<span class="token text string">[S3 Bucket]</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">    EC2 <span class="token arrow operator">--></span> CW<span class="token text string">[CloudWatch]</span></span>
<span class="line">    RDS <span class="token arrow operator">--></span> CW</span>
<span class="line">    Lambda <span class="token arrow operator">--></span> CW</span>
<span class="line">    S3 <span class="token arrow operator">--></span> CW</span>
<span class="line"></span>
<span class="line">    CW <span class="token arrow operator">--></span> Metrics<span class="token text string">[Metrics &amp; Logs]</span></span>
<span class="line">    CW <span class="token arrow operator">--></span> Alarm<span class="token text string">[Alarms]</span></span>
<span class="line">    CW <span class="token arrow operator">--></span> Dashboard<span class="token text string">[Dashboards]</span></span>
<span class="line"></span>
<span class="line">    Alarm <span class="token arrow operator">--></span> SNS<span class="token text string">[Amazon SNS Notification]</span></span>
<span class="line">    SNS <span class="token arrow operator">--></span> User<span class="token text string">[👩 사용자/운영자]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4️⃣-cloudwatch-사용-예시" tabindex="-1"><a class="header-anchor" href="#_4️⃣-cloudwatch-사용-예시"><span>4️⃣ CloudWatch 사용 예시</span></a></h2>
<p>EC2 CPU 사용률이 80% 초과 시 알람 전송</p>
<p>RDS 스토리지가 가득 차기 전 경고 발생</p>
<p>Lambda 함수 오류율이 일정 기준 이상일 때 Slack/이메일 알림</p>
<p>S3 버킷 접근 로그를 중앙 집중형 분석</p>
<p>Auto Scaling과 연동 → 트래픽 급증 시 서버 자동 확장</p>
<h2 id="_5️⃣-현업에서의-활용" tabindex="-1"><a class="header-anchor" href="#_5️⃣-현업에서의-활용"><span>5️⃣ 현업에서의 활용</span></a></h2>
<p>현업에서는 CloudWatch를 다음과 같이 적극적으로 활용합니다.</p>
<h3 id="🛠-운영-모니터링" tabindex="-1"><a class="header-anchor" href="#🛠-운영-모니터링"><span>🛠 운영 모니터링</span></a></h3>
<p>서버 상태, DB 성능, API 응답 시간 등을 실시간 모니터링</p>
<h3 id="🔔-알림-자동화" tabindex="-1"><a class="header-anchor" href="#🔔-알림-자동화"><span>🔔 알림 자동화</span></a></h3>
<p>CloudWatch Alarms + SNS → 장애 발생 시 Slack, Teams, PagerDuty로 알림 전송</p>
<h3 id="⚡-자동-대응" tabindex="-1"><a class="header-anchor" href="#⚡-자동-대응"><span>⚡ 자동 대응</span></a></h3>
<p>CloudWatch Events → 특정 조건 충족 시 Lambda 실행</p>
<p>예) CPU 90% 이상 → Auto Scaling Group에 새 EC2 추가</p>
<h3 id="📑-비용-관리" tabindex="-1"><a class="header-anchor" href="#📑-비용-관리"><span>📑 비용 관리</span></a></h3>
<p>사용량/비용 관련 메트릭 추적 → AWS Budgets와 함께 활용</p>
<h3 id="🧑‍💻-devops-sre-필수-도구" tabindex="-1"><a class="header-anchor" href="#🧑‍💻-devops-sre-필수-도구"><span>🧑‍💻 DevOps / SRE 필수 도구</span></a></h3>
<p>CI/CD 파이프라인 로그 수집</p>
<p>보안 모니터링(AWS GuardDuty, Config와 함께)</p>
<h2 id="✅-정리" tabindex="-1"><a class="header-anchor" href="#✅-정리"><span>✅ 정리</span></a></h2>
<p>AWS CloudWatch는</p>
<p>모니터링 (Metrics &amp; Logs), 알림 (Alarms &amp; SNS), 자동화 (Events &amp; Lambda 연동)
등을 통해 운영 안정성과 가용성을 높여주는 핵심 서비스입니다.</p>
<h3 id="👉-한마디로-aws의-cctv-알람-시스템-이라고-이해하면-가장-쉽습니다" tabindex="-1"><a class="header-anchor" href="#👉-한마디로-aws의-cctv-알람-시스템-이라고-이해하면-가장-쉽습니다"><span>👉 한마디로, “AWS의 CCTV + 알람 시스템” 이라고 이해하면 가장 쉽습니다.</span></a></h3>
<ul>
<li>참고 블로그 링크 : https://velog.io/@yjshin/AWS-AWS-CloudWatch-Amazon-CloudWatch</li>
</ul>
</div></template>


