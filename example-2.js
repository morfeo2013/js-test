import { cleanConsole, createAll } from "./data";
const companies = createAll();

cleanConsole(2, companies);



// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// *Crear una función tomando como parámetro la variable "companies"
// y el booleano "hasCar".
// *Para cada "company" debe conservar solo
// "users" cuyo valor de atributo "car" es igual al parámetro del
// función "hasCar" y el atributo "usersLength" deben indicar el total de
// "users" correspondientes al parámetro "hasCar".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the variable "companies" and the
// boolean "hasCar". For each "company" you must keep only the
// "users" whose attribute value "car" is equal to the parameter of the
// "hasCar" function and the "usersLength" attribute must indicate the number of
// "users" corresponding to the "hasCar" parameter

let empresa =JSON.parse(JSON.stringify(companies))
let empresaEnsayo=[]

function NuevaCompañia(empresaCopia) {
    
    return {
      name:empresaCopia.name,
      users:empresaCopia.users,
      isOpen: empresaCopia.isOpen,
      usersLength: empresaCopia.usersLength,
      id: empresaCopia. id,
      hasCar:!!crearBooleano(0, 2),
    };
  }

  function crearBooleano(min, max) {
    return Math.floor(min + Math.random() * (max - min));
  }




let booleanoEnsayo = []
let usersBase = []
let contador = 0
function NuevaCompañia(empresaCopia, bool, usuarios) {



  return {
    name: empresaCopia.name,
    users: usuarios,
    isOpen: empresaCopia.isOpen,
    usersLength: usuarios.length,
    id: empresaCopia.id,
    hasCar: bool,
  };



}

function createUser(usuarioFiltro) {


  return {
    firstName: usuarioFiltro.firstName,
    lastName: usuarioFiltro.lastName,
    age: usuarioFiltro.age,
    car: usuarioFiltro.car,
    id: usuarioFiltro.id,
  }


}

  for (let index = 0; index < empresa.length; index++) {

function crearBooleano(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

      empresaEnsayo= NuevaCompañia(empresa[index])
      empresa[index]=empresaEnsayo
  }
 


  





  for (let index2 = 0; index2 < empresa[index].usersLength; index2++) {

    if (bool == empresa[index].users[index2].car) {
      booleanoEnsayo[contador] = createUser(empresa[index].users[index2])
      contador = contador + 1
    }
  }
      contador = 0

  empresaEnsayo = NuevaCompañia(empresa[index], bool, booleanoEnsayo)
  booleanoEnsayo = []
  empresa[index] = empresaEnsayo

}




console.log("---- SOLUTION EXAMPLE 2 --- ", empresa);
