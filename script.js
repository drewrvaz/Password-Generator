// Assignment Code
// This pulls the button from the HTML, which will make it functional when you click on it
var generateBtn = document.querySelector("#generate");

//Set the names of the variables required for password generation
//Saw this in a YouTube video
var passLength;
var passNumber;
var passSymbol;
var passLower;
var passUpper;

//Creating arrays for each of the variables required in the password. A positive response to the confirms from lines 39-42 will pull data from the array(s). A negative response will ignore the array(s)
number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Only added the special characters that actually worked within the array
symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "`", "~", ":", ";", ",", "<", ">", "/", "?", "[", "]", "{", "}", "|"];

//Write password to the #password input
function writePassword() {
  
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  //Function for using the variables to generate the password
  function generatePassword() {
    //Prompts the user to enter a character amount
    passLength = parseInt(prompt("How many characters would you like your password to be? It must be between 8 and 128 characters."));
    //If the user fails to enter a password length, this notify them that they need to answer the first prompt  
    if (!passLength) {
        alert("You need to enter a length for your password silly!"); 
      }
      //If the user fails to enter a number between 8 and 128, this will alert them that they need to choose a different number 
      else if (passLength < 8 || passLength > 128)
      passLength = parseInt(prompt("This needs needs to be between 8 and 128 characters"));
      //Tells user to begin filling out the remaining requirements for the password once meeting the length requirements. This utilizes confirm, which will allow bollean to be used to create the password requirements in the generator
      else { 
        passNumber = confirm("Do you want this password include numbers?");
        passSymbol = confirm("Do you want this password to include special characters");
        passLower = confirm("Do you want this password to include lowercase letters");
        passUpper = confirm("Do you want this password to include uppercase letters?");
      };
  }

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
