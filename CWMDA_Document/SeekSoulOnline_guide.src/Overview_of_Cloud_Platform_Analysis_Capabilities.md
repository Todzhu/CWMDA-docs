---
title: 云平台分析能力一览表
author: liuxin
date: 2026-01-20
tags:
  - SeekSoul Online
---


<style>
.atmos-table-container {
    font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    margin: 40px 0;
    position: relative;
}

.table-wrapper {
    display: block;
    width: 100%;
    background: #fff;
    overflow: auto; /* Enable scroll for both directions */
    max-height: 85vh; /* Fix height to enable vertical sticky header */
    border-radius: 12px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(255,255,255,0.1);
}

.atmos-table-container table {
    width: 100%;
    border-collapse: separate; /* Changed from collapse to separate for sticky header support */
    border-spacing: 0;
    min-width: 100%;
}

.atmos-table-container thead th {
    background: linear-gradient(to bottom, #1e3a8a, #1e40af); /* Match HTML gradient */
    color: #ffffff;
    padding: 12px 6px; /* Reduced padding */
    font-weight: 600;
    font-size: 14px; /* Reduced font size */
    letter-spacing: 0.5px;
    position: sticky;
    top: 0;
    z-index: 10;
    border: 1px solid rgba(255,255,255,0.1);
    white-space: normal; /* Allow wrap */
    vertical-align: middle;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    word-break: break-word; /* Allow break word */
}

/* Specific Column Widths */
.atmos-table-container th:nth-child(-n+7) {
    min-width: 50px; /* Reduced from 100px */
    width: 60px;
    text-align: center;
}

.atmos-table-container th:nth-child(8) {
    min-width: 80px; /* Reduced from 100px */
}

.atmos-table-container th:nth-child(9) {
    min-width: 60px; /* Reduced from 80px */
    width: 60px;
}

.atmos-table-container th:nth-child(10) {
    min-width: 150px; /* Reduced from 180px */
}

.atmos-table-container th:nth-child(11) {
    min-width: 120px; /* Reduced from 130px */
}

.atmos-table-container th:nth-child(12) {
    min-width: 250px; /* Reduced from 300px */
}

.atmos-table-container th:nth-child(13) {
    min-width: 150px; /* Reduced from 200px */
}

.atmos-table-container th {
    /* Fallback/Generic styles if not caught by thead th */
    position: sticky;
    top: 0;
    z-index: 10;
}

.atmos-table-container td {
    padding: 4px 6px;
    border-bottom: 1px solid #edf2f7;
    color: #3b3e42ff;
    font-size: 13px; /* Reduced font size */
    line-height: 1.5;
    vertical-align: middle;
}

.atmos-table-container tbody tr:nth-child(even) {
    background-color: #f8fafc;
}

.atmos-table-container tbody tr:hover {
    background-color: #ebf8ff;
    transition: background-color 0.2s ease;
}

.atmos-table-container td:nth-child(-n+7) {
    text-align: center;
    color: #1cb7afff;
    font-weight: bold;
    font-size: 18px;
}

.atmos-table-container a {
    color: #3182ce;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
}

.atmos-table-container a:hover {
    color: #2c5282;
    text-decoration: underline;
}

</style>

<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  const style = document.createElement('style')
  style.id = 'hide-aside-style'
  style.innerHTML = '.aside { display: none !important; }'
  document.head.appendChild(style)
})

onUnmounted(() => {
  const style = document.getElementById('hide-aside-style')
  if (style) {
    style.remove()
  }
})
</script>

<div class="atmos-table-container">

# <center> 云平台分析能力一览表</center>

<div class="table-wrapper">
<table>
<thead>
<tr>
<th><span style="min-width: 100px; white-space: nowrap; display: inline-block;">3' 转录组</span></th>
<th><span style="min-width: 100px; white-space: nowrap; display: inline-block;">5' + 免疫组库</span></th>
<th><span style="min-width: 100px; white-space: nowrap; display: inline-block;">FFPE单细胞转录组</span></th>
<th><span style="min-width: 100px; white-space: nowrap; display: inline-block;">全序列转录组</span></th>
<th><span style="min-width: 100px; white-space: nowrap; display: inline-block;">空间转录组</span></th>
<th><span style="min-width: 100px; white-space: nowrap; display: inline-block;">ATAC+RNA双组学</span></th>
<th><span style="min-width: 100px; white-space: nowrap; display: inline-block;">甲基化+RNA双组学</span></th>
<th><span style="min-width: 100px; white-space: nowrap; display: inline-block;">细胞群分类</span></th>
<th><span style="min-width: 80px; white-space: nowrap; display: inline-block;">分析类型</span></th>
<th><span style="min-width: 180px; white-space: nowrap; display: inline-block;">分析细节</span></th>
<th><span style="min-width: 130px; white-space: nowrap; display: inline-block;">云平台分析模块</span></th>
<th><span style="min-width: 300px; white-space: nowrap; display: inline-block;">分析结果</span></th>
<th><span style="min-width: 200px; white-space: nowrap; display: inline-block;">意义</span></th>
</tr>
</thead>
<tbody>
<tr>
<td>✓</td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td rowspan="5">主群或亚群分析</td>
<td>ESCC文章复现</td>
<td><a href="https://www.nature.com/articles/s41467-020-20019-0" target="_blank">Nature Communications发表的食管鳞状细胞癌单细胞文章云平台复现流程</a></td>
<td rowspan="5">资源总览-样例项目</td>
<td><a href="https://www.nature.com/articles/s41467-020-20019-0" target="_blank">Nature Communications发表的食管鳞状细胞癌单细胞文章云平台复现流程</a></td>
<td>云平台可以成功复现文章结果，具有完整、准确的分析能力</td>
</tr>
<tr>
<td>✓</td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>转录组流程</td>
<td rowspan="4">demo数据分析流程</td>
<td>人PBMC单细胞转录组数据分析流程</td>
<td rowspan="4">了解云平台分析能力与数据特征</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td>小鼠脑空间流程</td>
<td>小鼠脑SeekSpace单细胞空间数据分析流程</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td>人乳腺癌空间流程</td>
<td>人乳腺癌SeekSpace单细胞空间数据分析流程</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td>seekARC</td>
<td>寻因ATAC单细胞多组学数据分析流程</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td></td>
<td>✓</td>
<td rowspan="83">主群的标准分析</td>
<td rowspan="4">数据质控</td>
<td rowspan="4">根据Counts、Features和线粒体等（自定义）基因集过滤低质量细胞</td>
<td rowspan="8">基础分析-过滤步骤</td>
<td>测序数据UMI、基因数和线粒体基因表达统计</td>
<td>获取nfeature、ncount_RNA、mitoRNA，展示样本质量信息</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td></td>
<td>✓</td>
<td>所有样本/单样本UMI、基因数和线粒体基因表达过滤（个性化质控过滤，可以多次调整得到好的数据，比较好的可以作为宣传的东西）</td>
<td rowspan="3">过滤掉质量差的细胞，保留质量好的细胞数和基因数分析</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td></td>
<td>✓</td>
<td>自定义基因集过滤（满足个性化过滤需求，依据红细胞基因过滤，特殊物种整理线粒体基因过滤）</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td></td>
<td>✓</td>
<td>细胞数量过滤</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td rowspan="4">multiome 数据质控</td>
<td rowspan="4">根据UMI、Features、TSS、核小体、线粒体等过滤低质量细胞</td>
<td>多组学数据UMI、基因数、线粒体基因表达、TSS、核小体信号统计</td>
<td>获取nfeature_RNA/ATAC、nCount_RNA/ATAC、mito、TSS、nucleosome_signal统计，展示样品质量</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td>所有样本/单样本UMI、基因数、线粒体基因表达、TSS、核小体信号多过滤（个性化质控过滤，可以多次调整得到好的数据）</td>
<td rowspan="3">过滤掉质量差的细胞，剩余细胞、基因、fragments 用于后续分析</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td>自定义参数过滤(根据项目数据特点过滤TSS、核小体信号等)</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td>细胞数量过滤</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td></td>
<td>✓</td>
<td rowspan="4">多样本整合及可视化</td>
<td rowspan="4">1、降维分析<br>2、多样本整合和去批次分析</td>
<td rowspan="4">基础分析-整合步骤</td>
<td>Harmony、CCA、RPCA和Merge整合方法</td>
<td rowspan="4">可以去除样本的批次效应，使后续分析差异更来源样本本身</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td></td>
<td>✓</td>
<td>UMAP降维图（所有样本）（可查看整合结果反复调整整合方法，可以作为对外宣传的地方）</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td></td>
<td>✓</td>
<td>PCA肘图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td></td>
<td>✓</td>
<td>PCA热图（TOP 15）</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td></td>
<td>✓</td>
<td>聚类分析</td>
<td>聚类（cluster）分析</td>
<td>基础分析-聚类步骤</td>
<td>多组分辨率聚类结果及UMAP聚类可视化（所有样本）</td>
<td>根据细胞表达相似性获取细胞类群</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td rowspan="5">multiome 样品聚类及可视化</td>
<td rowspan="4">1、降维分析<br>2、多样本整合和去批次分析</td>
<td rowspan="4">基础分析-整合步骤</td>
<td>Harmony、CCA、Merge整合方法</td>
<td rowspan="5"></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td>ATAC UMAP降维图、RNA UMAP降纬图、RNA+ATAC 降纬图（所有样本）</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td>PCA肘图、LSI点图</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td>PCA热图（TOP 15）</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td>聚类(cluster）分析</td>
<td>基础分析-聚类步骤</td>
<td>聚类展示结果：ATAC 、RNA、ATAC+RNA 聚类结果</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td rowspan="2">multiome 组学peak-gene可视化分析</td>
<td rowspan="2">基因表达量小提琴图与peak表达峰图</td>
<td rowspan="2">交互分析</td>
<td>基因表达UMAP、tSNE展示</td>
<td>基因表达丰度展示</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td>peak-genes 连接展示</td>
<td>peak-genes 展示</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="6">Cluster间的Marker基因分析与可视化</td>
<td rowspan="10">marker基因、topN基因或者自定义基因集在cluster间的表达可视化</td>
<td rowspan="24">细胞注释</td>
<td>Cluster的Marker基因列表</td>
<td>得到各种cluster中的表达基因列表</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>Cluster的Marker基因Top 5 小提琴图</td>
<td rowspan="3">可视化各种cluster的基因表达</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>Cluster的Marker基因Top 5 热图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>Cluster的Marker基因Top 5 气泡图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>样本间各个Cluster的比例堆叠柱状图</td>
<td>可视化各种cluster的细胞数量占比</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>Marker基因的Featureplot图（UMAP和tSNE类型）（可快速查看目的基因的表达情况，可以作为对外宣传的地方）</td>
<td>可视化各种cluster的基因表达</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="4">Cluster间的自定义基因集可视化</td>
<td>Cluster的自定义基因集的小提琴图</td>
<td rowspan="4">可视化自己感兴趣的基因集合表达</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>Cluster的自定义基因集的热图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>Cluster的自定义基因集的气泡图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>Cluster的topN基因创建基因集</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="4">细胞类型注释</td>
<td rowspan="4">1、基于SingleR的细胞类型自动注释<br>2、基于AI大模型的细胞类型自动注释<br>3、基于marker特异性表达的手动注释和自动注释人工结果验证</td>
<td>SingleR自动注释（寻因自建和默认参考集）（整理多个组织类型的参考基因集，也可以对外进行宣传）</td>
<td>通过数据库注释细胞身份</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>细胞类型UMAP降维图</td>
<td rowspan="2">可视化各种细胞类型聚类结果</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>细胞类型tSNE降维图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>基于Marker或者基因集的手动注释</td>
<td>更加准确的判定细胞类型</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="6">细胞类型间的Marker基因分析与可视化</td>
<td rowspan="10">marker基因、top基因或者自定义基因集在细胞类型间的表达可视化</td>
<td>细胞类型的Marker基因列表</td>
<td>得到各种细胞类型中的表达基因列表</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>细胞类型的Marker基因Top 5 小提琴图</td>
<td rowspan="3">可视化各种细胞类型聚类结果</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>细胞类型的Top 5 基因热图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>细胞类型的Top 5 基因气泡图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>样本间各个细胞类型的比例堆叠柱状图</td>
<td>可视化各种细胞类型的细胞数量占比</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>Marker基因的Featureplot图（UMAP和tSNE类型）</td>
<td>可视化在哪种细胞中表达</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="4">细胞类型间的自定义基因集可视化</td>
<td>细胞类型间自定义基因集的小提琴图</td>
<td rowspan="4">可视化自己感兴趣的基因集合表达</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>细胞类型间自定义基因集的热图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>细胞类型间自定义基因集的气泡图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>细胞类型间的topN基因创建基因集</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="9">分析结果交互式绘图</td>
<td rowspan="9">TSNE、UMAP降维图、细胞占比柱状图和饼图、基因表达的小提琴图、热图、气泡图和Featureplot图的绘制和美化</td>
<td rowspan="9">画图工具</td>
<td>热图及美化</td>
<td rowspan="8">实现简单、便捷的参数选择分组条件、选择关注目标细胞或基因。展示特定基因或细胞类型的表达模式，探索数据的分布情况，提供直观的可视化效果。</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>小提琴图及美化</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>气泡图及美化</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>Featureplot图及美化</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>降维图及美化（PCA、UMAP和TSNE类型）</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>堆叠柱状图及美化</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>饼图及美化</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>可视化结果顺序调整</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>下载可视化结果</td>
<td>将绘图的结果下载到本地。</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="2">自定义细胞集</td>
<td rowspan="2">根据基因表达量对细胞进行分组</td>
<td rowspan="2">画图工具-添加标签功能</td>
<td>根据基因表达量，自定义细胞分类标签</td>
<td rowspan="2">将感兴趣的细胞定义标签</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>根据已有细胞分类，自定义细胞分类标签</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="6">基因集打分集可视化</td>
<td rowspan="6">基因集（signatures）在细胞类型或者cluster或分组中的表达分析及可视化</td>
<td rowspan="2">特征分析</td>
<td>自定义基因集</td>
<td rowspan="2">寻因内置基因集或自定义基因集，评估基因集合特征在哪种细胞中表达</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>AddModuleScore对基因集打分分析（单基因集/多基因集）</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="4">画图工具</td>
<td>基因集热图及美化</td>
<td rowspan="4">实现简单、便捷的参数选择分组条件、选择关注目标细胞或基因。展示特定基因或细胞类型的表达模式，探索数据的分布情况，提供直观的可视化效果。</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>基因集小提琴图及美化</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>基因集气泡图及美化</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>基因集Featureplot图及美化</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="11">样本/分组间同一Cluster的差异富集分析及可视化</td>
<td rowspan="11">1、比较每个Cluster在任意两组中的差异分析，包括火山图、热图<br>2、支持ORA和GSEA两种富集方法<br>3、差异基因的KEGG、GO、REACTOME、HALLMARK等数据库的富集分析</td>
<td rowspan="22">差异富集</td>
<td>同一Cluster在样本/分组间的占比图</td>
<td rowspan="22">通过建立比较方案挖掘数据，挖掘样本间或者cluster间的差异基因，再将差异基因富集到不同的功能通路解释生物学意义</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>同一Cluster在样本/分组间的差异基因分析结果列表</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>样本/分组间的上调/下调/全部差异基因/自定义基因集的火山图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>样本/分组间的上调/下调/全部差异基因/自定义基因集的热图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>样本/分组间的上调/下调/全部差异基因/自定义基因集的小提琴图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>自定义数据库</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>样本/分组间的上调/下调/全部差异基因富集分析结果列表</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>样本/分组间的上调/下调/全部差异基因数据库富集的气泡图（KEGG、GO、REACTOME、HALLMARK及自定义数据库等）</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>样本/分组间的上调/下调/全部整体差异基因火山图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>样本/分组间的上调/下调/全部整体富集分析气泡图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>样本/分组间的上调/下调/全部整体富集分析ES峰图（GSEA方法）</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="11">样本/分组间同一细胞类型的差异富集分析及可视化</td>
<td rowspan="11">1、比较每种细胞类型在任意两组中的差异分析，包括火山图、热图等<br>2、支持ORA和GSEA两种富集方法<br>3、差异基因的KEGG、GO、REACTOME、HALLMARK等数据库的富集分析</td>
<td>同一细胞类型在样本/分组间的占比图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>同一细胞类型在样本/分组间的差异基因分析结果列表</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>样本/分组间的上调/下调/全部差异基因/自定义基因集的火山图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>样本/分组间的上调/下调/全部差异基因/自定义基因集的热图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>样本/分组间的上调/下调/全部差异基因/自定义基因集的小提琴图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>自定义数据库</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>样本/分组间的上调/下调/全部差异基因富集分析结果列表</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>样本/分组间的上调/下调/全部差异基因数据库富集的气泡图（KEGG、GO、REACTOME、HALLMARK及自定义数据库等）</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>样本/分组间的上调/下调/全部整体差异基因火山图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>样本/分组间的上调/下调/全部整体富集分析气泡图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>样本/分组间的上调/下调/全部整体富集分析ES峰图（GSEA方法）</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="8">主群的标签管理</td>
<td rowspan="2">添加标签</td>
<td>根据基因表达量或基因集表达量，对细胞进行分组</td>
<td rowspan="8">辅助信息</td>
<td>根据基因表达量，自定义细胞分类标签</td>
<td rowspan="8">基于基因的表达量和细胞分类，自定义选择细胞标记</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>根据已有细胞分类，自定义细胞分类标签</td>
<td>根据已有细胞分类，自定义细胞分类标签</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>新增分辨率</td>
<td>重新调整细胞聚类数量</td>
<td>重新调整细胞聚类数量</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>合并2列metadata信息</td>
<td>合并meta.data中任意两列</td>
<td>根据现有meta.data中的任意2列进行合并成新的一列</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>合并不同流程metadata信息</td>
<td>将云平台中，亚群的细胞注释结果，合并到主群的meta.data</td>
<td>主群和亚群的细胞注释结果等进行合并</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>复制列</td>
<td>复制已有分类标签</td>
<td>便于在复制后的新标签中，自定义细胞分类</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>格式转换</td>
<td>数值型（连续）与因子型（不连续）类型之间转换</td>
<td>修改变量类型</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>上传metadata</td>
<td>根据细胞id，自定义细胞标签</td>
<td>可以将部分高级分析结果等导入到流程进行分析和可视化</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="3">主群的结果汇总</td>
<td rowspan="3">整理分析结果汇总成分析报告</td>
<td rowspan="3">分析结果汇总，生成并下载分析报告</td>
<td rowspan="3">结果总览</td>
<td>分析结果汇总、排序和删除</td>
<td rowspan="3">记录分析项目中保存的分析结果，下载到本地</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>分析结果设置隐藏或显示</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>结果报告下载</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="127">主群的高级分析</td>
<td rowspan="5">肿瘤细胞判定（InferCNV）</td>
<td rowspan="10">1、基于正常细胞进行肿瘤细胞识别鉴定<br>2、肿瘤细胞拷贝数（CNV）分析<br>3、肿瘤细胞异质性分析</td>
<td rowspan="127">高级分析</td>
<td>CNV分布热图</td>
<td rowspan="10">可以根据拷贝数异常判定肿瘤细胞</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>分组CNV分布热图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>分组聚类CNV分布热图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>CNV score Featureplot图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>CNV score 小提琴图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="5">肿瘤细胞判定（copyKAT）</td>
<td>正常细胞和肿瘤细胞数量统计</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>正常细胞和肿瘤细胞的UMAP映射图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>CNV分布热图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>肿瘤细胞亚克隆分析</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>肿瘤细胞亚克隆UMAP图</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td rowspan="2">肿瘤细胞判定（CopyscAT）</td>
<td rowspan="4">1、基于正常细胞进行肿瘤细胞识别鉴定<br>2、肿瘤细胞拷贝数（CNV）分析</td>
<td>CNV分布热图</td>
<td rowspan="4">结合RNA与peak数据，根据拷贝数异常判定肿瘤细胞</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td>可视化每条染色体的CNV打分UMAP图</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td>肿瘤细胞判定（ataCNV）</td>
<td rowspan="2">CNV分布热图</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td>肿瘤细胞判定（epiAneufinder）</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="10">轨迹分析（Monocle2）</td>
<td rowspan="15">1、探索或验证细胞发育分化的顺序<br>2、分析影响发育分化的节点基因</td>
<td>细胞的拟时轨迹分布图</td>
<td rowspan="15">按照发育时间绘制细胞分化的顺序，了解细胞发育、分化和功能转变的先后关系，以及细胞类型的形成和转变过程</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>State状态轨迹分布图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>样本拟时轨迹分布图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>细胞类型拟时轨迹分布图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>自定义标签的拟时轨迹分布图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>拟时轨迹上核心基因表达热图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>核心基因分组聚类后功能富集分析（GO、KEGG、Reactome）</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>拟时轨迹 "分支"基因表达热图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>拟时轨迹 "分支"基因top3基因可视化</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>拟时轨迹State分支细胞差异富集分析（GO、KEGG、Reactome）</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="5">轨迹分析（Monocle3）</td>
<td>细胞的pseudotime图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>细胞cluster轨迹分布图（整体和分组）</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>Pseudotime的Top10差异基因可视化</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>共调控基因模块分析</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>模块功能功能富集分析（GO、KEGG、Reactome）</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td rowspan="2">轨迹分析（ATAC_Monocle3）</td>
<td rowspan="2">1、染色质可及性模式的变化</td>
<td>拟时序轨迹图</td>
<td rowspan="2">染色质可及性模式的渐进变化，能够揭示基因调控网络的动态重塑过程</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td>可及性随伪时间变化趋势</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="4">RNA速率分析（scVelo）</td>
<td rowspan="4">1、探索或验证细胞发育关系；<br>2、寻找发育驱动基因</td>
<td>每个细胞类型中的RNA是否发生可变剪切占比图、UMAP和tSNE降维图</td>
<td rowspan="4">根据细胞中的RNA是否剪接的占比来判断细胞分化的路线</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>RNA速率分化轨迹图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>分化潜在时间（latent time）UMAP和tSNE图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>top300分化驱动基因热图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="3">分化潜能分析（CytoTRACE）</td>
<td rowspan="3">1、预测细胞的干性强弱，基于预测结果，在进行monocle分析的时候，定义根节点</td>
<td>细胞分化潜能预测结果列表</td>
<td rowspan="3">揭示单个细胞在其分化过程中的潜能</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>细胞分化潜能Featureplot图和箱线图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>与分化程度相关性top10基因柱状图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="6">细胞通讯分析（CellphoneDB）</td>
<td rowspan="17">1、探索细胞间的互作（交流、通讯）关系<br>2、寻找细胞间互作的配受体对<br>3、比较不同分组间的互作关系或者配受体基因表达</td>
<td>细胞通讯强度热图</td>
<td rowspan="24">揭示不同细胞类型之间的相互作用/交流的模式。从而深入理解细胞群体的协调性，揭示细胞间的相互调节以及细胞间信号传递</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>细胞通讯强度网络图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>趋化因子配受体对介导的通讯强度热图及top30配受体对相互作用气泡图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>生长因子配受体对介导的通讯强度热图及top30配受体对相互作用气泡图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>细胞外基质配受体对介导的通讯强度热图及top30配受体对相互作用气泡图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>自定义配受体对介导的通讯强度热图及top30配受体对相互作用气泡图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="5">细胞通讯分析（CellChat）</td>
<td>细胞通讯数量和强度网络图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>Top20受配体对所在的信号通路配受体对相互作用气泡图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>特定相互作用的配受体对相互作用气泡图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>细胞群的信号传导角色热图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>细胞群的全局信号通讯模式热图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="6">细胞通讯分析（NicheNet）</td>
<td>配体基因活性评分</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>配体活性得分Top20的基因在各种细胞群中的表达气泡图和热图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>配体与靶基因调控热图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>配体活性、配体表达、靶基因表达和配体靶调控潜力的组合图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>配体基因与受体基因关系热图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>配体与靶基因的关系circos图</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td rowspan="4">细胞通讯分析（stLearn）</td>
<td rowspan="4">综合考虑空间位置、基因表达和细胞类型等信息，用于细胞互作分析</td>
<td>受配体表达显著性列表</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td>显著互作的受配体散点图、柱状图</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td>细胞类型诊断图</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td>细胞通讯网络图、弦图和热图</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td rowspan="3">细胞通讯分析（COMMOT）</td>
<td rowspan="3">1、探索细胞间的互作（交流、通讯）关系<br>2、寻找细胞间互作的配受体对</td>
<td>受配体共表达图</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td>细胞通讯信号流可视化图</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td>细胞通讯网络图和弦图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="5">转录因子调控（pySCENIC）</td>
<td rowspan="5">1、特异性表达的转录因子和转座子分析<br>2、细胞特性或功能分析</td>
<td>各细胞群top5的regulon图</td>
<td rowspan="5">推断和重建细胞内的基因调控网络</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>各细胞群top5的regulon活性热图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>各细胞群top5的regulon活性Featureplot图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>各细胞群top5的regulon开放性热图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>各细胞群top 25 regulon热图（ 按Z值降序排序）</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>基因共表达分析（hdWGCNA）</td>
<td>1、基因共表达模块分析</td>
<td>基因共表达模块分析</td>
<td></td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="3">Cluster间的差异富集分析（DiffEnrich）</td>
<td rowspan="3">1、每个cluster中的相对于其他细胞的差异基因和富集分析</td>
<td>各Cluster的差异基因列表</td>
<td rowspan="3">获取cluster间的差异基因，再将cleuster高表达基因富集到不同的功能通路解释细胞表达什么功能。</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>各Cluster的top9的小提琴图、Featureplot图和热图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>各Cluster的差异基因GO、KEGG富集分析列表、气泡图和柱状图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="4">组间的差异富集分析（group_diffenrich）</td>
<td rowspan="4">1、每种细胞类型在组间的差异基因和富集分析</td>
<td>各细胞类型组间差异基因列表</td>
<td rowspan="4">获取组间的差异基因，再将高表达基因富集到不同的功能通路解释细胞表达什么功能。</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>各细胞类型组间top差异基因热图、小提琴图、气泡图和火山图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>各细胞类型的差异基因GO富集分析列表、气泡图、柱状图、弦图和Circle图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>各细胞类型的差异基因KEGG富集分析列表、气泡图、柱状图、map图、弦图和Circle图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="4">基因集变异分析（GSVA）</td>
<td rowspan="7">1、细胞特性或功能分析<br>2、功能差异分析</td>
<td>各细胞群的基因集打分列表</td>
<td rowspan="4">按照基因集打分揭示细胞特定的富集功能</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>各细胞群的top50基因集打分热图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>样本间或组间的top50基因集打分热图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>各细胞群在两组间基因集差异显著性分析</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="3">代谢活性分析（scMetabolism）</td>
<td>KEGG和REACTOME代谢通路活性得分的UMAP、tSNE或spatial(空间项目)图</td>
<td rowspan="3">揭示细胞富集在哪些代谢通路，判断细胞功能</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>KEGG和REACTOME通路在每个分组中活性平均得分气泡图和热图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>KEGG和REACTOME通路在不同分组的活性得分箱线图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="2">富集打分分析（scoring）</td>
<td rowspan="2">1.支持AUCell、Ucell、singscore、AddModuleScore四款算法打分</td>
<td>各基因集在不同细胞群间的得分降维图、小提琴箱线图</td>
<td rowspan="2">帮助识别和量化特定基因集在单细胞中的表达模式</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>各基因集在不同细胞群间的得分降维图、小提琴箱线图（按样本分组）</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>扰动分析（Augur）</td>
<td>1、评估细胞类型对实验扰动的反应，并对细胞类型进行优先级排序</td>
<td>细胞相应打分降维图、棒棒糖图和箱线图</td>
<td>识别哪肿细胞类型对外部刺激的反应最为明显</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td>生态位分析（Banksy_SpatialClustering）</td>
<td>1、结合基因表达和空间位置信息，识别组织中具有相似表达模式的空间区域</td>
<td>空间聚类可视化</td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td rowspan="2">生态位分析（CellCharter）</td>
<td rowspan="2">1、空间基因表达模式与共定位</td>
<td>单样本细胞类型共定位热图</td>
<td rowspan="2">识别具有特定细胞类型组成和功能的空间区域，反映了细胞在组织中的分布模式以及它们在生理和病理过程中扮演的角色。</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td>多样本比较细胞类型共定位热图</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td rowspan="3">共定位分析（SpaGene）</td>
<td rowspan="3">1、空间基因表达模式分析<br>2、配受体基因对共定位</td>
<td>空间表达模式(pattern)可视化</td>
<td rowspan="3">识别空间模式与配受体共定位</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td>每一个pattern中Top5基因的表达热图</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td>受配体基因空间表达</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td rowspan="2">共定位分析（MISTy）</td>
<td rowspan="2">1、细胞类型共定位分析</td>
<td>细胞类型共定位热图</td>
<td rowspan="2">确定不同细胞类型在空间上的相对位置和共存情况，推断出它们之间可能存在的相互作用和通讯机制</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td>细胞类型共定位网络图</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td rowspan="4">差异可及性分析（ATAC_DiffEnrich）</td>
<td rowspan="4">1、差异可及性的motify 分析及motif分析</td>
<td>细胞群间差异Peaks列表</td>
<td rowspan="4">研究细胞群之间的差异可及性区域</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td>top peaks可视化</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td>top peaks的motif分析</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td>差异peaks附近的基因及其富集结果列表与可视化</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td rowspan="3">Peak-Gene关联分析（ATAC_Peak2Gene）</td>
<td rowspan="3">1、Peak-to-Gene关联分析</td>
<td>染色质开放区域(peaks)与基因表达之间的相关性热图</td>
<td rowspan="3">将开放染色质区域（peaks）与其可能调控的基因关联起来的方法，推断可能的调控关系</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td>最显著Top10的peak-gene关联的基因火山图</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td>所有peak-gene对的相关系数曲线图</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td rowspan="3">基因活性分析（Geneactivity）</td>
<td rowspan="3">1、细胞基因活力计算及基因活力差异分析和可视化<br>2、细胞类型间在基因表达与ATAC可及性的相关性分析</td>
<td>基因活力分析</td>
<td rowspan="3">研究DNA的开放程度与基因的潜在转录活性</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td>细胞类型间基因活力差异分析</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td>细胞类型间基因表达、ATAC可及性相关性分析</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td rowspan="2">可变剪切分析（rMATS）</td>
<td rowspan="2">1、差异可变剪切事件分析与统计</td>
<td>差异可变剪接分析</td>
<td rowspan="2">研究特定生物学过程或疾病相关的关键可变剪接</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td>5种可变剪接事件的数目统计柱状图</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td rowspan="2">融合基因分析（Fusion）</td>
<td rowspan="2">1、融合基因的鉴定与可视化</td>
<td>融合基因检测结果列表</td>
<td rowspan="2">准确识别和分析基因融合对于理解癌症的分子机制和开发靶向治疗具有重要意义</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td>融合基因可视化</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td rowspan="4">突变分析（mut）</td>
<td rowspan="4">1、突变位点统计与可视化<br>2、突变位点差异和富集分析<br>3、共突变位点统计与可视化<br>4、共突变位点差异和富集分析</td>
<td>突变位点统计分析与可视化</td>
<td rowspan="4">了解突变位点及其与性状的影响</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td>突变位点差异和富集分析</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td>共突变位点统计分析与可视化</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td>共突变位点差异和富集分析</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td rowspan="6">lncRNA与基因共表达分析（LncCoExpression）</td>
<td rowspan="6">1、LncRNA表达分析<br>2、LncRNA差异分析<br>3、LncRNA-protein-coding RNA共表达网络分析<br>4、LncRNA-protein-coding RNA共共表达模块富集分析</td>
<td>LncRNA表达情况展示</td>
<td rowspan="6">构建LncRNA-protein-coding RNA共表达网络，并鉴定关键的功能模块，深入理解LncRNA的生物学功能和作用机制</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td>差异表达基因展示</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td>lncRNA共表达分析</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td>共表达模块富集分析</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td>lncRNA-protein-coding RNA共表达分析</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td>lncRNA-protein-coding RNA共表达模块富集分析</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td rowspan="10">RNA-MET双组标准分析</td>
<td rowspan="10">1、甲基化数据整合与聚类<br>2、多组学联合可视化<br>3、差异表达基因(DEG)分析<br>4、差异甲基化基因(DMG)分析<br>5、差异甲基化区间(DMB)分析<br>6、多组学关联分析</td>
<td>甲基化数据整合分析降维图</td>
<td rowspan="10">通过整合单细胞甲基化与转录组数据，揭示表观遗传修饰与基因表达的调控关系，从而解析细胞异质性并挖掘关键分子机制。</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td>cluster和细胞类型样本间占比柱状图</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td>质控指标与甲基化水平UMAP分布图</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td>质控指标在cluster与细胞类型间的小提琴表达分布图</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td>甲基化数据的双胞判定</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td>不同细胞类型间差异甲基化区分析</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td>不同细胞类型间差异基因分析</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td>不同细胞类型间差异甲基化基因分析与top基因表达UMAP图</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td>转录组和甲基化数据关联分析</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td>差异甲基化基因的GO和KEGG富集分析气泡图与柱状图</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td></td>
<td>✓</td>
<td rowspan="2">亚群标准分析</td>
<td>特定大群细胞选择</td>
<td>根据标签，分离出亚群或关注的细胞群</td>
<td>亚群选择</td>
<td rowspan="2"></td>
<td>筛选出某个细胞类型进行精细化分析</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td></td>
<td>✓</td>
<td>分析类型同主群</td>
<td>分析类型同主群</td>
<td>分析模块同主群</td>
<td></td>
</tr>
<tr>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td rowspan="21">亚群高级分析</td>
<td rowspan="11">BCR分析</td>
<td rowspan="11">1、不同组或样本中，VJ基因Gene Usage分析；<br>2、克隆丰度分析<br>3、共有克隆分析<br>4、克隆扩增和克隆收缩分析<br>5、克隆指数分析<br>6、B细胞突变和进化树分析</td>
<td rowspan="21">高级分析</td>
<td>BCR检出情况umap图、tsne图和柱状图及相应表格数据</td>
<td rowspan="11">理解B细胞的免疫反应；通过分析BCR的V(D)J重排和CDR3区域的序列，可以揭示B细胞受体的多样性</td>
</tr>
<tr>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>每种亚群的V和J基因的Gene Usage柱状图</td>
</tr>
<tr>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>CDR3长度分布柱状图和折线图</td>
</tr>
<tr>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>每种细胞类型的TCR克隆丰度折线图及组间的克隆丰度折现图</td>
</tr>
<tr>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>每种亚群的克隆型占比柱状图，克隆丰度分组柱状图</td>
</tr>
<tr>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>每种亚群的top5克隆型在亚群之间的分布占比柱状图</td>
</tr>
<tr>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>共有克隆upset图、overlap热图和特有克隆柱状图</td>
</tr>
<tr>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>克隆扩增收缩图和克隆扩增指数箱型图</td>
</tr>
<tr>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>克隆指数柱状图（Chao1、Simpson）</td>
</tr>
<tr>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>B细胞的突变分析</td>
</tr>
<tr>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>B细胞克隆进化树</td>
</tr>
<tr>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td rowspan="10">TCR分析</td>
<td rowspan="10">1、不同组或样本中，VJ基因Gene Usage分析；<br>2、克隆丰度分析<br>3、共有克隆分析<br>4、克隆扩增和克隆收缩分析<br>5、克隆指数分析<br>6、TCR病理注释分析</td>
<td>TCR检出情况umap图、tsne图和柱状图及相应表格数据</td>
<td rowspan="10">深入理解T细胞的免疫反应和适应性免疫系统的功能；通过分析TCR的基因重排和CDR3区域的序列，可以了解T细胞库的多样性；TCR分析可以帮助识别特定免疫应答中的主导克隆；TCR分析有助于鉴定能够识别特定抗原（如病原体衍生的肽段或肿瘤抗原）的T细胞；</td>
</tr>
<tr>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>每种亚群的V和J基因的Gene Usage柱状图</td>
</tr>
<tr>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>CDR3长度分布柱状图和折线图</td>
</tr>
<tr>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>每种细胞类型的TCR克隆丰度折线图及组间的克隆丰度折现图</td>
</tr>
<tr>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>每种亚群的克隆型占比柱状图，克隆丰度分组柱状图</td>
</tr>
<tr>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>每种亚群的top5克隆型在亚群之间的分布占比柱状图</td>
</tr>
<tr>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>共有克隆upset图、overlap热图和特有克隆柱状图</td>
</tr>
<tr>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>克隆扩增收缩图和克隆扩增指数箱型图</td>
</tr>
<tr>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>克隆指数柱状图（Chao1、Simpson）</td>
</tr>
<tr>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>TCR序列进行病理注释柱状图</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td rowspan="6">主群和亚群空间标准分析</td>
<td rowspan="6">seekSpae空间转录组数据分析和可视化</td>
<td rowspan="6">1、细胞类型、基因和基因集表达的空间分布<br>2、细胞圈选和标记<br>3、背景图片调整和切割、还原</td>
<td rowspan="6">交互分析</td>
<td>细胞空间分布可视化</td>
<td>直观看到细胞映射的空间位置</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td>基因或基因集在空间中的表达可视化；</td>
<td>直观看到基因在哪些空间位置表达</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td>细胞轨迹分析（沿轨迹的细胞分布和基因表达）</td>
<td>表征组织结构的边界或呈现空间位置上各功能相关基因集差异</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td>空间切片图片色调、饱和度、对比度等调整</td>
<td>空间切片图片更美观清晰</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td>细胞圈选和重新标记细胞</td>
<td>根据区域标记自己感兴趣的细胞。</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>✓</td>
<td></td>
<td></td>
<td>空间切片的位置调整及还原</td>
<td>使切片图和细胞、基因位置对应</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td rowspan="3">主群和亚群分析</td>
<td rowspan="3">寻小因</td>
<td rowspan="3">1、查询组织解离和数据质控标准<br>2、细胞AI注释和marker查询<br>3、常见问题AI智能专家</td>
<td rowspan="3">智能咨询</td>
<td rowspan="3">/</td>
<td rowspan="3">1、查看数据质量，避免实验风险<br>2、辅助用户快速精准识别细胞身份<br>3、即时提供线上技术支援，降低项目失败风险、解决平台问题；</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
</tr>
<tr>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
<td>✓</td>
</tr>
</tbody>
</table>

</div>
</div>