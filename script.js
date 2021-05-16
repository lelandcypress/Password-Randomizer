//MAS: Starter code has used DOM to add an event listener to the big red button marked "Generate Password". 
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//MAS Start coding here. 
function writePassword() {
  var password = generatePassword();// MAS: reference error: generatePassword is not defined. 
  var passwordText = document.querySelector("#password"); //querry Selector will look for an ID within HTML matching "password"

  passwordText.value = password; //DOM linking placing output of var password (which is the result of function generatePassword)

}

// Add event listener to big red button
//Plain english
generateBtn.addEventListener("click", writePassword)
//random numer
//Math.floor(Math.random()*10)
//.toUpperCase
//.toLowerCase
//user length input will determine the Loop
  //for (let i=0; i>8; i++)


  