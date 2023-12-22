let strs = ["flower","flow","flight"]
let output = "fl"

var longestCommonPrefix = function(strs) {
    const dict = {};
    const arr = [];

    strs.sort((a, b) => a.length - b.length)
    let prefix = strs[0];

    for (let i = strs[1]; i < strs.length; i++) {
        for (let j = 0; j < prefix.length; j++) {

        }s
    }
    return arr
};

console.log(longestCommonPrefix(strs))