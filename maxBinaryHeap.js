class MaxBinaryHeap {
  constructor() {
    this.values = [45, 20, 30]
  }
  insert(value) {
    this.values.push(value)
    this._bubbleUp(values)
  }

  extractMax() {
    const max = this.values[0]
    const end = this.values.pop()
    if(this.values.length > 0 ) {
      this.values[0] = end
      this._sinkDown()
    }

    return max
  }

  _sinkDown() {
    let index = 0
    const length = this.values.length
    const element = this.values[0]

    while(true) {
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = 2*index + 2

      let leftChild, rightChild
      let swap = null

      if(leftChildIndex< length) {
        leftChild = this.values[leftChildIndex]
        if(leftChild > element) {
          swap = leftChildIndex
        }
      }
      if(rightChildIndex < length) {
        rightChild = this.values[rightChildIndex]
        if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIndex
        }
      }
      if(swap == null) break
      this.values[index] = this.values[swap]
      this.values[swap] = element
      index = swap
    }
  }

  _bubbleUp() {
    let index = this.values.length - 1
    let element = this.values[index]
    while(index > 0) {
      debugger
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.values[parentIndex]
      if(element <= parent) break
      this.values[parentIndex] = element
      this.values[index] = parent
      index = parentIndex
    }
  }
  _swap(arr, index1 , index2) {
    var temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
  }
}