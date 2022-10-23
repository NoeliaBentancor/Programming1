window.addEventListener('load', inicio);

function inicio(){
document.getElementById("boton").addEventListener("click", proceso);
}

function proceso(){
	let dato = document.getElementById("comentarios").value;
	if (dato.toUpperCase().indexOf("BUENO")>=0){
		alert("Contiene bueno");
	}
	else {
		alert("No contiene bueno");
	}
}

	
