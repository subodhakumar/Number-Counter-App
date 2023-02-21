let btn = document.getElementById("btn");
let incr = document.getElementById("incr");
let saved = document.getElementById("saved");
let res = document.getElementById("res");
let count = 0;

function increment(){
    count = count + 1;
    incr.textContent = count;
}

function decrement(){
    count = count - 1;
    incr.textContent = count;
}

function save(){
    // console.log(count);
    saved.innerText = count;
    
}

function myReset(){
    incr.textContent = 0;
    count = 0;
}