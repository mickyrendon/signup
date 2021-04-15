// usuario y contrasena
// crear una funcion que guarde los valores ingresados de los prompt
//crear otra funcion para validar los datos ingresados
// let minChar  = ' ';

// funcion para capturar la tecla presionada
let inputs = document.getElementsByTagName('INPUT');
let inputLastN  = '';

// obtiene su valor luego de invocar a 'arrayInputs()'
let data1;
let consoleMsg;
let lastValue = [];
const arrayInputs = () => {
    //guardando datos en un array
    let data = [];

    let inputsValue = inputs;

    for (let i = 0; i < inputs.length; i++) {
        // definir si trim es necesario para el valor de los inputs o directamente hacer una validacion para que no se acepten caracteres con espacio dentro del input
        data.push(inputsValue[i].value.trim());

    }
    // return inputsValue;
    data1 = data;

    // funciona!...desestimar el input de submit
    
    for(i = 0; i < data1.length; i++){
        data1[i].length == 0 ? console.log('igual que 0') :
        (lastValue.push(data1[i]),console.log('mayor que 0'));
    }
    // mostrando los resultados por consola
    console.log('valores de los inputs ' + lastValue);
    // console.log(`valores de los inputs ${lastValue}`);
    consoleMsg = console.table(lastValue);

    return data;
}
// invocacion de prueba, en html descomentar el submit para volverlo a la normalidad y que funcione el evento onclick de dicho boton
   arrayInputs() 






function onKeyDown(event) {
    // captura el nombre de cada tecla
    const key = event.key;
    //captura el codigo de cada tecla
    var codigo = event.which || event.keyCode;
    console.log("Presionada: " + key);

    // es camelcase
    if(key == 'Enter'){
                
        return console.log('tecla Enter presionada');
    }

    //capturando el valor de 'spacebar', despues de mostrar el alert limpiar el input
    codigo == 32 ? (alert('prohibido ingresar espacios en blanco'), ) :
    console.log('teclas correctas');
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


// submit onclik
function sending(){
    alert(`valores obtenidos del formulario \n ${arrayInputs()}`)
}