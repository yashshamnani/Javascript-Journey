// // event propagation
// //three phases--event capturing ,target,event bubbling

// window.addEventListener("click",function(){
//     console.log("window");
// },true)
// //3rd parametre true for event capturing and false for bubbling
// document.addEventListener("click",function(){
//     console.log("document");
// },true)
// document.addEventListener("click",function(){
//     console.log("div2");
// },true)
// document.addEventListener("click",function(){
//     console.log("div1");
// },true)
// document.addEventListener("click",function(e){
//     console.log(e.target); //target at which event occurs
// },true)


///////////////////////////////////////

// event propagation
//three phases--event capturing ,target,event bubbling

window.addEventListener("click",function(){
    console.log("window");
},false)
//3rd parametre true for event capturing and false for bubbling bydefault false
document.addEventListener("click",function(){
    console.log("document");
},false)
document.querySelector(".div2").addEventListener("click",function(e){
    // e.stopPropagation(); // to stop propagation
    console.log("div2");
}, {once : true})//event will occurs only once
document.querySelector(".div1").addEventListener("click",function(){
    console.log("div1");
},false)
document.querySelector(".btn").addEventListener("click",function(e){
    console.log(e); //target at which event occurs
},false)

// to prevent the default behaviour of the <a> </a> link tag
// use   e.preventDefault()
