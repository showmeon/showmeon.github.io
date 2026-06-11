# 夏鸣远的个人主页

纯静态学术个人主页（HTML / CSS / JavaScript），无需任何构建工具，可直接部署到 GitHub Pages。

页面风格参考学术圈最流行的两个模板：

- [Jon Barron 的主页](https://jonbarron.info/)（[源码](https://github.com/jonbarron/jonbarron.github.io)，3.5k+ stars）：单栏极简排版、左文右圆形头像、论文行左图右文、重点论文淡黄高亮
- [al-folio](https://github.com/alshedivat/al-folio)（15k+ stars）：带日期的 News 列表、深色模式

## 功能

- 中 / 英 双语切换（自动记忆选择）
- 浅色 / 深色 主题切换（默认跟随系统）
- 响应式布局，适配手机与桌面端

## 本地预览

```bash
cd xiamingyuan.github.io
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000
```

## 部署到 GitHub Pages

1. 在 GitHub 新建名为 `showmeon.github.io` 的公开仓库。
2. 将本目录推送到该仓库：

```bash
git init
git add .
git commit -m "Initial personal homepage"
git branch -M main
git remote add origin git@github.com:showmeon/showmeon.github.io.git
git push -u origin main
```

3. 仓库 Settings → Pages → Source 选择 `main` 分支（根目录），保存。
4. 稍等片刻即可通过 `https://showmeon.github.io` 访问。

## 文件说明

- `assets/img/photo.jpg`：主页头像
- `assets/img/timeemb.png`：TimeEmb 论文缩略图（NeurIPS 2025 海报）
- `assets/img/avatar.svg`：浏览器标签页图标（favicon）
- 中英文案集中在 `assets/js/main.js` 的 `I18N` 字典中，修改内容只需改这一处
