// Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.
// arr.__proto__ is an object where js is putting all your hidden functions
//object.prototype.prototype = null;
// all things in js are objects bcoz down the prototype chain all becomes object.prottype.
//Prototypes are the mechanism by which JavaScript objects inherit features from one another.
let myHeros = ["thor", "spiderman"]
let dcHeros = ["batman", "black adam", "superman"]
let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// Object.prototype.yash = function(){
//     console.log("Yash will present in all objects");
// }
// heropower.__proto__.yash = function(){
//         console.log("Yash will present in all objects");
//     }
// myHeros.yash()
// dcHeros.yash();
// heropower.yash()
// Array.prototype.heyArray = function(){
//     console.log(`total elements are ${this.length}`);
// }
// myHeros.heyArray();
// dcHeros.heyArray();

// inheritance
const User = {
    name : "top name",
    email : "yash@gmail.com"
}
const Teacher = {
    makeVideos : true
}
const TeachingSupport = {
    isAvailable: false
}
const TSAssistant = {
    makeAssignment : "js assingnment",
    fullTime : true,
    __proto__ : TeachingSupport
}
console.log(TSAssistant.isAvailable);
 
Teacher.__proto__ =  User;
console.log(Teacher.name);
// or 
 Object.setPrototypeOf(Teacher,User)
 console.log(Teacher.email);

//challenge
// String.prototype.truelength = function(){
//     console.log(`true length is ${this.trim().length}`);
// }
// console.log("yash".length);
// "yash     ".truelength();
