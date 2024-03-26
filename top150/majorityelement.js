function majorityElement(nums) {
    let count =0;
    let majorityElement;
    for (let index = 0; index < nums.length; index++) {
        if(count == 0){
            majorityElement = nums[index];
        }else if(majorityElement == nums[index]){
            count++;
        }else{
            count--;
        }
    }
    return majorityElement;
}

// Example usage
let nums = [2, 3,4, 1, 1, 1, 2];
console.log(majorityElement(nums)); // Output: 2
