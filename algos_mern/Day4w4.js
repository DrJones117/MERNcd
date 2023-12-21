/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    const result = [[]];
    let minimum;

    for (let i of nums) {
        const length = result.length;

        for (let i = 0; i < length; i++) {
            const temp = result[i].slice();
            temp.push(i);
            result.push(temp);
        }
        return result.length
    }
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
            if (result[i][j] >= target) {
                return 1
            } else {
                let sum;
                sum += result[i][j];
                if (sum >= target) {
                    minimum = result[i].length - 1;
                } else {
                    return 0
                }
            }
        }
        // if (result[i] >= target) {
        //     return 1;
        // } 
        // for (let k = 0; k < nums.length; k++) {
        //     for (let j = 0; j < nums.length; j++) {
        //         if (nums[i] + nums[j] >= target) {
        //             return 2
        //         }
        //     }
        // }
    }
    return minimum
};