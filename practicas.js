// usuario y contrasena
// crear una funcion que guarde los valores ingresados de los prompt
//crear otra funcion para validar los datos ingresados
// let minChar  = ' ';

// funcion para capturar la tecla presionada
let inputs = document.getElementsByTagName('INPUT');
let inputLastN  = '';

const arrayInputs = () => {
    //guardando datos en un array
    let data = [];

    var inputsValue = inputs;
    for (let i = 0; i < inputs.length; i++) {
        data.push(inputsValue[i].value);
    }
    // return inputsValue;
    return data;
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


// rest
function rest(...argument){
    let array1 = argument;

    console.log(array1);
}
// encontrar como pasarle los datos del array de la variable 'array inputs' 
let parametros = rest();
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
// validator();



function sending(){
    console.log('enviando data');
    rest();
}