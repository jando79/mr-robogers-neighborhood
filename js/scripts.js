//Business Logic

function countUp(input) {
  let countUpArray = [];
  for(let index = input; index >= 0; i --) {
    countUpArray.push(i);
  }
  countUpArray.reverse();
  return countUpArray;
}


  window.addEventListener("load", function() {
    document.querySelector("form#roboger-responds").addEventListener("submit", handleFormSubmission);
  });