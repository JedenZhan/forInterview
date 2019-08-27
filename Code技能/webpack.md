## Webpack可以做什么

> 代码转换, 代码分割, 文件优化, 模块合并, 自动刷新, 代码校检, 自动刷新, 自动发布



## 简单的webpack配置

```js
const path = require('path');

const config = {
    mode: 'development/production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.reslove(__dirname, 'dist')
    },
    module: {
			rules: [
        {
          test: /\.js$/,
          use: 'babel-loader'
        }
      ]
        
    },
    plugins: [
        
    ],
    devServer: {
        
    }
}
```

## 编写Webpack插件

webpack插件由以下几个部分组成

- 一个js命名函数
- 插件函数prototype上定义一个apply方法
- 指定一个绑定到webpack自身的事件钩子
- 处理webpack内部实例的特定数据
- 功能完成后调用webpack提供的回调

```js
clsss myExamplePlugin {
  apply (compiler) {
          compiler.plugin('webpacksEventHook'/*事件钩子*/, function(compilation, callback) {
          console.log("This is an example plugin!!!"); // 这是功能区
          // 功能完成后调用 webpack 提供的回调。
          callback();
  }
}
```

