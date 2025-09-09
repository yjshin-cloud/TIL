# 📘 AWS Systems Manager (SSM) 정리

## 🔹 1. 정의

AWS 리소스(특히 EC2, 온프레미스 서버, 하이브리드 환경)를 중앙에서 관리/자동화할 수 있게 해주는 서비스

운영 자동화, 패치 관리, 로그 수집, 인스턴스 접근 등을 지원

## 🔹 2. 주요 기능

* Session Manager

SSH 키 없이 웹 콘솔/CLI로 안전하게 접속

IAM + CloudTrail 연계 → 보안 감사 가능

* Run Command

여러 인스턴스에 동시에 명령 실행 (yum update -y 등)

개별 접속 불필요, 운영 효율 증가

* Patch Manager

OS 및 소프트웨어 패치 자동화

보안 패치 누락 방지

* Inventory

인스턴스의 소프트웨어/구성 정보 자동 수집

컴플라이언스 체크 가능

* Parameter Store

DB 비밀번호, API Key 등 애플리케이션 설정 값 안전 저장

KMS 연계로 암호화 가능

* Automation

AMI 생성, 재부팅 같은 반복 업무 자동화

## 🔹 3. 장점

중앙 집중식 관리 → 서버 수가 많아져도 운영 부담 ↓

보안 강화 (IAM, KMS, CloudTrail과 통합)

멀티 리전, 하이브리드 환경 지원


✅ 중앙 관리: 수십~수천 대 서버를 한 곳에서 제어

✅ 보안 강화: IAM, KMS, CloudTrail과 통합

✅ 자동화: 패치, 점검, 반복 업무를 자동화

✅ 하이브리드 지원: AWS + 온프레미스 동시 관리

## 📊 Mermaid 시각화
    
![image](https://velog.velcdn.com/images/yjshin/post/69e6da49-f204-4860-b3e9-2266648ef3e5/image.png)


## 🎯 암기 팁

👉 SSM = 서버 원격 제어 + 자동화 툴박스

접속(Session), 실행(Run), 패치(Patch), 저장(Parameter), 자동화(Automation)
