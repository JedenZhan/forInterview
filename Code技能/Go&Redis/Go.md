关于Vscode报错的解决(mac or linux)

打开vscode_config, 复制三个脚本到$GOPATH/src下, 先增加执行权限(chmod +r ./*.sh)

```shell
bash install_plugin.sh
```

## 代码结构

基本结构

```go
package main // 每一个Go文件都必须属于一个包

import "fmt" // 导入不多说

// 其他代码

func main() { // 函数声明, 并且每一个文件都要有一个 main() 函数
    fmt.Println("Hello World") // 字符串必须双引号
}

// others
```

## 变量

Go 语言是静态语言, 声明变量必须声明类型

```go
var str1 string = "Jeden"
var num1 int = 1
var non string // 如果只声明没有赋值的话, Go会用默认值 字符串为空,数字为0,布尔为false
var noType = "str" // 如果未声明类型, Go会判断值,并自动生成类型(只有一次)
simple := "simple" // 相当于 var simple string = "simple" // 不能用于已声明的变量(二次声明)

// 一次性声明多个变量
var a, b, c, d int // 多个int类型的变量(只能有一个类型)

// 解构赋值
var a, b = 100, "jeden" // 不能有类型

// 在main函数上面(之外)的是全局变量
```

### 数据类型

![img](/Users/jedenzhan/Documents/GoStudy/imgs/Go%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.png)

#### int

![img](/Users/jedenzhan/Documents/GoStudy/imgs/int.png)

##### 正数

![img](/Users/jedenzhan/Documents/GoStudy/imgs/%E6%AD%A3%E6%95%B0.png)

#### 字符串

#### 数组

#### 切片

#### 内存指针

### Map



## 自定义数据类型Struct

e.g :

```go
package main

func main() {
    type Person struct { // Person类型
        name string // 接口
        age int 16
    }
    // 使用
    var Jeden Person
    Jeden.name = "Jeden"
    Jeden.age = 21
}
```





## 数据类型转换

Go的数据类型转换不会像JS那样自动执行, 只能**显式转换**

```go
func main(){
    var n1 int32 = 122345
    var n2 float32 = float32(n1)
    var n3 int64 = float64(n1) // 低精度到高精度也需要转换
    fmt.Println("n1=%v, n2=%v, n3=%v", n1, n1, n3) // 模板字符串
}
```

表达式: `var n T = T(n1)`

- 可以从大范围到小范围, 也可以从小范围到大范围
- 转换不会更变原始值
- 如果范围有偏差, 比如int32转int8, 而且超出了int8的范围, 不会报错, 会按照溢出处理*以后研究结果*

## 函数

语法:

```go
package main

func main() {
    
}

// 定义方式: func funcName(参数 参数类型, 第二个参数 第二个参数的类型) 返回值类型 {
// 	函数体
// }
func myFunc(a float64, b float64) float64 {
    // 函数体
    return a * b
}
```

函数可以返回多个值

```go
// ...
func main() {
    a, b = myFunc(1, 2)
}
func myFunc(a int, b int) (int, int) { // 多个返回值也要挨个声明类型
    return a, b
}

```

### 函数可以和Struct结合(我们称为methods)

e.g.

```go
func main() {
    type Rectangle struct {
        width, height float64
    }
    
}
func myFunc(r Rectangle) float64 {
    return r.width * r.height
}
```

## 并发与并行

Go是一种并发语言, 但不是并行

并发是指一段时间内能同时完成多个任务

举例: 跑步时系鞋带, 是一种并发, 系鞋带并没有打断跑步, 只是暂停而已(需要暂停执行另一个任务的叫做任务切换)

跑步时听音乐, 也是一种并发, 二者同时进行(多个cpu核心同时控制,真正的多核并行)



所以并行与并发的关系: **`并行`只是一种实现并发的方式,另一种实现并发的方式是`任务切换`**

### 那Go是怎么实现并发的呢

答案是—> **协程**

#### 协程(goroutine)

> goroutine 是指并发执行的`函数/方法`(任务), goroutine 也可以理解为轻量级的线程, 创建goroutine的开销远远小于线程, Go里面创建成千上万个goroutine很常见

**goroute VS 线程**

- goroutine 开销更小, goroutine 只占用几kb的内存, 而且可以根据需要动态缩放, 而线程占用的空间比较大, 而且是固定不变的
- goroutine 是对线程的一层封装, 所有创建的goroutine本质上都是复用少量的若干个线程,比如可能只有一个线程, 而很多goroutine跑在这个线程里面, 分时复用, 假如其中一个 goroutine阻塞了该线程的执行, golang 会新建一个线程将其他的 goroutine 切换到新线程上面
- goroutine 通过 channel, 管道来实现 goroutine 之间的通信, channel 能解决共享内存冲突的问题, 也是相对于线程的一个优势

**开启一个 goroutine**

```go
package main

import "fmt"

func hello() {
    fmt.Println("Hello GoRoutine")
}

func main() {
    go hello() // 开启一个新的goroutine, 和main方法并行,main函数是默认goroutine, 是主线程
    fmt.Println("main function")
}
// 因为两个并发执行, 不知道谁先执行完, 所以可能有不同的结果
```

**开启多个 goroutine**

```go
package main

import (
    "fmt"
    "time"
)

func numbers() {
    for i := 1; i <= 5; i ++ {
        time.Sleep(250 * time.Millisecond)
        fmt.Printf("%d ", i)
    }
}

func alphabets() {
	for i := 'a'; i <= 'e'; i++ {
		time.Sleep(400 * time.Millisecond)
		fmt.Printf("%c ", i)
	}
}

func main() {
    go numbers()
    go alphabets()
    time.Sleep(2000 * time.Millisecond)
    fmt.Println("All end")
}
```

#### 管道(channel)

> channel是 goroutine 通讯的管道, 就像水管一样, 可以双向流动

**声明channel**

每个channel都需要绑定一个数据类型,这个数据类型就是channel可以传输的数据类型`chan`

show time

```go
package main

import ("fmt")

func main() {
    var a chan int
    if (a == nil) {
        fmt.Println("a未赋值")
        a = make(chan int)
        fmt.Printf("type of a 是 %T", a)
    }
}
```



## 面向对象



## GO 语法小结

- var和const进行变量和常量的声明
- package和import为包管理和导入包
- func进行函数定义
- return用于函数返回值,多个返回值用逗号隔开,并且要声明返回类型
- defer用于函数结束前执行的最后一行代码
- go用于并行
- select用于选择不同的通讯
- interface定义接口
- struct定义抽象数据类型
- 流程控制
- chan用于channel通讯
- map声明map类型数据
- range读取slice, map, channel数据

## GO + Web 编程

### 使用Http包建立Web服务

```go
package main
import (
	"fmt"
    "net/http"
    "strings"
    "log"
)

func sayHelloName(w http.ResponseWriter, r *http.Request) {
    r.ParseForm() // 解析参数
    fmt.Println(r.form) // 输出到服务端的信息
    fmt.Println("path路径", r.URL.Path)
    fmt.Println("scheme", r.URL.Scheme)
    fmt.Println(r.Form("url_long"))
    for k, v := range r.Form["url_long"] {
        fmt.Println("key:", k)
        fmt.Println("value:", value)
    }
    fmt.Fprintf(w, "hello Client")
}

func main() {
    http.HandleFunc("/", sayHelloName)
    err := http.ListenAndServe(":9090", nil)
    if err != nil {
        log.Fatal("listenAndserve:", err)
    }
}
```

### Go语言http包运行机制

1. 创建Listen Socket, 监听指定端口, 等待客户端请求到来
2. Listen Socket接受客户端请求, 得到Client Socket, 接下来通过Client Socket与客户端通信
3. 处理客户端请求, 先从Client Socket读取请求头, 如果是POST方法, 还可能要读取客户端提交的数据, 然后交给相应的handler去处理, handler处理完准备好客户端需要的数据, 通过Client Socket写给客户端

### 剖析http包的内容



## 表单

不多废话,直接撸代码

html:

```html
<form action="http://127.0.0.1:9090/login">
	username: <input type="text" name="username">
	password: <input type="password" name="password">
	<input type="submit" value="登录"> 前端不解释
</form>
```

Go:

```go
package main

import (
    "fmt"
    "html/template"
    "log"
    "net/http"
	"strings"
)

func sayHelloName(w http.ResponseWriter, r *http.Request) {
    r.ParseForm() // 先解析参数
    fmt.Println(r.Form)
    fmt.Println("path", r.URL.Path)
    fmt.Println("scheme", r.URL.Scheme)
    fmt.Println(r.Form["url_long"])
    for k, v := range r.Form["url_long"] {
        fmt.Println("key:", k)
        fmt.Println("value:", value)
    }
    fmt.Fprintf(w, "hello Client")
} // 老代码

func login(w http.ResponseWriter, r *http.Request) {
    fmt.Println("methods---:", r.methods) // 获取方法
    if r.methods == "GET" {
        t, _ := template.ParseFiles("login.gtpl")
        t.Execute(w, nil)
    } else {
        r.ParseForm()
        fmt.Println("username---:", r.Form["username"]) // post方法直接获取
        fmt.Println("password---:", r.Form["password"])
        fmt.Println("------------------华丽丽的分割线---------------------")
    }
}

func main() {
    http.HandleFunc("/", sayHelloName)
    http.HandleFunc("/login", login) // 一个路由一个处理函数
    err := http.ListenAndServe(":9090", nil)
    if err != nil {
        log.Fatal("listenAndserve:", err)
    }
}
```

## Redis

支持五大数据类型: String, Hash, List, Set(无序), Zset(有序)



### Go 连接 Redis

安装连接库: `go get github.com/garyburd/redigo/redis`

简单的连接和存取:

```go
func main() {
    var r string
    conn, err := redis.Dial("tcp", "127.0.0.1:6379") // 成功的话返回链接实例, 失败返回err
	if err != nil {
		fmt.Println("redis.err", err)
		return // 失败的话退出
	}
    _, err = conn.Do("Set", "字段名", "字段值") // 操作存储值
    if err != nil {
        fmt.Println("操作失败了啊啊啊")
        return
    }
    r, err = redis.String(conn.Do("Get", "字段名")) // 获取值并且转化为字符串类型
    fmt.Println("连接操作成功", r) // 打印出值
}
```























