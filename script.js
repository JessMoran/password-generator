// Assignment Code
const generateBtn = document.querySelector("#generate");

function generatePassword () {
  // Get data to know how length the password will be
  let numOfCharacters = parseInt(prompt('How many characters would you like your password to contain?'));

  // Validate is a number and is a number between 8 to 128
  if ( isNaN(numOfCharacters) ) {
    prompt('You should type a number. Try it again, please!');
  } else if ( numOfCharacters < 8 || numOfCharacters > 128 ) {
    prompt('You should type a number between 8 to 128. Try it again, please!');
  }

  // Get data to know which special characters do they want
  let lowerOpt = confirm('Would you like lowercase?');
  let upperOpt = confirm('Would you like uppercase?');
  let specialCharOpt = confirm('Would you like special characters?');
  let numbersOpt = confirm('Would you like numbers?');

  // Validate at least one special character type should be selected
  if ( specialCharOpt === false && numbersOpt === false && lowerOpt === false &&  upperOpt === false ) {
     alert('At least one special character type should be selected. Try it again!');
  }

  // Characters types arrays
  let lowerArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let upperArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let specialCharArr = ['*', '!','.', '?','/',',','@','$','%','&','=','#','+','-',';'];
  let numbersArr = [1,2,3,4,5,6,7,8,9,0];

  let entireOpt = [];

  // Check which options the users chose and concat them into a new array
  if ( lowerOpt === true ){
    entireOpt = entireOpt.concat(lowerArr);
  }

  if ( upperOpt === true ){
    entireOpt = entireOpt.concat(upperArr);
  }

  if ( specialCharOpt === true ){
    entireOpt = entireOpt.concat(specialCharArr);
  }

  if ( numbersOpt === true) {
    entireOpt = entireOpt.concat(numbersArr);
  }

  // Loop to give us a random number
  let randomPass = '';

  for ( let s = 0; s < numOfCharacters; s++ ) {  // Number of characters it's defined for user
    let randomNum = Math.floor(Math.random() * entireOpt.length);  // EntireOpt length will be based on user-selected criteria
    randomPass += entireOpt[randomNum];  // randomNum will search the index into entireOpt array
  }                                      // randomPass will be saved in the variable above and it will concatenate the new value according to randomNum index
  return randomPass;  // GeneratePassword function return the random password
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
