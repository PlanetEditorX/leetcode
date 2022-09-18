/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = ''
    for (let i = 0; i < s.length; i ++) {
        // 从当前位置起，分别比较左右位置的值，相同则为回文串
        let left = i - 1, right = i + 1 // s为奇数长度
        // 当左偏移大于0，右偏移小于字符串长度，且左右位置的字符相等
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left --, right ++
        }
        // 获取当前的循环得到字符串的长度，和保存的回文串比较长度大小
        if (res.length < right - left - 1) {
            res = s.substring(left + 1, right)
        }
        // s为偶数长度时以当前的位置作为左偏移
        left = i, right = i + 1
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left --, right ++
        }
        if (res.length < right - left - 1) {
            res = s.substring(left + 1, right)
        }
    }
    return res
};
// @lc code=end

longestPalindrome("ac")
