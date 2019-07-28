class MVVM {
  constructor(options) {
    this.$options = options || {}
    let data = this._data = this.$options.data
    let me = this
    Object.keys(data).forEach(key => {
      me._proxyData(key)
    })

    this._initComputed()

    observe(data, this) // 给数据添加监听

    this.$compile = new Compile(options.el || document.body, this) // 获取容器
  }
  
  $watch = (key, cb, options) => {
    new Watcher(this, key, cb)
  }

  _proxyData = (key, setter, getter) => {
    console.log('数据代理执行')
    let me = this
    setter = setter || Object.defineProperty(me, key, {
      configurable: false,
      enumerable: true,
      get: function proxyGetter() {
        return me._data[key]
      },
      set: function proxySetter(newVal) {
        me._data[key] = newVal
      }
    })
  }

  _initComputed = () => {
    console.log('函数代理执行')
    let me = this,
      computed = this.$options.computed

      if (typeof computed === 'object') {
        Object.keys(computed).forEach(key => {
          Object.defineProperty(me, key, {
            get: typeof computed[key] === 'function' ? computed[key] : computed[key].get,
            set: () => {}
          })
        })
      }
  }
}