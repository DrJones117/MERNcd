// === 1 ===

console.log(example);
let example = "I'm the example!";

// Rewritten
{
    console.log(example);
    let example = "I'm the example!";
}

// Prediction: example hasn't been intialized | Result: example hasn't been intialized


// === 2 === 

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// Rewritten
{
    var needle;
    function test(){
        var needle;
        needle = 'magnet';
        console.log(needle);
    } 
    needle = 'haystack';
    test();
}

//  Prediction: magnet | Result: magnet

// === 3 ===

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// Rewritten
{
    var brendan;
    function print(){
        brendan = 'only okay';
        console.log(brendan);
    }
    brendan = 'super cool';
    console.log(brendan);
}

// Prediction: super cool | Result: super cool


// === 4 ===

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// Rewritten
{
    var food;
    function eat(){
        var food;
        food = 'half-chicken';
        console.log(food);
        food = 'gone';
    }
    food = 'chicken';
    console.log(food);
    eat();
}

// Prediction: chicken, half-chicken | Result: chicken, half-chicken

// === 5 ===

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// Rewritten
{
    var mean;
    mean();
    console.log(food);
    mean = function() {
        food = "chicken";
        console.log(food);
        var food = "fish";
        console.log(food);
    }
    console.log(food);
}

// Prediction: mean is not defined | Result: mean is not a function

// === 6 ===

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);



// Rewritten
{
    var genre;
    function rewind() {
        genre = "rock";
        console.log(genre);
        var genre = "r&b";
        console.log(genre);
    }
    console.log(genre);
    genre = "disco";
    rewind();
    console.log(genre);
}

// Prediction: undefined, rock, r&b, r&b | Result: undefined, rock, r&b, disco
// I'm not sure why this is.

// === 7 ===

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// Rewritten
{
    function learn() {
        var dojo;
        dojo = "seattle";
        console.log(dojo);
        dojo = "burbank";
        console.log(dojo);
    }
    dojo = "san jose";
    console.log(dojo);
    learn();
    console.log(dojo);
}

// Prediction: san jose, seattle, burbank, san jose | Result: san jose, seattle, burbank, san jose

// === 8 ===

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// Rewritten
{
    function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
    }
    console.log(makeDojo("Chicago", 65));
    console.log(makeDojo("Berkeley", 0));
}

// Prediction: There is no dojo object| Result: hiring get's set to true, Assignment to constant variable
// 0 is less than = 0 so it runs the code inside. You can't reassign dojo since it was declared with const




