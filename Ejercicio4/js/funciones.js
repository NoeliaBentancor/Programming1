// Diseñar una página que permita ingresar 2 números y según la selección de un radio
// button (+ - * /) realice la operación elegida.

window.addEventListener("load", inicio);

function inicio() {
    document.getElementById("botonConsultar").addEventListener("click", mostrarEnLista);
    //botonConsultar es el id del boton que pusimos en el HTML
}

function mostrarEnLista() {
    let numeroUno = document.getElementById("primero").value;
    //primero y segundo son el id del input que pusimos en el HTML
    let numeroDos = document.getElementById("segundo").value;
    let operacionElegida = obtenerOperacionElegida();
    let valorOperacion = obtenerValorOperacion(numeroUno, numeroDos, operacionElegida);
    let texto = numeroUno + " " + operacionElegida + " " + numeroDos + " = " + valorOperacion;
    agregarElementoALista(texto);
}

function obtenerOperacionElegida() {
    let operacionElegida = "";
    let operaciones = document.getElementsByName("operacion");
    //getElementsByName devuelve un array con todos los elementos que tengan el mismo name

    //Recorremos el array de todas las operaciones y vemos cuál esta seleccionada
    for (let i = 0; i < operaciones.length; i++) {
        if (operaciones[i].checked) {
            operacionElegida = operaciones[i].value;
        }
    }
    return operacionElegida;
}

function obtenerValorOperacion(numeroUno, numeroDos, operacionElegida) {
    //Eval realiza la operacion que se le pasa como string
    let resultado = eval(numeroUno + operacionElegida + numeroDos);
    return resultado;
}

function agregarElementoALista(elemento) {
    let lista = document.getElementById("idLista");
    let item = document.createElement("li");
    item.appendChild(document.createTextNode(elemento));
    lista.appendChild(item);
}