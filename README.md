# 刀刀博客（Hexo）项目说明

本仓库是你的 Hexo 博客源码，支持本地预览、生成静态页面，并通过 SSH 将生成的站点部署到 GitHub Pages。

- 源码仓库（main 分支）：用于维护博客的源文件与配置
- Pages 仓库（master 分支）：`chnhqz/chnhqz.github.io`，用于承载生成后的静态站点
- 站点访问地址：https://chnhqz.github.io

## 技术栈
- Hexo 7.x（静态博客生成器）
- 主题：ShokaX（`theme: shokax`）
- 部署插件：`hexo-deployer-git`
- Markdown 渲染：`hexo-renderer-multi-next-markdown-it` 等
- 数学公式：MathJax（已开启）

关键配置文件：
- <mcfile name="_config.yml" path="/Users/huangqiuzhao/blog/_config.yml"></mcfile>（Hexo 主配置）
- <mcfile name="package.json" path="/Users/huangqiuzhao/blog/package.json"></mcfile>（依赖与 NPM 脚本）
- <mcfile name=".gitignore" path="/Users/huangqiuzhao/blog/.gitignore"></mcfile>（忽略规则）

## 环境要求
- Node.js ≥ 16（建议安装最新 LTS）
- npm（或 pnpm/yarn，本文示例使用 npm）
- 已在本机配置好 SSH，并在 GitHub 账户添加公钥（用于无密码推送与部署）

验证 SSH：
- `ssh -T git@github.com`（看到 “Hi <username>! You've successfully authenticated” 即成功）

## 项目目录结构（关键部分）
- `source/_posts/`：博客文章目录（Markdown）
- `source/_data/`：数据、静态资源（可选）
- `themes/`：主题目录（已包含 shokax_p、yilia、yilia-plus，可按需选择）
- `public/`：Hexo 生成的静态网站（部署目标，已被忽略）

## 快速开始
1. 安装依赖（首次或依赖变更时）
   - `npm install`
2. 本地预览（开发模式）
   - `npm run server`
   - 访问：`http://localhost:4000`
3. 清理与生成（构建）
   - `npm run clean`
   - `npm run build`

## 写作指南（如何写博客文章）
Hexo 已在 <mcfile name="_config.yml" path="/Users/huangqiuzhao/blog/_config.yml"></mcfile> 中启用了 `post_asset_folder: true`，推荐使用“文章同名资源目录”管理图片与附件。

1. 新建文章
   - 命令方式：`npx hexo new post "文章标题"`
   - 或手动在 `source/_posts/` 里新增 Markdown 文件，如：`source/_posts/我的第一篇博客.md`
   - 若启用 `post_asset_folder`，Hexo 会在同目录生成 `我的第一篇博客/` 作为资源目录

2. Front-matter 示例（置于 Markdown 顶部）
   ```yaml
   ---
   title: 我的第一篇博客
   date: 2025-10-03 10:00:00
   categories:
     - 学习
     - 笔记
   tags:
     - Hexo
     - 教程
   description: 这是一篇示例文章
   top: false
   ---
   ```

3. 插入图片与资源
   - 将图片放进同名资源目录：`source/_posts/我的第一篇博客/cover.png`
   - Markdown 引用（相对路径）：
     ```md
     ![封面](cover.png)
     ```
   - 借助 `hexo-asset-img` 插件，Hexo 会正确处理相对路径资源

4. 分类与标签
   - `categories` 与 `tags` 在 Front-matter 中定义
   - 分类与标签页的生成依赖于主题与插件（已包含标准生成器）

5. 草稿、发布、置顶
   - 新建草稿：`npx hexo new draft "草稿标题"`（位于 `source/_drafts/`）
   - 发布草稿：将文件移动到 `source/_posts/` 或使用 `npx hexo publish 草稿标题`
   - 置顶文章：Front-matter 中设置 `top: true` 或在主题支持的字段中设置置顶

6. 代码块与高亮
   - 使用标准 Markdown 三引号代码块：
     ```md
     ```cpp
     // 你的代码
     ```
     ```
   - 代码高亮由 Hexo 与渲染器提供，已在 <mcfile name="_config.yml" path="/Users/huangqiuzhao/blog/_config.yml"></mcfile> 中开启

7. 数学公式（MathJax）
   - 行内：`$a^2 + b^2 = c^2$`
   - 块级：
     ```md
     $$
     \int_0^1 x^2\,dx = \frac{1}{3}
     $$
     ```

## 主题与定制
- 当前主题：在 <mcfile name="_config.yml" path="/Users/huangqiuzhao/blog/_config.yml"></mcfile> 中 `theme: shokax`
- 主题配置：`themes/shokax_p/_config.yml` 或主题本体的 README（若切换到 yilia / yilia-plus，更新 `theme` 并参考各主题的 `_config.yml`）
- 常见定制项：菜单、侧边栏、页脚、评论系统、搜索等（根据主题文档与本仓依赖）

试用热门主题（例如 Matery）
- 试用 matery（一键拉取并切换）：`npm run theme:matery`
- 预览：`npm run clean && npm run server` → 打开 `http://localhost:4000`
- 部署：`npm run publish` 或 `npm run deploy`
- 回滚到原主题：编辑 <mcfile name="_config.yml" path="/Users/huangqiuzhao/blog/_config.yml"></mcfile> 的 `theme` 改回 `shokax` 或你想要的主题名

## 部署（如何推送）
部署目标与方式已经在 <mcfile name="_config.yml" path="/Users/huangqiuzhao/blog/_config.yml"></mcfile> 中配置：
```yaml
deploy:
  type: git
  repo: git@github.com:chnhqz/chnhqz.github.io.git
  branch: master
```
这意味着运行 `hexo deploy`（或 `npm run deploy` / `npx hexo d`）会将 `public/` 的静态站点推送到 Pages 仓库的 `master` 分支。

步骤：
1. 生成静态站点
   - `npm run clean && npm run build`
2. 部署到 GitHub Pages（SSH）
   - `npm run deploy`
   - 或 `npx hexo d`
3. 页面访问
   - https://chnhqz.github.io（通常几秒至几分钟内生效）

如果部署失败（如 publickey 拒绝）：
- 确认远程地址为 SSH：`git@github.com:chnhqz/chnhqz.github.io.git`
- 本机 SSH 密钥已添加到 GitHub（Settings → SSH and GPG keys）
- 测试：`ssh -T git@github.com`

## 源码推送（保存你的文章与配置）
- 源码仓库（main 分支）建议在每次写作/配置调整后提交并推送：
  ```bash
  git add -A
  git commit -m "feat(post): 新增文章 xxx"
  git push origin main
  ```
- Pages 仓库的变更由 `hexo d` 生成并推送，不需要手动修改 Pages 仓库的源码

## 常用命令速查
- 新建文章：`npx hexo new post "标题"`
- 新建页面：`npx hexo new page "about"`
- 清理构建：`npm run clean`（`hexo clean`）
- 构建生成：`npm run build`（`hexo generate`）
- 本地预览：`npm run server`（`hexo server`，默认 `http://localhost:4000`）
- 部署：`npm run deploy`（`hexo deploy` → 推送到 Pages 仓库）

## 自动化脚本（一键写作与发布）
- 新建文章：`npm run new:post -- "文章标题"`
- 新建草稿：`npm run new:draft -- "草稿标题"`
- 发布草稿：`npm run publish:draft -- "草稿标题"`
- 一键发布当前改动并部署：`npm run publish`
  - 将依次执行：`hexo clean && hexo g && hexo d`（部署到 chnhqz.github.io 的 master 分支），随后 `git add -A`，如有源码变更则提交（commit message：`chore(blog): publish`），最后 `git push origin main`

## `.gitignore` 已配置
<mcfile name=".gitignore" path="/Users/huangqiuzhao/blog/.gitignore"></mcfile> 已忽略：`public/`、`.deploy_git/`、`node_modules/`、日志、缓存、IDE 目录等，避免构建产物与依赖入库。

## 注意事项与最佳实践
- 写作时使用 `post_asset_folder` 管理图片，保持文章与资源同路径，迁移更方便
- 不修改 `public/` 与 `.deploy_git/`；这些目录由 Hexo 自动生成与管理
- 部署前始终 `clean` 与 `build`，避免旧内容残留
- 遇到部署问题优先检查 SSH 配置与网络

## FAQ
- Q：为什么我运行 `hexo d` 就能把页面更新到 GitHub？
  - A：`hexo-deployer-git` 会将 `public/` 的生成结果提交并推送到 Pages 仓库的 `master` 分支（已配置为 SSH）。
- Q：我在本地新增了文章，但网页访问没有更新？
  - A：需要执行 `hexo clean && hexo g && hexo d`，然后等待 GitHub Pages 生效；同时确认你访问的是 `https://chnhqz.github.io`。
- Q：我想换主题？
  - A：编辑 <mcfile name="_config.yml" path="/Users/huangqiuzhao/blog/_config.yml"></mcfile> 的 `theme`，换成 `yilia` 或 `yilia-plus`，然后根据对应主题的 `_config.yml` 调整配置，重建并部署。

---
如需我进一步自动化部署（比如在 push 后自动触发 `hexo d`，或为写作提供脚本化模板），告诉我你希望的工作流，我可以为你增加脚本与说明。