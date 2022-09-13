/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var addTwoNumbers = function (l1, l2) {
    function add(l1, l2, extend = 0) {
        let res = new ListNode()
        let l1Val = l1?.val ?? 0
        let l2Val = l2?.val ?? 0
        res.val = l1Val + l2Val + extend
        extend = 0
        if (res.val > 9) {
            res.val = res.val - 10
            extend = 1
        }
        if (l1?.next || l2?.next || extend) {
            res.next = add(l1?.next, l2?.next, extend)
        }
        return res
    }
    let result = new ListNode()
    result = add(l1, l2, 0)
    return result
};
// @lc code=end



// let l1_3 = new ListNode(3, null)
// let l1_4 = new ListNode(4, l1_3)
// let l1 = new ListNode(2, l1_4)

// let l2_4 = new ListNode(4, null)
// let l2_6 = new ListNode(6, l2_4)
// let l2 = new ListNode(5, l2_6)

// addTwoNumbers(l1, l2)