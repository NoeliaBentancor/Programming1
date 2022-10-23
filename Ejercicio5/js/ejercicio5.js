window.addEventListener('load', inicio);
let datos = [];
//Necesitamos un array para guardar los datos

function inicio() {
    document.getElementById("boton").addEventListener("click", proceso);
}

function proceso() {
    let numero = parseInt(document.getElementById("numero").value);
    agregar(numero);
    agregarFilaEnTabla(numero);
    document.getElementById("resultado").innerHTML = "El maximo es " + maximo() + " promedio " + promedio();

}

function agregar(valor) {
    datos.push(valor);
}

function maximo() {
    let max = datos[0];
    for (let i = 1; i < datos.length; i++) {
        if (datos[i] > max) {
            max = datos[i];
        }
    }
    return max;
}

function promedio() {
    let suma = 0;
    for (let i = 0; i < datos.length; i++) {
        suma += datos[i];
    }
    return suma / datos.length;
}



function agregarFilaEnTabla(dato) {
    let tablaPantalla = document.getElementById("tabla");
    let fila = tablaPantalla.insertRow();
    let celda = fila.insertCell();
    celda.innerHTML = dato;
}