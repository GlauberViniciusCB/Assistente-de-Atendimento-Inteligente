function login(){
    const email = document.getElementById('emailLoginUsuario').value;
    const senha  = document.getElementById('senha').value;
    if (email.trim() && senha.trim()) {
        alert('Acessou O Sistema');
    }else{
        alert("Falha Ao Acessar")
    }
}






