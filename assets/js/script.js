// Assignment Code
var generateBtn = document.querySelector("#generate");


// Arrays of types of available characters 
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',  'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',  'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ['~', '!', '@', '#','$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '/', '{', '}', '|', ';', ':', '.', ';', '/', '<', '>', '?'];



function generatePassword() {
  var mixedBag = [];
  var password = '';
  var characterLength = '';
  
  characterLength = window.prompt("Enter length of password between 8 - 168 characters")

  if (characterLength == null) {
    return; 
    } 
    else if (isNaN(characterLength)) {
    alert("Please enter a number");
    generatePassword();
    return;  
    } 
    else if ((characterLength < 8)||(characterLength > 168)) { 
    alert("Your password length must be between 8 - 168 characters;");
    generatePassword();
    return;  
  };

  console.log(characterLength);

  var incLowerCase = window.confirm("Would you like to include lowercase characters in your password?");

  if (incLowerCase) {
    generateCharacter(lowerCase)
  }

  var incUpperCase = window.confirm("Would you like to include uppercase characters in your password?");

  if (incUpperCase) {
    generateCharacter(upperCase)
  }

  var incNumbers = window.confirm("Would you like to include numbers in your password?");

  if (incNumbers) {
    generateCharacter(numbers)
  }

  var incSpecialChar = window.confirm("Would you like to include special characters in your password?");

  if (incSpecialChar) {
    generateCharacter(specialChar)
  }

  //Fucntion to ensure that the password includes one of each selected character
  function generateCharacter(type) {
    //This adds the selected character array into a group array that the remain required characters for the password are randomly selected from
    mixedBag = mixedBag.concat(type);
    var arrayLength = type.length;
    var index = Math.floor(Math.random() * arrayLength);
    // Adds single random required character type to the password
    password += type[index]
  }
  
  // Validation if not character types are selected. Restarts the processes
  if (!password) {
    alert("You didn't select any options, please start again");
    generatePassword();
    return;  
  };
  
  //Variable is defined how many random characters are needed to fill the required password length  
  var fillLength =  characterLength - password.length;

  // Picks random characters from 
  for (var i = 0; i < fillLength; i++) {
    password += mixedBag[Math.floor(Math.random() * mixedBag.length)];
  };

  
  console.log(mixedBag);
  console.log(characterLength);
  console.log(incLowerCase);
  console.log(incUpperCase);
  console.log(incNumbers);
  console.log(incSpecialChar);
  console.log(password);
  console.log(password.value);

  return password;

};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);
  console.log(passwordText);
  console.log(passwordText.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
