const http = require('http');


// http.createServer((req, res) => {
//     res.end('hello world')

// }).listen(8080)

function bubbleSorter(arr) {
    for (let i = 0, len = arr.length; i < len - 1; i ++) {
        for (let j = 0; j < len - i - 1; j ++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}

console.log(bubbleSorter([3, 2, 1]))

