# 任务中心浮层 PSD 还原包（用户切图版）

素材来源：你提供的切图合集（_user-sliced-assets.png），已由脚本自动裁切为 12 个独立切片。

## 使用方法
1. Photoshop 打开本文件夹
2. 文件 → 脚本 → 浏览... 选 build-tasksheet-psd.jsx
3. 自动生成 tasksheet-375x812.psd（750×1626 @2x）

## 裁切产物（slice_*.png）
slice_panel.png        UI面板整块（含角色、标题、四行任务、页脚）
slice_bg_home.png      背景图（暗调首页）
slice_icon_back/help   顶部圆形按钮
slice_icon_calendar/video/people/crystal   四个任务图标
slice_btn_1..4         四个渐变胶囊按钮

## PSD 图层
L0_bg_home_dim            背景
L2_ui_panel               你切好的UI面板整块
L3_title_editable         可编辑标题文字（默认隐藏，避免与面板内文字重叠）
L3_energy_editable        可编辑能量文字（默认隐藏）
L4_icon_back / help       顶部圆钮
reusable_slices（组）      独立按钮×4、图标×4（默认隐藏，供复用）

## 说明
- 面板整块作为一个图层置入；如需把四行任务拆成独立图层，可用PS「对象→切片→从图层生成」或告知我需要按行再切
- 可编辑文字层默认隐藏，打开即可替换文案
