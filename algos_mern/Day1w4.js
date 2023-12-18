/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

function rehash(str) {
    const temp = [];
    let start;
    let end;
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (isNaN(str[i]) && isNaN(str[j])) {
                start = i
                end = j
                temp.push(str.slice(start, end))
                break
            } 
            if (isNaN())
        }
    }
    return temp
}

// console.log(rehash(str1) === expected1, "<-- should be \"true\"");
console.log(rehash(str1));

// hints
// isNaN
// parseInt()
// someObj.hasOwnProperty("key")