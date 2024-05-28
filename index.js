document.addEventListener("DOMContentLoaded",()=>{

const formulario = document.querySelector('form');


//const input = document.querySelector('#password');
//const mensaje = "campo obligatorio";

const mostrarError = (input,mensaje)=>{

    const divPadre = input.parentNode;

    const errorText = divPadre.querySelector('.error-text');
    divPadre.classList.add ('error');
    errorText.innerText = mensaje;
}


    const eliminarError = input =>{
        const divPadre = input.parentNode;
        divPadre.classList.remove('error');
        const errorText = divPadre.querySelector('.error-text');
        errorText.innerText = '';
    }


formulario.querySelectorAll('input').forEach(input =>{
    //Se activa cuando un valor de un elemento del formulario cambia y se sale
    input.addEventListener('change', () =>{
        //obtener el valor del campo seleccionado
        const valor = input.value.trim();//elimina cualquier espacio en blanco al prinicipio y final del valor obtenido
        if(valor !== ''){
            eliminarError(input);
        }
    });
})

function isEmail(email){
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegular.test(email);
}
//VALIDAR EMAIL
function validarEmail(campoId, mensaje){
    const campo = document.getElementById(campoId);
    const email = campo.value.trim();

    if(email == ''){
        mostrarError(campo, 'El correo electronico es obligatorio');
        return false
    }else if(!isEmail (email)){
        mostrarError(campo, mensaje);
    }else{
        eliminarError(campo);
        return true
    }
}
//VALIDAR NOMBRE
function validarNombre(campoId, mensaje){
    const campo = document.getElementById(campoId);
    const value = campo.value.trim();

    if(value == ''){
        mostrarError(campo, mensaje);
        return false;
    }else{
        eliminarError(campo)
        return true;
    }
}
//VALIDAR APELLIDO
function validarApellido(campoId, mensaje){
    const campo = document.getElementById(campoId);
    const value = campo.value.trim();

    if(value == ''){
        mostrarError(campo, mensaje);
        return false;
    }else{
        eliminarError(campo)
        return true;
    }
}

//VALIDAR CAMPOS, si estan vacios o completos

function validarCampo(campoId, mensaje){
    const campo = document.getElementById(campoId);
    const value = campo.value.trim();

    if(value == ''){
        mostrarError(campo, mensaje);
        return false;
    }else{
        eliminarError(campo)
        return true;
    }
}

const validarFormulario = () =>{
    let validar = true;
    validar = validarEmail('email', 'El correo electronico no es valido') && validar;
    validar = validarCampo('password', 'La contraseña es obligatoria') && validar;
    validar = validarNombre('nombre',"El nombre es obligatorio")&& validar;
    validar = validarApellido('apellido', "El apellido es obligatrio") && validar;
    validar;
    return validar;
}

formulario.addEventListener('submit', event => {
    event.preventDefault();
    if(!validarFormulario()){
        event.preventDefault();
        console.log("El formulario no es valido");
    }else {
        event.preventDefault();
        console.log("El formulario es valido...");
    }
})

})