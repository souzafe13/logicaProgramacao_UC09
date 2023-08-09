// é interessante que a função tenha o nome/represente o que ela faz
// função é uma relação entre duas variáveis

/*function imprimirNoConsole(){
    console.log("Olá, jovem!");
}

imprimirNoConsole(); // *** isso é "chamar a função" ****/

// == ex. = {02}

// function imprimirUmNumero(num){    // ******** o "num", neste caso, é o parâmetro
//     console.log(`o número é: ${num}`)
// }
// imprimirUmNumero(2);
// imprimirUmNumero(4);
// imprimirUmNumero(6);

// Desafio: crie uma função que receba o nome do usuário no prompt e imprima no console: "seu nome é:"

// let nome = prompt("Qual é seu nome?");

// function qualOSeuNome (nome){
//     console.log(`Seu nome é: ${qualOSeuNome}`)
// }
// qualOSeuNome(nome);   

//Escreva uma função que imprima no console o dobro de um número a partir do que foi definido na chamada da função (direto no programa).

// function imprimirODobro (num){
// console.log(num * 2)
// }
// imprimirODobro(10);


// Usando o Math.pow
//Escreva uma função que imprima no console a potência de um número a ele mesmo a partir donumero que foi definido na chamada da função (direto no programa)

// function imprimirPotencia (numero) {
//     var potencia = Math.pow(numero, numero)
//     console.log(`O número ${numero} elevado a ele mesmo é: ${potencia}`)
// }
// imprimirPotencia(2);

// Potência com expoente diferente da base

// function imprimirPotencia (base, expoente) {
//     var potencia = Math.pow(base, expoente)
//     console.log(`O número ${base} elevado a ${expoente} é: ${potencia}`)
// }
// imprimirPotencia(2,5);

// const numeroAleatorio = function() { // a função está dentro de uma variável, logo, não precisa de nome. É uma função anônima.
//     console.log(Math.random())
// }
// numeroAleatorio();
// numeroAleatorio();
// numeroAleatorio();
// numeroAleatorio();

// function repretirNumeros(numero) {
//     for(let i = 0; i < 10; i++){
//         console.log(numero)
//     }
// }
// var numero = prompt ("Digite um número");

// repretirNumeros(numero);

//Escreva uma função que multiplique três números:

function multipliqueTresNumeros (numero1, numero2, numero3) {
console.log(numero1 * numero2 * numero3)
}

multipliqueTresNumeros(3,2,2);