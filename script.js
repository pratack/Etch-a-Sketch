
let question = prompt("How many squares per side do you want for your grid?");
const GRIDSIDE = question * 600/16;
let randomColor = Math.floor(Math.random()*16777215).toString(16);


const container = document.querySelector("#container");
const gridactivator = document.querySelector("#gridactivator")
container.style.width = `${GRIDSIDE}px` ;
container.style.height = `${GRIDSIDE}px` ;


function setBackgroundColor(){
    this.style.backgroundColor = `#${randomColor}`
    this.style.backgroundColor = `#${randomColor} - 10%`
}



function gridPromt() {
 

 for(let i = 0 ; i < question*question ; i++ ){
    const div1 = document.createElement("div");
    div1.style.width = `35.5px`;
    div1.style.height = `35.5px`;
    div1.classList.add("cell");
    container.appendChild(div1);
    div1.addEventListener("click", setBackgroundColor);
   
 }
}



gridPromt();