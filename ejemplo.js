function conteo()

let cantidad = parseFloat(document.getElementById("cantidad").value);
let nombre = (document.getElementById("nombre").value)

if(isNaN(cantidad)|| nombre ==""){
    alert ("Por favor, LLena todos los campos.");
    return;
}
if (cantidad > 10) { 
    resultadoElement.className = "alert alert-success mostrar";
} else {
    resultadoElement.className= "alert alert-danger mostrar"; 
} 


function mostrar(){
    var item= document.getElementById("form1");
    let resultadoElement = document.getElementById("name"); 
    resultadoElement.classList.add("mostrar"); 
    resultadoElement.className = "alert alert-success mostrar";
    }
    let resultadoElement = document.getElementById("name");
    resultadoElement.innerHTML = "Hola " + ", tu retiro ha sido retirado y has retirado: $" + cantidad
    resultadoElement.classList.add("mostrar");
    document.getElementById("Resultadobtn").addEventListener("click", mostrar);