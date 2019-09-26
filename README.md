# umi-plugin-statistic

[![NPM version](https://img.shields.io/npm/v/umi-plugin-statistic.svg?style=flat)](https://npmjs.org/package/umi-plugin-statistic)
[![NPM downloads](http://img.shields.io/npm/dm/umi-plugin-statistic.svg?style=flat)](https://npmjs.org/package/umi-plugin-statistic)

Add statistical scripts to HTML templates

## Features

- ✔︎ 历史路由监听
- ✔︎ 兼容多平台

## Usage

Configure in `.umirc.js`,

```js
export default {
  plugins: [['umi-plugin-statistic', options]]
};
```

## Options

- token: 各平台用于统计初始化的项目 token 或 id
- platform: `BAIDU` | `GrowingIO` | `Google`

## LICENSE

MIT
