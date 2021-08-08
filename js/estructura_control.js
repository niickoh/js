

/**IF */


// const puntaje = 1000;

// if(puntaje !== 1000) {    
//     console.log('No es igual');
// }else{
//     console.log(`Sí, el puntaje es ${puntaje}`);
// }


// const efectivo = 1000;
// const carrito = 800;

// if(efectivo > carrito){
//     console.log('El usuario puede pagar');
// }else{
//     console.log('Fondos Insuficientes');
// }


// const rol = 'EMPLEADO';

// if(rol == 'ADMINISTRADOR'){
//     console.log('Acceso a todo el sistema');
// }else if(rol == 'EDITOR'){
//     console.log('Eres editor, puedes entrar pero solo editar');
// }else{
//     console.log('No tienes acceso');
// }


/**SWITCH */

const metodoPago = 'efectivo';

switch(metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break
    case 'cheque':
        console.log('El usuario va a pagar con cheque, revisaremos los fondos primero');
        break
    case 'efectivo':
        console.log('Pagaste con efectivo');
        break
    
    default:
        console.log('Aún no has pagado');
        break
}