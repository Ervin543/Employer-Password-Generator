//-- Here are the arrays that contain the characters that are going to be used in the Generator --//

//-- Upper Case Letters --//
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

//--Lower Case Letters--//
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

//-- Numbers --//
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

//-- Symbols --//
var symbols = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']



//-- This is the function that will generate the password for the user --//
function generatePassword() {
  //-- This Variable stores all of the characters that we want to use in our Password --//
  var options = []
  //-- This Variable presents a prompt to ask the user to enter the amount of characters that they would like to have in their password --//
  var passwordLength = parseInt( prompt('How many characters would you like your password to contain ? (Must be more than 8 and less than 128'));
  //-- this iF statement checks to see if the value entered in the passwordLength Var is an integer, and if it is not it will return the alert below --//
  if (isNaN(passwordLength)) {
    alert('Your Password Length must be entered as a number')
    return;
  }
  //-- This If statement checks to see if the entered length is less than 8, and returns the message below if it is not --//
  if (passwordLength < 8) {
    alert ('Your Passsword Length must be at least 8 characters');
    return;
  }
  //-- This If statement checks to see if the entered length is more than 128, and returns the message below if it is not --//
  if (passwordLength > 128) {
    alert ('Your Password Length must be less than 128 Characters')
    return;
  }

  //-- This var is being used to ask if the user wants to include upper case letters in their password, and if true it will be later used to concatenate the var upperCaseLetters and the empty var options --//  
  var hasupperCaseLetters = confirm(
    'Click OK to confirm that your password will include Upper Case Letters'
);

//-- This var is being used to ask if the user wants to include lower case letters in their password, and if true it will be later used to concatenate the var lowerCaseLetters and the empty var options --//  
var haslowerCaseLetters = confirm(
 'Click OK to confirm that your password will include Lower Case Letters'
);

//-- This var is being used to ask if the user wants to include numbers in their password, and if true it will be later used to concatenate the var numbers and the empty var options --//  
var hasnumbers = confirm(
 'Click OK to confirm that your password will include Numbers'
);

//-- This var is being used to ask if the user wants to include symbols in their password, and if true it will be later used to concatenate the var symbols and the empty var options --//  
var hassymbols = confirm(
 'Click OK to confirm that your password will include Symbols'
);

//-- This iF statement checks to see if the variables from line 40 to 55 are false and returns the message below before closing the prompt --//
if (
  hasupperCaseLetters === false &&
  haslowerCaseLetters === false &&
  hasnumbers === false &&
  hassymbols === false 
 ) {
  alert('You must select at Least One Character Type');
  return null;
 }

 if (hasupperCaseLetters) {
  options = options.concat(upperCaseLetters)
 }

 if (haslowerCaseLetters) {
  options = options.concat(lowerCaseLetters)
 }

 if (hasnumbers) {
  options = options.concat(numbers)
 }

 if (hassymbols) {
  options = options.concat(symbols)
 }
 
 //-- This var stores the characters that will become the password --//
 var password = ''
 //-- This for loop will generate a random password using the characters that were stored in the arrays from line 4 to 13 --//
 for (var i = 0; i < passwordLength; i++) {
  password += options [Math.floor(Math.random() * options.length)]
 }
 return password;
}




 // Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
