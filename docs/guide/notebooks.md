---
title: 个性化分析
author: SeekGene
date: 2026-02-27
tags:
  - SeekSoul Online
---

# 个性化分析

## 平台简介

本平台实现了 **可视化分析流程** 与 **Jupyter 代码环境** 的深度融合。除了提供标准化的云端分析报告外，我们更打造了 **免配置、即开即用** 的 Jupyter 云工作台。

环境内已预装 **Scanpy, Seurat, Monocle3, CellChat** 等数十种主流单细胞及空间组学分析工具（支持 Python/R 双语言）。您无需搭建复杂的本地环境，即可直接对云平台数据进行深度的个性化挖掘与定制绘图。

> [!TIP]
> **注意：** 该功能为 **额外付费增值服务**，需单独购买开通.

## 如何进入 Jupyter 环境

1.  **进入项目详情**：登录云平台，依次点击 **资源总览 -> 我的项目 -> 查看**，进入项目详情页面。
2.  **启动配置页**：点击页面右上角的 **“个性化分析”** 蓝色按钮，进入配置页面。
3.  **启动环境**：点击配置页面右上角的 **“快速运行”** 蓝色按钮。系统将自动分配计算资源并启动 Jupyter 环境，随后直接跳转至操作界面。

<div align="center">
<img src="/processed-assets/ba06d78f40-view.DvwhxnAH.png" width="40%" />
</div>

<div align="center">
<img src="/processed-assets/f704eba935-Custom_Analysis.DzJqKD4q.png" width="40%" />
</div>

## 平台数据目录结构

Jupyter 默认工作路径为 `/home/{UserName}/workspace/`（`{UserName}` 为您的用户名）。该目录下包含三个核心文件夹，各自用途如下：

<div align="center">
<img src="/processed-assets/1e324f17cf-uxmn8d.C-hu50zp.png" width="40%" />
</div>

### data 文件夹 (只读)

*   **路径**：`/home/{UserName}/workspace/data/`
*   **用途**：存放各个分析流程的分析数据，比如包含注释和分析信息的 RDS 以及进行了 Monocle2 等高级分析的结果文件。
*   **挂载说明**：
    *   默认不挂载流程数据。需通过右侧 **“操作” -> 【挂载数据】** 功能勾选对应流程。
    *   勾选后，对应流程数据（如 `input.rds`, `meta.tsv`）将出现在该目录下；取消勾选即卸载。
*   **数据结构**：
    *   流程文件夹下包含 `input.rds` (表达矩阵) 和 `meta.tsv` (元数据)。
    *   如需对高级分析结果进行图片绘制，建议将数据复制到 `project` 目录下解压使用。

**数据读取示例（R语言）**：

```r
library(Seurat)

# 1. 读取表达矩阵与元数据
# 路径示例：/home/demo-user/workspace/data/流程编号/
input <- readRDS("/home/demo-seekgene-com/workspace/data/AY1752565399550/input.rds")
meta <- read.table("/home/demo-seekgene-com/workspace/data/AY1752565399550/meta.tsv", header=TRUE, sep="\t", row.names = 1)

# 2. 合并为完整的 Seurat 对象
data <- AddMetaData(input, meta)

# 3. 查看元数据前几行
head(data@meta.data)
```

### jp 文件夹 (只读)

*   **路径**：`/home/{UserName}/workspace/jp/`
*   **用途**：主要用于存放关闭实例后，由 Jupyter 转换生成的 HTML 报告文件。

### project 文件夹 (可读写)

*   **路径**：`/home/{UserName}/workspace/project/{UserName}/`
*   **用途**：**用户主工作目录**。
    *   请务必将您的 **分析脚本（.ipynb）** 和 **结果文件** 保存在此目录下。
    *   **重要**：只有保存在此目录下的数据会被持久化存储。建议您直接进入该目录进行所有分析操作。
    *   **权限**：您对自己的目录拥有读写权限，对他人的目录仅有只读权限。

## 页面功能与操作指南

在 Jupyter 页面右下侧的 **“操作”** 悬浮菜单中，集成了平台的核心辅助功能。

<div align="center">
<img src="/processed-assets/1125780e23-image.Bqj69Yb9.png" width="40%" />
</div>

### 数据挂载

*   **挂载我的数据**：挂载您在寻因分析平台上传的原始矩阵及核心分析数据。
*   **挂载流程数据**：挂载“个性化分析”项目下的标准化流程数据及高级分析结果。挂载后可进行自定义绘图和二次分析。

<div align="center">
<img src="/processed-assets/f6637bd4c4-guaizaishuju.DiCa0i1Q.png" width="40%" />
</div>

### 模板库管理

*   **模板库**：下载官方提供的标准分析模板。下载后修改输入数据路径即可快速开始分析。

<div align="center">
<img src="/processed-assets/dab89c4cbf-xiazaimuban.38bNFyHG.png" width="40%" />
</div>

*   **上传模板**：上传您编写的分析模板。
    *   **私人模板库**：仅自己可见，便于跨项目复用代码。
    *   **公共模板库**：分享给团队或所有用户使用。

<div align="center">
<img src="/processed-assets/ff78bb964c-shangchuanmuban._tm7rYjr.png" width="40%" />
</div>

### 资源与会话管理

*   **重置资源**：当计算资源（CPU/内存）不足时，可点击此按钮调大配置。
    *   注意：调整资源需重启实例，不会保留临时变量，**必须从头重新执行**代码。
*   **关闭页面**：分析完成后，请手动点击此按钮关闭实例以释放资源。
*   **延长时间**：实例默认启动 **0.5小时** 后自动关闭。如需长时间分析，请务必点击此按钮延长使用时间。

<div align="center">
<img src="/processed-assets/51e751b0bd-shezhiguanli.BXPbtLmW.png" width="40%" />
</div>

## Jupyter 环境与数据分析操作

### 选择分析环境

1.  **进入工作区**：在左侧文件浏览器中，双击进入 `project/{UserName}` 目录。
2.  **选择 Kernel**：在右侧 Launcher（启动器）面板中选择环境。
    *   **推荐**：**`common_r`**（集成常用 R 语言生信包，满足绝大多数需求）。
    *   **其他**：也可根据需求选择 Python（Scanpy）或其他特定环境。

<div align="center">
<img src="/processed-assets/2544cb139e-xuanzehuanjing.DWd5_ZXQ.png" width="40%" />
</div>

### 创建与编写代码

1.  **新建文件**：点击环境图标（如 `common_r`），自动在当前目录下创建 `.ipynb` 文件。
2.  **编写运行**：在单元格中输入代码，点击工具栏 ▶ 按钮运行。
3.  **保存结果**：使用 `Ctrl+S` 保存。生成的图片和文件将保存在您的 `project` 目录下。

<div align="center">
<img src="/processed-assets/61ba249d5a-coding.C77khvQV.png" width="40%" />
</div>

### 上传外部数据

如需分析本地私有数据：

1.  点击左侧文件浏览器上方的 **"Upload"** 图标（向上箭头）。
2.  选择本地文件上传。
3.  上传完成后，在代码中直接读取该文件名即可。

<div align="center">
<img src="/processed-assets/5f59716997-updata.DWQNotdn.png" width="40%" />
</div>

### 下载结果数据

如需下载分析结果数据：

1.  在左侧文件浏览器中，选择要下载的文件。
2.  右击文件，选择 **"Download"** 进行下载。

<div align="center">
<img src="/processed-assets/d0cace27f4-xiazaishuju.BnMJUNGj.png" width="40%" />
</div>

## 自定义环境管理
若平台预置环境无法满足您的需求，您可以按照以下步骤创建自定义环境并注册内核。

### R 环境

#### 创建 R 环境

```bash
micromamba create --prefix /jp_envs/envs_user/{UserId}/DemoR # 使用micromamba创建一个新的R环境，{UserId}为uid
micromamba activate /jp_envs/envs_user/{UserId}/DemoR # 激活刚创建的R环境
micromamba install -c conda-forge -c bioconda -c defaults r-irkernel r-seurat=4.* # 在激活的环境中安装R相关包：r-irkernel用于Jupyter内核，r-seurat用于单细胞分析
```

启动 R 交互式环境：

```r
R # 启动R交互式环境
Sys.setenv(PATH = paste("/home/mambauser/bin:/home/mambauser/env/jupyter/bin",Sys.getenv("PATH"), sep = ":")) # 设置R环境中的PATH变量
IRkernel::installspec(name = 'DemoR', displayname = 'DemoR', prefix = '/jp_envs/kernels_user/{UserId}/') # 安装R内核到Jupyter，指定内核名称和显示名称，以及安装路径
q() # 退出R环境
```

注册内核：

```bash
jupyter kernelspec install /jp_envs/kernels_user/{UserId}/share/jupyter/kernels/demor --user # 将R内核安装到用户Jupyter环境中，注意内核名称使用小写
micromamba deactivate # 停用当前环境
```

#### 删除 R 环境

```bash
jupyter-kernelspec remove demor # 从Jupyter中移除R内核，注意删掉kernel的名称为小写
micromamba env remove --prefix /jp_envs/envs_user/{UserId}/DemoR # 删除自己创建的R环境
```

### Python 环境

#### 创建 Python 环境

```bash
micromamba create --prefix /jp_envs/envs_user/{UserId}/DemoPython # 使用micromamba创建一个新的Python环境
micromamba activate /jp_envs/envs_user/{UserId}/DemoPython # 激活刚创建的Python环境
micromamba install -c conda-forge -c bioconda -c defaults ipykernel scanpy # 在激活的环境中安装Python相关包：ipykernel用于Jupyter内核，scanpy用于单细胞分析
python -m ipykernel install --name DemoPython --display-name "DemoPython" --prefix /jp_envs/kernels_user/{UserId}/ # 安装Python内核到Jupyter，指定内核名称、显示名称和安装路径
jupyter kernelspec install /jp_envs/kernels_user/{UserId}/share/jupyter/kernels/demopython --user # 将Python内核安装到用户Jupyter环境中，注意内核名称使用小写
micromamba deactivate # 停用当前环境
```

#### 删除 Python 环境

```bash
jupyter-kernelspec remove demopython # 从Jupyter中移除Python内核，注意删掉kernel的名称为小写
micromamba env remove --prefix /jp_envs/envs_user/{UserId}/DemoPython # 删除自己创建的Python环境
```
