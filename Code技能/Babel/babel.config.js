const presets = [
    [
        '@babel/preset-env',
        {
            targets: { // 设置需要支持的浏览器版本
                edge: "17",
                firefox: "60",
                chrome: "67",
                safari: "11.1",
            },
            useBuiltIns: 'usage'
        }
    ]
]

module.exports = { presets }