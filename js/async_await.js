

// Async / await

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargado clientes... espere...')


        setTimeout(() => {
            resolve('Los clientes fueron descargados')
        }, 5000);

    });
}
function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargado pedidos... espere...')


        setTimeout(() => {
            resolve('Los pedidos fueron descargados')
        }, 3000);

    });
}

 async function app() {
     try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes)
        // console.log(pedidos)

        // el await se ejecuta al mismo tiempo
        // con esto se gana mayor permformance de funcionamiento
        // en nuestra pagina y/o código
        // haciendo nuestra app más rápida
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
     } catch (error) {
         console.log(error);
     }
 }

 app();


// setTimeout(() => {
//     console.log('set timeout')
// }, 5000); // milisegundos