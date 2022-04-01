let isDone = false;
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
let big = 100n;
let color = "blue";
color = 'red';
let fullName = `Bob Bobbington`;
let age = 37;
let sentence = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;
let sentence1 = "Hello, my name is " +
    fullName +
    ".\n\n" +
    "I'll be " +
    (age + 1) +
    " years old next month.";
let list = [1, 2, 3];
let list1 = [1, 2, 3];
// Declare a tuple type
let x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error
// OK
console.log(x[0].substring(1));
// console.log(x[1].substring(1));
// Property 'substring' does not exist on type 'number'.
// Accessing an element outside the set of known indices fails with an error:
// x[3] = "world";
//! Tuple type '[string, number]' of length '2' has no element at index '3'.
// console.log(x[5].toString());
//! Object is possibly 'undefined'.
//! Tuple type '[string, number]' of length '2' has no element at index '5'.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
// By default, enums begin numbering their members starting at 0. 
// You can change this by manually setting the value of one of its members. 
// For example, we can start the previous example at 1 instead of 0:
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
let c1 = Color.Green;
// Or, even manually set all the values in the enum:
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
let c2 = Color.Green;
// Not much else we can assign to these variables!
let u = undefined;
let n = null;
function warnUser() {
    console.log("This is my warning message");
}
let value;
value = 5;
value = "string";
// function nameOfFunction( arg1: type, arg2: type ): type ( this type is the return type of the function ) {  }
// The parameters 'x' and 'y' have the type number
// add function has a return type also number
function add(x, y) {
    return x + y;
}
// The parameters 'x' and 'y' have the type number
// add function has a return type void
function add2(x, y) {
    console.log(x + y);
}
let myAdd = function (x, y) {
    return x + y;
};
// function buildName( { firstname , lastname = "Smith" } : Person ) {
//   if (lastName) return firstName + " " + lastName;
//   else return firstName;
// }
let type;
const handleArtistsResponse = (response) => {
    if (response.error) {
        console.error(response.error.message);
        return;
    }
    console.log(response.artists);
};
//# sourceMappingURL=Example.js.map