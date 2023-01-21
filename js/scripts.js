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
  let stringArray = countUpArray.map(function(element){
    return element.toString();
  });
  for (let index = 0; index < stringArray.length; index+=1) {
      if (stringArray[index].includes("3")) {
        stringArray[index] = " Won't you be my neighbor? ";
      } else if (stringArray[index].includes("2")) {
        stringArray[index] = " Boop! ";
      } else if (stringArray[index].includes("1")) {
        stringArray[index] = " Beep! ";
      }
  }
    return stringArray
  }



//User Interface Logic
function gatherInput(event) {
  event.preventDefault();
  const userInput = document.getElementById("numberInput").value
  let newInput = countUp(userInput)
  document.getElementById("return").innerText = robogerResponds(newInput);
 }

 window.addEventListener("load", function() {
  const form = document.getElementById("form");
  form.addEventListener("submit", gatherInput);
 })
