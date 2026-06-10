---
title: CellChat 细胞通讯分析
author: SeekGene
date: 2026-01-20
tags:
  - SeekSoul Online
---

# CellChat 细胞通讯分析

## 前言

> [!IMPORTANT]
> 本文档为基于 CellChat 的细胞通讯分析资料，包含方法原理、SeekSoul Online 平台参数说明、结果解读与案例演示。请在使用时结合原始数据质控与生物学验证。

本文参考 CellChat 官方文档，结合 SeekSoul Online 云平台操作流程和结果报告编写。

## 原理概述

### CellChat 的基本思想

CellChat 是一个基于先验配体-受体数据库并结合基因表达数据，用于推断细胞间通信网络的 R 包。其核心包括：

- **使用经过人工整理的 CellChatDB**（支持人/鼠）作为配体、受体、多亚基复合体和辅因子信息的先验知识。
- **基于基因表达估计信号通量与互作强度**，并在计算上考虑多亚基结构与辅因子。
- **使用系统网络分析（如社交网络分析、模式识别、流量度量等）来量化通信强度、角色与通路间相似性**。

### 计算模型要点

- **表达聚合**：对多亚基配体/受体，CellChat 采用合适的聚合函数来估计整体复合体活性。
- **动力学建模（米氏方程）**：在评估受体-配体互作强度时，考虑表达与结合动力学的非线性关系。
- **统计显著性评估**：通过置换检验或其他随机化方法评估每对 L-R 对的显著性。
- **信号通路汇总**：将多个 L-R 对映射到生物学信号通路，提供通路层级的比较分析与可视化。

### CellChat 相较其它工具的优势与局限

- **优势**：细致的多亚基注释、丰富的可视化形式（circle、chord、sankey、heatmap、bubble 等）、支持人/鼠数据库、对非蛋白质介导交互的扩展支持（v2）。
- **局限**：依赖先验库覆盖；无法直接给出因果性验证；对低表达/稀有细胞类型敏感。

## SeekSoul Online 平台（CellChat 模块）参数说明与操作指南

> [!NOTE]
> 以下为平台参数示例。

<div align="center">
<img src="/processed-assets/0911e381c6-screenshot_2025-07-24_14-05-37.BtjL08kw.png" width="40%" />
</div>

### 主要参数说明

1. **任务名称**：以字母开头，支持下划线，示例：`cellchat_analysis_2025`。
2. **物种**：`Human` 或 `Mouse`，影响 CellChatDB 的选择。
3. **分组因子**：细胞注释列名，例如 `celltype` 或 `CellAnnotation`。
4. **分析方法**：计算方法，可选值为 triMean 或者 truncatedMean，前者得到较少但是更强的相互作用，后者得到更多的相互作用。
5. **表达比例**：当分析方法为 truncatedMean 时才会被用到，表达比例低于百分之多少时，视基因表达平均值为 0。单细胞转录组默认为 0.25，空间数据推荐设置小一些，比如 0.1。若关注稀有细胞，可适当降低表达阈值。
6. **细胞数影响**：是否考虑细胞群内数目的影响。分选的细胞群设为“否”，未分选的细胞群设为“是”，空间数据统一为“否”。

### 提交与结果获取

- 点击提交后，请在任务列表查看进度；分析时间取决于细胞数、比较对象组数。
- 完成后可下载包含图像（PNG）、表格（TSV/XLS）和交互式 HTML 报告。

## 报告结果解读

> [!NOTE]
> 结果须结合生物背景与表达验证，CellChat 提供的是基于统计与先验知识的预测结果，非直接实验验证。

### 核心结果文件说明

- `*_cellchat_netp_lr.xls`：基于信号通路的配体-受体对通讯数据。
- `*_cellchat_net_lr.xls`：基于配体-受体对的通讯数据。
- 各类图片：`netVisual_circle.png`、`bubble.png`、`heatmap.png`、`chord.png`、`sankey.png` 等。

<div align="center">
<img src="/processed-assets/cea998b337-compareInteractions.yH-eV3LB.png" width="40%" />


<div style="display:inline-block;margin-top:6px;padding:6px 10px;border-left:3px solid #94a3b8;background:#f8fafc;color:#475569;font-size:13px;line-height:1.4;border-radius:4px;">
<strong>图：</strong>不同组别/样本总体 L-R pairs 数量与通讯强度比较（示例图）

</div>
</div>

<div align="center">
<img src="/processed-assets/8023cc7c50-netVisual_circle.Cy-wAblN.png" width="40%" />


<div style="display:inline-block;margin-top:6px;padding:6px 10px;border-left:3px solid #94a3b8;background:#f8fafc;color:#475569;font-size:13px;line-height:1.4;border-radius:4px;">
<strong>图：</strong>不同组别/样本总体 L-R pairs 数量与通讯强度比较（示例图）

</div>
</div>

### 常见图表的生物学解读

- **Circle/Chord 图**：展示细胞群之间的总体交互关系。环宽/弧度代表发送或接收总强度，连线代表细胞间的交互量。
- **Heatmap（交互矩阵）**：行/列表示发送/接收细胞，颜色深浅表示交互强度或 L-R pair 数量，便于快速发现最活跃的细胞对。
- **Bubble 图**：展示具体 L-R pairs 在各细胞群中的表达情况，点大小为表达比例，颜色代表平均表达量。

<div align="center">
<img src="/processed-assets/c4f168dcd4-CTRL_netVisual_bubble.Dt0IV8tt.png" width="40%" />


<div style="display:inline-block;margin-top:6px;padding:6px 10px;border-left:3px solid #94a3b8;background:#f8fafc;color:#475569;font-size:13px;line-height:1.4;border-radius:4px;">
<strong>图：</strong>配体-受体气泡图，显示配体在不同细胞群中的表达比例与平均表达（示例图）。

</div>
</div>

<div align="center">
<img src="/processed-assets/ec2c2abb30-CTRL_netVisual_heatmap.CtWTKUmv.png" width="40%" />


<div style="display:inline-block;margin-top:6px;padding:6px 10px;border-left:3px solid #94a3b8;background:#f8fafc;color:#475569;font-size:13px;line-height:1.4;border-radius:4px;">
<strong>图：</strong>交互强度热图，用于直观比较细胞群之间的通讯差异（示例图）。

</div>
</div>

<div align="center">
<img src="/processed-assets/4417f5e70c-CTRL_netVisual_chord_path.CWj6vvdo.png" width="40%" />


<div style="display:inline-block;margin-top:6px;padding:6px 10px;border-left:3px solid #94a3b8;background:#f8fafc;color:#475569;font-size:13px;line-height:1.4;border-radius:4px;">
<strong>图：</strong>Chord 图用于显示细胞群之间的成对交互（示例图）。

</div>
</div>

### 判读要点与筛选策略

1. **优先关注高强度且生物学合理的 L-R 对**（高表达 + 高统计显著性 + 文献支持）。
2. **结合通路分析**：若多个 L-R 对集中于同一路径，则该通路可能是关键通信通路。
3. **关注细胞角色**：分析发送/接收角色的 scatter 或角色热图，识别主要发送者与接收者。
4. **验证优先级**：优先验证 Top 配体及其预测靶基因或受体表达。

## 案例：人类免疫微环境中 B 细胞与单核细胞的通信分析（示例）

### 分析目标

识别 B 细胞与 CD14 单核细胞之间的重要配体-受体通信，评估炎症相关通路（如 TNF、IL1）在不同处理组间的变化。

### 关键发现（示例）

- CD14_Mono → B_cell：发现 IL1 家族配体在单核细胞中高表达，且对应受体在 B 细胞中富集。
- 通路层面：IL1 信号通路在处理组中显著增强，通路强度差异优先级靠前。
- 图像验证：bubble 图显示 IL1B 在 CD14_Mono 中表达比例高且平均表达高，heatmap 与 chord 图均支持该通路为主导信号。

### 生物学意义与建议验证实验

1. **生物学意义**：IL1 介导的单核-淋巴细胞通信可能参与炎症反应与免疫调节。
2. **实验验证建议**：流式或免疫组化验证 IL1B/IL1R1 的细胞定位；体外共培养结合阻断抗体验证功能性影响。
3. **下游分析**：结合差异表达与富集分析确认 IL1 下游靶基因的表达改变。

## 注意事项与最佳实践

> [!WARNING]
> 避免过度解读：CellChat 给出的是统计学推断结果，需结合文献与实验验证。

- **数据质量**：确保每类细胞有足够细胞数（建议至少 50 个细胞）；稀有细胞需谨慎下调阈值并结合下采样策略。
- **批次效应**：在多样本比较中先处理批次效应，避免假阳性信号。
- **物种一致性**：确保使用与样本一致的物种数据库（人/鼠）。

### 方法

[CellChat 方法下载](./09.CellChat.docx)

## 参考资料

- CellChat 官网页面与文档：`https://github.com/sqjin/CellChat`。

[1] JIN S, et al. Inference and analysis of cell-cell communication using CellChat[J]. Nat Commun, 2021, 12: 1088.
