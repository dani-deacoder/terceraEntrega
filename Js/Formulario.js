



let datos = [];
function guardarDatos() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let dni = document.getElementById("dni").value;
    let cuenta = document.getElementById("cuenta").value;
    datos.push(nombre, apellido, edad, direccion, telefono, email, dni, cuenta);
    alert(datos);
}
function validar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let dni = document.getElementById("dni").value;
    let cuenta = document.getElementById("cuenta").value;
    if (nombre == "" || apellido == "" || edad == "" || direccion == "" || telefono == "" || email == "" || dni == "" || cuenta == "") {
        alert("Debe completar todos los campos");
    } else {
        guardarDatos();
    }
}


document.getElementById("validar").addEventListener("click", validar);







