// Assignment Code
var generateBtn = document.querySelector("#generate");


//-----------Grabbing the information from the promt/DOM-----------------
  generateBtn,addEventListener("click", function(){
    var length = prompt("choose a number between 8-24");
    var hasLower = confirm("lower case letters? yes/no");
    var hasUpper = confirm("upper case letters? yes/no");
    var hasNumber = confirm("numbers? yes/no");
    var hasSymbol = confirm("symbols? yes/no");
    if (length >= 8 && length <= 24) {
      console.log(length);
    }
    if (hasLower === true) {
      getRandomLower();
    }
    if (hasUpper === true) {
      getRandomUpper();
    }
    if (hasNumber === true) {
      getRandomNumber();
    }
    if (hasSymbol === true) {
      getRandomSymbol();
    }
  });


// Write password to the #password input
function generatePassword() {


}
// --------------------Generator functions ---------------------
function getRandomLower() {
  var randomLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  return randomLower;
}

function getRandomUpper() {
  var randomUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  return randomUpper;
}

function getRandomNumber() {
  var randomNumber = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  return randomNumber;
}

function getRandomSymbol() {
  const symbols = "!@#$%&"
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
