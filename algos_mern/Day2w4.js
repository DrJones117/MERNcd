// String Matcher

// given a Target str: "riot"
// given a Search str: "Remind me to record the video"

// return the count of how many times Target can be created using the characters from Search
// Characters from search may be used in any order, but can not be used more than once.

let t = "riot"
let s = "Remind me to record the video"

let t2 = "coding";
let s2 = "coding coding coding"

// Output = 2

const strMatcher = (search, target) => {
    const dict = {};
    let min = Infinity

    for (letter in target) {
        dict[target[letter]] = 0;
    }

    for (let i = 0; i < search.length; i++) {
        if (search[i] in dict) {
            dict[search[i]] += 1;
        }
    }

    for (value in dict) {
        if (dict[value] < min) {
            min = dict[value]
        }
    }
    return min
}

console.log(strMatcher(s, t))
console.log(strMatcher(s2, t2))

// not case sensitive, Capital characters and lowercase characters count for the same character
// can this be done in O(n)?