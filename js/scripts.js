const robo = ["Won't you be my neighbor?", "Boop!", "Beep!"];
const roboUser = ["3", "2", "1"];

//Business Logic
function countUp(number) {
  const countArray = number;
  let numberArray = [];
  for (let i = 0; i < countArray; i++); {
    numberArray.push( i + 1);
  } return numberArray

function roboger(number) {
  const robogerArray = number.split("");
  let responseArray = [];
  robogerArray.forEach(function(element) {
    if (element.includes(roboUser[0])) {
        responseArray.push("" + robo[0]);
    } else if (element.includes(roboUser[1])) {
        responseArray.push("" + robo[1]);
    } else if (element.includes(roboUser[2])) {
        responseArray.push("" + robo[2]);
     } else {
        responseArray.push("" + element);
    }
    });
    return responseArray;
  }     

//User Interface Logic//
document.ready(function () {
  ("form").submit(function (event) {
      event.preventDefault();
      const userInput = ("#user-input").val();
        const roboReply = roboger(userInput);
        ("#reply").text(reply);
        ("#reply").slideDown(reply);
  });
})};