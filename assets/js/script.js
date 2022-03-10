// Assignment Code
var generateBtn = document.querySelector("#generate");


// Arrays of types of available characters 
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',  'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',  'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ['~', '!', '@', '#','$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '/', '{', '}', '|', ';', ':', '.', ';', '/', '<', '>', '?'];


function generatePassword() {
  // mixedbag variable a merging of the user required character arrays
  var mixedBag = [];
  var password = '';
  
  var characterLength = window.prompt("Enter length of password between 8 - 168 characters")
  // Validation for input of character length
  if (characterLength == null) {
    return null; 
  } else if (isNaN(characterLength)) {
    alert("Please enter a number");
    return null;  
  } else if ((characterLength < 8)||(characterLength > 168)) { 
    alert("Your password length must be between 8 - 168 characters;");
    return null;  
  };

  console.log(characterLength);
  //Include chartecter type prompts
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
    //This adds the character array into group array for the required characters for the password are randomly selected from
    mixedBag = mixedBag.concat(type);
    // Adds single random required character type to the password string
    var arrayLength = type.length;
    var index = Math.floor(Math.random() * arrayLength);
    password += type[index]
  }
  
  // Validates that at least one character type is selected
  if (!password) {
    alert("You didn't select any options, please start again");
    return null;  
  };
  
  //Works out how many remaining characters are needed to fill the required password length  
  var fillLength =  characterLength - password.length;

  //Picks remaining required characters at random  
  for (var i = 0; i < fillLength; i++) {
    password += mixedBag[Math.floor(Math.random() * mixedBag.length)];
  };

  return password;

};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //Validation fix added to stop returning undefined
  if (password === null) {
    writePassword()
    return
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
