

// ARROW FUNCTIONS 
/**funcionan con esta sintaxis de función o bien 
 * con la funciones de array 
 * 
 * se colocan los parámetros con paréntesis cuando son más de 1
 * sino, no es necesario
 * */

const sumar2 = (n1,n2) => console.log(n1+n2);
sumar2(5,10);


const aprendiendo = (tecnologia) => {
    console.log(`Aprendiendo ${tecnologia}`);
}

aprendiendo('Javascript');



// METODOS ARRAYS

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];


const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 25000},
    { nombre: 'Television 50 Pulgadas', precio: 30000},
    { nombre: 'Tablet', precio: 20000},
    { nombre: 'Audifonos', precio: 40000},
    { nombre: 'Teclado', precio: 15000},
    { nombre: 'Celular', precio: 90000},
    { nombre: 'Bocinas', precio: 35000},
    { nombre: 'Laptop', precio: 98000}
]


// forEach
/**Iterando datos con forEach recorre el arreglo y se puede validar */
meses.forEach(mes => {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});


// Some Ideal para arreglo de objetos devuelve un boolean
resultado = carrito.some(producto => producto.nombre == 'Celular PRO');


// Reduce realiza una suma de elementos del objeto array

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);



// Filter

resultado = carrito.filter(producto => producto.precio >= 30000);
resultado = carrito.filter(producto => producto.nombre != 'Celular');

console.table(resultado);