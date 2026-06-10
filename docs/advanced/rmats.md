---
title: 可变剪接（rMATS）差异分析文档
author: SeekGene
date: 2026-01-20
tags:
  - SeekSoul Online
---

# 可变剪接（rMATS）差异分析文档

## 前言

> [!TIP]
> 可变剪接（Alternative Splicing, AS）是真核生物中调节基因表达和产生蛋白质多样性的关键机制。通过不同的剪接方式，一个基因可以产生多种 mRNA 亚型，从而翻译出功能各异的蛋白质。rMATS（replicate Multivariate Analysis of Transcript Splicing）是一款强大而灵活的计算工具，专门用于从 RNA-Seq 数据中检测差异可变剪接事件。

在单细胞测序数据分析中，rMATS 能够帮助研究者比较不同细胞群（如不同细胞类型、不同处理组）之间的可变剪接模式，识别与特定生物学过程或疾病状态相关的关键剪接变化。与差异基因表达分析相比，差异可变剪接分析提供了另一个维度的基因调控信息，有助于更深入地揭示细胞异质性和功能多样性的分子基础。

本篇文档旨在为研究者提供一份详尽的 rMATS 分析技术指南，内容涵盖其基本原理、在 SeekSoul Online 云平台上的操作方法、结果解读、以及常见问题，帮助您快速掌握并应用该工具进行深入的数据挖掘。

---

## rMATS 理论基础

### 核心原理

rMATS 通过分析比对到转录本上的 RNA-Seq 读数（reads），来量化和比较不同样本组之间特定可变剪接事件的发生频率。它统计支持“外显子包含式剪接”（Inclusion）和“外显子跳跃式剪接”（Skipping）的读数数量，并使用多元统计模型来评估两组样本间“外显子包含水平”（Percent Spliced In, PSI 或 IncLevel）的差异是否显著。

### rMATS 识别的五种可变剪接事件

rMATS 可以识别并分析以下五种最常见的可变剪接事件类型：

1.  **SE (Skipped Exon)**：**外显子跳跃**。一个外显子在某些转录本中被包含，而在另一些转录本中被跳过。这是最常见和研究最广泛的可变剪接类型。
2.  **A5SS (Alternative 5' Splice Site)**：**5'端可变剪接**。同一个外显子的 3'端剪接位点固定，但使用了不同的 5'端剪接位点，导致外显子长度发生变化。
3.  **A3SS (Alternative 3' Splice Site)**：**3'端可变剪接**。与 A5SS 相对，5'端剪接位点固定，但使用了不同的 3'端剪接位点。
4.  **MXE (Mutually Exclusive Exons)**：**外显子互斥**。两个或多个外显子在转录本中只能出现其中一个，彼此互斥。
5.  **RI (Retained Intron)**：**内含子保留**。一个内含子在某些转录本中被正常剪切掉，而在另一些转录本中被保留下来，成为成熟 mRNA 的一部分。

<div align="center">
<img src="https://seeksoul.online/cloudplatform-doc/placeholder.svg" width="40%" />
</div>

*（图片来源于 [rMATS 官网](https://rnaseq-mats.sourceforge.io/index.html)）*

---

## 云平台操作指南

在云平台上，rMATS 分析流程被设计得直观易用。您无需编写代码，只需通过参数配置界面即可完成分析。

### 分析前的准备

> [!TIP]
> rMATS 分析依赖于高质量的 BAM 比对文件。在开始分析前，请务必确认：
> 1.  **数据已完成比对**：您的单细胞数据已经过比对，生成了 BAM 文件。
> 2.  **选择了合适的分组**：差异可变剪接分析需要在两个或多个明确定义的生物学分组之间进行比较（例如，处理组 vs. 对照组，疾病样本 vs. 健康样本，不同细胞类型等）。

### 参数详解

下表详细列出了云平台 rMATS 分析模块的主要参数及其说明。

| 界面参数 | 说明 |
| :--- | :--- |
| **任务名称** | 本次分析的任务名称，需以英文字母开头，可包含英文字母、数字、下划线和中文。 |
| **分组因子** | 指定的 metadata 名，用于定义比较组，例如 `celltype` 或 `Group`。 |
| **细胞类型** | 选择要分析的细胞类型或分组。平台将基于此进行组间比较。 |
| **样本信息** | 选择要分析的样本，并指定其对应的 BAM 文件路径。 |
| **物种** | 选择您的数据对应的物种，可选人、小鼠或果蝇。 |
| **备注** | 自定义的备注信息，方便记录分析详情。 |

### 操作流程

1.  **进入分析模块**：在云平台导航至“高级分析”模块，选择“rMATS 可变剪接”。
2.  **创建新任务**：为您的分析任务命名。
3.  **配置参数**：根据上述指南，设置任务名称、分组因子、细胞类型、BAM 文件路径等。
4.  **提交任务**：确认参数无误后，点击“提交”按钮，等待分析完成。
5.  **下载与查看**：分析结束后，在任务列表中下载并查看生成的分析报告和结果文件。

<div align="center">
<img src="https://seeksoul.online/cloudplatform-doc/placeholder.svg" width="40%" />
</div>

---

## 结果解读

rMATS 的分析报告包含统计图表和详细的数据表格，以下是对核心结果的详细解读。

### 可变剪接事件统计

报告首先会展示在不同比较组中检测到的五种可变剪接事件的数量统计。

<div align="center">
<img src="https://seeksoul.online/cloudplatform-doc/placeholder.svg" width="40%" />
</div>

-   **图表解读**：该柱状图展示了在一个比较组中（例如`clusterDCs` vs. 其他所有细胞），检测到的五种可变剪接事件（SE, MXE, A5SS, A3SS, RI）的总数。
-   **分析要点**：
    -   快速了解数据中可变剪接事件的整体情况。
    -   通常，SE（外显子跳跃）事件数量最多，RI（内含子保留）相对较少。

### 差异可变剪接事件列表

这是 rMATS 分析的核心结果，以表格形式列出了所有检测到的差异可变剪接事件。报告中通常默认展示 SE（外显子跳跃）事件的结果文件。

-   **文件解读 (`*.MATS.JC.txt`)**：
    -   **GeneSymbol**: 事件所在的基因名称。
    -   **chr, strand, ExonStart_0base, ExonEnd**: 事件的染色体位置信息。
    -   **IJC_SAMPLE_1, SJC_SAMPLE_1**: 组 1 中，支持“包含”（Inclusion Junction Count）和“跳跃”（Skipping Junction Count）的 reads 数。
    -   **IJC_SAMPLE_2, SJC_SAMPLE_2**: 组 2 中，支持“包含”和“跳跃”的 reads 数。
    -   **IncLevel1, IncLevel2**: 分别为组 1 和组 2 的“外显子包含水平”（Inclusion Level），计算公式为 `(IJC / IncFormLen) / ((IJC / IncFormLen) + (SJC / SkipFormLen))`。该值在 0 到 1 之间，越接近 1 表示外显子越倾向于被包含。
    -   **IncLevelDifference**: `IncLevel1` 与 `IncLevel2` 的差值。这是衡量差异效应大小的关键指标，绝对值越大，差异越显著。
    -   **PValue, FDR**: 差异显著性的 p 值和经过多重检验校正后的 FDR 值。通常以 `FDR < 0.05` 且 `|IncLevelDifference| > 0.1` 作为筛选显著差异事件的标准。

---

## 注意事项

1.  **结果验证**：rMATS 的结果是基于计算推断的。对于关键的差异可变剪接事件，强烈建议使用 RT-PCR 等分子生物学实验进行验证。
2.  **筛选标准**：筛选显著差异事件时，不能只看`FDR`值。务必结合`IncLevelDifference`来评估差异的生物学意义。一个`FDR`很小但`IncLevelDifference`只有 0.01 的事件，其生物学效应可能微乎其微。
3.  **样本质量**：RNA-Seq 的测序深度和读长会影响可变剪接事件的检测能力。深度越深、读长越长（特别是双端测序），越有利于准确识别和量化剪接事件。
4.  **与差异基因表达结合**：将差异可变剪接分析与差异基因表达分析相结合，可以更全面地理解基因在转录本和蛋白水平上的调控变化。有时一个基因的总体表达量没有变化，但其亚型比例发生了剧烈改变，这同样具有重要的生物学功能。

---

## 常见问题解答（FAQ）

**Q1: rMATS 分析报告中的"IncLevel"（Inclusion Level）是什么意思？**

A: "IncLevel"（或 PSI, Percent Spliced In）是衡量一个可变外显子被包含到成熟 mRNA 中的频率的指标。它的值在 0 到 1 之间。例如，一个 SE 事件的 IncLevel 为 0.8，意味着在该样本中，80%的转录本包含了这个外显子，而 20%的转录本跳过了它。`IncLevelDifference`则是比较两组样本之间这个频率的差异，是判断差异可变剪接效应大小的核心指标。

**Q2: 我应该如何筛选有意义的差异可变剪接事件？**

A: 一个常用的筛选标准是 **`FDR < 0.05`** 并且 **`|IncLevelDifference| > 0.1`**。
   - `FDR < 0.05` 保证了统计上的显著性。
   - `|IncLevelDifference| > 0.1` 保证了差异具有一定的生物学效应大小（即两组之间外显子包含的比例至少有 10%的变化）。您可以根据研究需求调整`IncLevelDifference`的阈值，例如使用 0.2 或更高以获得更强的候选事件。

**Q3: 为什么我的分析结果中，某个基因有很多个可变剪接事件？**

A: 这是正常的。一个基因，特别是结构复杂的大基因，可能包含多个可变外显子或可变剪接位点。因此，rMATS 可能会在同一个基因上检测到多个独立的 SE、A5SS 或 RI 事件。分析时，您可以逐一检查这些事件，也可以重点关注其中差异最显著的事件。

**Q4: rMATS 和寻找差异表达基因有什么不同？我应该做哪个？**

A: 它们从不同层面解析基因调控，最好两者都做。
   - **差异表达基因分析**关注的是基因的**“量变”**：基因的总体转录水平是上调还是下调。
   - **差异可变剪接分析（rMATS）**关注的是基因的**“质变”**：在基因总体表达量不变的情况下，其产生的不同 mRNA 亚型（isoform）的比例是否发生了变化。
一个基因可能表达量没有差异，但其主要功能亚型从 A 变成了 B，这同样会引起重要的功能改变。因此，结合两种分析能提供更全面的视角。

---

## 方法

[rMATS方法下载](./02.rMATS%20.docx)

## 参考资料

[1] WANG Y, XIE Z, KUTSCHERA E, et al. rMATS-turbo: an efficient and flexible computational tool for alternative splicing analysis of large-scale RNA-seq data[J]. Nature Protocols, 2024.

[2] SHEN S, PARK J W, LU Z X, et al. rMATS: Robust and Flexible Detection of Differential Alternative Splicing from Replicate RNA-Seq Data[J]. PNAS, 2014, 111(51): E5593-601.

[3] PARK J W, TOKHEIM C, SHEN S, et al. Identifying differential alternative splicing events from RNA sequencing data using RNASeq-MATS[M]. Methods in Molecular Biology: Deep Sequencing Data Analysis, 2013, 1038: 171-179.

[4] SHEN S, PARK J W, HUANG J, et al. MATS: A Bayesian Framework for Flexible Detection of Differential Alternative Splicing from RNA-Seq Data[J]. Nucleic Acids Research, 2012, 40(8): e61.