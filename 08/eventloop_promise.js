//asynchronous js
// const UserOne = () =>{
//     console.log("Hello i am user one");
// }
// const Usertwo = ()=>{
//   setTimeout(()=>{
//     console.log(`Hello i am user two`);
//   },1000);
// }

// const Userthree = ()=>{
//     console.log("hello i am user three");
// }

// UserOne();
// Usertwo();
// Userthree();

// Promise (callback, Promise Con (then catch), async await)
// - pending - resolve or reject
// - fullfilled (resolve)
// - reject (reject)

// const MakePromise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         const arrOne = ["userOne", "UserTwo", "userThree"];
//         if(arrOne.length > 1){
//             resolve("User found")
//         }
//         else{
//             reject("Not found")
//         }
//     },2000);
// });
// MakePromise.then((result)=>{
// console.log(result);
// }).catch((result)=>{
//     console.log(result);
// });

//syntax  MakePromise.then().catch()
// console.log(MakePromise.then())

// console.log(MakePromise);

//async function always returns promise
//await keyword make js wait until the promise is fulfilled and return its value

const UserOne = () =>{
    return "Hello i am user one";
}
const Usertwo = ()=>{
  return new Promise((resolve,reject)=>{setTimeout(()=>{
    resolve(`Hello i am user two`);
  },1000);
})
}

const Userthree = ()=>{
     return "Hello i am user three" ;
}
const await = async () =>{
    let one = UserOne();
    console.log(one);
    let two = await Usertwo();
    console.log(two);
    let three = Userthree()
    console.log(three);
}
await();


// let promise = new Promise(function(resolve, reject) {
//  console.log("Yesss");
//   resolve(56)
// })

// console.log("Hello One")
// setTimeout(function() {
//   console.log("Hello Two in 2 seconds")
// }, 2000)

// console.log("My name is " + "Hello Three")
// console.log(promise)