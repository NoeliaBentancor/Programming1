window.addEventListener('load', inicio);
let encendida = false;

function inicio(){
	document.getElementById("interruptor").addEventListener("click", proceso);
}
function proceso(){
	
	encendida = encendida == false;
	
	let rutaInterruptor = "img/interruptor_";
	let rutaBombita = "img/lampara_";
	
	if(encendida){
		rutaInterruptor += "1.png";
		rutaBombita += "1.png";
	}
	else{
		rutaInterruptor += "0.png";
		rutaBombita += "0.png";
	}
	
	document.getElementById("lampara").src = rutaBombita;
	document.getElementById("interruptor").src = rutaInterruptor;

}

function mostrarEnPantalla(textoMostrar){
	document.getElementById("resultado").innerHTML = textoMostrar;
}	
