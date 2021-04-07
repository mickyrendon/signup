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

function autocompletar(){
    var elemento = document.querySelectorAll("input")
    for(let i = 0; i < elemento.length; i++){
        elemento[i].setAttribute("autocomplete", "off");
    }
    return elemento;
}
// autocomplete();
elemento[i].style.backgroundColor = "red";

let inputs = '';


function onKeyDown(event) {
    const key = event.key; // "A", "1", "Enter", "ArrowRight".
    // var keysCode = event.which || event.keyCode;
    inputs = document.getElementById('test').value;

    console.log("Presionada: " + key);

    if( key == 116 ){
        // inputs.document.setAtribute.value('autocomplete', 'off')
        // console.log('f5 presionada');
        autocompletar()

    }
    // if(keysCode >= 65 && keysCode <= 90){
    //      console.log(String.fromCharCode(keysCode));
    // }
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