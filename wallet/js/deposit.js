$(document).ready(function () {

  let saldo = Number(localStorage.getItem('saldo')) || 0;
  $('#saldo').text('$' + saldo);

  $('#btnDepositar').click(function () {
    const monto = Number($('#monto').val());

    if (monto <= 0) {
      $('#alert-container').html(`
        <div class="alert alert-danger">
          Ingresa un monto válido
        </div>
      `);
      return;
    }

    saldo += monto;
    localStorage.setItem('saldo', saldo);

    $('#saldo').text('$' + saldo);
    $('#leyendaDeposito').text(`Monto depositado: $${monto}`);

    $('#alert-container').html(`
      <div class="alert alert-success">
        Depósito realizado con éxito
      </div>
    `);

    setTimeout(function () {
      window.location.href = 'menu.html';
    }, 2000);
  });

});
