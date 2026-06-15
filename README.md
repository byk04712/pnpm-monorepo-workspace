# pnpm-monorepo-workspace
A template design by pnpm + monorepo + framework template.

## 项目介绍
是一个基于 pnpm + monorepo + framework template 的项目模板。

## 架构设计
monorepo 架构设计，为了在一个 git 仓库中管理多个项目，每个子项目都是一个独立的模块，通过 pnpm 管理依赖。

## 步骤概览
1. 初始化项目 `npm init -y`
2. monorepo
    1. monorepo 配置 `pnpm-workspace.yaml`
    2. monorepo 项目的目录 apps, packages
3. 规范设计：
    1. js(eslint + prettier), style(stylelint)
    2. 提交规范(commitlint, husky + lint-staged + commit-msg)
    3. 拼写检查 spellcheck

### 技术点
    1. [typescript-eslint](https://typescript-eslint.io/)
    2. [spellcheck](https://cspell.org/)
    3. [commitlint](https://commitlint.js.org/)
    4. [husky](https://huskyjs.org/)
    5. [lint-staged](https://lint-staged.io/)
    6. [stylelint](https://stylelint.io/)
    7. [cz-git](https://cz-git.qbb.sh/zh/)
