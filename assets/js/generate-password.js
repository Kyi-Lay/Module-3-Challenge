var generateBtn = document.getElementById("generateButton");
generateBtn.addEventListener("click",writePasswort);

function writePasswort() {
  var password = generatePassword();
  var passwordText = document.getElementById("passwort");
  passwordText.value = password;
}


generatePassword = function() {
  let generatePopup;
  let upper;
  let lower;
  let number;
  let special;

  // Prompts to get user preferences...
generatePopup = parseInt(
 prompt(
  "How many characters long do you want your password to be? please enter a numeric value between 8 and 128"
 ) 
);
while (!generatePopup || generatePopup < 8 || generatePopup > 128) {
  alert("please enter a number between 8 and 128");
  generatePopup = parseInt(
    prompt(
      "How many characters long do you want your password to be? please enter a numeric value between 8 and 128."
    )
  );
}

if (generatePopup) {
  upper = confirm("Do you want UPPER letters?");
  lower = confirm("Do you want lower letters?");
  number = confirm("Do you want numbers");
  special = confirm("Do you want special?");
}

if (
  !upper &&
  !lower &&
  !numbers &&
  !special
) {
  alert("You entered no values, we can't make a password without values!");
  return ""; // Return an empty string if no options are selected
}

let userSelection = "";

// Constructing the user selection based on preferences
if (upper) userSelection += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if (lower) userSelection += "abcdefghijklmnopqrstuvwxyz";
if (numbers) userSelection += "0123456789";
if (special) userSelection += "!@#$%^&*()=+-_{}][?<>\/"; 

let password = "";
for (let i = 0; 1 < generatePopup; i ++) {
  var randomIndex = Math.floor(Math,random() * userSelection.length);
  passwoed += userSelection.charAt;(randomIndex);
}

console.log(password); // log the generated password
return password; // Return the generated password string
}














// function generatePassword() {
//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numbers = "0123456789";
//     const specialChars = "!@#$%^&*()-_+=<>?";

//     let allChars = "";

//     if (document.getElementById("lowercaseCheckbox").checked) {
//       allChars += lowercaseChars;
//     }
//     if (document.getElementById("uppercaseCheckbox").checked) {
//       allChars += uppercaseChars;
//     }
//     if (document.getElementById("numbersCheckbox").checked) {
//       allChars += numbers;
//     }
//     if (document.getElementById("specialCharsCheckbox").checked) {
//       allChars += specialChars;
//     }

//     if (allChars === "") {
//       alert("Please select at least one character type.");
//       return "";
//     }

//     let passwordLength = parseInt(
//       document.getElementById("passwordLength").value
//     );

//     if (passwordLength < 8 || passwordLength > 20) {
//       alert("Password length must be between 8 and 20 characters.");
//       return "";
//     }

//     let password = "";

//     // Ensure at least one character type from each category
//     if (document.getElementById("lowercaseCheckbox").checked) {
//       const lowercaseChar = lowercaseChars.charAt(
//         Math.floor(Math.random() * lowercaseChars.length)
//       );
//       password += lowercaseChar;
//     }
//     if (document.getElementById("uppercaseCheckbox").checked) {
//       const uppercaseChar = uppercaseChars.charAt(
//         Math.floor(Math.random() * uppercaseChars.length)
//       );
//       password += uppercaseChar;
//     }
//     if (document.getElementById("numbersCheckbox").checked) {
//       const numberChar = numbers.charAt(
//         Math.floor(Math.random() * numbers.length)
//       );
//       password += numberChar;
//     }
//     if (document.getElementById("specialCharsCheckbox").checked) {
//       const specialChar = specialChars.charAt(
//         Math.floor(Math.random() * specialChars.length)
//       );
//       password += specialChar;
//     }

//     // Generate remaining characters
//     while (password.length < passwordLength) {
//       const randomChar = allChars.charAt(
//         Math.floor(Math.random() * allChars.length)
//       );
//       password += randomChar;
//     }

//     // Shuffle the password characters
//     password = password
//       .split("")
//       .sort(function () {
//         return 0.5 - Math.random();
//       })
//       .join("");

//     return password;
//   }
//   //

//   document
//     .getElementById("generateButton")
//     .addEventListener("click", function () {
//       const passwordInput = document.getElementById("password");
//       const generatedPassword = generatePassword();
//       passwordInput.value = generatedPassword;
//     });
    