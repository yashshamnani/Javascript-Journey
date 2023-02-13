let accordion = document.getElementsByClassName("content-container");
console.log(accordion);
let acc = document.querySelector(".content-container")
console.log(acc);
console.log(accordion.length);

for(let i=0;i<accordion.length;i++){
    console.log(accordion[i]);
    accordion[i].addEventListener('click',function(e){
        console.log(this);
          this.classList.toggle('active');
    })
}