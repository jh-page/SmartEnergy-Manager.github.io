//VALIDACION DE FORMULARIO
const form = document.querySelector('form[name="main_form"]');
    form.addEventListener('submit', (event) => {
        const fnombre = form.elements['fcontactanos'].value;


        if(!fcontactans) {
            event.preventDefault();
            alert('Por favor, complete los datos del formulario');
        }

    });
    
//CREAR LA FUNCION VALIDAR EMAIL (ValidateEmail)
        function ValidateEmail(email){
            const re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]/
            return re.test(String(email).toLocaleLowerCase());
        }
