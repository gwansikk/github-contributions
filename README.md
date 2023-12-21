<div align="center">

<h1>github-contributions</h1>

<p >Quick and easy access to GitHub users' contributions.</p>

[![npm version](https://img.shields.io/npm/v/@gwansikk/github-contributions?logo=npm)](https://www.npmjs.com/package/@gwansikk/github-contributions)
[![npm downloads](https://img.shields.io/npm/dt/@gwansikk/github-contributions?logo=npm)](https://www.npmjs.com/package/@gwansikk/github-contributions)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@gwansikk/github-contributions?logo=npm)](https://www.npmjs.com/package/@gwansikk/github-contributions)

</div>

<br>

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
> The current version is an unstable version, still under development, so there may be frequent changes to the code.

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

| Type       | State | Version  |
| ---------- | ----- | -------- |
| Browsers   | ✅    | >= 0.1.2 |
| ES Modules | ✅    | >= 0.1.2 |
| CommonJS   | ✅    | >= 0.1.2 |

## Contribute

Information describing how to contribute can be found in the file CONTRIBUTING.md
