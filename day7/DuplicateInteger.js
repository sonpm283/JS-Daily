/*
  Easy

  Duplicate Integer

  - Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

  Example 1:

  Input: nums = [1, 2, 3, 3]

  Output: true
  Example 2:

  Input: nums = [1, 2, 3, 4]

  Output: false
*/

function hasDuplicate(nums) {

  const objNum = {}
  for (let i = 0; i < nums.length; i++) {
    if(objNum[nums[i]] !== undefined) return true

    objNum[nums[i]] = nums[i]
  }

  return false
}

const result = hasDuplicate([3, 2, 1, 3]);

console.log(result);
