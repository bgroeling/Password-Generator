// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// -------------------------------------------------------------->
// MODAL

var modal = document.getElementById("Settings-Modal");
// button that opens the modal
var btn = document.getElementById("generate");
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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
