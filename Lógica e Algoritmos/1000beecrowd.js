var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

// Variáveis
let A = parseInt(lines.shift());
let B = parseInt(lines.shift());

// Cálculo
let X = A+B;

// Retorno
console.log("X = "+X);