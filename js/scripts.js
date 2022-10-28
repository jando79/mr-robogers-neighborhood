//Business Logic
function countUp(number) {
  const countArray = number;
  let numberArray = [];
  for (let i = 0; i < countArray; i++); {
    numberArray.push( i + 1);
  } return numberArray
}

const roboReply = ["3", "2", "1"];





//User Interface Logic//
const robo = ["Won't you be my neighbor?", "Boop!", "Beep!"];

document.ready(function () {
  ("form").submit(function (event) {
      event.preventDefault();
      const userInput = ("#user-input").val();
        const robo = robo(userInput);
        ("#response").text(reply);
        ("#response").slideDown(reply);
  });
});