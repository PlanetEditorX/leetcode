/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let arr1 = [], max = 0
    for (let i = 0; i < s.length; i++) {
        if (arr1.indexOf(s[i]) !== -1) {
            arr1.splice(0, arr1.indexOf(s[i]) + 1)
        }
        arr1.push(s[i])
        max = arr1.length > max ? arr1.length : max
    }
    return max
};
// @lc code=end

lengthOfLongestSubstring('pwwkew')