<template><div><h1 id="☁️-aws-ec2-elastic-compute-cloud-완벽-이해" tabindex="-1"><a class="header-anchor" href="#☁️-aws-ec2-elastic-compute-cloud-완벽-이해"><span>☁️ AWS EC2 (Elastic Compute Cloud) 완벽 이해</span></a></h1>
<h2 id="_1-ec2란-무엇일까" tabindex="-1"><a class="header-anchor" href="#_1-ec2란-무엇일까"><span>1. EC2란 무엇일까?</span></a></h2>
<p>EC2는 AWS에서 제공하는 가상 서버(Virtual Machine) 서비스입니다.
쉽게 말해, 집에서 직접 컴퓨터를 사서 서버를 구축하는 대신 AWS에서 클릭 몇 번으로 서버를 빌려 쓰는 서비스예요.</p>
<p>Elastic(탄력적): 필요할 때 빠르게 서버를 늘리고, 필요 없을 때 줄일 수 있음</p>
<p>Compute(연산): 프로그램 실행, 웹사이트 운영, 데이터 처리 같은 일을 담당</p>
<p>Cloud(클라우드): 인터넷만 있으면 언제 어디서나 접근 가능</p>
<p>👉 즉, 필요할 때 켜고, 안 쓰면 끄는 '렌탈 서버' 라고 이해하면 됩니다.</p>
<h2 id="_2-ec2의-주요-특징" tabindex="-1"><a class="header-anchor" href="#_2-ec2의-주요-특징"><span>2. EC2의 주요 특징</span></a></h2>
<p>🖥️ 다양한 인스턴스 타입: CPU, 메모리, GPU 최적화 등 목적에 맞는 서버 선택 가능</p>
<p>📈 Auto Scaling: 사용자가 몰리면 서버 자동 확장, 한가하면 자동 축소</p>
<p>🔒 보안: Security Group(방화벽), IAM 권한 관리로 안전한 접근 제어</p>
<p>🌍 글로벌 인프라: 전 세계 리전(Region)과 가용영역(AZ)에서 서비스 가능</p>
<p>💸 유연한 종량제 과금: 쓰는 만큼만 요금 지불 (전기 요금처럼 Pay-as-you-go)</p>
<h2 id="_3-ec2-아키텍처-기본-흐름" tabindex="-1"><a class="header-anchor" href="#_3-ec2-아키텍처-기본-흐름"><span>3. EC2 아키텍처 기본 흐름</span></a></h2>
<p>아래는 웹 서비스를 EC2로 운영할 때 기본 구조를 간단히 나타낸 그림입니다.</p>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"></span>
<span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    User<span class="token text string">[👩 사용자]</span> <span class="token arrow operator">--></span><span class="token label property">|인터넷 접속|</span> ELB<span class="token text string">[⚖️ 로드밸런서]</span></span>
<span class="line">    ELB <span class="token arrow operator">--></span> EC2_1<span class="token text string">[🖥️ EC2 인스턴스 #1]</span></span>
<span class="line">    ELB <span class="token arrow operator">--></span> EC2_2<span class="token text string">[🖥️ EC2 인스턴스 #2]</span></span>
<span class="line">    EC2_1 <span class="token arrow operator">--></span> DB<span class="token text string">[(💾 데이터베이스)]</span></span>
<span class="line">    EC2_2 <span class="token arrow operator">--></span> DB</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>👉 설명:</p>
<p>사용자는 인터넷을 통해 접속</p>
<p>로드밸런서(ELB)가 여러 EC2로 트래픽을 분산</p>
<p>EC2 인스턴스는 웹 애플리케이션 실행</p>
<p>데이터베이스(RDS 등)와 연결되어 데이터 처리</p>
<h2 id="_4-ec2의-활용-사례" tabindex="-1"><a class="header-anchor" href="#_4-ec2의-활용-사례"><span>4. EC2의 활용 사례</span></a></h2>
<p>🏠 개인 블로그 운영 (WordPress 설치)</p>
<p>🛒 쇼핑몰 웹서비스 구축</p>
<p>🧪 머신러닝 모델 학습 (GPU 인스턴스 활용)</p>
<p>📊 기업 내부 ERP/CRM 서버 운영</p>
<p>🎮 게임 서버 구축</p>
<h2 id="_5-ec2를-시작하려면" tabindex="-1"><a class="header-anchor" href="#_5-ec2를-시작하려면"><span>5. EC2를 시작하려면?</span></a></h2>
<p>AWS 계정 생성</p>
<p>VPC &amp; 보안 설정(Security Group)</p>
<p>EC2 인스턴스 생성 (운영체제 선택: Linux, Windows 등)</p>
<p>Elastic IP 연결 (고정 IP 부여)</p>
<p>필요 시 Auto Scaling &amp; 로드밸런서(ELB) 설정</p>
<p>서비스 운영 시작 🚀</p>
<h2 id="✅-정리" tabindex="-1"><a class="header-anchor" href="#✅-정리"><span>✅ 정리</span></a></h2>
<h3 id="ec2는-aws의-핵심-서비스로-인터넷에서-빌려-쓰는-컴퓨터-라고-생각하면-쉽습니다" tabindex="-1"><a class="header-anchor" href="#ec2는-aws의-핵심-서비스로-인터넷에서-빌려-쓰는-컴퓨터-라고-생각하면-쉽습니다"><span>EC2는 AWS의 핵심 서비스로, **“인터넷에서 빌려 쓰는 컴퓨터”**라고 생각하면 쉽습니다.</span></a></h3>
<h3 id="온프레미스-직접-서버-운영-보다-저렴하고-빠르며-확장성까지-보장되므로-스타트업부터-대기업까지-가장-많이-쓰는-aws-서비스-중-하나입니다" tabindex="-1"><a class="header-anchor" href="#온프레미스-직접-서버-운영-보다-저렴하고-빠르며-확장성까지-보장되므로-스타트업부터-대기업까지-가장-많이-쓰는-aws-서비스-중-하나입니다"><span>온프레미스(직접 서버 운영)보다 저렴하고 빠르며, 확장성까지 보장되므로 스타트업부터 대기업까지 가장 많이 쓰는 AWS 서비스 중 하나입니다.</span></a></h3>
<ul>
<li>참고 링크</li>
</ul>
<p>https://aws.amazon.com/ko/ec2/?trk=0c590778-ca09-456d-9206-6a8e2747278b&amp;sc_channel=ps&amp;ef_id=Cj0KCQjwnovFBhDnARIsAO4V7mCJ_evjsBtKmIVcpEy7_lbhRgjPiGBucFHopB3Ji4089DOFfEkOfGsaAnrkEALw_wcB:G:s&amp;s_kwcid=AL!4422!3!588924203178!p!!g!!ec2!16390049454!133992835579&amp;gad_campaignid=16390049454&amp;gclid=Cj0KCQjwnovFBhDnARIsAO4V7mCJ_evjsBtKmIVcpEy7_lbhRgjPiGBucFHopB3Ji4089DOFfEkOfGsaAnrkEALw_wcB
https://docs.aws.amazon.com/ko_kr/ec2/?icmpid=docs_homepage_compute
https://velog.io/@yjshin/AWS-EC2-Amazon-Elastic-Compute-Cloud</p>
</div></template>


