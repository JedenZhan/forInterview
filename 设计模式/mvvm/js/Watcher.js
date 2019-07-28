class Watcher {
  constructor (vm, expOrFn, cb) {
    this.cb = cb
    this.vm = vm
    this.expOrFn = expOrFn
    this.depIds = {}

    if (typeof expOrFn === 'function') {
      this.getter = expOrFn
    } else {
      this.getter = this.parseGetter(expOrFn.trim())
    }

    this.value = this.get()
  }

  update = () => {
    console.log(this)
    this.run()
  }

  run = () => {
    console.log('run执行')
    let value = this.get(),
      oldVal = this.value
      if (value !== oldVal) {
        this.value = value
        this.cb.call(this.vm, value, oldVal)
      }
  }

  addDep = dep => {
    console.log(dep)
    if (!this.depIds.hasOwnProperty(dep.id)) {
      dep.addSub(this)
      this.depIds[dep.id] = dep
    }
  }

  get = () => {
    Dep.target = this
    let value = this.getter.call(this.vm, this.vm)
    Dep.target = null
    return value
  }

  parseGetter = exp => {
    if (/[^\w.$]/.test(exp)) return

    let exps = exp.split('.')

    return obj => {
      for (let i = 0, len = exps.length; i < len; i ++) {
        if (!obj) return
        obj = obj[exps[i]]
      }
      return obj
    }
  }
}