# 渲染元素(Rendering Elements)
- 元素是构建 React app 的最小单元。
- 不同于 DOM 元素，React 的元素是简单的对象，容易被写出。
- React DOM 将重心放在了持续更新 DOM 来匹配 React 元素。
## 在 DOM 中渲染元素
- 创建一个 `<div id="root"></div>`
- 在其闭合区域内写入的元素，将被 React DOM 所管理。
- 通常只存在一个 root DOM 结点。
- 使用 `ReacDOM.render()` 标签来进行渲染：
```
const element = <h1>Hello, 真香</h1>;
ReacDOM.render(element, document.getElementById('root'));
```
## 更新被渲染的元素
- React 元素是不可变的，创建之后不可对其子类和属性进行修改。
- 目前更新元素的方法只有：创建一个新的 React 元素，并将其 pass 到 ReactDOM.render() 中。
```
var tick = function() {
    const element = (
        <div>
            <h1>JSX!!!</h1>
            <h2>真香 {new Date().toLocalTimeString()}.</h2>
        </div>
        );
        ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);
/* 每秒通过回调函数 setInterval 来调用 ReactDOM.render() 函数 */
```
## React 只在需要的时候更新
- React DOM 会将元素及其子类同前一个元素进行比较，只会在 DOM 需要进行更新时，来更新 DOM。
- 即使不断创造元素来表达整个 UI 树，也只有内容改变的文本结点会被 React DOM 更新。
