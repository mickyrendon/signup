// recordar que para acceder a la clase no se necesita el punto
var inputs = document.getElementsByClassName('inputs-txt');
var arrayLoop = [];
var loop = loop();

// estas variables obtienen su valor luego de invocar a la funcion arrayInputs()
var data1;
var consoleMsg;
var lastValue = [];

// validador booleano para la funcion validator()
var isValid  = false;
// validador de caracteres alfabeticos (pattern)
const alfa   = new RegExp('^[A-Z]+$', 'i');

// variable para la funcion clear()
// limpia el input que tiene focus en ese momento despues de clickear el spacebar...
var inputLastN  = '';

//funciones invocadas despues de cargado el html
window.onload = function (){
    // variable para el checkbox
    let checkbox = document.getElementById('checkbox');
        checkbox.addEventListener('change', checkboxCheck, false);
    
    // usando la variable loop para que solo se muestren los 5 valores que tiene y que no se aniadan mas valores al array, como lo hacia antes al llamar la funcion aca que al array de esta funcion se le sumaban cinco elementos mas cada vez que se llamaba
    loop;
    gettingVal();
    
}

//ciclo que obtiene cada elemento input y lo usa en la funcion checkbox
function loop (){
    for(i=0; i < inputs.length; i++){
        
        arrayLoop.push(inputs[i]);

    }
    
    let inputFocus;
    let inputFocusVal;

    // style del focus
    for (i = 0; i < arrayLoop.length; i++) {

        arrayLoop[i].addEventListener("focus", function() {
            // Guardamos la ID del elemento al que hacemos 'focus'
            inputFocus    = this;
            // inputFocusVal = inputFocus.value.length;
            inputFocus.className = 'focus'; 

            // usar la condicion que mas se acomode a las validaciones... 
            // if(inputFocusVal == 1){
                
            //     inputFocus.className = 'focus-alert';
            //     console.log('el focus alert');

            // }else{

            //     inputFocus.className = 'focus'; 
            //     console.log('el focus');

            // }
            // return console.log('retornando: ' + inputFocusVal);
        });
      
    };
    return arrayLoop;
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
//   usar un 'then' para despues de que se use el cleaner en un input, volver a llamar esta funcion para que traiga los placeholder de cada elemento
    return names;
}

// capturar las teclas presionadas
function onKeyDown(event) {
    // captura el nombre de cada tecla
    const key = event.key;
    //captura el codigo de cada tecla
    var codigo = event.which || event.keyCode;

    //la definicion del key (Enter) es camelcase
    if(key == 'Enter'){
        return console.log('tecla Enter presionada');
    }
    
    //capturando el valor de 'spacebar'.
    if(codigo == 32){
        alert('prohibido ingresar espacios en blanco');
        // no funciona a la primera vez, corregir
        cleaner(); 
    }

    return console.log(`'Presionada: ' ${key}`);
};


//limpia el input que tenga autofocus// verificar que funcione, falla la primera vez, despues funciona casi correctamente, porque al limpiar el campo deja el puntero con un spacio, pero no importta porque la funcion arrayinputs toma los valores sin espacios. pero ese espacio me complica la vida en los inputs de password...
function cleaner(){
//    checkear que puede ser el problema de porque al limpiar el campo me queda un espacio en blanco
    inputLastN.value = ''; 
    
}
 
// funcion para guardar los valores de cada input en un array para luego ser validados por la funcion validator()
const arrayInputs = () => {
    //guardando datos en un array la idea es tenerlos para mostrarlos por si se necesita
    let data = [];

    //pusheando el valor de cada elemento del formulario
    for (let i = 0; i < arrayLoop.length; i++) {

        data.push(arrayLoop[i].value.trim());
    
    }

    return data;
}

// validaciones de campos
function validator(){
    let data       = arrayInputs();
    // arrayInputs();
    // nombre y apellido
    let dataName   = data[0];
    let dataLN     = data[1];
    // contrasena
    let psw        = data[3];
    let pswConfirm = data[4];
    // el input 'email' viene con su validacion incluida ademas del atributo required y lo mas seguro es verificarlo en la base de datos,ya que estas validaciones no son suficientes// 
    // let dataEmail = data1[3];

    // accediendo a cada input text del form para aplicarles estilos
    let name          = document.getElementById('name');
    let lastName      = document.getElementById('last-name');
    let user          = document.getElementById('user');
    let password      = document.getElementById('password');
    let confirm       = document.getElementById('confirmation');

    let spanFullName  = document.getElementById('name-lastn-alert');
    let spanPassword  = document.getElementById('password-alert');

    if(!dataName || !dataLN){
        
        isValid                    = false; 

        name.className             = 'focus-alert';
        lastName.className         = 'focus-alert';

        spanFullName.style.display = 'flex';
        spanFullName.innerHTML     = 'nombre o apellido incorrecto';

    }else{
        // aplicar css en la caja cuando sea verdadero
        //inputs.styleClass = 'nombre dela clase con esos estilos'
        console.log('evaluando la cantidad de caracteres de nombre y apellido');
        spanFullName.style.display = 'none';


        // validando la cantidad de caracteres ingresados en los dos primeros inputs
        if(dataName.length == 1 || dataLN.length == 1){

            isvalid                    = false;
            
            name.className             = 'focus-alert';
            lastName.className         = 'focus-alert';
            
            spanFullName.style.display = 'flex';
            spanFullName.innerHTML     = 'ingresa dos o mas caracteres';
        // no lo ejecuta la primera vez
            cleaner();

        }else{
            
            console.log('bien hecho, ingresaste mas de dos caracteres');
            spanFullName.style.display = 'none';


            if(!alfa.test(dataName) || !alfa.test(dataLN)){
            
                isValid                    = false;

                name.className             = 'focus-alert';
                lastName.className         = 'focus-alert';
                
                spanFullName.style.display = 'flex';
                spanFullName.innerHTML     = 'solo letras de la a-z minusculas o mayusculas'
                cleaner();

            }else{
                
                console.log('validado correctamente hasta el input usuario');
                spanFullName.style.display = 'none';

                // validador de contrasena
                if(psw.length < 8 || pswConfirm.length < 8){

                    isValid                    = false;

                    password.className         = 'focus-alert';
                    confirm.className          = 'focus-alert';

                    spanPassword.style.display = 'flex';
                    spanPassword.innerHTML     = 'ingrese mas de 7 caracteres'
                    cleaner();

                }else{

                    console.log('validando correctamente hasta contrasena.length');
                    spanFullName.style.display = 'none';
                    
                    if(psw !== pswConfirm){

                        isvalid                    = false;

                        password.className         = 'focus-alert';
                        confirm.className          = 'focus-alert';
                        
                        spanPassword.style.display = 'flex';
                        spanPassword.innerHTML     = 'las contrasenas no coinciden';

                    }else{

                        isValid                    = true;
                        spanPassword.style.display = 'none';
                        console.log('validaciones aprobadas')

                    }
                    
                    }
                }
        } 
    }
    // loopAlert()
}

// checkbox
function checkboxCheck(){
    // inputs de contrasenas // son las mismas variables de la funcion validator
    // toma los valores del array loop de la funcion
    let psw        = arrayLoop[3];
    let pswConfirm = arrayLoop[4];

    // let psw = loop;
    // let pswConfirm = loop;

    if(checkbox.checked){

        psw.type        = 'text';
        pswConfirm.type = 'text';

    }else{
        
        psw.type        = 'password';
        pswConfirm.type = 'password';

    }    
    return this;
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
