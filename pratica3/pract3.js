//Calcular el factorial de un numero de un ingreso

let numero= parseInt(prompt("Ingresa un número para calcular su factorial: ")) //10
let factorial= 1
for(let i=1; i<=10; i++){
    factorial*=i;
}
console.log("El factorial de: ",numero, "es: ", factorial);
