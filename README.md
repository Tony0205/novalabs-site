# Nova Labs — Company Site

Nova Labs 회사 소개 정적 사이트입니다. 수면을 이해하는 **Somni**와 영어 단어를 오래 기억하게 돕는 **또보카(TtoVoca)**를 소개합니다.

## 구성

순수 정적 사이트 — 빌드 도구가 필요 없습니다.

```
index.html      # 페이지
styles.css      # 스타일 (Somni 디자인 시스템 토큰 기반)
main.js         # 스크롤 인터랙션
assets/         # 로고 SVG (Nova Labs / Somni / TtoVoca)
```

## 로컬에서 보기

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## 배포

`main` 브랜치에 푸시하면 GitHub Pages가 자동으로 서빙합니다.

## 브랜드

- 컬러/타이포는 Somni 디자인 시스템(blue `#3182f6`, violet `#6d5ce0`, night 다크 톤)에서 가져왔습니다.
- 또보카 액센트: `#1f6feb`.

© Nova Labs.
