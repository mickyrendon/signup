// usuario y contrasena
// crear una funcion que guarde los valores ingresados de los prompt
//crear otra funcion para validar los datos ingresadosd
let user     = prompt('ingrese su nombre de usuario');
let password = prompt('ingrese una clave');
// let minChar  = ' ';
function validator(){
    // validando que no el campo no esté vacio
    // variable de multiples valores
    var inputRequires = document.getElementsByTagName('input').value;

    inputRequires == "" ?
        alert(`ingrese el ${inputRequires}`) 
        : console.log('datos validos');

    // validando la cantidad de caracteres ingresados
    user.length <= 2 || password.length <= 2 ?(
            console.log('ingresa dos o mas caracteres po'), alert('ingrese bien los datos')
        ) : (
            console.log('datos correctos'), alert(`bienvenido ${user}`)
        );




    // if user is NaN / 
}
validator();