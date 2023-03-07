// 2

let a1 = 5 % 3,
    a2 = 3 % 5,
    a3 = 5 + "3",
    a4 = "5" - 3,
    a5 = 75 + "кг",
    a6 = 785 * 653,
    a7 = 100 / 25,
    a8 = 0 * 0,
    a9 = 0 / 2,
    a10 = 89 / 0,
    a11 = 98 + 2,
    a12 = 5 - 98,
    a13 = (8 + 56 * 4) / 5,
    a14 = (9 - 12) * 7 / (5 + 2),
    a15 = +"123",
    a16 = 1 || 0,
    a17 = false || true,
    a18 = true > 0;


console.log(typeof a1, a1);
console.log(typeof a2, a2);
console.log(typeof a3, a3);
console.log(typeof a4, a4);
console.log(typeof a5, a5);
console.log(typeof a6, a6);
console.log(typeof a7, a7);
console.log(typeof a8, a8);
console.log(typeof a9, a9);
console.log(typeof a10, a10);
console.log(typeof a11, a11);
console.log(typeof a12, a12);
console.log(typeof a13, a13);
console.log(typeof a14, a14);
console.log(typeof a15, a15);
console.log(typeof a16, a16);
console.log(typeof a17, a17);
console.log(typeof a18, a18);

// 3

let width = 23,
    height = 10,
    SPryam = width * height;

console.log (typeof SPryam, SPryam);

// 4

let h = 10;
let p = 3.14 ;
let VCilindra = h * p * a7 * a7 / 4; 

console.log (typeof VCilindra, VCilindra);

// 5

let r = 5;
let SKruga = p * r **2;

console.log (SKruga);

// 6 

let a = 5;
let b = 7;
let h2 = 10;
let STrap = (a + b)/2*h2;

console.log (STrap, typeof STrap);

// 7

let S = 2000000;
let pr = 10;
let y = 5;
let Pereplata = S - (S/100* (pr * y));

console.log (Pereplata, typeof STrap);

// 8 

{
let a = 8;
let b = 3;
let s = 16;
let x1 = (16 + 2 * b - a) / 2;
let x2 = (b * 15 - a) / (6 - b);
let x3 = 23780 / (3 + a + b);

x2.toFixed();


console.log (x1.toFixed(1), typeof x1);
console.log (x2.toFixed(1), typeof x2);
console.log (x3.toFixed(1), typeof x3);
 }


