---
title: 参数模板
author: 高瑞峰
date: 2025-08-01
tags:
  - SeekSoul Online
---

# 参数模板

## 默认参数模板

云平台配置默认模板，包含所有分析的相关参数和颜色配置，共六个板块（过滤、整合、聚类、差异分析、富集分析和配色方案）。该模板不可修改。

<div align="center">
<img src="/processed-assets/9241159b7b-%E5%8F%82%E6%95%B0%E6%A8%A1%E6%9D%BF1.CDRJsZ8-.png" width="40%" />
</div>

> [!NOTE]
> 默认参数模板为平台推荐配置，建议在复制模板基础上根据实际需求进行个性化调整。

## 复制参数模板

如需修改模板，可点击页面右上角复制按钮，设置模板名称，并按需设置参数。

<div align="center">
<img src="/processed-assets/e1c055cb12-screenshot_2025-08-01_09-28-12.woaiTUJY.png" width="40%" />
</div>

## 过滤参数

### scRNA

1. min.cells：设置每个基因至少在多少个细胞中表达，低于该阈值的基因会被过滤。
2. umi.range：设置每个细胞检测到的 UMI 范围阈值，UMI 值不在此范围内的细胞会被过滤。
3. feature.range：设置每个细胞表达的基因数范围阈值，表达基因数不在此范围内的细胞会被过滤。
4. 按基因集表达比例过滤：
   - a. 基因集设置：点击 🖌，可从“我的基因集”添加/增加基因集进行过滤，默认选择线粒体基因集。点击【+】新增基因集进行过滤。
   - b. 过滤方式：
     - MAD：根据细胞整体基因集表达比例计算阈值，过滤掉基因集占比高于此值的所有细胞。
     - range：根据设置的最大最小值，过滤掉线粒体基因占比不在此区间内的所有细胞。
5. 按样本细胞数目过滤：多样本分析时，不同样本检测到的细胞数量可能差异较大，可通过细胞抽样方法将各样本细胞数量维持在相同水平。

<div align="center">
<img src="/processed-assets/3196fdef65-screenshot_2025-08-01_09-39-42.B2_PT4gN.png" width="40%" />
</div>

### scRNA + scATAC

1. min.cells：设置每个基因至少在多少个细胞中表达，低于该阈值的基因会被过滤。
2. umi.range：设置每个细胞检测到的 UMI 范围阈值，UMI 值不在此范围内的细胞会被过滤。
3. feature.range：设置每个细胞表达的基因数范围阈值，表达基因数不在此范围内的细胞会被过滤。
4. nCount_ATAC：每个细胞中检测到 ATAC 转座酶事件的总 count 数。
5. max_nucleosome_signal：每个细胞中核小体信号，过滤染色状态不好的细胞（如核小体过度降解、细胞坏死等）。
   > 过滤大于 2 的细胞
6. Min_TSS.enrichment：每个细胞中 TSS 富集分数，过滤染色质状态不好的细胞（如死细胞）。
   > 过滤掉 TSS 小于 2 的细胞
7. 按基因集表达比例过滤：
   - a. 基因集设置：点击 🖌，可从“我的基因集”添加/增加基因集进行过滤，默认选择线粒体基因集。点击【+】新增基因集进行过滤。
   - b. 过滤方式：
     - MAD：根据细胞整体基因集表达比例计算阈值，过滤掉基因集占比高于此值的所有细胞。
     - range：根据设置的最大最小值，过滤掉线粒体基因占比不在此区间内的所有细胞。
8. 按样本细胞数目过滤：多样本分析时，不同样本检测到的细胞数量可能差异较大，可通过细胞抽样方法将各样本细胞数量维持在相同水平。

<div align="center">
<img src="/processed-assets/b903fed743-screenshot_2025-08-01_11-36-33.DN1OPm4z.png" width="40%" />
</div>

## 整合参数

### scRNA

1. 高变基因方法：选择降维过程中查找高变基因的方法，常用 vst 方法。
2. 高变基因数量：设置高变基因 / bins 的数量。
3. 整合方法：多样本整合分析时，若样本间批次效应较小可用 merge 方法，批次效应较大可用 Harmony（默认）/ CCA / RPCA 算法去除批次效应。

<div align="center">
<img src="/processed-assets/b93b6e87e3-screenshot_2025-08-01_11-48-17.Batt1nY_.png" width="40%" />
</div>

### scRNA + scATAC

1. 高变基因方法：选择降维过程中查找高变基因的方法，常用 vst 方法。
2. 高变基因数量：设置高变基因 / bins 的数量。
3. ATAC 高变选择：计算高变 peaks 时用于过滤低开放 peaks 的阈值，如 min.cutoff=5 表示至少在 5 个细胞中开放的 peaks 才纳入计算。
4. 整合方法选择：同 scRNA，批次效应较大可用 Harmony / CCA / RPCA。
5. ATAC 整合方法选择：根据 RNA 整合方法自动填充，ATAC 和 RNA 分开独立进行批次矫正和整合。
   > 多样本整合完成后，仍为一个 ATAC assay 和 RNA assays（如用 CCA / RPCA 还会有 integrated assay，存放 RNA 矫正后表达矩阵）。

<div align="center">
<img src="/processed-assets/3f24201c88-screenshot_2025-08-01_15-25-42.DVbXrLiF.png" width="40%" />
</div>

## 聚类参数

### scRNA

1. 分辨率：设定细胞聚类分群时的分辨率（resolution，默认 0.5），可调整 cluster 数量，resolution 越高 cluster 越多。
2. PCA 维数：根据 PCA 轴突拐点所对应的 PCA 数量，设定聚类时使用降维数量（默认 30），一般在 10~30 之间，细胞数越多数量越大。

### scRNA + scATAC

1. ATAC 聚类参数：基于 ATAC 开放性，以 LSI 降维聚类，只考虑 ATAC 异质性。
2. WNN 维聚类参数：综合 PCA 和 LSI 降维聚类，综合考虑 ATAC 和 RNA 异质性。
   > 基于 Seurat 的 Signac 工具，LSI 维数默认值 dims = 2:50，维数太低可能丢失重要生物学变异，太高可能导致过度聚类。

<div align="center">
<img src="/processed-assets/1b9b51006e-%E5%8F%82%E6%95%B0%E6%A8%A1%E6%9D%BF2.DjUzuFBv.png" width="40%" />
</div>

<div align="center">
<img src="/processed-assets/d0a41f07f5-screenshot_2025-08-01_15-55-02.DJgQijhG.png" width="40%" />
</div>

## 差异分析参数

1. 软件：presto 或 findmarker。
2. 检验方法：选择寻找差异基因的分析方法，默认 wilcox 方法。
3. 基因最低表达比例：设置基因表达细胞的最小比例阈值（默认 0.1），低于该阈值的基因不列入差异基因列表。
4. 基因最低差异倍数：设置上下调差异倍数的最小绝对值（average Log2 fold change，默认 0.25）。
5. p_val_adj 阈值：设定判定 cluster 间基因表达显著差异的筛选阈值，默认 Padj < 0.05。
6. downSample：是否进行细胞抽样，默认是。
7. 每个聚类最大细胞数：设置每个细胞群中最大细胞数，针对细胞抽样情况。

<div align="center">
<img src="/processed-assets/28bf18abbc-screenshot_2025-08-01_16-20-30.BMioy3zI.png" width="40%" />
</div>

## 富集分析参数

1. 富集方法：Over-Representation Analysis（ORA）或 Gene Set Enrichment Analysis（GSEA）。
2. 数据库：选择富集分析数据库，点击 🖌 可从“我的数据库”添加/增加基因集。
3. pvalueCutoff：设置富集结果的 pvalue 阈值，高于该值的结果会被过滤。
4. qvalueCutoff：设置富集结果的 qvalue 阈值，高于该值的结果会被过滤。
5. minGSSize：设置基因集的最小基因数量，低于该值的结果会被过滤。
6. maxGSSize：设置基因集的最大基因数量，高于该值的结果会被过滤。

<div align="center">
<img src="/processed-assets/c6850bf566-screenshot_2025-08-01_16-18-52.DJz1sHUA.png" width="40%" />
</div>

## 配色方案设置

1. 选择配色方案：在配色方案板块右上角选择所需配色方案，离散型颜色用于分类/分组图，渐变型颜色用于连续数值图，下方预览区展示示例。

<div align="center">
<img src="/processed-assets/45e4e7833a-%E9%85%8D%E8%89%B2%E6%96%B9%E6%A1%88%E8%AE%BE%E7%BD%AE1.CnlPqsVg.png" width="40%" />
</div>

2. 自定义配色方案：
   - a. 新建配色方案：点击“配色方案预览”右侧新建按钮，弹出编辑颜色窗口。点击配色方案名称行展示颜色设置，每次只能展开一种配色方案。点击【➤】新建颜色配色，填写方案名称（不能重复），编辑颜色，点击【重置】可清空离散型颜色。

<div align="center">
<img src="/processed-assets/548af4ed06-%E9%85%8D%E8%89%B2%E6%96%B9%E6%A1%88%E8%AE%BE%E7%BD%AE2.CKvLSoWH.png" width="40%" />
</div>

- 添加颜色：在颜色盘选择颜色，点击下方【+】添加到离散型配色。
- 删除颜色：点击离散型颜色出现阴影，再点击下方【-】删除。
- 修改颜色：确定颜色点后，点击颜色盘其他颜色即可修改，支持离散型和连续型。
- 点击【添加】按钮新建配色方案。

<div align="center">
<img src="/processed-assets/b8432d8a3c-%E9%85%8D%E8%89%B2%E6%96%B9%E6%A1%88%E8%AE%BE%E7%BD%AE3.DWWqRf0N.png" width="40%" />
</div>

<div align="center">
<img src="/processed-assets/ffba473a01-%E9%85%8D%E8%89%B2%E6%96%B9%E6%A1%88%E8%AE%BE%E7%BD%AE4.DSMawUbf.png" width="40%" />
</div>

- b. 删除配色方案：自定义配色方案支持删除，点击方案列表中该方案的【删除】按钮即可。

3. 保存和删除模板：点击参数模板页面右上角【保存】按钮保存修改，点击【删除】按钮删除弃用模板。

<div align="center">
<img src="data:image/png;base64,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" width="40%" />
</div>
