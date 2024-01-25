//let numeroSecreto = generarNumeroSecreto();
let numeroSecreto=0;
let intentos = 0;
let listaNumerosSorteados=[];
let numeromaximo=10;


//let h2 = document.querySelector('h2');
//h2.innerHTML = 'Has agregado una nueva canción!';

console.log(numeroSecreto);
//hoisting 
//camelCase para el nombre de variables
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //cambiar una funcion verificar en donde la estamos llamando
    //alert es una ventana emergente para ingresar 
    //es parseInt convertir  de string a number
    // triple igual es para igualar en valor y tipo
    if (numeroDeUsuario === numeroSecreto) {
        //console.log('Acertaste el número! en '+intentos + ' veces');
        asignarTextoElemento('p','Acertaste el numero');
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.querySelector('#boton1').setAttribute('disabled', 'true');
}
    else{
        if(numeroDeUsuario>numeroSecreto)
        {
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','el numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    console.log(intentos);
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado=Math.floor(Math.random()*numeromaximo)+1;//retornar parametros, math.floor  es para tener la parte decimal
    if(listaNumerosSorteados.length==numeromaximo)
    {
        asignarTextoElemento('p','ya se sortearon todos');
        document.querySelector('#boton1').setAttribute('disabled', 'true');

    }else{
        if(listaNumerosSorteados.includes(numeroGenerado))
        {
            return generarNumeroSecreto();
        }
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja(){
    let valorCaja=document.querySelector('#valorUsuario');
    valorCaja.value='';
}
function condicionesIniciales()
{
    asignarTextoElemento('h1','Juego del IDS!');
    asignarTextoElemento('p',`Indica un número del 1 al `+numeromaximo);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}
function reiniciarJuego()
{
    limpiarCaja();
    condicionesIniciales();
    //querySelector es un selector generico, # indicar, setAttribute para agregar y necesita dos parametros que va a agregar y
    document.getElementById('boton1').removeAttribute('disabled');
    //document.querySelector('#boton1').setAttribute('enabled', 'true');
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
//${nombre} para concatenar una variable al momento de inprimir
condicionesIniciales();
