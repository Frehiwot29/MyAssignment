function myReverse(arr) {
    let arrR = [];
    let j = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        arrR[j] = arr[i];
        j++;

    }
    return arrR;
}
let numArr = [1, 2, 3, 4, 5];
console.log(myReverse(numArr));