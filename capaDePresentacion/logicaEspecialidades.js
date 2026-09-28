// logicaEspecialidades.js
// Filtro y descripcion de especialidades medicas (seccion 2)

document.addEventListener('DOMContentLoaded', () => {
/* ---------------------------------------------------------
     Filtro de especialidades (sección 2)
  --------------------------------------------------------- */
  const descripciones = {
    "todas": "Selecciona una especialidad para conocer en qué consiste.",
    "Terapia Neural": "La Terapia Neural regula el sistema nervioso mediante anestésicos locales aplicados en puntos específicos del cuerpo.",
    "Quiropraxia": "La Quiropraxia ajusta la columna y las articulaciones para aliviar el dolor y mejorar la movilidad.",
    "Fisioterapia": "La Fisioterapia recupera el movimiento y la función del cuerpo después de una lesión, cirugía o enfermedad.",
    "Nutrición y Dietética Terapéutica": "La Nutrición y Dietética Terapéutica diseña planes de alimentación para tratar y prevenir enfermedades."
  };

  const botonesEspecialidad = document.querySelectorAll("#listaEspecialidades button");
  const tarjetasMedico = document.querySelectorAll(".tarjeta-medico");
  const descripcionEl = document.getElementById("descripcionEspecialidad");
  const mensajeSinResultados = document.getElementById("mensajeSinResultados");

  botonesEspecialidad.forEach(boton => {
    boton.addEventListener("click", () => {
      botonesEspecialidad.forEach(b => b.classList.remove("active"));
      boton.classList.add("active");

      const filtro = boton.dataset.filtro;
      descripcionEl.textContent = descripciones[filtro] || "Esta especialidad también hace parte de nuestro equipo médico.";

      let visibles = 0;
      tarjetasMedico.forEach(tarjeta => {
        const coincide = filtro === "todas" || tarjeta.dataset.especialidad === filtro;
        tarjeta.classList.toggle("d-none", !coincide);
        if (coincide) visibles++;
      });
      mensajeSinResultados.hidden = visibles !== 0;
    });
  });
});
