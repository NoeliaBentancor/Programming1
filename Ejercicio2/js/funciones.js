// 2) Diseñar una página que permita ingresar un número y al presionar un botón muestre en
// una lista cada número ingresado y la indicación de si es par o impar.

window.addEventListener("load", inicio);

function inicio() {
    document.getElementById("botonConsultar").addEventListener("click", mostrarEnLista);
    //botonConsultar es el id del boton que pusimos en el HTML
}

function mostrarEnLista() {
    let numero = document.getElementById("idNumero").value;
    //idNumero es el id del input que pusimos en el HTML
    let texto = generarTexto(numero);
    agregarElementoALista(texto);
}

function generarTexto(numero) {
    let resultado = numero;

    if (esPar(numero)) {
        return resultado + " es par";
    } else {
        return resultado + " es impar";
    }
}

function esPar(numero) {
    //si el numero es par, el resto de dividirlo por 2 es 0
    return numero % 2 == 0;
}

function agregarElementoALista(elemento) {
    let lista = document.getElementById("idLista");
    let item = document.createElement("li");
    item.appendChild(document.createTextNode(elemento));
    lista.appendChild(item);
}