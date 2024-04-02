//283. Move Zeroes

/*
  Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
  Note that you must do this in-place without making a copy of the array.

  Example 1:
    Input: nums = [0,1,0,3,12]
    Output: [1,3,12,0,0]

  Example 2:
    Input: nums = [0]
    Output: [0]
*/

// two pointer
var moveZeroes = function (nums) {
  if (!Array.isArray(nums) || nums.length === 0) return [];
  const len = nums.length;
  let i = 0;
  let j = 0;

  while (j <= len - 1) {
    if (nums[j] !== 0) {
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;

      i++;
    }

    j++;
  }

  return nums;
};

console.log(moveZeroes([0,1,0,3,12]));
