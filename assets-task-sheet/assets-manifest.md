# 任务中心浮层 UI 元素拆分清单（还原师）
源图：tasksheet-375x812-v1.png ｜ 375×812 ｜ 2026-09-23

## 一、层级结构
L0 背景层：首页暗调极光夜景（压暗40%，模糊）＝ assets/background/bg-home-dim.png
L1 遮罩层：黑色40%遮罩 ＝ assets/background/overlay-dim.png（可用黑色纯色+透明度实现）
L2 浮层容器：底部圆角28px 粉桃渐变面板 ＝ assets/sheet/sheet-panel.png
L3 内容元素：见下方清单

## 二、元素拆分
### sheet（浮层容器）
- sheet-panel.png ｜ 375×~470 ｜ 顶部圆角28，渐变 #FFC9D6→#FFF3F0，含顶部拖拽指示条区域
### header（浮层头部）
- sheet-title.png ｜ 文字「做任务得能量！」｜ 深棕 #4A2A2A，粗圆体 20px
- sheet-subtitle.png ｜ 文字「今日剩余能量：86」｜ 「86」粉色 #FF5A7E 加粗
- mascot-peek.png ｜ 角色探出（透明底）｜ 140×140，右侧，locked造型
### task rows（任务行 ×4，样式一致）
每行组成：icon(44×44) + 文字组(标题14px深棕/副标12px灰) + 按钮(76×32胶囊)
- task-icon-1-calendar.png ｜ 日历打勾，粉红渐变哑光
- task-icon-2-video.png ｜ 播放按钮，桃粉渐变哑光
- task-icon-3-invite.png ｜ 双人+加号，粉紫渐变哑光
- task-icon-4-crystal.png ｜ 菱形能量晶，紫粉渐变哑光
- row-title-1.png 「每日签到领能量」 / row-sub-1.png 「每日0点刷新，能量+10」
- row-title-2.png 「观看一条视频」 / row-sub-2.png 「完成后能量+6」
- row-title-3.png 「邀请1位协作者」 / row-sub-3.png 「每位能量晶+1」
- row-title-4.png 「浏览星球收集册」 / row-sub-4.png 「浏览能量+4」
- btn-pill.png ｜ 胶囊按钮 76×32，渐变 #FF7A9E→#FF9A7A，无描边
- btn-text-1.png 「去签到」 btn-text-2.png 「去观看」 btn-text-3.png 「去邀请」 btn-text-4.png 「去看看」（白字13px）
### footer
- footer-note.png ｜ 「任务每日 24:00 刷新」｜ 12px 灰棕 60%

## 三、规格参数
- 浮层顶部 y≈400（页面53%处）；圆角 28px
- 行卡：375-32=343 宽，高 88，圆角 20，白色实底
- 行间距 12；行内边距 16；图标-文字间距 12
- 按钮：右对齐，距右 16
- 所有图标：哑光软糖质感，顶部微亮渐变，无描边无发光

## 四、命名规则
页面_模块_元素_状态_倍率_版本
例：tasksheet_row_icon_1_default_2x_v1.png
