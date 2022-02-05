import { cleanConsole, createAll } from "./data";


const companies = createAll();

cleanConsole(5, companies);


// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Use la función creada en el ejemplo 4 para crear una nueva función tomando
// como parámetro la variable "companies" y devuelve un nuevo objeto con los
// siguientes atributos:
//     'size' => total de "users"
//     'average' => edad promedio de "users"
//     'hasCar' => total de "users" propietarios de un carro
//     'averageWithCar' => edad promedio de los "users" con un carro

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Use the function created in example 4 to create a
// new function taking as parameter the "companies" variable and returning
// a new object with the following attributes:
//     'size' => number of "users"
//     'average' => average age of "users"
//     'hasCar' => number of "users" owning a car
//     'averageWithCar' => average age of users with a car.

let empresa = JSON.parse(JSON.stringify(companies))
let usuarioEnsayo = []
let totalUsuarios=[]
let contador = 0
let contTotal=0
let sumaTotalEdad=0
let average=0
let hasCar =0
let totalSumaEC=0
let averageWithCar=0
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
        sumaTotalEdad=sumaTotalEdad+ empresa[index].users[index2].age
      if ( empresa[index].users[index2].car==true){
        hasCar=hasCar+1
        totalSumaEC=totalSumaEC+empresa[index].users[index2].age
      }

    }
        contador = 0

    
    usuarioEnsayo = []
  
   
  }
  totalUsuarios.sort((a, b) => {
    return (b.age - a.age)
  })

/* total usuarios */
  let size =totalUsuarios.length

  /* sacar edad total promedo usuarios */
  average=sumaTotalEdad/size


  /* sacar promedio edad usuarios carro */
  averageWithCar=  totalSumaEC/hasCar

  /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//     'size' => total de "users"
//     'average' => edad promedio de "users"
//     'hasCar' => total de "users" propietarios de un carro
//     'averageWithCar' => edad promedio de los "users" con un carro

  



 
  console.log("---- SOLUTION EXAMPLE 5 --- ");
  console.log("---- TOTAL USUARIOS --- ",size ,"Almas de Dios");
  console.log("---- EDAD PROMEDIO USUARIOS --- ",average.toFixed(0),"Años");
  console.log("---- USUARIOS CON CARRO --- ",hasCar,"Usuarios");
  console.log("----PROMEDIO EDAD  USUARIOS CON CARRO --- ",averageWithCar.toFixed(0),"Años");

  
