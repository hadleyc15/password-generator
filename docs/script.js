// Assignment Code
var Characters;

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = ["!", "@", "#","$", "%", "^", "&", "*", "~", "?"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var base = [];

var buttonPassword = function () {

  Characters = prompt("How many characters would you like your password to be?");

  while (isNaN(Characters) || Characters < 8 || Characters > 128) Characters = Number(
    prompt("You password must contain 8-128 characters...How many characters would you like in your password?"));

    var lower = confirm("Would you like to use lowercase letters in your password?");
  if (lower === true) {
    base = base.concat(lowercase);
  }

// Write password to the #password input
var passwordButton = document.querySelector("password");
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", buttonPassword);
generateBtn.addEventListener("click", writePassword);

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  function generatePassword() {
    var randomPassword = "";
    for (var i = 0; i < Characters; i++) {
      randomPassword += base[Math.floor(Math.random() * base.length)]; 
    }
    return (randomPassword);
  }
}
}