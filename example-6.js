import { cleanConsole, createAll } from "./data";

const companies = createAll();

cleanConsole(6, companies);


// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un nuevo objeto cuyos atributos son la concatenación del apelido, nombre y
// edad de cada "user". Cada atributo debe tener el valor de boolean "car".
// Ver ejemplo a continuación.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a new object whose attributes are the concatenation of the name, first name and
// the age of each user. Each attribute must have the value of boolean "car".
// See example below

// const example = {
//   johnDoe32: true,
//   BernardoMinet45: false,
//   alinaChef23: true,
// };

// console.log(example);


let empresa = JSON.parse(JSON.stringify(companies))
let empresaEnsayo = []
let usuarioEnsayo = []
let contador = 0




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






function NuevaCompañia(empresaCopia,  usuarios) {



  return {
    name: empresaCopia.name,
    users: usuarios,
    isOpen: empresaCopia.isOpen,
    usersLength: usuarios.length,
    id: empresaCopia.id,
   
  };



}

function createUser(usuarioFiltro) {
  
  return {
    firstName: usuarioFiltro.firstName,
    lastName: usuarioFiltro.lastName,
   
    car: usuarioFiltro.car,
   
  }


}


 




for (let index = 0; index < empresa.length; index++) {


  for (let index2 = 0; index2 < empresa[index].usersLength; index2++) {


      usuarioEnsayo[contador] = createUser(empresa[index].users[index2])
      contador = contador + 1
    
  }
      contador = 0

  empresaEnsayo = NuevaCompañia(empresa[index], usuarioEnsayo)
  usuarioEnsayo = []
  empresa[index] = empresaEnsayo

}




console.log("---- SOLUTION EXAMPLE 6 --- ", empresa);