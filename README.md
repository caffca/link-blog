# linkk 个人知识库 (link-blog)

linkk 的个人知识库，分享电子技术相关文章、项目资料和学习资源。

## 🌐 线上地址

**https://caffca.github.io/link-blog/**

## 🚀 技术栈

- **React 18 + Vite 5** — 组件化前端
- **Tailwind CSS 3** — 样式框架
- **React Router** — 前端路由
- **GitHub Actions** — 自动构建部署到 GitHub Pages

## 📁 项目结构

```
├── src/
│   ├── components/        # 通用组件（导航、页脚、卡片）
│   ├── data/              # 数据文件（文章、资源、站点信息）
│   └── pages/             # 页面（首页、文章、资源、关于、联系）
├── public/
│   ├── files/             # 可下载资源（软件、文档、教材）
│   └── 404.html           # SPA 路由回退
└── .github/workflows/     # 自动部署工作流
```

## 🖥️ 本地开发

```bash
npm install       # 安装依赖
npm run dev       # 本地开发预览
npm run build     # 生产构建
npm run preview   # 预览构建产物
```

## 📤 部署

推送到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages：
```bash
git add -A
git commit -m "更新内容"
git push origin main
```

## 📄 页面

- **首页** — Hero + 快速入口 + 热门资料
- **技术文章** — 嵌入式/硬件设计/通信技术等文章，支持分类筛选和搜索
- **资料下载** — 工具软件、学习资料等资源，直接下载
- **关于** — 个人简介、使命愿景
- **联系方式** — 联系渠道

## ✍️ 添加文章/资源

编辑 `src/data/` 下的数据文件即可：

- **文章**：`src/data/articles.js`
- **资源**：`src/data/resources.js`（新增资源文件放到 `public/files/` 对应目录）
- **站点信息**：`src/data/association.js`

## 📜 许可

个人知识存档与分享用途。
