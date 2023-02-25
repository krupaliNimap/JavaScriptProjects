const arr = [1, 2, 3, '']
function countTruthy(arr){
    var count = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] ) count += 1;
    }
    return count
}
console.log(countTruthy(arr))