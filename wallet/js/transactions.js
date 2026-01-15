$(document).ready(function () {

  let movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];

  if (movimientos.length === 0) {
    $("#listaMovimientos").html("<p>No hay movimientos registrados</p>");
    return;
  }

  movimientos.forEach(mov => {
    $("#listaMovimientos").append(`
      <div class="border p-2 mb-2">
        <strong>Tipo:</strong> ${formatearTipo(mov.tipo)} <br>
        <strong>Monto:</strong> $${mov.monto} <br>
        <strong>Fecha:</strong> ${mov.fecha}
      </div>
    `);
  });

});

function formatearTipo(tipo) {
  if (tipo === "envio") return "Envío de dinero";
  if (tipo === "deposito") return "Depósito";
  return "Movimiento";
}
