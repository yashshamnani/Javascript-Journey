// Scope: Where to look for things
// Q. What is that we are looking for

// JavaScript is a synchronous, single Threaded language.

// synchronous means to be in a sequence, i.e. every statement of the code gets executed one by one. So, basically a statement has to wait for the earlier statement to get executed.

// JavaScript is a single-threaded language, which means it has only one call stack that is used to execute the program. The call stack is the same as the stack data structure that you might read in Data structures.
//single thread means js execute one line at a time.
// /Everything in JavaScript Happens in Execution context
//lexicall --- in heirarchy
// program for execution context

// var name = "Yash";
// var lastname = "Shamnani";
// function fullname() {
//   var company = "ineuron";
//   return company;
// }
// console.log(name);
// var funName = fullname();
// console.log(funName);

// Showing them HTMl and JS Example (Folder)

// Call stack maintain the order of Execution of Execution Context
// I will do google and show
/*
    * Different Name:
    - Execution Conetxt Stack
    - Program Stack
    - Control Stack
    - Runtime Stack
    - Machine Stack
*/

// Hoisting
//JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting allows functions to be safely used in code before they are declared. (accessing something before it is declared)
//hoisting is how javascript behaves

// getname();
// console.log(x);
// var x = 7;
// function getname() {
//   console.log("hello world");
// }
// console.log(x);
// getname();

// -------------------------------
// Understanding working Function and understanding Scope

// var gravity = 9.8;
// function ineuron1() {
//   var gravity = 9.81;
//   console.log(gravity);
// }
// function ineuron2() {
//   var gravity = 9.81111;
//   console.log(gravity);
// }
// console.log(gravity);
// ineuron1();
// ineuron2();

// Global Scope // space
// Anything written outside of any block is called as global scope or global space.

// Exaplnning loosely typed (Weekly typed) language versus Strongly typed language

// Scope Channing (Scope or Lexical Environment)
// a programming language is strongly typed if it demands the specification of data types. A programming language is loosely typed, or weakly typed, when it does not require the explicit specification of different types of objects and variables. 



//lexical scopes examples
// let x =10;
// let y = 20;
// function add()
// {
     
//     function sum(){
         
//         console.log(x+y);
//     }
//     sum();
// }

// add();

// function xyz() {
//     console.log(abc);
//     function xxyyzz() {
//       console.log(abc + "Inside");
//     }
//     //   xxyyzz();
//   }
//   var abc = 10;
//   xyz();
  
// Difference between var, let and Const
// ---- 1 ------for var it will give undefined
// console.log(b);
// let a = 10;
// var b = 16;
// ---- 2 ------for let ReferenceError: Cannot access 'a' before initialization
// console.log(a);
// let a = 10;
// var b = 16;

// Temporal Dead Zone : The let and const variables are not accessible before they are initialized with some value, and the phase between the starting of the execution of block in which the let or const variable is declared till that variable is being initialized is called Temporal Dead Zone for the variable.

// Redeclaration of variable using let not allowed it will throw an error

// let a = 10
// let a = 20


// Expalaning difference between let var and const.

// ----
// let is Bloack Scope (Also Called Compound Statement)

// var variable has the function scope, But global scope when it is declared outside the function.

// Example of var variable with function scope:

// function myFun() {
//     var myName = "my name";
//     console.log(myName);
// }
// myFun(); //output => "my name"
// console.log(myName); //output=> re


// var variable can be re-declared and updated. re-declaration allows declaring more than one variable with the same name, because of this reason, if we declare a new variable by mistake, it will override the original variable value.
// The let variable has block scope, 
//let variable didn't allow re-declaration of the variable
//we can not update the value of the const variable.
//const declarations are block-scoped
//Const Variables cannot be updated or re-declared
{
    var aa = 10;
    let ab = 20;
    const abc = 30;
  }
  
  // Shadowing
  
  var aaa = 100;
  // let bb = 2000
  {
    var aaa = 10;
    let bb = 20;
    const c = 30;
  }
  console.log(aaa); // var gets redeclared  hence give value 10
  console.log(bb); //error bcoz let is block scope 
  
/*
Js
Data types
variables
conditions
Math functions
Arrays and methods of array
Loops
Functions, arrow functions
Objects
Date
Higher order functions
Functional programming - foreach, every, map, filter, reduce, sort
Destructing
Type coversions
Spread operator
Rest
Functions with new keyword
Set
Maps
Closures

Js is a Synchronous single threaded  language and it is inside the execution context

Exception handling in js

Reference error, syntax error type error

Hoisting

Var vs const vs let
 
Function scopes- lexical scope chaining


Temporeror dead zone

*/
