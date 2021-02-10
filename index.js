const input = require('readline-sync');
let str = "LaunchCode";
let letterChange = input.question("How many letters would you like to change? ");


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
//console.log(str.length);//
newStr = str.slice(letterChange, 11) + str.slice(0,letterChange);
//console.log(str);//
//Use a template literal to print the original and modified string in a descriptive phrase.
if (letterChange <= 9) {
  console.log(`When we speak in "Code Latin", we pronounce ${str} as ${newStr}. Try it for yourself!`);
} else if (letterChange > 9) {
  console.log(`When we speak in "CodeLatin", we pronounce ${str} as ${str.slice(3,11) + str.slice(0,3)}. \nDid you think I wouldn't notice that you entered ${letterChange}? `);
}

//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.


//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
