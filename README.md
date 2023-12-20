<h1 align="center">github-contributions</h1>

<p align="center">Quick and easy access to GitHub users' contributions.</p>

<div align="center">

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

```js
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

## Example

```js
// getContributions(githubUsername) Output
{
  '2022-12-18': 3,
  '2022-12-25': 9,
  ,,, // more dates
  '2023-12-02': 6,
  '2023-12-09': 7,
}
```
