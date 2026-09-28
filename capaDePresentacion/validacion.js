// validacion.js

function mostrarErrorCampo(campo, elementoError, mensaje) {
    campo.classList.add("is-invalid");
    elementoError.textContent = mensaje;
}

function limpiarErrorCampo(campo, elementoError) {
    campo.classList.remove("is-invalid");
    elementoError.textContent = "";
}

function validarObligatorio(campo, elementoError, mensaje) {
    if (campo.value.trim() === "") {
        mostrarErrorCampo(campo, elementoError, mensaje);
        return false;
    }
    limpiarErrorCampo(campo, elementoError);
    return true;
}

function validarLongitud(campo, elementoError, min, max, mensaje) {
    const largo = campo.value.trim().length;
    if (largo < min || largo > max) {
        mostrarErrorCampo(campo, elementoError, mensaje);
        return false;
    }
    limpiarErrorCampo(campo, elementoError);
    return true;
}

function validarCorreo(campo, elementoError, mensaje) {
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexCorreo.test(campo.value.trim())) {
        mostrarErrorCampo(campo, elementoError, mensaje);
        return false;
    }
    limpiarErrorCampo(campo, elementoError);
    return true;
}

function validarTelefono(campo, elementoError, mensaje) {
    const regexTelefono = /^[0-9]{7,10}$/;
    if (!regexTelefono.test(campo.value.trim())) {
        mostrarErrorCampo(campo, elementoError, mensaje);
        return false;
    }
    limpiarErrorCampo(campo, elementoError);
    return true;
}

function validarSeleccion(campo, elementoError, mensaje) {
    if (campo.value === "") {
        mostrarErrorCampo(campo, elementoError, mensaje);
        return false;
    }
    limpiarErrorCampo(campo, elementoError);
    return true;
}

function validarGrupoRadio(radios, elementoError, mensaje) {
    const seleccionado = Array.from(radios).some(r => r.checked);
    if (!seleccionado) {
        elementoError.textContent = mensaje;
        return false;
    }
    elementoError.textContent = "";
    return true;
}

function validarCheckbox(campo, elementoError, mensaje) {
    if (!campo.checked) {
        mostrarErrorCampo(campo, elementoError, mensaje);
        return false;
    }
    limpiarErrorCampo(campo, elementoError);
    return true;
}

// Funcion principal que valida el formulario de Registro.
// Devuelve true si todos los campos son validos y false si no.
// El registro y el mensaje de bienvenida los maneja logicaPaciente.js
function validarFormularioRegistro() {

    const inputNombreCompleto = document.getElementById("nombreCompleto");
    const inputCorreoRegistro = document.getElementById("correoRegistro");
    const inputTelefonoRegistro = document.getElementById("telefonoRegistro");
    const selectTipoDocumento = document.getElementById("tipoDocumento");
    const inputNumeroDocumento = document.getElementById("numeroDocumento");
    const inputFechaNacimiento = document.getElementById("fechaNacimiento");
    const radiosGenero = document.getElementsByName("generoRegistro");
    const checkTerminos = document.getElementById("aceptaTerminos");

    const errorNombreCompleto = document.getElementById("errorNombreCompleto");
    const errorCorreoRegistro = document.getElementById("errorCorreoRegistro");
    const errorTelefonoRegistro = document.getElementById("errorTelefonoRegistro");
    const errorTipoDocumento = document.getElementById("errorTipoDocumento");
    const errorNumeroDocumento = document.getElementById("errorNumeroDocumento");
    const errorFechaNacimiento = document.getElementById("errorFechaNacimiento");
    const errorGeneroRegistro = document.getElementById("errorGeneroRegistro");
    const errorAceptaTerminos = document.getElementById("errorAceptaTerminos");

    const nombreValido = validarLongitud(inputNombreCompleto, errorNombreCompleto, 3, 60, "Escribe tu nombre completo (mínimo 3 caracteres).");
    const correoValido = validarCorreo(inputCorreoRegistro, errorCorreoRegistro, "Escribe un correo electrónico válido.");
    const telefonoValido = validarTelefono(inputTelefonoRegistro, errorTelefonoRegistro, "El teléfono debe tener entre 7 y 10 dígitos.");
    const tipoDocValido = validarSeleccion(selectTipoDocumento, errorTipoDocumento, "Selecciona un tipo de documento.");
    const numeroDocValido = validarObligatorio(inputNumeroDocumento, errorNumeroDocumento, "El número de documento es obligatorio.");
    const fechaValida = validarObligatorio(inputFechaNacimiento, errorFechaNacimiento, "La fecha de nacimiento es obligatoria.");
    const generoValido = validarGrupoRadio(radiosGenero, errorGeneroRegistro, "Selecciona un género.");
    const terminosValidos = validarCheckbox(checkTerminos, errorAceptaTerminos, "Debes aceptar los términos para continuar.");

    if (nombreValido && correoValido && telefonoValido && tipoDocValido &&
        numeroDocValido && fechaValida && generoValido && terminosValidos) {
        return true; // El formulario es valido, se puede registrar
    } else {
        alert("Por favor, complete correctamente el formulario.");
        return false; // Bloquea el envío del formulario
    }
}

function validarCamposRegistroAlCambiarFoco() {

    const inputNombreCompleto = document.getElementById("nombreCompleto");
    const inputCorreoRegistro = document.getElementById("correoRegistro");
    const inputTelefonoRegistro = document.getElementById("telefonoRegistro");
    const selectTipoDocumento = document.getElementById("tipoDocumento");
    const inputNumeroDocumento = document.getElementById("numeroDocumento");
    const inputFechaNacimiento = document.getElementById("fechaNacimiento");
    const radiosGenero = document.getElementsByName("generoRegistro");
    const checkTerminos = document.getElementById("aceptaTerminos");

    const errorNombreCompleto = document.getElementById("errorNombreCompleto");
    const errorCorreoRegistro = document.getElementById("errorCorreoRegistro");
    const errorTelefonoRegistro = document.getElementById("errorTelefonoRegistro");
    const errorTipoDocumento = document.getElementById("errorTipoDocumento");
    const errorNumeroDocumento = document.getElementById("errorNumeroDocumento");
    const errorFechaNacimiento = document.getElementById("errorFechaNacimiento");
    const errorGeneroRegistro = document.getElementById("errorGeneroRegistro");
    const errorAceptaTerminos = document.getElementById("errorAceptaTerminos");

    inputNombreCompleto.addEventListener("blur", () => validarLongitud(inputNombreCompleto, errorNombreCompleto, 3, 60, "Escribe tu nombre completo (mínimo 3 caracteres)."));
    inputCorreoRegistro.addEventListener("blur", () => validarCorreo(inputCorreoRegistro, errorCorreoRegistro, "Escribe un correo electrónico válido."));
    inputTelefonoRegistro.addEventListener("blur", () => validarTelefono(inputTelefonoRegistro, errorTelefonoRegistro, "El teléfono debe tener entre 7 y 10 dígitos."));
    selectTipoDocumento.addEventListener("blur", () => validarSeleccion(selectTipoDocumento, errorTipoDocumento, "Selecciona un tipo de documento."));
    inputNumeroDocumento.addEventListener("blur", () => validarObligatorio(inputNumeroDocumento, errorNumeroDocumento, "El número de documento es obligatorio."));
    inputFechaNacimiento.addEventListener("blur", () => validarObligatorio(inputFechaNacimiento, errorFechaNacimiento, "La fecha de nacimiento es obligatoria."));
    Array.from(radiosGenero).forEach(r => r.addEventListener("blur", () => validarGrupoRadio(radiosGenero, errorGeneroRegistro, "Selecciona un género.")));
    checkTerminos.addEventListener("blur", () => validarCheckbox(checkTerminos, errorAceptaTerminos, "Debes aceptar los términos para continuar."));
}

document.addEventListener("DOMContentLoaded", validarCamposRegistroAlCambiarFoco);
