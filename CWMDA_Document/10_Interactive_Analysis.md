---
title: 交互分析
author: 高瑞峰
date: 2025-07-23
tags:
  - SeekSoul Online
---

# 交互分析

“交互分析”模块可在 ssDNA 图的基础上查看并分析 SeekSpace 空间单细胞转录组测序数据，查看基因表达情况，并进行细胞类型标记。此外，还支持ATAC多组学数据展示。

> [!NOTE]
> 交互分析模块支持多样化空间可视化和细胞标记，建议结合具体分析目标灵活选择展示方式。

## 模块总览

- 数据选择：按样本、按多样本对比、按降维方式（spatial/UMAP/TSNE）展示
- 基因与质控可视化：`nFeature_RNA`、`nCount_RNA`、`mito`及任意目标基因表达
- 图片展示控制：背景图（DAPI/H&E）开关、点大小调节
- 交互工具：缩放、平移、矩形/套索选择、画线、划分样本、对齐与过滤背景图、下载图片
- 细胞标记：基于空间位置与/或联合基因表达进行分组与标签写入（`meta.data`）
- ATAC多组学：峰图展示与交互（SeekARC）

## 选择数据进行绘图

1. 选择样本
   - 选择样本名称，可查看并分析不同样本SeekSpace空间单细胞转录组测序数据。

<div align="center">
<img src="./SeekSoulOnline_guide.src/screenshot_2025-07-30_11-04-59.png" width="40%" />
</div>

   - 如有多个样本，也可同时展示多个样本的spatial图。

<div align="center">
<img src="./SeekSoulOnline_guide.src/交互分析1.png" width="40%" />
</div>

2. 选择数据展示方式
   - 可选择以ssDNA图形式进行空间数据展示。

<div align="center">
<img src="./SeekSoulOnline_guide.src/screenshot_2025-07-30_11-34-46.png" width="40%" />
</div>

   - 也可选择以umap或tsne降维图形式进行数据展示。

<div align="center">
<img src="./SeekSoulOnline_guide.src/screenshot_2025-07-30_11-32-38.png" width="40%" />
</div>

3. 查看基因表达情况
   - 可查看nFeature_RNA、nCount_RNA、mito及各基因的表达情况。

<div align="center">
<img src="./SeekSoulOnline_guide.src/screenshot_2025-07-30_13-51-42.png" width="40%" />
</div>

> [!TIP]
> 查看基因表达情况下拉框与查看细胞标记结果下拉框互斥，切换时请注意。

## 图片展示信息

1. 是否展示背景图
   - 以DAPI图、H&E图为背景进行空间数据展示。

<div align="center">
<img src="./SeekSoulOnline_guide.src/screenshot_2025-07-30_13-51-42.png" width="40%" />
</div>

2. 调整点的大小
   - 可输入数值直接调整点大小，也可点击上下按钮快速调整。

<div align="center">
<img src="./SeekSoulOnline_guide.src/screenshot_2025-07-30_15-10-40.png" width="40%" />
</div>

## 交互式工具

<div align="center">
<img src="./SeekSoulOnline_guide.src/交互式工具.png" width="40%" />
</div>

- Zoom / Zoom in / Zoom out：连续或快速缩放视图，适合放大局部结构或整体概览。
- Pan：在不改变缩放比例下移动视图，定位新区域更高效。
- Box Select：矩形框选细胞，适合规则区域或大范围初筛。
- Lasso Select：自由套索选区，适合不规则组织形态勾勒ROI。
- Draw line（SeekSpace）：在基因表达图上绘制一条线并设置“垂线长”（线宽），平台按起止点自动分为10等份，统计沿线分段的表达变化。
- Autoscale / Reset axes：一键自适应或恢复默认视图，便于对比不同视图状态。
- Fullscreen：全屏查看，适合演示与汇报。
- Edit（划分样本，SeekSpace）：当单张切片含多份样本时，添加/移动分割线并命名样本，完成“拼片样本切割”。
- Align：对齐背景图（位置、比例、角度），解决切片照片与点位的轻微偏移。
- Filter：过滤或调整背景图显示参数，提升点位与背景对比度。
- Download plot as a png：按当前视图配置导出图片，用于报告留存。

## 常规细胞标记

1. 选择细胞
   - 使用“矩形套索工具”或“套索工具”选择细胞。

<div align="center">
<img src="./SeekSoulOnline_guide.src/screenshot_2025-07-30_16-05-11.png" width="40%" />
</div>

2. 标记细胞
   - 点击【标记细胞】，弹出“标记细胞”窗口，填写所标记细胞的meta.data列名和标记细胞命名，完成细胞标记。

<div align="center">
<img src="./SeekSoulOnline_guide.src/screenshot_2025-07-30_16-12-29.png" width="40%" />
</div>

3. 查看标记结果
   - 点击下拉框，选择标记细胞的meta.data列名，查看标记结果。

<div align="center">
<img src="./SeekSoulOnline_guide.src/screenshot_2025-07-30_16-14-46.png" width="40%" />
</div>

> [!TIP]
> - “查看基因表达”与“查看细胞标记结果”下拉框互斥，切换分析视角时请先确认当前模式。
> - 点大小可在“图片展示信息”面板中精细调节，以适配不同放大倍数。

4. 再次选择细胞
   - 再次使用“矩形框选工具”或“套索工具”选择细胞。

<div align="center">
<img src="./SeekSoulOnline_guide.src/screenshot_2025-07-30_16-18-08.png" width="40%" />
</div>

5. 再次标记细胞
   - 再次点击【标记细胞】，弹出“标记细胞”窗口，填写相同meta.data列名和不同标记细胞命名，完成细胞标记。

<div align="center">
<img src="./SeekSoulOnline_guide.src/screenshot_2025-07-30_16-25-14.png" width="40%" />
</div>

6. 再次查看标记结果
   - 再次点击下拉框，选择标记细胞的meta.data列名，查看标记结果。

<div align="center">
<img src="./SeekSoulOnline_guide.src/screenshot_2025-07-30_16-26-24.png" width="40%" />
</div>

> [!WARNING]
> 对于同一meta.data列名下的标记结果，新标记会覆盖原有标记。例如，一部分“Selected_Cells”被“New_Selected_Cells”覆盖。

## 联合基因表达标记细胞

1. 联合基因表达选择细胞
   - 在查看关注基因表达情况的同时，用“矩形框选工具”或“套索工具”选择基因高表达或低表达的细胞。

<div align="center">
<img src="./SeekSoulOnline_guide.src/screenshot_2025-07-30_16-45-36.png" width="40%" />
</div>

> [!TIP]
> 如需根据基因表达量设置阈值添加标签，详见“画图工具”模块【添加标签】功能。

2. 联合基因表达标记细胞
   - 同时标记Selected_Cells、New_Selected_Cells且关注基因高表达的细胞。

<div align="center">
<img src="./SeekSoulOnline_guide.src/screenshot_2025-07-30_16-52-40.png" width="40%" />
</div>

3. 联合基因表达查看标记细胞结果
   - 查看标记结果。

<div align="center">
<img src="./SeekSoulOnline_guide.src/screenshot_2025-07-30_16-56-12.png" width="40%" />
</div>

## 画线分析

- 在某个基因表达的ssDNA图中进行画线，并选择垂线长（线的宽度），从画线起点坐标到终点坐标分成10等份，可查看每等份的基因表达情况。

<div align="center">
<img src="./SeekSoulOnline_guide.src/screenshot_2025-07-30_16-58-29.png" width="40%" />
</div>

## 划分样本

- 当一张切片上有多个样本时，可使用划分样本工具进行样本划分。比如当前 sample 标签下样本为“all”。

<div align="center">
<img src="./SeekSoulOnline_guide.src/screenshot_2025-07-31_10-32-06.png" width="40%" />
</div>

- 点击“Edit（划分样本）”，在目标位置添加竖向分割线，可拖动精确对齐样本边界（支持多条分割线）。

<div align="center">
<img src="./SeekSoulOnline_guide.src/screenshot_2025-07-31_10-16-39.png" width="40%" />
</div>

- 为每个分割区块输入易识别的样本名（如`left`/`right`、`A`/`B`）。可看到样本“all”被划分为“left”和“right”。

<div align="center">
<img src="./SeekSoulOnline_guide.src/screenshot_2025-07-31_10-37-49.png" width="40%" />
</div>

<div align="center">
<img src="./SeekSoulOnline_guide.src/screenshot_2025-07-31_10-38-30.png" width="40%" />
</div>

- 使用【还原】撤回至初始或上一步；如切片背景略有偏移，可先用“Align”微调背景后再切割。

<div align="center">
<img src="./SeekSoulOnline_guide.src/screenshot_2025-07-31_10-39-45.png" width="40%" />
</div>

<div align="center">
<img src="./SeekSoulOnline_guide.src/screenshot_2025-07-31_10-41-02.png" width="40%" />
</div>

- 随后分析，可以在各样本标签下分别进行基因表达可视化、细胞标记与结果对比。

> [!CAUTION]
> - 分割线位置决定样本归属，建议先粗分再微调，避免误分配。
> - 切割后的样本命名会进入后续分析流，请统一命名规范以提升复现性。

## ATAC多组学peak绘图

1. 数据展示
   - 与SeekSpace空间单细胞转录组测序数据的使用说明一致，可查看ATAC多组学peak绘图。

<div align="center">
<img src="./SeekSoulOnline_guide.src/screenshot_2025-07-31_11-24-51.png" width="40%" />
</div>

2. 画图面板
   - 鼠标移至底部白色边缘可按住向上拖出画图面板，或双击快速展开/收起。

<div align="center">
<img src="./SeekSoulOnline_guide.src/画图面板.png" width="40%" />
</div>

   - Zoom：手动放大区域
   - Pan：移动图形位置
   - Zoom in：快速放大区域
   - Zoom out：快速缩小区域
   - Autoscale：自动缩放
   - Reset axes：恢复图形原状
   - Download plot as a png：下载png格式图片

## 常见问题与可解决场景

- 如何快速定位目标基因在组织中的空间分布与梯度变化？
  - 在“查看基因表达”中输入基因，结合画线可观察沿组织结构方向的表达。
- 如何筛除或标注潜在低质量细胞（如高线粒体含量）？
  - 可视化`mito`、`nFeature_RNA`、`nCount_RNA`，按阈值选择并写入QC标签。
- 多样本同切片如何分割并开展差异对比？
  - 使用“Edit（划分样本，SeekSpace）”完成切割，随后在各样本标签下对比基因表达与标记结果。
- 如何验证Marker是否在期望的结构域内富集？
  - 打开H&E/DAPI背景，叠加基因表达与标签，检查区域一致性。
- 如何导出用于报告的图？
  - 使用“Download plot as a png”在合适放大比例与背景设置下导出。
