/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res = []
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const key = target - nums[i]
        if (!map.has(key)) {
            map.set(nums[i], i)
        } else {
            return [map.get(key), i]
        }
    }
    // nums.forEach((item, index, arr) => {
    //     const key = target - item
    //     if (!map.has(key)) {
    //         map.set(item, index)
    //     } else {
    //         res = [map.get(key), index]
    //     }
    // })
    return res
};
// @lc code=end
