# Astro + AlpineJS Template

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

2. 全局状态

- 局部状态使用 x-data。
- 全局共享状态使用 Alpine.store()。
- Alpine.data() 和 Alpine.store() 在 src/alpine.ts 入口统一注册。

3. 命名规范

- Astro 组件：PascalCase，如 ContactForm.astro。
- JS/TS 模块：kebab-case，如 contact-form.ts。

4. 代码组织

- 组件及其配套 TS 文件放在 components/ 下，同级存放。
- 简单组件不必创建配套 TS 文件。
- 通用工具函数、常量放在 lib/。
- 避免过度抽象，按实际复杂度拆分代码。

## 目录结构

src/
├── components/
│ ├── Navbar.astro
│ ├── Footer.astro
│ ├── Modal.astro
│ ├── Toast.astro
│ ├── toast.ts
│ ├── ContactForm.astro
│ └── contact-form.ts
│
├── images/
│
├── layouts/
│ └── Layout.astro
│
├── pages/
│ ├── index.astro
│ ├── about.astro
│ └── contact.astro
│
├── lib/
│ ├── constants.ts
│ ├── utils.ts
│ ├── format.ts
│ ├── storage.ts
│ └── api.ts
│
├── alpine.ts
└── app.css

## 🌟 推荐库

- 图标使用 astro-icon 管理，项目中采用[ion](https://icon-sets.iconify.design/ion)
- 排版 https://github.com/tailwindlabs/tailwindcss-typography

## todo list

- 封装 toast 组件 https://awesomealpine.com/docs/toasts/2-configuration/toast-options/
- 完善框架页面，添加 daisyui 和 alpinejs 经典页面和组件
- 添加 wrangler 的配置
- 书写 AGENTS.md 文件
- 封装一个通用的 alpinejs 的组件，包含数据状态：加载中、成功、失败，真实数据
