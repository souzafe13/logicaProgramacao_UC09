/*5. Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é positivo, negativo ou igual a zero. Utilize uma estrutura de decisão if, else if e else para verificar o valor do número e exibir a mensagem de alerta correspondente no console.*/

let num = Number(prompt("Digite um número"));

if(num > 0){
    console.log(`Este número ${num} é positivo`)
} else if (num < 0){
console.log(`Este número ${num} é negativo`)
} else {
    console.log(`Este número ${num}  é igual a zero`)
}
