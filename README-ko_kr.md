<div align="center">

<h1>🌱 github-contributions</h1>
<p >GitHub 사용자의 기여도를 빠르고 쉽게 확인할 수 있습니다.</p>

[![npm version](https://img.shields.io/npm/v/@gwansikk/github-contributions?logo=npm)](https://www.npmjs.com/package/@gwansikk/github-contributions)
[![npm downloads](https://img.shields.io/npm/dt/@gwansikk/github-contributions?logo=npm)](https://www.npmjs.com/package/@gwansikk/github-contributions)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@gwansikk/github-contributions?logo=npm)](https://www.npmjs.com/package/@gwansikk/github-contributions)

[🇺🇸 English](./README.md)
&nbsp;&nbsp;•&nbsp;&nbsp;
[🇰🇷 한국어](./README-ko_kr.md)

</div>

# Concepts

## Installation

- NPM

```bash
npm i @gwansikk/github-contributions
```

- Yarn

```bash
yarn add @gwansikk/github-contributions
```

## Usage

> [!IMPORTANT]\
> 현재 버전은 아직 개발 중인 불안정한 버전이므로 코드에 자주 변경이 있을 수 있습니다.

```javascript
import { getContributions } from "@gwansikk/github-contributions";

const username = "gwansikk";

getContributions(username)
  .then((contributions) => {
    console.log(`GitHub Contributions for ${username}:`, contributions);
  })
  .catch((error) => {
    console.error("Error fetching contributions:", error);
  });
```

```javascript
// getContributions(githubUsername) Output
{
  '2022-12-18': 3,
  '2022-12-25': 9,
  ,,, // more dates
  '2023-12-02': 6,
  '2023-12-09': 7,
}
```

## Support

| 타입       | 상태 | 버전     |
| ---------- | ---- | -------- |
| Browsers   | ✅   | <= 0.1.2 |
| ES Modules | ✅   | <= 0.1.2 |
| CommonJS   | ✅   | <= 0.1.2 |

## Contribute

해당 프로젝트에 기여하고 싶다면 아래 문서를 참고해주세요.  
[CONTRIBUTING.md](./CONTRIBUTING.md)
