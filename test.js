function insertSort(arr) {
  console.log(arr)
  for (let j = 2, len = arr.length; j < len; j ++) {
    let key = arr[j], i = j - 1
    while (i > 0 && arr[i] > key) {
      arr[i + 1] = arr[i]
      i --
    }
    arr[i + 1] = key
  }
  return arr;
}
console.log(insertSort([1, 3, 2, 5, 4, 6, 8]))
