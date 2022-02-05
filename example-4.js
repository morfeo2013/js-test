import { cleanConsole, createAll } from "./data";

const companies = createAll();

cleanConsole(4, companies);



// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y agrupando
// todos los "users" de todas las "companies" en una sola tabla. Cada "user"
// debe tener un nuevo atributo "company" que tenga como valor el nombre de la
// dicha "company". Los "users" deben ordenarse de acuerdo con sus edad
// (de mayor a menor).

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the "companies" variable and grouping
// all "users" of all "companies" in a single table. Each "user"
// must have a new attribute "company" having for value the name of the "company"
// to which it belongs. The "users" must be sorted according to their
// age (from oldest to youngest)

let empresa = JSON.parse(JSON.stringify(companies))
let usuarioEnsayo = []
let totalUsuarios=[]
let contador = 0
let contTotal=0


for (let index = 0; index < empresa.length; index++) {

  
  
  
      
      function createUser(usuarioFiltro,name) {
      
      
        return {
          firstName: usuarioFiltro.firstName,
          lastName: usuarioFiltro.lastName,
          age: usuarioFiltro.age,
          car: usuarioFiltro.car,
          id: usuarioFiltro.id,
          compañia:name
        }
      
      
      }
  
  
    for (let index2 = 0; index2 < empresa[index].usersLength; index2++) {
  
  
        usuarioEnsayo[contador] = createUser(empresa[index].users[index2],empresa[index].name)
      totalUsuarios[contTotal]= createUser(empresa[index].users[index2],empresa[index].name)
        contador = contador + 1
        contTotal=contTotal+1

    }
        contador = 0

    
    usuarioEnsayo = []
  
   
  }
  totalUsuarios.sort((a, b) => {
    return (b.age - a.age)
  })

  
 
  console.log("---- SOLUTION EXAMPLE 4 --- ", totalUsuarios);
