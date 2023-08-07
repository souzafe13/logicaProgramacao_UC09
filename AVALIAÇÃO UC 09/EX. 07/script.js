/* 07 - Imagine que você precisa verificar se um número é positivo, negativo ou zero. Escreva um programa que solicite ao usuário que informe um número utilizando a função prompt. Utilize a estrutura condicional if, else if e else para verificar se o número é positivo, negativo ou zero e exibir uma mensagem correspondente no console. */

let num1 = Number(prompt("Insira um número qualquer:"));

if(num1 > 0){
    console.log(`Este número ${num1} é positivo!`)
} else if (num1 < 0){
    console.log(`Este número ${num1} é negativo!`)
} else {
    console.log(`Este número ${num1} é igual a zero `)
}
