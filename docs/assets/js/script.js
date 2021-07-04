// Assignment code here
// generator functions - https://www.net-comber.com/charset.html

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// get modal
var modal = document.getElementById("modal");

// get open modal button
var modalBtn = document.getElementById("button");

// get close button
var closeBtn = document.getElementById("close");

// listen for click
modal


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Lower Case Letters
function getRandomLower() {
  return String.fromCharCode(console.log(Math.floor(Math.random() * 26) +97));
}
// Upper Case Letters
function getRandomUpper() {
  return String.fromCharCode(console.log(Math.floor(Math.random() * 26) +65));
}



console.log(getRandomLower());
console.log(getRandomUpper());


