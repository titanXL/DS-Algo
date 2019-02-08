function partition(arr, low, high) {
    let pivot = arr[high]
    let i = low

    for (let j = low; j < high; j++) {
        if(arr[j] < pivot) {
            swap(arr, i, j)
            i++
        }
    }
    swap(arr, i, high)
    return i
}

function quickSort(arr, low = 0, high = arr.length -1) {
    if(low < high) {
        let p = partition(arr, low, high)
        quickSort(arr, low, p -1)
        quickSort(arr, p +1, high)
    }
}

function swap(arr, indA, indB) {
    let temp = arr[indA]
    arr[indA] = arr[indB]
    arr[indB] = temp
}

let arr = [3,2,1,5, 10, 8]
quickSort(arr)
console.log(arr)