# Swift: Astro + AlpineJS Template

## 🚀 Quick Start

- Clone project

```bash
pnpm dlx degit Pony-Unicorn/alpinejs-template my-project

cd my-project

pnpm i
```

- Development

```bash
pnpm dev
```

## 开发规范

> 核心原则：简单的保持简单，复杂的合理拆分。Astro 负责页面和内容，Alpine.js 负责交互。

1. Alpine.js 交互

- 简单交互：直接使用 HTML 内联 Alpine 指令。
- 复杂交互：使用 Alpine.data() 抽离逻辑。
- 公用工具等使用 Alpine.magic 注册。

2. 全局状态

- 局部状态使用 x-data。
- 全局共享状态使用 Alpine.store()。
- Alpine.data() 和 Alpine.store() 在 src/alpine.ts 入口统一注册。

3. 命名规范

- Astro 组件：PascalCase，如 ContactForm.astro。
- JS/TS 模块：kebab-case，如 contact-form.ts。

4. 代码组织

- components/、layouts/、pages/ 存放 Astro 文件。
- 所有 TypeScript 文件统一放在 scripts/ 目录下。
- scripts/components/ 存放组件配套的交互逻辑，按组件名称命名。
- scripts/pages/ 存放页面专属交互逻辑。
- 简单组件不必创建配套 TS 文件。
- 避免过度抽象，按实际复杂度拆分代码。

## 目录结构

src/
├── components/ # Astro 组件
│ ├── Navbar.astro
│ ├── Footer.astro
│ ├── Toaster.astro
│ └── ContactForm.astro
│
├── layouts/ # Astro 布局
│ └── Layout.astro
│
├── pages/ # 页面
│ ├── index.astro
│ └── about.astro
│
├── scripts/ # 所有 TypeScript 代码
│ ├── components/ # 组件交互逻辑
│ │ ├── toaster.ts
│ │ └── contact-form.ts
│ │
│ ├── pages/ # 页面交互逻辑
│ │ └── dashboard.ts
│ │
│ ├── lib/ # 通用工具模块
│ │ ├── api.ts
│ │ ├── utils.ts
│ │ ├── format.ts
│ │ └── storage.ts
│ │
│ ├── i18n/ # 国际化
│ │ ├── config.ts
│ │ └── utils.ts
│ │
│ ├── alpine.ts # Alpine 注册入口
│ └── constants.ts # 全局常量
│
├── images/
│ ├── logo.svg
│ └── hero.webp
│
├── icons/
│
└── app.css

## 🌟 推荐库

- 图标使用 astro-icon 管理，项目中采用[ion](https://icon-sets.iconify.design/ion)
- 排版 https://github.com/tailwindlabs/tailwindcss-typography

## todo list

- 添加 ai 工具
  - 书写 AGENTS.md 文件
  - 添加对应的 skill 和 mcp：astro、alpinejs、daisyui
