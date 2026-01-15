$(document).ready(function () {
  $('#loginForm').submit(function (e) {
    e.preventDefault();

    const email = $('#email').val();
    const password = $('#password').val();

    if (email === '' || password === '') {
      $('#alert-container').html(`
        <div class="alert alert-danger">
          Debes completar todos los campos
        </div>
      `);
      return;
    }

    $('#alert-container').html(`
      <div class="alert alert-success">
        Inicio de sesión exitoso
      </div>
    `);

    setTimeout(() => {
      window.location.href = 'menu.html';
    }, 1500);
  });
});


