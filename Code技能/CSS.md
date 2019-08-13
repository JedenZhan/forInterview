书籍推荐: CSS世界

## @import和link区别

- @import是css2.1提供的功能,有兼容性问题
- link不只是可以引入css
- @import引用的CSS文件只有在引用它的那个css文件被下载、解析之后，浏览器才会知道还有另外一个css需要下载，这时才去下载，然后下载后开始解析、构建render tree等一系列操作。这就导致浏览器无法并行下载所需的样式文件。
- 多个@import还会导致下载紊乱

## CSS 基础

- 常用选择器: Id选择器, Class选择器, 标签选择器, 后代选择器, 子选择器, 伪类选择器, *选择器



## CSS预处理器对比

**Stylus, Sass, Less**

- 三者均可嵌套

- Stylus和Less可以省略大括号, 冒号, 分号
- 变量赋值: Stylus使用等号, Sass和Less使用冒号

|       名字       | 写法      | 变量支持                                               | 函数                       |
| :--------------: | --------- | ------------------------------------------------------ | -------------------------- |
| Stylus`个人使用` | 无        | 数字,字符串,颜色,布尔型,空(null),数组,maps(类似Js数组) | -                          |
|       Sass       | $表示变量 | -                                                      | @function定义, @return返回 |
|       Less       | @表示变量 | -                                                      | -                          |

三者总体上还是很类似的, 如果面试问到了就说弥补了原生CSS的不足, 比如变量定义,mixin, 嵌套使用可以更清晰展示CSSOM



## 两大经典bug

### 1. margin 塌陷

```html
<div class='wrapper'>
    <div class='inner'>
       <!-- 我设置margin-top会把wrapper拉下来 --> 
    </div>
</div>
<style>
    .wrapper {
        height: 300px;
        width: 300px;
        background-color: #0f0;
    }
    .inner {
        height: 100px;
        width: 100px;
        background-color: #00f;
        margin-top: 20px;
    }
</style>
```

**解决:** 设置BFC元素

**触发BFC的条件:**

- float的值不是none
- position的值不是static或者relative
- display的值是inline-block、table-cell、flex、table-caption或者inline-flex
- overflow的值不是visible

任意一个设置就会触发BFC, 也会解决margin塌陷问题

### 2. margin 合并

```html
<div class='top'>
    我设置margin-bottom,但是小于下面的margin-top,所以听他的
</div>
<div class='bottom'>
      我设置了margin-top,并且大于父元素的margin-bottom, 所以我们间距是200px
 </div>
<style>
    .top {
        height: 300px;
        background-color: #0f0;
        margin-bottom: 100px;
    }
    .bottom {
        height: 100px;
        width: 100px;
        background-color: #00f;
        margin-top: 200px;
    }
</style>
```

**不解决, 没什么影响**

## 伪元素

伪元素天生是行级元素


## 浮动

使用浮动有什么影响:
产生浮动流, 块级元素看不到, 产生bfc元素, 文本类元素, 以及文本可以看到


## 权重

!important: 10000
内联: 1000
id: 100
类: 10
标签:１
通用＊，子，　相邻：　０




