// MODAL

var modal = document.getElementById("Settings-Modal");
// button that opens the modal
var btn = document.getElementById("pop-up");
// element that closes the modal
var span = document.getElementsByClassName("close")[0];


// click to open modal
btn.onclick = function() {
  modal.style.display = "block";
}
// click x to close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// click anywhere outside of the modal to close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// -------------------------------------------------------------->
// Password Settings

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const passwordTxt = document.getElementById("#password");
const length = document.getElementById("length");
const incLetters = document.getElementById("upper");
const incletters = document.getElementById("lower");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const generateBtn = document.getElementById("#generate");

generateBtn.addEventListener("click", () => {
  let characters = undefined;
  incLetters.checked ? (characters += upper) : "";
  incletters.checked ? (characters += lower) : "";
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  passwordTxt.value = generatePassword(length.value, characters);
});


const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

const copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", () => {
  passwordTxt.select();
  document.execCommand("copy");
  alert("Password Copied");
});
// -------------------------------------------------------------->

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}