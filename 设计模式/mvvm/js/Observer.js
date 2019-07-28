class Observer {
  constructor(data) {
    this.data = data
    this.walk(data)
  }

  walk = data => {
    let me = this
    Object.keys(data).forEach(key => {
      me.covert(key, data[key])
    })
  }

  covert = (key, val) => {
    this.defineReactive(this.data, key, val)
  }

  defineReactive = (data, key, val) => {
    let dep = new Dep(),
      childObj = observe(val)

      Object.defineProperty(data, key, {
        enumerable: true,
        configurable: false,
        get: () => {
          console.log(Dep.target)
          if (Dep.target) {
            dep.depend()
          }
          return val
        },
        set: newVal => {
          if (newVal === val) {
            return
          }
          val = newVal
          // 新值是object的话, 进行监听
          childObj = observe(newVal)
          // 通知订阅者
          dep.notify()
        }
      })
  }
}

const observe = (value) => {
  if (!value || typeof value !== 'object') {
    return
  }

  return new Observer(value)
}

let uid = 0

class Dep {
  constructor () {
    this.id = uid ++
    this.subs = []
  }

  addSub = sub => {
    this.subs.push(sub)
  }

  depend = () => {
    Dep.target.addDep(this)
  }

  removeSub = sub => {
    let index = this.sub.indexOf(sub)
    if (index != -1) {
      this.subs.splice(index, 1)
    }
  }

  notify = () => {
    console.log('通知订阅者')
    console.log(this.subs)
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}

Dep.target = null