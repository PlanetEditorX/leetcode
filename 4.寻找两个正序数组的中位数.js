/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const nums = nums1.concat(nums2).sort((a, b) => a - b)
    const len = nums.length
    if (len % 2 === 0) {
        return (nums[len/2 - 1] + nums[len/2]) / 2
    } else {
        return nums[(len +1 )/2 - 1]
    }
};
// @lc code=end

findMedianSortedArrays([1,3], [2])
