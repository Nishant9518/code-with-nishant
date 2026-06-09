// Temporal Dead Zone (TDZ) example
console.log(a);
var a = 10;

// Output:
// undefined

// Hoisting impact pert type
var a = 10; // ye do hisso me tut jata
var a = undefined;
a = 10;
console.log(nm);
var nm ="Nishant";
var x = 5;
{
    var x = 10; // var is function-scoped, so it will affect the outer variable
}
console.log(x); // Output: 10
let n = 4;
{
    let n = 8; // let is block-scoped, so it will not affect the outer variable
    console.log(n); // Output: 8
}
console.log(n); // Output: 4