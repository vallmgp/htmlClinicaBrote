class GestionarPacientes {
  constructor(repoPaciente) {
    this.repoPaciente = repoPaciente;
  }

  registrarPaciente(nombreCompleto, correo, telefono, tipoDocumento, numeroDocumento, fechaNacimiento, genero) {
    const id = this.repoPaciente.siguienteId();
    const paciente = new Paciente(id, nombreCompleto, correo, telefono, tipoDocumento, numeroDocumento, fechaNacimiento, genero);
    this.repoPaciente.agregar(paciente);
    return paciente;
  }

  listarPacientes() {
    return this.repoPaciente.obtenerTodos();
  }

  buscarPaciente(id) {
    return this.repoPaciente.buscarPorId(id);
  }

  buscarPacientePorCorreo(correo) {
    return this.repoPaciente.buscarPorCorreo(correo);
  }
}

const gestionarPacientes = new GestionarPacientes(pacienteRepo);
