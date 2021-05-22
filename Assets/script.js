// Assignment Code
var generateBtn = document.querySelector("#generate");
function writePassword() {

    function generatePassword() {
        //Global Variables. Each string represents what the end user can include in their password.
        var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
        var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var symbols = '!@#$%^&*()=+-~<>?';
        var numbers = '1234567890'
        var characters = ''
        
        //User confirms their desired characters.
        function userSelection() {

            var wantLow = window.confirm("Do you want lowercase letters?")

            //Confirm User Criteria 
            var wantNum = window.confirm("Do you want numbers?")


            //Confirm User Criteria 
            var wantChar = window.confirm("Do you want special characters?")


            //Confirm User Criteria 
            var wantUp = window.confirm("Do you want uppercase letters?")
            //Added to Character string if true
            if (wantLow === true) {
                characters += lowerCase
            };
            //Added to Character string if true
            if (wantUp === true) {
                characters += upperCase
            };
            //Added to Character string if true
            if (wantNum === true) {
                characters += numbers
            };
            //Added to Character string if true
            if (wantChar === true) {
                characters += symbols
            };
        }


        //Prompts user for password length. Function will not continue if user exceeds approved parameters
        var length = +window.prompt("Please enter a number between 8 and 256 to select your password length");
        if (length < 257 && length > 7) {
            userSelection();

        } else {
            window.alert("Please enter a number between 8 and 256")
            
        }
    //needs work//
        var display =''
        for (var i=0;i < length; i++){   
            display += characters.charAt(Math.floor(Math.random() * characters.length));
            console.log(display) 
        }
        return display;
    }

    // Write password to the #password input

    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);