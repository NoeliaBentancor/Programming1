//  3) Diseñar una página que permita ingresar una palabra y al presionar un botón muestre en
// una tabla la palabra original y la indicación de si es palíndroma o no. Con cada nueva
// consulta se agrega la información en la tabla.

//La palabra es palíndroma si se lee igual de izquierda a derecha que de derecha a izquierda
window.addEventListener("load", inicio);

function inicio() {
    document.getElementById("botonConsultar").addEventListener("click", mostrarEnTabla);
    //botonConsultar es el id del boton que pusimos en el HTML
}

function mostrarEnTabla() {
    let palabra = document.getElementById("idPalabra").value;
    //idPalabra es el id del input que pusimos en el HTML
    let texto = generarTexto(palabra);
    agregarFilaEnTabla(palabra, texto);
}

function generarTexto(palabra) {
    let respuesta = "";
    if (esPalindroma(palabra)) {
        respuesta += " Es palindroma";
    } else {
        respuesta += " No es palindroma";
    }

    return respuesta;
}

function esPalindroma(palabra) {
    let palabraReversa = palabra.split("").reverse().join("");
    //La función split divide la cadena en un array de caracteres
    //La función reverse invierte el orden de los elementos del array
    //La función join une los elementos del array en una cadena
    //Por ejemplo , si palabra es "hola":
    //palabra.split("") devuelve ["h","o","l","a"]
    //palabra.split("").reverse() devuelve ["a","l","o","h"]
    //palabra.split("").reverse().join("") devuelve "aloh"

    let esPalindroma = false;

    if (palabra == palabraReversa) {
        esPalindroma = true;
    }

    return esPalindroma;
}


function agregarFilaEnTabla(pal, res) {
    let tablaPantalla = document.getElementById("idTabla");
    let fila = tablaPantalla.insertRow();
    let celdaIzq = fila.insertCell();
    celdaIzq.innerHTML = pal;
    let celdaDer = fila.insertCell();
    celdaDer.innerHTML = res;

}

//Otras opciones para determinar si es palíndroma

//Opción 1: invertir el string y luego compararla con la original
function invertir(palabra) {
    let nueva = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
        nueva = nueva + palabra[i];
    }
    return nueva;
}

function palindromoOpcionUno(palabra) {
    let res = "NO";
    if (palabra === invertir(palabra)) {
        res = "SI";
    }
    return res;
}