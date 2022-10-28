const roboger = ["Won't you be my neighbor?", "Boop!", "Beep!"];
const roboReply = ["3", "2", "1"];

//Business Logic





//User Interface Logic//
document.ready(function () {
  ("form").submit(function (event) {
      event.preventDefault();
      const userInput = $("#user-input").val();
        const roboger = roboger(userInput);
        ("#response").text(reply);
        ("#response").slideDown(reply);
  });
});