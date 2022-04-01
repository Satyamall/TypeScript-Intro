
let isDone: boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;

let sentence1: string =
  "Hello, my name is " +
  fullName +
  ".\n\n" +
  "I'll be " +
  (age + 1) +
  " years old next month.";

let list: number[] = [1, 2, 3];

let list1: Array<number> = [1, 2, 3];

// Declare a tuple type
let x: [string, number];
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

enum Color {
    Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

// By default, enums begin numbering their members starting at 0. 
// You can change this by manually setting the value of one of its members. 
// For example, we can start the previous example at 1 instead of 0:

enum Color1 {
  Red = 1,
  Green,
  Blue,
}
let c1: Color = Color.Green;

// Or, even manually set all the values in the enum:

enum Color2 {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c2: Color = Color.Green;

// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

function warnUser(): void {
    console.log("This is my warning message");
}

let value: any;
value =5;
value = "string"

interface ButtonProps {
    label: string;
}

interface ButtonProps {
    label: string;
    color?: string;
    size?: string;
  }
  
interface Square {
      color?: string;
      size: number;
}

// function nameOfFunction( arg1: type, arg2: type ): type ( this type is the return type of the function ) {  }

// The parameters 'x' and 'y' have the type number
// add function has a return type also number
function add(x: number, y: number): number {
    return x + y;
  }
  
  // The parameters 'x' and 'y' have the type number
  // add function has a return type void
  function add2(x: number, y: number): void {
    console.log( x + y )
  }
  
  
  
  let myAdd = function (x: number, y: number): number {
    return x + y;
  };
  

//   function buildName(firstName: string, lastName: string) {
//     return firstName + " " + lastName;
//   }
  
//   let result1 = buildName("Bob"); // error, too few parameters
//   //! Expected 2 arguments, but got 1.
//   let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
//   //! Expected 2 arguments, but got 3.
//   let result3 = buildName("Bob", "Adams"); // ah, just right
  
//   // to provide optional parameters
//   function buildName(firstName: string, lastName?: string) {
//     if (lastName) return firstName + " " + lastName;
//     else return firstName;
//   }
  
//   let result1 = buildName("Bob"); // works correctly now
//   let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
//   //! Expected 1-2 arguments, but got 3.
//   let result3 = buildName("Bob", "Adams"); // ah, just right

  interface Person {
    firstname: string, 
    lastname?: string
}

// function buildName( { firstname , lastname = "Smith" } : Person ) {
//   if (lastName) return firstName + " " + lastName;
//   else return firstName;
// }

let type : 'superadmin' | 'admin' | 'user';

// type can only take in superadmin, admin or user

// type = 'partner'
//! Error, Expected either superadmin, admin or user

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