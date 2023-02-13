//Scope: Where to look for things
// Q. What it is that we are looking for
// JavaScript is a Synchronous single threaded lang
// Inside the Execution Context

// var a = 10;
// var b = 25;
// var c = 30;
// function sum() {
//   var a = 10;
//   var b = 20;
//   return a + b;
// }
// var total = sum();
// sum();
// console.log(total);

// Changing Datatype
// String to number
// let fakeNum = "10";
// let strNum = Number(fakeNum);
// console.log(typeof strNum);
// console.log(typeof fakeNum);

// Number to string
// let num = 10;
// let str = String(num);
// console.log(typeof num);
// console.log(typeof str);
// console.log(str);
//  let fakeNum = "john";
// let strNum = Number(fakeNum);
// console.log(typeof strNum);
// console.log(typeof fakeNum);
// console.log(strNum);
// let y = "5";
// let x = + y;
// console.log(x);

//Converting Booleans to Numbers
//Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
// Other values become true.
// console.log(Number(false));     // returns 0
// console.log(Number(true));      // returns 1

//Converting Booleans to Strings
// console.log(String(false));      // returns "false"
// console.log(String(true));      // returns "true"

// console.log(Boolean(1));
// console.log(Boolean(0));

//Converting Dates to Numbers and strings
// let d = new Date();
// console.log(Number(d));
// console.log(d.getTime());
 
// console.log(String(d));

// Destructuring and Spread
// Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

// let arrayone = [1, 2, 3, 4, 5];

// let [a, b, c, d, e] = arrayone;
// console.log(b);

// Destructuring into two array into different varibales

// let fullstack = [['HTML', 'CSS', 'JS', 'REACT'],['NODE', 'EXPRESS']]
//  let [frontend, backend] = fullstack;
//  console.log(frontend);
//  console.log(backend);


//If we like to skip on of the values in the array we use additional comma. The comma helps to omit the value at that specific index
//  let arrayone = [1, 2, 3, 4, 5];
// let [a, , b, , c] = arrayone;
// console.log(c);


// We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...).

// Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.
// let arrayone = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let [a,b,c,...arr] = arrayone;
// console.log(c);
// console.log(arr[3]);

//spread

// function add(x,y)
// {
//     return x+y;
// }

// let arr = [5,11,8];
// console.log(add(...arr));

//rest

// function add(...args)
// {
//     console.log(args);// Array
//     let sum = 0;
//     for (const i of args) {
//         sum+=i;
//     }
//     return sum;
// }

// console.log(add(1,2,3,4,5));

//NEW
// new is a keyword
// Creating Object with New Keyword

// let person = {}
// let person = {
//   name: "yash",
// };
// console.log(person.name);

// let person = new Object();
// person.firstName = "yash";
// person.lastName = "shamnani";
// console.log(person);

// var person = function(firstname, coursecount){
//     this.firstname = firstname;
//     this.coursecount = coursecount;

// };
// var anurag = new person("yash", 5);
// console.log(anurag.coursecount);
// anurag.coursecount = 10;
// console.log(anurag.coursecount);
// console.log(person);

// let now = new Date();


//  How we use NEW in real world

// var User = function (firstName, courseCount) {
//     this.firstName = firstName;
//     this.courseCount = courseCount;
//     this.getCourseCount = function () {
//       console.log(`Course Count is: ${this.courseCount}`);
//     };
//   };
  
//   User.prototype.getFirstName = function () {
//     console.log(`Your FirstName is : ${this.firstName}`);
//   };
  
//   var anurag = new User("Anurag", 7);
//   console.log(anurag);
//   // console.log(anurag.getCourseCount());
//   anurag.getCourseCount();
//   anurag.getFirstName();
// Set and map
//Set - > Set only contain the unique elements
// The Set constructor lets you create Set objects that store unique values of any type, whether primitive values or object references.
//You can create a JavaScript Set by:
// Passing an Array to new Set()
// Create a new Set and use add() to add values
// Create a new Set and use add() to add variables

// let a = [1, 2, 3, 1, 2, 3, 4, 3, 2, 4, 1, 2, 4, 1, 12, 3, 4];

// let num = new Set(a);
// console.log(num);
// console.log(num.add(7,8));
// console.log(num.delete(12));
// console.log(num);
// console.log(num.has(2));
// num.add({x:10,y:20});
// console.log(num);
// console.log(num.size);
// console.log(num.values());
//  num.forEach((e)=>{
//     console.log(e+2)});
//  num.clear();
//  console.log(num);
//  for(let i of num)
//  {
//    console.log(i);
//  }

// console.log(num.keys());

// Maps holds key value pair but key can be of any datatype string number boolean array
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// A Map has a property that represents the size of the map.
// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
// getter and setter

let mapobj = new Map();
mapobj.set("1","one");
mapobj.set(2,{x:10,y:20});
mapobj.set(true,"yash");
// console.log(mapobj);


// {1:"one"} //object
// {1,2,3,4,5} //set
// {'1' => 'one', 1 => 'one', true => 'one'} //map // FAT ARROW

console.log(mapobj.get(2));
console.log(mapobj.delete("1"));
console.log(mapobj);

// The clear() method removes all elements from a Map object.
console.log(mapobj.has(true));
console.log(mapobj.keys());
console.log(mapobj.values());
mapobj.forEach((value,key,mapobj)=>{
    console.log(`key is ${key} and value is ${value}`)
})

let city = [["india","Delhi"],["goa","goa"],["u.p","lucknow"]]
let newmap = new Map(city);
console.log(newmap);
console.log(newmap.get("u.p"));
newmap.forEach((value,key,newmap)=>{
    console.log(`key is ${key} and value is ${value}`);
})
for (const  [key,value] of newmap) {
    console.log(`key is ${key} and value is ${value}`);
    
    
}

// Closure inner function acces outer function variables
//a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

// function outer()
// {
//     let num1 = 10;
//     function inner(){
//         console.log(num1);
//     }
//     return inner;
// }
// let res = outer();
// res();
