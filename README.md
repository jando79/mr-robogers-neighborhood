# Mr. Roboger's Neighborhood

#### By David Jandron

#### Mr. Roboger says, "Beep!", "Boop!", "Won't you be my neighbor?"

## Technologies Used

* HTML
* CSS
* JavaScript


## Description

Mr. Roboger responds to numbers containing "1", "2", and "3". His response is determined by what you answer.

## Setup/Installation Requirements

* Follow the link to the repositry.
* Download all files.
* Open index.html in your brower.
* Enter a number in the empty space next to the submit button and click submit

## Tests
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

Test: "It should return an array of numbers depending on the value given." 
Code: number = 5 countUp(5) 
Expected Output: (1, 2, 3, 4, 5) 

## Known Bugs

* When a number is entered and the user submits, no message appears

## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) October 28, 2022 by David Jandron


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