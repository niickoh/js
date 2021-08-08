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

// SOLAMENTE SE PUEDEN USAR EN ARRAYS



/**
 * UTILIZAR CUANDO SOLAMENTE QUIERO LISTAR O MOSTRAR DATOS POR CONSOLA
 */
// ForEach

carrito.forEach(producto => console.log(producto.nombre));


/**
 * SI SE CREA UN NUEVO ARREGLO ES RECOMENDABLE UTILIZAR map
 */
// map

const arreglo2 = carrito.map(producto => producto.nombre);

console.log(arreglo2);