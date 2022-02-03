import { createAll, cleanConsole} from "./data";

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
/* 
const dato = [];

for (var i = 0; i < companies.length; i++) {
   dato.push(companies[i]);
 } */
 
 /* const dato = dato5.splice() */
/*  const dato = Object.assign({},dato5) */


/* function deepClone(object) {
    var clone = {};
    for (var key in object) {
    var value = object[key];
    if (typeof(value) != 'object' ) {
    clone[key]= value;
    }else{
    clone[key] = deepClone(value);
    }
    }
    return clone
    }

const dato = deepClone(companies) */



 
const tab = [];
const empresa =JSON.parse(JSON.stringify(companies))

//Ordenar empresas de mayor cantidad de usuarios a menor
empresa.sort( (a, b)=>{
  return (b.usersLength - a.usersLength)
})


//Primera letra en mayuscula
function capitalizarPrimeraLetra(str) {
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
    usuario.firstName = capitalizarPrimeraLetra(usuario.firstName) ;

    usuario.lastName == undefined ?
    usuario.lastName = '' :
    usuario.lastName = capitalizarPrimeraLetra(usuario.lastName);


   


  });
  tab.push({
    fredy: "element.name"
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


 



/* empresa.sort(function(a, b){
  
  return (b.users.firstName - a.users.firstName)

}); */
  console.log("----SOLUTION EXAMPLE 12 --- ",empresa);

