window.addEventListener('load', inicio);
let oculto = Math.trunc(Math.random() * 99+1); // genera random entre 1 y 100

function inicio(){

document.getElementById("boton").addEventListener("click", proceso);
}
function proceso(){
	let dato = parseInt(document.getElementById("numero").value);
	let resp = resultado(dato);
	if (resp !="ok"){
		agregarElementoEnLista(resp);
	}
	else {
		alert("Ganó!");
	}
}

function resultado(dato) {
	let res = "ok";
	if (dato > oculto){
		res = "El número "+dato+ " es más grande que el buscado";
	}
	if (dato < oculto){
		res = "El número "+ dato+ " es más chico que el buscado";
	}
	
	return res;
}

function agregarElementoEnLista(texto){
    
     let node = document.createElement("LI");
     
     let  textnode = document.createTextNode(texto);
    
     node.appendChild(textnode);
   
     document.getElementById("lista").appendChild(node);
}

