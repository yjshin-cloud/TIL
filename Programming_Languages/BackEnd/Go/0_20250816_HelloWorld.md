# Go 언어 Hello World 완벽 가이드 🚀

## 📝 기본 코드 분석

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello world!")
}
```

### 🔍 코드 구성 요소 상세 분석

#### 1. `package main`
- **역할**: 패키지 선언부
- **중요성**: Go 프로그램의 **진입점(Entry Point)**
- **특징**: `main` 패키지만이 실행 가능한 바이너리 파일을 생성
- **다른 패키지**: 라이브러리 형태로만 동작

#### 2. `import "fmt"`
- **역할**: 패키지 임포트
- **fmt**: **Formatted I/O** 표준 라이브러리
- **기능**: 콘솔 입출력 함수들 제공 (`Print`, `Println`, `Printf` 등)

#### 3. `func main()`
- **역할**: 메인 함수 (프로그램 실행 시작점)
- **특징**: Go 런타임이 자동으로 호출
- **반환값**: 없음 (void)

#### 4. `fmt.Println("Hello world!")`
- **역할**: 문자열 출력 + 자동 줄바꿈
- **다른 옵션**: 
  - `fmt.Print()`: 줄바꿈 없음
  - `fmt.Printf()`: 포맷 문자열 사용

---

## 🏃‍♂️ 실행 방법

### ✅ 사전 준비: Go 설치 확인

```bash
go version
```

### 📁 파일 생성
`main.go` 파일에 코드 저장

### 🚀 실행 방법 2가지

#### 방법 1: 직접 실행 (개발 중 추천)
```bash
go run main.go
```
- 컴파일 + 실행을 한 번에 처리
- 개발/테스트 단계에서 편리

#### 방법 2: 빌드 후 실행 (배포용)
```bash
# 1단계: 빌드
go build main.go

# 2단계: 실행
./main        # macOS/Linux
main.exe      # Windows
```

### 💡 추가 실행 팁
```bash
# 현재 디렉토리의 모든 Go 파일 실행
go run .

# 특정 이름으로 빌드
go build -o myprogram main.go
```

---

## 📊 프로그램 실행 흐름

```mermaid
graph TD
    A[프로그램 시작] --> B{Go 런타임}
    B --> C[main 패키지 검색]
    C --> D[main 함수 호출]
    D --> E[fmt.Println 실행]
    E --> F[Hello world! 출력]
    F --> G[프로그램 종료]
    
    style A fill:#e1f5fe
    style G fill:#f3e5f5
    style E fill:#fff3e0
```

---

## 🏗️ Go 언어 프로젝트 구조

```mermaid
graph LR
    A[Go 프로젝트] --> B[package main]
    A --> C[package library]
    
    B --> D[실행 가능한 바이너리]
    C --> E[재사용 가능한 라이브러리]
    
    B --> F[main 함수 필수]
    C --> G[main 함수 불필요]
    
    style B fill:#c8e6c9
    style C fill:#ffcdd2
    style D fill:#dcedc8
    style E fill:#f8bbd9
```

---

## 🔄 컴파일 vs 실행 프로세스 비교

```mermaid
flowchart TD
    subgraph "go run (직접 실행)"
        A1[main.go] --> B1[메모리에서 컴파일]
        B1 --> C1[즉시 실행]
        C1 --> D1[출력: Hello world!]
    end
    
    subgraph "go build (빌드 후 실행)"
        A2[main.go] --> B2[컴파일]
        B2 --> C2[실행파일 생성]
        C2 --> D2[./main 실행]
        D2 --> E2[출력: Hello world!]
    end
    
    style A1 fill:#e3f2fd
    style A2 fill:#e3f2fd
    style D1 fill:#e8f5e8
    style E2 fill:#e8f5e8
```

---

## 🎯 Go 언어의 핵심 특징

### ✨ 문법적 특징
- **세미콜론 불필요**: 자동으로 삽입
- **강타입 언어**: 컴파일 시 타입 검사
- **가비지 컬렉션**: 자동 메모리 관리
- **동시성 지원**: 고루틴(Goroutine)으로 쉬운 병렬 처리

### 📦 패키지 시스템
```mermaid
mindmap
  root((Go 패키지))
    표준 라이브러리
      fmt (입출력)
      net/http (웹서버)
      os (운영체제)
      json (JSON 처리)
    사용자 정의
      package main (실행용)
      package utils (유틸리티)
    외부 패키지
      go mod (의존성 관리)
      github.com (저장소)
```

---

## 🚀 다음 단계 학습 로드맵

```mermaid
journey
    title Go 언어 학습 여정
    section 기초
      Hello World: 5: 완료
      변수와 상수: 4: 진행중
      데이터 타입: 3: 예정
    section 제어구조
      조건문 (if/switch): 3: 예정
      반복문 (for): 3: 예정
    section 함수와 구조체
      함수 정의: 2: 예정
      구조체: 2: 예정
    section 고급
      고루틴: 1: 예정
      채널: 1: 예정
```

---

## 💻 실습 예제

### 확장된 Hello World
```go
package main

import (
    "fmt"
    "time"
)

func main() {
    fmt.Println("Hello world!")
    fmt.Printf("현재 시간: %v\n", time.Now())
    
    name := "Go 언어"
    fmt.Printf("안녕하세요, %s!\n", name)
}
```

### 실행 결과
```
Hello world!
현재 시간: 2025-08-16 15:30:45 +0900 KST
안녕하세요, Go 언어!
```

---

## 📚 참고 자료

- [Go 공식 문서](https://golang.org/doc/)
- [Go Tour](https://tour.golang.org/)
- [Go by Example](https://gobyexample.com/)

---

> 🎉 **축하합니다!** Go 언어의 첫 걸음을 성공적으로 완료했습니다!
