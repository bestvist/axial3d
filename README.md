# 轴动效果 axial3d 
![npm version](https://img.shields.io/npm/v/axial3d.svg)
![npm downloads](https://img.shields.io/npm/dt/axial3d.svg)
![MIT](https://img.shields.io/badge/license-MIT-blue.svg)

> 3D效果页插件，类似 Github404 页面动画。

## 安装引入 Install

```
npm install axial3d
```
or
```
<script src="https://unpkg.com/axial3d"></script>
```

## 例子 Example
[Demo](https://bestvist.github.io/axial3d/demo/)

```
<html>
<head>
    <title>Demo - Axial3d</title>
</head>
<body>
    <script src="https://unpkg.com/axial3d"></script>
    <div id="axial3d"></div>
    <script>
        (function () {
            var options = {
                selector: '#axial3d',
                imgs: [
                    {src: 'https://bestvist.github.io/axial3d/public/demo1/1.png', left: '50px', top: '10px'},
                    {src: 'https://bestvist.github.io/axial3d/public/demo1/2.png', left: '150px', top: '10px', static: true},
                    {src: 'https://bestvist.github.io/axial3d/public/demo1/3.png', left: '50px', top: '300px', static: true},
                    {src: 'https://bestvist.github.io/axial3d/public/demo1/4.png', left: '300px', top: '300px', static: true}
                ]
            }
            var effect = new Axial3d(options);
        })()
    </script>
</body>
</html>
```

## 属性 Props

### options

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|-|-|-|-|-|
| selector | 元素选择器 | String | - | - |
| imgs | 图片组 | Array | - | - |
| transform | 动画形式 | String | translate / rotate | translate |
| swing | 动画幅度 | Number | - | 5 |

### imgs options

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|-|-|-|-|-|
| src | 图像路径 | String | - | - |
| top | 图片顶部定位 | String | - | - |
| bottom | 图片底部定位 | String | - | - |
| left | 图片左侧定位 | String | - | - |
| right | 图片右侧定位 | String | - | - |
| static | 图片是否静态，不随鼠标转动 | Boolean | true / false | false |

## 方法 Methods

| 事件名称 | 说明 | 回调参数 |
|-|-|-|
| destory | 取消事件监听 | - |


## License

[MIT](https://github.com/bestvist/axial3d/LICENSE)