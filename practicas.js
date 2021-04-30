// recordar que para acceder a la clase no se necesita el punto
let inputs = document.getElementsByClassName('inputs-txt');

// estas variables obtienen su valor luego de invocar a la funcion arrayInputs()
let data1;
let consoleMsg;
let lastValue = [];

// validador booleano para la funcion validator()
let isValid  = false;
// validador de caracteres alfabeticos (pattern)
const alfa   = new RegExp('^[A-Z]+$', 'i');

// variable para la funcion clear()
// limpia el input que tiene focus en ese momento despues de clickear el spacebar...
let inputLastN  = '';


//funciones invocadas despues de cargado el html
window.onload = function (){
    // variable para el checkbox
    let checkbox = document.getElementById('checkbox');
        checkbox.addEventListener('change', checkboxCheck, false);
    
    gettingVal();
}

//obtengo en un array el valor del atributo name de cada input para luego con un loop agregarlo al value de los input 
function gettingVal(){

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
    console.log(`'Presionada: ' ${key}`);

    //la definicion del key (Enter) es camelcase
    if(key == 'Enter'){
        return console.log('tecla Enter presionada');
    }
    
    //capturando el valor de 'spacebar'.
    if(codigo == 32){
        alert('prohibido ingresar espacios en blanco');
        // no funciona a la primera vez, corregir
        // cleaner(); 
    };
};

//limpia el input que tenga autofocus// verificar que funcione, falla la primera vez, despues funciona casi correctamente, porque al limpiar el campo deja el puntero con un spacio, pero no importta porque la funcion arrayinputs toma los valores sin espacios
function getFocused(){
    let elements = inputs;
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("focus", function() {
        // Guardamos la ID del elemento al que hacemos 'focus'
        inputLastN = this;
        console.log('elemento focus');     
        elements[i].className = 'focus';
        });
    };
}
function cleaner(){
   
    getFocused()
    inputLastN.value = ''
}

// funcion para guardar los valores de cada input en un array para luego ser validados por la funcion validator()
const arrayInputs = () => {
    //guardando datos en un array la idea es tenerlos para mostrarlos por si se necesita
    let data        = [];

    let inputsValue = inputs;

    //pusheando el valor de cada elemento del formulario
    for (let i = 0; i < inputs.length; i++) {

        data.push(inputsValue[i].value.trim());
    
    }
    data1 = data;
    // arrayLength();
    validator();

    return data1;
}

// validaciones de campos
function validator(){
    // nombre y apellido
    let dataName   = data1[0];
    let dataLN     = data1[1];
    // contrasena
    let psw        = data1[3];
    let pswConfirm = data1[4];
    // el input 'email' viene con su validacion incluida ademas del atributo required y lo mas seguro es verificarlo en la base de datos,ya que estas validaciones no son suficientes// 
    // let dataEmail = data1[3];

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
            // no lo ejecuta la primera vez
            cleaner();

        }else{
            
            console.log('bien hecho, ingresaste mas de dos caracteres');

            if(!alfa.test(dataName) || !alfa.test(dataLN)){
            
                isValid = false;
                
                // cambiar el alert por un span con stiloss
                alert('solo letras de la a-z minusculas o mayusculas');
                cleaner();

            }else{
                
                console.log('validado correctamente hasta el input usuario');

                // validador de contrasena
                if(psw.length < 8 || pswConfirm.length < 8){

                    isValid = false;

                    // cambiar el alert por un span con stiloss
                    alert('ingrese mas de 7 caracteres');
                    cleaner();

                }else{

                    console.log('validando correctamente hasta contrasena.length');
                    
                    if(psw !== pswConfirm){

                        isvalid = false;
                        
                        // cambiar el console por un span con stiloss
                        console.log('la confirmacion es incorrecta');
                        console.log(`${psw} ${pswConfirm} ' no son correctos' `);

                    }else{

                        isValid = true;
                        console.log('valores alfabeticos correctos y aceptados')

                    }
                    
                    }
                }
        } 
    }
    
}

// checkbox// si funciona pero en el navegador me tira error
function checkboxCheck(){
    // inputs de contrasenas // son las mismas variables de la funcion validator
    let psw        = inputs[3];
    let pswConfirm = inputs[4];

    if(checkbox.checked){

        psw.type        = 'text'
        pswConfirm.type = 'text'

    }else{
        
        psw.type        = 'password'
        pswConfirm.type = 'password'

    }    
}

// submit onclik
function sending(){
    // codigo solo para probar que los datos del formulario se guardan en un array  y se muestran en un alert
    arrayInputs();
    // validator()
    /* 
    if(validator()){
    } */
    // return console.table(`'valores obtenidos del formulario' \n ${lastValue}`)
    return console.table(lastValue)
};



//FUNCION EXTRA!

// MEJORAR! no limpia el array despues de mostrar un alert o mensaje de error...la idea es que despues de mostrar un mensaje de error o alert el input al que se le esta haciendo focus se limpie y a la vez se limpie ese mismo valor en el array
function arrayLength(){
    // ciclo para agregar al array(lastValue) los elementos del array(data1) que su length es mayor que 0 o que no esten vacios.
    for(i = 0; i < data1.length; i++){
        // operador ternario, lo usé a proposito para ponerlo en practica, ya que por buenas practicas es mejor usar un solo estilo de condicionales
        data1[i].length == 0 ? console.log('valores vacios') :
        (lastValue.push(data1[i]), console.log(`valor ${lastValue[i]}`));
    }
}
