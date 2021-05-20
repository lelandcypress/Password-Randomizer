// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {    
        
        function generatePassword (){                            
            //options arrays
            var alphabet =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
            var alphabetUpper =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
            var specChar =["!","@","#","$","%","^","&","*","(",")","<",">"];    
            //Functions noted earlier in the code are pushed here to allow for a loop 
            var pArray = ['fudge'];
            
           
            //Functions will randomly choose a letter, uppercase, number btw 0-9, and special characters when run 
            //generate lowercase letter//
            function randLetter() {
            return alphabet[Math.floor(Math.random()*alphabet.length)]
            };
            
            //generate random uppercase letter//
            function randLetterUpper() {
            return alphabetUpper[Math.floor(Math.random()*alphabetUpper.length)]
            };
                
            //generate random number between 0-9
            function randNum(){ 
            return Math.floor(Math.random()*10)
            };
    
            //generate random special characters. Converted to string characters
            function randSpecChar(){
            return specChar[Math.floor(Math.random()*specChar.length)]
            };
            
            //Confirm User Criteria
            function userSelection(){ 
            var wantLow = window.confirm("Do you want lowercase letters?")
            if(wantLow === true){
                pArray.push(randLetter())
            }
            //Confirm User Criteria 
            var wantNum = window.confirm ("Do you want numbers?")
            if (wantNum === true) {
                pArray.push(randNum())
            };
            //Confirm User Criteria 
            var wantChar = window.confirm ("Do you want special characters?")
            if(wantChar === true) {
                pArray.push(randSpecChar())
            };
            //Confirm User Criteria 
            var wantUp = window.confirm ("Do you want uppercase letters?")
            if(wantUp === true) {
            pArray.push(randLetterUpper())}
}
            //Prompts user for password length, creates variable that can be used later in code
            var pLength = window.prompt("Please enter a number between 8 and 256 to select your password length");
            if (pLength < 257 && pLength > 7){
                userSelection();
                console.log('Paswword length is ' + pLength)
                console.log('pArray is ' + pArray)
            }else{
            window.alert("Please enter a number between 8 and 256")}

           




                //pick it up here try console logging displayArray to see what pops up//
            //for(var i = 0; i < pLength; i++){
              //  finalPush()}

                
           
            
        
        };     
            

            
            
        //find a way to repeatedly call the function and push the results into a new array.//     
        //Build user input
        //conditions?      
                            
            var password = generatePassword();
            var passwordText = document.querySelector("#password");
            passwordText.value = password;
    };    



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
