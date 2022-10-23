window.addEventListener('load', inicio);

let nombres = [];
//Necesitamos un array para guardar los datos
function inicio() {
    document.getElementById("boton").addEventListener("click", proceso);
}

function proceso() {
    let nombre = document.getElementById("nombre").value;
    if (esNuevo(nombre)) {
        agregarElementoEnLista(nombre);
        nombres.push(nombre);
    } else {
        alert("repetido!");
    }
}

function esNuevo(dato) {
    //Includes devuelve true si el dato está en el array
    return !nombres.includes(dato);
}

function agregarElementoEnLista(texto) {
    let node = document.createElement("LI");
    let textnode = document.createTextNode(texto);
    node.appendChild(textnode);
    document.getElementById("lista").appendChild(node);
}