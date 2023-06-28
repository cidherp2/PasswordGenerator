
// Assignment Code
var charTypesBool = [];
var generateBtn = document.querySelector("#generate");
var contraseña = [] ;
var mayusculas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 

var numeros ;
var especiales;
var minusculas;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generarContra() {


  let lenghtOfPassword = prompt("Choose the lenght of the password between 8 and 128 characters");
  /** 
  while (isNaN(lenghtOfPassword )){
    lenghtOfPassword= prompt(" This is a Nan You have to choose a valid number between 8 and 128");
  }

  while (lenghtOfPassword !=> 8 &&)

  */



if (isNaN(lenghtOfPassword)){
  
  while (isNaN(lenghtOfPassword)) {
  lenghtOfPassword= prompt(" This is a Nan You have to choose a valid number between 8 and 128");
  }
console.log(lenghtOfPassword);
/** 
  parseInt(lenghtOfPassword);
  console.log(lenghtOfPassword);
  */
} else if(lenghtOfPassword < 8 || lenghtOfPassword>128){
  while (lenghtOfPassword < 8 || lenghtOfPassword>128){
  lenghtOfPassword= prompt("You have to choose a valid number between 8 and 128");
  }
}

console.log("el tamaño de la contraseña es " + lenghtOfPassword);


let charTypesText = ["Should it be numerical"
,"Should the password include special characters"
, "Should it include upper case letters"
, "should it include lower case letters",
"should it include numerical characaters"];

for (var i = 0; i < charTypesText.length; i++) {
  charTypesBool[i] = confirm(charTypesText[i]);
  console.log(charTypesBool);
}

console.log("los valores del arrey son" + charTypesBool);

if (charTypesBool[0] == true)
{
  console.log("esta entrando al if numerico");
for (var i = 0; i < lenghtOfPassword; i++){

contraseña[i] = Math.floor(Math.random()*9);

}

console.log(contraseña);
//Esto muestra el array como string con comas
console.log(String(contraseña));
//Esto muestra el array como string sin comas
console.log(contraseña.join(""));
alert("Su contraseña numérica es:  " + contraseña.join(""));

} 
else if (charTypesBool[2]==true){
  console.log("esta entrando al else if ");

  for (var i = 0; i < lenghtOfPassword; i++){

    contraseña[i] = mayusculas[Math.floor(Math.random()*mayusculas.length)];
    console.log(contraseña);
  
    }
    console.log(mayusculas);   

    console.log(contraseña);
//Esto muestra el array como string con comas
console.log(String(contraseña));
//Esto muestra el array como string sin comas
console.log(contraseña.join(""));
alert("Su contraseña es:  " + contraseña.join(""));

}



}
