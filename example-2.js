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


  for (let index = 0; index < empresa.length; index++) {


      empresaEnsayo= NuevaCompañia(empresa[index])
      empresa[index]=empresaEnsayo
  }
 

  





  
  


console.log("---- SOLUTION EXAMPLE 2 --- ",  empresa);
