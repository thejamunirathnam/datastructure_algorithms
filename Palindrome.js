/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = cleanString.length-1;
    while(left<right){
       console.log("left",left,cleanString[left],"right",right,cleanString[right]); 
       if(cleanString[left]==cleanString[right]){
         left++;
         right--;
       }else{
        return false;
       }
    }
    return true;
    
};

console.log(isPalindrome("race a car"));