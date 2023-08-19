import { barcelona, londres, paris, roma } from './ciudades.js';

let enlaces = document.querySelectorAll('a');
let tituloContenido = document.getElementById('titulo');
let subtituloContenido = document.getElementById('subtitulo');
let parrafoContenido = document.getElementById('parrafo');
let precioContenido = document.getElementById('precio');

enlaces.forEach(function (enlace){
    enlace.addEventListener('click', function(){
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        })

        this.classList.add('active');

        let contenido = viajeContenido(this.textContent);

        tituloContenido.innerHTML = contenido.titulo;
        subtituloContenido.innerHTML = contenido.subtitulo;
        parrafoContenido.innerHTML = contenido.parrafo;
        precioContenido.innerHTML = contenido.precio;

    });
});

function viajeContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Londres': londres,
        'París': paris,
        'Roma': roma
    };
    return contenido[enlace]
}