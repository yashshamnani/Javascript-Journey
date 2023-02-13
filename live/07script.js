// test
// forof vs forin -- for..in returns a list of keys on the object being iterated, whereas for..of returns a list of values of the numeric properties of the object being iterated.

// var arr = [3, 5, 7];
// arr.foo = "hello";
 
// for (var i in arr) {
//   console.log(i); // logs "0", "1", "2", "foo"
// }
    
// for (var i of arr) {
//   console.log(i); // logs "3", "5", "7"
//   // it doesn't log "3", "5", "7", "hello"
// }

//rest and spread
//spread
// function add(x,y)
// {
//     return x+y;
// }
// let arr = [5,4];
// console.log(add(...arr));
// //rest
// function add(...args){
//     let sum = 0;
//     for(let i of args){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(add(1,2,3,4,5));

//callstack and hoisting

// let a = 10;
// add();
// // Class --- Classes are a template for creating objects. Classes are in fact "special functions",

// The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class — a SyntaxError is thrown if the class contains more than one occurrence of a constructor method.
// Declaration
// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   }
  
//   // Expression; the class is anonymous but assigned to a variable
//   const Rectangle = class {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   };
  
//   // Expression; the class has its own name
//   const Rectangle = class Rectangle2 {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   };

// class User{
//     constructor(firstName="yash",lastName="shamnani",email="@gmail.com",password = "1234")
//     {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.password = password;
//     }
//     getFullName()
//     {
//         return this.firstName + " " + this.lastName;
//     }

// }

// let user1 = new User( );
// console.log(user1.getFullName());
// console.log(user1.email);

// let user2 = new User("Govind", "Magar", "govind@gmail.com", "123456789");
// console.log(user2.getFullName());

// // Getter and Setter
// The get syntax binds an object property to a function that will be called when that property is looked up. It can also be used in classes.doesnot use function envocation() also infront of function dont write function
// class User{
//     constructor(firstName="yash",lastName="shamnani",email="@gmail.com",password = "1234")
//     {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.password = password;
//     }
//     getFullName()
//     {
//         return this.firstName + " " + this.lastName;
//     }
//     get getFirstName(){
//         return this.firstName;
//     }
//     get getLastName(){
//         return this.lastName;
//     }
//     set setScore(score){
//        this.score = score;
//     }
//     get getScore(){
//         return this.score;
//     }

// }

// let user1 = new User()
// console.log(user1.getFirstName);
// console.log(user1.getLastName);
// console.log(user1.getScore);

// user1.setScore = 10;
 
// console.log(user1.getScore);
// console.log(user1.getFullName()); //remember ()

// // inheritance

// 


// class UserOne {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.score = 0;
//   }
//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
// }

// class Usertwo extends UserOne{
//     getFullName(){
//         const fullnamescore = this.firstName + " " + this.lastName + " score " + this.score;
//         return fullnamescore;
//     }
// }

// let  obj = new Usertwo("yash","shamnani") 
// console.log(obj.getFullName());

// prototype --- prototypical inheritance

// let arrayone = [1, 2, 3];

// let userName = function(name,count){  //object constructor function.
//   this.name = name;
//   this.count = count;
//   this.getUserName = function(){
//     console.log(`user name is ${this.name}`);
//   }
// }
// In JavaScript, all functions have a property named prototype. When you call a function as a constructor, this property is set as the prototype of the newly constructed object (by convention, in the property named __proto__).
//The JavaScript prototype property also allows you to add new methods to objects constructors:
//To add a new property to a constructor, you must add it to the constructor function:
//    //You cannot add a new property to an object constructor the same way you add a new property to an existing object:
  // The JavaScript prototype property allows you to add new properties to object constructors:
  //To add a new property to a constructor, you must add it to the constructor function: or use prototype
  // the JavaScript prototype property also allows you to add new methods to objects constructors:
 // userName.prototype.getCourseCount = function(){
    // console.log(`course count is ${this.count}`);
// }

// let user = new userName("yash","10");
// user.getCourseCount();
// user.getCourse = function(){
//   console.log(`hi hello`);
// }
// console.log(user.getCourse()); //Adding a new method to an existing object is easy:

// prototypal Inheritance
let obj1 = {
    firstName : "yash",
    city : "Neemuch",
    getName : function(){
        console.log(`name is ${this.firstName} and city is ${this.city}`);
    }
}
let arr= [4,5,6]
// let obj2  = {
//     firstName : "harsh"
// }
// obj2.__proto__= obj1;
// obj2.getName();
//  when you want to add method to object u can used obj.__proto__ but when you want to add method in object constructor function prototype is keyword which is used.