# Level Devil

一个基于网页的横版闯关游戏项目，提供两个可玩的版本选择。

## 项目简介

Level Devil 是一款恶魔主题的横版关卡挑战游戏。本项目为游戏的编译后 Web 版本，包含一个版本选择主页和两个不同的游戏版本：经典原版与增强更新版。

## 项目结构

```
Level Devil/
├── index.html          # 版本选择主页
├── favicon.ico         # 网站图标
├── 1.1/                # 经典原版 (v1.1)
│   ├── index.html      # 游戏入口
│   ├── Level Devil.js  # Lime/OpenFL 引擎构建的主程序
│   ├── poki-sdk.js     # Poki 平台 SDK
│   ├── assets/sfx/     # 游戏音效文件
│   └── lib/            # 引擎资源包
└── 1.1.2/              # 增强更新版 (v1.1.2)
    ├── index.html      # 游戏入口
    ├── LevelDevil.wasm # WASM 性能优化核心
    ├── LevelDevil_wasm.js
    ├── dmloader.js     # Defold 引擎加载器
    ├── main.js
    ├── sdk.js          # Poki SDK
    └── archive/        # 游戏资源包
```

## 版本说明

| 版本 | 引擎 | 特点 |
|------|------|------|
| 1.1 | Lime / OpenFL | 经典原版体验，JavaScript 驱动 |
| 1.1.2 | Defold (WASM) | 增强更新版，WebAssembly 性能优化，更流畅的游戏体验 |

## 快速开始

1. 直接在浏览器中打开项目根目录下的 `index.html`
2. 在主页中选择想要体验的版本（经典版或增强版）
3. 点击「开始游戏」即可进入对应版本

> 注意：由于浏览器的安全策略，建议通过本地 Web 服务器运行本项目，而不是直接双击打开 HTML 文件。

## 本地服务器运行方式

如果你已经安装了 Python，可以在项目目录下运行：

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

然后在浏览器中访问 `http://localhost:8000`。

## 技术栈

- **1.1 版本**: Lime / OpenFL 框架，编译为 HTML5/JavaScript
- **1.1.2 版本**: Defold 引擎，编译为 HTML5/WebAssembly
- **主页**: 原生 HTML5 + CSS3，无外部依赖

## 浏览器兼容性

- 支持所有现代浏览器（Chrome、Firefox、Edge、Safari）
- 需要启用 JavaScript
- 1.1.2 版本需要浏览器支持 WebAssembly
- 支持移动端浏览器访问

## 版权声明

"Level Devil" 是一款受版权保护的游戏。本项目仅用于托管编译后的 Web 演示版本，不声明对游戏或其源代码的所有权。所有权利均归原始开发者和发行商所有。

本项目不包含任何广告或盈利行为。如有侵权问题，请联系后立即删除。

## 许可证

本项目中的主页代码（根目录 `index.html`）采用 GNU General Public License v3.0 许可证开源。游戏本体文件遵循其原始版权方的许可条款。
