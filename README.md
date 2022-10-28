Describe: roboger()

Test: "It should return an array of a given number when a given number is entered." 
Code: roboger("0")
Expected Output: "0"

Test: "It should return the phrase 'Beep!' if the given number contains a'1'."
Code: roboger("1")
Expected Output: "Beep!"

Test: "It should return the phrase 'Boop!' if the given number contains a '2'.
Code: roboger("2")
Expected Output: "Boop!"

Test: "It should return the phrase 'Won't you be my neighbor?' if the given number contains a '3'.
Code: roboger("3")
Expected Output: "Won't you be my neighbor?"

Test: "It should return the phrase 'Beep! Boop! Won't you be my neighbor?' if the given number contains a '1', '2', and '3'in the same input.
Code: roboger("1", "2", "3")
Expected Output: "Beep! Boop! Won't you be my neighbor?"

Test: "It should return the phrase "Boop!" if the given number contains a '1', and '2' in the same input.
Code: roboger("1","2")
Expected Output: "Boop!"

Test: "It should return the phrase "Won't you be my neighbor?" if the given number contains a '1', and '3'in the same input.
Code: roboger("1","3")
Expected Output: "Won't you be my neighbor?"

Test: "It should return the phrase "Won't you be my neighbor?" if the given number contains a '2', and '3'in the same input.
Code: roboger("2","3")
Expected Output: "Won't you be my neighbor?"

Test: If a user inputs a number greater than a '1', '2', or '3', the program should display a list of values starting with 0 to 9, with the numbers '1', '2', and '3' substituted with the updated correlated phrases.
Code: ('0','1','2','3','4','5','6','7','8','9')
Expected Output: "0 Beep! Boop! Won't you be my neighbor? 4 5 6 7 8 9" 