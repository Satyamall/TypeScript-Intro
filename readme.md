
# Typescript
 - <a href="https://www.typescriptlang.org/download">Docs</a>
 - <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next">Typescript plugin for vscode</a>

# Why
 - Superset of Javascript
 - compile to any js version
 - static type checking
 - find bugs much earlier at compilation
 - tooling
 - allows the intent of the developer to be forcefully defined for other users
 - Developer experience
 - catch common silly mistakes at development time and not during production builds

# What is Typescript

TypeScript is a language that is a superset of JavaScript: JS syntax is therefore legal TS. Syntax refers to the way we write text to form a program.
```js
console.log(4 / []);
// error in ^ typescript
// not an error in js
```
TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system.

For example, JavaScript provides language primitives like string, number, and object, but it doesn’t check that you’ve consistently assigned these. TypeScript does.

This means that your existing working JavaScript code is also TypeScript code. The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs.

if you move code from JavaScript to TypeScript, it is guaranteed to run the same way, even if TypeScript thinks that the code has type errors.

# Why not just learn typescript first?

The answer is that you can’t learn TypeScript without learning JavaScript! TypeScript shares syntax and runtime behavior with JavaScript, so anything you learn about JavaScript is helping you learn TypeScript at the same tim

## TypeScript is JavaScript’s runtime with a compile-time type checker.

**flags**
 - tsc
 - tsc --target ES2015(def es3)
 - tsc --module commonjs

# tsconfig.json:
```js
{
    "include": ["src"],
    "exclude": ["node_modules"],
    "compilerOptions": {
        "module": "commonjs",
        "outDir": "build",
        "target": "es2017",
        "declaration": true,
        "sourceMap": true
    }
}
```

## Basic Types: index.ts

# Boolean: 
The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a boolean value.
```js
let isDone: boolean = false;
```

# Number: 
As in JavaScript, all numbers in TypeScript are either floating point values or BigIntegers. These floating point numbers get the type number, while BigIntegers get the type bigint.
```js
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
```

# String: 
Another fundamental part of creating programs in JavaScript for webpages and servers alike is working with textual data. As in other languages, we use the type string to refer to these textual datatypes. Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.

You can also use template strings, which can span multiple lines and have embedded expressions. These strings are surrounded by the backtick/backquote (`) character, and embedded expressions are of the form ${ expr }.
```js
let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;

let sentence: string =
  "Hello, my name is " +
  fullName +
  ".\n\n" +
  "I'll be " +
  (age + 1) +
  " years old next month.";
```
# Array: 
TypeScript, like JavaScript, allows you to work with arrays of values. Array types can be written in one of two ways. In the first, you use the type of the elements followed by [] to denote an array of that element type:
```js
let list: number[] = [1, 2, 3];
```
The second way uses a generic array type, Array:
```js
let list: Array<number> = [1, 2, 3];
```

# Tuple: 
Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:
```js
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error

// OK
console.log(x[0].substring(1));

console.log(x[1].substring(1));
Property 'substring' does not exist on type 'number'.

// Accessing an element outside the set of known indices fails with an error:

x[3] = "world";
//! Tuple type '[string, number]' of length '2' has no element at index '3'.

console.log(x[5].toString());
//! Object is possibly 'undefined'.
//! Tuple type '[string, number]' of length '2' has no element at index '5'.
```

# Enum: 
A helpful addition to the standard set of datatypes from JavaScript is the enum. As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values.
```js
enum Color {
    Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

// By default, enums begin numbering their members starting at 0. 
// You can change this by manually setting the value of one of its members. 
// For example, we can start the previous example at 1 instead of 0:

enum Color {
  Red = 1,
  Green,
  Blue,
}
let c: Color = Color.Green;

// Or, even manually set all the values in the enum:

enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c: Color = Color.Green;
```

# Null and Undefined: 
In TypeScript, both undefined and null actually have their types named undefined and null respectively. Much like void, they’re not extremely useful on their own:
```js
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```

# Void: 
void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value:
```js
function warnUser(): void {
  console.log("This is my warning message");
}
```

# Any: 
In some situations, not all type information is available or its declaration would take an inappropriate amount of effort. These may occur for values from code that has been written without TypeScript or a 3rd party library. In these cases, we might want to opt-out of type checking. To do so, we label these values with the any type
```js
let value: any;
value =5;
value = "string"
```

# Interface: 
One of TypeScript’s core principles is that type checking focuses on the shape that values have.
```js
interface ButtonProps {
  label: string;
}
```

# Optional Properties: 
```js
interface ButtonProps {
  label: string;
  color?: string;
  size?: string;
}

interface Square {
    color?: string;
    size: number;
}
```

# Functions: 
Functions are the fundamental building block of any application in JavaScript. They’re how you build up layers of abstraction, mimicking classes, information hiding, and modules. In TypeScript, while there are classes, namespaces, and modules, functions still play the key role in describing how to do things. TypeScript also adds some new capabilities to the standard JavaScript functions to make them easier to work with.

To begin, just as in JavaScript, TypeScript functions can be created both as a named function or as an anonymous function. This allows you to choose the most appropriate approach for your application, whether you’re building a list of functions in an API or a one-off function to hand off to another function.

```js
// function nameOfFunction( arg1: type, arg2: type ): type ( this type is the return type of the function ) {  }

// The parameters 'x' and 'y' have the type number
// add function has a return type also number
function add(x: number, y: number): number {
  return x + y;
}

// The parameters 'x' and 'y' have the type number
// add function has a return type void
function add(x: number, y: number): void {
  console.log( x + y )
}



let myAdd = function (x: number, y: number): number {
  return x + y;
};
```

# Optional and default params in functions: 
In TypeScript, every parameter is assumed to be required by the function. This doesn’t mean that it can’t be given null or undefined, but rather, when the function is called, the compiler will check that the user has provided a value for each parameter. The compiler also assumes that these parameters are the only parameters that will be passed to the function. In short, the number of arguments given to a function has to match the number of parameters the function expects.
```js
function buildName(firstName: string, lastName: string) {
  return firstName + " " + lastName;
}

let result1 = buildName("Bob"); // error, too few parameters
//! Expected 2 arguments, but got 1.
let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
//! Expected 2 arguments, but got 3.
let result3 = buildName("Bob", "Adams"); // ah, just right

// to provide optional parameters
function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

let result1 = buildName("Bob"); // works correctly now
let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
//! Expected 1-2 arguments, but got 3.
let result3 = buildName("Bob", "Adams"); // ah, just right
```

# Using interface with functions:
```js
interface Person {
    firstname: string, 
    lastname?: string
}

function buildName( { firstname , lastname = "Smith" } : Person ) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}
```

# Union types: 
```js
let type : 'superadmin' | 'admin' | 'user';

// type can only take in superadmin, admin or user

type = 'partner'
//! Error, Expected either superadmin, admin or user
```

# Union type: 
Occasionally, you’ll run into a library that expects a parameter to be either a number or a string.
```js
type NetworkLoadingState = {
  state: "loading";
};

type NetworkFailedState = {
  state: "failed";
  code: number;
};

type NetworkSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

// Create a type which represents only one of the above types
// but you aren't sure which it is yet.
type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;
```

# Intersection type: 
Intersection types are closely related to union types, but they are used very differently. An intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need.
```js
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtworksData {
  artworks: { title: string }[];
}

interface ArtistsData {
  artists: { name: string }[];
}

// These interfaces are composed to have
// consistent error handling, and their own data.

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;

const handleArtistsResponse = (response: ArtistsResponse) => {
  if (response.error) {
    console.error(response.error.message);
    return;
  }

  console.log(response.artists);
};
```

# React: 
Setting up ts with react with Creaet React App
```js
npx create-react-app my-app --template typescript
```
To add TypeScript to an existing Create React App project, first install it:
```js
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

# or

yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

# typescript react cheatsheet:
 - <a href="https://github.com/typescript-cheatsheets/react">Link</a>