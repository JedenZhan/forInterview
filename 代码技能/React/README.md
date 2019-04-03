自己动手搭建 react 项目

先安装基础包

- cnpm i webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/presets-env @babel/plugin-transform-react-jsx html-webpack-plugin -D
- cnpm react react-dom redux react-router -S

创建`.babelrc`

内容:

{
    "presets": ["babel-presets-env"],
    "plugins": ["@babel/plugin-transform-react-jsx"]
}

创建`.gitignore`

内容:

/node_modules

