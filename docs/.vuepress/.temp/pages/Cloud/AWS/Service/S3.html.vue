<template><div><h1 id="🗄️-amazon-s3-simple-storage-service-이해하기" tabindex="-1"><a class="header-anchor" href="#🗄️-amazon-s3-simple-storage-service-이해하기"><span>🗄️ Amazon S3 (Simple Storage Service) 이해하기</span></a></h1>
<h2 id="_1-amazon-s3란" tabindex="-1"><a class="header-anchor" href="#_1-amazon-s3란"><span>1. Amazon S3란?</span></a></h2>
<p>Amazon S3는 AWS에서 제공하는 객체 스토리지 서비스입니다.</p>
<p>👉 쉽게 말해,
“클라우드에 올려두는 무제한 하드디스크” 라고 생각하면 됩니다.
파일(이미지, 영상, 문서 등)을 인터넷을 통해 안전하게 저장하고, 필요할 때 꺼내 쓸 수 있어요.</p>
<h2 id="_2-s3의-주요-특징" tabindex="-1"><a class="header-anchor" href="#_2-s3의-주요-특징"><span>2. S3의 주요 특징</span></a></h2>
<h3 id="📦-객체-object-단위-저장" tabindex="-1"><a class="header-anchor" href="#📦-객체-object-단위-저장"><span>📦 객체(Object) 단위 저장</span></a></h3>
<p>파일을 “객체”라는 단위로 저장 (객체 = 데이터 + 메타데이터)</p>
<h3 id="🪣-버킷-bucket" tabindex="-1"><a class="header-anchor" href="#🪣-버킷-bucket"><span>🪣 버킷(Bucket)</span></a></h3>
<p>S3에 데이터를 저장하는 최상위 컨테이너 (하드디스크의 폴더 같은 개념)</p>
<h3 id="🌍-글로벌-접근-가능" tabindex="-1"><a class="header-anchor" href="#🌍-글로벌-접근-가능"><span>🌍 글로벌 접근 가능</span></a></h3>
<p>인터넷만 있으면 언제 어디서든 접근 가능</p>
<h3 id="🔒-보안-권한-제어" tabindex="-1"><a class="header-anchor" href="#🔒-보안-권한-제어"><span>🔒 보안/권한 제어</span></a></h3>
<p>IAM 정책, 버킷 정책, ACL을 통해 접근 제어 가능</p>
<h3 id="💸-비용-효율적" tabindex="-1"><a class="header-anchor" href="#💸-비용-효율적"><span>💸 비용 효율적</span></a></h3>
<p>사용한 스토리지 용량과 요청 수에 따라 과금 (Pay-as-you-go)</p>
<h3 id="♻️-다양한-스토리지-클래스" tabindex="-1"><a class="header-anchor" href="#♻️-다양한-스토리지-클래스"><span>♻️ 다양한 스토리지 클래스</span></a></h3>
<p>자주 쓰는 데이터 → Standard</p>
<p>잘 안 쓰지만 보관해야 하는 데이터 → Glacier (아카이브)</p>
<h2 id="_3-s3-아키텍처-개념도" tabindex="-1"><a class="header-anchor" href="#_3-s3-아키텍처-개념도"><span>3. S3 아키텍처 개념도</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    User<span class="token text string">[사용자/애플리케이션]</span> <span class="token arrow operator">--></span> Internet<span class="token text string">[인터넷]</span></span>
<span class="line">    Internet <span class="token arrow operator">--></span> S3Bucket<span class="token text string">["Amazon S3 Bucket"]</span></span>
<span class="line">    S3Bucket <span class="token arrow operator">--></span> Object1<span class="token text string">["Object: 이미지.png"]</span></span>
<span class="line">    S3Bucket <span class="token arrow operator">--></span> Object2<span class="token text string">["Object: 보고서.pdf"]</span></span>
<span class="line">    S3Bucket <span class="token arrow operator">--></span> Object3<span class="token text string">["Object: 동영상.mp4"]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-s3-활용-사례" tabindex="-1"><a class="header-anchor" href="#_4-s3-활용-사례"><span>4. S3 활용 사례</span></a></h2>
<p>🌐 웹사이트 정적 호스팅 (HTML, CSS, JS 배포)</p>
<p>📷 이미지/동영상 저장소 (유튜브/넷플릭스 같은 미디어 서비스)</p>
<p>🗄️ 백업/아카이브 (DB 백업, 로그 저장)</p>
<p>🧠 데이터 레이크 (빅데이터 분석용 데이터 저장소)</p>
<p>🤖 AI/ML 학습 데이터 저장소</p>
<h2 id="_5-s3를-시작하려면" tabindex="-1"><a class="header-anchor" href="#_5-s3를-시작하려면"><span>5. S3를 시작하려면?</span></a></h2>
<p>AWS 콘솔에서 S3 버킷 생성 (버킷 이름 + 리전 선택)</p>
<p>객체(파일) 업로드</p>
<p>권한 설정 (퍼블릭/프라이빗, IAM 정책, 버킷 정책)</p>
<p>필요 시 버전 관리, 수명 주기 정책 설정</p>
<p>애플리케이션에서 S3 API/SDK로 데이터 읽고 쓰기</p>
<h3 id="✅-정리" tabindex="-1"><a class="header-anchor" href="#✅-정리"><span>✅ 정리</span></a></h3>
<p>Amazon S3는 안정적이고 확장 가능한 객체 스토리지 서비스로,
웹사이트, 모바일 앱, 빅데이터 분석, AI, 기업 백업 등 거의 모든 IT 환경에서 사용됩니다.</p>
<p>👉 비유하자면, “전 세계 어디서나 접근 가능한 무제한 온라인 폴더” 라고 생각하면 가장 쉽습니다.</p>
<ul>
<li>참고 링크 : https://velog.io/@yjshin/AWS-S3-Simple-Storage-Service</li>
</ul>
</div></template>


