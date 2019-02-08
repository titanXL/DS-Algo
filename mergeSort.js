function merge(arr1, arr2) {
    let result = []
    while(arr1.length && arr2.length) {
        if(arr1[0] < arr2[0]) {
            result.push(arr1.shift())
        } else {
            result.push(arr2.shift())
        }
    }
    if(!arr1.length) {
        result =  result.concat(arr2)
    } else if(!arr2.length){
        result =  result.concat(arr1)
    }
    return result
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}


console.log(mergeSort([1]))