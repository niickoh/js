// FUNCIONES CON PARÁMETROS

function sumar(numero1=0,numero2) { // parámetros, se le puede agregar un valor x defecto
    console.log(numero1+numero2);
}
sumar(10,10); // argumentos de la función
/**Se puede reutilizar con diferentes argumentos */
sumar(5,45);


const sumar2 = function(n1,n2) {
    console.log(n1+n2);
}
sumar2(15,36);


/*Función que devuelve un valor*/

/*function restar(n1,n2) {
    return n1 - n2;
};

/**para llamar al valor es necesario agregar una variable y 
 * pasar el valor que entrega la función, de esa manera el valor
 * de la función se puede utilizar en cualquier parte
 */

/*const resultado = restar(4,3);
console.log(resultado);*/


let total = 0;

function agregarCarrito(precio) {
    return total += precio;
};

function calcularIva(total) {
    return 1.19 * total;
};

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(300);

console.log(total);

const totalPago = calcularIva(total);

console.log(`El total a pagar con iva es de: $${totalPago}`);