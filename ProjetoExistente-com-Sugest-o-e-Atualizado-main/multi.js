document.querySelector('form').addEventListener('submit', function(e) {
   e.preventDefault();
   
   const email = document.getElementById('email').value;
   const cpf = document.getElementById('cpf').value;
   const senha = document.getElementById('senha').value;
   
   function validarEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
   }
   
   function validarCPF(cpf) {
      var Soma;
      var Resto;
      Soma = 0;
    if (cpf == "00000000000") return false;
  
    for (i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;
  
      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(cpf.substring(9, 10)) ) return false;
  
    Soma = 0;
      for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;
  
      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(cpf.substring(10, 11) ) ) return false;
      return true;
  
   }
   
   function validarSenha(senha) {
      if(senha.length < 6) {
         return false;
      } else {
         return true;
      }
   }
   
   document.querySelector('form').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const cpf = document.getElementById('cpf').value;
      const senha = document.getElementById('senha').value;
      
      let formularioValido = true;
      
      if (!validarEmail(email)) {
         alert('Email inválido');
         formularioValido = false;
      }
      
      if (!validarCPF(cpf)) {
         alert('CPF inválido');
         formularioValido = false;
      }
      
      if (!validarSenha(senha)) {
         alert('A senha deve ter pelo menos 6 caracteres');
         formularioValido = false;
      }
      
      if (formularioValido) {
         alert("Formulario valido")
      }
   });
});

   function sugestoes(){
    var lista = document.getElementById("lista");
    var sugest = document.getElementById("sugestao").value;
    
    if (sugest.length == 0){
        alert("Digite o nome do prato!");
        return;
    }

    var criaLi = document.createElement("li");

    const criaTexto = document.createTextNode(sugest);
    criaLi.appendChild(criaTexto);
    lista.appendChild(criaLi);
   }