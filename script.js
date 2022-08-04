// Assignment Code
// This pulls the button from the HTML, which will make it functional when you click on it
var generateBtn = document.querySelector("#generate");

// Set the names of the variables required for password generation
// Saw this in a YouTube video
var passLength;
var passNumber;
var passSymbol;
var passLower;
var passUpper;

// Needed to create one more variable that would be able to hold arrays that will need to be combined in order to create the password
var criteria;

// Creating arrays for each of the variables required in the password. A positive response to the confirms from lines 42-45 will pull data from the array(s). A negative response will ignore the array(s)
number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Only added the special characters that actually worked within the array
symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "`", "~", ":", ";", ",", "<", ">", "/", "?", "[", "]", "{", "}", "|"];

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();

// Function for using the variables to generate the password
function generatePassword() {
  // Prompts the user to enter a character amount
  passLength = parseInt(prompt("How many characters would you like your password to be? It must be between 8 and 128 characters."));
  // If the user fails to enter a password length, this notify them that they need to answer the first prompt  
  if (!passLength) {
    alert("You need to enter a length for your password"); 
  }
  // If the user fails to enter a number between 8 and 128, this will alert them that they need to choose a different number 
  else if (passLength < 8 || passLength > 128) {
    passLength = parseInt(prompt("This needs to be between 8 and 128 characters"));
  }

  // Tells user to begin filling out the remaining requirements for the password once meeting the length requirements. This utilizes confirm, which will allow bollean to be used to define the password requirements in the generator
  else { 
    passNumber = confirm("Do you want this password include numbers? Ok for yes, cancel for no.");
    passSymbol = confirm("Do you want this password to include special characters? Ok for yes, cancel for no.");
    passLower = confirm("Do you want this password to include lowercase letters? Ok for yes, cancel for no.");
    passUpper = confirm("Do you want this password to include uppercase letters? Ok for yes, cancel for no.");
    };

  // Created an alert if the user doesn't choose any criteria for the password
    if (!passNumber && !passSymbol && !passLower && !passUpper) {
      criteria = alert("You have to pick something to make your password");
    } 
    // Used concat to combine all the arrays if the user wants all options in the password
    else if (passNumber && passSymbol && passLower && passUpper) {
      criteria = number.concat(symbol, upperCase, lowerCase);
    }
  // Created else if statements for each of the possibilities if the user wants three of the four options, and used concat to combine each combination of the arrays
    else if (passNumber && passSymbol && passLower && !passUpper) {
      criteria = number.concat(symbol, lowerCase);
    } else if (passNumber && passSymbol && !passLower && passUpper) {
      criteria = upperCase.concat(symbol, number);
    } else if (passNumber && !passSymbol && passLower && passUpper) {
      criteria = lowerCase.concat(number, upperCase);
    } else if (!passNumber && passSymbol && passLower && passUpper) {
      criteria = symbol.concat(lowerCase, upperCase);
    }
    // Created else if statements for each of the possibilities if the user wants two of the four options, and used concat to combine each combination of the arrays
    else if (passNumber && !passSymbol && !passLower && passUpper) {
      criteria = number.concat(upperCase);
    } else if (passNumber && passSymbol && !passLower && !passUpper) {
      criteria = number.concat(symbol);
    } else if (passNumber && !passSymbol && passLower && !passUpper) {
      criteria = number.concat(lowerCase);
    } else if (!passNumber && passSymbol && !passLower && passUpper) {
      criteria = symbol.concat(upperCase);
    } else if (!passNumber && passSymbol && passLower && !passUpper) {
      criteria = symbol.concat(lowerCase);
    } else if (!passNumber && !passSymbol && passLower && passUpper) {
      criteria = lowerCase.concat(upperCase);
    }
    // Created else if statements for each of the possibilities if the user wants one of the four options, and tagged it to the correct array
    else if (passNumber && !passSymbol && !passLower && !passUpper) {
      criteria = number;
    } else if (!passNumber && passSymbol && !passLower && !passUpper) {
      criteria = symbol;
    } else if (!passNumber && !passSymbol && passLower && !passUpper) {
      criteria = lowerCase;
    } else if (!passNumber && !passSymbol && !passLower && passUpper) {
      criteria = upperCase;
    }

    // Created a new variable that would contain the characters randomly selected from the arrays based on the user's choices
    var randomPassword = [];
    //For loop to choose random characters for the length requested by the user. randomPassword.push(chooseCriteria) pushes the characters from the arrays that were selected into the box holding the password
    for (var i = 0; i < passLength; i++) {
      var chooseCriteria = criteria[Math.floor(Math.random() * passLength)];
      randomPassword.push(chooseCriteria);
    }
    return randomPassword.join('');
  }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
