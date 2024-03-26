function removeElement(nums, val) {
   let index =0;
   for(let i=0;i<nums.length;i++){   
      if(nums[i] != val){
        nums[index] =nums[i]; 
        index++;
      }
   }
   return index;
}

// Example usage
let nums = [3, 2, 2, 3];
let val = 3;
let length = removeElement(nums, val);
console.log(length); // Output: 2
console.log(nums); // Output: [2, 2]




// Alternate
function removeElement(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            nums.splice(i,1)
        }
    }
}
let nums = [3, 2, 2, 3];
let val = 3;
let length = removeElement(nums, val);
console.log(length); // Output: 2
console.log(nums); // Output: [2, 2]
