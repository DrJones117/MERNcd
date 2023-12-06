// #1 Missing Value

// You are given an array with the length of n that contains in no order integers from 0 to n.
// The length of the array is n and the largest number is no bigger than n.

// Quickly determine and return the missing value.

// The short version: If I give you an array of 0-9 and it's missing a number, how do you find it?

// quickly: O(n)
// no space constraints

// given [3, 0, 1]
// return 2

// 

const arr1 = [5, 2, 7, 8, 4, 9, 3, 0, 1];
const result1 = 6;
const arr2 = [1,2,3];
const result2 = 0;

function missingValue (arr) {
    const thing = arr.reduce((acc, n, i) => {
        acc.sum += n;
        acc.exSum += i;
        return acc;
    }, {sum: 0, exSum: 0})
    thing.exSum += arr.length
    return thing.exSum - thing.sum; 
}

console.log(missingValue(arr1))
console.log(missingValue(arr2))


{

    
    // #2 Min of Sorted-Rotated
    
    // You are given an an array of integers with a length of up to 255 thousand.
    // This array has first been sorted, then rotated by an unknown amount.
    
    // Find and return the minimum value.
    
    // Ninja Goal: Do this faster than 0(n) ie: find your answer without visiting every single element
    // (think binary search)
    
    const arr1 = [13, 17, 18, 3, 5, 6, 8, 9, 10];
    const result1 = 3

    const arr2 = [2, 3, 4, 5, 0, 1];
    const result2 = 0;
    
    function minSort (arr, l = 0, r = arr.length - 1) {
        if (r - l <= 1) {
            return arr[r];
        }

        let mid = Math.floor((l + r) / 2)
        if (arr[mid] < arr[l]) {
            return minSort(arr, l, mid);
        } else {
            return minSort(arr, mid, r);
        }
    }

    console.log(minSort(arr2))
}