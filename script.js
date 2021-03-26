var SpecialCharacters = [
  "@",
  "!",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "<",
  "?",
  "+",
  "~",
  "_",
  "-",
  "/",
  "|",
  "{",
  "}",
  "[",
  "]",
];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Assignment Code
// characterSet.push(SpecialCharacters,numericCharacters,lowercaseCharacters,uppercaseCharacters);
// console.log(characterSet);

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
  var randomPassword = [];
  var finalPass = [];

  var passwordLength = parseInt(prompt("Enter the length of your password"));
// password length is less than 8 or greater than 128 do not run the functions 
if (isNaN(passwordLength)) {
  alert("Must be a number")
}

if (passwordLength < 8) {
    // return message
    alert("Please select length between 8 and 128 characters")
    return
  }
  if (passwordLength > 128) {
    // return message
    alert("Please select length between 8 and 128 characters")
    return
  } 



  // if statement to determine length is between 8-128 characters
  var hasNumbers = confirm("Include Numbers?");
  var haslowerCase = confirm("Include lowercase?");
  var hasspecialCharacters = confirm("Include special characters?");
  var hasupperCase = confirm("Include uppercase?");


  if (!hasNumbers && !haslowerCase && !hasspecialCharacters && !hasupperCase) {
    alert("Must choose at least one option")
  }

  if (hasNumbers) {
    finalPass = finalPass.concat(numericCharacters);
  }

  if (haslowerCase) {
    finalPass = finalPass.concat(lowercaseCharacters);
  }

  if (hasspecialCharacters) {
    finalPass = finalPass.concat(SpecialCharacters);
  }

  if (hasupperCase) {
    finalPass = finalPass.concat(uppercaseCharacters);
  }

  for (var i = 0; i < passwordLength; i++) {
    console.log(finalPass);
    var randomIndex = Math.floor(Math.random() * finalPass.length);
    console.log(randomIndex);
    var randomCharacter = finalPass[randomIndex];
    console.log(randomCharacter);
    randomPassword.push(randomCharacter);
    console.log(randomPassword)
  }



  return randomPassword.join("");
  
}
