//Formulario Medico 

let base_de_pacientes = [];

function paciente(nombre, apellido, correo, grupo_sanguineo, factor) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.grupo_sanguineo = grupo_sanguineo;
    this.factor = factor;
}

function capturar() {
     
    let nombre_capturado = document.getElementById("nombre").value;
    let apellido_capturado = document.getElementById("apellido").value;
    let correo_capturado = document.getElementById("correo").value;
    let grupo_sanguineo_capturado = document.getElementById("grupo_sanguineo").value;
    let factor_capturado = document.getElementById("factor").value;

    //Agrega al paciente a la tabla
    function agrega_datos_paciente() {
        let container_datos = document.getElementById("container_datos");
        let datos = document.createElement("div");
        datos.className = "datos";
        container_datos.append(datos);
        datos.innerHTML = `<h3> ${nuevo_paciente.nombre}</h3>
                            <h3> ${nuevo_paciente.apellido}</h3>
                            <h3> ${nuevo_paciente.correo}</h3>
                            <h3> ${nuevo_paciente.grupo_sanguineo}</h3>
                            <h3> ${nuevo_paciente.factor}</h3>
                            `;
    }

    //Agrega al paciente al array base_de_pacientes
    function agregar_paciente() {
        base_de_pacientes.push(nuevo_paciente);
        console.log(base_de_pacientes);
    }

    if (nombre_capturado != "" && apellido_capturado != "" && correo_capturado != "") {
        nuevo_paciente = new paciente(nombre_capturado, apellido_capturado, correo_capturado, grupo_sanguineo_capturado, factor_capturado);
        console.log(nuevo_paciente);
        agregar_paciente();
        agrega_datos_paciente();
    }
}