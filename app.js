//saco el numero secreto para que pueda generar el numero desde antes y luego ver si sirve
let numeroSecreto=0;
let numeroIntentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;
console.log(numeroSecreto);

//primer function con parametros una forma escalable y mas facil leerlo
function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

//es para botones
//es el nombre que le pongo y ahora por ser boton realiza una funcion
function verificarIntento() {
    //esto es para tomar los elementos de la caja de texto de la pagina
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario == numeroSecreto){
        //aqui llamo el parrafo para que muestre el mensaje, tiene relacion con el primer function
        asignarTextoElemento('p',`Acertaste el numero en ${numeroIntentos} ${(numeroIntentos===1)?"vez" : "veces"}`);
        //para remover el disable que es desabilitado el boton, cuando termine de jugar puedo utilizar ese boton
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{

        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','el numero es menor');
        }else{
            asignarTextoElemento('p','el numero es mayor')
        }  
        numeroIntentos++;
        limpiarCaja();
    }
    
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}



//escribo function y luego la opcion con el cuadradito, es para hacer le primer function
function generarNumeroSecreto() {
    //esto es para crear numeros secretos dentro de una función
    //return para que retorne ese valor y genere el numero secreto
    //Math.floor es para retornar solo los decimales y el +1 es para generar esa aproximacion
    //Math.random es para generar el numero random
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
        //si el numero generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    //asignaciones de texto, se hace con la primera function
    asignarTextoElemento('h1','Juego secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al 10`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}

//reiniciar juego de forma que se reinicie todo
function reiniciarJuego(){
    //limpiar cajaja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //generar el numero aleatorio
    //deshabilitar el boton del nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    //inicializar el numero de intentos
}

condicionesIniciales();





