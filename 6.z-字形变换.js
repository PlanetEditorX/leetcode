/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// 每 2*numRows-2为一组
var convert = function(s, numRows) {
    let len = s.length
    if (len < numRows || numRows <= 1) {
        return s
    }
    // 计算有多少列
    let w = 2*(numRows-1)
    let column = Math.ceil(len / w * (1+w-numRows))
    let arr = new Array(numRows).fill('')
    for (let i = 0; i < numRows; ++i) {
        arr[i] = new Array(column).fill('');
    }

    let ts = s
    for (let i = 0,x=0,y=0; ts.length, x >= 0; i++) {
        if (ts[i]) {
            if (i < numRows && !arr[x][y]) {
                arr[x][y] = ts[i]
                if (x < numRows - 1) {
                    x++
                }
            } else {
                if (x > 0) {
                    --x
                }
                arr[x][++y] = ts[i]
                if ((i+1) % w === 0) {
                    ts = ts.slice(w)
                    i = -1
                    if (x > 0) {
                        --x
                        y++
                    } else {
                        x++
                    }
                } else if (w === numRows) {
                    ts = ts.slice(w+1)
                    i = -1
                    x++
                }
            }
        } else {
            break
        }

    }
    return arr.map(item => item.join('')).join('')
};
// @lc code=end

console.log(convert('ABCDEF', 2));