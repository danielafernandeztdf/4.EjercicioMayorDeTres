// •Desarrolle un algoritmo que dados tres
//números determine cuál es el mayor de los
//tres

let numero1 : number = 22; 
let numero2 : number = 16; 
let numero3: number = 5; 

 if (numero1 > numero2) {
   if (numero1 > numero3) {
 console.log ("El numero mayor es: " + numero1); 

 } else {
   console.log ("El numero mayor es: " + numero3);
 }
} else if (numero2 > numero3) {
   console.log ("El numero mayor es: " + numero2); 
} else {
  console.log ("El numero mayor es: " +numero3); 
   }
