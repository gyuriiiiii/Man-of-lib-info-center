# 대학도서관 공간변화 동향 및 인식 연구

React와 CSS를 활용한 인터랙티브 웹 애플리케이션입니다.

## 프로젝트 구조

```
lib-manage-class/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Hero.jsx / Hero.css
│   │   ├── ResearchBackground.jsx / ResearchBackground.css
│   │   ├── Importance.jsx / Importance.css
│   │   ├── Statistics.jsx / Statistics.css
│   │   ├── KeyFeatures.jsx / KeyFeatures.css
│   │   ├── Survey.jsx / Survey.css
│   │   ├── Effects.jsx / Effects.css
│   │   ├── CauseAnalysis.jsx / CauseAnalysis.css
│   │   ├── Direction.jsx / Direction.css
│   │   ├── Conclusion.jsx / Conclusion.css
│   │   └── Footer.jsx / Footer.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

## 기술 스택

- **React 18.3.1** - UI 컴포넌트 라이브러리
- **Vite 5.4.11** - 빠른 빌드 도구
- **CSS3** - 반응형 스타일링 및 애니메이션

## 주요 기능

### 🎨 인터랙티브 UI
- 스크롤 애니메이션 (Intersection Observer API)
- 숫자 카운터 애니메이션
- 원형 진행률 차트 (SVG 애니메이션)
- 호버 효과 및 트랜지션

### 📱 반응형 디자인
- 데스크톱 (1024px+)
- 태블릿 (768px-1024px)
- 모바일 (480px-768px)
- 소형 모바일 (<480px)

### 🎯 구현된 섹션
1. **Hero** - 메인 타이틀 및 CTA 버튼
2. **ResearchBackground** - 연구 배경 및 목적 (3개 카드)
3. **Importance** - 공간의 중요성 (4가지 역할)
4. **Statistics** - 통계 분석 (애니메이션 카운터)
5. **KeyFeatures** - 주요 특징 (5개 항목)
6. **Survey** - 인식조사 결과 (원형 차트)
7. **Effects** - 효과와 문제점 (양면 비교)
8. **CauseAnalysis** - 원인 분석 (피라미드 구조)
9. **Direction** - 방향성 (3단계 플로우)
10. **Conclusion** - 결론 및 제언
11. **Footer** - 푸터

## 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

브라우저가 자동으로 열리며 `http://localhost:3000`에서 확인할 수 있습니다.

### 3. 프로덕션 빌드
```bash
npm run build
```

### 4. 빌드 미리보기
```bash
npm run preview
```

## 디자인 특징

### 색상 팔레트
- Primary Green: `#2d5f3f`
- Light Green: `#3d7a52`
- Dark Green: `#1d4029`
- Accent Green: `#4a8f63`
- Background Light: `#f8f9f5`

### 애니메이션
- Fade-in 효과 (스크롤 시)
- 숫자 카운터 애니메이션
- SVG 원형 진행률 애니메이션
- 호버 트랜지션
- 피라미드 레벨 애니메이션

## 브라우저 지원

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)

## 성능 최적화

- Vite의 빠른 HMR (Hot Module Replacement)
- Intersection Observer를 통한 효율적인 애니메이션 트리거
- CSS 트랜지션을 활용한 부드러운 애니메이션
- 반응형 이미지 및 그리드 레이아웃

## 라이센스

MIT
# Man-of-lib-info-center
