
 let openbtn = document.querySelector(".open-btn");
 let modalcontainer = document.querySelector(".modal-container");
 let closebtn = document.querySelector(".close-btn");

//  modalcontainer.style.display = "none"

 openbtn.addEventListener("click",function(){
    modalcontainer.style.display = "inline"
 })
 closebtn.addEventListener("click",function(){
    modalcontainer.style.display = "none"
 })
 window.addEventListener("click",function(e){
    console.log(e);
    if(e.target===modalcontainer){
        modalcontainer.style.display = "none"
    }
 })