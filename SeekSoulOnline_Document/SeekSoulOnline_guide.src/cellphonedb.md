---
title: CellPhoneDB 细胞通讯分析
author: SeekGene
date: 2026-01-20
tags:
  - SeekSoul Online
---

# CellPhoneDB 细胞通讯分析

---

## 前言

> [!IMPORTANT]
> CellPhoneDB 是一个用于推断人类 (HUMAN) 单细胞转录组数据中配体-受体相互作用的数据库与分析工具，特别考虑了多亚基复合物的结构组成，适合用于细胞间通讯的系统性研究。

本培训文档面向生物信息分析师和平台用户，目标是介绍 CellPhoneDB 的基本原理、在 `SeekSoulOnline` 云平台上的参数配置与操作流程、输出结果的解读方法，以及一个完整的案例演示与注意事项。官方源码与文档参考： [CellphoneDB GitHub 仓库](https://github.com/ventolab/CellphoneDB).

---

## CellPhoneDB 简介与原理

### 核心功能

- 构建并使用经过人工整理的配体-受体数据库（仅 HUMAN）
- 考虑配体/受体的亚基结构和复合物信息，以准确建模异源复合物
- 提供统计置换检验以判定细胞类型对之间显著的配受体表达

### 分析原理（简要）

1. 分别计算每种细胞类型中配体或受体基因的平均表达量与细胞表达占比；若分子由多个亚基组成，采用最小亚基表达量代表该复合物的表达。
2. 采用细胞类型标签的随机置换（默认 1000 次）构建零分布，用以评估配受体对在两种细胞类型中的显著性。
3. 将真实数据的平均表达值与零分布比较，若高于指定分位数（如 95%）且满足表达占比阈值（默认 10%），则标记为显著配受体对。
4. 将显著配受体对汇总成细胞-细胞交互矩阵，并生成热图、网络图、配受体详情表等输出文件供下游解读与可视化。

> [!NOTE]
> CellPhoneDB 的特色在于“亚基/复合物敏感性”，在处理例如异源受体或多肽配体时能显著减少误判。

---

## SeekSoul Online 云平台参数与操作指南

下列为在 `SeekSoulOnline` 平台上运行 CellPhoneDB 分析时的推荐参数与各参数含义（平台 UI 字段示例）。

<div align="center">
<img src="../SeekSoulOnline_guide.src/screenshot_2025-07-24_11-12-13.png" width="40%" />
</div>

<div align="center">
<img src="../SeekSoulOnline_guide.src/image-65-0762d74c.png" width="40%" />
</div>

### 基本参数

1. **任务名称**：以英文字母开头，允许字母、数字、下划线和中文，例如 `cellphonedb_analysis_2025`。
2. **物种**：选择 `human`或 `mouse`。
3. **info 文件**：配置好第一行之后，点击【添加】，在第一列下自定义分组名，第二列下选择样本（可多选），第三列下选择细胞类型（可多选）。

### 平台操作流程（简要）

1. 配置参数并提交任务
2. 等待分析完成，下载结果并在平台或本地进行可视化与报告撰写

---

## 分析流程与示例输出

### 核心输出文件

- `all_count_network.txt`：细胞间相互作用配受体对
- `deconvoluted.txt`：配受体分子在细胞类型中的分解表达信息，后面几列为基因在每种细胞类型中的平均表达量
- `means.txt`：配受体对相互作用的平均值
- `pvalues.txt`：置换检验得到的 p 值表
- 可视化图片：热图、网络图、Circos/Chord 图等（见下方示例）

---

## 案例演示

<div align="center">
<img src="./cellphonedb.src/cellphone_1_all_cpdb_heatmap.png" width="40%" />


<div style="display:inline-block;margin-top:6px;padding:6px 10px;border-left:3px solid #94a3b8;background:#f8fafc;color:#475569;font-size:13px;line-height:1.4;border-radius:4px;">
<strong>图：</strong>细胞间相互作用强度热图

</div>
</div>

<div align="center">
<img src="./cellphonedb.src/cellphone_1_all_count_network.png" width="40%" />


<div style="display:inline-block;margin-top:6px;padding:6px 10px;border-left:3px solid #94a3b8;background:#f8fafc;color:#475569;font-size:13px;line-height:1.4;border-radius:4px;">
<strong>图：</strong>细胞间交互网络图（示例）

</div>
</div>

<div align="center">
<img src="./cellphonedb.src/cellphone_1_ECM_all_dotplot_cpdb.top30.png" width="40%" />


<div style="display:inline-block;margin-top:6px;padding:6px 10px;border-left:3px solid #94a3b8;background:#f8fafc;color:#475569;font-size:13px;line-height:1.4;border-radius:4px;">
<strong>图：</strong>Top 配体与受体交互子集（示例气泡图/热图）

</div>
</div>

---

## 注意事项与最佳实践

- **物种限制**：CellPhoneDB 的数据库以 HUMAN 为主；小鼠数据需进行基因名映射后再分析。
- **细胞数与统计功效**：每种细胞类型建议至少 50 个细胞（稀有细胞可放宽，但需谨慎解读）。
- **阈值慎选**：过低的表达阈值可能增加假阳性，过高则可能遗漏真实信号。
- **复合物处理**：注意检查复合物的所有亚基表达情况，避免因单亚基偏高而误判整个复合物活性。
- **结果验证**：建议结合差异表达、富集分析和实验验证（如体外功能实验或组织切片原位杂交）。

---

## 常见问题解答（FAQ）

Q1: CellPhoneDB 是否支持非人类物种？

A1: 官方数据库为 HUMAN，其他物种需先映射基因名再运行。

Q2: 置换次数能否减少以加快速度？

A2: 可以，但会降低 p 值估计的稳定性。对于探索性分析可适当减少置换次数。

Q3: 如何处理单个分子在复合物中表达差异？

A3: CellPhoneDB 使用亚基表达的最小值代表复合物表达，需手动检查各亚基表达以确认结论。

---

## 方法

[CellPhoneDB方法下载](./08.cellphoneDB.docx)

## 参考资料

- CellPhoneDB 官方仓库：`https://github.com/ventolab/CellphoneDB`
