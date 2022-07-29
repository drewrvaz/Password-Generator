// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How many characters do you want your password to be? It must be at least 8 characters, and no more than 128.");
  var lowerCase = prompt("Do you want lowercase letters included in your password? yes or no.");
  var upperCase = prompt("Do you want uppercase letters in your password? yes or no.");
  var numbers = prompt("Do you want numbers in your password? yes or no.");
  var symbols = prompt("Do you want symbols in your password? yes or no.");

console.log(passwordLength);
console.log(lowerCase);
console.log(upperCase);
console.log(numbers);
console.log(symbols);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
