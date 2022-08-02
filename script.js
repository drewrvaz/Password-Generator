// Assignment Code
// This pulls the button from the HTML, which will make it functional when you click on it
var generateBtn = document.querySelector("#generate");

//Set the names of the variables required for password generation
var passLength
var passNumber
var passSymbol
var passLower
var passUpper

// Write password to the #password input
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
