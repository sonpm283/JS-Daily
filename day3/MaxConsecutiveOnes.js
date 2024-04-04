//Max Consecutive Ones
//Given a binary array nums, return the maximum number of consecutive 1's in the array.

/*
  Example 1:

  Input: nums = [1,1,0,1,1,1]
  Output: 3
  Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

  Example 2:

  Input: nums = [1,0,1,1,0,1]
  Output: 2
*/

var findMaxConsecutiveOnes = function (nums) {
  if (!Array.isArray(nums) || nums.length === 0) return -1;

  let count = 0;
  let max = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] === 1) {
      count++;
    } else {
      count = 0;
    }

    max = max > count ? max : count;

    i++;
  }

  return max;
};

console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));
