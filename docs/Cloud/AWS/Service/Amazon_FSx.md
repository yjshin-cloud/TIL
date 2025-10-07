# 🗂️ AWS FSx (Amazon FSx) 정리

---

## 1️⃣ AWS FSx란?

Amazon FSx는 AWS에서 제공하는 완전관리형 파일 스토리지 서비스입니다.
기업이 사용하는 Windows, Lustre, NetApp, OpenZFS 같은 파일 시스템을
AWS 클라우드 환경에서 손쉽게 구축하고 운영할 수 있도록 지원합니다.

👉 쉽게 말해,
“AWS에서 제공하는 고성능 네트워크 파일 서버 (NAS)” 라고 이해하면 됩니다.

---

## 2️⃣ 주요 특징

### 💾 파일 스토리지 (File Storage)

EC2, 온프레미스 서버 등에서 네트워크 드라이브처럼 접근 가능 (SMB, NFS, Lustre 프로토콜)

### ⚙️ 완전관리형

하드웨어, 백업, 패치, 확장 자동 관리

### ⚡ 고성능 I/O 지원

머신러닝, HPC(고성능 컴퓨팅), 대규모 데이터 처리에 적합

### 🔒 보안 & 통합

AWS IAM, VPC, KMS 암호화 지원

---

## 3️⃣ FSx 제품군 (4가지 유형)

---

| 서비스                             | 특징                    | 사용 사례                       |
| ------------------------------- | --------------------- | --------------------------- |
| **FSx for Windows File Server** | SMB 프로토콜 기반, AD 통합 지원 | Windows 워크로드, 파일 공유, 홈 디렉터리 |
| **FSx for Lustre**              | 고성능 병렬 파일 시스템         | 머신러닝, 빅데이터, HPC 워크로드        |
| **FSx for NetApp ONTAP**        | 스냅샷, 복제, 멀티프로토콜 지원    | 하이브리드 클라우드 스토리지, 백업         |
| **FSx for OpenZFS**             | ZFS 기반, 저지연 파일 액세스    | 데이터베이스 백업, 개발 환경            |


---

## 4️⃣ 아키텍처 시각화

```mermaid
flowchart TD
    A["EC2 / 온프레미스 서버"] --> B["Amazon FSx File System"]
    B --> C["FSx for Windows (SMB)"]
    B --> D["FSx for Lustre (HPC, ML)"]
    B --> E["FSx for NetApp ONTAP"]
    B --> F["FSx for OpenZFS"]
    B --> G["S3 (데이터 백업/연동)"]
```

---

## 5️⃣ 특징별 정리

### 🧩 Windows 호환성

Active Directory, SMB, NTFS 지원

### 🧠 AI/ML 워크로드 지원 (FSx for Lustre)

S3와 연동 → 대규모 데이터셋 실시간 처리

### 💾 데이터 백업 및 DR (Disaster Recovery)

자동 백업 + Cross-Region 복제 가능

### 🧱 온프레미스 통합

AWS Direct Connect, VPN으로 연결 가능

---

## 6️⃣ 현업 활용 사례

### 🏢 기업 파일 서버 마이그레이션

온프레미스 Windows 파일 서버 → FSx for Windows로 이전

### 🧬 머신러닝 학습 데이터 관리

S3 데이터셋 → FSx for Lustre에서 병렬 처리

### 🏦 금융/제조 대용량 워크로드

HPC 시뮬레이션, 로그 분석, CAD 설계 파일 공유

### ☁️ 하이브리드 스토리지 구축

NetApp ONTAP 기반으로 클라우드/온프레미스 통합

---

## ✅ 정리

AWS FSx = 완전관리형 네트워크 파일 시스템 서비스

제공 유형: Windows, Lustre, NetApp ONTAP, OpenZFS

장점: 성능, 보안, 확장성, 자동 관리

현업 활용: 파일 서버 대체, ML·HPC, 백업·DR, 하이브리드 환경 구축

### 👉 한마디로, “AWS에서 클릭 몇 번으로 구축하는 고성능 기업용 파일 서버” 입니다.
