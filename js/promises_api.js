const boton = document.querySelector('#boton');
boton.addEventListener('click', function() {
    Notification.requestPermission()
    .then(resultado => console.log(`El resultado es ${resultado}`))
})


/**NOTIFICACIÓN PERSONALIZADA */
if (Notification.permission == 'granted') {
    new Notification('Esta es una notificación', {
        icon: 'img/cerrar_sesion.png',
        body: 'Hiciste click en el BOTON'
    })
}