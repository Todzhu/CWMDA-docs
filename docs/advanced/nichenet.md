---
title: NicheNet 细胞通讯分析
author: SeekGene
date: 2026-01-20
tags:
  - SeekSoul Online
---

# NicheNet 细胞通讯分析

---

## 前言

> [!IMPORTANT]
> NicheNet 是一种能够从表达数据和先验知识中推断配体对受体细胞靶基因调控的分析工具，适用于单细胞与空间转录组数据的细胞通讯研究。

本培训文档面向使用 SeekSoul Online 云平台的生物信息分析工程师与生物学家，旨在介绍 NicheNet 的原理、常见参数设置、结果解读与在平台上的操作要点。

---

## NicheNet 理论基础

### 核心假设

NicheNet 基于如下假设：配体通过结合受体，触发受体细胞内信号转导，最终影响转录因子并调控特定靶基因的表达。因此，为了推断配体对靶基因的调控，NicheNet 将配体-受体、信号转导与转录调控网络整合为一个先验模型。

### 数据整合

NicheNet 主要整合：
1. 配体-受体相互作用数据库（已知 L-R 对）
2. 蛋白质相互作用与信号传导网络（receptor → signaling proteins → TFs）
3. 转录因子—靶基因调控网络

这些信息被整合成加权网络，网络传播算法用于计算每个配体到候选靶基因的调控潜力分数。

> [!NOTE]
> 网络传播算法是 NicheNet 的核心创新，它模拟信号在网络中传播的强度衰减与多路径协同作用，从而得出配体对靶基因的调控潜力。

### 评分与统计评估

常用指标：AUROC、AUPR、AUPR_corrected（用于不平衡数据修正）、Pearson 相关系数。NicheNet 通常以`aupr_corrected`作为配体活性排序的主要依据。

---

## 技术实现

### 算法流程（概览）

<div align="center">
<img src="/processed-assets/550e6fd6a0-NicheNet_pipeline.alf7QUoB.png" width="40%" />
</div>

1. 数据预处理：表达矩阵规范化、细胞注释与质控
2. 差异基因分析：在受体细胞中识别感兴趣的靶基因集
3. 配体候选选择：根据表达与生物学先验筛选潜在配体
4. 配体活性分析：基于网络传播计算配体对靶基因集的调控潜力并排序
5. 靶基因预测：对 TOP 配体预测其高置信度的靶基因并可视化

### 单细胞与空间数据差异

| 数据类型 | 预处理重点 | 分析建议 |
|----------|------------|---------|
| 单细胞 RNA-seq | 细胞聚类与注释、批次校正 | 使用细胞类型分组作为发送/接收单元 |
| 空间转录组 | 保留空间坐标、切片质量控制 | 只考虑空间上邻近的细胞作为发送者/接收者以降低假阳性 |

> [!WARNING]
> 空间数据必须考虑细胞邻近性，远距离细胞间直接通讯的可能性较低，避免盲目把所有细胞作为发送者。

### 参数建议（经验法则）

- 表达阈值：基因在细胞类型中>=10%细胞表达（空间数据可降至 5-8%）
- 差异基因筛选：log2FC 0.25–1.0，p < 0.05，pct > 0.1
- 靶基因数量：建议 50–500 个差异基因，以平衡信号与噪声

> [!TIP]
> 对于稀有细胞或低覆盖数据，可适当放宽表达阈值或采用下采样策略。

---

## SeekSoul Online 云平台操作指南

### 参数配置界面（概览）

<div align="center">
<img src="/processed-assets/704fa2fe20-screenshot_2025-07-24_14-08-44.BJpDobWR.png" width="40%" />
</div>

### 主要参数说明

1. **任务名称**：以英文字母开头，可包含下划线与中文，建议有语义（如`nichenet_analysis_2025`）
2. **分组因子**：细胞注释列名（例如`celltype`或`CellAnnotation`）
3. **配体细胞（发送者）**：多选，建议 2–5 种具有分泌功能的细胞类型
4. **受体细胞（接收者）**：多选，建议 1–3 种关注的靶细胞类型
5. **分组比较**：用于处理组/对照组的列名（例如`Condition`）
6. **处理组 vs 对照组**：设定以进行差异基因分析
7. **物种**：选择`human`或`mouse`，影响先验模型与基因符号

### 参数填写建议（平台实战）

> [!IMPORTANT]
> **配体细胞选择策略**：优先选择已知具分泌功能的细胞（免疫细胞、基质细胞、成纤维细胞等），避免包含无核细胞如红细胞。

> [!IMPORTANT]
> **受体细胞选择策略**：选择你感兴趣的目标细胞类型（如肿瘤细胞、上皮细胞），并确保在分组比较中样本量充足。

**提交与查看**：提交后通常耗时 30–60 分钟（依数据规模）。完成后可在分析列表下载报告与图像文件。

---

## 结果解读

### 主要输出文件

- `*_ligand_activities.txt`：配体活性评分（`aupr_corrected`为主要排序依据）
- `*_top_ligands.txt`：Top 配体列表（通常 Top30）
- `*_top_targets.txt`：预测靶基因列表
- 可视化文件：`*_Top_ligands_dot.png`、`*_ligands_heatmap.png`、`*_ligand_target_heatmap.png`、`*_ligand_receptor_heatmap.png`、`*_ligand_target_circos.png`

### 配体活性表格解读

| 列名 | 含义 |
|------|------|
| `test_ligand` | 配体基因名称 |
| `auroc` | 模型的 AUROC 评分 |
| `aupr` | AUPR 评分 |
| `aupr_corrected` | 针对不平衡数据修正后的 AUPR（排序首要依据） |
| `pearson` | 预测与观测的皮尔森相关 |
| `rank` | 基于`aupr_corrected`的名次 |

> [!NOTE]
> `aupr_corrected`更适合单细胞场景，优先参考该指标进行配体优先级判定。

### 常见图表解读要点

- 气泡图（配体表达）：点大小代表细胞中表达比例，颜色代表表达量。
- 配体差异表达热图：显示处理组/对照组在各细胞类型中的差异表达（log2FC）。
- 配体-靶基因调控热图：颜色越深表示预测调控潜力越强。
- 配体-受体热图：用于验证生物学合理性与筛选可能的配体-受体对。
- Circos 图：展示配体与靶基因之间的预测连线，线的粗细反映调控强度。

### 筛选策略（经验）

- 首选：高`aupr_corrected`且在配体细胞中有表达且其受体在受体细胞中表达的配体
- 结合生物学背景与文献，优先关注功能相关且可被实验验证的配体-受体对

---

## 应用案例（示例摘要）

### 案例：肾细胞癌（RCC）肿瘤-微环境互作分析（简述）

- **问题**：识别肿瘤-非肿瘤交界处促进 EMT 的细胞通讯信号
- **配体细胞**：Macrophage
- **受体细胞**：Tumor cells

**关键发现**：巨噬细胞表达的配体（如`IL1B`）对肿瘤细胞的 EMT 靶基因有显著调控潜力，受体`IL1R1`在肿瘤细胞中高表达，提示 IL1B/IL1R1 通路可能参与肿瘤侵袭。 

<div align="center">
<img src="/processed-assets/c53dee2a08-nichenet_ex.BBIH1UZs.png" width="40%" />
</div>

> [!TIP]
> 在案例分析中，推荐结合空间位置与免疫表型验证预测结果，提高结论可信度。

---

## 注意事项与最佳实践

### 数据与质量控制

> [!WARNING]
> **细胞数量要求**：每种细胞类型建议至少 50 个细胞；稀有细胞可适当放宽。

> [!WARNING]
> **基因表达要求**：配体和受体基因需在相应细胞类型中有表达，否则预测可能是假阳性。

### 参数与结果筛选

- 配体活性筛选：`aupr_corrected > 0.1` 作为参考阈值；辅助参考`auroc > 0.6`
- 靶基因筛选：优先考虑调控潜力高且功能相关的基因，结合富集分析判断生物学一致性

### 常见误区

> [!WARNING]
> 避免选择过多配体/受体细胞组合，过多组合会增加噪声并降低可解释性。

> [!WARNING]
> NicheNet 是预测性工具，所有关键结论应结合文献与实验验证。

---

## 常见问题解答

Q1: 如何选择配体/受体细胞？

A: 配体细胞应优先选已知分泌功能的细胞（免疫细胞、基质细胞等），受体细胞为研究兴趣的靶细胞，且两者应在空间上可能相互作用。

Q2: 配体活性低怎么办？

A: 检查配体/受体表达、放宽差异基因阈值或考虑其他细胞组合。

Q3: 如何判断预测可靠性？

A: 结合`aupr_corrected`、配体/受体表达证据、GO/KEGG 富集及文献/实验验证。

---

## 方法

[NicheNet方法下载](./10.NicheNet.docx)

## 参考资料

[1] BROWAEYS R, SAELENS W, SAEYS Y. NicheNet: modeling intercellular communication by linking ligands to target genes[J]. Nat Methods, 2020, 17(2): 159-162.

[2] EFREMOVA M, VENTO-TORMO M, TEICHMANN S A, et al. CellPhoneDB: inferring cell–cell communication from combined expression of multi-subunit ligand–receptor complexes[J]. Nat Protoc, 2020, 15: 1484–1506.