// https://leetcode.com/problems/two-sum/

// write a for loop starting with the first number.
// find a number that when added to the first number equals the target value.
const nums1 = [2, 11, 7, 15];
const target1 = 9;

const nums2 = [5, 7, 5, 8, 2];
const target2 = 7;


const twoNums = (nums, target) => {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return result;
};

console.log(twoNums(nums1, target1))
console.log(twoNums(nums2, target2))


{
const nums = [2, 4, 5, -2, 1]
const target = 7

function newFunc(nums, target) {
    const solutions = []
    for(let i=0; i<nums.length; i++) {
        for(let j=0; j<solutions.length; j++) {
            if(nums[i] === solutions[j]) {
                return [j, i]
            }
        }
        solutions.push(target - nums[i])
    }
        return []
    }
    
console.log(newFunc(nums, target))
}


// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// the array is unsorted, contains no floats, and there may be duplicate values

// Given nums = [2, 11, 7, 15], target = 9,
// Because nums[0] + nums[2] = 2 + 7 = 9
// return [0, 2].