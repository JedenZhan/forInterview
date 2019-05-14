class Circle {
  draw () {
      console.log('我画了一个圆形')
  }
}
class Decorator {
  constructor (target) {
      this.target = target;
  }
  draw () {
      this.target.draw();
      this.setDecorator(this.target)
  }
  setDecorator (target) {
      console.log('设置红色边框')
  }
}

let obj1 = new Decorator(new Circle())

console.log(obj1)
obj1.draw()