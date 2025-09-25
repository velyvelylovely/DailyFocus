# “Daily Focus - 집중과 영감을 위한 데일리 보드"
> 현재 시간⏰, 오늘의 명언✨, 할 일 리스트📝, 그리고 날씨🌤️까지 한눈에 확인할 수 있는 바닐라 자바스크립트 프로젝트입니다.

---

## 🌐 Live Demo
👉 [Daily Focus](daily-focus.vercel.app)

---

## 🎥 Preview
![Daily Focus Demo](./ToDos_high.gif)

---

## 🛠️ Tech Stack
- **Language**: Vanilla JavaScript (ES2017+), HTML5, CSS3  
- **API**: [OpenWeatherMap](https://openweathermap.org/) (위치 기반 날씨 데이터)  
- **Deployment**: GitHub Pages / Vercel (서버리스 API 프록시)  
- **Storage**: LocalStorage (사용자 이름, To-do 리스트 저장)

---

## ✨ Features
- 👤 **로그인 & 인사말**: 이름 입력 후 저장 → 새로고침이나 다음 접속 때도 유지
- ⏰ **실시간 시계**: 1초 단위로 업데이트되는 현재 시각
- 💬 **오늘의 명언**: 새로고침 시 랜덤 명언 표시
- 📝 **To-do 리스트**: 추가 / 삭제 / 로컬 스토리지 영구 저장
- 🌄 **랜덤 배경 이미지**: Unsplash에서 가져온 배경 사진 랜덤 적용

---

## 📂 Project Structure
```bash
DailyFocus/
│── README.md
│── index.html
│── css/
│ └── style.css
│── js/
│ ├── background.js # 랜덤 배경 이미지
│ ├── clock.js # 실시간 시계
│ ├── greetings.js # 로그인/환영 메시지
│ ├── quotes.js # 랜덤 명언
│ ├── todo.js # To-do 리스트
│ └── weather.js # 날씨 표시
│── api/
│ └── weather.js # 서버리스 프록시(OpenWeatherMap)
│── img/ # 배경 이미지들 (Unsplash 출처)
│── ToDos.gif # 실행 화면 GIF
│── .env.local # 환경변수 (API 키)
│── .gitignore
```

---

## ⚡ Getting Started

### 1. Clone Repository
```bash
git clone https://github.com/velyvelylovely/DailyFocus.git
cd DailyFocus
```

### 2. Environment Variable
프로젝트 루트(README.md와 index.html이 있는 최상위 폴더)에 `.env.local` 파일을 새로 만들고, 아래 예시처럼 OpenWeatherMap에서 발급받은 개인 API 키를 등록하세요.

```bash
OWM_API_KEY=your_api_key_here
```

### 3. Run Locally
`index.html` 파일을 브라우저에서 직접 열어 실행하세요.

> open index.html

💡 Vercel에 배포할 경우, 프로젝트의 **Settings > Environment Variables**에서 `OWM_API_KEY`를 새로 추가하고 발급받은 OpenWeatherMap API 키 값을 입력하세요.