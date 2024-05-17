//SUMA DE DOS NUMEROS CON LAS OPERACIONES BASICAS
let num1= parseFloat(prompt("INTRODUCE EL PRIMER NUMERO:"))
let num2= parseFloat(prompt("INTRODUCE EL SEGUNDO NUMERO:"))
let oper= prompt("INTRODUCE LA OPERACION (+,-,*,/")
switch(oper){
    case "+":
        console.log(num1+num2);
        break;
    case "-":
        console.log(num1-num2);
        break;
    case "*":
        console.log(num1*num2);
        break;
    case "/":
        console.log(num1/num2);
        break;
    default:
        console.log("OPERACION INCORRECTO")
}