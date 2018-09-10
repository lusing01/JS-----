# 什么是 SVG
- SVG ：Scalable Vector Graphics，使用 XML 来描述二维图形和绘图程序的语言。
- SVG 用来定义用于网络的基于矢量的图形。
- SVG 使用 XML 格式定义图形。
- SVG 图像在放大或改变尺寸的情况下其图形质量不会有所损失。
- SVG 是万维网联盟的标准，和其他 W3C 标准是一个整体。
## HTML 中的 SVG
- 可以使用 <embed>、<object>、<iframe> 嵌入
### <embed> 被所有的主流的浏览器支持，并允许使用脚本。
- 注意：如果创建合法的 XHTML 就不能使用 <embed>，任何 HTML 规范中都没有 <embed> 标签。
`<embed src="rect.svg" width="300px" height="100px" type="image/svg+xml" pluginspage="url">`
- pluginspage 属性指向下载插件的 URL
### <object> 是 HTML4 的标准标签，被所有较新的浏览器支持，但不允许使用脚本
`<object data="rect.svg" width="300px" height="100px" type="image/svg+xml" codebase="URL">`
- codebase 属性指向下载插件的 URL
### <iframe> 标签可以工作在大部分浏览器中
`<iframe src="rect.svg" width="300px" height="100px"></iframe>`
### 引用 svg 的命名空间
```
<html xmlns:svg="http://www.w3.org/2000/svg">
<body>
<p> This is an HTML paragraph </p>
<svg:svg width="300px" height="100px" version="1.1">
<svg:circle cx="100px" cy="100px" r="40px" stroke="black" stroke-width="2" fill="red" />
</svg:svg>
</body>
</html>
```
## SVG 形状
### <rect> 标签
- 可以创建矩形，以及矩形的变种
```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
<rect width="300px" height="100px" style="fill:rgb(0,0,225); stroke-width:1; stroke:rgb(0,0,)"/>
</svg>
```
### <circle> 标签
- <circle> 用来创建一个圆
```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
<circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red"/>
</svg>
```
### <ellipse> 标签
- <ellipse> 标签用来创建椭圆，椭圆有不同的 x 和 y 半径。
```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="300" cy="150" rx="200" ry="80" style="fill:rgb(200,100,50); stroke:rgb(0,0,100); stroke-width:2"/>
</svg>
```
### <line> 标签
- <line> 标签用来创建线条
```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
<line x1="0" y1="0" x2="300" y2="300" style="stroke:rgb(99,99,99);stroke-width:2"/>
</svg>
```
### <polygon> 标签
- <polygon> 标签用来创建多边形（不少于三个边的图形）
```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
<polygon points="220,100 300,210 170,250" style="fill:#cccccc; stroke:#000000;stroke-width:1"/>
</svg>
```
- points 属性定义多边形每个角的 x 和 y 坐标
### <polyline> 标签
- <polyline> 标签用来创建仅包含直线的形状
```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
<polyline points="0,0 0,20 20,20 20,40 40,40 40,60" style="fill:white; stroke:red; stroke-width:2"/>
</svg>
```
### <path> 标签
- <path> 标签用来定义路径
- 路径数据的命令:
    - M:moveto, L:lineto, H:horizontal lineto, V:vertical lineto
    - C:curveto, S:smooth curveto, Q:quadratic Belzier curve, T:smooth quadratic Belzier curveto
    - A:elliptical Arc, Z:closepath
```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path d="M250 150 L150 350 L350 350 Z" />
</svg>
```
## SVG 滤镜：用来给形状和文本添加特殊的效果
- 每个 SVG 元素可以使用多个滤镜
- 必须在 <defs> 标签中定义 SVG 滤镜
- 高斯滤镜(Gaussian Blur)
```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
<defs>
<filter id="Gaussian_Blur">
<feGaussianBlur in="SourceGraphic" stdDeviation="3" />
</filter>
</defs>
<ellipse cs="200px" cy="150px" rx="70px" ry="40px" style="fill:#ff0000; stroke:#000000; stroke-width:2; filter:url(#Gaussian_Blur)" />
</svg>
```
- filter:url 属性将元素链接到滤镜
- <fe+所有可用滤镜>，定义滤镜效果
- <feGaussianBlur> 标签的 stdDeviation 属性可定义模糊的程度
- in="SourceGraphic" 定义了由整个图像创建效果
## SVG 渐变
- 必须在 <defs> 标签中定义
- 渐变：从一种颜色到另一种颜色的平滑过渡，可将多个颜色过渡应用到同一个元素中
- 分类：线性渐变 + 放射性渐变
### 线性渐变
- <linearGradient> 定义 SVG 的线性渐变
- 线性渐变可以被定义为水平、垂直或角形的渐变
- 水平：x1 和 x2 不同，y1 和 y2 相等
- 垂直：x1 和 x2 相等，y1 和 y2 不同
- 角形：x1 和 x2 不同，y1 和 y2 不同
```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="orange_red" x1="0%" y1="0%" x2="100%" y2="0%">
<stop offset="0%" style="stop-color:rgb(255,255,0); stop-opacity:1"/>
<stop offset="100%" style="stop-color:rgb(255,0,0); stop-opacity:1"/>
</linearGradient>
</defs>
<ellipse cx="200" cy="190" rx="85" ry="55" style="fill:url(#orange_red)"/>
</svg>
```
- fill:url 属性将 SVG 元素链接到该渐变
- <linearGradient> 标签的 x1、x2、y1、y2 属性可定义渐变的开始和结束位置
- 渐变的颜色范围可由两种或多种颜色组成，每种颜色通过一个 <stop> 标签来规定，offset 属性用来定义渐变的开始和结束位置
### 放射性渐变
- <radialGradient> 标签用来定义放射性渐变
```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
<defs>
<radialGradient id="grey_blue" cx="50%" cy="50%" r="50%" fx="50%" fy="50%"
<stop offset="0%" style="stop-color:rgb(200,200,200); stop-opacity:0"/>
<stop offset="100%" style="stop-color:rgb(0,0,255); stop-opacity:1"/>
</radialGradient>
</defs>
<ellipse cx="230" cy="200" rx="110" ry="100" style="fill:url(#grey_blue)"/>
</svg>
```
- fill:url 将元素链接到该渐变
- r cx cy 属性定义外圈
- fx fy 属性定义内圈
- 渐变的颜色分为可有两种或多种颜色组成，每种颜色通过一个 <stop> 标签来规定
- offset 属性用来定义渐变的开始和结束位置
#### 建议使用 SVG 编辑器来创建复杂的图形
