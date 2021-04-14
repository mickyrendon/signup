// usuario y contrasena
// crear una funcion que guarde los valores ingresados de los prompt
//crear otra funcion para validar los datos ingresados
// let minChar  = ' ';

// funcion para capturar la tecla presionada
// function keydownCather(event) {

//     var keysCode = event.which || event.keyCode;

//     console.log(`Presionada la tecla: ${keysCode}`);
     
//     if(keysCode === 13){
//       console.log("Tecla ENTER");
//     }

//     if(keysCode >= 65 && keysCode <= 90){
//       console.log(String.fromCharCode(keysCode));
//     }

     
// }

// var inputTags = document.getElementsByTagName('input');
// inputTags.setAttribute.value = "autocomplete"

// function autocompletar(){
//     var elemento = document.querySelector("form");
//     // for(let i = 0; i < elemento.length; i++){
//     //     elemento[i].setAttribute("autocomplete", "off");
//     // }
//     elemento.autocomplete = 'off';
//     return elemento;
// }
// autocompletar()
// autocomplete();
// elemento[i].style.backgroundColor = "red";
var inputsValue = document.getElementById('name');
let inputLastN  = document.getElementById('last-name').value;

function value(){
    return inputsValue.value;
}


function onKeyDown(event) {
// captura tecla por tecla
    const key = event.key;
    console.log("Presionada: " + key);

    // es camelcase
    if(key == 'Enter'){
        console.log('tecla Enter presionada');
        return value();
    }

    
};


// function disableF5() { 
//     if ((e.which || e.keyCode) == 116 || (e.which || 
//         e.keyCode) == 82) e.preventDefault(); 

//         console.log('btn f5');
// };
// disableF5()
// newFunction();

// function newFunction() {
//     $(document).ready(() => {
//         $(document).on("keydown", disableF5);
//     });
// }

// function cleanForm(){
//     var element = document.getElementsByTagName('input');
    
//     if()
//     element.settAtribute('auto-complete', '')
    
// }
// function validator(){
//     // event.preventDefault()

//     // validando que el campo no esté vacio
//     // variable de multiples valores
//     // CREAR EL MAQUETADO
//     var inputRequires = document.getElementsByTagName('input').value;

//     inputRequires == "" ?
//         alert(`ingrese el ${inputRequires}`) 
//         : console.log('datos validos');

//     // validando la cantidad de caracteres ingresados
//     user.length <= 2 || password.length <= 2 ?(
//             console.log('ingresa dos o mas caracteres po'), alert('ingrese bien los datos')
//         ) : (
//             console.log('datos correctos')
//         );




//     // if user is NaN / 
// }
// validator();