// logicaPaciente.js
// Conecta el formulario de registro (seccion 3) con la capa de
// acceso a datos, a traves de la fachada gestionarPacientes.
// Primero valida con validarFormularioRegistro() (validacion.js);
// solo si todo es valido registra al paciente y muestra la
// ventana de bienvenida.

const formRegistro = document.getElementById("formRegistro");

formRegistro.addEventListener("submit", (e) => {
  e.preventDefault();

  const formularioValido = validarFormularioRegistro();
  if (!formularioValido) {
    return; // Detiene el registro si la validacion falla
  }

  // Se capturan los valores del formulario
  const nombreCompleto = document.getElementById("nombreCompleto").value.trim();
  const correo = document.getElementById("correoRegistro").value.trim();
  const telefono = document.getElementById("telefonoRegistro").value.trim();
  const tipoDocumento = document.getElementById("tipoDocumento").value;
  const numeroDocumento = document.getElementById("numeroDocumento").value.trim();
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  const generoMarcado = document.querySelector('input[name="generoRegistro"]:checked');
  const genero = generoMarcado ? generoMarcado.value : "";

  const paciente = gestionarPacientes.registrarPaciente(
    nombreCompleto,
    correo,
    telefono,
    tipoDocumento,
    numeroDocumento,
    fechaNacimiento,
    genero
  );

  console.log("Paciente registrado en el sistema:", paciente);

  mostrarBienvenida(paciente);
});

// Cuando la persona cierra la bienvenida, se limpia el formulario
// y cualquier mensaje de error que haya quedado visible.
document.getElementById("modalBienvenida").addEventListener("hidden.bs.modal", () => {
  formRegistro.reset();
  formRegistro.querySelectorAll(".is-invalid").forEach(campo => campo.classList.remove("is-invalid"));
  formRegistro.querySelectorAll(".form-text.text-danger").forEach(error => error.textContent = "");
});

// Muestra la ventana "¡Bienvenid@ a Clínica Brote!" con el
// primer nombre y el correo de la persona que se registro.
function mostrarBienvenida(paciente) {
  const primerNombre = paciente.nombreCompleto.split(" ")[0];

  // Se arma el texto con textContent para no insertar HTML
  // escrito por el usuario directamente en la pagina.
  const texto = document.getElementById("textoBienvenida");
  texto.textContent = primerNombre + ", te enviamos un enlace de verificación a ";
  const correo = document.createElement("strong");
  correo.textContent = paciente.correo;
  texto.appendChild(correo);
  texto.appendChild(document.createTextNode(" para confirmar tu registro."));

  const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById("modalBienvenida"));
  modal.show();
}
