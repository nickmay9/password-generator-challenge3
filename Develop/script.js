// Assignment code here
function generatePassword() {

  var correctEntry = false; //boolean value to run loop until correct entry is inputed

  // while loop that will run until the user enters a correct value between 8 and 128
  while (!correctEntry){
    //prompt user for value
    var pwLength = prompt("What is the length of your password? Please select a length between 8 and 128.");
    
    //if user entered correct value
    if (element>=8 && element<=128){
      correctEntry = true;
    }
    //if user entered wrong value
    else {
      alert("The number you entered was not between 8 and 128. Please enter a correct value.");
    }
  }
    //reset correctEntry for next loop values
    correctEntry = false;

    //check to make sure at least one character type is selected
  while(!correctEntry){
    //set alert to let the user know what the next several prompts will ask for
    alert("The next several prompts will ask what character types you want in your password. The character types include: lowercase, uppercase, nurmeric, and/or special characters. Please select at a minimum of 1 of the prompts.");
    var lowercase = confirm("Would you like your password to include lowercase values?");
    var uppercase = confirm("Would you like your password to include uppercase values?");
    var numeric = confirm("Would you like your password to include nurmeric values?");
    var special = confirm("Would you like your password to include special character values?");
    
    //check to see if at least one value was selected
    if (lowercase || uppercase || numeric || special)
    {
      correctEntry = true;
    }
  }
  
  return pwLength;
}


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
