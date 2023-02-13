//event delegation

// it allows user to append single event listner to parent element that adds to all of its present and funture descendents that match a selector


let ul = document.querySelector("#sports");
ul.addEventListener("click",function(e){
    let attribute = e.target
    console.log(attribute);
    let id = attribute.getAttribute("id")
    console.log(id +  " is clicked ");
    // The matches() method of the Element interface tests whether the element would be selected by the specified CSS selector.
    if(attribute.matches('#Football')){
        attribute.style.backgroundColor = "red";
    }
})

let news = document.createElement("li");
news.setAttribute("id","Rugby");
news.innerText = "Rugby";
ul.appendChild(news);