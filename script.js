// Assignment Code
var SpecialCharacters = ['@','!','#','$','%','^','&','*','<','?','+','~','_','-','/','|','{','}','[',']'];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'w', 'x', 'y', 'z'];

var uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var characterSet = [];

characterSet.push(SpecialCharacters,numericCharacters,lowercaseCharacters,uppercaseCharacters);
console.log(characterSet);

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Math.random(); 

Math.random();






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  // write and determing what my password should be

  var passwordLength = prompt("Enter the length of your password");

  // if statement to determine lenght is between 8-128 characters
  var hasNumbers = confirm("Include Numbers?");
  var haslowerCase = confirm ("Include lowercase")
  var hasspecialCharacters = confirm("Include special characters");
  var hasupperCase = confirm ("Include uppercase");
  console.log(hasNumbers);



  console.log(passwordLength);

  return "Pasword$1#"

}

