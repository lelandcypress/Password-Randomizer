// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
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
        };
        
        //array of functions above
        var buildingBlocks= [randLetter(),randLetterUpper(), randNum(),randSpecChar()];      
        //Generates a random number based on the length of buildingBlocks
        var constructor = Math.floor((Math.random() * buildingBlocks.length))
              //good code above//
            //pick it up here//
            //Next Step: find a way to  
            //we know this array is successfully called in function generatePassword. Next step is to find a way to run a loop that randomly will randomly select a value from 
            var testArray= ['1']
        
        function generatePassword (){
               console.log(testArray);
        }
        
    
            
            var password = generatePassword();
            var passwordText = document.querySelector("#password");
            passwordText.value = password;
        };    



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);