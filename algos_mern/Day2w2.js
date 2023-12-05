// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
// k = 16
// arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array

// To do
// Create a new array
// Create a for loop with two iterators
// Start from the first index and subtract each value from "k"
// When it reaches 0 we slice it and return 
// if the it ends up being less than 0 continue

function findConsqSums(arr, k) {
    const output = [];
    let sum = k;
    for (let i = 0, j = i; i < arr.length && j < arr.length; j++) {
        sum -= arr[j];
        if (sum === 0) {
            output.push(arr.slice(i, j + 1));
            sum = k;
            i++
            j = i;
        } else if (sum < 0) {
            i++
            j = i;
            sum = k
        } else {
            continue;
        }
    }
    return output;
}

console.log(findConsqSums([2, 5, 3, 6, 7, 0, 0, 23, 11], 16));