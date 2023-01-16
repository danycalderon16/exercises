let nums = [2,7,11,15]
let target = 9

function twoSum(nums, target){  
    const map1 = new Map();
    for(let i in nums){
        // console.log(map1);
        if(map1.get(nums[i])){
            // console.log('dentro',nums[i]);
            return true;
        }
        map1.set(target-nums[i],nums[i]);
    }
    return false
}

console.log(twoSum(nums,9));
console.log(twoSum(nums,10));
console.log(twoSum(nums,13));