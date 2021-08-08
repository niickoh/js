

// POO

/**Object Literal */

const producto = {
    nombre : 'Tablet',
    precio : 30000
}

// Object Constructor


function Cliente(nombre,apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} ${this.apellido}`;
}
function Producto(nombre,precio,disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;

}
// Crear funciones que se utilizan en un objeto específico
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
}

const producto2 = new Producto('Monitor Curvo de 49"', 350000, true);
const producto3 = new Producto('Notebook', 800000, false);
const cliente =  new Cliente('Nicolas', 'Catalan');

// console.log(producto2);
// console.log(producto3);
// console.log(producto4);
// console.log(producto5);

console.log(cliente.formatearCliente());
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());


