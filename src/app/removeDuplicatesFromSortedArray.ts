export const removeDuplicates = (nums: number[]) => {
  //approach: two pointers
  //as it mentions sorted array

  //left and right pointer
  //right pointer keeps moving along the array
  //start left at index 0
  //start right at index 1
  //can just check if the left pointer value and right pointer value are same
  //if not same,
  //we move left pointer by 1
  //we can just change the left pointer value to the right pointer value
  //checking for nums[left] != nums[right], and swapping works for all cases
  //even if there is no duplicates, it works,
  //as we will just be moving left by 1 and keeping the value of left to what right's value is
  //this basically means we are keeping the value of array which is not duplicate the same,
  //also right pointer keeps moving along, no matter what
  //TC : O(N)
  //SC : O(1)

  let left = 0;
  let right = 1;
  while (right < nums.length) {
    if (nums[left] !== nums[right]) {
      left++;
      nums[left] = nums[right];
    }
    right++;
  }
  return left + 1;
};
