'use strict';

const input = document.querySelector('.input_number');
const button = document.querySelector('.btn');
const parrafo = document.querySelector('.result');
const counter = document.querySelector('.counter');
let c = 0;

// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const r = getRandomNumber(100);
console.log('número aleatorio ' + r);

function printCounter(){
  counter.innerHTML = c;
}
//al pulsar el botón de prueba, acceder al contenido del input 
//y mostrarlo en la consola
function handleClick(){
 const userNumber = parseInt(input.value);
 console.log('número insertado' , userNumber);
 //comparar el número que el usuario ha escrito en el input 
 //con el número aleatorio y pintar el feeback correspondiente
    if(userNumber === r){
      parrafo.innerHTML = 'Has ganado!!!!';
    }
    else if(userNumber > r){
      parrafo.innerHTML = 'Demasiado alto';
    
    }
    else{
      parrafo.innerHTML = 'Demasiado bajo';
   
    }
    c=c+1;
    printCounter();
}
button.addEventListener('click', handleClick)
