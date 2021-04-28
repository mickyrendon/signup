// recordar que para acceder a la clase no se necesita el punto
let inputs = document.getElementsByClassName('inputs-txt');

// obtiene su valor luego de invocar a 'arrayInputs()'
let data1;
let consoleMsg;
let lastValue = [];

// validador booleano
let isValid = false;

// validador de caracteres alfabeticos //  optimizar el codigo para las validaciones
const alfa = new RegExp('^[A-Z]+$', 'i');

//obtengo en un array el valor del atributo name de cada input para luego con un loop agregarlo al value de cada input 
window.onload = function gettingVal(){
    let names = [];

    for(i=0; i < inputs.length; i++){
        names.push(inputs[i].name);
    }

// agregando el value a los inputs
    for(i=0; i<names.length; i++){
        inputs[i].placeholder = names[i];
        if(inputs[2]){
            inputs[2].placeholder = `${'@'}${names[2]}`
        }
    }
    return names;
}

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

// verificar que funcione, falla la primera vez, despues funciona correctamente
function cleaner(){
    
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


// MEJORAR! no limpia el array despues de mostrar un alert o mensaje de error...
function arrayLength(){
    // ciclo para agregar al array(lastValue) los elementos del array(data1) que su length es mayor que 0 o que no esten vacios.
    for(i = 0; i < data1.length; i++){
        data1[i].length == 0 ? console.log('valores vacios') :
        (lastValue.push(data1[i]),console.log(`valor ${lastValue[i]}`));
    }
}

// VALIDADORES

function validator(){
    // nombre y apellido
    let dataName   = data1[0];
    let dataLN     = data1[1];
    // contrasena
    let psw        = data1[3];
    let pswConfirm = data1[4];
    // el input 'email' viene con su validacion incluida ademas del atributo required y lo mas seguro es verificarlo en el servidor
    // let dataEmail = data1[3];

// aplicarlo al validador de gmail
    if(!dataName || !dataLN){
        isValid = false;
        // aplicar ccs en un span para mostrar lo que hay en el console
        console.log('nombre o apellido incorrecto');
    }else{
        // aplicar css en la caja cuando sea verdadero
        //inputs.styleClass = 'nombre dela clase con esos estilos'

        console.log('data1 es true');
        // validando la cantidad de caracteres ingresados en los dos primeros inputs
        if(dataName.length <= 2 || dataLN.length <= 2){
            // en vez de un alert aplicar estilos a los inputs y agregar un span como mensaje
            isvalid = false;
            alert('ingresa dos o mas caracteres');
            // no lo ejecuta
            cleaner();
        }else{
            console.log('bien hecho, ingresaste mas de dos caracteres');

            if(!alfa.test(dataName) || !alfa.test(dataLN)){
                isValid = false;
                alert('solo letras de la a-z minusculas o mayusculas');
                cleaner();
            }else{
                console.log('validado correctamente hasta el input usuario');

                // validador de contrasena, validar para que la confirmacion se igual a la contrasena
                if(psw.length < 8 || pswConfirm.length < 8){
                    isValid = false;
                    alert('ingrese mas de 7 caracteres');
                    cleaner();
                }else{
                isValid = true;
                console.log('valores alfabeticos correctos y aceptados')
            }
            }
            
            

        } 
    }
    
}
// verificando si el formulario esta vacio, no funcion, optimizarlo
function verifier(){
    const checker = lastValue;
    if(checker.length == 0){
        alert('por favor complete el formulario');
    }else{
        console.log('puede continuar llenando el formulario');
    }
}

// submit onclik
function sending(){
    // validator();
    // codigo para verificar el formulario vacio, usar si no hay caso con la funcion verifier
/*         
    lastValue.length == 0 ? alert('por favor complete el formulario'):
    (consoleMsg = console.table(lastValue),
    console.log('valores de los inputs ' + lastValue)); */
    // verifier()
    // validator()
    // codigo solo para probar que los datos del formulario se guardan en un array  y se muestran en un alert
   console.table(`valores obtenidos del formulario \n ${arrayInputs()}`)
};