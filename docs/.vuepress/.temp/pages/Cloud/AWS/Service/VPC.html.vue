<template><div><h1 id="🌐-aws-vpc-virtual-private-cloud-이해하기" tabindex="-1"><a class="header-anchor" href="#🌐-aws-vpc-virtual-private-cloud-이해하기"><span>🌐 AWS VPC (Virtual Private Cloud) 이해하기</span></a></h1>
<h3 id="_1-vpc란-무엇일까" tabindex="-1"><a class="header-anchor" href="#_1-vpc란-무엇일까"><span>1. VPC란 무엇일까?</span></a></h3>
<p>VPC (Virtual Private Cloud) 는
AWS 클라우드 안에서 내가 원하는 방식으로 네트워크 공간을 직접 설계할 수 있게 해주는 서비스입니다.</p>
<h2 id="👉-쉽게-말해" tabindex="-1"><a class="header-anchor" href="#👉-쉽게-말해"><span>👉 쉽게 말해,</span></a></h2>
<p>**“AWS 클라우드 안에 나만의 독립적인 데이터센터를 만드는 것”**이라고 이해하면 됩니다.</p>
<h3 id="_2-vpc의-주요-특징" tabindex="-1"><a class="header-anchor" href="#_2-vpc의-주요-특징"><span>2. VPC의 주요 특징</span></a></h3>
<p>🛡️ 격리된 네트워크 공간: 다른 고객과 분리된 안전한 네트워크 영역 제공</p>
<p>📡 IP 주소 범위 설정: 원하는 대역(CIDR 블록)으로 네트워크를 직접 구성 가능</p>
<p>🔄 서브넷(Subnet) 분리: 퍼블릭/프라이빗 서브넷을 나눠 보안성과 효율성 확보</p>
<p>🚪 게이트웨이 연결: 인터넷 게이트웨이(IGW), NAT 게이트웨이, VPN, Direct Connect 등 다양한 연결 지원</p>
<p>🔒 보안 제어: Security Group, Network ACL로 접근 제어 가능</p>
<h3 id="_3-vpc-구조-시각화" tabindex="-1"><a class="header-anchor" href="#_3-vpc-구조-시각화"><span>3. VPC 구조 시각화</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    Internet<span class="token text string">["Internet"]</span> <span class="token arrow operator">--></span> IGW<span class="token text string">["Internet Gateway"]</span></span>
<span class="line">    IGW <span class="token arrow operator">--></span> PublicSubnet<span class="token text string">["Public Subnet"]</span></span>
<span class="line">    PublicSubnet <span class="token arrow operator">--></span> EC2_Public<span class="token text string">["EC2 (Web Server)"]</span></span>
<span class="line">    </span>
<span class="line">    PublicSubnet <span class="token arrow operator">--></span> NATGW<span class="token text string">["NAT Gateway"]</span></span>
<span class="line">    NATGW <span class="token arrow operator">--></span> PrivateSubnet<span class="token text string">["Private Subnet"]</span></span>
<span class="line">    PrivateSubnet <span class="token arrow operator">--></span> EC2_Private<span class="token text string">["EC2 (DB Server)"]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>설명</p>
<p>Internet Gateway (IGW) : VPC를 인터넷과 연결</p>
<p>Public Subnet : 외부에서 접근 가능한 서버(예: 웹 서버) 배치</p>
<p>Private Subnet : 외부에서 직접 접근할 수 없는 내부 서버(예: DB) 배치</p>
<p>NAT Gateway : Private Subnet의 서버들이 인터넷에 나가는 트래픽만 허용</p>
<p>Security Group &amp; NACL : 인스턴스/네트워크 단위에서 방화벽 역할</p>
<h3 id="_4-vpc-활용-사례" tabindex="-1"><a class="header-anchor" href="#_4-vpc-활용-사례"><span>4. VPC 활용 사례</span></a></h3>
<p>🏠 웹 서비스 기본 아키텍처: 웹 서버(퍼블릭) + DB 서버(프라이빗)</p>
<p>🏢 기업 내부 전용망 구축: VPN이나 Direct Connect로 사내 네트워크와 연결</p>
<p>🔒 보안 강화 환경: 내부 시스템은 프라이빗 서브넷에 두고, 외부 노출 최소화</p>
<p>🌍 멀티 리전/멀티 AZ 아키텍처: 재해 복구(Disaster Recovery) 대비</p>
<ol start="5">
<li>VPC를 시작하려면?</li>
</ol>
<p>VPC 생성 (IP 범위 설정: 예. 10.0.0.0/16)</p>
<p>퍼블릭/프라이빗 서브넷 생성</p>
<p>라우팅 테이블 구성 (인터넷 게이트웨이, NAT GW 연결)</p>
<p>보안 그룹(Security Group), 네트워크 ACL 설정</p>
<p>EC2, RDS 등 리소스 배치</p>
<h1 id="🖥️-ec2-vpc-아키텍처" tabindex="-1"><a class="header-anchor" href="#🖥️-ec2-vpc-아키텍처"><span>🖥️ EC2 + VPC 아키텍처</span></a></h1>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    Internet<span class="token text string">["Internet"]</span> <span class="token arrow operator">--></span> IGW<span class="token text string">["Internet Gateway"]</span></span>
<span class="line">    IGW <span class="token arrow operator">--></span> RT_Public<span class="token text string">["Routing Table Public"]</span></span>
<span class="line">    RT_Public <span class="token arrow operator">--></span> PublicSubnet<span class="token text string">["Public Subnet"]</span></span>
<span class="line">    PublicSubnet <span class="token arrow operator">--></span> EC2_Public<span class="token text string">["EC2 Web Server"]</span></span>
<span class="line"></span>
<span class="line">    PublicSubnet <span class="token arrow operator">--></span> NATGW<span class="token text string">["NAT Gateway"]</span></span>
<span class="line">    NATGW <span class="token arrow operator">--></span> RT_Private<span class="token text string">["Routing Table Private"]</span></span>
<span class="line">    RT_Private <span class="token arrow operator">--></span> PrivateSubnet<span class="token text string">["Private Subnet"]</span></span>
<span class="line">    PrivateSubnet <span class="token arrow operator">--></span> EC2_Private<span class="token text string">["EC2 DB Server"]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="✨-구조-설명" tabindex="-1"><a class="header-anchor" href="#✨-구조-설명"><span>✨ 구조 설명</span></a></h2>
<p>VPC : 나만의 네트워크 공간</p>
<p>Public Subnet : 외부에서 접근 가능한 EC2 (예: 웹 서버) 배치</p>
<p>Private Subnet : 외부에서는 직접 접근 불가, 내부용 EC2 (예: DB 서버) 배치</p>
<p>Internet Gateway (IGW) : VPC와 인터넷 연결</p>
<p>NAT Gateway : Private Subnet의 EC2가 인터넷에 나가는 통신만 가능하게 해줌</p>
<h4 id="👉-이렇게-하면-웹-서버-퍼블릭-↔-db-서버-프라이빗-구조가-만들어져-보안성과-확장성을-모두-확보할-수-있습니다" tabindex="-1"><a class="header-anchor" href="#👉-이렇게-하면-웹-서버-퍼블릭-↔-db-서버-프라이빗-구조가-만들어져-보안성과-확장성을-모두-확보할-수-있습니다"><span>👉 이렇게 하면 웹 서버(퍼블릭) ↔ DB 서버(프라이빗) 구조가 만들어져, 보안성과 확장성을 모두 확보할 수 있습니다.</span></a></h4>
<p><img src="https://velog.velcdn.com/images/yjshin/post/95641571-7452-40ca-9590-4ab29cba511f/image.png" alt=""></p>
<p>VPC: AWS에서 만든 나만의 네트워크 공간</p>
<p>Public Subnet: 외부(인터넷)에서 접근 가능한 웹 서버 EC2 위치</p>
<p>Private Subnet: 외부에서 직접 접근할 수 없는 DB 서버 EC2 위치</p>
<p>Internet Gateway (IGW): VPC와 인터넷을 연결하는 통로</p>
<p>NAT Gateway: Private Subnet의 EC2가 인터넷에 나가는 트래픽만 허용</p>
<p>👉 즉, 사용자는 인터넷을 통해 Public Subnet의 웹 서버 EC2에 접속하고,
웹 서버는 내부적으로만 Private Subnet의 DB 서버 EC2와 통신하는 구조입니다.</p>
<h1 id="✅-정리" tabindex="-1"><a class="header-anchor" href="#✅-정리"><span>✅ 정리</span></a></h1>
<p>AWS VPC는 클라우드 환경에서 내 마음대로 설계하는 가상 네트워크 공간입니다.</p>
<p>온프레미스 데이터센터처럼, 퍼블릭/프라이빗 네트워크를 나누고 보안을 적용할 수 있어
EC2, RDS, ELB 같은 AWS 서비스의 기반 인프라 역할을 합니다.</p>
<ul>
<li>참고 링크 :
https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/what-is-amazon-vpc.html
https://velog.io/@yjshin/AWS-VPC-Virtual-Private-Cloud</li>
</ul>
</div></template>


