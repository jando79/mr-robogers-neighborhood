//Business Logic

function countUp(input) {
  let countUpArray = [];
  for(let index = input; index >= 0; i --) {
    countUpArray.push(i);
  }
  countUpArray.reverse();
  return countUpArray;
}


function numberInput(event) {
  event.preventDefault();
  const numberInput = document.getElementById("numberInput").value
  let newInput = countUp(numberInput)

  document.getElementById("return").innerText = beepBoop(newInput);
 }

 window.addEventListener("load", function() {
  const form = document.getElementById("form");
  form.addEventListener("submit", gatherInput);
 })
