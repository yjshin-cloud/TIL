# 멋쟁이사자처럼 2주차 회고록
*객체지향 프로그래밍과 실무 기술 스택 마스터 🎯*

---

## 📅 학습 기간
**2025년 8월 4일 - 8월 8일 (5일차)**

---

## 🚀 2주차 핵심 테마: **"이론에서 실무로"**

```mermaid
mindmap
  root((2주차 핵심 학습))
    객체지향 프로그래밍
      클래스와 객체
      상속과 다형성
      추상화와 캡슐화
      인터페이스 설계
    실무 기술 스택
      HTTP 통신
      API 연동
      의존성 관리
      환경 변수 관리
    고급 Java 개념
      스레드와 동시성
      함수형 프로그래밍
      예외 처리
      제네릭스
    배포와 운영
      서버 개념
      배포 전략
      클라우드 기초
      Docker 입문
```

---

## 📊 주요 학습 성취도

```mermaid
gantt
    title 2주차 학습 일정 및 완성도
    dateFormat  YYYY-MM-DD
    section Day 5 (8/4)
    OOP 기초 개념        :done, d1, 2025-08-04, 2025-08-04
    클래스 설계          :done, d2, 2025-08-04, 2025-08-04
    인터페이스 구현      :done, d3, 2025-08-04, 2025-08-04
    
    section Day 6 (8/5)
    계산기 프로젝트      :done, d4, 2025-08-05, 2025-08-05
    함수형 프로그래밍    :done, d5, 2025-08-05, 2025-08-05
    
    section Day 7 (8/6)
    스레드 프로그래밍    :done, d6, 2025-08-06, 2025-08-06
    동시성 처리          :done, d7, 2025-08-06, 2025-08-06
    분산 시스템 개념     :done, d8, 2025-08-06, 2025-08-06
    
    section Day 8 (8/7)
    의존성 관리          :done, d9, 2025-08-07, 2025-08-07
    Maven과 외부 라이브러리 :done, d10, 2025-08-07, 2025-08-07
    배포 개념 학습       :done, d11, 2025-08-07, 2025-08-07
    
    section Day 9 (8/8)
    웹 서버 구축         :done, d12, 2025-08-08, 2025-08-08
    Tomcat 서버          :done, d13, 2025-08-08, 2025-08-08
```

---

## 📚 일차별 상세 학습 내용

### 🧱 **Day 5 (8/4): 객체지향 프로그래밍의 진정한 시작**

#### 🎯 핵심 키워드
- **OOP 4대 원칙**: 캡슐화, 상속, 다형성, 추상화
- **추상 클래스**: `abstract class Chatbot`
- **인터페이스**: `interface IGemini` 
- **상속과 오버라이딩**: `extends`, `@Override`

#### 💡 실전 프로젝트: Gemini 챗봇 구현
```java
// 추상 클래스를 활용한 설계
public abstract class Chatbot implements IGemini {
    protected final String apiKey;
    
    protected Chatbot(String apiKey) {
        this.apiKey = apiKey;
    }
    
    @Override
    public String chat(String message) throws Exception {
        String templateMessage = handleMessage(message);
        String geminiResponse = callGemini(apiKey, templateMessage);
        return changeResult(geminiResponse);
    }
}
```

#### 🔍 깊이 있는 이해
```mermaid
classDiagram
    class IGemini {
        <<interface>>
        +chat(String message) String
    }
    
    class Chatbot {
        <<abstract>>
        #String apiKey
        +chat(String message) String
        -handleMessage(String message) String
        -callGemini(String apiKey, String text) String
        -changeResult(String result) String
    }
    
    class RoleChatbot {
        -String role
        +RoleChatbot(String apiKey)
        +RoleChatbot(String apiKey, String role)
        +chat(String message) String
    }
    
    IGemini <|.. Chatbot
    Chatbot <|-- RoleChatbot
```

---

### 🔧 **Day 6 (8/5): 계산기 프로젝트와 함수형 프로그래밍**

#### 🎯 핵심 키워드
- **인터페이스 설계**: `ICalculator`
- **함수형 프로그래밍**: Lambda, Stream API
- **코드 재사용성**: 모듈화된 설계

#### 🧮 계산기 프로젝트 아키텍처
```mermaid
graph TD
    A[Calculator Interface] --> B[BasicCalculator]
    A --> C[ScientificCalculator]
    A --> D[ProgrammerCalculator]
    
    B --> E[Add Operation]
    B --> F[Subtract Operation]
    B --> G[Multiply Operation]
    B --> H[Divide Operation]
    
    C --> I[Sin/Cos/Tan]
    C --> J[Log/Ln]
    C --> K[Power Functions]
    
    D --> L[Binary Operations]
    D --> M[Hex Operations]
    D --> N[Bitwise Operations]
```

#### 💫 함수형 프로그래밍 도입
- Lambda 표현식으로 코드 간소화
- Stream API를 통한 데이터 처리 최적화
- 불변성(Immutability) 개념 이해

---

### ⚡ **Day 7 (8/6): 스레드와 분산 시스템의 세계**

#### 🎯 핵심 키워드
- **멀티스레딩**: `Thread`, `Runnable`
- **동시성 제어**: `synchronized`, `volatile`
- **분산 처리**: Redis, 메시지 큐
- **클라우드 컴퓨팅**: 확장성과 가용성

#### 🔄 스레드 동작 원리
```mermaid
sequenceDiagram
    participant Main as 메인 스레드
    participant T1 as 작업 스레드 1
    participant T2 as 작업 스레드 2
    participant Redis as Redis 서버
    
    Main->>T1: 작업 1 할당
    Main->>T2: 작업 2 할당
    
    par 병렬 처리
        T1->>Redis: 데이터 읽기
        Redis-->>T1: 데이터 반환
    and
        T2->>Redis: 데이터 쓰기
        Redis-->>T2: 완료 응답
    end
    
    T1-->>Main: 작업 1 완료
    T2-->>Main: 작업 2 완료
```

#### 🌐 분산 시스템 아키텍처
```mermaid
graph TB
    subgraph "로드 밸런서"
        LB[Load Balancer]
    end
    
    subgraph "애플리케이션 서버"
        AS1[App Server 1]
        AS2[App Server 2]
        AS3[App Server 3]
    end
    
    subgraph "데이터 계층"
        Redis[(Redis Cache)]
        DB[(MySQL Database)]
    end
    
    Client --> LB
    LB --> AS1
    LB --> AS2
    LB --> AS3
    
    AS1 --> Redis
    AS2 --> Redis
    AS3 --> Redis
    
    AS1 --> DB
    AS2 --> DB
    AS3 --> DB
```

---

### 📦 **Day 8 (8/7): 의존성 관리와 배포의 첫 걸음**

#### 🎯 핵심 키워드
- **의존성 관리**: Maven, pom.xml
- **환경 변수**: `.env` 파일, Dotenv
- **외부 라이브러리**: Jackson, HTTP Client
- **배포 개념**: Docker, 클라우드 서비스

#### 📋 의존성의 종류와 특징
```mermaid
mindmap
  root((의존성 유형))
    내장 라이브러리
      java.util.*
      java.net.*
      java.io.*
    외부 라이브러리
      Jackson
        JSON 파싱
        객체 매핑
      Dotenv
        환경 변수 관리
        설정 분리
      HTTP Client
        API 통신
        REST 호출
    프레임워크
      Spring Boot
        의존성 주입
        자동 설정
      Maven
        빌드 관리
        패키지 관리
```

#### 🚀 배포 파이프라인 개념
```mermaid
flowchart LR
    A[개발 완료] --> B[빌드]
    B --> C[테스트]
    C --> D[패키징]
    D --> E[배포]
    
    subgraph "배포 환경"
        E --> F[개발 서버]
        E --> G[스테이징 서버]
        E --> H[운영 서버]
    end
    
    subgraph "클라우드 서비스"
        I[AWS EC2]
        J[Docker Container]
        K[Kubernetes]
    end
    
    F -.-> I
    G -.-> J
    H -.-> K
```

#### 💻 실전 Maven 설정
```xml
<dependencies>
    <dependency>
        <groupId>com.google.ai</groupId>
        <artifactId>genai</artifactId>
        <version>latest</version>
    </dependency>
    <dependency>
        <groupId>io.github.cdimascio</groupId>
        <artifactId>dotenv-java</artifactId>
        <version>3.0.0</version>
    </dependency>
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-databind</artifactId>
        <version>2.15.2</version>
    </dependency>
</dependencies>
```

---

### 🌐 **Day 9 (8/8): 웹 서버와 실전 배포**

#### 🎯 핵심 키워드
- **웹 서버**: Apache Tomcat
- **서블릿**: Java 웹 애플리케이션
- **WAS**: Web Application Server
- **실전 배포**: Render, Docker

#### 🏗️ 웹 서버 아키텍처
```mermaid
graph TB
    subgraph "클라이언트 측"
        Browser[웹 브라우저]
        Mobile[모바일 앱]
    end
    
    subgraph "서버 측"
        Tomcat[Apache Tomcat]
        Servlet[Java Servlet]
        Business[비즈니스 로직]
        DB[(데이터베이스)]
    end
    
    Browser --> |HTTP 요청| Tomcat
    Mobile --> |HTTP 요청| Tomcat
    Tomcat --> Servlet
    Servlet --> Business
    Business --> DB
    
    DB --> Business
    Business --> Servlet
    Servlet --> Tomcat
    Tomcat --> |HTTP 응답| Browser
    Tomcat --> |HTTP 응답| Mobile
```

---

## 📈 학습 성장 지표

### 🎯 역량별 성취도
```mermaid
xychart-beta
    title "2주차 주요 역량 성장도"
    x-axis ["OOP 이해도", "API 활용", "의존성 관리", "배포 개념", "스레드 이해"]
    y-axis "성취도 (%)" 0 --> 100
    bar [85, 75, 70, 60, 80]
```

### 📊 일차별 학습 만족도
```mermaid
xychart-beta
    title "2주차 일일 학습 만족도"
    x-axis [Day5, Day6, Day7, Day8, Day9]
    y-axis "만족도" 0 --> 10
    line [8, 7, 9, 6, 8]
```

---

## 🎉 주요 성취 및 돌파구

### ✅ **기술적 성취**
1. **객체지향 설계 패턴 체득**
   - 추상 클래스와 인터페이스의 실전 활용
   - 상속과 다형성을 통한 코드 재사용성 극대화
   - 캡슐화를 통한 안전한 데이터 관리

2. **실무 기술 스택 도입**
   - Maven을 통한 전문적인 의존성 관리
   - 환경변수 분리를 통한 보안 강화
   - HTTP 클라이언트를 활용한 API 통신

3. **고급 프로그래밍 개념 습득**
   - 멀티스레딩과 동시성 프로그래밍 이해
   - 함수형 프로그래밍 패러다임 도입
   - 분산 시스템 아키텍처 개념 정립

### 🚀 **프로젝트 성과**
```mermaid
pie title 2주차 주요 프로젝트 성과
    "Gemini 챗봇 고도화" : 35
    "계산기 OOP 설계" : 25
    "스레드 실습 프로젝트" : 20
    "웹 서버 배포 실습" : 20
```

---

## 💡 핵심 깨달음과 인사이트

### 🧠 **개념적 이해의 전환점**
> **"코딩에서 엔지니어링으로의 전환"**

2주차는 단순한 코딩을 넘어서 **소프트웨어 엔지니어링**의 진정한 의미를 깨닫는 시간이었습니다.

#### 🎯 **패러다임 전환 포인트**
```mermaid
journey
    title 학습 패러다임의 진화
    section 1주차
      기본 문법 학습    : 3
      Git 사용법       : 4
      개발환경 구축     : 4
    section 2주차  
      객체지향 설계     : 8
      실무 기술 적용    : 7
      아키텍처 이해     : 6
      배포와 운영      : 5
```

### 🔍 **가장 인상 깊었던 순간들**

#### 1. **추상화의 힘을 깨달은 순간**
```java
// 이전: 절차적 코딩
public static void chatWithGemini(String message) { ... }

// 현재: 객체지향 설계
public abstract class Chatbot implements IGemini {
    public abstract String chat(String message);
}
```
추상 클래스와 인터페이스를 통해 **"확장 가능한 설계"**의 진정한 의미를 이해했습니다.

#### 2. **의존성 관리의 중요성 체감**
Maven을 통해 외부 라이브러리를 관리하면서, **"거인의 어깨에 서기"**의 개발 철학을 체험했습니다.

#### 3. **스레드와 분산처리의 현실성**
Redis를 활용한 분산 처리 개념을 학습하면서 **실무 클라우드 환경**에 대한 이해도가 급상승했습니다.

---

## ⚠️ 도전과제 및 개선점

### 🤔 **어려웠던 부분들**

#### 1. **추상적 개념의 구체화**
- **문제**: OOP의 추상 개념들이 실무에서 어떻게 활용되는지 연결이 어려웠음
- **해결책**: 실전 프로젝트를 통한 체험적 학습으로 극복

#### 2. **스레드 프로그래밍의 복잡성**
```mermaid
graph TD
    A[단일 스레드] --> B{복잡도}
    B -->|Low| C[순차 실행]
    B -->|High| D[멀티 스레드]
    D --> E[동기화 문제]
    D --> F[데드락 위험]
    D --> G[성능 최적화]
```

#### 3. **배포 환경의 복잡성**
- Docker, Kubernetes, AWS 등 **배포 생태계의 방대함**
- 학습 우선순위 설정의 어려움

### 📈 **개선 전략**
1. **반복 학습**: 어려운 개념은 다양한 예제로 반복 실습
2. **실무 연결**: 모든 학습 내용을 실무 시나리오와 연결하여 이해
3. **점진적 확장**: 기초부터 고급까지 단계적 학습 접근

---

## 🎯 3주차 학습 목표 및 계획

### 🚀 **우선순위 최상**
- [ ] **Spring Boot 프레임워크** 마스터
- [ ] **RESTful API** 설계 및 구현
- [ ] **데이터베이스 연동** (JPA/MyBatis)
- [ ] **테스트 코드 작성** (JUnit)

### 📋 **중요도 상**
- [ ] **Docker 컨테이너화** 실습
- [ ] **AWS 기초 서비스** 활용
- [ ] **CI/CD 파이프라인** 구축
- [ ] **마이크로서비스** 아키텍처 이해

### 🔧 **기반 기술 보강**
- [ ] **Linux 명령어** 숙달
- [ ] **네트워크 프로그래밍** 기초
- [ ] **보안** 기본 개념
- [ ] **모니터링 도구** 활용

### 📚 **학습 전략**
```mermaid
mindmap
  root((3주차 학습 전략))
    실무 중심 학습
      팀 프로젝트 참여
      코드 리뷰 문화
      실전 배포 경험
    기술 스택 확장
      Spring 생태계
      AWS 클라우드
      DevOps 도구
    포트폴리오 구축
      GitHub 관리
      기술 블로그 운영
      프로젝트 문서화
```

---

## 📊 2주차 종합 평가

### 🏆 **성공 지표**
- **객체지향 프로그래밍**: 85% 달성 ✅
- **실무 기술 적용**: 75% 달성 ✅  
- **프로젝트 완성도**: 80% 달성 ✅
- **개념 이해도**: 85% 달성 ✅

### 📈 **성장 궤적**
```mermaid
gitgraph
    commit id: "1주차 시작"
    commit id: "Git 마스터"
    commit id: "Java 기초"
    branch oop-learning
    commit id: "클래스 설계"
    commit id: "인터페이스 구현"
    commit id: "다형성 활용"
    checkout main
    merge oop-learning
    branch advanced-topics
    commit id: "스레드 프로그래밍"
    commit id: "분산 시스템"
    checkout main
    merge advanced-topics
    commit id: "배포 실습"
    commit id: "2주차 완성"
```

---

## 🔗 유용한 학습 리소스 업데이트

### 📚 **새로 발견한 학습 사이트**
- [Maven Repository](https://mvnrepository.com/) - 의존성 관리의 보물창고
- [Baeldung](https://www.baeldung.com/) - 실무 중심 Java 튜토리얼
- [Together AI](https://api.together.ai/) - AI API 실습 플랫폼
- [Groq](https://groq.com/) - 무료 AI 모델 테스팅

### 🛠️ **실무 도구 추가**
- **Render**: 간편한 배포 플랫폼
- **Dotenv**: 환경변수 관리
- **Jackson**: JSON 처리의 표준
- **Apache Tomcat**: Java 웹 서버의 기본

### 📖 **추가 학습 자료**
- [Oracle Java Documentation](https://docs.oracle.com/javase/) - 공식 문서
- [Spring Framework Reference](https://spring.io/projects/spring-framework) - Spring 공식 가이드
- [Docker Documentation](https://docs.docker.com/) - 컨테이너화 완벽 가이드

---

## 💬 개인적 소감 및 다짐

### 🌟 **2주차를 한 문장으로 요약한다면?**
> **"코딩 장인에서 소프트웨어 아키텍트로의 첫 걸음을 내디딘 시간"**

### 🔥 **가장 뿌듯했던 순간**
Gemini API를 활용한 챗봇을 추상 클래스와 인터페이스로 리팩토링하면서, **객체지향 설계의 우아함**을 체험한 순간이었습니다. 코드가 단순히 동작하는 것을 넘어서 **확장 가능하고 유지보수하기 쉬운 구조**로 진화하는 것을 보며 진정한 엔지니어링을 맛봤습니다.

### 🚀 **앞으로의 다짐**
앞으로 3주차에서는 **Spring Boot와 클라우드 기술**을 마스터하여 실제 운영 가능한 서비스를 만들어보겠습니다. 단순히 코드를 작성하는 것이 아니라, **사용자에게 가치를 제공하는 시스템**을 구축하는 것이 목표입니다.

### 🎯 **클라우드 엔지니어로서의 비전**
2주간의 학습을 통해 **"기술을 통해 세상을 연결하는 엔지니어"**가 되고 싶다는 확신이 더욱 강해졌습니다. 

---

## 🏁 마무리

2주차는 **"depth와 breadth의 균형"**을 맞춘 시간이었습니다. 

객체지향 프로그래밍의 깊이 있는 이해와 동시에, 실무에서 필요한 다양한 기술들을 폭넓게 경험했습니다. 특히 **AI 도구를 활용한 학습 가속화**와 **실전 프로젝트를 통한 체험적 학습**이 시너지를 이뤄 놀라운 성장을 이룰 수 있었습니다.

3주차에서는 더욱 실무에 가까운 프로젝트들을 통해 **실제 사용자를 위한 서비스**를 만들어보겠습니다! 🚀

---

*"객체지향으로 설계하고, 클라우드로 확장하며, AI와 함께 성장하는 멋쟁이사자처럼!"* 🦁

---

**작성일**: 2025년 8월 14일  
**작성자**: 클라우드 엔지니어 지망생  
**태그**: `#멋쟁이사자처럼` `#2주차회고` `#OOP` `#Java` `#스레드` `#배포` `#의존성관리`