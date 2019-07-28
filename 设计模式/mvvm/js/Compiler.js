class Compile {
  constructor(el, vm) {
    this.$vm = vm
    this.$el = this.isElementNode(el) ? el : document.querySelector(el)
    console.log(this.$el)
    if (this.$el) {
      this.$fragment = this.node2Fragment(this.$el);
      this.init()
      this.$el.appendChild(this.$fragment)
    }
  }

  node2Fragment = el => {
    console.log('节点转换执行')
    let fragment = document.createDocumentFragment(),
      child
    console.log(el.firstChild)
    // 将原生节点拷贝到fragment
    while (child = el.firstChild) {
      fragment.appendChild(child)
    }
    return fragment
  }

  init = () => {
    this.compileElement(this.$fragment)
  }

  compileElement = el => {
    console.log('编译节点函数执行')
    let childNodes = el.childNodes,
      me = this
    console.log(childNodes)
    Array.prototype.slice.call(childNodes).forEach(node => {
      let text = node.textContent,
        reg = /\{\{(.*)\}\}/
      
      console.log(me.isElementNode(node))
      if (me.isElementNode(node)) {
        me.compile(node)
      } else if (me.isTextNode(node) && reg.test(text)) {
        me.compileText(node, RegExp.$1.trim())
      }

      if (node.childNodes && node.childNodes.length) {
        me.compileElement(node)
      }
    })
  }

  compile = (node) => {
    console.log('编译执行')
    let nodeAttrs = node.attributes,
      me = this
    
    Array.prototype.slice.call(nodeAttrs).forEach(attr => {
      let attrName = attr.name
      if (me.isDirective(attrName)) {
        let exp = attr.value,
          dir = attrName.substring(2)
        
        if (me.isEventDirective(dir)) {
          compileUtil.eventHandler(node, me.$vm, exp, dir)
        } else {
          compileUtil[dir] && compileUtil[dir](node, me.$vm, exp)
        }

        node.removeAttribute(attrName)
      }
    })
  }

  compileText = (node, exp) => compileUtil.text(node, this.$vm, exp)

  isDirective = attr => attr.indexOf('v-') == 0

  isEventDirective = dir => dir.indexOf('on') === 0

  isElementNode = node => node.nodeType == 1

  isTextNode = node => node.nodeType == 3

}

// 指令处理集v-model这些..
let compileUtil = {
  text (node, vm, exp) {
    this.bind(node, vm, exp, 'text')
  },

  html (node, vm, exp) {
    this.bind(node, vm, exp, 'html')
  },

  model (node, vm, exp) {
    this.bind(node, vm, exp, 'model')

    let me = this,
      val = this._getVMVAL(vm, exp)
    
    node.addEventListener('input', e => {
      let newValue = e.target.value
      console.log(newValue)
      if (val === newValue) {
        return
      }

      me._setVMVAL(vm, exp, newValue)
      val = newValue
    })
  },

  class (node, vm, exp) {
    this.bind(node, vm, exp, 'class')
  },

  bind (node, vm, exp, dir) {
    let updaterFn = updater[dir + 'Updater']
    console.log(updaterFn, node)
    updaterFn && updaterFn(node, this._getVMVAL(vm, exp))

    new Watcher(vm, exp, (value, oldValue) => {
      updaterFn && updaterFn(node, value, oldValue)
    })
  },

  // 事件处理
  eventHandler (node, vm, exp, dir) {
    let eventType = dir.split(':')[1],
      fn = vm.$options.methods && vm.$options.methods[exp]
    
    if (eventType && fn) {
      node.addEventListener(eventType, fn.bind(this), false)
    }
  },

  _getVMVAL (vm, exp) {
    let val = vm
    exp = exp.split('.')

    exp.forEach(k => {
      val = val[k]
    })

    return val
  },

  _setVMVAL (vm, exp, value) {
    let val = vm
    console.log(vm, exp)
    exp = exp.split('.')
    exp.forEach((k, i) => {
      if (i < exp.length - 1) {
        val = val[k]
      } else {
        val[k] = value
      }
    })
  }
}


// 更新所用工具
let updater = {
  textUpdater (node, value) {
    console.log('文本更新')
    node.textContent = typeof value == 'undefined' ? '' : value
  },

  htmlUpdater (node,  value) {
    node.innerHTML = typeof value == 'undefined' ? '' : value
  },

  classUpdater (node, value, oldValue) {
    let className = node.className

    className = className.replace(oldValue, '').replace(/\s$/, '') // ?

    let space = className && String(value) ? ' ' : ''

    node.className = className + space + value
  },

  modelUpdater (node, value) {
    node.value = typeof value == 'undefined' ? '' : value
  }
}