// 977. Squares of a Sorted Array

/*
  Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

  Example 1:

  Input: nums = [-4,-1,0,3,10]
  Output: [0,1,9,16,100]
  Explanation: After squaring, thFe array becomes [16,1,0,9,100].
  After sorting, it becomes [0,1,9,16,100].
  Example 2:

  Input: nums = [-7,-3,2,3,11]
  Output: [4,9,9,49,121]
*/


var sortedSquares = function(nums) {
  let len = nums.length
  let i = -1;
  let j = len

  // find the first negative number
  while(nums[i + 1] < 0 && i + 1 < len) {
    i++
  }

  // find the first positive number
  while(nums[j - 1] >= 0 && j - 1 >= 0) {
    j--
  }

  const sortedArray = []
  let k = 0;

  // sort the array
  while(i >= 0 || j < len) {
    if(i!== -1 && j !== len) {
      if(Math.abs(nums[i]) < nums[j]) {
        sortedArray[k++] = Math.abs(nums[i--])
      } else {
        sortedArray[k++] = nums[j++]
      }
    } else if(i < 0) {

      sortedArray[k++] = nums[j++]
    } else {
      sortedArray[k++] = Math.abs(nums[i--])
    }
  }

  // square the array
  for(let i = 0; i < sortedArray.length; i++) {
    sortedArray[i] *= sortedArray[i]
  } 

  return sortedArray
};

console.log(sortedSquares([-11,-7,-2, 1, 6, 7 , 9, 10]));