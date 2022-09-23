// Container
var boardContainer = document.createElement("div");
boardContainer.classList.add("container");
document.body.appendChild(boardContainer);

// Variables
var xIdCase = 1;
var yIdCase = 1;
var caseId = "";
var arrIdCase = [];
var caseCount = 0;
var lineNumber = 0;

// Size Board Variable
var boardSize = prompt("Size of board ?");
var root = document.documentElement;
root.style.setProperty('--board-size', boardSize);


// Populate
for(let e=0; e<boardSize; e++){
  lineNumber++;
  for(let i=0; i<boardSize; i++){
    var freshNewCase = document.createElement("div");
    caseId = yIdCase + ":" + xIdCase;
    freshNewCase.id = caseId;
    freshNewCase.innerHTML = caseId;
    freshNewCase.classList.add("boardCase");
    document.querySelector(".container").appendChild(freshNewCase);

// Keep count
    caseCount++;
    var caseObj = {
      id: freshNewCase.id,
      caseNumber: caseCount,
      yAxe: yIdCase,
      xAxe: xIdCase
    }
    arrIdCase.push(caseObj);
    
// Color Attribution
    if(lineNumber % 2){ 
        if(caseCount % 2 === 0){
          freshNewCase.classList.add("blackCase");
        } else {
          freshNewCase.classList.add("whiteCase");
        }
    } else {
        if(caseCount % 2 === 0){
          freshNewCase.classList.add("whiteCase");
        } else {
          freshNewCase.classList.add("blackCase");
        }
    }
    xIdCase++;
  }
  xIdCase = 1;
  yIdCase++;
}

console.log(arrIdCase);


let elem = document.getElementById("1:1");
let infoElem = elem.getBoundingClientRect();
console.log("X :" + infoElem.left);
console.log("Y :" + infoElem.top);




