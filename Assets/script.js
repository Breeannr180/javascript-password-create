// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword(){
  var password = "";
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
    const passwordLength = prompt("How long would you like your password?");
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  alert("Invalid input. Password length must be a number between 8 and 128.");
  }
  
  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt

  const upperCase = confirm("Do you want to include uppercase letters?");
  const lowerCase = confirm("Do you wan to include lowercase letters?");
  const numbers = confirm("Do you want to include numbers?");
  const symbols = confirm("Do you want to include symbols?");

  // THEN my input should be validated and at least one character type should be selected
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random()*chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
  }

  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page

  return password;

  
  // alert("Your randomly generated password is: " + password);
  
}









