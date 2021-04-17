// usuario y contrasena
//crear otra funcion para validar los datos ingresados

// let minChar  = ' ';

// variables globales

// lograr que pueda seleccionar los inputs con esta clase
let inputs = document.getElementsByClassName('.inputs-txt');

// obtiene su valor luego de invocar a 'arrayInputs()'
let data1;
let consoleMsg;
let lastValue = [];


// capturar las teclas presionadas
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
    
    //capturando el valor de 'spacebar'.
    codigo == 32 ? (alert('prohibido ingresar espacios en blanco'), cleaner() ):
    console.log('teclas correctas');
};

// limpia el input que tiene focus en ese momento despues de clickear el spacebar...
let inputLastN  = '';

function cleaner(){
    // falla la primera vez, despues funciona correctamente
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("focus", function() {
        // Guardamos la ID del elemento al que hacemos 'focus'
        inputLastN = this;
        console.log('elemento focus');
        });
    };

    return inputLastN.value = ''
}

// funcion para agregar los valores de los inputs a un array
const arrayInputs = () => {
    //guardando datos en un array
    let data = [];
    let inputsValue = inputs;

    //pusheando el valor de cada elemento del formulario
    for (let i = 0; i < inputs.length; i++) {

        data.push(inputsValue[i].value.trim());
    }
    data1 = data;
    arrayLength();

    return data1;
}
// invocacion de prueba, en html descomentar el submit para volverlo a la normalidad y que funcione el evento onclick de dicho boton
   arrayInputs() 


function arrayLength(){
    // ciclo para agregar al array(lastValue) los elementos del array(data1) que su length es mayor que 0 o que no esten vacios.
    for(i = 0; i < data1.length; i++){
        data1[i].length == 0 ? console.log('valores vacios') :
        (lastValue.push(data1[i]),console.log(`valor ${lastValue[i]}`));
    }
}

// VALIDADORES

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




}
// validator();


// submit onclik
function sending(){
    
    lastValue.length == 0 ? alert('por favor complete el formulario'):
    (consoleMsg = console.table(lastValue),
    console.log('valores de los inputs ' + lastValue));

    alert(`valores obtenidos del formulario \n ${arrayInputs()}`)
};