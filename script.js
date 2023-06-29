// Assignment Code
let charTypesText = ["Elige las caracteristicas de la contraseña"
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



// Add event listener to generate button
generateBtn.addEventListener("click", generarContra);

//empieza la funciòn generar contraseña
function generarContra() {
  //revisa si si se queda igual el tamaño de la contraseña desde la ronda pasada
  console.log("1" + contraseña.length);
  // reinicia el tamaño de la contraseña
  contraseña.length = 0;

  console.log("2" + contraseña.length);

  //aqui empieza la parte de la funcion que válida los criterios
  let lenghtOfPassword = parseInt(prompt("Choose the lenght of the password between 8 and 128 characters"));




  while (isNaN(lenghtOfPassword)) {
    lenghtOfPassword = prompt(" This is a Nan You have to choose a valid number between 8 and 128");
  }
  console.log(lenghtOfPassword);

  while (lenghtOfPassword < 8 || lenghtOfPassword > 128) {
    lenghtOfPassword = prompt("You have to choose a valid number between 8 and 128");
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

  while (contraseña.length < lenghtOfPassword) {
    console.log("entro al while")
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
    console.log(contraseña);
  }

  console.log(contraseña.length);

  while (contraseña.length > lenghtOfPassword) {
    contraseña.pop();

  }


  // A function to sort an array in place randomly using the Fisher-Yates shuffle algorithm
  function randomSortInPlace(array) {
    // Loop from the end of the array to the beginning
    for (let i = contraseña.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i
      let j = Math.floor(Math.random() * (i + 1));
      // Swap the elements at i and j
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }



  contraseñaTemp = randomSortInPlace(contraseña).join("");
  console.log(typeof contraseñaTemp);

  function writePassword(password) {
    var passwordText = document.getElementById("password");

    passwordText.innerHTML = password;

  }



  // alert("Su contraseña es:  " + contraseñaTemp);

  writePassword(contraseñaTemp);

  console.log(contraseñaTemp);

  //termina la funcion que genera la contraseña
  //para comparar con el log del inicio de la funcion
  console.log("3" + contraseña.length);

}





/*
function writePassword() {
  var passwordText = document.getElementById("#password");

  passwordText.innerHTML = contraseñaTemp;

}

writePassword();
*/












































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