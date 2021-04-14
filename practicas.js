// usuario y contrasena
// crear una funcion que guarde los valores ingresados de los prompt
//crear otra funcion para validar los datos ingresados
// let minChar  = ' ';

// funcion para capturar la tecla presionada
var inputsValue;
let inputLastN  = '';

function value(){
    // hacer que se vean los datos en un array
    return inputsValue = document.getElementsByTagName('form')[0].value;
}


function onKeyDown(event) {
    // captura tecla por tecla
    const key = event.key;

    console.log("Presionada: " + key);

    // es camelcase
    if(key == 'Enter'){
        return console.log(`tecla Enter presionada \n valor del input ${value()}`);
    }
};

// 

// function cleanForm(){
//     var element = document.getElementsByTagName('input');
    
//     if()
//     element.settAtribute('auto-complete', '')
    
// }


// validador de valores  MEJORAR
function validator(){
    // event.preventDefault()

    // validando que el campo no esté vacio
    // variable de multiples valores
    // CREAR EL MAQUETADO
    var inputRequires = document.getElementsByTagName('input').value;

    inputRequires == "" ?
        alert(`ingrese el ${inputRequires}`) 
        : console.log('datos validos');

    // validando la cantidad de caracteres ingresados
    user.length <= 2 || password.length <= 2 ?(
            console.log('ingresa dos o mas caracteres po'), alert('ingrese bien los datos')
        ) : (
            console.log('datos correctos')
        );




//     // if user is NaN / 
}
validator();