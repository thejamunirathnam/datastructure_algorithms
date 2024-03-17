function isArraySorted(arr, index = 0) {
    if (index >= arr.length - 1) {
        return true;
    }

    if (arr[index] > arr[index + 1]) {
        return false;
    }

    return isArraySorted(arr, index + 1);
}

const sortedArray = [1, 2, 3, 4, 3];
const unsortedArray = [1, 3, 2, 4, 5];

console.log(isArraySorted(sortedArray)); // Output: true
console.log(isArraySorted(unsortedArray)); // Output: false
