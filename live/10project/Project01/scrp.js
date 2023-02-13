let count =0
let value = document.querySelector("#value");
console.log(value);
let btns = document.querySelectorAll(".btn");
console.log(btns);

btns.forEach((item)=>{
    item.addEventListener("click",function(val){
        // console.log(val.currentTarget)
        // console.log(val.currentTarget.classList)
        let style = val.currentTarget.classList;
        if(style.contains("increase")){
           count++;
        }
        else if(style.contains("decrease")){
          count--;
        }
        else{
           count =0;
        }
        if(count>0){
           value.style.color = "blue";
        }
        else{
            value.style.color = "red";
        }
        value.innerHTML = count;
    })
})