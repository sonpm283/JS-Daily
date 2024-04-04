/*
  Input: [2,7,11,15], target = 9
  Output: [0, 1]
*/
const twoSum = function (arr, target) {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  const len = arr.length;

  for (let i = 0; i <= len - 1; i++) {
    for (let j = i + 1; j <= len - 1; j++) {
      if (arr[i] + arr[j] === target) return [i, j];
    }
  }

  return [];
};

console.log(twoSum([2, 11, 11, 7], 10));

const twoSumV2 = function (arr, target) {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  let len = arr.length;
  const map = new Map();

  for (let i = 0; i < len; i++) {
    const complement = target - arr[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(arr[i], i);
  }

  return [];
};

console.log(twoSumV2([2, 3, 6, 7], 9));

const twoSumV3 = function (arr, target) {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  let len = arr.length;
  const hasMap = {};

  for (let i = 0; i < len; i++) {
    const num = arr[i];
    console.log(num, hasMap);
    //target - num: (nếu tìm thấy phần còn thiếu của target = 9 trong hasMap)

    if (hasMap[target - num] !== undefined) { // nếu tìm thấy:
      return [hasMap[target - num], i];
    }

    hasMap[arr[i]] = i;
  }

  return [];
};

console.log(twoSumV3([2, 11, 11, 7], 9));
