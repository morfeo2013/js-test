import { createAll, cleanConsole } from "./data";

const companies = createAll();

cleanConsole(1, companies);



// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

/* let fredy1 = companies.map((a) => ({...a})); */
/* const dato = Object.assign(companies, ...companies) */






const empresa = JSON.parse(JSON.stringify(companies))

//Ordenar empresas de mayor cantidad de usuarios a menor
empresa.sort((a, b) => {
  return (b.usersLength - a.usersLength)
})


//Primera letra en mayuscula
export function capitalizarPrimeraLetra(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//Solucionar
empresa.forEach(element => {


  element.name == undefined ?
    element.name = "" :
    element.name = capitalizarPrimeraLetra(element.name);


  element.users.forEach(usuario => {

    usuario.firstName == undefined ?
      usuario.firstName = '' :
      usuario.firstName = capitalizarPrimeraLetra(usuario.firstName);

    usuario.lastName == undefined ?
      usuario.lastName = '' :
      usuario.lastName = capitalizarPrimeraLetra(usuario.lastName);





  });



  //Ordenar users por firstName
  element.users.sort(function (a, b) {

    if (a.firstName > b.firstName) {
      return 1;
    }
    if (a.firstName < b.firstName) {
      return -1;
    }

    return 0;
  });

});





console.log("----SOLUTION EXAMPLE 12 --- ", empresa);

