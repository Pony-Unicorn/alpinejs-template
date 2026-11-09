# Astro + AlpineJS Template

- 目录规划明明
  - 多个js/ts目录
  - Astro 组件：PascalCase（大驼峰）
  - JS/TS 模块：kebab-case（短横线）
  - Swift 应该优先采用 HTML 内联交互，复杂逻辑才抽离。全局入口只负责真正需要统一注册的逻辑，不必预先注册一堆组件。
  - 简单交互内联，复杂交互使用 Alpine.data。在entrypoint入口统一注册？
  - 全局状态
  - alpinejs 最佳实践：微组件、孤岛
- daisyui 和 alpinejs 经典页面
- 插件
  - astro-icon
  - https://astro.build/integrations/
- 封装 toast 组件 https://awesomealpine.com/docs/toasts/2-configuration/toast-options/
- 添加排版 https://github.com/tailwindlabs/tailwindcss-typography#readme
- 添加 wrangler 的配置