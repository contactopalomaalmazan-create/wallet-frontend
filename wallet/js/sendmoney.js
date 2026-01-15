$(document).ready(function () {

  /* ===== SALDO ===== */
  let saldo = parseFloat(localStorage.getItem("saldo")) || 0;
  $("#saldo").text("$" + saldo);

  /* ===== CONTACTOS ===== */
  let contactos = JSON.parse(localStorage.getItem("contactos")) || [];

  contactos.forEach((contacto, index) => {
    $("#contacto").append(
      `<option value="${index}">
        ${contacto.nombre} - ${contacto.alias}
      </option>`
    );
  });

  /* ===== MOSTRAR BOTÓN ENVIAR ===== */
  $("#contacto").on("change", function () {
    let seleccionado = $(this).val();

    if (seleccionado !== "") {
      $("#btnEnviar").slideDown();
    } else {
      $("#btnEnviar").slideUp();
    }
  });

  /* ===== ENVIAR DINERO ===== */
  $("#btnEnviar").on("click", function () {

    let monto = parseFloat($("#monto").val());
    let saldoActual = parseFloat(localStorage.getItem("saldo")) || 0;

    if (isNaN(monto) || monto <= 0) {
      mostrarAlerta("Ingresa un monto válido", "danger");
      return;
    }

    if (monto > saldoActual) {
      mostrarAlerta("Saldo insuficiente", "danger");
      return;
    }

    // Descontar saldo
    saldoActual -= monto;
    localStorage.setItem("saldo", saldoActual);

    // Guardar movimiento
    let movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];

    movimientos.push({
      tipo: "envio",
      monto: monto,
      fecha: new Date().toLocaleString()
    });

    localStorage.setItem("movimientos", JSON.stringify(movimientos));

    mostrarAlerta("Envío realizado con éxito 💸", "success");

    // Redirigir al menú
    setTimeout(() => {
      window.location.href = "menu.html";
    }, 2000);
  });

});

/* ===== FORMULARIO CONTACTO ===== */
function mostrarFormulario() {
  $("#formContacto").slideDown();
}

function guardarContacto() {
  let nombre = $("#nombre").val();
  let cbu = $("#cbu").val();
  let alias = $("#alias").val();
  let banco = $("#banco").val();

  if (!nombre || !cbu || !alias || !banco) {
    alert("Completa todos los campos");
    return;
  }

  let contactos = JSON.parse(localStorage.getItem("contactos")) || [];

  contactos.push({ nombre, cbu, alias, banco });
  localStorage.setItem("contactos", JSON.stringify(contactos));

  alert("Contacto guardado correctamente");
  location.reload();
}

/* ===== ALERTAS BOOTSTRAP ===== */
function mostrarAlerta(mensaje, tipo) {
  $("#alert-container").html(`
    <div class="alert alert-${tipo}" role="alert">
      ${mensaje}
    </div>
  `);
}
