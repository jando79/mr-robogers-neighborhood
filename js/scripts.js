//Business Logic

let roboArray1 = [1];
let robogerResponseArray = [];

For (let index = 0; index >= roboArray1.length; index +=1) {
robogerResponseArray.push(roboArray1[index] ="Beep!");
}
//User Interface Logic
function handleFormSubmission() {
  event.preventDefault();
}


  window.addEventListener("load", function() {
    document.querySelector("form#roboger-responds").addEventListener("submit", handleFormSubmission);
  });