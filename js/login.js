document.addEventListener("DOMContentLoaded", () => {

    function accesoPermitido(){
        alert("Accesso permitido");
    }

    function accesoDenegado(){
        alert("Acceso denegado");
    }

    function validarPassword(password){
        return (password.length >= 6);
    }

    function validarEmail(email){
        return (email != "");
    }

    function login(password, email){
        if ((validarPassword(password)) && (validarEmail(email))){
            accesoPermitido();
            location.href = "index.html";
        } else {
            accesoDenegado();
        }
    }

    const btnEnviar = document.getElementById("btnEnviar");

    btnEnviar.addEventListener("click", () => {
        let password = document.getElementById("password").value;
        let email = document.getElementById("email").value;
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        login(password, email);

    });
})