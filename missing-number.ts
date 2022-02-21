// https://leetcode.com/problems/missing-number/
// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.


function missingNumber(nums: number[]): number {
  const n = nums.length;
  const sum = nums.reduce((a, b) => a + b);

  return Math.floor(n * (n + 1) / 2) - sum;
}

// arithmetic progression
// s_n = \frac{(a_1+a_n)n}{2}
// time complexity O(n) .reduce()
// memory O(1)
