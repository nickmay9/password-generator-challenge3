// Assignment code here

/*
* function generateParameters()
* This function prompts the user for several inputs
* in order to generate the users desired password
* parameters.
*/
function generateParameters(){
  // while loop that will run until the user enters a correct value between 8 and 128
  while (true){
    //prompt user for value
    pwParameters.pwLength = prompt("What is the length of your password? Please select a length between 8 and 128.");
    
    //if user entered correct value
    if (pwParameters.pwLength>=8 && pwParameters.pwLength<=128){
      break;
    }
    //if user entered wrong value
    else {
      alert("The number you entered was not between 8 and 128. Please enter a correct value.");
    }
  }

    //check to make sure at least one character type is selected
  while(true){
    //set alert to let the user know what the next several prompts will ask for
    alert("The next several prompts will ask what character types you want in your password. The character types include: lowercase, uppercase, nurmeric, and/or special characters. Please select at a minimum of 1 of the prompts.");
    pwParameters.lowercase = confirm("Would you like your password to include lowercase values?");
    pwParameters.uppercase = confirm("Would you like your password to include uppercase values?");
    pwParameters.numeric = confirm("Would you like your password to include nurmeric values?");
    pwParameters.specialChar = confirm("Would you like your password to include special character values?");
    
    //check to see if at least one value was selected
    if (pwParameters.lowercase || pwParameters.uppercase || pwParameters.numeric || pwParameters.specialChar)
    {
      break;
    }
  }
}

/*
* function generatePassword()
* This function calls the function generateParameters()
* to receive a list of user prompted parameters to
* create a randomly generated password
*/
function generatePassword() {
  generateParameters();
  var password = ""; //initializing password variable to concatenate the randomly generated values

  var charactersList = ""; //initializing string to create list of character values to pick from
  if (pwParameters.lowercase) {  // if lowercase is true add to list
    charactersList += "abcdefghijklmnopqrstuvwxyz";
  }
  if (pwParameters.uppercase){ //if uppercase is true add to list
    charactersList += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (pwParameters.numeric) { //if numeric is true add to list
    charactersList += "0123456789";
  }
  if (pwParameters.specialChar) { //if special characters is true add to list
    charactersList += " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
  }

  for (var i=0; i<=pwParameters.pwLength; i++){
    password += charactersList.charAt(Math.floor(Math.random()*charactersList.length));
  }

  return password;
}

//Password Parameters Object
var pwParameters = {
  pwLength: 0,
  lowercase: false,
  uppercase: false,
  numeric: false,
  specialChar: false
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
