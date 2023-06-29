
// Assignment Code
let charTypesText = ["Should it be numerical"
  , "Should the password include special characters"
  , "Should it include upper case letters"
  , "should it include lower case letters",
  "should it include numerical characaters"];

var charTypesBool = [];
var generateBtn = document.querySelector("#generate");
var contraseña = [];
var contraseñaTemp = [];
var mayusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"
  , "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T"
  , "U", "V", "W", "X", "Y", "Z"];
var minusculas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
  "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var caracEspeciales = ["!", "@", "·", "#", "$", "%", "&", "/", "(", ")", "=", "?", "¿"];



// Write password to the #password input
function writePassword() {
  var passwordText = document.getElementById("#password");

  passwordText.innerHTML = contraseña;

}


// Add event listener to generate button
generateBtn.addEventListener("click", generarContra);

//empieza la funciòn generar contraseña
function generarContra() {

//aqui empieza la parte de la funcion que válida los criterios
  let lenghtOfPassword = prompt("Choose the lenght of the password between 8 and 128 characters");

  if (isNaN(lenghtOfPassword)) {

    while (isNaN(lenghtOfPassword)) {
      lenghtOfPassword = prompt(" This is a Nan You have to choose a valid number between 8 and 128");
    }
    console.log(lenghtOfPassword);

  } else if (lenghtOfPassword < 8 || lenghtOfPassword > 128) {
    while (lenghtOfPassword < 8 || lenghtOfPassword > 128) {
      lenghtOfPassword = prompt("You have to choose a valid number between 8 and 128");
    }
  }

  console.log("el tamaño de la contraseña es " + lenghtOfPassword);

  for (var i = 0; i < charTypesText.length;) {
    charTypesBool[i] = confirm(charTypesText[i]);
    i++;
    console.log(charTypesBool);
  }
  
//aquì acaba la parte de la funcioon que validad los criterios

  console.log("los valores del arrey son" + charTypesBool);



  


//empieza la parte de la funcion que genera la contraseña
  for (var i = 0; i < lenghtOfPassword ;) {
    while (contraseña.length != lenghtOfPassword) {
      console.log("entro al ciclo for")
      if (charTypesBool[1] == true) {
        contraseña.push(caracEspeciales[Math.floor(Math.random() * caracEspeciales.length)]);
        console.log("imprime 1")

      }

      if (charTypesBool[2] == true) {
        contraseña.push(mayusculas[Math.floor(Math.random() * mayusculas.length)]);
        console.log("imprime 2")
      }



      if (charTypesBool[3] == true) {
        contraseña.push(minusculas[Math.floor(Math.random() * minusculas.length)]);
        console.log("imprime 3")
      }

      if (charTypesBool[4] == true) {
        contraseña.push(numeros[Math.floor(Math.random() * numeros.length)]);
        console.log("imprime 4")
      }

    }


    console.log(contraseña);
    
    i++
  }

  contraseñaTemp = contraseña.join("");
  alert("Su contraseña es:  " + contraseñaTemp);
  console.log(contraseñaTemp);


contraseña.length = 0;
//termina la funcion que genera la contraseña
}













































//ESTE CODIGO VAS DESPUES DE LA LINEA 77
/*
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
*/