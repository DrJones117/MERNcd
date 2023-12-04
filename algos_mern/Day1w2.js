// given two sorted arrays that may have duplicate values, merge them and remove any duplicates

var arr1 = [1, 3, 3, 5, 8, 10,];
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];
// [1, 3, 5, 8, 10]

// RIOT

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];
// [1, 3, 4]

[]
[1, 2, 2];

// [1,2]

// 1. DRIVER 🚗
// 2. PRESENTER 🧑‍🏫
// 3. NAVIGATOR 🧭


function mergeDedupe(arr1, arr2) {
    //! write the PSEUDOCODE first!
    // Create two iterators. One for each array.
    const result = [];
    for (let i = 0, j = 0; i < arr1.length || j < arr2.length;) {
        // Between the two arrays, get the smaller number.
        const iNum = i < arr1.length ? arr1[i] : Infinity
        const jNum = j < arr2.length ? arr2[j] : Infinity
        const num = Math.min(iNum, jNum);
        // Step forward the iterator that was lower.
        if (iNum < jNum) {
            i++;
        } else {
            j++;
        }
        // Push this number if it isn't already in the list.
        if (result.length === 0 || num > result[result.length - 1]) {
            result.push(num);
        }
    }
    return result;
}

// try out some other tests
console.log(mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5])) // [ 1, 3, 4, 5, 8, 10 ]
console.log(mergeDedupe([2, 3, 3, 5, 8, 10, 12], [1, 3, 4, 6])); // [1, 2, 3, 4, 5, 6, 8, 10, 12]

/* 
    Efficiently combine two already sorted multiset arrays 
    into an array containing the sorted set intersection of the two.
    Output: only the shared values between the two arrays (deduped).
    Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/
//! do not use Set()

const arrA1 = [0, 1, 2, 2, 3, 7];
const arrB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];

const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
 *    dupes we may end up looping over all items of longer arr.
 * - Space: O(n) linear, n = shorter array length.
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} returns The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
  //! write the PSEUDOCODE first!
  // Declare two iterators and loop them for as long as one of them is shorter.
  //Then while the number at i is less than the number at j, advance i.
  //Do the same thing for j as for i.
    const result = [];
    for (let i = 0, j = 0; i < sortedA.length || j < sortedB.length;) {
        const iNum = i < sortedA.length ? sortedA[i] : Infinity
        const jNum = j < sortedB.length ? sortedB[j] : Infinity
        while (iNum < jNum) {
            i++;
        }
        while (jNum < iNum) {
            j++;
        }
        var num = sortedA[i] ?? sortedB[j]
        if (result.length == 0 || num > result[result.length - 1]) {
            result.push(num)
        }
        i++;
        j++;
    }
    return result;
}

console.log(orderedIntersection(arrA1, arrB1));
