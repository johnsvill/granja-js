/*var btnSaludar = document.getElementById('btnSaludar');
//var txtNombre = document.getElementById('txtNombre');
var txtBase = document.getElementById("btnBase");
var txtExponente = document.getElementById("txtExponente");
//boton.addEventListener("click", potencia);*/

/*function potencia() {
    var base = document.getElementById("txtBase");
    var potencia = document.getElementById("txtExponente");
    var resultado = 1;
    for (var i = 1; i <= potencia.value; i++) {
        console.log("i");
        resultado = resultado * base.value;
    }
    alert("El resultado es: " + resultado);
}*/

/*btnSaludar.addEve0tListener('click', function() {
   var resultado = 1;
   for(var i = 1; i <= txtExponente.value; i++){
       resultado = resultado * txtBase.value;
   }
   alert('El resultado es ' + resultado);
});*/
document.addEventListener('keydown', movimiento);
var fondo = document.getElementById('fondo');
var lapiz = fondo.getContext('2d');
var x = 0;
var y = 0;

const DIMENSION = 80;
const LEFT = 37;
const UP = 38;
const DOWN = 40;
const RIGHT = 39;
const ENTER = 13;

var tecla = {
    LEFT: LEFT,
    UP: UP,
    DOWN: DOWN,
    RIGHT: RIGHT,
    ENTER: ENTER,
}

var tile = { //Clase con 3 propiedades
    url: './img/tile.png',
    imagen: Image,
    cargaOk: false
}
tile.imagen = new Image(); //Se instancia un nuevo objeto de tipo imagen
tile.imagen.src = tile.url;
tile.imagen.addEventListener('load', function() {
    tile.cargaOk = true;
    dibujar(); //Esto es un evento para detectar una carga del lado de la página
});

var cerdo = {
    url: './img/cerdo.png',
    imagenC: Image,
    cargaOk: false
}
cerdo.imagenC = new Image();
cerdo.imagenC.src = cerdo.url;
cerdo.imagenC.addEventListener('load', function() {
    cerdo.cargaOk = true;
    dibujar(); //Esto es un evento para detectar una carga del lado de la página
});

var vaca = {
    url: './img/vaca.png',
    imagenV: Image,
    cargaOk: false
}
vaca.imagenV = new Image();
vaca.imagenV.src = vaca.url;
vaca.imagenV.addEventListener('load', function() {
    vaca.cargaOk = true;
    dibujar(); //Esto es un evento para detectar una carga del lado de la página
});

var llave = {
    url: './img/llave.png',
    imagenLl: Image,
    cargaOk: false
}
llave.imagenLl = new Image();
llave.imagenLl.src = llave.url;
llave.imagenLl.addEventListener('load', function() {
    llave.cargaOk = true;
    dibujar(); //Esto es un evento para detectar una carga del lado de la página
});

function dibujar() {
    if (tile.cargaOk == true) //Se valida si el fondo está cargado para cargar las demás imagenes
    {
        lapiz.drawImage(tile.imagen, 0, 0);
        dibujarVacas(aleatorio(10, 1));
        dibujarCerdos(aleatorio(10, 1));
        dibujarLlave();
    }
}

function dibujarVacas(numero) {
    for (i = 1; i <= numero; i++) {
        lapiz.drawImage(vaca.imagenV, aleatorio(5, 0) * DIMENSION, aleatorio(5, 0) * DIMENSION);
    }
}

function dibujarCerdos(numero) {
    for (i = 1; i <= numero; i++) {
        lapiz.drawImage(cerdo.imagenC, aleatorio(5, 0) * DIMENSION, aleatorio(5, 0) * DIMENSION);
    }
}

function dibujarLlave() {
    x = aleatorio(5, 0);
    y = aleatorio(5, 0);
    lapiz.drawImage(llave.imagenLl, x * DIMENSION, y * DIMENSION);
}

function aleatorio(maximo, minimo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo; //Random genera números aleatorios
}

function movimiento(evento) {
    switch (evento.keyCode) {
        case tecla.LEFT:
            x = x - 1;
            dibujar();
            break;
        case tecla.RIGHT:
            x = x + 1;
            dibujar();
            break;
        case tecla.UP:
            y = y - 1;
            dibujar();
            break;
        case tecla.DOWN:
            y = y + 1;
            dibujar();
            break;
    }
}

console.log(fondo);