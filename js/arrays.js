// ARREGLOS O ARRAYS

const numeros = [10,20,30,40,50];



/*const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

console.table(meses);*/







/*const arreglo = ['Hola', 10, true, [1,2,3]];

console.table(arreglo);*/

//ACCEDER A LOS VALORES DE UN ARREGLO

/*console.log(numeros[4]);
console.log(numeros[2]);

// CONOCER LA EXTENSION DE UN ARREGLO

console.log(meses.length);

/**Acceder a los valores de un arreglo con ayuda de una iteración
 * que recorre y muestra los valores del arreglo
 */
/*numeros.forEach( function(numero) {
    console.log(numero);
});*/

/**Agregar datos al final del arreglo */
// numeros[5] = 60;
numeros.push(60);
/**Agregar elementos al inicio del arreglo */
numeros.unshift(-10,-20,-30);

/**Eliminar un elemento del arreglo */
//meses.pop(); //Eliminar el ultimo elemento del arreglo

//meses.shift(); //Elimina el primer elemento

// meses.splice(2, 1); // Elimina el elemento del arreglo que le indiquemos
                    // el primer valor es la posición del elemento en el array
                    // y el segundo valor es la cantidad de elementos que queremos
                    // eliminar desde la posición que le asignamos

// console.table(meses);
// console.table(numeros);
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

// agregar un dato al final o al inicio con Rest Operator o Spread Operator

const nuevoArreglo = [ ...meses, 'Junio']; // el valor lo agregar al final del array
// const nuevoArreglo = [ 'Junio' , ...meses]; // el valor lo agregar al inicio del array

console.table(nuevoArreglo);

