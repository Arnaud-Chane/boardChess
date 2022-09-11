// Container
var boardContainer = document.createElement("div");
boardContainer.classList.add("container");
document.body.appendChild(boardContainer);

// Variables
var boardSize = 8;
var xIdCase = 1;
var yIdCase = ["A","B","C","D","E","F","G","H"];
var caseId = "";
var arrIdCase = [];
var caseCount = 0;
var lineNumber = 0;

// Populate
for(let e=0; e<boardSize; e++){
  lineNumber++;
  for(let i=0; i<boardSize; i++){
    var freshNewCase = document.createElement("div");
    caseId = yIdCase[e] + xIdCase;
    freshNewCase.id = caseId;
    freshNewCase.innerHTML = caseId;
    freshNewCase.classList.add("boardCase");
    document.querySelector(".container").appendChild(freshNewCase);

// Keep count
    caseCount++;
    var caseObj = {
      id: freshNewCase.id,
      caseNumber: caseCount
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
}




