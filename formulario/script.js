function validaFormulario() {
    const nome = document.querySelector('#nome');
    const email = document.querySelector('#email');

   document.addEventListener('submit', (e) => {
       e.preventDefault();
        if(!nome.value || !email.value) {
            console.log('Por favor, preencha os campos obrigatórios(*)');
        }
   });

    
}

validaFormulario();