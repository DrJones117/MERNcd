// findObjectsFilter(searchFor, items)

// given a 'search for' object with primative values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const searchFor = {
    firstName: "Bob",
    age: 31
};

// const searchFor2 = {
//     lastName: "Smith",
// }

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 }
];

// return a new list of objects containing the same key pair values
// const output = [
//     { firstName: "Bob", lastName: "Bobbert", age: 31 },
//     { firstName: "Bob", lastName: "White", age: 31 }
// ];

function findObjectsFilter(search, items) {
    let arr = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i].firstName === search.firstName && items[i].age === search.age) {
            arr = [...arr, items[i]];
        }
    }
    return arr;
}


console.log(findObjectsFilter(searchFor, items))

// function findObjectsFilter2(search, items) {
//         return items.filter( item => {
//             return (
//                 item.firstName === search.firstName,
//                 item.lastName === search.lastName,
//                 item.age === search.age
//                 );
//         })
// }

// console.log(findObjectsFilter2(searchFor, items))