// Assignment Code
// This pulls the button from the HTML, which will make it functional when you click on it
var generateBtn = document.querySelector("#generate");

//Set the names of the variables required for password generation
var passLength
var passNumber
var passSymbol
var passLower
var passUpper

//Creating arrays for each of the variables required in the password
number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Only added the special characters that actually worked within the array
symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "`", "~", ":", ";", ",", "<", ">", "/", "?", "[", "]", "{", "}", "|"]
//Write password to the #password input
function writePassword() {
  
  function passwordPrompt() {

  }

  var password = generatePassword(); 
  var passwordLength = parseInt(prompt("How many characters do you want your password to be? Must be at least 8 characters, and no more than 124 in length."));
  var passLength = parseInt(passwordLength);

  function generatePassword() {
    var length = passLength,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"      
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;

  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
