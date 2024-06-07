document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();

        const usuario = document.getElementById('usuario').value.trim();
        const contrasena = document.getElementById('contrasena').value.trim();
        const loginMessage = document.getElementById('login-message');
        
        loginMessage.innerHTML = '';

        // Validar campos
        if (usuario === '') {
            loginMessage.innerHTML = '<div class="alert alert-danger" role="alert">Usuario vacío</div>';
            return;
        }
        if (contrasena === '') {
            loginMessage.innerHTML = '<div class="alert alert-danger" role="alert">Contraseña vacía</div>';
            return;
        }

        // Si todo está correcto, mostrar mensaje de éxito
        loginMessage.innerHTML = '<div class="alert alert-success" role="alert">¡Inicio de sesión exitoso!</div>';

        // Redirigir al usuario a otra página después de un tiempo
        setTimeout(function() {
            window.location.href = '../index.html'; 
        }, 2000);
    });
});
