/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let singleElement = 0;
    for(let i=0; i<nums.length; i++){
        singleElement ^= nums[i];
    }
    return singleElement;
};

console.log(singleNumber([4,1,2,1,2]));