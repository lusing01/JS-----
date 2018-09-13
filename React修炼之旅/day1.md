# React 修炼之旅 第一天
## React 是一个用来构建用户界面的 js 库。
- 使用 create-react-app 快速构建开发环境
- create-react-app 来自 Facebook
- create-react-app 自动创建的项目是基于 Webpack + ES6 的
- localhost:3000
## JSX 为何物

> const element = <h1>Hello, world!</h1>;

---
- 如上写法，来自 React 官网，上述的标签内容，即非字符串亦非 HTML 标签。
- 它被称为 JSX，是 JavaScript 的语法扩展。
- 推荐和 React 一起使用，来构造业务所需的 UI。
- JSX 生成 React 对象。
### 为什么要用 JSX
- React 接受 翻译逻辑本质上和其他 UI 逻辑是耦合的事实：事件怎样被处理，超时状态改变，数据如何被展示。
- 取代了人工将页面结构和逻辑使用不同文件分离，React 分离关键使用了被称为“components”的解耦单元。
### JSX 的嵌入表达式
```
const name = 'Day 1';
const element = <h1>Hello, {name}</h1>;
ReactDOM.render(element, document.getElementById('root'));
```
- 在 JSX 的表达式中可以使用所有正确的 JavaScript 表达式，如下例：
```
var formatName = function(user) {
    return user.firstName + ' ' + user.lastName;
}
const user = {
    firstName: 'JSX',
    lastName: '是很好的'
};
const element = (
    <h1>
        Hello, {formatName(user)} !
    </h1>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
        );
```
### JSX 亦可以做表达式
- JSX 可以作为参数来使用。
```
var getGreeting = function(user) {
    if(user) {
        return <h1>Hello, {formatName(user)}!</h1>''
    }
    return <h1>Hello, nihao.</h1>;
}
```
### 为 JSX 指定属性
- 可以使用双引号来指定。
`const element = <div tabIndex = "0"></div>;`
- 也可以使用方括号来指定。
`const element = <img src={user.avatarUrl}></img>;`
- 不要将方括号嵌套斤双引号中，这是不允许的。
- 双引号通常用在字符串值，而方括号中通常为表达式。
- 比起 HTML，JSX 更加贴近于 JavaScript 的语法习惯。
### 为 JSX 指定 Children
- 如果标签为空，即时关闭的话，在 JSX 中可以同 XML 一样使用 `/>`。
`const element = <img src={user.avatarUrl} />;`
- JSX 可以包含 Children
`const element = (
    <div>
        <h1>JSX!</h1>
        <h2>真香</h2>
    </div>
    );`
### JSX 可以预防注入攻击(XSS)
- 将用户输入嵌入 JSX 可以保证安全。
```
const title = response.potentiallyMaliciousInput;
const element = <h1>{title}<h1>;
```
### JSX 表示对象
- JSX 在调用 React.creatElement() 后被编译。
```
const element = (
    <h1 className="day1">
    JXS, 真香！
    </h1>
    )
```
---
```
const element = React.createElement(
    'h1',
    {className: 'day1'},
    'JSX，真香！'
    )；
```
- 以上两种表达方式是相同的。
- `React.creatElement()` 会执行一些检查来帮助写出少 bug 的代码。
- 但是，它实际上是生成了一个对象：
```
const element = {
    type: 'h1',
    props: {
        className: 'day1',
        Children: 'JSX，真香！'
    }
};
```
- 类似这样的对象被称为 React 元素。
- React 读取这些对象，来构造 DOM。
