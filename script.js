// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function() {
  
  var passwordText = document.querySelector("#password");
  var passwordlength = window.prompt("How many characters do you want in is this password?");
  if (passwordlength < 8) {
    window.alert("Please enter a number greater than 7")
  } else if (passwordlength > 128) {
    window.alert ("Please enter a number less then 129")
  } else 
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
