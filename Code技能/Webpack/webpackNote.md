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
        
    },
    plugins: [
        
    ],
    devServer: {
        
    }
}
```

