






document.ready(function () {
  ("form").submit(function (event) {
      event.preventDefault();
      const userInput = $("#user-input").val();
        const roboger = roboger(userInput);
        ("#response").text(reply);
        ("#response").slideDown(reply);
  });
});