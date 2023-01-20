Describe roboger-response()

Test: "It should identify the number 1 in a string of numbers"
Code: roboger-response("1");
Expected Result: 1

Test: "It should identify the number 2 in a string of numbers"
Code: rober-response("2")
Expected Result: 2

Test: "It should identify the number 3 in a string of numbers"
Code: roboger-response("3");
Expected Result: 3

Test: "It should replace the entered number of 1 with the phrase "Beep!"
Code: roboger-response("1");
Expected Result: Beep!

Test: "It should replace the entered number of 2 with the phrase "Boop!"
Code: roboger-response("2");
Expected Result: Boop!

Test: "It should replace the entered number of 3 with the phrase "Won't you be my neighbor?"
Code: roboger-response("3");
Expected Result: Won't you be my neighbor?

Test: "It should return "Wont you be my neighbor?" if the number contains a 1 before the 3"
Code: roboger-response("13");
Expected Result: Won't you be my neighbor?

Test: "It should return "Boop!" if the number contains a 1 before the 2"
Code: roboger-response("12")
Expected Result: "Boop!"

Test: "It should return "Won't you be my neighbor?" if the number contains a 2 before the 3"
Code: roboger-response("23")
Expected Result: Won't you be my neighbor?

Test: "It should return "Boop!" if the number contains a 2 before the 1"
Code: roboger-response("21")
Expected Result: Boop!