// recordar que para acceder a la clase no se necesita el punto
let inputs = document.getElementsByClassName('inputs-txt');

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
    if(codigo == 32){
        alert('prohibido ingresar espacios en blanco');
        cleaner(); 
    };
};

// limpia el input que tiene focus en ese momento despues de clickear el spacebar...
let inputLastN  = '';

// verificar que funcione
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
    // let inptsRecorrido;

    //pusheando el valor de cada elemento del formulario
    for (let i = 0; i < inputs.length; i++) {

        data.push(inputsValue[i].value.trim());
    
    }
    data1 = data;
    arrayLength();
    validator();

    return data1;
}

function arrayLength(){
    // ciclo para agregar al array(lastValue) los elementos del array(data1) que su length es mayor que 0 o que no esten vacios.
    for(i = 0; i < data1.length; i++){
        data1[i].length == 0 ? console.log('valores vacios') :
        (lastValue.push(data1[i]),console.log(`valor ${lastValue[i]}`));
    }
}

// VALIDADORES

function validator(){
    // event.preventDefault()

    // validando que el campo no esté vacio
    
    // if(data1[i].length == 0){
        //inputs.styleClass = 'nombre de la clase con esos estilos'
    // }

    // var inputRequires = inputs.value;

    /* inputRequires == "" ?
        alert(`ingrese el ${inputRequires}`) 
        : console.log('datos validos'); */

    // validando la cantidad de caracteres ingresados en los dos primeros inputs
    data1[0].length <= 2 || data1[1].length <= 2 ?(
        // en vez de un alert aplicar estilos a los inputs y agregar un span como mensaje
        alert('ingresa dos o mas caracteres'),
        cleaner()) : (
            console.log('bien hecho, ingresaste mas de dos caracteres')
        );
}


// submit onclik
function sending(){
    // validator();
        
    lastValue.length == 0 ? alert('por favor complete el formulario'):
    (consoleMsg = console.table(lastValue),
    console.log('valores de los inputs ' + lastValue));

    // codigo solo para probar que los datos del formulario se guardan en un array  y se muestran en un alert
    alert(`valores obtenidos del formulario \n ${arrayInputs()}`)
};