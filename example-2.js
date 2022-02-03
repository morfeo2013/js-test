import { cleanConsole, createAll } from "./data";
const companies = createAll();

cleanConsole(2, companies);

console.log("---- SOLUTION EXAMPLE 2 --- ", companies);

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y el
// booleano "hasCar". Para cada "company" debe conservar solo
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
const empresa =JSON.parse(JSON.stringify(companies))




function createUser(empresa) {
    const tab = [];
  
    for (let i = 0; i < end; i++) {
      tab.push({
        firstName: getValue(firstName),
        lastName: getValue(lastName),
        age: createRandomNumber(10, 120),
        car: !!createRandomNumber(0, 2),
        id: tab.length,
      });
    }
    return tab;
  }