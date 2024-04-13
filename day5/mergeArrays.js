// 2570. Merge Two 2D Arrays by Summing Values

/*
  Input: nums1 = [[1,2],[2,3],[4,5]], nums2 = [[1,4],[3,2],[4,1]]
  Output: [[1,6],[2,3],[3,2],[4,6]]
*/

var mergeArrays = function (nums1, nums2) {
  if (!Array.isArray(nums1) || !Array.isArray(nums2)) return [];
  if (nums1.length === 0 || nums2.length === 0) return [];
  const mergeArrs = [...nums1, ...nums2].sort();
  const hashMap = new Map();

  for (let i = 0; i < mergeArrs.length; i++) {
    const element = mergeArrs[i];
    const hashMapValue = hashMap.get(element[0])
      ? hashMap.get(element[0]) + element[1]
      : element[1];

    hashMap.set(element[0], hashMapValue);
  }

  console.log(mergeArrs);

  const result = [];

  hashMap.forEach((value, key) => {
    result.push([key, value]);
  });

  return result;
};

console.log(
  mergeArrays(
    [
      [148, 597],
      [165, 623],
      [306, 359],
      [349, 566],
      [403, 646],
      [420, 381],
      [566, 543],
      [730, 209],
      [757, 875],
      [788, 208],
      [932, 695],
    ],
    [
      [74, 669],
      [87, 399],
      [89, 165],
      [99, 749],
      [122, 401],
      [138, 16],
      [144, 714],
      [148, 206],
      [177, 948],
      [211, 653],
      [285, 775],
      [309, 289],
      [349, 396],
      [386, 831],
      [403, 318],
      [405, 119],
      [420, 153],
      [468, 433],
      [504, 101],
      [566, 128],
      [603, 688],
      [618, 628],
      [622, 586],
      [641, 46],
      [653, 922],
      [672, 772],
      [691, 823],
      [693, 900],
      [756, 878],
      [757, 952],
      [770, 795],
      [806, 118],
      [813, 88],
      [919, 501],
      [935, 253],
      [982, 385],
    ]
  )
);

var mergeArraysV2 = function (nums1, nums2) {
  if (!Array.isArray(nums1) || !Array.isArray(nums2)) return [];
  if (nums1.length === 0 || !nums2.length) return [];
  const mergeNums = [...nums1, ...nums2].sort();
  const hashMap = {};

  for (let i = 0; i < mergeNums.length; i++) {
    hashMap[mergeNums[i][0]] = hashMap[mergeNums[i][0]]
      ? hashMap[mergeNums[i][0]] + mergeNums[i][1]
      : mergeNums[i][1];
  }

  console.log(hashMap);

  const result = [];
  for (const i in hashMap) {
    result.push([i, hashMap[i]]);
  }
  return result;
};

console.log(
  mergeArraysV2(
    [
      [148, 597],
      [165, 623],
      [306, 359],
      [349, 566],
      [403, 646],
      [420, 381],
      [566, 543],
      [730, 209],
      [757, 875],
      [788, 208],
      [932, 695],
    ],
    [
      [74, 669],
      [87, 399],
      [89, 165],
      [99, 749],
      [122, 401],
      [138, 16],
      [144, 714],
      [148, 206],
      [177, 948],
      [211, 653],
      [285, 775],
      [309, 289],
      [349, 396],
      [386, 831],
      [403, 318],
      [405, 119],
      [420, 153],
      [468, 433],
      [504, 101],
      [566, 128],
      [603, 688],
      [618, 628],
      [622, 586],
      [641, 46],
      [653, 922],
      [672, 772],
      [691, 823],
      [693, 900],
      [756, 878],
      [757, 952],
      [770, 795],
      [806, 118],
      [813, 88],
      [919, 501],
      [935, 253],
      [982, 385],
    ]
  )
);
