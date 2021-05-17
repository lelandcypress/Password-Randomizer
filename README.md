Password Randomizer

Summary:

This is a front end application designed to allow a user to receive a secure password upon request. Once the end user click the generate button, they are prompted for inputs such as preffered length, and what character types to include. Then the end user is to receive a secure password displayed in the window.


Starter Code:
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

Steps Taken

Step 1: Program the ability to generate random characters collect values in an endpoint array.
Method: Declared 4 functions, which were designed to generate random values depending on what data type. I had to treat the special characters as string values since I kept getting a debugging error otherwise. 

    //BUILD OUT THE ABILITY TO RANDOMLY SELECT UPPERCASE, LOWERCASE, SPECIAL CHARACTER, AND NUMBER 
        //generate lowercase letter//
        function randLetter () {
        var alphabet =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        return alphabet[Math.floor(Math.random()*alphabet.length)]
        };
        
        
        //generate random uppercase letter//
        function randLetterUpper () {
        var alphabetUpper =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
        return alphabetUpper[Math.floor(Math.random()*alphabetUpper.length)]
        };
            
        //generate random number between 0-9
        function randNum(){ 
        return Math.floor(Math.random()*10)
        };
        //generate random special characters. Converted to string characters
        function randSpecChar(){
        var specChar =["!","@","#","$","%","^","&","*","(",")","<",">"]
        return specChar[Math.floor(Math.random()*specChar.length)]

Result: Mostly successful. I compiled the 4 functions above into this array:

   var possibleCombinations = [randLetter(),randLetterUpper(),randNum(),randSpecChar()];

possibleCombinations, once logged to the console, outputs one random charcter per data type.



Next steps: Convert possibleCombinations into a function. Eventually we will need to be able to run a loop that randomly selects one of the 4 index points within this array a set number of times. I plan to start with setting it to 8 times, if successful I should be able to set a variable to match end user input.

Note: this code block is currently nested within a declared function generatePassword. As I progress, I am not convinced this is the best spot for this code. I will address this once I proof out how to randomly iterate over possibleCombinations. It is possible I may create a new function, and set possibleCombinations as the output. 