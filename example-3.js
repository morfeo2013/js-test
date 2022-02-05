import { cleanConsole, createAll } from "./data";
const companies = createAll();

cleanConsole(3, companies);



// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un booleano que valida que todos los nombres de las empresas y los atributos
// "firstName" y "lastName" de "users" están en mayúsculas.
// Debes probar la operación de esta función importando la función creada
// en el "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a boolean validating that all the names of the companies and the attributes "firstName"
// and "lastName" of "users" are capitalized. You must test the operation
// of this function by importing the function created for "example-1.js"


const empresa = JSON.parse(JSON.stringify(companies))

let booleano1 ="Todas son Mayuaculas"
let booleano2 ="Todas son Mayuaculas"
let booleano3 ="Todas son Mayuaculas"
let resp1=Boolean
let resp2=Boolean
let resp3=Boolean

//Primera letra en mayuscula
function cambiarPrimeraLetra(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//Verificar y comparar primera letra
function verificarLetraMayor(word) {
  return word.charAt(0) === word.charAt(0).toUpperCase()
}

//Solucionar
empresa.forEach(element => {


  element.name == undefined ?
    element.name = "" :
    element.name = cambiarPrimeraLetra(element.name);


  element.users.forEach(usuario => {

    usuario.firstName == undefined ?
      usuario.firstName = '' :
      usuario.firstName = cambiarPrimeraLetra(usuario.firstName);

    usuario.lastName == undefined ?
      usuario.lastName = '' :
      false;





  });




});




/* VALIDAR */

empresa.forEach(element2 => {

 resp1 = verificarLetraMayor(element2.name)
 

 resp1 == false ?
    booleano1 = "No son todas Mayusculas" :
   false


  element2.users.forEach(usuario2 => {
    resp2 = verificarLetraMayor(usuario2.firstName)
    resp2 == false ?
    booleano2 = "No son todas Mayusculas en el firtsName" :
   false


   resp3 = verificarLetraMayor(usuario2.lastName)
   resp3 == false ?
   booleano3 = "No son todas Mayusculas en el lastName" :
  false
   





  });




});





console.log("---- SOLUTION EXAMPLE 3 --- ", empresa);
console.log("---- SOLUTION VERIFICACION PRIMERA LETRA MAYUSCULA EMPRESAS  --- ", booleano1);
console.log("---- SOLUTION VERIFICACION PRIMERA LETRA MAYUSCULA FIRTSNAME  --- ", booleano2);
console.log("---- SOLUTION VERIFICACION PRIMERA LETRA MAYUSCULA LASTSNAME  --- ", booleano3);

