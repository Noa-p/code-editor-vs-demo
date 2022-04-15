# code-editor-vs-demo

### 运行
```javascript
npm install

npm run start

```
## Playground

demo：https://github.houston.softwaregrp.net/Zhenyue-He/code-editor-vs-demo

## MonacoEditor

powers VS Code

### 特性

- 支持多语言，语言可自定义
- Intelligence features: 
  - 自动填充（autocompletion）
  - 代码折叠（code folding）
  - 快捷键设置（keybindings）
  - 搜索 & 替换
  - 括号、标签匹配
- 编辑器样式：
  - 可配置文本样式如fontsize, weight, lineheight等
  - 可配置光标样式

### 使用

#### 初始化

```javascript
import * as monaco from 'monaco-editor';

monaco
  .editor
  .create(document.getElementById("root"), {
    	value: 'console.log("Hello, world")',
    	language: 'javascript'
  });
```

#### 切换语言 & 扩展功能

- APIs

#### Diff

- `monaco.editor.createDiffEditor`

## CodeMirror

Ver 6 增加了对touch device的支持，基于native browser的文本编辑能力

### 特性

- 支持超过100种语言，强大的复合语言**mode**系统，可自定义mode
- Intelligence features：
  - 自动填充（autocompletion）
  - 代码折叠（code folding）
  - 快捷键设置（keybindings）
  - 搜索 & 替换
  - 括号、标签匹配
- 编辑器样式：
  - 支持多种主题
  - 改变编辑器Size
  - 多文件切换 & 分屏
- Debug：
  - Programmable gutters（断点）
  - 集成linter
- Marking ranges of text styled, read-only, or atomic
- 文本双向对齐
- 其他methods和addons...

### 使用

#### 初始化

```javascript
import CodeMirror from 'codemirror';

//在非textarea节点创建editor
CodeMirror(document.getElementById("root"), {
  	value: 'console.log("Hello, world")',
  	mode:  "javascript"
})

//在textarea节点创建editor
CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    mode: "htmlmixed"
});
```

#### 切换语言

- 修改mode值，可自定义mode

#### 扩展功能

- 使用Addon或自定义Addon
- 利用APIs实现自定义逻辑

#### 自定义样式

- 覆盖codemirror.css的样式
- 配置theme

# VS

|              | Monaco                                                       | CodeMirror                                            |
| ------------ | ------------------------------------------------------------ | ----------------------------------------------------- |
| 稳定性       | 还未release v1.0.0                                           |                                                       |
| 开箱即用体验 | UI漂亮，有很多开箱即用的特性                                 | 自由度更大，需要自定义的地方更多                      |
| 模块化/打包  | 体积较大，不支持懒加载                                       | core体积不大，模块化支持得很好，支持懒加载和动态加载  |
| 可扩展性     | 功能扩展是内置的，使用options和APIs配置                      | 可扩展性是它是设计原则。功能扩展通过addon的形式载入。 |
| 社区和文档   | 没有官方guide，有[API文档](https://microsoft.github.io/monaco-editor/api/index.html)，有demo | 文档详细，有demo                                      |
| 性能         | 有性能优化但是有点过时                                       | 有持续地性能优化                                      |
| 浏览器       | IE 9/10/11, Edge, Chrome, Firefox, Safari and Opera          | Chrome, Firefox, Safari                               |
| 移动端       | 不支持                                                       | 支持                                                  |
| 最新版本     | v0.33.0                                                      | v5.65.2，v6 beta为重写版本主要为了支持touch device    |

# 相关术语

LSP - Language Server Protocol

# 参考

[1] [Ace, CodeMirror, and Monaco: A Comparison of the Code Editors You Use in the Browser](https://blog.replit.com/code-editors)

[2] [CodeMirror Docs](https://codemirror.net/index.html)

[3] [Monaco APIs](https://microsoft.github.io/monaco-editor/api/index.html)

