//Faça um programa que leia cinco números e informe o maior.

/*let maior = Math.max(78, 12, 113, 55, 13);
console.log(maior);
*/

var valor = 1
let nValor = 0
let outroValor 
let maior = 0   


while(valor<=5){
     outroValor = parseInt(prompt());
if(maior < outroValor){
    maior = outroValor
}
    valor++;
} 
console.log(maior)