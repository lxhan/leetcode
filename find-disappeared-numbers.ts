// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
// Given an array nums of n integers where nums[i] is in the range [1, n], 
// return an array of all the integers in the range [1, n] that do not appear in nums.


// cyclic sort
function findDisappearedNumbers(nums: number[]): number[] {
  let i = 0;
  while (i < nums.length) {
    let pos = nums[i] - 1;
    if (nums[i] !== nums[pos]) {
      const tmp = nums[i];
      nums[i] = nums[pos];
      nums[pos] = tmp;
    } else {
      i++;
    }
  }

  const disappeared = [];
  for (let j = 0; j < nums.length; j++) {
    const next = j + 1;
    if (nums[j] !== next ) {
      disappeared.push(next);
    }
  }

  return disappeared;
}

// time complexity O(n)
