//Business Logic

function countUp(input) {
  let countUpArray = [];
  for(let index = input; index >= 0; index --) {
    countUpArray.push(index);
  }
  countUpArray.reverse();
  return countUpArray;
}

function robogerResponds(countUpArray) {
  
}



//User Interface Logic
function numberInput(event) {
  event.preventDefault();
  const numberInput = document.getElementById("numberInput").value
  let newInput = countUp(numberInput)

  document.getElementById("return").innerText = robogerResponds(newInput);
 }

 window.addEventListener("load", function() {
  const form = document.getElementById("form");
  form.addEventListener("submit", gatherInput);
 })
