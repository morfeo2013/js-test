import { cleanConsole, createAll } from "./data";
const companies = createAll();

cleanConsole(7, companies);

let resPrimera
let empresa = JSON.parse(JSON.stringify(companies))

let part2 = []
let part3 = []
let empresa2 = []
let usuarioEnsayo = []
let totalUsuarios = []
let contador = 0
let contTotal = 0



function NuevaCompañia(empresaCopia) {


    return {
        name: empresaCopia.name,
        users: empresaCopia.users,
        isOpen: empresaCopia.isOpen,
        usersLength: empresaCopia.users.length,
        id: empresaCopia.id,

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
            part2 = NuevaCompañia(empresa[indexp2])
            empresa2[cont] = part2
            cont = cont + 1
        }


    }


}





// Parte 3: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PATCH/PUT (como con una llamada HTTP) en todos los
// atributos de esta "company" excepto en el atributo "users".

llamarCompañia(0)
function llamarCompañia(id3) {

    for (let indexp3 = 0; indexp3 < empresa.length; indexp3++) {


        if (empresa.id === id3)
            part3 = NuevaCompañia(empresa[indexp2])


    }





}






console.log("---- SOLUTION EXAMPLE 7 part 1 --- ", resPrimera);

console.log("---- SOLUTION EXAMPLE 7 part 2 --- ", empresa2);

console.log("---- SOLUTION EXAMPLE 7 part 3 --- ", part3);

console.log("---- SOLUTION EXAMPLE 7 part 4 --- ", companies);

console.log("---- SOLUTION EXAMPLE 7 part 5 --- ", companies);

console.log("---- SOLUTION EXAMPLE 7 part 6 --- ", companies);

console.log("---- SOLUTION EXAMPLE 7 part 7 --- ", companies);

console.log("---- SOLUTION EXAMPLE 7 part 8 --- ", companies);

console.log("---- SOLUTION EXAMPLE 7 part 9 --- ", companies);
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL






// Parte 4: Crear una función tomando como parámetro un "id" de "company" y un
// nuevo "user" cuyo el apelido es "Delgado", el nombre "Juan", de 35 años y
// dueño de un carro. El nuevo "user" debe agregarse a la lista de "users" de este
// "company" y tener un "id" generado automáticamente. La función también debe modificar
// el atributo "usersLength" de "company".

// Parte 5: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PUT (como con una llamada HTTP) en esta "company" excepto
// en el atributo "users".

// Parte 6: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user". La función debe quitar este "user" de la lista de "users"
// de "company" y cambiar el atributo "usersLength" de "company".

// Parte 7: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PATCH (como con una llamada HTTP) en este
// "user".

// Parte 8: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PUT (como con una llamada HTTP) en este
// "user".

// Parte 9: Crear una función tomando como parámetro dos "id" de "company" y
// un "id" de "user". La función debe permitir que el user sea transferido de la
// primera "company" a la segunda "company". El atributo "usersLength" de cada
// "company" debe actualizarse.

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


