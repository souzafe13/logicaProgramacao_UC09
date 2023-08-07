/*Imagine que você está indo ao supermercado e precisa fazer algumas operações matemáticas. Escreva um programa que defina duas variáveis numéricas representando o valor total das suas compras e o valor que você tem disponível para gastar. Em seguida, realize as operações de soma, subtração, multiplicação, divisão entre elas e exiba o resultado de cada operação no console. */

let valorPraGastar = Number(prompt("Qual é o valor que posso gastar?"));
let valorDasCompras = Number(prompt("Qual é o valor total das compras?"));
let operacao = prompt("Operação de: \n soma (+) \n subtração (-) \n multiplicação (*) \n divisão (/)");
let resultado
switch (operacao) {
    case "+":
    resultado = valorPraGastar + valorDasCompras    
    break;
    case "-":
    resultado = valorPraGastar - valorDasCompras    
    break;
    case "*":
    resultado = valorPraGastar * valorDasCompras    
    break;
    case "/":
    resultado = valorPraGastar / valorDasCompras    
    break;

    default:
    resultado     
        
} console.log(resultado)