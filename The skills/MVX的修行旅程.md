# 前端中的 MV*
- 早期前端：简单、杂乱，少逻辑，浏览为主。
- 由于前端功能的增强、代码的膨胀，导致不得不去做“前端的架构”。
## MV* 框架的主要功能
    - 路由
    - 数据绑定
    - 模板/视图
    - 模型
    - 数据访问
- MV* 模式就是为了解耦数据模型和 UI 层。
## MVC: MOdel-View-Controller
- Model 进行逻辑业务处理。
- View 应用数据的可视化显示。
- Controller 协调和管理应用程序中 Model 和 View 之间的逻辑。
### 处理过程
- 1.用户对视图层的操作逻辑并非在 View 中处理，而是由 Controller 层进行处理。
- 2.处理后调用 Model 层的接口，将数据交给 Model 层。
- 3.Model 层执行与业务逻辑相关的操作，并更新数据。
- Model 和 View 通过观察者模式联系在一起：View 是 Model 的观察者，Model 数据变动后，通知 View 层进行数据更新。
### 优点
- 层逻辑的分离带来了模块化程度的提升。
- 更换逻辑只需改动 Controller 即可。
- 观察者模式可以做到多视图更新。
### 缺点
- Controller 测试困难。
- View 无法组件化，强依赖特定 Model。
## MVP: Model-View-Presenter
- Model 层不发生改变，但 View 层对 Model 层完全无知。
- MVP 中的 Presenter 层不仅调用 Model 的接口，也要调用 View 的接口，而且需要做观察者。
- P 层作为观察者获得了 M 层数据变化后将调用 V 层的接口将变化反映到 V 层中。
### 优点
- Presenter 对 View 是通过接口进行，便于测试。
- 在对 Presenter 进行不依赖 UI 环境的单元测试的时候，可同过 Mock 一个 View 对象，这个对象只要实现 View 接口即可。
- MVP 中的 View 可以进行组件化。
### 缺点
- Presenter 中出了应用逻辑，还存在大量 V->M,M->V 的手动同步逻辑。
- Presenter 比较笨重，维护起来比较困难。
## MVVM: Model-View-ViewModel
- M、V 层同 MVC
- ViewModel 数据转换器，它将 Model 信息转换为 View 信息，还将命令从 View 传递到 Model
- M 层的数据变化通过在 VM 层实现了一个特殊的 binder，或者是 Data-binding engine 等，将数据从 M 层直接绑定到 V 层。
- VM 层了解 M 层，V 层了解 VM 层。
### ViewModel 层
- VM 层为 V 层提供了一个访问 M 层的桥梁，但并非直接访问。
- VM 为 V 层提供了 M 层 特定于 V 层的子集，而无需向 V 层暴露整个 M 层。
- V 层和 VM 层通过数据绑定和事件可以进行通信，VM 层为了数据绑定要暴露 M 层中的部分属性。
#### MVVM 俗称为双向绑定
### MVVM 优点
- 提高了可维护性。
- 简化了测试的步骤。
### MVVM 缺点
- 过于简单的图形界面不适用。
- 对于大型的图形应用程序，VM 层的构建和维护的成本都会比较高。
- 数据绑定的声明是指令式写在 V 层模板当中的，无法端点 debug。
### React 专注view层，不包括数据访问和路由，中心是Component。
