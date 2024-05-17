let a=10;
let b=15;
let c=9;
let mayor;

if (a>=b && a>=c){
    mayor=a;
} else if (b>=a && b>=c){
    mayor=b;
} else {
    mayor=c;
}
console.log("El Numero mayor es: ", mayor);
