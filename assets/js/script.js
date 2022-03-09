// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',  'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',  'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ['~', '!', '@', '#','$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '/', '{', '}', '|', ';', ':', '.', ';', '/', '<', '>', '?'];
var passStart = '';
var passwordFinal = '';
var mixedBag = [];


function generatePassword() {

var characterLength = window.prompt("Enter length of password between 8 - 168 characters")

if (characterLength == null) {
  return; 
  } 
  else if (isNaN(characterLength)) {
  alert("Please enter a number");
  generatePassword()  
  } 
  else if ((characterLength < 8)||(characterLength > 168)) { 
  alert("Your password length must be between 8 - 168 characters;")  
  generatePassword()  
};

var incLowerCase = window.confirm("Would you like to include lowercase characters in your password?");

if (incLowerCase) {
  mixedBag = mixedBag.concat(lowerCase);
  var lowerCaseLength = lowerCase.length;
  var index = Math.floor(Math.random() * lowerCaseLength);
  var singleLowerCase = lowerCase[index];
  passStart = passStart + singleLowerCase;
};

var incUpperCase = window.confirm("Would you like to include uppercase characters in your password?");

if (incUpperCase) {
  mixedBag = mixedBag.concat(upperCase);
  var upperCaseLength = upperCase.length;
  var index = Math.floor(Math.random() * upperCaseLength);
  var singleUpperCase = upperCase[index];
  passStart = passStart + singleUpperCase;
};

var incNumbers = window.confirm("Would you like to include numbers in your password?");

if (incNumbers) {
  mixedBag = mixedBag.concat(numbers);
  var numbersLength = numbers.length;
  var index = Math.floor(Math.random() * numbersLength);
  var singlenumbers = numbers[index];
  passStart = passStart + singlenumbers;
};

var incSpecialChar = window.confirm("Would you like to include special characters in your password?");

if (incSpecialChar) {
  mixedBag = mixedBag.concat(specialChar);
  var specialCharLength = specialChar.length;
  var index = Math.floor(Math.random() * specialCharLength);
  var singlespecialChar = specialChar[index];
  passStart = passStart + singlespecialChar;
}; 

if (!passStart) {
    alert("You didn't select any options, please start again") ;
    generatePassword();  
};

var fillLength =  characterLength - passStart.length;
var passFill = '';

for (var i = 0; i < fillLength; i++) {
  passFill += mixedBag[Math.floor(Math.random() * mixedBag.length)];
};

var passwordFinal = passStart + passFill;

console.log(mixedBag);
console.log(characterLength);
console.log(singleLowerCase);
console.log(singleUpperCase);
console.log(singlenumbers);
console.log(singlespecialChar);
console.log(passFill);
console.log(passwordFinal);

return passwordFinal;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
