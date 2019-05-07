const http = require('http');


// http.createServer((req, res) => {
//     res.end('hello world')

// }).listen(8080)

function bubbleSorter(arr) {
    for (let i = 0, len = arr.length; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}

// console.log(bubbleSorter([3, 2, 1]))

let PENDING = 'pending',
    RESLOVED = 'resloved',
    REJECTED = 'rejected';

function MyPromise(fn) {
    const _this = this;
    _this.state = PENDING;
    _this.value = null;
    _this.reslovedCallbacks = [];
    _this.rejectedCallbacks = [];

    function resloved(value) {
        if (_this.state === PENDING) {
            _this.state = RESLOVED;
            _this.value = value;
            _this.reslovedCallbacks.map(_ => _(_this.value))
        }
    }

    function rejected(value) {
        if (_this.state === PENDING) {
            _this.state = REJECTED;
            _this.value = value;
            _this.rejectedCallbacks.map(_ => _(_this.value))
        }
    }
    try {
        fn(resloved, rejected)
    } catch (e) {
        rejected(e)
    }
}

MyPromise.prototype.then = function (onFullResloved, onRejected) {
    const _this = this;
    onFullResloved = typeof onFullResloved === 'function' ? onFullResloved : v => v;
    onRejected = typeof onRejected === 'function' ? onRejected : r => {
        throw r
    };

    if (_this.state === PENDING) {
        _this.reslovedCallbacks.push(onFullResloved);
        _this.rejectedCallbacks.push(onRejected);
    }

    if (_this.state === RESLOVED) {
        onFullResloved(_this.value);
    }
    if (_this.state === REJECTED) {
        onRejected(_this.value)
    }
}

let pro1 = new MyPromise()
pro1.then((value) => {
    console.log(value)
})