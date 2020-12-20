# Quiz-game

![image](Assets\Password-generator-image.png)

Description
------------

This is a password generator. It will ask for the amount of characters desired in password then whether the user wants the password to have upper case letters, lower case letters, numbers, and/or, special characters.

 Table of contents
---------------
[Tools used](#Tools-used)<br />
[Deployed here](#Deployed-here)<br />
[What is added](#What-is-added)
 * [Generate alphabet](#Generate-alphabet)
 * [Making password choices](#Making-password-choices)
 * [Check proper input](#Check-proper-input)
 * [Generate password](#Generate-password)

[Lessons learned](#Lessons-learned) <br />
[Credits](#Credits)<br />
[License](#License)

Tools used
-------------------

* CSS - Style the page with custom colors, and spacing.
* GitBash - Assist with version control via commits, push, and pull to and from GitHub.
* GitHub - Site where the repository lies for deployment and edits.
* HTML - Contains the entirety of the webpage and allows browsers to interpret the code as a webpage.
* JavaScript - Houses the majority of the function action for this webpage. 
* VS Code - Application used to write and edit code for the webpage.

Deployed here
-------------

Below is the link to the deployed webpage. <br />
[Link to site](https://vincent-nguyen8931.github.io/Password-generator/)


What is added
------------------

Generate alphabet
-----------------------------

This first function to discuss is how an alphabet is generated. This works by assigning the first and last characters of the alphabet to different variables. These variables use charCodeAt(0) to set their integer based on the UTF-16 code index. The "for loop" will iterate pushing each character of the alphabet onto the array as a string until it adds Z. 

```
function genAlphabet(A, Z) {
  var alphabet = [], i = A.charCodeAt(0), j = Z.charCodeAt(0);
  for (; i <= j; i++) {
    alphabet.push(String.fromCharCode(i));
  }
  return alphabet;
}
```
Making password choices
----------------
The next function is creating the array of characters that will be used to generate a password. Below is the top part of the code that checks which characters the user wants to be used when generating a password. 
```
function genPasswordChoices() {
  // array to hold user's choice of password character types 
  var storeChoices = []
  // check to see if user wants upper case letters
  var lettersUp = confirm("Do you want upper case letters in your password?")
  // check to see if user wants lower case letters
  var lettersLow = confirm("Do you want lower case letters in your password?")
  // check to see if user wants numbers
  var num = confirm("Do you want numbers in your password?")
  // check to see if user wants special characters
  var sChar = confirm("Do you want special characters in your password?")
```
This is an example of one of the character types that can be generated.
```
//  if sChar is true, use this variable
if (sChar === true) {
  var str = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  var special = str.split("")
  // push special characters onto storeChoices array
  for (i = 0; i < special.length; i++) {
  storeChoices.push(special[i])
  } 
```

Check proper input
------------------------

The function operates by asking the user for their input. The input is taken and split into an array. The array is ran through using a "for loop" interating each character comparing it to the if statement that checks if the input is a number. If the input is not a number, the function ends and sends a null which stops the password generation.
```
function checkInput() {
  var charLimit = prompt("Please choose amount of characters for password.")
  var charSplit = charLimit.split("")
  var numCheck = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  for (i = 0; i < charSplit.length; i++) {
    // Checks for proper numerical values
    if (numCheck.includes(charSplit[i]) !== true) {
      alert("Please use a number between 8 and 128.")
      return null
    } else { 
      
      while (charLimit < 8 || charLimit > 128) {
      
        // if characters are less than 8
        if (charLimit < 8) {
          alert("Password needs minimum of 8 characters.")
        } 
      
        // if characters are greater than 128
        if (charLimit > 128) {
        alert("Password has maximum of 128 characters.")
        }
        // repeats checking for proper user's input
        return null
      }  
    } 
  } return charLimit
}
```
Generate password
--------------

This function is linked to the function writePassword that is given as a starting function. Within this function, the characters selected for password generation and the amount of characters for the password are called here. The function runs the "for loop" generating one character at a time at random and storing in indexGen variable. The last step takes the password generated, removes all the commas and spaces, then passes the variable password where it will be displayed on the webpage. 
```
// Use characters selected for password and amount of characters desired to make the password. 
function generatePassword(pwChars, charAmount) {
  var pwGenConvert = []
  // choose random number based on characters selected and amount of characters chosen
  for (i = 0; i < charAmount; i++){
    indexGen = Math.floor(Math.random(pwChars) * pwChars.length)
    // pushes character from pwChars based on index generated by indexGen into pwGenConvert
    pwGenConvert.push(pwChars[indexGen])
    // Takes the pwGenConvert array, removes the commas, and places the resulting elements into password variable.
    password = pwGenConvert.join("")
  }
  return password
}
```

Lessons Learned
----------------

When attemping to make the code check for proper input I ran into several issues. This is a list of methods I attempted with no success. The charCodeAt() was perplexing me because the characters being compared are specific and standard across all browsers, making it the safest choice for me to check my inputs with. However, no input inside ever matched nor did any parameter set function properly. 

Indexof did not function in the way I expected as it did not return a usuable value but rather displayed if something exists within the array. There was a method to make this work but would have extended my if statement to an unsightly state and still may not have worked as I would use the logic as shown in the code snippet below.

* comparing to alphabet
* uncmparing to alpahbet
* indexof
* accepting only numbers via ===
* not accepting letters via ===
* charCodaAt()

```
  // if (charLimit === 1 ||
  //   charLimit === 2 ||
  //   charLimit === 3 ||
  //   charLimit === 4 ||
  //   charLimit === 5 ||
  //   charLimit === 6 ||
  //   charLimit === 7 ||
  //   charLimit === 8 ||
  //   charLimit === 9 ||
  //   charLimit === 0) {
```
I received help from our class TA's and found a method that did produce the results I expected. It was to return null when the input is incorrect instead of restarting the loop over. This helped to stop the rest of the loop from running or bypassing the error checks if a different error was passed.

Credits
---------------
LinkedIn: [https://www.linkedin.com/in/vincent-nguyen-74226a107/](https://www.linkedin.com/in/vincent-nguyen-74226a107/) <br />
GitHub: [https://github.com/vincent-nguyen8931](https://github.com/vincent-nguyen8931)


License
----------
MIT License

Copyright (c) [2020] [Vincent Nguyen]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.