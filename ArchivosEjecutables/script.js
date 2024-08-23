/* WHAT IS THE SUM OF NUMBERS FROM 0 TO 'n'?
   FOR EXAMPLE: SUM OF THE FIRST 100 WHOLE NUMBERS?
*/

// NOMBRE CORRECTO DE NUESTRA VARIABLE: 'let total'.

let total = 0;
// let numero = 5;

// PARTE FINAL:

// SOLICITAR AL USUARIO QUE INTRODUZCA EL VALOR DE 'n'.

let numero = prompt("Ingrese un número:");


for (let i = 0; i <= numero; i++)
{
    total += i; // total += i ES LO MISMO QUE ESCRIBIR: total = total + i; 
}

// NUESTRA VARIABLE 'numero' EQUIVALE A LO QUE NOSOTROS LLAMAMOS 'n'.

console.log(`THE SUM OF NUMBERS FROM 0 TO ${numero} IS: ${total}`);


