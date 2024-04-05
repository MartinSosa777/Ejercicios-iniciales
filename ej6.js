const leer = require("prompt-sync" )();
//*un juego donde hay 10 intentos para intentar adivinar el número secreto del programa, si el usuario adivina entonces el programa termina caso contrario al quedarse sin intentos el programa avisa la derrota del usuario
//*
const numero_secreto = 8
const RANGO_MAXIMO = 10
let numUsuario="def numero usuario"
for (let cantDeintentos = 0; cantDeintentos < RANGO_MAXIMO ; cantDeintentos++) {
    console.log("Decime un numero:");
    numUsuario=leer();
    if (numUsuario == numero_secreto) {
     console.log("Adivinaste");
     cantDeintentos= 10    
}    else{
    console.log("Segui intentando");
}}
