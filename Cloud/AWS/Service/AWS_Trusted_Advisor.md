# 🌟 AWS Trusted Advisor 정리

## 📌 AWS Trusted Advisor란?
AWS Trusted Advisor는 클라우드 환경을 점검해 주는 온라인 도우미 서비스입니다.
비용 절감, 성능 최적화, 보안 강화, 내결함성 확보, 서비스 제한 확인 등의 모범 사례(Best Practices)를 기반으로 리소스를 분석하고 개선 방안을 제안해 줍니다.

즉, AWS 계정과 리소스 상태를 진단해주는 헬스체크 서비스라고 이해하면 됩니다. 🩺

## ✅ 주요 점검 항목 (5가지 카테고리)

### 💰 비용 최적화 (Cost Optimization)
사용하지 않는 EC2 인스턴스

미사용 Elastic IP

낮은 활용도의 RDS 인스턴스
→ 비용을 줄일 수 있는 리소스 추천

### ⚡ 성능 (Performance)
서비스 지연이나 병목을 줄이기 위한 권장사항

Auto Scaling 그룹, 로드 밸런서 설정 검토

### 🔒 보안 (Security)
S3 버킷 퍼블릭 접근 여부

IAM Root 계정 MFA 적용 여부

보안 그룹의 과도한 접근 허용 규칙 확인

### 🛠️ 내결함성 (Fault Tolerance)
백업 및 복구 설정 검토

여러 AZ에 걸쳐 있는지 확인

Elastic Load Balancer 설정 점검

### 📊 서비스 제한 (Service Limits)
EC2 인스턴스, EIP, VPC, RDS 등 서비스별 한도(Quota) 초과 여부 알림

## 🎨 시각화 (Mermaid 다이어그램)

<img width="1441" height="317" alt="image" src="https://github.com/user-attachments/assets/7ecb2746-1aad-4df8-ac73-4e9061ebe2d6" />


## 💼 현업 활용 사례
비용 관리팀: 미사용 리소스를 찾아 클라우드 비용 절감

보안팀: IAM, S3, 보안 그룹 등을 보안 모범사례에 맞게 관리

운영팀/인프라팀: Auto Scaling, 멀티 AZ 배포 여부 등을 확인해 가용성 강화

클라우드 거버넌스: 서비스 한도 초과로 인한 장애 방지

특히 Enterprise Support를 사용하면 더 많은 세부 항목의 Trusted Advisor 점검을 받을 수 있습니다.

## 📖 정리
AWS Trusted Advisor = 클라우드 환경 헬스체크 도구

5대 카테고리: 💰 비용, ⚡ 성능, 🔒 보안, 🛠️ 내결함성, 📊 서비스 제한

현업에서는 비용 절감·보안 강화·가용성 확보 목적으로 가장 많이 활용

* 참고 블로그 : https://velog.io/@yjshin/AWS-AWS-Trusted-Advisor
