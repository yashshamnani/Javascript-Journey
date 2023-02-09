//LOOPS

// for (initialization, conditon, increment/decrement){
//code
//}

// for(let i=0;i<5;i++)
// {
//     console.log(`${i}`);
// }
// for(let i=0;i<5;i++)
// {
//     console.log(`${i*i}`);
// }
// TOD0: inner loop
// for(let i=1;i<=5;i++)
// {
//     for(let j=5;j<=5;j++)
//     {
//         console.log(`${j} * ${i} = ${j*i}`);
//     }
// }
// let con = ["India", "Sweden", "Norway", "Iceland"];
// let newcon = [];
// for (let i = 0; i < con.length; i++) {
//   newcon.push(con[i].toUpperCase());
// }
// console.log(newcon);

// TODO: Square of array number
// let arr = [2,4,6,8];
// let map = arr.map((x)=>{return x*x});
// console.log(map);
// let newarr = [];
// for(let i=0;i<arr.length;i++)
// {
//     newarr.push(Math.pow(arr[i],2));
// }
// console.log(newarr)

// let i = 0;
// while (i <= 5) {
//   console.log(i);
//   i = i + 1;
// }
// TODO: 
// let i=0;
// while (i<=10)
// { 
//     if(i%2==0)
//     {
//     console.log(`${i}`);
//      }
//     i++;
// }

// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<0);


// Syntax:
// for (let var of array)

// let arr1 = [2,4,6,8];
// A for...of loop operates on the values sourced from an iterable one by one in sequential order. Each operation of the loop on a value is called an iteration, and the loop is said to iterate over the iterable. Each iteration executes statements that may refer to the current sequence value.
// for(let i of arr1)
// {
//    console.log(i*i);
// }

let con = ["India", "Sweden", "Norway", "Iceland"];
for (cont of con) {
  console.log(cont[0]);
}

// TODO: Repeat above method of uppercase using for of loop
// let newarr = [];
// for(let i of con)
// {
//     newarr.push(i.toUpperCase());
// }
// console.log(newarr);

//break and continue
//break will break the loop continue will skip for instance
// for (let i = 1; i < 5; i++) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
// }
// for (let i = 1; i <= 5; i++) {
//   if (i == 3) {
//     continue;
//   }
//   console.log(i);
// }

// Functions
//Defination
// Function without parameter
// function Squ() {
//   let x = 7;
//   let sq = x * x;
//   console.log(sq);
// }
// Squ(); //Calling

// Function with parameter
// function add(x, y) {
//   let xy = x + y;
//   console.log(xy);
// }

// add(5, 2);

// function printfullname(firstname, lastname) {
//   let full_name = firstname + " " + lastname;
//   return full_name;
// }

// let fn = printfullname("yash", "shamnani");
// console.log(fn);

// function areaOfCircle(r) {
//   let area = Math.PI * r * r;
//   return area;
// }
// console.log(areaOfCircle(10));

// function sumofArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// let numb = [1, 2, 3, 4, 5, 6, 7, 8];

// let holdvalue = sumofArray(numb);
// console.log(holdvalue);

/////////////////////////////////////////////destructuring of array//////
// const SumofAll = (...args) => {
//   let sum = 0;
//   for (let element of args) {
//     sum = sum + element;
//   }
//   return sum;
// };

// console.log(SumofAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));
//  let varibalename = () => {
//   FCGVHBJNKM;
// };

//Truthy Value (TRUE VALUE) and Falsy Value (FALSE VALUE)
// In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN.
// if ("false"){
//     console.log("yes");
// }
// if (!0){
//     console.log("yes");
// }if (!0n){
//     console.log("yes");
// }if (!null){
//     console.log("yes");
// }
// if (!undefined){
//     console.log("yes");
// }
// if (!NaN){
//     console.log("yes");
// }
// if(2){
//     console.log("yes");
// }

// DATE AND TIME

// let now = new Date()
// console.log(now);

// console.log(now.getTime());
// getTime()
// Returns the timestamp for the date – a number of milliseconds passed from the January 1st of 1970 UTC+0.
// console.log(now.getFullYear());
// console.log(now.getDay());
// console.log(now.getMonth());
// console.log(now.getDate());

// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());


// console.log(now);
// console.log(now.toString());




