
//Imprima os números de um a dez no console:

/*for (let i = 1; i <=10; i++){
    console.log(i)
}*/


//Imprima os números de dez a um no console:

/*for (let i = 10; i>=1; i--){
    console.log(i)
}*/

//Imprima os números pares de 0 a 20 no console:

//for (let i = 0; i <= 20; i += 2){
 //   console.log(i)
//}

//*****outro tipo de resolução:
//for (let i = 0; i <= 20; i += 2){
 //   console.log(i)
//}


//Imprima os números ímpares de 10 a 30 no console:

// for (let i = 11; i <= 30; i+=2){
  //  console.log(i)
//}

// imprima os números de 100 a 0 decrementando de 5 em 5 no console:

//for (let i = 100; i >= 0; i-=5){
 //console.log(i)
//}

// imprima a tabuada de multiplicação do número 7, do 1 ao 10, no console.

/*let numero = 7;

for(let i = 1; i <=10; i++){
  console.log(`${numero} x ${i} = ${numero * i}`);
}*/


//solicite que o usuário digite um número no prompt e, em seguida, imprima os números pares até esse número no console.

//let numero = parseInt(prompt("digite um número"));
//for(let i = 0; i<= numero; i +=2){
  // console.log(i)
//}


//Solicite ao usuário que digite dois números e, em seguida, imprima os números entre esses números no console, em ordem crescente:

/*const numero1 = Number (prompt("digite o primeiro número"));
const numero2 = Number (prompt("digite o segundo número"));

for(let i = numero1; i<= numero2; i++){
  console.log(i);
}*/

/*if(numero1 > numero2) {
  for(let i = numero2; i < numero1; i++){
    console.log(i);
  }
}
else {
  for(let i = numero1; i < numero2; i++){
    console.log(i);
  }
}*/

/*const numero1 = Number (prompt("digite o primeiro número"));
const numero2 = Number (prompt("digite o segundo número"));
if(numero1 > numero2) {
  for(let i = numero2; i < numero1; i++){
    console.log(i);
  }
}
else {
  alert("o primeiro número deve ser maior que o segundo");
numero1 = Number(prompt("digite novamente o primeiro número"));
for(let i = numero2;i< numero1; i++){
  console.log(i);
}
}

desenvolva um programa que solicite ao usuário que digite um número e, em seguida, imprima no console a soma dos números ímpares entre 1 e esse número.*/

let numero = prompt("digite um número: ");
let somaImpares =  0;
for(let i = 1; i <= numero; i += 2){
  somaImpares += i;
}
console.log(`a soma dos números ímpares entre 1 e ${numero} é  ${somaImpares}`);

