function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let position = 0;
    for (let index = 1; index < array.length; index++) {
        if(array[index]!=array[position]){
            position++;
            array[position]= array[index];
        }
    }
}

// Example usage
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let length = removeDuplicates(nums);
console.log(length); // Output: 5

