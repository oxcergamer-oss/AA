# 项目交接文档（HANDOFF）

> 给在新机器上继续本项目的 Codex：请完整阅读本文档后再开始工作。

## 项目是什么
游戏化运营活动 UI 设计项目（原主题《失落星球：寻找能量晶》，页面主题「星球修复舱 / 寻找能量晶」）。
共三个页面：活动首页、邀请好友页（星际协作站）、任务中心底部浮层（每日能量任务）。

## 画布与输出规则（强制）
- 所有移动端效果图固定 **375×812px**
- 交付 PNG 为主，JPG 备用
- 规则详见 design-workflow/deliverables/visual-output-rules.md

## 角色锁定
- 吉祥物为「粉色飞碟生物」：白色绒毛身体、棕色大眼、粉色绒球触角、薄荷闪电徽章、青色侧灯
- 源文件：tmp/imagegen/mascot.png（已入库 repo 根 tmp/）
- 任何生成任务不得改变该角色造型/比例/颜色/五官

## 当前状态（截至交接）
| 页面 | 定稿 | 文件 |
|---|---|---|
| 活动首页 | V16 已确认 | current/home-final-v16.png |
| 邀请好友页 | V9 已确认 | current/invite-final-v9.png |
| 任务中心浮层 | V1 已出，未逐条评审 | current/tasksheet-final-v1.png |
| PSD 还原包 | 已交付脚本+切片 | psd-build-kit/（内含 build-tasksheet-psd.jsx） |

## 视觉风格（V16 暗色基准，已锁定）
- 暗调极光夜景：深靛蓝天空 + 青色极光带 + 两侧暗树剪影 + 草地发光圆台
- 单一粉桃色系点缀；背景降噪虚化，永远让位给文字和卡片
- 组件 token 见 design-workflow/deliverables/design-tokens-duyin-ref.md（抖音找大鹅图层3基准）
- 首页规范细节见 design-workflow/deliverables/visual-output-rules.md

## 交互结构（已定稿）
- 交互稿：design-workflow/deliverables/interaction-prototype-v1.md
- 邀请页层级：进度(2/4圆点)+CTA 第一层级；收益卡+状态列表第二层级（统一大卡）
- 任务浮层：抖音找大鹅任务面板结构（参考 references/douyin-goose/1-图层 3.png）

## 图像生成环境（新机器必读）
- 生成走 OpenAI images API，模型 gpt-image-2
- 本机使用中转：OPENAI_BASE_URL=https://ft-app.wxhand.com/cc（官方 API 不认本 key）
- 关键路径：/cc/v1/images/generations（纯文生图）与 /cc/v1/images/edits（参考图编辑，可传 mascot 锁角色）
- 网络需走本机代理（127.0.0.1:10808）；git 已配置同款代理
- 提示词模板与历史：tmp/imagegen/*.log 有全部成功案例可复用

## 生成方法论（已验证）
- 锁角色：把 mascot.png 作为 image[] 输入 + 提示词写「mascot locked identical」
- 局部重绘：只传当前稿 + 只描述要改的点，明确「其余像素不变」
- 多参考融合：分图给角色参照/风格参照，并声明哪个是 locked、哪个只取风格
- 失败重试：502/超时等 1-2 分钟重试；大图编辑建议 quality high + 1024x1536

## 下一步（新机器任务）
1. 任务中心浮层按用户反馈逐条打磨（当前 V1 未评审）
2. 主按钮/图标等组件按 token 统一后回写首页（如需）
3. 结算/中奖弹窗（尚未设计）
4. H5 切图标注（还原师职责，模板见 design-workflow/templates/delivery-manifest.md）

## 目录导航
- current/          当前定稿（不要放过程稿）
- mockups/          历史迭代（V1~V16 全过程，仅供追溯）
- design-workflow/  智能体定义 + 规范 + 交互稿
- references/       风格参考图（快手火崽崽 / 抖音找大鹅）
- psd-build-kit/    PSD 一键还原脚本（Photoshop 运行 jsx）
- assets-task-sheet/ 浮层独立素材
- tmp/imagegen/     生成日志 + mascot 源文件 + ag-psd 库
