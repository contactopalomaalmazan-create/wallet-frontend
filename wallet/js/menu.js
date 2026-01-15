$(document).ready(function () {

  $('#btnDeposito').click(function (e) {
    e.preventDefault();
    $('#mensaje').text('Redirigiendo a Depósito...');
    setTimeout(function () {
      window.location.href = 'deposit.html';
    }, 1000);
  });

  $('#btnEnviar').click(function (e) {
    e.preventDefault();
    $('#mensaje').text('Redirigiendo a Enviar Dinero...');
    setTimeout(function () {
      window.location.href = 'sendmoney.html';
    }, 1000);
  });

  $('#btnMovimientos').click(function (e) {
    e.preventDefault();
    $('#mensaje').text('Redirigiendo a Últimos Movimientos...');
    setTimeout(function () {
      window.location.href = 'transactions.html';
    }, 1000);
  });

});
