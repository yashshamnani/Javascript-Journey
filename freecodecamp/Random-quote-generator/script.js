let btn = document.querySelector(".new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");
 let arr = [{
    quote : "Arise awake and stop not until the goal is reached." ,
    name : "Swami Vivekanand"},
{quote : "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
name : "Albert Einstein"},{
    quote : "If you want to walk fast, walk alone. But if you want to walk far, walk together." ,
    name : "Ratan Tata"
},{
    quote : "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    name : "Oprah Winfrey"
},{
    quote : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    name : "Steve Jobs"
},{
    quote : "The way to get started is to quit talking and begin doing. ",
    name : "Walt Disney"
}]

 btn.addEventListener("click",generate);
 function generate(){
    let num = Math.floor(Math.random()*arr.length);
    quote.innerHTML = arr[num].quote;
    person.innerHTML = arr[num].name;
 }