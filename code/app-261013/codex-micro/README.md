# codex-micro

Work Louder 硬件（Codex Micro）的渲染侧实现。16 个 chunk，原始 327,922 B。

- `codex-micro-settings-*.js`：设置页；
- `codex-micro-commands-*.js`：按键 / 命令映射；
- `codex-micro-layout-*.js`：布局；
- `codex-micro-slot-signals-*.js`：槽位信号；
- `codex-micro-onboarding-*` / `codex-micro-mini-game-*`：首次使用与小游戏。

主进程侧另有 `codexMicroServiceManager`（`main-C4DYk222.js`）。
