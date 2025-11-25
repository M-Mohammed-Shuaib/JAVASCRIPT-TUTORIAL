var a =10
var b = a++
console.log(a);

var a =10
var b = a--
console.log(a);

// another post increment example
var a=10
var b=a++ //here b will get value of a before increment
console.log(b); //10
console.log(a); //11

var a=10
var b=a-- //here b will get value of a before decrement
console.log(b); //10
console.log(a); //9

// example for pre increment
var a=10
var b=++a //here a will be incremented first and then assigned to b
console.log(b);//11
console.log(a);//11

var a=10
var b=--a //here a will be decremented first and then assigned to b
console.log(b);
console.log(a);