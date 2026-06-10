---
title: 画图工具
author: 高瑞峰
date: 2025-07-23
tags:
  - SeekSoul Online
---

# 画图工具

“画图工具”模块提供了添加多条件标签的功能，您可以用它绘制各种图表，包括小提琴图、降维图、FeaturePlot、DotPlot、堆叠柱状图和饼图等。无论是展示特定基因或细胞类型的表达模式，还是探索数据分布，这些图表都能提供直观的可视化效果，助您更好地理解数据并进行进一步分析和解释。

<div align="center">
<img src="./SeekSoulOnline_guide.src/画图工具整体介绍.png" width="40%" />
</div>

> [!NOTE]
> “画图工具”支持多种主流可视化类型，建议根据分析目标选择合适的图表类型。

## 下载报告

点击【下载报告】，即可将“画图工具”的所有图表结果以报告形式下载到本地计算机。请注意，下载过程中可能需要等待大约半分钟时间。

## 添加标签

点击【添加标签】，弹出添加标签页面，按照条件对 Barcode 进行标记。

1. 在“名称”处对新标签进行命名。
2. “运算符”包括等于 “==” 和不等于 “≠”，“条件”包括交集 “and” 和并集 “or”。通过“运算符”和“条件”设置多个条件共同定位某群关键细胞。
3. 不满足条件的 Barcode 默认标记为 “Undefined”，也可自定义标记。
4. 点击【添加标签】，完成新标签添加，即可在“画图工具”中根据新标签进行绘图分析。

<div align="center">
<img src="./SeekSoulOnline_guide.src/添加标签.png" width="40%" />
</div>

## 添加图组

### 手动添加

1. 点击【添加图组】，弹出输入图组名称窗口，输入图组名称并点击【确定】，即可在“画图工具”中看到新命名的图组。

<div align="center">
<img src="./SeekSoulOnline_guide.src/添加图组.png" width="40%" />
</div>

2. 长按并上下拖动“十字花”，可调整图组顺序。
3. 点击图组名称右侧的下拉框，展开或收缩图组结果。收缩状态下，长按并拖动“十字花”调整图组顺序。
4. 点击【修改】，弹出输入图组名称窗口，输入新名称并点击【确定】，修改当前图组名称。
5. 点击【删除】，删除当前图组。

<div align="center">
<img src="./SeekSoulOnline_guide.src/image-23-52cd4008.png" width="40%" />
</div>

### 自动编排

点击【添加图组】右侧的下拉框，选择【自动编排-标准】，填写合适参数，自动创建“质控”和“细胞注释”图组，自动绘制降维图、mito、nFeature_RNA 和 nCount_RNA 等多种结果图片。

<div align="center">
<img src="./SeekSoulOnline_guide.src/image-24-6813d41c.png" width="40%" />
</div>

<div align="center">
<img src="./SeekSoulOnline_guide.src/image-25-d59923f0.png" width="40%" />
</div>

## 添加模块

### 配色方案

点击寻因推荐下拉框，即可在画图工具模块选择不同配色方案，包括 npg、lancet、aaas、jco、gsea、ucscgb、igv 和寻因推荐。

<div align="center">
<img src="./SeekSoulOnline_guide.src/配色方案.png" width="40%" />
</div>

### 添加模块

点击【添加模块】，在“标题”处输入图表标题，在“描述”处对图表信息进行描述，选择合适的图表类型（小提琴图、降维图、FeaturePlot、DotPlot 或分组统计图）进行绘图分析。

<div align="center">
<img src="./SeekSoulOnline_guide.src/image-27-f38e1bfc.png" width="40%" />
</div>

### 小提琴图

可按分组类型绘制基因表达量小提琴图。

1. features：输入要绘制的基因，下拉框模糊匹配搜索，选择要绘制的基因，可连续输入多个基因。点击【创建基因集】，弹出输入基因集名称窗口，输入基因集名称，点击【确定】完成基因集创建。输入要绘制的基因集名称，下拉框模糊匹配搜索，选择要绘制的基因集，快速对基因集进行绘图。点击【展开】查看全部基因名称，点击【折叠】折叠基因名称。

<div align="center">
<img src="./SeekSoulOnline_guide.src/图片1.png" width="40%" />
</div>

<div align="center">
<img src="./SeekSoulOnline_guide.src/图片2.png" width="40%" />
</div>

2. 分组因子：对 meta.data 中的分类标签和【添加标签】中新添加的标签，选择一个来按组（颜色）对细胞进行分类，必填。可根据二级标签，只展示部分分组（颜色）。

<div align="center">
<img src="./SeekSoulOnline_guide.src/分组因子.png" width="40%" />
</div>

3. 拆分因子：对 meta.data 中的分类标签和【添加标签】中新添加的标签，选择一个将图形拆分为不同子图，非必填。可根据二级标签，只展示部分分组。点击分组因子和拆分因子后的箭头可快速调整顺序。

<div align="center">
<img src="./SeekSoulOnline_guide.src/image-28-b566ff6b.png" width="40%" />
</div>

4. data：选择使用哪个数据槽 (slot) 的基因表达数据进行可视化展示，默认是 data。
5. 比较对：当分组因子有多个时，可标注两两比较 p 值，非必填。可根据二级标签，只展示部分分组的差异比较。
6. 选择合适的绘图参数，点击【提交】，绘制小提琴图。

<div align="center">
<img src="./SeekSoulOnline_guide.src/提交.png" width="40%" />
</div>

<div align="center">
<img src="./SeekSoulOnline_guide.src/image-29-3b300819.png" width="40%" />
</div>

7. 点击【删除】，删除当前小提琴图结果。

<div align="center">
<img src="./SeekSoulOnline_guide.src/删除.png" width="40%" />
</div>

### 降维图

可按分组或样本拆分情况绘制降维图。

1. 降维数据：UMAP 方式、tSNE 方式、PCA 方式。
2. 分组因子：对 meta.data 中的分类标签和【添加标签】中新添加的标签，选择一个来按组（颜色）对细胞进行分类，必填。可根据二级标签，只展示部分分组（颜色）。
3. 拆分因子：对 meta.data 中的分类标签和【添加标签】中新添加的标签，选择一个将图形拆分为不同子图，非必填。可根据二级标签，只展示部分分组。
4. 高亮细胞：输入关注细胞的 Barcode，高亮显示该细胞，非必填。
5. 常规降维图：

<div align="center">
<img src="./SeekSoulOnline_guide.src/image-30-ea735129.png" width="40%" />
</div>

<div align="center">
<img src="./SeekSoulOnline_guide.src/降维.png" width="40%" />
</div>

6. 高亮细胞降维图：

<div align="center">
<img src="./SeekSoulOnline_guide.src/高亮.png" width="40%" />
</div>

<div align="center">
<img src="./SeekSoulOnline_guide.src/image-32-8e0cdeb0.png" width="40%" />
</div>

### FeaturePlot

可按分组类型绘制基因表达量 FeaturePlot 图。

1. features：输入要绘制的基因，下拉框模糊匹配搜索，选择要绘制的基因，可连续输入多个基因。点击【创建基因集】，弹出输入基因集名称窗口，输入基因集名称，点击【确定】完成基因集创建。输入要绘制的基因集名称，下拉框模糊匹配搜索，选择要绘制的基因集，快速对基因集进行绘图。点击【展开】查看全部基因名称，点击【折叠】折叠基因名称。
2. 降维数据：UMAP 方式、tSNE 方式、PCA 方式。
3. 拆分因子：对 meta.data 中的分类标签和【添加标签】中新添加的标签，选择一个将图形拆分为不同子图，非必填。可根据二级标签，只展示部分分组。
4. 是否排序：是否按照表达量顺序绘制细胞，默认是按照表达量顺序绘制。

<div align="center">
<img src="./SeekSoulOnline_guide.src/image-33-e8103ac3.png" width="40%" />
</div>

<div align="center">
<img src="./SeekSoulOnline_guide.src/image-34-e804602e.png" width="40%" />
</div>

### DotPlot

可按分组类型绘制基因表达量 DotPlot 图。

1. features：输入要绘制的基因，下拉框模糊匹配搜索，选择要绘制的基因，可连续输入多个基因。点击【创建基因集】，弹出输入基因集名称窗口，输入基因集名称，点击【确定】完成基因集创建。输入要绘制的基因集名称，下拉框模糊匹配搜索，选择要绘制的基因集，快速对基因集进行绘图。点击【展开】查看全部基因名称，点击【折叠】折叠基因名称。
2. 分组因子：对 meta.data 中的分类标签和【添加标签】中新添加的标签，选择一个来按组对细胞进行分类，必填。可根据二级标签，只展示部分分组。
3. 拆分因子：选择 meta.data 中的分类标签或【添加标签】中新添加的标签，在一个气泡图中拆分展示，非必填。可根据二级标签，只展示部分分组。

<div align="center">
<img src="./SeekSoulOnline_guide.src/拆分因子.png" width="40%" />
</div>

<div align="center">
<img src="./SeekSoulOnline_guide.src/dotplot.png" width="40%" />
</div>

### 分组统计图

#### 堆叠柱状图

1. 分组因子：对 meta.data 中的分类标签和【添加标签】中新添加的标签，选择一个来按组（颜色）对细胞进行分类，必填。可根据二级标签，只展示部分分组（颜色）。
2. 拆分因子：对 meta.data 中的分类标签和【添加标签】中新添加的标签，选择一个将图形拆分为不同子图，非必填。可根据二级标签，只展示部分分组。

<div align="center">
<img src="./SeekSoulOnline_guide.src/image-37-c4c57c61.png" width="40%" />
</div>

<div align="center">
<img src="./SeekSoulOnline_guide.src/image-38-cca0dcc3.png" width="40%" />
</div>

<div align="center">
<img src="./SeekSoulOnline_guide.src/堆叠柱状图统计表.png" width="40%" />
</div>

#### 饼图

1. 分组因子：对 meta.data 中的分类标签和【添加标签】中新添加的标签，选择一个来按组（颜色）对细胞进行分类，必填。可根据二级标签，只展示部分分组（颜色）。
2. 拆分因子：对 meta.data 中的分类标签和【添加标签】中新添加的标签，选择一个将图形拆分为不同子图，非必填。可根据二级标签，只展示部分分组。

<div align="center">
<img src="./SeekSoulOnline_guide.src/饼图.png" width="40%" />
</div>

<div align="center">
<img src="./SeekSoulOnline_guide.src/饼图1.png" width="40%" />
</div>

<div align="center">
<img src="./SeekSoulOnline_guide.src/饼图2.png" width="40%" />
</div>

#### 热图

1. features：输入要绘制的基因，下拉框模糊匹配搜索，选择要绘制的基因，可连续输入多个基因。点击【创建基因集】，弹出输入基因集名称窗口，输入基因集名称，点击【确定】完成基因集创建。输入要绘制的基因集名称，下拉框模糊匹配搜索，选择要绘制的基因集，快速对基因集进行绘图。点击【展开】查看全部基因名称，点击【折叠】折叠基因名称。
2. 分组因子：对 meta.data 中的分类标签和【添加标签】中新添加的标签，选择一个来按组对细胞进行分类，必填。可根据二级标签，只展示部分分组。
3. 拆分因子：对 meta.data 中的分类标签和【添加标签】中新添加的标签，选择一个将图形拆分为不同子图，非必填。可根据二级标签，只展示部分分组。

<div align="center">
<img src="./SeekSoulOnline_guide.src/热图1.png" width="40%" />
</div>

<div align="center">
<img src="./SeekSoulOnline_guide.src/热图2.png" width="40%" />
</div>

<div align="center">
<img src="./SeekSoulOnline_guide.src/热图3.png" width="40%" />
</div>

#### 图片美化

点击图片右侧的铅笔按钮，弹出图片美化界面，可以对标题、图例、图形大小及颜色进行修改，还可以下载多种格式的图片。

<div align="center">
<img src="./SeekSoulOnline_guide.src/image-46-3e3836c5.png" width="40%" />
</div>

> [!TIP]
> 建议合理利用标签、分组和拆分因子，灵活组合可视化方式，提升数据解读效率。

## 页面左侧是图组和模块目录，可快速选择并查看不同图组下不同模块中的图表结果
