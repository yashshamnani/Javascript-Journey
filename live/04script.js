// Number
// String
// Array
// object

// let userDetails = {
//   firstName: "Anurag",
//   lastName: "Tiwari",
//   role: "admin",
//   loginCount: 25,
// };
// console.log(userDetails.firstName);
// console.log(userDetails["lastName"]);
// console.table(userDetails);
// userDetails.loginCount = 27;
// console.log(userDetails);

// Mini Program
// Method in Object
// let userDetailCourse = {
//   firstName: "Anurag",
//   lastName: "Tiwari",
//   role: "Student",
//   googlelogin: true,
//   courseList: [],

//   buyCourse: function (coursename) {
//     this.courseList.push(coursename); // this in object will points towards object i.e userDetailCourse
//   },
//   getcoursecount: function () {
//     return `${this.firstName} is enrolled in  ${this.courseList.length} courses`;
//   },
//   isLogin : function(){
//     console.log(`it is login or not ${this.googlelogin}`);
//   }
// };

// userDetailCourse.isLogin()
  

// console.log(userDetailCourse.firstName);
// userDetailCourse.buyCourse("Pro Backend");
// console.log(userDetailCourse.courseList);
// userDetailCourse.buyCourse("React Js");
// console.log(userDetailCourse.courseList);
// console.log(userDetailCourse.getcoursecount());

// console.log(Object.keys(userDetailCourse));
// console.log(Object.values(userDetailCourse));

//check key is present or not
// console.log(userDetailCourse.hasOwnProperty("buyCourse"))


// for of with array
// for in with Object
// The for...in statement iterates over the enumerable string properties of an object, while the for...of statement iterates over values that the iterable object defines to be iterated over.

// For in Loop
// let userDetails = {
//   firstName: "Anurag",
//   lastName: "Tiwari",
//   role: "admin",
//   loginCount: 25,
// };

// for (const key in userDetails) {
//     if (userDetails.hasOwnProperty(key)) {
//         const element = userDetails[key];
//         console.log(element);
        
//     }
// }


// let arr = [1,3,4,5,5];
// for (const i of arr) {
//     console.log(i);
    
// }
 
// Higher Order function -- function is passed as a parametre in function it is called HOF
// Call back function -- 1st category of HOF

// let isEven = (num) => {
//     return num%2==0
// }
// let arr = [2,4,6,8];
// let res  = arr.every(isEven);//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// console.log(res);

//  const square = (num)=>{
//   return num**2;
//  }
//  const cube = (square,num)=>{
//     return square(num)*num;
//  }
//  console.log(cube(square,5));

// Mini Program
// For Square
// const callback1 = (n) => {
//   return n ** 2;
// };
// Fucntion to multiple square with other number
// Do the square and then multiple
// function cube(callback1, n) {
//   return callback1(n) * n;
// }
// console.log(cube(callback1, 3));

//setTimeout
// function buyCourse(){
//     console.log(`congratulation you have buy React Js course`);
// }

// setTimeout(buyCourse,5000);
// setTimeout allows us to run a function once after the interval of time.
// let id = setInterval(buyCourse,1000);
// setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.
// setTimeout(b,5000);
// function b(){
// clearInterval(id)
// }

// let arr = ["Hey", "hi", "hello", "Hola", "Namste"];
// arr.forEach((ele) => {
//    console.log(ele.toUpperCase());
// })
// arr.forEach((e)=>console.log(e[0]));
// map() creates a new array from calling a function for every array element.

// map() calls a function once for each element in an array.

// map() does not execute the function for empty elements.

// map() does not change the original array.
//Map  modify array elements in which it is iterating
let numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers.map((n) => n**2));
// console.log(squarearr);
// console.log(numbers.map((ele)=>ele+1));


// let names = ["HiteshSir", "SuryaSir", "ANurag", "PrasaD"];
// let store1 = names.map((name) => name.toUpperCase());
// console.log(store1);

//filter 
//The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.
//Filter based on condition take out the value
// let filterArr = names.filter((elem) => elem.length>6);
// console.log(filterArr);

// let country = ["India", "japan", "Kenya", "Irelnd", "Canada", "Germany"];
// // let store = country.filter((country) => country.includes("an"));
// let store = country.filter((country) => country.length === 5);
// console.log(store);

// let numbers = [1, 2, 3, 4, 5, 6, 7];

//Syntax:
// arrayName.reduce(acc,curr)=>{},value)
// let sum = numbers.reduce((acc, cur) => acc + cur, 2);
// console.log(sum);

// let reducer = (acc,curr) => { //accumulator and current value
//     let returns = acc + curr;
//      console.log(`acc is ${acc} current value is ${curr}`);
//      return returns;
// }

// let res = numbers.reduce(reducer,2)
// console.log(res);
 