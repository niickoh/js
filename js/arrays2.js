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
meses.forEach(function(mes) {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

//Include

let resultado = meses.includes('Marzo');


// Some Ideal para arreglo de objetos devuelve un boolean
resultado = carrito.some(function(producto) {
    return producto.nombre == 'Celular PRO';
});


// Reduce realiza una suma de elementos del objeto array

resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0);



// Filter

resultado = carrito.filter(function(producto) {
    return producto.precio >= 30000
})
resultado = carrito.filter(function(producto) {
    return producto.nombre != 'Celular'
})

console.table(resultado);