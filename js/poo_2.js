

// CLASES

class Producto {
    constructor(nombre,precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formeatearProducto() {
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`
    }

    // obtenerPrecio() {        
    //     return `El precio del producto ${this.nombre} es $${this.precio}`
    // }
}

const producto = new Producto();

const producto2 = new Producto('Monitor Curvo de 49"', 350000);
const producto3 = new Producto('Notebook', 800000);

// HERENCIA

class Libro extends Producto {
    constructor(nombre,precio,isbn) {
        super(nombre, precio); // TOMA LOS PARÁMETROS DEL CONSTRUCTOR PADRE LA CLASE PRODUCTO
        this.isbn = isbn;
    }
    formeatearProducto() {
        return `${super.formeatearProducto()}y su isbn es: ${this.isbn}`
    }
}

const libro = new Libro('JavaScript la Revolución', 15000, '126316725')


console.log(libro.formeatearProducto())
console.log(producto2.formeatearProducto());


