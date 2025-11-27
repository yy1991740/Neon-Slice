# ⚔️ 光剑切切乐 (Neon Slice)

> **沉浸式 AI 体感切水果街机游戏**  
> *Immersive Motion Arcade Game powered by AI*

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Tech](https://img.shields.io/badge/Tech-React%20%7C%20MediaPipe%20%7C%20Tailwind-cyan)
![Status](https://img.shields.io/badge/Status-Playable-brightgreen)

**光剑切切乐** 是一款无需下载安装、直接在浏览器中运行的体感动作游戏。它利用 **Google MediaPipe** 先进的手势追踪技术，捕捉您的双手动作，将其转化为屏幕上的霓虹光剑。

挥动双手，切开飞溅的水果，体验刀光剑影的快感！

---

## 🎮 游戏玩法 (Gameplay)

1.  **启动游戏**：允许浏览器访问摄像头权限（数据仅在本地处理，不会上传）。
2.  **化身剑客**：站在摄像头前，伸出双手。您的食指指尖将化为致命的光剑。
3.  **切水果**：
    *   🍎 **水果**：切开增加 **+2秒** 时间。
    *   ⏰ **闹钟**：切开增加 **+8秒** 奖励时间。
    *   💣 **炸弹**：**千万别切！** 切中扣除 **-5秒** 惩罚并重置连击。
4.  **连击系统**：连续切中水果可触发 Combo，获得更高分数。
5.  **生存挑战**：这是一个时间挑战游戏，时间耗尽则游戏结束。

## ✨ 特性 (Features)

*   **🖐️ 实时 AI 追踪**：基于 MediaPipe Hands，毫秒级响应，无需特殊硬件。
*   **⚔️ 炫酷视觉效果**：动态光剑拖尾、粒子爆炸特效、霓虹风格 UI。
*   **🔊 动态音效**：使用 Web Audio API 生成的合成音效（切击声、爆炸声、奖励音），无需加载外部音频文件。
*   **🚀 无需构建**：采用 Modern ES Modules + Babel 浏览器端编译方案，无需 Webpack/Vite 打包，源码即由浏览器直接运行。
*   **📱 响应式设计**：适配桌面及部分高性能移动设备浏览器。

## 🛠️ 技术栈 (Tech Stack)

*   **Core**: React 18 (通过 esm.sh 引入)
*   **AI Vision**: Google MediaPipe Hands
*   **Styling**: Tailwind CSS
*   **Graphics**: HTML5 Canvas API
*   **Audio**: Web Audio API (Procedural Sound Generation)
*   **Icons**: Lucide React

---

## 🚀 部署指南 (Deployment)

本项目设计为**纯静态站点**，特别适合部署在 **GitHub Pages**。

### 方法：GitHub Pages (推荐)

1.  **创建仓库**：在 GitHub 上创建一个新仓库（例如 `neon-slice`）。
2.  **上传文件**：将本项目的所有文件（`index.html`, `index.tsx`, `App.tsx`, `components/`, `types.ts` 等）直接上传到仓库根目录。
3.  **开启 Pages**：
    *   进入仓库 **Settings (设置)** -> **Pages**。
    *   在 **Build and deployment** 下的 **Source** 选择 `Deploy from a branch`。
    *   在 **Branch** 选项中选择 `main` (或 `master`) 分支，文件夹选择 `/ (root)`。
    *   点击 **Save**。
4.  **开始游戏**：等待几分钟构建完成后，访问 GitHub 提供的链接（例如 `https://yourname.github.io/neon-slice/`）即可游玩。

### 本地运行 (Local Development)

由于浏览器安全策略（CORS），您不能直接双击打开 `index.html`。您需要一个本地静态服务器。

**使用 Python:**
```bash
# 在项目目录下运行
python -m http.server 8000
# 然后访问 http://localhost:8000
```

**使用 Node.js (http-server):**
```bash
npx http-server .
```

**使用 VS Code:**
安装 "Live Server" 插件，右键点击 `index.html` 选择 "Open with Live Server"。

---

## ⚠️ 注意事项

*   **摄像头权限**：请确保在浏览器弹窗中允许摄像头访问。如果由于拒绝权限导致无法运行，请点击地址栏的锁图标重置权限并刷新页面。
*   **环境光线**：确保游玩环境光线充足，以便 AI 准确识别手部动作。
*   **浏览器兼容性**：推荐使用最新版本的 Chrome, Edge 或 Firefox 以获得最佳性能 (WebGL 支持)。

---

## 📄 许可证 (License)

MIT License. 自由使用和修改。
