// Input: [0,1,2,2,3,0,4,2]
// Output: 5 -> [0,1,3,0,4]
const removeElement = function (nums, val) {
  if(!Array.isArray(nums) || nums.length === 0) return -1

  for(let i = 0; i < nums.length; i++) {
    const num = nums[i]

    if(num === val) {
      nums.splice(i, 1)

      --i
    }

  }

  return nums.length
}

console.log(removeElement([0,1,2,2,3,0,4,2], 2));

const removeElementV2 = function (nums, val) {
  if(!Array.isArray(nums) || nums.length === 0) return -1

  let index = 0

  for(let i = 0; i < nums.length; i++) {
    const num = nums[i]

    if(num !== val) {
      nums[index] = num[i]
      index++
    }
  }

  console.log(nums);
  return index
}

console.log(removeElementV2([0,1,2,2,3,0,4,2], 2));
