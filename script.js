//Task 01:
/* Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.*/

let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");
let fullName = firstName + " " + lastName;

alert("Hello, " + fullName);

//Task 02:
/* Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser*/

let favPhone = prompt("What's your favorite mobile phone model?");

document.write("Favorite phone is: " + favPhone);
document.write("</br>Length of String: " + favPhone.length);

//Task 03:
/* Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.*/ 

let word$ = "Pakistani";

for (let i = 0; i < word$.length; i++) {
    if (word$[i] === "n") {
        document.write("String: " + word$);
        document.write("</br> Index of 'n': " + i)
    }
}

//Task 04:
/* Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.*/

let word_01 = "Hello World";
let lastIndex = word_01.lastIndexOf("l");

document.write("String: " + word_01);
document.write("</br> Last Index of 'l': " + lastIndex);

//Task 05:
/* Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.*/

let word_02 = "Pakistani";
let char03 = word_02.charAt(3)

document.write("String: " + word_02);
document.write("</br> Character at index 3: " + char03);

//Task 06:
/* Repeat Q1 using string concat() method.*/

let firstNameAgn = prompt("Enter your first name");
let lastNameAgn = prompt("Enter your last name");
let fullNameAgn = firstNameAgn.concat(" ", lastNameAgn);

alert("Hello, " + fullNameAgn);

//Task 07:
/* Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.*/

let city = "Hyderabad";
let replacement = city.replace("Hyder", "Islam");

document.write("City: " + city);
document.write("</br>After replacement: " + replacement);

//Task 08:
/* Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;*/

var message = "Ali and Sami are best friends. They play cricket and football together.";

let replaceWords = message.replace(/and/g, "&");

document.write(replaceWords);

//Task 09:
/* Write a program that converts a string “472” to a number 472. Display the values & types in your browser.*/

let num = "472";
let numIntoString = Number(num);

document.write("Value: " + numIntoString);
document.write("<br>Type: " + typeof num);

document.write("<br>Value: " + numIntoString);
document.write("<br>Type: " + typeof numIntoString);

//Task 10:

/*Write a program that takes user input. Convert and show the input in capital letters.*/

let userGivenInp = prompt("Enter your city");
let capitilize = userGivenInp.toUpperCase();

document.write("User Input: " + userGivenInp);
document.write("<br>UpperCase: " + capitilize);

//Task 11:
/* Write a program that takes user input. Convert and show the input in title case.*/

let userInputAgn = prompt("Favorite Color");
let titleCaseWord = userInputAgn.charAt(0).toUpperCase() + userInputAgn.slice(1).toLowerCase();

document.write("User Input: " + userInputAgn);
document.write("<br>Title Case: " + titleCaseWord);

//Task 12:
/* Write a program that converts the variable num to string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser.*/

var num_$ = 35.36;
var conversion = num_$.toString().replace(".", "");
document.write("Number " + num_$);
document.write("Result " + conversion);

//Task 13:
/* Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username.
For character codes of [@ .
Note:
ASCII code of ! is 33
ASCII code of , is 44
ASCII code of . is 46
ASCII code of @ is 64*/

let userName = prompt("Enter your name");
let check;

for (let i = 0; i < userName.length; i++) {
    check = userName.charCodeAt(i);
    if (check == 33 || check == 44 || check == 46 || check == 64) {
        prompt("Please enter a valid Username")
    } 
}

//Task 14:
/* You have an array
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:*/

let foodItems = ["cake", "apple pie", "cookie", "chips", "patties"];
let userChoice = prompt("Welcome to ABC Bakery, what would you like to order?");
let conversionChoice = userChoice.toLowerCase();
let flag = false;
for (let i = 0; i < foodItems.length; i++) {
    if (conversionChoice === foodItems[i]) {
        flag = true
        alert(conversionChoice + " is available at index " + i + " in our bakery.")
    }
}
if (flag == false) {
    alert("We are Sorry. " + conversionChoice + " is not available in our bakery")
}

//Task 15:
/* Write a program to take password as an input from user. The password must qualify these requirements:
a. It should contain alphabets and numbers
b. It should not start with a number
c. It must at least 6 characters long
If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII
table at the end of this document.*/


let correctPassword = false;
let userPassword;

for (;;) {
    userPassword = prompt("Enter your Password: The password must qualify these requirements: \n a. It should contain alphabets and numbers \n b. It should not start with a number \n c. It must at least 6 characters long");

    if (userPassword.length >= 6 && 
        /[a-zA-Z]/.test(userPassword) && 
        /[0-9]/.test(userPassword) && 
        !/^[0-9]/.test(userPassword)) {
        correctPassword = true;
        break;
    } else {
        prompt("Please enter a valid Password")
    }
}
alert("password accepted");

//Task 16:
/*Write a program to convert the following string to an array using string split method. 
var university = “University of Karachi”;
Display the elements of array in your browser.*/

let university = "University of Karachi";
let universityArray = university.split('');

document.write(universityArray);

//Task 17:
/*Write a program to display the last character of a user input.*/

let userWord = prompt("Enter a word");

let lastChar = userWord.charAt(userWord.length-1);

document.write("User Input: " + userWord);
document.write("<br>Last character of input: " + lastChar);

//Task 18:
/* You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.*/

let str = "The quick brown fox jumps over the lazy dog";
str = str.toLowerCase();
let word = "the";
let words = str.split(' ');
let count = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i] === word) {
        count++;
    }
}
document.write("There are " + count + " occurences of the word " + " '"+ word + "' ")