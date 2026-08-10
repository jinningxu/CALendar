# 加州自然日历 | California Natural Calendar

![加州自然日历](images/backgrounds/01-january.jpg)

一个双语（中文/English）月视图日历网站，展示加州特有的动植物。模仿 Apple Calendar 视觉风格设计。为加州自然历史课程结业项目而创建。

A bilingual (Chinese/English) month-view calendar website showcasing California's unique flora and fauna. Designed in Apple Calendar's visual style. Created as a final project for the California Natural History course.

---

## ✨ 功能特色 | Features

- 🗓️ **Apple Calendar 风格月视图** — 6×7 网格，星期日开始，日期数字左上角
- 🌄 **12 个月加州风光背景** — 从雷斯岬到约书亚树，每月不同风景
- 🦅 **47 种加州特有动植物** — 每月 5 种，包含鸟类、哺乳类、植物、爬行动物等
- 🏮 **25+ 中西节假日标注** — 中国农历节日 + 西方节日，日历上红点标示
- 🌐 **完整中英双语** — 一键切换，所有内容均含中英文
- 📱 **响应式设计** — 手机/平板/桌面完美适配
- ⌨️ **键盘无障碍** — 左右箭头切换月份，Tab 选中日期，Enter 打开详情
- 🎨 **零依赖** — 纯 HTML/CSS/JavaScript，双击 index.html 即可运行

---

## 🚀 如何使用 | How to Use

### 本地打开 | Open Locally

双击 `index.html` 文件即可在浏览器中打开。

Double-click `index.html` to open it in your browser.

### 操作指南 | Controls

| 操作 | 方式 |
|------|------|
| 切换月份 | 点击 ◀ ▶ 按钮，或键盘左右箭头 |
| 回到今天 | 点击「今天/Today」按钮 |
| 查看物种详情 | 点击带绿色圆点的日期 |
| 关闭详情 | 按 × 按钮、点击灰色背景、或按 Escape |
| 切换语言 | 点击右上角 中/EN 按钮 |

---

## 📂 项目结构 | Project Structure

```
california-natural-calendar/
├── index.html              # 主页面
├── css/
│   └── styles.css          # 所有样式
├── js/
│   ├── data.js             # 物种数据、节假日、月度配置
│   ├── calendar.js         # 日历渲染引擎
│   ├── modal.js            # 物种详情弹窗
│   └── app.js              # 初始化与事件绑定
├── images/
│   ├── backgrounds/        # 12 张月度风光背景图 (.jpg)
│   └── species/            # 物种照片 (.jpg)
└── README.md
```

---

## ✏️ 如何编辑 | How to Edit

### 添加/修改物种

编辑 `js/data.js`，在 `species` 对象中添加新条目：

```javascript
"my-new-species": {
  id: "my-new-species",
  category: "bird",           // bird | mammal | reptile | amphibian | fish | insect | plant | marine
  nameZh: "中文名",
  nameEn: "English Name",
  scientificName: "Scientific name",
  descriptionZh: "中文描述...",
  descriptionEn: "English description...",
  habitatZh: "...",
  habitatEn: "...",
  rangeInCAZh: "...",
  rangeInCAEn: "...",
  bestSeasonZh: "...",
  bestSeasonEn: "...",
  funFactZh: "...",
  funFactEn: "...",
  conservationStatus: "least-concern",
  photoPath: "images/species/my-new-species.jpg",
  photoCreditZh: "摄影: ...",
  photoCreditEn: "Photo: ..."
}
```

然后在对应月份的 `monthlyContent` 中添加 `{ speciesId: "my-new-species", day: 15 }`。

### 修改节假日

编辑 `js/data.js` 中的 `holidays` 数组。注意：农历节日日期每年不同，请手动更新。

### 更换图片

将月度背景图放入 `images/backgrounds/`（命名格式：`01-january.jpg`）。
将物种照片放入 `images/species/`（命名与 `photoPath` 字段一致）。

如果没有图片，页面会自动使用彩色渐变占位符，不影响功能。

---

## 🌐 部署到 GitHub Pages

1. 创建 [GitHub](https://github.com) 账号
2. 新建仓库（例如命名为 `california-natural-calendar`）
3. 点击「uploading an existing file」，将整个项目文件夹拖入上传区
4. 点击「Commit changes」
5. 进入 Settings → Pages
6. 在「Branch」下选择 `main`，文件夹选 `/ (root)`，点击 Save
7. 等待 1-2 分钟，网站上线：
   `https://你的用户名.github.io/california-natural-calendar/`

---

## 🖼️ 图片建议来源 | Suggested Photo Sources

- [Unsplash](https://unsplash.com) — 高质量免费照片
- [iNaturalist](https://www.inaturalist.org) — 物种观察记录照片
- [USFWS National Digital Library](https://digitalmedia.fws.gov) — 美国鱼类及野生动物管理局
- [NOAA Photo Library](https://www.photolib.noaa.gov) — 海洋和大气管理局

---

## 📝 许可 | License

本项目为教育用途创建。照片版权归原作者所有。

Created for educational purposes. Photo copyrights belong to their respective owners.

---

## 🙏 致谢 | Acknowledgments

- Apple Calendar 的设计风格为本项目提供了视觉灵感
- 加州丰富的自然历史为本项目提供了无尽的内容素材
- Apple Calendar's design language provided visual inspiration
- California's rich natural history provided endless content material
