// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ]
// ---
// - Explain the difference between forEach, map, filter, and reduce.

// ans
//The forEach() method executes a provided function once for each array element.
// countries.forEach((e)=>{console.log(e);});
// //map() creates a new array from calling a function for every array element.
// let newarr = countries.map((e)=>e.toUpperCase())
// console.log(newarr);;
// // The filter() method creates a new array filled with elements that pass a test provided by a function.
// let newArr = countries.filter(e=>e.length==6);
// console.log(newArr);
// // The reduce() method executes a reducer function for array element.The reduce() method returns a single value: the function's accumulated result.
// let arr = numbers.reduce(reducer);
// console.log(arr);
// function reducer(acc,curr){
//     let sum = acc +curr;
//     console.log(`accumalator is ${acc} current value is ${curr}`);
//     return sum;
// }


// - Define a callback function before you use it in forEach, map, filter or reduce.

// ans 
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action

// function callback(x){
//     return x*x;
// }
// function cube(callback,x){
//     return callback(x) *x;
// }

// let res  = cube(callback,3);
// console.log(res);



// - Use forEach to console.log each name in the names array.

// ans 
// names.forEach(e=>{console.log(e);})
// - Use forEach to console.log each country in the countries array.

// ans
// countries.forEach((e)=>{console.log(e);})
// - Use forEach to console.log each number in the numbers array.

// ans 
// numbers.forEach((e)=>{console.log(e);})

// - Use map to create a new array by changing each country to uppercase in the countries array.

// ans 
// let newArr = countries.map((e)=>e.toUpperCase())
// console.log(newArr);


// - Use map to create an array of countries length from countries array.

// ans 

// let newLenArr = countries.map((e)=>e.length);
// console.log(newLenArr);

// - Use map to create a new array by changing each number to square in the numbers array

// ans 
// let sqrArr = numbers.map((e)=>e**2);
// console.log(sqrArr);

// - Use map to change to each name to uppercase in the names array

// ans 
// let upprArr = names.map((e)=>e.toUpperCase());
// console.log(upprArr);


// - Use map to map the products array to its corresponding prices.
 
// ans 
// let Price = products.map((e)=>e.price)
// console.log(Price);



// - Use filter to filter out countries containing land.

// ans 
// let landArr = countries.filter((e)=>e.includes("land"));
// console.log(landArr);

// - Use filter to filter out countries having six character.

// ans
// let sixCharArr = countries.filter((e)=>e.length==6);
// console.log(sixCharArr);

// - Use filter to filter out countries containing six letters and more in the country array.

// ans 
// let sixChar = countries.filter((e)=>e.length>=6);
// console.log(sixChar);


// - Use filter to filter out country start with 'E';

// ans 
// let eArr = countries.filter((e)=>e.startsWith("E"))
// console.log(eArr);

// - Use filter to filter out only prices with values.

// ans 
// let valueArr = products.filter((e)=>typeof e.price==='number');
// console.log(valueArr);
//or

// let valueArr = products.filter(value);
// function value(e){
     
//     return e.price.trim()!=''

// }
// console.log(valueArr);

// - Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

 // ans 
 // function getStringLists(arr){
// let newArr = arr.filter((e)=>typeof e==='string');
// return newArr
// }
// let resArr = getStringLists(names);
// console.log(resArr);

// - Use reduce to sum all the numbers in the numbers array.
// function reducer(acc,curr){
//     let sum = acc+curr
//     console.log(`value of accumalator is ${acc} and current value is ${curr}`);
//     return sum;
// }
// let res = numbers.reduce(reducer);
// console.log(res);

// - Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

//ans 
// function reducer(acc,curr){
//     return acc+", "+curr;
// }
// let res = countries.reduce(reducer);
// console.log("Estonia, "+res+" are north European countries");

// - Explain the difference between some and every

// ans 
// some :The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
//every : The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// let arr = [2,5,6,8];
// console.log(arr.some((e)=>e%2!=0))
// console.log(arr.every((e)=>e%2==0));

// - Use some to check if some names' length greater than seven in names array

// ans 
// let grt = names.some((e)=>e.length>7)
// console.log(grt);

// - Use every to check if all the countries contain the word land
 
// ans 
// let res = countries.every((e)=>e.includes("land"));
// console.log(res);

// - Explain the difference between find and findIndex.

// - Use find to find the first country containing only six letters in the countries array

// ans 
// find : The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
//find-index : The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
//const array1 = [5, 12, 8, 130, 44];
// const found = array1.find(element => element > 10);

// console.log(found);
// Expected output: 12

// - Use findIndex to find the position of the first country containing only six letters in the countries array

// console.log(countries.findIndex((e)=>e.length===6))
// - Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
// console.log(countries.findIndex((e)=>e=='Norway'));
// - Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
// console.log(countries.findIndex((e)=>e=='Russia'));

//--------------------------------------------------
// const a = [4, 5, 8, 9]
// const b = [3, 4, 5, 7]
// const countries = ['Finland', 'Sweden', 'Norway']
// // ---
// // - create an empty set
// let num = new Set();
// // - Create a set containing 0 to 10 using loop
// for(let i=0;i<10;i++){
//     num.add(i);
// }
// console.log(num);
// // - Remove an element from a set
// num.delete(8);
// console.log(num);

// // - Clear a set
// num.clear();
// console.log(num);

// // - Create a set of 5 string elements from array
// let strSet = new Set(countries);
// console.log(strSet);
// strSet.add('India');
// strSet.add('France')

// console.log(strSet);

// // - Create a map of countries and number of characters of a country
// let mapObj = new Map();
// mapObj.set(countries[0],countries[0].split(""))
// console.log(mapObj);
// mapObj.set(countries[1],countries[0].split(""))
// console.log(mapObj);
// mapObj.set(countries[2],countries[0].split(""))
// console.log(mapObj);

//-----------------------------------------------------------------
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]
 
//-----------------------------------------------

// - Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.


// ans 
//let[e ,pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
// console.log(gravity);


// - Destructure and assign the elements of countries array to fin, est, sw, den, nor

// ans 
// let[fin, est, sw, den, nor] = countries;
// console.log(nor);

// - Destructure the rectangle object by its properties or keys.

// ans The variable names in the curly braces must match the property names in the object.
// let {width,height,area,perimeter} = rectangle;
// console.log(perimeter);

// - Iterate through the users array and get all the keys of the object using destructuring

// ans 
//  for (const obj of users) {
//     for (const key in obj) {
//          console.log(key);
//     }
//  }


// - Find the persons who have less than two skills
// ---ans
// var arr = [];
// for (const obj of users) {
     
//     if(obj.skills.length<2){
//       arr.push(obj.name)

//     }
// }
// console.log(arr);

// - Create a closure which has one inner function
//a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
// function sum(x,y){
//   let z = 5;
//   function add(){
//     let res = x+y+z;
//     console.log(res);
//   }
//   return add
// }
// let op = sum(10,5);
// op()
// - Create a closure which has three inner functions
function name(){
    let firstName = "yash"
    function middle(){
        let middleName = "kumar"
        function last(){
            let lastName = "shamnani"
            function inner(){
                let fullname = firstName+" "+middleName+ " "+lastName;
                console.log(fullname);
            }
            return inner;

        }
        return last;
    }
    return middle;
}
name()()()();


  
  