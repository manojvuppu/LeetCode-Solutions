/*
We can use a Map to do this in O(n) time. Iterate over each number (let say num) in the array and check if target - num is already present in the map. If it is present, it means that in previous iterations we have already seen a number which when added to current num returns the target. And in each iteration we are putting the current num as key and it's index as value in the Map.
*/

export const twoSum = (nums: number[], target: number) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];
    if (map.has(difference)) {
      return [map.get(difference), i];
    }
    map.set(nums[i], i);
  }
  return [];
};
