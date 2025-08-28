<template><div><h1 id="🔐-aws-iam-사용자-생성-root-계정-보안-가이드" tabindex="-1"><a class="header-anchor" href="#🔐-aws-iam-사용자-생성-root-계정-보안-가이드"><span>🔐 AWS IAM 사용자 생성 &amp; Root 계정 보안 가이드</span></a></h1>
<h2 id="_1️⃣-1️⃣-root-계정의-특징과-문제점" tabindex="-1"><a class="header-anchor" href="#_1️⃣-1️⃣-root-계정의-특징과-문제점"><span>1️⃣-1️⃣ Root 계정의 특징과 문제점</span></a></h2>
<ul>
<li>
<p>AWS 계정을 처음 생성하면 <strong>Root 계정</strong>(이메일 기반)이 만들어짐</p>
</li>
<li>
<p>Root 계정은 <strong>권한을 조정할 수 없는 슈퍼유저(Admin User)</strong></p>
</li>
<li>
<p>누구나 Root 계정 정보를 알면 모든 리소스에 접근 가능 → <strong>보안에 매우 취약</strong></p>
</li>
<li>
<p>따라서 운영 환경에서는 Root 계정 사용을 <strong>절대 권장하지 않음</strong></p>
</li>
</ul>
<h2 id="_1️⃣-2️⃣-왜-root-계정을-쓰면-안-될까" tabindex="-1"><a class="header-anchor" href="#_1️⃣-2️⃣-왜-root-계정을-쓰면-안-될까"><span>1️⃣-2️⃣ 왜 Root 계정을 쓰면 안 될까?</span></a></h2>
<ul>
<li>
<p>AWS 계정 최초 생성 시 만들어지는 <strong>Root 계정</strong>은 권한을 제한할 수 없는 슈퍼유저</p>
</li>
<li>
<p>Root 계정은 보안에 취약 → <strong>실제 운영에서는 사용 금지</strong></p>
</li>
<li>
<p>Access Key / Secret Key는 반드시 <strong>비활성화(락)</strong></p>
</li>
<li>
<p>Root 계정은 결제 관리, 계정 설정 등 <strong>특수 작업에만 사용</strong></p>
</li>
</ul>
<p>👉 Root 계정은 <strong>최초 설정(결제, 서비스 가입 등)</strong> 에만 사용하고,<br>
운영에서는 IAM User 또는 Role을 활용하는 것이 안전합니다.</p>
<hr>
<h2 id="_2️⃣-root-계정-보안-권장-사항" tabindex="-1"><a class="header-anchor" href="#_2️⃣-root-계정-보안-권장-사항"><span>2️⃣ Root 계정 보안 권장 사항</span></a></h2>
<ul>
<li>
<p>Root 계정으로 로그인하지 말 것</p>
</li>
<li>
<p>Root 계정의 <strong>Access Key &amp; Secret Key는 비활성화(락 걸기)</strong></p>
</li>
<li>
<p>MFA(다중 인증) 필수 적용</p>
</li>
<li>
<p>IAM User/Role을 만들어 권한 부여 후 운영</p>
</li>
</ul>
<hr>
<h2 id="_3️⃣-1️⃣-iam-user-생성-가이드" tabindex="-1"><a class="header-anchor" href="#_3️⃣-1️⃣-iam-user-생성-가이드"><span>3️⃣-1️⃣ IAM User 생성 가이드</span></a></h2>
<ol>
<li>
<p><strong>IAM 콘솔 → 사용자 추가</strong></p>
</li>
<li>
<p>사용자 이름 입력 (예: <code v-pre>admin-user</code>)</p>
</li>
<li>
<p>권한 부여</p>
<ul>
<li>
<p><code v-pre>AdministratorAccess</code> 정책 연결 (JSON 기반 Policy)</p>
</li>
<li>
<p>필요에 따라 최소 권한 원칙(Least Privilege) 적용</p>
</li>
</ul>
</li>
<li>
<p>암호 설정</p>
<ul>
<li>&quot;다음 로그인 시 새 암호 생성&quot; 권장 (운영 환경에서는 반드시 활성화)</li>
</ul>
</li>
</ol>
<h2 id="_3️⃣-2️⃣-iam-user-생성-절차" tabindex="-1"><a class="header-anchor" href="#_3️⃣-2️⃣-iam-user-생성-절차"><span>3️⃣-2️⃣ IAM User 생성 절차</span></a></h2>
<ol>
<li>
<p><strong>IAM 콘솔 접속 → 사용자 추가</strong></p>
</li>
<li>
<p>사용자 이름 입력 (예: <code v-pre>admin-user</code>)</p>
</li>
<li>
<p>인증 방식 선택</p>
<ul>
<li>
<p>암호 로그인(Password) → 콘솔 접근 가능</p>
</li>
<li>
<p>액세스 키(Access Key) → 프로그래밍 접근 가능</p>
</li>
</ul>
</li>
<li>
<p>암호 정책</p>
<ul>
<li>&quot;다음 로그인 시 새 암호 생성&quot; → 운영 환경에서는 반드시 활성화</li>
</ul>
</li>
<li>
<p>권한 부여</p>
<ul>
<li>
<p><code v-pre>AdministratorAccess</code> 정책 연결</p>
</li>
<li>
<p>또는 역할(Role) 기반 권한 부여</p>
</li>
</ul>
</li>
<li>
<p>태그(Tag) 추가 (선택)</p>
</li>
<li>
<p>생성 완료 후 자격 증명 저장</p>
</li>
</ol>
<hr>
<h2 id="_4️⃣-권한-관리-policies" tabindex="-1"><a class="header-anchor" href="#_4️⃣-권한-관리-policies"><span>4️⃣ 권한 관리 (Policies)</span></a></h2>
<ul>
<li>
<p>IAM 권한은 <strong>JSON Policy</strong>로 정의됨</p>
</li>
<li>
<p>예: EC2 전체 권한 부여</p>
</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">{   "Version": "2012-10-17",   "Statement": [     </span>
<span class="line">{       "Effect": "Allow",          // 허용       </span>
<span class="line">        "Action": "ec2:*",          // EC2 관련 모든 작업      </span>
<span class="line">        "Resource": "*"             // 모든 EC2 리소스     }   </span>
<span class="line">] }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4️⃣-정책-policy-예시" tabindex="-1"><a class="header-anchor" href="#_4️⃣-정책-policy-예시"><span>4️⃣ 정책(Policy) 예시</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">{   "Version": "2012-10-17",   </span>
<span class="line">     "Statement": [     {       </span>
<span class="line">     "Effect": "Allow",                // 허용할지(Allow) 또는 거부할지(Deny)       </span>
<span class="line">     "Action": "ec2:*",                // EC2 관련 모든 작업 허용       </span>
<span class="line">     "Resource": "*"                   // 모든 EC2 리소스에 적용     }   </span>
<span class="line">] }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5️⃣-mermaid-시각화" tabindex="-1"><a class="header-anchor" href="#_5️⃣-mermaid-시각화"><span>5️⃣ Mermaid 시각화</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    Root<span class="token text string">["Root Account (슈퍼유저, 보안 취약)"]</span> <span class="token arrow operator">--></span><span class="token label property">|초기 생성|</span> AWS<span class="token text string">["AWS 계정"]</span></span>
<span class="line"></span>
<span class="line">    AWS <span class="token arrow operator">--></span> IAM<span class="token text string">["IAM 서비스"]</span></span>
<span class="line">    IAM <span class="token arrow operator">--></span> User<span class="token text string">["IAM User (운영자 계정)"]</span></span>
<span class="line">    IAM <span class="token arrow operator">--></span> Role<span class="token text string">["IAM Role (서비스 권한 위임)"]</span></span>
<span class="line"></span>
<span class="line">    User <span class="token arrow operator">--></span> Policy<span class="token text string">["AdministratorAccess Policy (JSON 기반)"]</span></span>
<span class="line">    Role <span class="token arrow operator">--></span> Policy</span>
<span class="line"></span>
<span class="line">    Note["보안 권장 사항<span class="token operator">:</span></span>
<span class="line">    - Root 계정 사용 금지</span>
<span class="line">    - Access Key 비활성화</span>
<span class="line">    - IAM User/Role 사용</span>
<span class="line">    - MFA 적용"]</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_5️⃣-시각화-mermaid" tabindex="-1"><a class="header-anchor" href="#_5️⃣-시각화-mermaid"><span>5️⃣ 시각화 (Mermaid)</span></a></h2>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TD</span>
<span class="line">    Root<span class="token text string">["Root Account"]</span> <span class="token arrow operator">--></span> AWS<span class="token text string">["AWS Account"]</span></span>
<span class="line"></span>
<span class="line">    AWS <span class="token arrow operator">--></span> IAM<span class="token text string">["IAM 서비스"]</span></span>
<span class="line">    IAM <span class="token arrow operator">--></span> User<span class="token text string">["IAM User (운영자)"]</span></span>
<span class="line">    IAM <span class="token arrow operator">--></span> Role<span class="token text string">["IAM Role"]</span></span>
<span class="line"></span>
<span class="line">    User <span class="token arrow operator">--></span> Policy<span class="token text string">["AdministratorAccess Policy"]</span></span>
<span class="line">    Role <span class="token arrow operator">--></span> Policy</span>
<span class="line"></span>
<span class="line">    Note["Root 계정 운영 금지</span>
<span class="line">    Access Key 비활성화</span>
<span class="line">    IAM User/Role 활용</span>
<span class="line">    MFA 적용"]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="📝-한-줄씩-설명" tabindex="-1"><a class="header-anchor" href="#📝-한-줄씩-설명"><span>📝 한 줄씩 설명</span></a></h3>
<ul>
<li>
<p><code v-pre>&quot;Version&quot;: &quot;2012-10-17&quot;</code> → IAM 정책 언어 버전 (항상 이 날짜 사용)</p>
</li>
<li>
<p><code v-pre>&quot;Effect&quot;: &quot;Allow&quot;</code> → 권한 허용 (Deny는 차단)</p>
</li>
<li>
<p><code v-pre>&quot;Action&quot;: &quot;ec2:*&quot;</code> → EC2 서비스의 모든 동작 가능 (<code v-pre>*</code> = 전체 권한)</p>
</li>
<li>
<p><code v-pre>&quot;Resource&quot;: &quot;*&quot;</code> → 특정 리소스가 아닌 모든 EC2 인스턴스에 적용</p>
</li>
</ul>
<hr>
<h2 id="✅-보안-권장-사항" tabindex="-1"><a class="header-anchor" href="#✅-보안-권장-사항"><span>✅ 보안 권장 사항</span></a></h2>
<ul>
<li>
<p>Root 계정 사용 ❌ → IAM User/Role로 운영</p>
</li>
<li>
<p>MFA 활성화 → 로그인 2차 보안 적용</p>
</li>
<li>
<p>최소 권한 원칙(Least Privilege) → 꼭 필요한 권한만 부여</p>
</li>
<li>
<p>액세스 키 주기적 교체 및 로그 감사(CloudTrail)</p>
</li>
</ul>
<hr>
<h2 id="✅-정리" tabindex="-1"><a class="header-anchor" href="#✅-정리"><span>✅ 정리</span></a></h2>
<ul>
<li>
<p>Root 계정은 <strong>보안상 취약</strong> → 운영 환경에서는 사용 ❌</p>
</li>
<li>
<p>대신 IAM User / IAM Role을 만들어 <strong>필요한 권한만 부여</strong>해서 사용</p>
</li>
<li>
<p>정책(Policy)은 JSON으로 정의되며,<br>
보안 원칙은 <strong>최소 권한 부여(Least Privilege)</strong></p>
</li>
</ul>
<ul>
<li>참고 블로그 : https://velog.io/@yjshin/2.-IAM-User-생성-Ver.2025</li>
</ul>
</div></template>


