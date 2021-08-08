

// For loop

/** Va a ejecutar el código cuando la condición sea verdadera, 
 * cuando es falso detiene la ejecución
*/

// for( let i = 0; i < 10; i++) {
//     console.log(i);
// }

// número pares de una lista de números
// for(indice o variable, condición de parada, aumento de variable)
// for( let i = 1; i < 10; i++) {
//     if( i % 2 == 0){
//         console.log(`El número ${i} es PAR`);
//     }else{
//         console.log(`El número ${i} es IMPAR`);
//     }
// }

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 25000},
    { nombre: 'Television 50 Pulgadas', precio: 30000},
    { nombre: 'Tablet', precio: 20000},
    { nombre: 'Audifonos', precio: 40000},
    { nombre: 'Teclado', precio: 15000},
    { nombre: 'Celular', precio: 90000},
    { nombre: 'Bocinas', precio: 35000},
    { nombre: 'Laptop', precio: 98000}
];


for(let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}


// While Loop

/**
 * Se ejecuta mientras una condición sea evaluada como true
 */

// let i = 1; //Indice

// while(i < carrito.length) { // Condición

//     console.log(carrito[i].nombre)

//     i++ // Incremento
// }
/**
 * LA DIFERENCIA ENTRE EL WHILE Y DO WHILE
 * ES QUE
 * 
 * WHILE: PRIMERO EVALUA LA CONDICIÓN Y LUEGO EJECUTA EL CÓDIGO
 * 
 * DO WHILE: EJECUTA PRIMERO AL MENOS UNA VEZ EL CÓDIGO Y LUEGO EVALUA
 */

// Do While Loop


let i = 0;

do {
    console.log(i);

    i++;
}while(i < 10);