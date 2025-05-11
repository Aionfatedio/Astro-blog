---
title: Markdown 扩展功能
published: 2024-05-01
updated: 2024-11-29
description: '了解更多关于 Fuwari 中 Markdown 功能的信息'
image: ''
tags: [演示, 示例, Markdown, Fuwari]
category: '示例'
draft: false 
---

## GitHub 仓库卡片

您可以添加动态卡片链接到GitHub仓库，页面加载时，仓库信息会从GitHub API获取。

::github{repo="Fabrizz/MMM-OnSpotify"}

使用代码 `::github{repo="<owner>/<repo>"}`创建GitHub仓库卡片。

```markdown
::github{repo="saicaca/fuwari"}
```

## 提示框

支持以下类型的提示框：`note` `tip` `important` `warning` `caution`

:::note
突出显示用户即使在浏览时也应注意的信息
:::

:::tip
帮助用户成功的可选信息
:::

:::important
用户成功所需的关键信息
:::

:::warning
由于潜在风险需要用户立即关注的紧急内容
:::

:::caution
行动可能带来的负面后果
:::

### 基本语法

```markdown
:::note
突出显示用户即使在浏览时也应注意的信息
:::

:::tip
帮助用户更成功的可选信息
:::
```

### 自定义标题

提示框的标题可以自定义

:::note[自定义标题]
这是一个带有自定义标题的提示
:::

```markdown
:::note[自定义标题]
这是一个带有自定义标题的提示
:::
```

### GitHub 语法

> [!TIP]
> 也支持[GitHub 语法](https://github.com/orgs/community/discussions/16925) 

```
> [!NOTE]
> 也支持GitHub语法

> [!TIP]
> 也支持GitHub语法
```