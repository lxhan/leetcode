// https://leetcode.com/problems/contains-duplicate/
// Given an integer array nums, 
// return true if any value appears at least twice in the array, 
// and return false if every element is distinct.

function containsDuplicate(nums: number[]): boolean {
  const iterated = new Set();

  for (const num of nums) {
    if (iterated.has(num)) {
      return true;
    }
    iterated.add(num);
  }

  return false;
}

// Looping through all elements 1 time
// Set will be same size as input array
// time complexity O(n) for ... of
// memory O(n) Set()
