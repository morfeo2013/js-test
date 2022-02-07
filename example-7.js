import { cleanConsole, createAll } from "./data";
const companies = createAll();

cleanConsole(7, companies);

let resPrimera
let empresa = JSON.parse(JSON.stringify(companies))

let part2 = []
let part3 = []
let part4 = []
let part44 = []
let part5 = []
let part6 = []
let part66 = []
let part444 = []
let empresa2 = []
let usuarioEnsayo4 = []
let usuarioEnsayo6 = []
let part9 = []
let part10 = []
let part99 = []
let usuarioEnsayo9 = []
let usuarioEnsayo10 = []
let userCambio=[]




function agregarUsuario(id)  {

    return {
            firstName:"Juan",
            lastName: "Delgado",
            age:35,
            car: true,
            id: id,
    }

}

function NuevaCompañia4(empresaCopia,users4) {
   
        return {
            name: empresaCopia.name,
            users: users4,
            isOpen: empresaCopia.isOpen,
            usersLength: users4.length,
            id: empresaCopia.id,
        }
    


}



function NuevaCompañia(empresaCopia, opcion) {

    if (opcion === 1) {
        return {
            name: empresaCopia.name,
            isOpen: empresaCopia.isOpen,
            usersLength: empresaCopia.users.length,
            id: empresaCopia.id,

        };

    }
    if (opcion === 0) {
        return {
            name: empresaCopia.name,
            users: empresaCopia.users,
            isOpen: empresaCopia.isOpen,
            usersLength: empresaCopia.users.length,
            id: empresaCopia.id,
        }
    }
   




}

function createUser(usuarioFiltro, opcion) {

    if (opcion === 0) {
        return {
            firstName: usuarioFiltro.firstName,
            lastName: usuarioFiltro.lastName,
            age: usuarioFiltro.age,
            car: usuarioFiltro.car,
            id: usuarioFiltro.id,
        }
       
    }

}








// Parte 1: Crear una función tomando como parámetro un "id" de "company" y
// devolviendo el nombre de esta "company".
ObtenerCompañia(2)

function ObtenerCompañia(id) {

    empresa.forEach(element => {

        if (element.id == id) {
            resPrimera = element.name

        }

    })

}

// Parte 2: Crear una función tomando como parámetro un "id" de "company" y
// quitando la "company" de la lista.
quitarCompañia(2)
function quitarCompañia(id2) {
    let cont = 0
    for (let indexp2 = 0; indexp2 < empresa.length; indexp2++) {


        if (empresa[indexp2].id !== id2) {
            part2 = NuevaCompañia(empresa[indexp2], 1)
            empresa2[cont] = part2
            cont = cont + 1
        }


    }


}





// Parte 3: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PATCH/PUT (como con una llamada HTTP) en todos los
// atributos de esta "company" excepto en el atributo "users".

llamarCompañia(2)
function llamarCompañia(id3) {

    for (let indexp3 = 0; indexp3 < empresa.length; indexp3++) {

        if (empresa[indexp3].id === id3)
            part3 = NuevaCompañia(empresa[indexp3], 1)

    }

}


// Parte 4: Crear una función tomando como parámetro un "id" de "company" y un
// nuevo "user" cuyo el apellido es "Delgado", el nombre "Juan", de 35 años y
// dueño de un carro. El nuevo "user" debe agregarse a la lista de "users" de este
// "company" y tener un "id" generado automáticamente. La función también debe modificar
// el atributo "usersLength" de "company".

crearUsuarioCompañia(0)




function crearUsuarioCompañia(id4) {

    for (let index4 = 0; index4 < empresa.length; index4++) {
       



        for (let index44 = 0; index44 < empresa[index4].usersLength; index44++) {


            

            if ( empresa[index4].id===id4 && index44==empresa[index4].usersLength-1) {
                usuarioEnsayo4[empresa[index4].usersLength]= agregarUsuario(empresa[index4].usersLength)
                
             }
    
             usuarioEnsayo4[index44] = createUser(empresa[index4].users[index44],id4)

        }
       
        
        part4 = NuevaCompañia4(empresa[index4], usuarioEnsayo4)
      
        usuarioEnsayo4=[]
        part44[index4] = part4
      
       

    }

}



// Parte 5: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PUT (como con una llamada HTTP) en esta "company" excepto
// en el atributo "users".

putCompañia(2)
function putCompañia(id5) {

    for (let indexp5 = 0; indexp5 < empresa.length; indexp5++) {

        if (empresa[indexp5].id === id5)
            part5 = NuevaCompañia(empresa[indexp5], 1)

    }

}



// Parte 6: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user". La función debe quitar este "user" de la lista de "users"
// de "company" y cambiar el atributo "usersLength" de "company".
let a=0 //id compañia
let b=1 //id Users
eliminarUsuarioCompañia(a,b)




function eliminarUsuarioCompañia(id6,id66) {

    for (let index6 = 0; index6 < empresa.length; index6++) {
        let cont = 0



        for (let index66 = 0; index66 < empresa[index6].usersLength; index66++) {


            

            if ( empresa[id6].users[id66] !== empresa[id6].users[index66]) {
                usuarioEnsayo6[cont] = createUser(empresa[index6].users[index66],id6)
                cont = cont + 1
             }
    
             

        }
       
        
        part6 = NuevaCompañia4(empresa[index6], usuarioEnsayo6)
      
        usuarioEnsayo6=[]
        part66[index6] = part6
      
       

    }

}


// Parte 7: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PATCH (como con una llamada HTTP) en este
// "user".
let ay=0 //id compañia
let by=1 //id Users
eliminarUsuarioCompañiay(ay,by)




function eliminarUsuarioCompañiay(id6,id66) {

    for (let index6 = 0; index6 < empresa.length; index6++) {
        let cont = 0



        for (let index66 = 0; index66 < empresa[index6].usersLength; index66++) {


            

            if ( empresa[id6].users[id66] !== empresa[id6].users[index66]) {
                usuarioEnsayo6[cont] = createUser(empresa[index6].users[index66],id6)
                cont = cont + 1
             }
    
             

        }
       
        
        part6 = NuevaCompañia4(empresa[index6], usuarioEnsayo6)
      
        usuarioEnsayo6=[]
        part66[index6] = part6
      
       

    }

}

//????????????????????????????????????????????????????????????????????????????

// Parte 8: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PUT (como con una llamada HTTP) en este
// "user".
let az=0 //id compañia
let bz=1 //id Users
eliminarUsuarioCompañiaz(az,bz)




function eliminarUsuarioCompañiaz(id6,id66) {

    for (let index6 = 0; index6 < empresa.length; index6++) {
        let cont = 0



        for (let index66 = 0; index66 < empresa[index6].usersLength; index66++) {


            

            if ( empresa[id6].users[id66] !== empresa[id6].users[index66]) {
                usuarioEnsayo6[cont] = createUser(empresa[index6].users[index66],id6)
                cont = cont + 1
             }
    
             

        }
       
        
        part6 = NuevaCompañia4(empresa[index6], usuarioEnsayo6)
      
        usuarioEnsayo6=[]
        part66[index6] = part6
      
       

    }

}

//????????????????????????????????????????????????????????????????????????????


// Parte 9: Crear una función tomando como parámetro dos "id" de "company" y
// un "id" de "user". La función debe permitir que el user sea transferido de la
// primera "company" a la segunda "company". El atributo "usersLength" de cada
// "company" debe actualizarse.


let ax=0 //id compañia
let bx=0 //id Users
let cx=1 //id compañia2
eliminarAgregarUsuarioCompañia9(ax,bx,cx)




function eliminarAgregarUsuarioCompañia9(id9,id99,idcom99) {

    for (let index9 = 0; index9 < empresa.length; index9++) {
        let cont = 0



        for (let index99 = 0; index99 < empresa[index9].usersLength; index99++) {


            

            if ( empresa[id9].users[id99] !== empresa[index9].users[index99]) {
                usuarioEnsayo9[cont] = createUser(empresa[index9].users[index99],0)
                cont = cont + 1
             }else{
                
                 userCambio=empresa[index9].users[index99]
             }
  
            

        }
       
        
        part9 = NuevaCompañia4(empresa[index9], usuarioEnsayo9)
      
        usuarioEnsayo9=[]
        part99[index9] = part9
      
       

    }

    for (let index10 = 0; index10 <  part99.length; index10++) {
       



        for (let index444 = 0; index444 <  part99[index10].usersLength; index444++) {


            

            
    
             usuarioEnsayo10[index444] = createUser( part99[index10].users[index444],0)

             if (  part99[index10].id===idcom99&& index444== part99[index10].usersLength-1) {
                usuarioEnsayo10[ part99[idcom99].usersLength]= userCambio
                
             }
        }
       
        
        part10 = NuevaCompañia4( part99[index10], usuarioEnsayo10)
      
        usuarioEnsayo10=[]

        part444[index10] = part10
      
       

    }

       
       
}
/* for (let index66 = 0; index66 < empresa[index6].usersLength; index66++) {
    if ( empresa[id6].users[id66] !== empresa[id6].users[index66]) {
        usuarioEnsayo6[cont] = createUser(empresa[index6].users[index66],id6)
        cont = cont + 1
     }

}
part6 = NuevaCompañia4(empresa[index6], usuarioEnsayo6)
usuarioEnsayo6=[]
part66[index6] = part6 */


console.log("---- SOLUTION EXAMPLE 7 part 1 --- ", resPrimera);

console.log("---- SOLUTION EXAMPLE 7 part 2 --- ", empresa2);

console.log("---- SOLUTION EXAMPLE 7 part 3 --- ", part3);

console.log("---- SOLUTION EXAMPLE 7 part 4 --- ", part44);

console.log("---- SOLUTION EXAMPLE 7 part 5 --- ", part5);

console.log("---- SOLUTION EXAMPLE 7 part 6 --- ", part66);

console.log("---- SOLUTION EXAMPLE 7 part 7 --- ", part66);

console.log("---- SOLUTION EXAMPLE 7 part 8 --- ", part66);

console.log("---- SOLUTION EXAMPLE 7 part 9 --- ", part444);
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL
















// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Part 1: Create a function taking as parameter an "id" of "company" and
// returning the name of this "company".

// Part 2: Create a function taking as parameter an "id" of "company" and
// removing the "company" from the list.

// Part 3: Create a function taking as a parameter an "id" of "company" and
// allowing to make a PATCH (as with an HTTP call) on all
// attributes of this "company" except on the "users" attribute.

// Part 4: Create a function taking as parameter an "id" of "company" and a
// new "user" whose name is "Delgado", the first name "Juan", aged 35 and
// a car. The new "user" must be added to the "users" list of this
// "company" and have an automatically generated "id". The function must also modify
// the "usersLength" attribute of "company".

// Part 5: Create a function taking as parameter an "id" of "company" and
// allowing to make a PUT (as with an HTTP call) on this "company" except
// on the "users" attribute.

// Part 6: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user". The function must remove this "user" from the list of "users"
// from "company" and change the attribute "usersLength" from "company".

// Part 7: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PATCH (as with an HTTP call) on this
// "user".

// Part 8: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PUT (as with an HTTP call) on this
// "user".

// Part 9: Create a function taking as parameter two "id" of "company" and
// an "id" of "user". The function must allow the user to be transferred as a parameter
// from the 1st "company" to the 2nd "company". The "usersLength" attribute of each
// "company" must be updated


